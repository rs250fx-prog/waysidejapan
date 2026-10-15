# 公開済み記事の機械チェック結果（指摘リスト）

確認日：2026-10-13 ／ 対象：278 本（draft を除く） ／ ツール：tools/audit-articles.mjs

記事は編集していない。**候補の洗い出し**であり、誤検出を含む。重要度 high＝方針違反の可能性が高い、mid＝要確認、low＝参考。

## 1. 件数のまとめ

| 重要度 | チェック | 件数 |
|---|---|---|
| high | 断定表現 | 7 |
| high | 税込不明の金額 | 6 |
| high | ランク混入 | 1 |
| mid | 内部リンクなし | 178 |
| mid | 税込不明の金額 | 46 |
| mid | 食へのリンクなし | 29 |
| mid | description長 | 3 |
| mid | 税率の将来変更 | 2 |
| mid | 出典少 | 2 |
| low | 出典の日付なし | 158 |
| low | 出典http | 112 |
| low | 短い | 22 |
| low | 断定表現 | 20 |
| low | 温泉へのリンクなし | 6 |
| low | FAQ少 | 3 |
| low | 出典重複 | 1 |

カテゴリ別：column 14本・平均1084語 ／ eat 182本・平均1287語 ／ rail 3本・平均456語 ／ soak 79本・平均2396語

## 2. 記事別の指摘（重要度の高い順）

### soak/nyuto.mdx（スコア 19）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.nyuto-onsenkyo.com/index.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/nature.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/information.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/access.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/history/
- [low] 出典http：http://www.nyuto-onsenkyo.com/history/chronology/
- [low] 出典http：http://www.nyuto-onsenkyo.com/ookama.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/kuroyu.html
- [low] 出典http：http://www.nyuto-onsenkyo.com/yumeguri_spring.pdf
- [low] 出典http：http://www.nyuto-onsenkyo.com/yumeguri_winter.pdf
- [low] 出典http：http://road.pref.akita.lg.jp/html/10touki_stop/■R6-R7冬期閉鎖区間（R7.4.18現在）あきたのみち情報.pdf
- [low] 出典http：http://ryokan.glocal-promotion.com/
- [low] 出典の日付なし：25/32本に published が無い

### rail/kansai-12-days-setouchi.mdx（スコア 17）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥22,000 … 「<FactRow items={[ { label: 'Price', value: '¥22,000 adult' }, { label: 'Valid', value: '7 …」
- [mid] description長：173字（目安160字以内）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：590語

### rail/kix-to-hiroshima.mdx（スコア 17）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥1,800, ¥2,200, ¥1,300 … 「<FactRow items={[ { label: 'To Shin-Osaka', value: '¥1,800' }, { label: 'To Kyoto', value:…」
- [mid] description長：179字（目安160字以内）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：498語

### eat/wagyu-omi.mdx（スコア 16）
- [high] 断定表現：効能の断定の可能性（1件）例: …hin slice; steak is on the menus for visitors. Try the miso cure if a shop has it — a slice with rice is the taste the shogun was sent. ## Ōmi beef away from…
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.jmga.or.jp/standard/beef/
- [low] 出典の日付なし：5/7本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: … '../../../assets/eat/wagyu-omi-body.webp'; Ōmi beef has the best story of the three great names and the least marketing. For two centuries when Japan offici…

### eat/drinks-beer-highball.mdx（スコア 14）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥155,000, ¥100,000 … 「**The tax change.** The three used to pay different rates; the government said in 2017 tha…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：16/22本に published が無い

### eat/sushi-kakinoha.mdx（スコア 14）
- [high] 断定表現：効能の断定の可能性（1件）例: …shi since the Edo period — which is the same fish, the same cure and the same idea in a grander form. Nara's is the mountain version: one leaf, one bite, no kni…
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：680語

### eat/izakaya-otoshi.mdx（スコア 13）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥400, ¥2,500, ¥4,300 … 「- **February 2019, in Chinese.** Two people at an izakaya were charged about ¥400 each for…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sushi-saba.mdx（スコア 13）
- [high] 断定表現：効能の断定の可能性（1件）例: …ls is the family resemblance. Osaka's *battera* is the same cure in a rectangular mould, named after a Portuguese boat in 1891. Nara's *kakinoha-zushi* is a sin…
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/wagyu-yakiniku.mdx（スコア 13）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥1,210 … 「- **Gyūkaku** (Colowide): three all-you-can-eat courses, from the cheapest (90 minutes) th…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### soak/gero.mdx（スコア 12）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,500 … 「**Member inns.** I could not get a single count. Gero city’s 2021 page says about 15, the …」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.onsenji.jp/about/
- [low] 出典http：http://www.gerogle.jp/g_gourmet/
- [low] 出典の日付なし：32/42本に published が無い

### soak/yunotsu.mdx（スコア 12）
- [high] 断定表現：効能の断定の可能性（1件）例: …i*, the Japanese raccoon dog, soaking in a steaming pond to heal. The tourism agency's text says the story is said to have reached Kyoto in the Heian period, bu…
- [low] 出典http：http://www.j-hss.org/journal/back_number/vol64_pdf/vol64no1_053_062.pdf
- [low] 出典の日付なし：23/26本に published が無い

