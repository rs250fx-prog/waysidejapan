# Wayside Japan

訪日外国人旅行者向けの英語メディア（英語圏・欧州圏が主要層）。西日本を鉄道でめぐる旅と、沿線の食・温泉。

**仕様は [`docs/SPEC.md`](docs/SPEC.md) が起点。** 拡張・修正のときは先にそこを読む。

- **新しいチャットの引き継ぎ：[`docs/HANDOFF-CHAT.md`](docs/HANDOFF-CHAT.md)**
- 企画の原本（凍結）：[`docs/HANDOFF.md`](docs/HANDOFF.md)
- 量産の設計図：[`docs/CONTENT-PLAN.md`](docs/CONTENT-PLAN.md)
- 管理画面と Access の手順：[`docs/ACCESS.md`](docs/ACCESS.md)
- 入稿の項目定義：[`templates/`](templates/)（入力自体は `/admin`）
- デザイン一式（全17面）：Artifact キャンバス `https://claude.ai/artifact/4RtUPohMiyQ28xoAAdQ3EQ`

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run rates    # 為替レートを取得（0.3% 未満の変動では更新しない）
```

コンテンツのキャッシュが実態とずれたとき（記事を消したのにページが残る、プラグインの変更が反映されない）：

```bash
rm -rf .astro dist node_modules/.astro node_modules/.vite
npm run build
```

`.astro` だけ消しても足りない。Cloudflare は毎回クリーンなので本番では起きない。

## 入稿

記事は `/admin` から入れる（Cloudflare Access の内側）。ガイド記事とコラムの2種。
保存は D1 の `intake_article` に入り、`GET /api/intake/:id` が AI の読み口になる。

```bash
# スキーマの適用
npx wrangler d1 execute waysidejapan --remote --file=db/schema.sql
```

配線の確認は `/api/health`、本番に出ているビルドは `/build.json`。どちらも値は返さない。
`/admin` が 503 を返すのは故障ではなく、Access の設定が無いときの正しい初期状態。

## いま公開していない

`src/config.ts` の `IS_PUBLIC` が `false` のあいだは、全ページ `noindex`、サイトマップも出ない。
`public/_headers` の `X-Robots-Tag` と**必ずセットで**切り替える。片方だけだと Search Console がエラーを出す。

独自ドメイン（`waysidejapan.com`）は未取得。**apex が 200 を返すことを実測するまで `IS_PUBLIC` を true にしない**（canonical が死んだホストを指す）。

## 設定はすべて `src/config.ts`

フラグを落としたら、機能だけでなく**それに言及する表示も消える**。

- `IS_PUBLIC` — 公開制御
- `GA4_MEASUREMENT_ID` — 空なら計測タグもポリシーの該当節も出ない
- `AFFILIATE` — 未提携のプログラムは CTA も開示ページの行も出ない
- `NAV` — 記事が出たカテゴリだけナビに出る

この連動を外すと意味がなくなる。条件分岐を外さないこと。
