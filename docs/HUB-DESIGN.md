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

## 実行1の補足（2026-10-13 実装後）

- 系譜リンクは40pxのチップ。SPではタイルの漢字／写真を左64pxに畳む。ジャンプ行はSPで上部に固定
- 実装：`src/data/genres.ts`、`src/components/DishTile.astro`、`src/pages/[lang]/[category]/index.astro`

## 実行2：Soak（2026-10-13 実装済み）

- 実装：`src/data/soak.ts`（9区分・概説の当て先・explainer の漢字）、`src/components/SoakTile.astro`
- 49本に `kind` を付与（town 39 / region 5 / explainer 5）。判定はタイトルで機械的に：`onsen-*` → region、泉質・かけ流し → explainer、残り → town
- 沖縄は概説のみ（町の記事が無い）。「Overview only, for now」と出す

- `kind` に `region` / `explainer` / `town` を追加（schema と check-content）
- 49本の frontmatter に `kind` を1行追記
- 構成：Before you go（explainer 5本の文字タイル）→ 地域セクション（region 記事をリード、town をタイル）
- タイル面に `facility`（泉質・駅から○分・入れ墨）が入っていれば出す

## 実行A＋B（2026-10-13 実装済み）：記事の2カラム化と、画像の札

決定（選択式で確認）：コラムも同じ2カラム／右カラムは目次＋型別の箱＋関連記事／本文幅は 880 のまま／A と B は1回で。

- **左端の統一**：一覧・価格ページの head を「帯（全幅の背景・罫線）＋列（`.wrap` 1280）」に分けた。記事ページも 1280 の列に `本文 880 ＋ 右カラム 280（間 40）` を左詰め。一覧→記事で見出しの左端が飛ばない
- **右カラム** `src/components/Rail.astro`：目次（本文 h2 に id を振る。`Article.astro`）→ 型別の箱（dish: 系譜／lineage: 親ハブ＋兄弟／town: 施設パネル＋地域概説／region: 町／explainer: 他の解説）→ 基準価格（Eat ハブ）→ 関連記事（縦積み）。PC は sticky、長ければカラム内スクロール。SP は本文の下、目次だけ本文の前に折りたたみ
- **札** `src/components/Label.astro`：トップ「Three ways in」の形を部品化。一覧行のサムネ・関連記事カードに展開。DishTile／SoakTile は絵（写真 or 地色＋薄い漢字、3:2）の左上に名前を札で載せ、絵の下に名前を繰り返さない。SP では絵を 64px に畳み、名前は見出しに戻る（`.visual{display:contents}`）

## 実行C（2026-10-13 実装済み）：Column / Rail の目次化、価格・About の左寄せ

- **Column / Rail** も目次型。区切りは `src/data/guides.ts`。Column は frontmatter の `topic`（manners / ordering / needs / buying / kitchen。schema に追加、16本に付与）、Rail は `passes[0]`（無ければ routes）。タイルは `GuideTile.astro`（DishTile と同じ骨格）。新しい topic を使うときは guides.ts にも1行足す。無いとビルド警告のうえ Other に落ちる
- **基準価格**：`.wrap.body` の 1000px 中央寄せをやめ、`.body > *` を 1000 に抑えて左詰め。右カラムは作らない（決定）
- **About**：ヒーローを帯＋列に分け、本文 880 ＋ 右カラム 280（実績の数字・On this page・訂正の連絡先）。SP では右カラムを出さず、実績の帯を出す

## 実行3

- Start here 用の写真（`docs/IMAGE-PROMPTS.md` にプロンプトを追加）
- SP の最終確認