### column/how-meal-ticket-machines-work.mdx（スコア 11）
- [high] 税込不明の金額：1段落（記事内に税込の注記なし）。例: ¥10,000,, ¥5,000, ¥1,000 … 「- **Cash.** JNTO's guide says only "put money in". The product page for one major maker's …」
- [low] 短い：639語

### soak/ito.mdx（スコア 11）
- [high] 断定表現：効能の断定の可能性（1件）例: … 1938, its guests changed from people staying to bathe as a cure to groups. The city took over the building in 1997 and reopened it in 2001 as a sightseeing and…
- [low] 出典の日付なし：22/26本に published が無い

### soak/kawayu.mdx（スコア 11）
- [high] ランク混入：S/A/B/C の表記が本文にある（ONSEN-LABEL 未実装のため不可）
- [low] 出典の日付なし：16/16本に published が無い

### soak/kusatsu.mdx（スコア 11）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://onsen-kusatsu.com/
- [low] 出典http：http://onsen-kusatsu.com/ohtakinoyu/guide/
- [low] 出典http：http://onsen-kusatsu.com/gozanoyu/guide/
- [low] 出典http：http://onsen-kusatsu.com/sainokawara/guide/
- [low] 出典http：http://kusatsu-accommodations.jp/faq/

### soak/masutomi.mdx（スコア 11）
- [high] 断定表現：効能の断定の可能性（1件）例: …of Kawanakajima and miners of the Kai gold mines use it for cures. Hence it is called "**Shingen's hidden spring**" (*Shingen-kō no kakushi-yu*). 3. **In 1914*…
- [low] 出典の日付なし：12/17本に published が無い

### soak/shirahama.mdx（スコア 11）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.nankishirahama.jp/
- [low] 出典http：http://www.shirahama-ryokan.jp/shirahama/
- [low] 出典http：http://www.shirahama-ryokan.jp/shirahama/onsen.html
- [low] 出典http：http://www.shirahama-ryokan.jp/access/index.html
- [low] 出典http：http://www.shirahama-ryokan.jp/kue/

### soak/shuzenji.mdx（スコア 11）
- [high] 断定表現：効能の断定の可能性（1件）例: …and recovered, and from there, the story goes, bathing as a cure spread. The spa town’s official site and the temple tell the same story and give 807 for the fo…
- [low] 出典の日付なし：15/16本に published が無い

### eat/food-shopping-ekiben.mdx（スコア 10）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,000, ¥3,000 … 「JNTO gives a range from under ¥1,000 to around ¥3,000 for boxes with wagyu.…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.ekiben.or.jp/main/about/index.html
- [low] 出典http：http://www.ekiben.or.jp/main/about/about_memo.html
- [low] 出典http：http://www.ekiben.or.jp/main/about/about_day.html
- [low] 出典http：http://www.ekiben.or.jp/main/about/about_mark.html

### eat/ramen-iekei.mdx（スコア 10）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥760 … 「- **Yoshimuraya** (岡野 1-6-4, Yokohama station west side; 11:00–20:00, closed Mondays). Ram…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://ieke1.com/
- [low] 出典http：http://ieke1.com/source/yosimuraya/sina.html
- [low] 出典http：http://ieke1.com/source/yosimuraya/chokei.html
- [low] 出典http：http://ieke1.com/source/sugitaya/index.html

### eat/ramen-sapporo.mdx（スコア 10）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥990 … 「- **Aji no Sanpei** (大丸藤井セントラルビル 4F, 南1条西3丁目, a short walk from Ōdōri station). Open 11:00…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典重複：https://www.ramen.jp/company/history/
- [low] 出典http：http://www.ajino-sanpei.com/01.html
- [low] 出典http：http://www.sumireya.com/main/history/
- [low] 出典http：http://www.junren.co.jp/step.htm

### soak/dogo.mdx（スコア 10）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥700, ¥1,300, ¥650 … 「| Main bathhouse course | What it includes | Hours (last entry) | Time | Adult / child | |…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 断定表現：最上級・順位の断定（2件）例: …istribution station for each (No. 2 for the main bathhouse, No. 1 for the Tsubaki-no-Yu and Asuka-no-Yu). I give both and do not say whether the water differs. …

### soak/onsen-shikoku.mdx（スコア 10）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥700, ¥2,000 … 「**As a neighbourhood bath.** Dōgo's official site says the ground-floor bath of the main b…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：27/37本に published が無い

### eat/conbini.mdx（スコア 9）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥10,000 … 「**Payment.** Each big chain publishes a list. All three take transport IC cards (Suica, PA…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 税率の将来変更：2027年4月の消費税1%の記述がある。成立前の予定として日付と留保つきか確認

### eat/ramen-hakata.mdx（スコア 9）
- [mid] description長：199字（目安160字以内）
- [mid] 税込不明の金額：3段落（記事内に税込の注記はある）。例: ¥700, ¥750, ¥750 … 「- **A stall.** Three stalls featured by the city's tourism office in September 2026 list t…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/udon-inaniwa.mdx（スコア 9）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥621, ¥702, ¥1,000 … 「- **Home-use dried udon**, 140 g (27 cm lengths): ¥621. - **Off-cuts** (*kiriotoshi*), 270…」
- [low] 出典http：http://inaniwa-udon.jp/about/
- [low] 出典http：http://inaniwa-udon.jp/charm/
- [low] 出典http：http://inaniwa-udon.jp/eating/
- [low] 出典http：http://inaniwa-udon.jp/summary/
- [low] 出典http：http://inaniwa-udon.jp/experience/
- [low] 出典の日付なし：25/29本に published が無い

