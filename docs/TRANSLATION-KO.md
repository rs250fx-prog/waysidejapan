# 韓国語（ko）翻訳スタイルガイドと用語集

英語の記事を韓国語に訳すときの決まり。翻訳者（人・AI）は、訳す前に必ずこれを読む。
下書きは `translations-draft/ko/<category>/<slug>.mdx(x)` に置き、確認後に `src/content/ko/` へ移す（`docs/SPEC.md` 第6節）。

## 1. 文体
- **합니다体**（です・ます体）で記事全体を統一する。「~해요」体は使わない。
- 一人称の筆者（I）の声を保つ（「저는」「제가」。多用せず、自然に省ける所は省く）。誇張・営業調にしない。
- **事実を足さない・変えない・落とさない。** 数字・日付・金額・距離・固有名詞・出典の言い方（「公式資料には書かれていない」「確認できなかった」）を、原文の強さのまま訳す。断定していない所を断定にしない。説教調（「正しい食べ方」）にしない。
- 数字は原文の書式のまま（150,000 / 58.0% / 1,499 m）。「15万」のような万単位に直さない。円は `¥1,200` のまま、単位語だけ韓国語（`¥162.7조`）。
- **換算後の金額（$・€・₩）を本文に書かない。** `<Price jpy={...} />` が換算する。

## 2. 構造（変えてはいけない）
- frontmatter のキーを全部残す。訳す値は `title` / `description` / `heroAlt` / `faq` の q と a だけ。`translationKey`・`category`・`kind`・`basis`・`areas`・日付・`heroImage`・`facility`・`sources`（label も url も）は原文のまま。**`translationStatus` は `machine`**。
- `description` は韓国語で **60〜90文字**。
- import 行は一字も変えない。MDX の部品（`<Figure>` `<DishPrices>` `<Price>` など）の数・順序・props を変えず、人が読む props（alt、caption、label）だけ訳す。
- **内部リンクの URL は `/en/...` のまま**（公開時に一括で `/ko/` へ書き換える）。リンクの文字は韓国語にする。
- YAML が壊れないよう、引用符の中の `'` や `: ` に注意する。

## 3. 固有名詞
- 日本の地名・人名・施設名・料理名は、**国立国語院の外来語表記法（日本語）**に従って한글で書く。**初出だけ**、括弧で原語（漢字、無ければローマ字）を添える（例：구루메(久留米)）。2回目以降は한글だけ。
- 韓国語で定着した語はそのまま使う（라멘, 우동, 소바, 온천, 이자카야, 편의점, 신칸센, 도쿄, 오사카, 교토, 후쿠오카, 홋카이도）。
- 読みに確信が持てない人名・地名は、本文では原文のローマ字を残し、報告の「要確認」に挙げる。**推測で漢字を当てない。**

## 4. 用語集（これに従う。無い語は §3 の規則で訳し、報告の「新規用語」に挙げる）

### 官公庁・制度
| 英語 | 日本語 | 韓国語 |
|---|---|---|
| Japan Tourism Agency | 観光庁 | 관광청 |
| Agency for Cultural Affairs | 文化庁 | 문화청 |
| Ministry of the Environment | 環境省 | 환경성 |
| Ministry of Agriculture, Forestry and Fisheries (MAFF) / farm ministry | 農林水産省 | 농림수산성 |
| Ministry of Economy, Trade and Industry (METI) / economy ministry | 経済産業省 | 경제산업성(METI) |
| Ministry of Land, Infrastructure, Transport and Tourism (MLIT) | 国土交通省 | 국토교통성 |
| JNTO | 日本政府観光局 | JNTO(일본정부관광국) |
| national health resort (hot spring) | 国民保養温泉地 | 국민보양온천지 |
| special natural monument | 特別天然記念物 | 특별 천연기념물 |
| Ramsar Convention | ラムサール条約 | 람사르 협약 |
| intangible folk cultural property for which records should be made | 記録作成等の措置を講ずべき無形民俗文化財 | 기록 작성 등의 조치를 해야 할 무형 민속문화재 |

### 食・温泉・文化
| 英語 | 日本語 | 韓国語 |
|---|---|---|
| onsen | 温泉 | 온천 |
| konbini | コンビニ | 편의점 |
| izakaya | 居酒屋 | 이자카야 |
| ramen | ラーメン | 라멘 |
| tonkotsu | 豚骨 | 돈코쓰 |
| kaedama (extra noodles) | 替え玉 | 가에다마(替え玉) |
| yobimodoshi | 呼び戻し | 요비모도시(呼び戻し) |
| hagama (kettle) | 羽釜 | 하가마(羽釜) |
| yatai (street stall) | 屋台 | 야타이(포장마차) |
| meal ticket machine | 食券機 | 식권 발매기 |
| marimo | マリモ | 마리모 |
| Ainu / kotan | アイヌ / コタン | 아이누 / 코탄 |
| kokanee | ヒメマス | 히메마스(kokanee) |
| wakasagi (pond smelt) | ワカサギ | 빙어(와카사기) |
| caldera | カルデラ | 칼데라 |
| footbath | 足湯 | 족욕 |

### 地名・店名・機関名（試験翻訳で決めたもの）
| 英語 | 韓国語 |
|---|---|
| Kurume | 구루메(久留米) |
| Akanko Onsen / Lake Akan | 아칸코 온천 / 아칸호 |
| Churui island | 추루이 섬 |
| Ippoen | 잇포엔 |
| Higashi Hokkaido Express Bus | 히가시홋카이도 급행버스 |
| Nankin Senryō | 난킨 센료 |
| Taihō Ramen | 다이호 라멘 |
| Marimo Conservation Society | 마리모 보전회 |
| Akan Ainu Crafts Cooperative | 아칸 아이누 공예 협동조합 |

