# Cloudflare Access で管理画面を守る手順

管理画面（`/admin`）と API（`/api`）を、公開サイトを巻き込まずに閉じるための手順。
2026-09-27 に waysidejapan で実際にやった内容と、踏んだ罠をそのまま残す。

**前提**：サイトは Cloudflare Pages。管理画面は同じプロジェクトの中にある（別プロジェクトを立てるとビルド枠を二重に食うため）。

---

## 全体像

守りは2段構え。**前段の Access だけに頼らない。**

```
ブラウザ
  │  ① Cloudflare Access（前段）… ログインしていなければここで止まる
  ▼
Pages Functions
  │  ② functions/_middleware.ts … JWT の署名・aud・exp を自分で検証
  ▼
/admin, /api
```

②が要る理由は、カスタムドメインに Access をかけても **`*.pages.dev` の既定ホストへ直接叩く経路が残る**から。ヘッダの有無だけを見る実装にしない（ヘッダは呼び出し側が自由に付けられる）。

そして**設定が無ければ誰も通さない**（fail closed）。環境変数を入れ忘れたまま公開された瞬間に無防備、という状態を作らない。

---

## 手順

### 1. Access アプリケーションを確認する

Zero Trust → **Access controls → Applications**

Pages と Zero Trust を連携していると、`<プロジェクト名> - Cloudflare Pages` という**自動生成のアプリが既にある**ことが多い。Destinations は `*.<project>.pages.dev` の1件だけ。

### 2. 本番ホストを足す ← ここが最大の罠

> **`*.waysidejapan.pages.dev` は `waysidejapan.pages.dev` にマッチしない。**

ワイルドカードはサブドメインにしか当たらない。自動生成のアプリはプレビューしか守っていないので、**本番は素通り**している。

アプリを開く → **Application details** タブ（Additional settings ではない）→ **Destinations** → Add destination

| Domain | Path |
|---|---|
| `waysidejapan.pages.dev` | `admin` |
| `waysidejapan.pages.dev` | `api` |

既存のワイルドカードは残す（プレビュー全体が非公開なのは正しい）。

> ⚠️ **apex をパス無しで追加しない。** `waysidejapan.pages.dev` だけを足すと、
> トップページも記事も全部ログインを要求するようになる。必ずパス付きで2件。

### 3. チームドメインと AUD を控える

- **チームドメイン**：Zero Trust → Settings → Team name and domain
  → `<team>.cloudflareaccess.com`
- **AUD**：アプリを開く → Additional settings → **AUD tag**

ダッシュボードを探さなくても、**守られているURLを叩けば両方とれる**。

```bash
curl -sS -i https://waysidejapan.pages.dev/admin/ | grep -i ^location:
# → https://<team>.cloudflareaccess.com/cdn-cgi/access/login/...?kid=<AUD>...
```

`kid` がそのまま AUD。これは秘密ではない（未認証でも見える）。

### 4. 設定を `wrangler.toml` に書く

**Pages は `wrangler.toml` があるとダッシュボードの設定より優先する。** 出どころを1か所に揃える。

```toml
[vars]
CF_ACCESS_TEAM_DOMAIN = "restless-poetry-d71d.cloudflareaccess.com"
CF_ACCESS_AUD = "1391de5d...."

# env セクションは top-level を継承しない。preview にも同じものを書く
[env.preview.vars]
CF_ACCESS_TEAM_DOMAIN = "restless-poetry-d71d.cloudflareaccess.com"
CF_ACCESS_AUD = "1391de5d...."
```

**この2つは秘密ではない。** 秘密にすべきなのは「誰を通すか」のポリシー側であって、チームドメインと AUD ではない。だからダッシュボードの Secret ではなくコードに置いてよい（値が履歴に残ることを避けたいなら Secret でも動く）。

アプリを本番用とプレビュー用に分けた場合は、**AUD をカンマ区切りで並べる**（`functions/_middleware.ts` が対応済み）。

### 5. 実測する

```bash
# 管理画面は Access に飛ぶか
curl -sS -o /dev/null -w "%{http_code}\n" https://waysidejapan.pages.dev/admin/   # 302

# 公開ページは素通しのままか（ここを必ず確認する）
for u in /en/ /en/rail/ /en/about/; do
  curl -sS -o /dev/null -w "$u %{http_code}\n" "https://waysidejapan.pages.dev$u" # 200
done
```

`/api/health` は設定の入り具合を真偽で返す（値は返さない）。Access の外に置いてあるが、本番では Access 配下なのでブラウザで開いて確認する。

```json
{ "d1BindingPresent": true, "d1Reachable": true, "adminOpen": true }
```

---

## 踏んだ罠

### ワイルドカードは apex にマッチしない

上記2。プレビューだけ守られていて本番が素通り、という状態に気づきにくい。**プレビューURLで動作確認して満足しない。**

### Destinations は「Application details」タブにある

「Additional settings」タブには CORS・Cookie・AUD しかない。追加できずに迷ったら、タブを見る。

### `compatibility_date` を当日にすると弾かれる

Cloudflare は UTC で判定する。日本時間の当日は UTC ではまだ前日なので、`Can't set compatibility date in the future` でデプロイが **Failure** になる。**前日の日付を書く。**

これでデプロイが3回続けて失敗し、本番が3コミット分古いまま止まっていたことに気づかなかった。**push したら `wrangler pages deployment list` で Status を見る。**

### 管理画面が 503 を返すのは故障ではない

`CF_ACCESS_TEAM_DOMAIN` か `CF_ACCESS_AUD` が入っていないとき、ミドルウェアは 503 を返す。fail closed の既定動作。

### wrangler の OAuth は非対話環境で切れる

CLI からの操作が突然 `CLOUDFLARE_API_TOKEN が必要` と言い出したら、ログインが切れている。`npx wrangler login` を一度実行する。

---

## 独自ドメインに移すとき

`waysidejapan.com` を取得して Pages のカスタムドメインに接続したら、Access 側も移す。

1. Access アプリの Destinations に `waysidejapan.com/admin` と `waysidejapan.com/api` を追加
2. AUD は同じアプリなら変わらない。別アプリにしたら `wrangler.toml` の `CF_ACCESS_AUD` にカンマで足す
3. `pages.dev` 側の destination は残しておいてよい（保険）
4. 上の「5. 実測する」をドメインを変えてもう一度