### soak/kurokawa.mdx（スコア 9）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://aso-geopark.jp/mainsites/mainsite06.html
- [low] 出典http：http://www.aso-geopark.jp/geosites/geosite19.html
- [low] 出典の日付なし：17/20本に published が無い

### eat/western-machichuka.mdx（スコア 8）
- [mid] 税込不明の金額：3段落（記事内に税込の注記はある）。例: ¥420, ¥550, ¥690 … 「- Chūka soba — ¥420 - Fried rice — ¥550; half fried rice — ¥310 - Tenshinhan — ¥690 - Chūk…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.zenchuren.or.jp/yomoyama/cyuka-ryouri_cyugoku-ryouri.htm
- [low] 出典の日付なし：18/20本に published が無い

### soak/yufuin.mdx（スコア 8）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：27/35本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …fu, about 30 km by road from Beppu according to JNTO. It is the best known of five hot spring towns in Yufu city, and its story is less about the water than abo…

### eat/donburi.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥498, ¥420,, ¥480, … 「- **Beef bowl.** Yoshinoya, regular ¥498. Sukiya: mini ¥420, regular ¥480, large (*tokumor…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.komacci.or.jp/katsu/katsudon.html

### eat/kaiseki-shojin.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,000 … 「**Eiheiji: a Zen training stay.** Eiheiji's site (checked 2026-10-11) describes an overnig…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：11/13本に published が無い

### eat/konamono-okonomiyaki.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,188, ¥1,490 … 「The figures above are kept on the price reference page and update there. For the famous sh…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：8/10本に published が無い

### eat/rice-curry.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥646, ¥683,, ¥794, … 「- **Pork curry: ¥646**, with 300 g of rice, eating in or taking away; takeaway costs ¥54 m…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：16/20本に published が無い

### eat/sake-niigata.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥500, ¥1,000 … 「- **"Niigata sake is dry."** The official word is *tanrei*, clean and with few off-flavour…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：8/10本に published が無い

### eat/seafood-fugu.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥2,890 … 「**The licence differs by prefecture.** The farm ministry says the name of the qualificatio…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：6/6本に published が無い

### eat/shun-autumn-winter.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥460,, ¥760, ¥490 … 「- **McDonald's Japan, Tsukimi family** (on sale from 2 September 2026, nationwide except s…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：16/19本に published が無い

### eat/shun-spring-summer.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥687, ¥700, ¥618 … 「- *Sakura saku yo* white peach Frappuccino, Tall: ¥687 / ¥700 - *Sakura saku yo* latte: ¥6…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/11本に published が無い

### eat/shun.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥460, ¥760, ¥490, … 「- **McDonald's Japan, autumn 2026.** Tsukimi Burger from ¥460 (value set from ¥760), Chees…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/14本に published が無い

### eat/soba-izumo.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥7,331 … 「Matsue households rank 32nd of 52 cities for noodles eaten out, at ¥7,331 a year — just un…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本

### eat/tea-regions.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥990, ¥1,090, ¥1,590 … 「**Itohkyuemon, Uji main shop tea room.** Uji matcha, Uji sencha and Uji gyokuro are ¥990 a…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 断定表現：「日本最大級」などの断定（1件）例: …itself as producing matcha (tencha) in quantities among the highest in Japan, but none of the city documents I read gives a number. The Nishio tea cooperative s…

### eat/teishoku-morning.mdx（スコア 7）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥430,, ¥530,, ¥530, … 「- **Yoshinoya**: nattō set ¥430, grilled fish ¥530, salted mackerel ¥530, special breakfas…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/12本に published が無い

### eat/teishoku-washoku-breakfast.mdx（スコア 7）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥6,400,, ¥3,200,, ¥4,800 … 「- **A ryokan.** Breakfast usually comes with the room. I have not found an official breakd…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：652語

### eat/udon-kishimen.mdx（スコア 7）
- [mid] 出典少：2本
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：424語

### eat/unagi-kansai.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥4,950, ¥3,300, ¥4,100 … 「- **Atsuta Hōraiken** head shop: hitsumabushi ¥4,950; eel bowl ¥3,300 (three pieces), *jō*…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/13本に published が無い

### eat/wagashi-yokan.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,512, ¥3,024, ¥1,782 … 「- Medium bar, "Yoru no Ume" (red bean) — ¥1,512. - Full bamboo-wrapped bar, "Yoru no Ume" …」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/11本に published が無い

### eat/wagyu-matsusaka.mdx（スコア 7）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥4,320, ¥8,020 … 「Compare Ōmi, where a certified shop sells 500 g of sukiyaki beef for ¥4,320–10,800, and Ko…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.jmga.or.jp/standard/beef/

### soak/atami.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 断定表現：命令調（must / have to）（1件）例: … called Tawara Yokujō. It notes that at some communal baths you need to bring your own towel, soap and shampoo. It gives no prices or hours and says to ask each…

