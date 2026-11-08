# 海外検索需要の確認（Google オートコンプリート）— 2026-10-22

サイトの内容が、実際の海外の検索語に当たっているかを見た一次メモ。

## 方法と限界

- 取得元：Google のオートコンプリート（`suggestqueries.google.com`、`hl=en` `gl=us`）。2026-10-22 に41語を取得
- 分かること：その言い方が実際に打たれていること、旅行者が付ける語（tattoo friendly / reddit / price など）
- **分からないこと：検索ボリューム、競合の強さ、米国以外の差**。Search Console・キーワードプランナー・Ahrefs/Semrush では未確認
- サイト側の確認元：waysidejapan.com の `/en/`、`/en/eat/`、`/en/soak/`、`/en/column/`、`/en/eat/gyoza/` ほか（同日取得）

## 判定の凡例

- ◎ 旅行者の検索語と一致し、対応ページがある
- ○ 一致するが、ページが薄い／title の語順が弱い可能性
- △ 候補は出るが、旅行者ではなく料理・店名・レシピの需要が主
- ✕ 対応する語はあるが、サイトにページが無い（または未公開）

## 1. 温泉（Soak）

| 検索語 | 候補に出た主な語 | 対応ページ | 判定 |
|---|---|---|---|
| onsen etiquette japan | women / men / reddit / rules / public / private | `/en/soak/onsen-water-types/` は水質の記事。作法の専用ページは未確認 | ✕〜○ |
| onsen japan tattoo | tattoo friendly / rules / cover / reddit | 各温泉ページに規則あり。横断ページは未確認 | ○ |
| best onsen in japan | reddit / couples / foreigners / near tokyo / near kyoto / tattoo friendly / families | `/en/soak/` の一覧のみ | ○ |
| kinosaki onsen | ryokan / hotels / to tokyo / to kyoto / tattoo friendly | `/en/soak/kinosaki/`（meta にタトゥー規則あり） | ◎ |
| hakone onsen | ryokan / hotel / tattoo friendly / private bath | `/en/soak/hakone/` | ◎ |
| kurokawa onsen | ryokan / tattoo friendly / map | `/en/soak/kurokawa/` | ◎ |
| beppu onsen | ryokan / tattoo friendly / town | `/en/soak/beppu/` | ◎ |
| yufuin | no mori / floral village / ghibli village / to beppu / ryokan | `/en/soak/yufuin/` | ◎ |
| arima onsen | ryokan / kobe / osaka / hotels / tattoo friendly | `/en/soak/arima/` | ◎ |
| dogo onsen | honkan / matsuyama / spirited away / tattoos | `/en/soak/dogo/` | ◎ |
| kusatsu onsen | from tokyo / ryokan / tattoo friendly / ski resort | `/en/soak/kusatsu/` | ◎ |
| gero onsen | ryokan / 個別の宿名が中心 | `/en/soak/gero/` | ○ |
| noboribetsu | grand hotel / hell valley / jigokudani / bear park | `/en/soak/noboribetsu/` | ◎ |
| onsen vs sento | reddit / ryokan / super sento / difference | 専用ページ未確認 | ✕ |

読み：「温泉名 + tattoo friendly」が全温泉に共通する付随語。各温泉ページの冒頭でタトゥー可否を明示するのが最も当たる。

## 2. 食費・旅費

| 検索語 | 候補に出た主な語 | 対応ページ | 判定 |
|---|---|---|---|
| japan food prices | in usd / in yen / in euro / reddit / 2025 / tokyo / restaurants | `/en/food-prices/`（68品目） | ◎ |
| how much does food cost in japan | for a week / per day / in yen / tourist / aud / for 2 weeks | 同上 | ◎（1日・1週間の目安は不足の可能性） |
| japan trip cost | for 2 people / calculator / 2 weeks / 1 week / from usa / reddit | Budget calculator（Soon） | ✕ |

## 3. 作法・食事制限（Column）

| 検索語 | 候補に出た主な語 | 対応ページ | 判定 |
|---|---|---|---|
| japan restaurant etiquette | reddit / phrases / eating etiquette / dining etiquette / rules | `/en/column/japanese-table-customs/` ほか | ◎ |
| chopsticks in japan | culture / price / reddit（言語の質問が多い） | `/en/column/chopsticks-in-japan/` | ○ |
| tipping in japan | rude / restaurants / reddit / hotel / taxi / tour guide | **専用記事なし**（`paying-at-restaurants-in-japan` に含むか未確認） | ✕〜○ |
| japan food allergy | card / peanut / reddit / allergen list | `/en/column/eating-in-japan-allergies/` | ◎ |
| vegetarian japan | 英語圏では japanese curry / recipes が主。「vegetarian in japan」単体の旅行語は弱い | `/en/column/eating-in-japan-vegetarian/` | △ |
| gluten free japan | japanese curry / bbq sauce / food / noodles（食品需要が主） | `/en/column/eating-in-japan-allergies/` | △ |
| kids japan restaurant | 英語圏の店名・都市（london / singapore）が主 | `/en/column/eating-out-with-children-in-japan/` | △ |
| japan ticket machine restaurant | 候補ほぼ無し（ニッチ） | `/en/column/how-meal-ticket-machines-work/` | △（ニッチだが競合も薄い） |
| japan food souvenirs | reddit / gifts / best / non food / popular | `/en/column/food-souvenirs-omiyage/` | ◎ |
| japan roadside station michi no eki | 候補なし | `/en/column/roadside-stations-and-farm-stands/` | △（語として未成熟） |

