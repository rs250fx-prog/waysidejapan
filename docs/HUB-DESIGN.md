# カテゴリハブの再設計（/en/eat/ と /en/soak/）

2026-10-13 決定。平らな一覧を「雑誌の目次ページ」にする。

## 決めたこと

| 項目 | 決定 |
|---|---|
| 写真 | **文字タイルが基本**（漢字1字＋品目名）。`heroImage` がある記事だけ写真タイルに自動で切り替わる。画像制作には依存しない |
| 中カテゴリ | `LINEAGE-MAP.md` のジャンル A〜M の **13** をそのまま使う。記事が無いジャンルは見出しごと出さない（設定とコンテンツの連動） |
| Soak の記事型 | `kind` を拡張：`region`（地域概説）/ `explainer`（泉質・仕組み）/ `town`（温泉町） |

## 現状（2026-10-13）

- Eat 171本＝品目ハブ39＋系譜132。ヒーロー画像は34本（ハブは12本）
- Soak 49本、全部 `kind: guide`。ヒーロー画像 0
- 一覧は `src/pages/[lang]/[category]/index.astro` の1テンプレ。200pxサムネの縦リスト
- 直す不整合：ハブに `areas[0]` の地域ラベルが付く／`basis: researched` にも「Fares verified」バッジが出る

## 実行1：Eat

### ページ構成（PC）

1. 見出し＋dek（現状のまま）
2. **ジャンプ行** — ジャンル名のチップ13個（記事のあるものだけ）。ページ内アンカー
3. **Start here** — ハブ3本の大タイル（当面 ramen / sushi / wagyu。手動指定、`heroImage` が入れば写真に切り替わる）
4. **ジャンル別セクション** — `h2` ジャンル名＋「n dishes · m lineages」。中は品目ハブの3列タイル
   - タイル：漢字1字（大・薄色）／品目名／説明1行（description を1文に切る）／**系譜のインラインリンク**（`dish` が一致する `kind: lineage` を名前で並べる）
   - ハブ記事の `description` が長いので、タイル用に短い `tagline` を frontmatter に足すかは**後回し**（まず description の1文目で出す）
5. **基準価格への帯** — `/en/food-prices/` へ
6. エリアハブへの戻し（SPEC どおり。エリアハブ未実装なので今は出さない）

SP（767px以下）：ジャンプ行は横スクロール、タイルは1列、系譜リンクはそのまま。

### ジャンル定義 `src/data/genres.ts`

| key | 見出し | 品目ハブ（dish） |
|---|---|---|
| noodles | Noodles | ramen, udon, soba, yakisoba, champon, somen |
| rice | Rice, bowls and sushi | sushi, donburi, unagi, rice, rice-sides |
| meat | Meat | wagyu, meat, chicken, tonkatsu |
| seafood | Seafood | seafood, sashimi |
| stock | Stock, soups and hotpots | dashi, nabe |
| washoku | Washoku and local dishes | kaiseki, teishoku, kyodo-ryori, seasoning |
| street | Griddle, street and B-grade | konamono, gyoza, bkyu, yatai |
| western | Western-origin food | western |
| izakaya | Izakaya and drinks | izakaya, sake, drinks |
| sweets | Sweets and tea | sweets, wagashi, tea |
| buying | Konbini and buying food | conbini, food-shopping, market |
| seasons | Seasons and festivals | shun, seasonal |
| howitworks | How it works | （column 側。Eat では空のため非表示） |

各 dish に `glyph`（漢字1字）を持たせる。例：ramen 麺・sushi 鮨・wagyu 牛・dashi 出・izakaya 酒。
ジャンルに入っていない dish が増えたら、ビルド時に警告して「Other」に落とす（落ちたまま放置しない）。

### 触るファイル

- 新規 `src/data/genres.ts`
- 改修 `src/pages/[lang]/[category]/index.astro`（eat のときだけ目次型、他カテゴリは現行リストのまま）
- 改修 `src/components/Thumb.astro` は触らない。文字タイルは新規 `src/components/DishTile.astro`
- 不整合修正：ハブの地域ラベルを出さない／バッジは `basis: visited` のときだけ

### 完了条件

- `/en/eat/` が13ジャンル（実際は12）で区切られ、39タイル＋132系譜リンクが1ページに収まる
- `npm run build` が通り、`tools/check-content.mjs` が通る
- PC 1280px と SP 375px で崩れない（min-width:0 を忘れない）

## 実行2：Soak（実行1の後に要件を確認）

- `kind` に `region` / `explainer` / `town` を追加（schema と check-content）
- 49本の frontmatter に `kind` を1行追記
- 構成：Before you go（explainer 5本の文字タイル）→ 地域セクション（region 記事をリード、town をタイル）
- タイル面に `facility`（泉質・駅から○分・入れ墨）が入っていれば出す

## 実行3

- Start here 用の写真（`docs/IMAGE-PROMPTS.md` にプロンプトを追加）
- SP の最終確認