### soak/beppu.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：28/38本に published が無い

### soak/kinosaki.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：38/49本に published が無い

### soak/naruko.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：31/32本に published が無い

### soak/noboribetsu.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：41/41本に published が無い

### soak/nozawa.mdx（スコア 7）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：24/26本に published が無い

### soak/totsukawa.mdx（スコア 7）
- [low] 出典http：http://totsukawa.info/joho/totsukawa_onsen_gou/gensenkakenagasi.html
- [low] 出典http：http://totsukawa.info/joho/totsukawa_onsen_gou/index.html
- [low] 出典http：http://totsukawa.info/joho/q_and_a/index.html
- [low] 出典http：http://totsukawa.info/joho/event/kyarakuta.html
- [low] 出典http：http://www.gsi.go.jp/KOKUJYOHO/MENCHO/backnumber/GSI-menseki20260701.pdf
- [low] 出典の日付なし：21/28本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: … Flow | Notes | |---|---|---|---|---| | Tōsenji | Tōsenji No. 1 | 59.1°C | 180 L/min | pumped; village-owned; alkaline simple sulphur | | Tōsenji | Tōsenji N…

### eat/donburi-gyudon.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥500 … 「The beef bowl is what the big Japanese chains sell for under ¥500. It has a longer history…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/gyoza-utsunomiya.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,360 … 「**Choose the cooking.** Where a shop offers all three, you do not have to pick one. Minmin…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/ramen-kumamoto.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：4/5本に published が無い
- [low] FAQ少：2問
- [low] 短い：586語

### eat/ramen-tokyo-shoyu.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥420,, ¥490, … 「- **The chains** — Hidakaya's chūka soba at ¥420, Kourakuen's at ¥490, both including tax …」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/rice.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥31,556, ¥930 … 「**The figure on the news.** The farm ministry's monthly "relative trading price" is the we…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/soba-togakushi.mdx（スコア 6）
- [mid] 税込不明の金額：3段落（記事内に税込の注記はある）。例: ¥8,705 … 「Nagano city households rank 13th of 52 for noodles eaten out, at ¥8,705 a year, above the …」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/soba-wanko.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥6,927 … 「Morioka households rank 38th of 52 cities for noodles eaten out (¥6,927 a year) — wanko so…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/somen-miwa.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.miwasoumen-kumiai.com
- [low] 出典の日付なし：6/6本に published が無い
- [low] 短い：647語

### eat/sushi-edomae.mdx（スコア 6）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥18,603 … 「The health ministry's summary of the trade explains the gap. Sushi shops carry more specie…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sweets-crepe.mdx（スコア 6）
- [mid] 出典少：2本
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/tea.mdx（スコア 6）
- [mid] 税込不明の金額：4段落（記事内に税込の注記はある）。例: ¥10,030, ¥2,278,, ¥882 … 「These are wholesale prices of unfinished leaf, not shop prices. By the ministry's own reck…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/teishoku.mdx（スコア 6）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥440,, ¥460,, ¥540, … 「- **Yayoi-ken** (Tokyo menu): nattō breakfast ¥440, whitebait and grated radish ¥460, mini…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/unagi-kanto.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥4,400, ¥5,450, ¥4,200, … 「- **Unagi Edogawa**: *take* (one eel) ¥4,400; *matsu* (one and a quarter) ¥5,450; kabayaki…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/unagi.mdx（スコア 6）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥1,600, ¥1,900, ¥3,400 … 「- **Unagi no Naruse** (chain), as announced in August 2024: ume, take and matsu were half,…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/wagyu-kobe.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.jmga.or.jp/standard/beef/
- [low] 出典http：http://kobebeef-org.jp/
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本

### eat/wagyu-steak.mdx（スコア 6）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥980 … 「- **1976** — Steak no Don opened its first shop in Maebashi, Gunma. The company says its ¥…」
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/wagyu-tajima.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：4/5本に published が無い
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本
- [low] FAQ少：2問

### soak/arima.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/hanamaki.mdx（スコア 6）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥1,200, ¥600, ¥1,500 … 「| Bath | Weekdays (adult / child) | Weekends, holidays and set days (adult / child) | |---…」
- [low] 出典http：http://www.daionsen-iwate.com/spa/
- [low] 出典http：http://www.daionsen-iwate.com/history/
- [low] 出典の日付なし：22/23本に published が無い

### soak/kakenagashi-explained.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/kinugawa.mdx（スコア 6）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.kinugawa-onsen.com/onsen/
- [low] 出典の日付なし：12/16本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: … and by day, and some limited expresses, such as *SPACIA X* No. 1, end at Nikko and do not go to Kinugawa. - **From JR Shinjuku.** The same timetable has a col…

### soak/onsen-okinawa.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/onsen-water-types.mdx（スコア 6）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### eat/dashi.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：17/19本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …red with mould) and *honkarebushi* (mould-cured repeatedly, the finest). *Honkarebushi* takes about four months of moulding and sun-drying; the farm ministry sa…

### eat/donburi-katsudon.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.komacci.or.jp/katsu/katsudon.html
- [low] 出典の日付なし：7/8本に published が無い