## 4. 料理（Eat）

| 検索語 | 候補に出た主な語 | 読み | 判定 |
|---|---|---|---|
| what to eat in japan | tokyo / breakfast / vegetarian / besides sushi / picky eaters / shellfish allergy | 旅行者の入口語。料理別の構成では拾えない | ✕（ハブ未整備） |
| must eat japan | reddit / foods / dishes / snacks | 同上 | ✕ |
| what to eat in osaka | reddit / street food / namba / dotonbori / station / umeda | 都市ハブが必要 | ✕ |
| best food in fukuoka | reddit / restaurants / airport / famous food | 同上 | ✕ |
| ramen | near me / recipes / noodles / eggs / ueno | 店探し・レシピが主 | △ |
| ramen in japan | in japanese / price / hiragana（言語の質問が多い） | 旅行語は price 程度 | △ |
| hakata ramen | near me / fukuoka / noodles / london / recipe | `/en/eat/ramen-hakata/` | ○ |
| sapporo ramen | alley / instant / boston / beer系の店名 | 米国では商品・店名が混ざる | △ |
| kumamoto ramen | near me / montreal / meaning / 店名 | 店名が中心 | △ |
| sushi | near me / rice / bake / burrito / recipe | 日本旅行の語ではない | △ |
| sushi in japan | in japanese / vs america / vs us | 比較語に需要 | ○ |
| edomae sushi | meaning / tokyo / vs omakase / near me | `/en/eat/sushi-edomae/` | ○ |
| conveyor belt sushi japan | chain / price / reddit / tokyo / osaka | `/en/eat/sushi-kaiten/`（price と reddit が付く） | ◎ |
| tonkatsu | sauce / recipe / ramen / curry（tonkotsu と混線） | レシピが主 | △ |
| udon | noodles / recipe / near me / ueno / shinjuku | レシピ・店探しが主 | △ |
| sanuki udon | 米国・ハワイの店名 / frozen / recipe | 本場需要より現地店 | △ |
| soba | noodles / vs udon / recipe / meaning | 「soba vs udon」が比較語 | ○ |
| gyoza | sauce / meaning / recipe / vs dumplings | 「gyoza vs dumplings」が比較語。`/en/eat/gyoza/` の切り口と一致 | ○ |
| donburi | bowl / meaning / recipe / near me | 定義語に需要 | ○ |
| katsudon | recipe / vs tonkatsu / near me / sauce | `katsudon vs tonkatsu` が比較語 | ○ |
| gyudon | recipe / beef / near me / sauce | レシピが主 | △ |
| unagi | sauce / don / sushi / roll / meaning | 米国の寿司ネタ文脈 | △ |
| sashimi | vs nigiri / vs sushi / grade / near me | 比較語に需要 | ○ |
| yatai | meaning / ramen / fukuoka / food / stalls | `/en/eat/yatai-hakata/` と一致 | ◎ |

読み：料理名単体は「near me」「recipe」が支配する。旅行者の語は「**X vs Y**」「**meaning**」「**price**」「**city + what to eat**」の形で出る。系譜の深掘り（kitakata、gotō、funa-zushi など）に対応する検索語は候補に出なかった。

## 5. エリア・鉄道・旅程

| 検索語 | 候補に出た主な語 | 対応ページ | 判定 |
|---|---|---|---|
| japan rail pass | price / calculator / worth it / reservation / map | Rail passes, compared（Soon） | ✕ |
| setouchi | triennale / islands / area pass / lemon | Areas: Setouchi（Soon） | ✕ |
| shikoku trip | itinerary / reddit / road trip / day trip from osaka / bike | Areas: Shikoku（In progress） | ✕ |
| kyushu itinerary | 4〜14 days / without car / by train / reddit | Itineraries（Soon） | ✕ |

## 6. 総括

- 当たっている：温泉の各町ページ、食費ページ、作法・アレルギー、conveyor belt sushi、yatai
- ずれている：料理の系譜ページ（旅行語の検索が見えない）。専門性の積み上げと内部リンクの役割として位置づける
- 欠けている：旅程・鉄道パス・費用計算・エリアハブ・「what to eat in 〔都市〕」・tipping・onsen etiquette 横断・onsen vs sento
- 技術面：canonical・FAQPage・Article・BreadcrumbList・meta description（約150字）は入っている。title が60字超で、検索結果では後半が切れる

## 7. 次に確認すること

1. Search Console の実クエリ（公開2〜3週間後）
2. Google 広告のキーワードプランナーで、この表の語のボリュームを取る
3. 米国以外（英国・豪州・ドイツ）で同じ語の候補を取る（`gl=gb` `gl=au` `gl=de`）
4. 上位10件の競合（Japan Guide、Tripadvisor、Reddit など）が、各語でどのページを出しているか