## 5. 報告の形式（翻訳者が返すもの）
- 書いたファイルのパスと、本文の文字数。
- **新規用語**：`英語 | 日本語（あれば） | 韓国語` を1行ずつ。用語集に無く、記事に2回以上出る語を中心に。
- **要確認**：確信が持てなかった表記。
- **原文の問題**：誤り・古い情報・矛盾（例：過去の日付、実際と違う機関名）。
- 訳文そのものは報告に貼らない。

## 6. 追加用語（測定バッチ 2026-11-08 で決定。§4 と同じ強さで従う）

**規則の追加**
- **原文に漢字が無い語に、推測で漢字を添えない**（確定している有名な固有名詞・店名を除く）。読みに確信が無ければ原文のローマ字を残して「要確認」へ。
- 官公庁名は、文中では短い形（관광청, 문화청, 농림수산성 …）。初出で括弧に略称を添えてよい。
- 万単位（15万）に直さない。原文が `1.7 million` なら `1,700,000` と書く（数字の一致検査のため）。

| 英語 | 日本語 | 韓国語 |
|---|---|---|
| gyūdon / beef bowl | 牛丼 | 규동（本文は 소고기덮밥 を主に） |
| donburi / katsudon / sauce katsudon | 丼 / カツ丼 / ソースカツ丼 | 덮밥(돈부리) / 가쓰동 / 소스 가쓰동 |
| Yoshinoya / Sukiya / Matsuya / Katsuya | 吉野家 / すき家 / 松屋 / かつや | 요시노야 / 스키야 / 마쓰야 / 가쓰야 |
| Skylark / Gusto / Saizeriya / Denny's / Sushiro / Hamazushi | すかいらーく / ガスト / サイゼリヤ / デニーズ / スシロー / はま寿司 | 스카이락 / 가스토 / 사이제리야 / 데니스 / 스시로 / 하마즈시 |
| famiresu / okosama ranchi | ファミレス / お子様ランチ | 파미레스 / 오코사마 란치 |
| kabayaki / unaju / unadon / shirayaki / jiyaki / hitsumabushi | 蒲焼き / 鰻重 / 鰻丼 / 白焼き / 地焼き / ひつまぶし | 가바야키 / 우나주 / 우나동 / 시라야키 / 지야키 / 히쓰마부시 |
| binchōtan / mamushi / kimosui / uzaku / umaki / sanshō | 備長炭 / まむし / 肝吸い / うざく / う巻き / 山椒 | 빈초탄 / 마무시 / 기모스이 / 우자쿠 / 우마키 / 산쇼 |
| doyō / day of the ox | 土用 / 丑の日 | 도요(土用) / 우시노히(소의 날) |
| hōtō / kishimen / tsukemen / soup-wari / hiyashi chūka | ほうとう / きしめん / つけ麺 / スープ割り / 冷やし中華 | 호토 / 기시멘 / 쓰케멘 / 스프와리 / 히야시추카 |
| zunda-mochi / harako-meshi | ずんだ餅 / はらこ飯 | 즌다모치 / 하라코메시 |
| jika / otoshi / aiseki / teppan / tōji-ba / yumori | 時価 / お通し / 相席 / 鉄板 / 湯治場 / 湯守 | 지카(時価) / 오토시 / 아이세키(相席) / 데판 / 도지바 / 유모리 |
| Geographical Indication | 地理的表示 | 지리적 표시(GI) |
| Consumer Affairs Agency | 消費者庁 | 소비자청 |
| Ministry of Education (MEXT) | 文部科学省 | 문부과학성 |
| National Tax Agency / fisheries agency / statistics bureau | 国税庁 / 水産庁 / 総務省統計局 | 국세청 / 수산청 / 총무성 통계국 |
| Consumption Tax Act / reduced tax rate | 消費税法 / 軽減税率 | 소비세법 / 경감세율 |
| School Lunch Act / kyūshoku | 学校給食法 / 給食 | 학교급식법 / 급식 |
| Miyagi Tourism Federation / Tohoku Tourism Promotion Organization / Sendai tourism foundation | 宮城県観光連盟 / 東北観光推進機構 / 仙台観光国際協会 | 미야기현 관광연맹 / 도호쿠관광추진기구 / 센다이 관광재단 |
| Nihonbashi / Tsukiji / Toyosu | 日本橋 / 築地 / 豊洲 | 니혼바시 / 쓰키지 / 도요스 |
| Komagane / Fukui / Yamanashi | 駒ヶ根 / 福井 / 山梨 | 고마가네 / 후쿠이 / 야마나시 |
| Nakano / Higashi-Ikebukuro / Ogikubo | 中野 / 東池袋 / 荻窪 | 나카노 / 히가시이케부쿠로 / 오기쿠보 |
| Akiu / Taihaku ward | 秋保 / 太白区 | 아키우 / 다이하쿠구 |
| Lake Hamana / Hamamatsu / Yanagawa / Mikawa Isshiki | 浜名湖 / 浜松 / 柳川 / 三河一色 | 하마나호 / 하마마쓰 / 야나가와 / 미카와 잇시키 |
| Kinosaki Onsen / Sanin line / Minato ward / Chūō ward | 城崎温泉 / 山陰本線 / 港区 / 中央区 | 기노사키 온천 / 산인 본선 / 미나토구 / 주오구 |
| Itō Hirobumi（韓国語で定着） | 伊藤博文 | 이토 히로부미(伊藤博文) |
| Anpanman（韓国での定着名） | アンパンマン | 호빵맨 |