### eat/kyodo-ryori-okinawa.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/7本に published が無い
- [low] 短い：645語

### eat/kyodo-ryori.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：14/14本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …h. Documents are checked and an expert committee certifies; the best receive a special award. The agency's criteria page says 329 have been certified; its top p…

### eat/market-omicho-hakodate.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.kaisen-hirai.com/don.html
- [low] 出典の日付なし：15/16本に published が無い

### eat/market.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.kaisen-hirai.com/don.html
- [low] 出典の日付なし：14/16本に published が無い

### eat/meat.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：13/16本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …research report gives the same figure from a 2018 handbook. The best known is Kagoshima’s black pork, *kurobuta*. Pork also anchors two regional dishes with off…

### eat/ramen-kagoshima.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] FAQ少：2問
- [low] 短い：534語

### eat/ramen-kitakata.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.kitakata-kanko.jp/wp/?page_id=103
- [low] 出典http：http://www.ramenkai.com/association/

### eat/sake-hiroshima.mdx（スコア 5）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥5,000 … 「- **"Hiroshima sake is soft-water sake."** The coast's water was soft; the city says Saijō…」
- [low] 出典の日付なし：14/18本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …an sales and paid tastings as festival venues. **Kamotsuru No. 1 brewery shop.** Free, no booking (groups of 20 or more contact them first). A 15-minute exhibi…

### eat/sake-nada-fushimi.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.gekkeikan.co.jp/enjoy/museum/access/
- [low] 出典の日付なし：14/18本に published が無い

### eat/sake.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.gekkeikan.co.jp/enjoy/museum/access/
- [low] 出典の日付なし：15/19本に published が無い

### eat/seafood-salmon.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：6/6本に published が無い
- [low] 断定表現：「日本最大級」などの断定（1件）例: …salmon run in autumn, its catch of chum salmon is among the highest in Japan, and it has run hatcheries for over 100 years, with 20 in the prefecture. The dish …

### eat/somen-banshu.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：6/6本に published が無い
- [low] 短い：418語

### eat/somen.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/11本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: … cold dipping sauce, or in winter in hot broth as *nyūmen*. The best of it is still stretched by hand, and the paradox of the trade is that this summer food is …

### eat/sushi-osaka-hako.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.yoshino-sushi.co.jp/history/index.htm
- [low] 出典の日付なし：6/7本に published が無い

### eat/wagyu-yonezawa.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.jmga.or.jp/standard/beef/
- [low] 短い：623語

### eat/yakisoba.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：8/9本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …in its soup, like champon. ## Why it is the way it is The best account I have of its origin comes from a sauce company, and it is worth reading as one. …

### eat/yatai-matsuri.mdx（スコア 5）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：6/8本に published が無い
- [low] 短い：692語

### soak/misasa.mdx（スコア 5）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.j-hss.org/journal/back_number/vol64_pdf/vol64no4_409_421.pdf
- [low] 出典の日付なし：17/19本に published が無い

### soak/onsen-hokkaido.mdx（スコア 5）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://sounkyo.net/
- [low] 出典の日付なし：33/34本に published が無い

### soak/takeo.mdx（スコア 5）
- [low] 出典http：http://www.takeo-kk.net/
- [low] 出典http：http://www.takeo-kk.net/spa/
- [low] 出典http：http://www.takeo-kk.net/specialty/
- [low] 出典http：http://www.takeo-kk.net/access/
- [low] 出典の日付なし：11/13本に published が無い

### soak/yamashiro.mdx（スコア 5）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://en.yamashiro-spa.or.jp
- [low] 出典の日付なし：16/16本に published が無い

### eat/bkyu-korokke.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：6/6本に published が無い

### eat/bkyu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：14/14本に published が無い

### eat/champon-sara-udon.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/5本に published が無い

### eat/champon.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/10本に published が無い

### eat/chicken-karaage.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/12本に published が無い

### eat/chicken-mizutaki.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/5本に published が無い

### eat/chicken.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.pref.kagoshima.jp/ag07/sangyo-rodo/nogyo/tikusan/faq/satsumajidori.html

### eat/dashi-east-west.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/14本に published が無い

### eat/dashi-iriko-ago.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/10本に published が無い

### eat/drinks-shochu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/9本に published が無い

### eat/drinks.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：16/18本に published が無い

### eat/food-shopping-depachika.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 断定表現：「日本最大級」などの断定（1件）例: …ent store in the East. Its restaurant was enlarged into the biggest in Japan, and by July an average of about 45,000 people a day came. In April that year a sep…

### eat/instant-noodles-bag.mdx（スコア 4）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥500 … 「The Cup Noodles Museum in Ikeda, Osaka, stands in the town where Nissin says Chicken Ramen…」
- [low] 出典の日付なし：19/20本に published が無い

### eat/instant-noodles-cup.mdx（スコア 4）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥500 … 「The Cup Noodles Museum in Yokohama costs ¥500 for adults and nothing for high-school stude…」
- [low] 出典の日付なし：22/23本に published が無い

### eat/izakaya-yakitori.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/9本に published が無い

### eat/kaiseki-tea.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：11/13本に published が無い

### eat/kaiseki.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：14/18本に published が無い

### eat/konamono-monja.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/7本に published が無い

