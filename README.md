# Wayside Japan

訪日外国人旅行者向けの英語メディア（→繁体字中国語・韓国語）。西日本を鉄道でめぐる旅と、沿線の食・温泉。

**仕様は [`docs/SPEC.md`](docs/SPEC.md) が起点。** 拡張・修正のときは先にそこを読む。

- 企画の原本（凍結）：[`docs/HANDOFF.md`](docs/HANDOFF.md)
- 入稿フォーマット：[`templates/`](templates/)
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
