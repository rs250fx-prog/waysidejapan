# スペイン語（es）翻訳スタイルガイドと用語集

英語の記事をスペイン語に訳すときの決まり。翻訳者（人・AI）は、訳す前に必ず読む。
下書きは `translations-draft/es/<category>/<slug>.mdx(x)` に置き、確認後に `src/content/es/` へ移す（`docs/SPEC.md` 第6節）。

## 1. 文体
- 読者は訪日するスペイン語話者（スペインとラテンアメリカ）。**中立的なスペイン語**にし、スペイン固有・メキシコ固有の俗語を避ける。
- **tú**（親しい丁寧さ）で記事全体を統一する（サイトの UI 文言が tú）。vosotros は使わない。複数の読者への呼びかけは、文を工夫して避けるか、3人称・非人称で書く。
- 一人称の筆者（I）は動詞の活用で表す（「yo」は強調が要るときだけ）。誇張・営業調にしない。
- **事実を足さない・変えない・落とさない。** 数字・日付・金額・距離・固有名詞・出典の言い方（「公式資料には書かれていない」「確認できなかった」）を、原文の強さのまま訳す。断定していない所を断定にしない。説教調にしない。
- 疑問文・感嘆文の ¿ ¡ を落とさない。
- **数字は原文の書式のまま**（58.0% / 1,499 m / 162.7）。地域で小数点が違うため、公開前に方針を決めて一括で扱う（いまは変えない）。**trillion は billones（10の12乗）**。円は `¥1,200` のまま。
- **換算後の金額（$・€）を本文に書かない。** `<Price jpy={...} />` が換算する。

## 2. 構造（変えてはいけない）
- frontmatter のキーを全部残す。訳す値は `title` / `description` / `heroAlt` / `faq` の q と a だけ。`translationKey`・`category`・`kind`・`basis`・`areas`・日付・`heroImage`・`facility`・`sources`（label も url も）は原文のまま。**`translationStatus` は `machine`**。
- `description` は **120〜160文字**。
- YAML が壊れないよう、`: `（コロン＋空白）や `#` を含む文字列は引用符で囲む。¿ ¡ は YAML でも問題ない。
- import 行は一字も変えない。MDX の部品（`<Figure>` `<DishPrices>` `<Price>` など）の数・順序・props を変えず、人が読む props（alt、caption、label）だけ訳す。
- **内部リンクの URL は `/en/...` のまま**（公開時に一括で `/es/` へ書き換える）。リンクの文字はスペイン語にする。

## 3. 固有名詞
- 日本の地名・人名・施設名・料理名は**原文のローマ字表記を基本**にする。スペイン語で定着した語（ramen、onsen、sushi、konbini、izakaya、udon）はそのまま（斜体にしない）。原文が斜体にしている語（*yatai*、*bokke* など）は斜体を保つ。初出で説明が要る語には短い説明を添える。
- 確信が持てない表記は、本文では原文のローマ字を残し、報告の「要確認」に挙げる。**推測で足さない。**

## 4. 用語集（これに従う。無い語は §3 の規則で訳し、報告の「新規用語」に挙げる）

### 官公庁・制度
| 英語 | スペイン語 |
|---|---|
| Japan Tourism Agency | Agencia de Turismo de Japón |
| Agency for Cultural Affairs | Agencia de Asuntos Culturales |
| Ministry of the Environment | Ministerio de Medio Ambiente |
| MAFF / farm ministry | Ministerio de Agricultura, Silvicultura y Pesca (MAFF) |
| METI / economy ministry | Ministerio de Economía, Comercio e Industria (METI) |
| MLIT | Ministerio de Tierra, Infraestructura, Transporte y Turismo (MLIT) |
| JNTO | JNTO |
| special natural monument | monumento natural especial |
| national natural monument | monumento natural nacional |
| Ramsar Convention | Convención de Ramsar |
| intangible folk cultural property for which records should be made | bien cultural folclórico inmaterial cuyo registro documental debe realizarse |

### 食・温泉・文化
| 英語 | スペイン語 |
|---|---|
| onsen / konbini / izakaya / ramen / udon | onsen / konbini / izakaya / ramen / udon（そのまま） |
| tonkotsu | tonkotsu |
| kaedama | kaedama (fideos extra) |
| yatai | *yatai* (puestos callejeros) |
| meal ticket machine | máquina expendedora de tickets de comida |
| marimo | marimo |
| Ainu / kotan | ainu / kotan |
| kokanee | salmón kokanee |
| wakasagi | wakasagi (eperlano de estanque) |
| takana | encurtido de hojas de mostaza |
| caldera | caldera |
| footbath | baño de pies |

### 名称（試験翻訳で決めたもの）
| 英語 | スペイン語 |
|---|---|
| Marimo Conservation Society | Sociedad de Conservación del Marimo |
| Akan Ainu Folk Preservation Society | Sociedad para la Conservación del Folclore Ainu de Akan |
| Akan Ainu Crafts Cooperative | Cooperativa de Artesanía Ainu de Akan |

## 5. 報告の形式（翻訳者が返すもの）
- 書いたファイルのパスと、本文の語数。
- **新規用語**：`英語 | スペイン語` を1行ずつ。用語集に無く、記事に2回以上出る語を中心に。
- **要確認**：確信が持てなかった表記。
- **原文の問題**：誤り・古い情報・矛盾（例：過去の日付、実際と違う機関名）。
- 訳文そのものは報告に貼らない。

## 6. 追加用語（測定バッチ 2026-11-08 で決定。§4 と同じ強さで従う）

**規則の追加**
- **官庁名は、文中では小文字の短い形**（el ministerio de Agricultura、el ministerio de Educación）。`Agencia` `Sociedad` `Cooperativa` など組織名は大文字。見出しや出典の正式名の紹介だけ、用語集の正式名（Ministerio de …）を使ってよい。
- 時代：**periodo**（Heian、Edo、Estados en Guerra）。年号は **era**（era Genroku）。
- 人名の順序は原文のまま。日本語順に並べ替えない。

| 英語 | スペイン語 |
|---|---|
| education ministry (MEXT) | ministerio de Educación |
| farm ministry | ministerio de Agricultura |
| Ministry of Finance / tax agency / fisheries agency / statistics bureau | ministerio de Finanzas / agencia tributaria / Agencia de Pesca / oficina de estadística |
| Consumer Affairs Agency | Agencia de Asuntos del Consumidor |
| Consumption Tax Act / School Lunch Act | Ley del Impuesto sobre el Consumo / Ley del Almuerzo Escolar |
| Place of Scenic Beauty | Lugar de Belleza Escénica |
| shared bath | baño comunitario |
| Warring States period | periodo de los Estados en Guerra |
| conveyor-belt sushi / family restaurant | sushi sobre cinta transportadora / restaurante familiar（*famiresu* を併記） |
| okosama lunch / specified ingredients | almuerzo okosama / ingredientes especificados |
| Tajima cattle / Japanese Black | ganado tajima / Negro Japonés |
| Geographical Indication / marbling | Indicación Geográfica (IG) / marmoleado |
| glass eel / day of the ox | angula / día del buey |
| service charge / cover charge | cargo por servicio / cubierto |
| market price (jika) / tax-included | precio de mercado (jika) / con impuestos incluidos |
| BSE | EEB |
| beef bowl / staff meal | cuenco de ternera / comida del personal |
| IUCN Red List | Lista Roja de la UICN |
| sirloin / fillet / round / rump（和牛の部位） | solomillo alto / solomillo bajo / babilla / cuadril ※国で違う。母語話者の確認が要る |