### eat/kyodo-ryori-akita.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/9本に published が無い

### eat/kyodo-ryori-kyushu.mdx（スコア 4）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥12,650 … 「**What changes.** At the source, ryūkyū is fishermen's and home food; in Tokyo it is one c…」
- [low] 出典の日付なし：58/59本に published が無い

### eat/market-toyosu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/15本に published が無い

### eat/meat-basashi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/7本に published が無い

### eat/meat-horumon.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：17/20本に published が無い

### eat/meat-jingisukan.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/6本に published が無い

### eat/meat-pork.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：8/10本に published が無い

### eat/nabe-miso.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/15本に published が無い

### eat/nabe-oden.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/7本に published が無い

### eat/nabe.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/15本に published が無い

### eat/ramen-hiyashi-chuka.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：457語

### eat/ramen-kurume.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：8/9本に published が無い

### eat/ramen.mdx（スコア 4）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥500,, ¥1,000,, ¥1,500 … 「The figures above are kept on the price reference page and update there. What they show is…」
- [low] 出典http：http://www.ramenkai.com/association/

### eat/rice-sides-mochi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/8本に published が無い

### eat/rice-sides-takikomi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本

### eat/rice-sides-tsukemono.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/9本に published が無い

### eat/rice-sides.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：20/21本に published が無い

### eat/sashimi-shime.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/8本に published が無い

### eat/sashimi-shusse-uo.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：682語

### eat/sashimi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：16/19本に published が無い

### eat/seafood-oyster-crab.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 断定表現：最上級・順位の断定（1件）例: …male season is short for resource protection. Tottori gives the best time instead: matsuba-gani November to March, oya-gani November to December, waka-matsuba-g…

### eat/seafood.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：15/16本に published が無い

### eat/seasonal-setsubun.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/5本に published が無い

### eat/seasonal.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：19/19本に published が無い

### eat/seasoning-egg.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本

### eat/seasoning-shoyu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：25/28本に published が無い

### eat/seasoning.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：20/21本に published が無い

### eat/soba.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/16本に published が無い

### eat/sushi-funa.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 断定表現：「日本最大級」などの断定（1件）例: …means now. No vinegar, no chef, no counter: a carp from the largest lake in Japan, salted, buried in cooked rice, and left to ferment through a summer and an au…

### eat/sushi-kaiten.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.mawaru-genrokuzusi.co.jp/history/

### eat/sushi-masu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：699語

### eat/sweets-yakiimo.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：521語

### eat/sweets-yogashi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/7本に published が無い

### eat/tonkatsu-kushikatsu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：7/7本に published が無い

### eat/tonkatsu-miso-katsu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/10本に published が無い

### eat/tonkatsu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：12/13本に published が無い

### eat/udon-dagojiru.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：403語

### eat/udon-goto.mdx（スコア 4）
- [mid] 税込不明の金額：1段落（記事内に税込の注記はある）。例: ¥480, ¥480, ¥11,800 … 「- **Gotō te-nobe udon with dietary fibre**, 200 g: ¥480. - **Quick-boil three-minute noodl…」
- [low] 出典の日付なし：22/25本に published が無い

### eat/udon-hoto.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：455語

### eat/udon-sanuki.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.udonbakaichidai.co.jp/

### eat/wagashi-imagawayaki.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：582語

### eat/wagashi.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：9/11本に published が無い

### eat/wagyu.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.jmga.or.jp/standard/beef/

### eat/western-dairy.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/12本に published が無い

### eat/western-italian.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/5本に published が無い

### eat/western-pan.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：5/7本に published が無い

### eat/western-yoshoku.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：13/14本に published が無い

### eat/western.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典の日付なし：10/12本に published が無い

### eat/yakisoba-yokote.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：607語

### eat/yatai-hakata.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.city.fukuoka.lg.jp/d1w_reiki/reiki_honbun/q003RG00001250.html

### eat/yatai.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 出典http：http://www.city.fukuoka.lg.jp/d1w_reiki/reiki_honbun/q003RG00001250.html

### rail/setouchi-area-pass.mdx（スコア 4）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本
- [low] 短い：280語

### soak/hydrogen-carbonate-sulphate-iodine-simple-springs.mdx（スコア 4）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典http：http://www.hokkaidoisan.org/otofuke_moor.html

### soak/kaike.mdx（スコア 4）
- [low] 出典http：http://www.kaike-onsen.com/
- [low] 出典http：http://www.kaike-onsen.com/english/index.php
- [low] 出典http：http://www.kaike-triathlon.com/
- [low] 出典の日付なし：16/18本に published が無い

### soak/nasu.mdx（スコア 4）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：17/22本に published が無い

### soak/onsen-honshu.mdx（スコア 4）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：31/38本に published が無い

### soak/onsen-kyushu.mdx（スコア 4）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）
- [low] 出典の日付なし：31/39本に published が無い

### soak/yugawara.mdx（スコア 4）
- [low] 出典http：http://www.hakone-geopark.jp/area-guide/yugawara/040yugawaraonsen.html
- [low] 出典http：http://yugawara-resort.com/yugawara/
- [low] 出典http：http://yugawara-resort.com/transportation/
- [low] 出典http：http://yugawara-resort.com/information/

