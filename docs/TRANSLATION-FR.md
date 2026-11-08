# フランス語（fr）翻訳スタイルガイドと用語集

英語の記事をフランス語に訳すときの決まり。翻訳者（人・AI）は、訳す前に必ずこれを読む。
下書きは `translations-draft/fr/<category>/<slug>.mdx(x)` に置き、確認後に `src/content/fr/` へ移す（`docs/SPEC.md` 第6節）。

## 1. 文体と組版
- 読者は訪日するフランス語話者。**vous**（丁寧）で記事全体を統一する。自然なフランス語にし、英語の語順の直訳にしない。
- 一人称の筆者（I＝je）の声を保つ。誇張・営業調にしない。
- **事実を足さない・変えない・落とさない。** 数字・日付・金額・距離・固有名詞・出典の言い方（「公式資料には書かれていない」「確認できなかった」）を、原文の強さのまま訳す。断定していない所を断定にしない。説教調にしない。
- 組版：`:` `;` `!` `?` の前と « » の内側に不可分スペース（U+00A0）。引用は « »。アポストロフィは ’ に統一。
- **数字は原文の書式のまま**（58.0% / 1,499 m / 162.7 trillion）。小数点コンマ・千位の空白への変換は、公開前に一括で行う（自動チェックが数字の一致を見るため、いまは変えない）。円は `¥1,200` のまま。
- **換算後の金額（$・€）を本文に書かない。** `<Price jpy={...} />` が換算する。

## 2. 構造（変えてはいけない）
- frontmatter のキーを全部残す。訳す値は `title` / `description` / `heroAlt` / `faq` の q と a だけ。`translationKey`・`category`・`kind`・`basis`・`areas`・日付・`heroImage`・`facility`・`sources`（label も url も）は原文のまま。**`translationStatus` は `machine`**。
- `description` は **120〜160文字**。
- 文字列は**二重引用符で囲む**（フランス語は ’ や `: ` が多く、YAML が壊れやすい。faq の q と a も囲む）。
- import 行は一字も変えない。MDX の部品（`<Figure>` `<DishPrices>` `<Price>` など）の数・順序・props を変えず、人が読む props（alt、caption、label）だけ訳す。
- **内部リンクの URL は `/en/...` のまま**（公開時に一括で `/fr/` へ書き換える）。リンクの文字はフランス語にする。

## 3. 固有名詞
- 日本の地名・人名・施設名・料理名は**原文のローマ字表記を基本**にする（マクロンも原文どおり：Kōzuki、Sankyū）。フランス語で定着した語（ramen、onsen、konbini、sushi）はそのまま。初出で説明が要る語には短い説明を添える。
- 確信が持てない表記は、本文では原文のローマ字を残し、報告の「要確認」に挙げる。**推測で足さない。**

## 4. 用語集（これに従う。無い語は §3 の規則で訳し、報告の「新規用語」に挙げる）

### 官公庁・制度
| 英語 | フランス語 |
|---|---|
| Japan Tourism Agency | Agence du tourisme du Japon |
| Agency for Cultural Affairs | Agence des affaires culturelles |
| Ministry of the Environment | ministère de l’Environnement |
| MAFF / farm ministry | ministère de l’Agriculture, des Forêts et de la Pêche (MAFF) |
| METI / economy ministry | ministère de l’Économie, du Commerce et de l’Industrie (METI) |
| MLIT | ministère du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT) |
| JNTO | JNTO (Office national du tourisme japonais) |
| special natural monument | monument naturel spécial |
| Ramsar Convention | Convention de Ramsar |
| intangible folk cultural property for which records should be made | bien culturel folklorique immatériel dont il convient d’établir des archives |

### 食・温泉・文化
| 英語 | フランス語 |
|---|---|
| onsen | onsen |
| konbini | konbini |
| izakaya | izakaya |
| ramen / tonkotsu | ramen / tonkotsu |
| kaedama | kaedama (nouilles supplémentaires) |
| yobimodoshi | yobimodoshi |
| hagama (kettle) | hagama (marmite en fer) |
| yatai | yatai (stands de rue) |
| meal ticket machine | distributeur de tickets de repas |
| marimo | marimo |
| Ainu / kotan | aïnou(e) / kotan |
| kokanee | kokanee |
| wakasagi | wakasagi (éperlan d’étang) |
| caldera | caldeira |
| footbath | bain de pieds |

### 名称（試験翻訳で決めたもの）
| 英語 | フランス語 |
|---|---|
| Sapporo Agricultural College | Collège d’agriculture de Sapporo |
| Marimo Conservation Society | Société de conservation des Marimo |
| Akan Ainu Folk Preservation Society | Société de préservation du folklore aïnou d’Akan |
| Akan Ainu Crafts Cooperative | Coopérative d’artisanat aïnou d’Akan |
| Shin-Yokohama Ramen Museum | musée du ramen de Shin-Yokohama |

## 5. 報告の形式（翻訳者が返すもの）
- 書いたファイルのパスと、本文の語数。
- **新規用語**：`英語 | フランス語` を1行ずつ。用語集に無く、記事に2回以上出る語を中心に。
- **要確認**：確信が持てなかった表記。
- **原文の問題**：誤り・古い情報・矛盾（例：過去の日付、実際と違う機関名）。
- 訳文そのものは報告に貼らない。

## 6. 追加用語（測定バッチ 2026-11-08 で決定。§4 と同じ強さで従う）

**規則の追加**
- **人名の順序は原文のまま**（原文が Hirobumi Itō なら Hirobumi Itō。日本語順に並べ替えない）。
- 官公庁名は、文中では短い形（下表）。正式名は初出で括弧に略称を添えるときだけ。
- 外国語の引用（JNTO など）は、原文の引用句をそのまま « » に入れず、フランス語に訳す。原語を残したい固有の引用だけ、直後に括弧で訳を添える。
- 時刻の `6:00` はコロンの前に不可分スペースを入れない。

| 英語 | フランス語 |
|---|---|
| education ministry (MEXT) | ministère de l’Éducation |
| farm ministry | ministère de l’Agriculture |
| Ministry of Finance | ministère des Finances |
| National Tax Agency | administration fiscale |
| fisheries agency / statistics bureau | Agence des pêches / Bureau des statistiques |
| Consumer Affairs Agency | Agence des affaires de consommation |
| Consumption Tax Act | loi sur la taxe à la consommation |
| School Lunch Act | loi sur les repas scolaires |
| Place of Scenic Beauty | site de beauté pittoresque |
| shared bath / ryokan cooperative | bain commun / coopérative des ryokan |
| glass eel / day of the ox (doyō) | civelle / jour du bœuf (doyō) |
| Geographical Indication | indication géographique |
| marbling score (BMS) | score de persillage (BMS) |
| service charge / cover charge | service / droit de couvert |
| market price (jika) | prix du marché (jika) |
| IUCN Red List / CITES Appendix II | Liste rouge de l’UICN / Annexe II de la CITES |
| BSE | ESB |
| Great Kantō Earthquake | grand séisme du Kantō |
| Tokyo Stock Exchange first section | première section de la Bourse de Tokyo |
| corporate rehabilitation | redressement judiciaire |
| conveyor-belt sushi / family restaurant | sushis sur tapis roulant / restaurants familiaux（*famiresu* を併記） |
| round / rump / sirloin / fillet（和牛の部位） | tende de tranche / rumsteck / faux-filet / filet ※母語話者の確認が要る |
