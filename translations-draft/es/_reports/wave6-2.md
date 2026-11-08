# wave6-2 報告（es）

## 書いたファイル（語数は frontmatter 込みの概数）
- eat/tea-kakigori-kissaten.mdx 2567
- soak/okuhida.mdx 3009
- eat/sweets.mdx 2203
- eat/tea-regions.mdx 2884
- eat/sweets-amamidokoro.mdx 1586
- eat/sweets-conbini.mdx 1416
- soak/toyako.mdx 2700
- soak/higashiyama.mdx 2417
- eat/sweets-crepe.mdx 1191
- eat/sweets-yakiimo.mdx 931
- soak/shirahone.mdx 3473
- eat/sweets-yogashi.mdx 1629

自己点検: 12本とも error 0。warning は「1960 など年代を words で書いた（años sesenta）」ため数字照合に出たもの（内容は原文どおり）。

## 方針メモ
- 内部リンクは指示どおり /es/ に書き換え（ガイドの「/en/ のまま」より依頼文を優先）。
- translationStatus は原文の reviewed ではなく machine。
- 地名は Tokio・Kioto。ただし固有名（Tokyo Shimbun、Tokyo's central wholesale market の「Tokio」は可）は原文どおり。
- 官庁名は小文字短形（ministerio de Agricultura / Medio Ambiente）。Agencia Meteorológica de Japón、Agencia de Turismo de Japón は組織名として大文字。
- 本文に概要ページへの言及（tea overview 等）はリンクなしの原文どおり、「página general de …」と訳した。

## 新規用語
- Japan Meteorological Agency | Agencia Meteorológica de Japón
- Fair Trade Commission | Comisión de Comercio Justo
- Act against Unjustifiable Premiums and Misleading Representations | Ley contra Primas Injustificables y Representaciones Engañosas
- Hot Springs Act | Ley de Aguas Termales
- national health resort hot spring | manantial termal nacional de salud
- shaved ice / kakigori | hielo raspado / kakigori
- pure ice (junpyō) / machine ice | hielo puro / hielo de máquina
- cream puff | petisú
- roll cake | bizcocho enrollado
- pudding | pudin
- sweet shop (amamidokoro) | dulcería (*amamidokoro*)
- fruit parlour | salón de fruta
- geoparque / geopark | geoparque
- travertine | travertino
- spring mound | montículo de manantial
- phreatomagmatic | freatomagmática
- stratovolcano / lava dome | estratovolcán / domo de lava
- morning service | servicio de desayuno
- special natural monument | monumento natural especial（用語集どおり）
- Warring States period | periodo de los Estados en Guerra（用語集どおり）
- geographical indication | indicación geográfica（IG）
- crude tea (aracha) | té en bruto
- deep-steamed sencha | sencha de cocción al vapor prolongada
- bath additive | aditivo de baño
- day bathing | baño de día
- hand bath | baño de manos
- mixed bath | baño mixto

## 要確認
- 「kakigori」「kissaten」「amamidokoro」「yōgashi」「yaki-imo」を斜体にするか（原文が斜体のものは斜体を保持、見出し・題名では非斜体）。
- Aizu-Wakamatsu の「Byakkotai」「Shinsengumi」はローマ字のまま。
- 「Hot Springs Act」は Ley de Aguas Termales とした（日本の温泉法）。訳語の確認を推奨。
- Itohkyuemon、Nakamura Tōkichi、Bunnosuke Chaya などの店名はローマ字のまま。
- 「Kahiichakan」の名前の読みが複数あった旨は原文どおり訳した。
- sweets.mdx と tea-regions.mdx で出る Fukamushi Kikugawa-cha は表題どおりローマ字。
- 「Moon-viewing sweet-potato pudding」は「pudin de batata para la contemplación de la luna」と意訳した（原文の商品名の直訳）。

## 原文の問題
- tea-kakigori-kissaten: frontmatter の translationStatus が reviewed のまま（運営上は問題なし）。updatedDate/pubDate が 2026-11-12 で、pricesCheckedOn（2026-10-10）より後。
- tea-kakigori-kissaten: 表のヘッダ行 `| Year | Coffee houses | ` に末尾スペース（軽微）。
- tea-kakigori-kissaten: 「Komeda ... the blog announced Thursday closing over Golden Week 2026」とあるが、日付が 2026-11 の記事で 2026 年の Golden Week が過去（時制）。
- okuhida: shin-hotaka no yu の営業期間「30 October 2026」まで、pubDate（2026-11-13）の時点で既に閉鎖期に入っている。
- okuhida: 「The ministry ... 26 June, read as ro-ten-buro day」の意図（6/26 = ろ(6)てん(10)ぶろ → 実際は 6月26日）は原文のまま訳した。
- shirahone: 「Takayama–Shinjuku」などの路線記述は okuhida と重複し整合しているが、バス情報は 2026-10-13 時点。
- 数字の桁区切り: 原文どおり。
- 原文 sweets.mdx と sweets-yogashi.mdx の faq: 「Fujiya, the confectioner, says so」は原文が簡略で、シンプルな回答を補った訳はしていない。