### column/reading-menu-prices-in-japan.mdx（スコア 3）
- [mid] 税率の将来変更：2027年4月の消費税1%の記述がある。成立前の予定として日付と留保つきか確認

### eat/conbini-oden.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/conbini-onigiri.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/food-shopping.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/gyoza-hamamatsu.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/gyoza.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/izakaya-kakuuchi.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/izakaya-snack.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/konamono-takoyaki.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/konamono.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/kyodo-ryori-shikoku.mdx（スコア 3）
- [low] 出典http：http://turntable.jp/
- [low] 出典http：http://turntable.jp/access.html
- [low] 出典の日付なし：26/26本に published が無い

### eat/ramen-tsukemen.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/rice-onigiri.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/rice-sides-tofu-natto.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/seafood-anago-hamo.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/seafood-himono.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/seafood-saba-katsuo-maguro.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/seasonal-hinamatsuri.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/seasonal-new-year.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/soba-edo.mdx（スコア 3）
- [mid] 税込不明の金額：2段落（記事内に税込の注記はある）。例: ¥1,000,, ¥1,100,, ¥1,600, … 「- **Sarashina Horii**, Azabu-Jūban (founded 1789). All prices tax included: mori ¥1,000, s…」

### eat/sushi-kanazawa.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sushi.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sweets-amamidokoro.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sweets-conbini.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/sweets.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/tea-kakigori-kissaten.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/udon-hakata.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/udon-osaka.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/wagyu-shabu.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/wagyu-sukiyaki.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/western-burger.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### eat/yakisoba-fujinomiya.mdx（スコア 3）
- [mid] 内部リンクなし：本文に /en/ へのリンクが0本

### soak/acidic-sulphur-radioactive-springs.mdx（スコア 3）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/akiu.mdx（スコア 3）
- [low] 出典http：http://www.akiuonsenkumiai.com/
- [low] 出典http：http://www.akiuonsenkumiai.com/whats.html
- [low] 出典の日付なし：19/23本に published が無い

### soak/carbon-dioxide-chloride-iron-springs.mdx（スコア 3）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/nanki-katsuura.mdx（スコア 3）
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/kumano-sanzan/
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/outline/registered.html
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/outline/henkou2016.html

### soak/tsuetate.mdx（スコア 3）
- [low] 出典http：http://aso-geopark.jp/mainsites/mainsite06.html
- [low] 出典http：http://www.aso-geopark.jp/geosites/geosite19.html
- [low] 出典の日付なし：18/24本に published が無い

### soak/wakura.mdx（スコア 3）
- [mid] 食へのリンクなし：soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）

### soak/yunomine.mdx（スコア 3）
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/outline/
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/outline/registered.html
- [low] 出典http：http://www.sekaiisan-wakayama.jp/know/outline/henkou2016.html

### column/food-souvenirs-omiyage.mdx（スコア 2）
- [low] 出典の日付なし：13/13本に published が無い
- [low] 断定表現：命令調（must / have to）（1件）例: …h the tax-free procedure; tell the customs officer instead. You must have all the items with you at the check, and it cannot be done once they are in checked ba…

### eat/kyodo-ryori-kanto.mdx（スコア 2）
- [low] 出典http：http://www.tochimaru-shop.com/
- [low] 出典の日付なし：69/72本に published が無い

### eat/kyodo-ryori-kinki.mdx（スコア 2）
- [low] 出典http：http://totsukawa.info/joho/event/kyarakuta.html
- [low] 出典の日付なし：76/80本に published が無い

### eat/kyodo-ryori-tohoku.mdx（スコア 2）
- [low] 出典http：http://www.midette.com/
- [low] 出典の日付なし：53/56本に published が無い

### eat/soba-jindaiji.mdx（スコア 2）
- [low] 出典の日付なし：10/11本に published が無い
- [low] 断定表現：最上級・順位の断定（1件）例: …comparison. ## How to eat it The union's own menu page is the best local guide. 1. **Go early.** Many shops close with the temple gate at about 5 p.m. 2. **C…

### eat/soba-tachigui.mdx（スコア 2）
- [low] 出典の日付なし：10/13本に published が無い
- [low] 温泉へのリンクなし：本文で温泉に触れているが /en/soak/ へのリンクが0本

### soak/akanko.mdx（スコア 2）
- [low] 出典http：http://en.kushiro-lakeakan.com/overview/2830/
- [low] 出典の日付なし：18/19本に published が無い

### soak/aso-uchinomaki.mdx（スコア 2）
- [low] 出典http：http://aso-geopark.jp/mainsites/mainsite06.html
- [low] 出典の日付なし：24/32本に published が無い

### soak/ibusuki.mdx（スコア 2）
- [low] 出典http：http://www.pref.kagoshima.jp/ac11/documents/73371_20220328095108-1.pdf
- [low] 出典の日付なし：20/21本に published が無い

### soak/kirishima.mdx（スコア 2）
- [low] 出典の日付なし：13/14本に published が無い
- [low] 断定表現：最上級・順位の断定（3件）例: …ama). Its latest commentary for the mountain as a whole was No. 1 of 17 January 2026, and its monthly report for September 2026 was issued on 8 October. ## The…

### soak/ureshino.mdx（スコア 2）
- [low] 出典http：http://www.takeo-kk.net/access/
- [low] 出典の日付なし：16/16本に published が無い

### soak/yamanaka.mdx（スコア 2）
- [low] 出典http：http://www.kaga-canbus.jp/
- [low] 出典の日付なし：16/17本に published が無い

### column/eating-in-japan-allergies.mdx（スコア 1）
- [low] 出典の日付なし：6/7本に published が無い

### column/eating-out-with-children-in-japan.mdx（スコア 1）
- [low] 出典の日付なし：10/13本に published が無い

### column/japanese-table-customs.mdx（スコア 1）
- [low] 出典の日付なし：8/10本に published が無い

### column/queues-and-shared-tables.mdx（スコア 1）
- [low] 出典の日付なし：5/7本に published が無い

### eat/instant-noodles.mdx（スコア 1）
- [low] 出典の日付なし：20/25本に published が無い

### eat/kyodo-ryori-chubu.mdx（スコア 1）
- [low] 出典の日付なし：54/58本に published が無い

### eat/kyodo-ryori-hokkaido.mdx（スコア 1）
- [low] 出典の日付なし：17/17本に published が無い

### eat/kyodo-ryori-hokuriku.mdx（スコア 1）
- [low] 出典の日付なし：43/47本に published が無い

### eat/kyodo-ryori-sanin.mdx（スコア 1）
- [low] 出典の日付なし：31/32本に published が無い

### eat/kyodo-ryori-setouchi.mdx（スコア 1）
- [low] 出典の日付なし：39/40本に published が無い

### eat/ramen-onomichi.mdx（スコア 1）
- [low] 出典http：http://www.onomichi-cci.or.jp/gourmet/

### eat/sake-akita.mdx（スコア 1）
- [low] 出典の日付なし：10/12本に published が無い

### eat/udon.mdx（スコア 1）
- [low] 出典の日付なし：11/14本に published が無い

### soak/asamushi.mdx（スコア 1）
- [low] 出典の日付なし：17/22本に published が無い

### soak/echigo-yuzawa.mdx（スコア 1）
- [low] 出典http：http://www.e-yuzawa.gr.jp/yukigunikan/info/

### soak/hakone.mdx（スコア 1）
- [low] 出典http：http://www.owakudani.com/

### soak/higashiyama.mdx（スコア 1）
- [low] 出典の日付なし：19/19本に published が無い

### soak/hinagu.mdx（スコア 1）
- [low] 出典の日付なし：20/25本に published が無い

### soak/iizaka.mdx（スコア 1）
- [low] 出典の日付なし：20/22本に published が無い

### soak/ikaho.mdx（スコア 1）
- [low] 出典の日付なし：23/29本に published が無い

### soak/isawa.mdx（スコア 1）
- [low] 出典の日付なし：19/24本に published が無い

### soak/jozankei.mdx（スコア 1）
- [low] 出典の日付なし：15/15本に published が無い

### soak/minakami.mdx（スコア 1）
- [low] 出典の日付なし：18/24本に published が無い

### soak/nagato-yumoto.mdx（スコア 1）
- [low] 出典の日付なし：15/20本に published が無い

### soak/okuhida.mdx（スコア 1）
- [low] 出典の日付なし：18/25本に published が無い

### soak/sounkyo.mdx（スコア 1）
- [low] 出典の日付なし：11/12本に published が無い

### soak/tamatsukuri.mdx（スコア 1）
- [low] 出典の日付なし：12/12本に published が無い

### soak/togura-kamiyamada.mdx（スコア 1）
- [low] 出典の日付なし：11/13本に published が無い

### soak/toyako.mdx（スコア 1）
- [low] 出典の日付なし：16/18本に published が無い

### soak/tsukioka.mdx（スコア 1）
- [low] 出典の日付なし：12/14本に published が無い

### soak/unazuki.mdx（スコア 1）
- [low] 出典の日付なし：12/15本に published が無い

### soak/unzen.mdx（スコア 1）
- [low] 出典の日付なし：19/22本に published が無い

### soak/yubara.mdx（スコア 1）
- [low] 出典の日付なし：18/20本に published が無い

### soak/yuda.mdx（スコア 1）
- [low] 出典の日付なし：21/22本に published が無い

### soak/yudanaka-shibu.mdx（スコア 1）
- [low] 出典の日付なし：14/15本に published が無い

### soak/yunoyama.mdx（スコア 1）
- [low] 出典の日付なし：12/17本に published が無い

### soak/zao.mdx（スコア 1）
- [low] 出典の日付なし：14/16本に published が無い

## 3. 指摘が無かった記事

column/chopsticks-in-japan.mdx、column/eating-in-japan-vegetarian.mdx、column/eating-while-walking-in-japan.mdx、column/paying-at-restaurants-in-japan.mdx、column/restaurant-reservations-in-japan.mdx、column/roadside-stations-and-farm-stands.mdx、column/slurping-noodles.mdx、eat/izakaya.mdx、eat/ramen-tokushima.mdx、soak/ginzan.mdx、soak/nagayu.mdx、soak/ogoto.mdx、soak/shima.mdx、soak/shirahone.mdx、soak/sukayu.mdx
