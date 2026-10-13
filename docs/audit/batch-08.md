# 見直しバッチ8（2026-10-13）

対象6本（寿司の系譜1本＋寿司・甘味・茶・定食・とんかつの品目ハブ5本）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のコード（src/components/{DishPrices,RateNote}.astro）、src/data/lineages/{sushi,sweets,tea,teishoku,tonkatsu}.json、src/data/food-prices.chain.json。LineageTable.astro は今回は開かず、batch-07 の確認（公開済み系譜の行だけリンクになる）を前提にした。
F の照合先（各1本のみ）: sushi-saba→sushi-osaka-hako（battera の起源の書き方・食べ頃の目安が食い違う）／sushi→sushi-edomae（豊洲の記述と「1820年」の言い方が食い違う。価格・順位・店の創業年は一致）／sweets→sweets-yogashi（年代・内容は一致。FAQ が片方の説だけ）／tea→tea-regions（後半の価格・店の節まで確認。定義・順位・価格・営業時間は一致、食い違いなし）／teishoku→teishoku-morning（価格は一致。Sukiya・Matsuya の扱いが食い違う）／tonkatsu→tonkatsu-miso-katsu（店舗数の言い方のみ）。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし」: 6本とも本文（Markdown）のリンクは0本で検出どおり。ただしハブ5本は `<LineageTable>` が公開済みの系譜ページへのリンクを出す（sushi 8本＝edomae・kaiten・osaka-hako・masu・funa・kakinoha・saba・kanazawa、sweets 5本＝amamidokoro・yogashi・crepe・yakiimo・conbini、tea 2本＝regions・kakigori-kissaten、teishoku 2本＝washoku-breakfast・morning、tonkatsu 2本＝miso-katsu・kushikatsu。lineages/*.json の status は全行 published）。sushi-saba は Article.astro のパンくずで親ハブ（/en/eat/sushi/）へのリンクを出す（batch-06・07 で確認済み）。E は、これらが拾わない本文中の名指しに絞った。
- 「税込不明の金額」: tea（4段落）は誤検出。¥10,030・¥2,278・¥882 や表の荒茶価格は農水省の卸売統計で店頭価格ではなく、店の価格は節頭の「Prices below are tax included, as posted by the operator」の下にある。teishoku（2段落）も誤検出で、箇条書き直前に「Breakfast sets, tax included」がある。tonkatsu は Katsuya の文に「tax included」がある。逆に **sushi は検出されていないが、記事全体に「税込／tax」の語が無い（high、後述）**。
- sushi-saba の「効能の断定の可能性」は誤検出（"the same cure" の cure は塩締めの意味）。
- tonkatsu の「出典の日付なし 12/13本」は事実だが、官公庁・企業ページは日付が無いこともあり、キッコーマン機関誌など日付を足せるものだけ low。

テンプレ側の事実（記事ではなくコンポーネント。今回 DishPrices.astro と RateNote.astro を読んで確認）:
- `DishPrices.astro` が出すのは「Survey（金額・official.definition・月・area。定義と area は日本語のまま）」「Chains（最小〜最大の範囲、what、チェーン名）」「Local」「Tourist area」だけ。**税込の注記は出さず、chain.json の `note`（例: Dipper Dan の "tax not stated on the menu"、すしざんまい昼の "Tax is not stated on the lunch menu"）・`memo`・`unresolved` も表示しない。** そのため、データ側で「税の記載なし」とわかっている金額も、画面では税込かどうか分からない形で出る。本文が直後に「tax included」と書いても、その文はコンポーネントの値には掛からない。
- 「keys が記事の話題と合っているか」の結果: sushi-saba は不適合（high）、sweets は 'parfait'（ファミレスのサンデー）と 'crepe'（Dipper Dan のみ）が不適合、teishoku は 'famires-lunch'（ファミレスのランチ）が不適合、sushi・tonkatsu のキーは話題に合う。tea は DishPrices を使っていない。
- 末尾の `RateNote` は pricesCheckedOn があれば "Fares verified {月} — check the operator before you travel." を出す（RateNote.astro 19行）。6本とも pricesCheckedOn があるが、運賃を載せている記事は1本も無い。sweets・tea・tonkatsu は本文に「Fares and travel times are not on this page yet.」と書いており、同じページに「運賃は確認済み」と「運賃は載せていない」が並ぶ。

---

## eat/sushi-saba.mdx
- 総評: 「店と値段」節に回転寿司の価格（DishPrices 'sushi-kaiten'）が出ていて、京都の鯖寿司の値段のように見える点が読者に実害（high）。物語としては読みやすいが、出典に無い統計と因果の断定、到着日数の食い違い、出典の無い行き方・売り場の記述が目立つ。
- [high] B — 「The shops, and what they charge」に `<DishPrices keys={['sushi-kaiten']} />`。画面には「Survey ¥241（回転ずし店 にぎりずし／まぐろ（赤身）／2個 · Aug 2026）」と「Chains ¥110–120 Cheapest plate · Kura Sushi, Hama Sushi, Sushiro」が出る。京都の鯖寿司の節に回転寿司の皿の値段が並び、直後の「Izuu, in Gion, does not publish prices」と食い違い、税込の表示も無い — keys を外す（鯖寿司に合う基準価格キーは無い）。価格が無い節なら見出しも "Where to buy it" などに。
- [high] A — 「Kyoto households rank 36th of 52 cities for noodles eaten out and above average for sushi, and saba-zushi is a large part of why: it is bought, not cooked.」 — 家計調査の出典が sources に無く、調査名・年も無い。寿司の記事に「noodles」の順位が入っており他記事の流用の疑い。「saba-zushi is a large part of why」は根拠の無い因果の断定 — 段落ごと削除。寿司の順位を使うなら sushi-osaka-hako と同じ家計調査（stat.go.jp）を sources に足して事実だけ書き、理由づけはしない。
- [mid] A — 到着までの日数が3通りある。description「reached Kyoto two days later」、冒頭と FAQ「two or three days later」、本文「the Saba Kaidō, the "mackerel road" from Wakasa, a day's walk north」。「a day's walk north」は若狭から京都までの距離と合わない恐れ（要確認） — 農水省の表現に揃えて日数を1つにし、「the ministry says」を付ける。
- [mid] A — 「Why Kyoto」節が推測を事実として書く。「A capital of courtiers and temples needed celebration food that could be made ahead and carried to a viewing stand, and salted fish from the north coast arrived in exactly the condition to make it.」「finished by a court cook」 — 農水省の行事食・鯖街道の記述と筆者の推測が混ざる。「court cook」は本文で書く Izuu の創業者（店の歴史では、庶民の食べ物を料理人の技で磨いた）とも合わない — 出典のある部分だけ残し、推測の文は削る。
- [mid] A — 売り場・行き方に出典と確認日が無い。「the department-store food halls at Kyoto station carry it from several makers at bento-and-up prices」「Izuu is in Gion, a few minutes' walk from Gion-Shijō station on the Keihan line」「Obama ... is two hours north by bus or rail and has a museum of the mackerel road」 — sources は農水省・いづう「歴史」・NDL だけ。Obama が福井県であることも、museum の名前も無い — 公式（店・市）の出典と確認日を足すか、所要時間と名称の無い museum を削る。
- [mid] A — 食べ頃の帰属が無い。「It is best a few hours after it is made and good the next day」 — 食品の持ちに関わる記述で出典なし。sushi-osaka-hako は同種の押し寿司を「at its best an hour or two after pressing」と別の目安で書いている（F） — 店または農水省の記述に帰属させ、「購入時の表示に従う」を添える。
- [mid] F — 「Osaka's *battera* is the same cure in a rectangular mould, named after a Portuguese boat in 1891. Nara's *kakinoha-zushi* is a single slice of the same salted mackerel」 — sushi-osaka-hako は battera が「1891年に Sushi-tsune が当初はコノシロで作り、のちに安い鯖と四角い型に変わった」と書く。「same cure」は最初から鯖だったように読める。また batch-07 の F で、sushi-kakinoha 側とこの記事で鯖の産地・経路が食い違うと指摘済み。「the same salted mackerel」が該当する可能性 — 「battera began with gizzard shad」を足し、kakinoha の鯖の経路は kakinoha ページに揃える。
- [mid] D — 作業メモ口調。「Izuu, in Gion, does not publish prices in a form this site could verify」 — 「公式サイトに価格の掲載なし」と事実だけにする。
- [low] A — 出典の無い一般論。「Fukui, at the other end of the mackerel road, has its own pressed mackerel.」「In Tokyo, where "mackerel sushi" means a piece of *shime-saba* nigiri, the log is an exotic.」「A touch of soy is permitted by the ministry and frowned on by purists.」 — 「Fukui」は Obama と同じ県なのに別の土地のように読める。「purists」は誰か不明 — 削るか出典を付ける。
- [low] A — 店の歴史の帰属が途中で切れる。「It added seats for eating in only around 1970; for two centuries it was a shop you carried from.」「The city's great house of the dish is Izuu」 — 「by the shop's own history」を続けて付ける。"great house" は優劣に読めるので "the best-known shop" など事実の語に。
- [low] D — description「seasoned exactly」は英語として不自然（本文の引用 "at just the right strength" のほうが自然）。
- 内部リンク候補:
  - /en/eat/sushi-osaka-hako/ （「Where it came from」末尾の "Osaka's *battera* ... is this dish's city cousin" と「Saba-zushi away from Kyoto」の battera。battera の由来と箱寿司を扱う）
  - /en/eat/sushi-kakinoha/ （「Saba-zushi away from Kyoto」の "Nara's *kakinoha-zushi*"。同じ鯖の別形）
  - /en/eat/sashimi-shime/ （「Tokyo ... *shime-saba* nigiri」の文と「What makes it saba-zushi」の塩・酢の締め。鯖の締め方の解説）
  - /en/eat/seafood-saba-katsuo-maguro/ （冒頭の若狭の鯖。鯖そのものの話）
  - /en/soak/kinosaki/ （「Getting there」の末尾。kansai で重なり、京都から行く外湯の町。Kinosaki 側に京都発の行き方があるか要確認）

## eat/sushi.mdx
- 総評: 構成・帰属ともに強い1本だが、「What it costs」の金額に「税込」の語が記事全体で一度も無く、すしざんまいの昼は chain.json に「Tax is not stated on the lunch menu」とある店の金額を載せている点が方針違反（high、ARTICLE-AUDIT 未検出）。タイトルの最上級、「eats」と「spends」の混同、安全性の比較の断定も直したい。
- [high] B — 税込の明記が全文に無い。「The plate. ¥110–150 for the cheapest plate of two pieces at Kura, Hama or Sushiro ... Sushizanmai's weekday sets run ¥1,188–2,530 and its regular nigiri sets ¥3,828–5,478 all day; Yoshino-zushi ... lunch nigiri at ¥2,750–3,850 and evening nigiri from ¥4,950 ... omakase ... starts around ¥16,500 ... ¥19,800–20,000」、FAQ「¥1,188–3,850 for a set lunch」。すしざんまいの昼は税の記載が無い（chain.json の note）。吉野鮨は sushi-edomae が「prices shown before tax with the tax-included figure alongside」と書くが、ハブはどちらの数字か書かない（2,750＝2,500×1.1 なので税込の数字と見えるが推測） — 店ごとに「tax included」を書く。すしざんまいの昼は金額を外すか「tax not stated on the menu」と明記。吉野鮨は「tax-included figure」と書く。
- [mid] A — タイトル「the most expensive meal in Japan」 — 選定主体も比較の根拠も無く、本文は「There is no ceiling」「The spread is the widest of any dish on this site」とサイト内の比較に留まる。懐石など他に高い食事もある — 「one of the widest price ranges in Japanese food」など、または根拠の出典を付ける。
- [mid] A — 支出を「食べる量」に言い換えている。FAQ「Where does Japan eat the most sushi? Kanazawa.」、「And the city that eats the most of it is not Tokyo.」、誤解の節「Kanazawa eats it most.」 — 家計調査（外食「すし」）は世帯の支出額で、対象は52の県庁所在市・政令市に限る。量や全国の都市の比較ではない — 質問文・見出しを「spends the most among the 52 cities in the household survey」に。
- [mid] A — 安全性の比較と「always」。「The cured and frozen fish of a modern sushi shop is safer than the romance of "fresh" suggests.」「"Fresh is best." Cured, aged and frozen is how the trade has always handled a fish that spoils in hours and carries a parasite that soy sauce does not kill.」 — 出典は厚労省のアニサキス記事で、「safer than」の比較は出典に無い。「always ... frozen」は同じ記事の「Edo had no refrigeration」と矛盾 — 厚労省の対策（−20℃で24時間、70℃加熱）だけを帰属つきで書き、「safer」「always」を削る。
- [mid] B — 効能に読める記述。「Shiga's funazushi ... still goes to shrines as an offering and to the sick as a remedy.」 — 帰属が無く、「remedy」は効能の断定に近い — 農水省の記述に基づくなら「the ministry says it is given to the sick」と帰属し、薬としての扱いは書かない。
- [mid] A — 数字の主体と時点が文中に無い。「Four chains now run more than 2,400 shops in Japan and the industry body counts more than 4,000 in all.」「The trade body, founded in 1961 with some 5,000 member shops」「4,000 shops, and 65% of people who eat sushi out eat it there」 — どのチェーン・団体・年の数字か分からず、"now" に日付がない — 「by the Umios 2026 survey」「as of 2023, per the health ministry」など出典と年を付ける。
- [mid] A — 「¥20–30 more at their city-centre branches」 — chain.json の差は Kura 110→145（+35）、Hama 110→121（+11）、Sushiro 120→150（+30）で、記事の範囲と合わない — 店ごとに書くか「roughly ¥10–35 more」に。
- [mid] F — 「the Toyosu market's restaurant row opens at five in the morning」 — sushi-edomae は「public viewing deck open 05:00–17:00 and tuna-auction viewing by advance lottery」と書き、飲食店街の開店時刻とは書いていない。ハブの sources にも豊洲市場の出典が無い — 見学デッキの時間との混同の恐れ。市場の公式出典を足し、飲食店の営業時間は「店による」。
- [low] F — 「at some point before the 1820s somebody took the portion of a pressed box-sushi and shaped it by hand」 — sushi-edomae は「by the 1820s, probably earlier」「shop in Ryōgoku in 1824」、description は「around 1820」 — 「by the 1820s」に統一。
- [low] D — description「Fermented carp became Edo fast food around 1820」 — 本文は酢の登場（1750年代）を経て握りになったと書き、ふなずし（コイ）が直接握りになったのではない — 「Fermented fish ...」か「Sushi began as fermented fish ...」に。
- [low] A — 帰属の弱い小話と最上級。「Fatty tuna belly was disliked and fed to cats; the word *toro* for it is said to date from a Nihonbashi shop in the 1920s.」「the one Japan itself argues about most」 — sushi-edomae は「The library adds」「by the shop's own account」と帰属している。ハブにも同じ帰属を。
- [low] D — 「the industry's own respondents say the best belts to travel for are in Hokkaido, Ishikawa and Toyama」 — 調査名が無く、"best" は優劣の語 — 「respondents to the Umios 2026 survey most often named ...」に。
- 内部リンク候補:
  - /en/eat/market-toyosu/ （「Where to eat it」の Edomae の箇条書き。Toyosu の見学・競りの記述はこのページが扱う。上の F の確認先にもなる）
  - /en/eat/sashimi-shime/ （「"Raw" is the exception, historically」の *shigoto*（酢・塩の締め）。昆布締め・しめ鯖の解説）
  - /en/column/reading-menu-prices-in-japan/ （「The counter」の *jika*（時価）と "Ask before you order"。時価・税込表示の読み方）
  - /en/soak/yamashiro/ （「The Sea of Japan」の箇条書き "Kanazawa for nigiri"。hokuriku で重なる加賀の総湯の温泉）
  - /en/soak/wakura/ （同じ箇条書き。能登。2024年以降の状況は Wakura 側で確認のうえ）

## eat/sweets.mdx
- 総評: 会社の主張を主張として扱う姿勢は方針に沿っている。直すべきは、価格欄の DishPrices（ファミレスのサンデーと、税の記載が無いと分かっているクレープ屋の価格）が税込の明記も本文の話題との一致も欠く点（high）。第一人称の作業メモ口調が多く、出典に無い店の推薦もある。
- [high] B — `<DishPrices keys={['parfait', 'crepe']} />`。'crepe' は Dipper Dan のみで、chain.json の note に「tax not stated on the menu」とあるのに、画面は「Chains ¥450–750 Standard crepes, cheapest to most expensive · Dipper Dan」と税の注記なしで出す。直後の「Prices below are tax included」は "below" の箇条書きに掛かり、"above" の値は対象外と本文自身が分けている。本文は「Marion ... I could not find the normal price on its official pages」と言うので、画面は別の店の価格を代わりに見せる形にもなる — 'crepe' を外す（DishPrices 側で税の注記を出すなら残せる）。
- [mid] D — 'parfait'（"A standard chocolate sundae or parfait at a family restaurant": Gusto ¥439・Denny's ¥770・Royal Host ¥1,298）は、本文の5群（甘味処・洋菓子・クレープ・焼き芋・コンビニ）のどれでもなく、本文は parfait の価格を扱わない。どの甘味の値段か読者に分からない — キーを外すか、ファミレスのデザートを一文で説明。
- [mid] A — frontmatter の sources に無い店と主張。「Kyoto — Bunnosuke Chaya in Higashiyama, a sweet tea house known for warabi-mochi and amazake, introduced by the city's official tourism site.」「The farm ministry says Yoshino's winter cold and water are behind its *kuzu* starch, and that warabi-mochi in Nara is sold mainly at the prefecture's confectioners.」 — 京都市の観光サイトも農水省「うちの郷土料理」（奈良）も sources に無い — sources に追加するか削除。
- [mid] D — 第一人称の作業メモ口調が多い。「They are a loose family, and I have not tried to make them a tidy one.」「None of these is confirmed by an independent source I could find, so read each as the company telling its story.」「I put the two facts side by side; I have not found a source that says one caused the other.」「I could not find the normal price on its official pages.」「I looked for official sources comparing these sweets at home and away ... and found none.」、FAQ の答えにも「I could not find an independent source confirming it.」 — 「出典は会社の説明のみ」「公式資料に記載なし」と主語を出典にし、FAQ から "I" を除く。
- [mid] D — 「Fares and travel times are not on this page yet.」 — 公開本文に工事中の文が残り、末尾の RateNote は "Fares verified Oct 2026" を出す（テンプレ側と矛盾） — 削除。
- [low] C — 日付のある限定価格と過去形の商品。「FamilyMart's new double cream puff is ¥199 from 13 October 2026」「Marion Crepes will sell its banana-chocolate-cream crepe for ¥390 on 21 October 2026」「Seven-Eleven sold a Shizuoka-tea pudding only in Yamanashi and Shizuoka」 — 確認日（10/10）から数日で入れ替わる類の情報。過去形の商品には年月が無い — 「Oct 2026 releases」と書き、終了後に差し替える運用に。
- [low] A — 「Kawagoe's potatoes made their name feeding them」「the city says it grows far fewer now」 — "feeding them" の主語が曖昧、"now" に日付が無い — 「feeding that trade」「as of the city's page」。
- [low] F — FAQ「Is the Japanese strawberry shortcake Japanese? Fujiya, the confectioner, says so.」 — sweets-yogashi は Fujiya の説明が2通り（FAQ は自ら考案、100周年ページはアメリカで出会い改良）と書き、ハブの表の下も "tells its shortcake story two ways" と書く。FAQ の答えだけ前者に寄っている。なお yogashi 側の「That puts "shortcake" on a menu well before Fujiya's 1922」は、メニューの年が出典に無いなら言い過ぎで、ハブの「Whether that was the same cake, the sources do not say」のほうが慎重（yogashi 側の確認用メモ）。
- 内部リンク候補:
  - /en/eat/wagashi/ （冒頭1段落目「Japan's traditional confectionery — *wagashi* ... has its own overview on this site」。名指しのみ）
  - /en/eat/tea-kakigori-kissaten/ （「Two sweets you might expect here live elsewhere: shaved ice (*kakigori*) is on the tea and kissaten page」）
  - /en/eat/wagashi-imagawayaki/ （同じ文の "*taiyaki* and *imagawayaki* are with wagashi"）
  - /en/eat/conbini/ （冒頭の "and the convenience store" と「Convenience-store sweets」の項。表のリンクは sweets-conbini のみ）
  - /en/soak/hakone/ （「Yokohama — Hotel New Grand」の箇条書き。kanto で重なる。結びつきは弱いので採否は要判断）

## eat/tea.mdx
- 総評: 数字の帰属と税込の明記が最も丁寧な1本で、読者に実害のある点は見つからなかった（high なし）。残るのは、ministry の数字の整合（一番茶の番茶の価格、荒茶の産出額）、期間限定品を含む価格欄の鮮度、作業メモ口調。
- [mid] A — 一番茶の番茶の価格が表と食い違う。「The first picking of the year is worth more: in 2025 first-flush tencha averaged ¥10,030 per kg and first-flush sencha ¥2,278, against ¥882 for first-flush bancha.」 — 上の表では番茶（通年平均）が ¥1,812 で、一番茶の番茶（¥882）はその半分以下。「初摘みは高い」という文脈と合わない — 出典の定義（秋冬番茶を含む等）を確認し、番茶の例を外すか注記。要確認。
- [mid] A — 「The crude-tea stage was a ¥76.3 billion industry in 2024.」 — 同記事の数字と整合しない。2025年の荒茶75,100トン（tea-regions の表）のうち、煎茶48.1%（約36,000トン）×¥1,746/kg だけで約¥630億、てん茶8.6%（約6,500トン）×¥8,562/kg で約¥550億になり、2種の合計（約¥1,180億）だけで ¥76.3 billion（約763億円）を超える。「production shares」が量か額かも書かれていない。¥76.3 billion が何の指標か（農業産出額か）が文中に無い — 指標名と年を明記するか、数字を削る。要確認。
- [mid] C — 期間限定・季節品が価格欄に混ざる。「Uji kintoki shaved ice (late April to mid-September) — ¥1,090 with vanilla ice cream」（確認日 10/10 は販売期間の終了後）、「Starbucks lists a GINZA stone-ground matcha Frappuccino at ¥1,240 for a Tall, in limited stores」（販売期間なし）、「a matcha Mont Blanc parfait ... is planned from mid-September to late October at ¥1,390」 — 終了で古くなる — 販売期間を明記し、通年メニュー（抹茶・煎茶・定番パフェ）を中心に。
- [mid] D — 作業メモ口調。「How many households still own or use a teapot, I could not find in an official source.」「The survey covers home purchases; how it treats eating out, business use and gifts, I could not confirm.」「I have not given prices for Nakamura Tōkichi, another well-known Uji tea house, because its menus are images and I could not confirm whether they include tax.」「I could not compare like with like. I found no official, tax-included prices for the same parfait ...」「I give both rather than choose.」 — 「公式資料に記載なし」と事実だけに。Nakamura Tōkichi の一文は他店を名指しして「載せなかった理由」を書いており、読者に不要なので削除。
- [mid] D — 「Fares and travel times are not on this page yet.」 — 工事中の文が残り、末尾の RateNote「Fares verified Oct 2026」と矛盾 — 削除。
- [low] C — 営業時間・予約の有無に日付が無い。「the Itohkyuemon tea room is open 10:00–18:00 (last orders 17:30). It takes no reservations by phone or otherwise」 — 「as posted on 10 October 2026」を付ける。
- [low] A — 出典の無い補足。「Natural ice is not guaranteed. The natural ice used by a long-established Nagatoro shop runs out, and when it does the shop switches to manufactured ice.」 — この記事の sources に氷の出典が無い（系譜ページの sources にあるはず） — 出典を足すか、系譜ページへのリンク一文に。
- [low] D — 「Where to drink it」の「Nishio, Aichi — matcha country by its own description」「Yame, Fukuoka — shaded gyokuro, on the regions page」「Shizuoka — sencha」 — 見出しは「どこで飲むか」だが、飲める場所（店・施設）が書かれていない — 公式出典のある店を足すか、見出しを「Where the tea regions are」に。
- 内部リンク候補（表の LineageTable が tea-regions・tea-kakigori-kissaten へのリンクを出すが、文中の名指しはリンクなし）:
  - /en/eat/tea-regions/ （「The tea ceremony shaped matcha」末尾の "The regions page covers the schools of the ceremony" と、「Where to drink it」の Nishio・Yame）
  - /en/eat/tea-kakigori-kissaten/ （「Where to drink it」の Nagatoro "see the shaved ice and coffee house page"）
  - /en/eat/teishoku-morning/ （「Where to drink it」の Nagoya "see the separate page on Nagoya's morning service"）
  - /en/soak/ureshino/ （「Where to drink it」の Yame と並ぶ九州の茶どころ。kyushu で重なる。Ureshino ページが嬉野茶を扱っているか要確認）
  - /en/soak/atami/ （「Where to drink it」の Shizuoka の箇条書き。tokai で重なる。Itō・Shuzenji でも可）

## eat/teishoku.mdx
- 総評: 農水省の「型」の説明は帰属が丁寧で読みやすい。実害は、DishPrices が Sukiya・Matsuya の朝食価格を税込の明記なしに出し、系譜ページ（morning）が「税込の記載なし」「価格の記載なし」として載せなかった同じ店の価格と食い違う点（high）。また 'famires-lunch'（ファミレスのランチ）は定食ではなく、タイトルの「rice you can refill」は本文が支えていない。
- [high] B — `<DishPrices keys={['wa-breakfast', 'morning', 'famires-lunch']} />`。'wa-breakfast' は chain.json の Sukiya ¥330・Matsuya ¥350・Yoshinoya ¥430 を「Chains ¥330–430」として税の注記なしで出す。一方、系譜ページ teishoku-morning は「Matsuya ... its page does not say whether prices include tax, so none are given」「Sukiya ... its page gives no prices」と書いて同じ店の価格を載せていない。ハブの箇条書きの直前の「tax included」は Yayoi-ken・Yoshinoya の2店分で、コンポーネントの値には掛からない（別の店の注記を流用できない） — Sukiya・Matsuya を DishPrices の対象から外すか、公式で税込を確認してから。morning ページの「Sukiya ... its page gives no prices」も chain.json に Sukiya の公式ページ（¥330）があるので確認を（F）。
- [mid] D — 'famires-lunch'（"Weekday lunch set, drink bar extra": Saizeriya のスパゲッティ／ハンバーグ ¥500–600、Joyfull ¥500–700、Gusto ¥500–824）は定食ではなく、本文にファミレスの話が無い。逆に、本文で紹介する Yayoi-ken・Ōtoya の昼夜の定食の値段はどこにも出ない — 'famires-lunch' を外し、やよい軒（sources に東京メニューあり）の定食を税込価格つきで数点足す。
- [mid] D — タイトル「and the rice you can refill」 — 本文は「At some chains」「At Yayoi-ken, yes. Elsewhere, ask.」と、おかわり自由を明記する店は1チェーンだけ。タイトルは一般論に読める — 「and which chains say the rice is refillable」にするか、タイトルから外す。
- [mid] A — 最上級。「A *teishoku* — a set meal — is the most ordinary restaurant meal in Japan」 — 比較の根拠も出典も無い — 「a very common restaurant meal」に、または出典を付ける。
- [mid] D — 読者の主な疑問に答えていない。FAQ にも本文にも「定食1食はいくらか」が無く、載っているのは朝食（¥430–640）だけ — 上の通り、やよい軒の定食の税込価格を足す。
- [mid] D — 作業メモ口調。「I could not find an official history of the word *teishoku* or of the set-meal restaurant, so this section describes what the chains sell today, not where it came from.」「I have found no statistics showing how many meals in Japan actually follow it.」「Its pages say nothing about rice refills.」 — 「公式資料に記載なし」と事実だけに。
- [low] B — 店内か持ち帰りかが書かれていない。「Yoshinoya: nattō set ¥430, grilled fish ¥530 ... ham-egg and nattō ¥468 ... a small beef-bowl breakfast set ¥519」 — 軽減税率で店内10%・持ち帰り8%の2価格がある。tea の記事は「10% for eating in and 8% for takeaway」を説明しているが、この記事には無い — 「eat-in prices, tax included」と確認できた範囲で書く。
- [low] D — 「Ōtoya. Charcoal grilling, raw garnishes such as grated ginger, and a "100% domestic rice" heading on its site.」 — 店の宣伝文の羅列で、"raw garnishes such as grated ginger" は意味が取りにくい — 事実を1〜2点に絞る。
- [low] D — ichijū sansai が2通り。FAQ「rice, a soup, a main dish and two side dishes」、本文「another ministry page counts it as rice and soup plus three dishes」 — 本文は併記で方針どおり。FAQ にも一言。
- 内部リンク候補:
  - /en/column/japanese-table-customs/ （「How it is laid out」。左に飯・右に汁、器を持ち上げる作法）
  - /en/eat/rice-sides-tofu-natto/ （Yayoi-ken・Yoshinoya の nattō 朝食）
  - /en/eat/nabe-miso/ （「The soup is miso soup or a clear soup」。地域ごとの味噌汁）
  - /en/column/how-meal-ticket-machines-work/ （「How the chains sell it」の Yayoi-ken・Yoshinoya。食券機でチェーンを扱うか要確認）
  - /en/soak/hakone/ （「Where to eat it」の "A ryokan — the full Japanese breakfast"。kanto で重なる。旅館の朝食を扱う温泉ページがあれば優先。要確認）

## eat/tonkatsu.mdx
- 総評: 起源の複数説を併記する姿勢は方針どおりで、Katsuya の価格は税込と明記されており、読者に実害のある誤りは見つからなかった（high なし）。直したいのは、1つの出典の説を断定に変えている箇所、帰属の無い段落、DishPrices の2店（Matsunoya・Wako）に税込の記載が無い点、作業メモ口調。
- [mid] A — 出典付きの説を断定にしている。「So the tonkatsu set — cut pork, raw cabbage, rice — is Rengatei's answer to a staffing problem, plus a sauce from butchers' counters.」「**"The cabbage is a garnish."** It began as a substitute for cooked vegetables in a short-handed kitchen.」 — キャベツは「Kikkoman's research journal says」の1説で、Chūō 観光協会は「said to have started there」と留保している。まとめの文と誤解の節がその留保を落としている — 「in Kikkoman's account」を残し、断定をやめる。
- [mid] A — 帰属の無い段落。「**The rice.** Customers wanted rice, not bread, so the restaurant served rice on a flat plate.」「**The sauce.** Yamasa Shōyu launched "Mikado Sauce" in 1885 and stopped making it within about a year. A Japanese sauce built on soy sauce was completed in the Meiji 40s ... butchers who gave away sauce ... spread it.」「**Chopsticks.** ... Tonkatsu came cut from the start, so it could be eaten with chopsticks」 — どの出典の記述か不明（sources にキッコーマンの展示と機関誌がある） — 段落ごとに「Kikkoman's exhibition says」などを付ける。
- [mid] B — `<DishPrices keys={['tonkatsu']} />` は Matsunoya ¥690・Katsuya ¥913・Tonkatsu Wako ¥1,530 を「Chains ¥690–1,530」として出す。直後の「From one chain, Katsuya, tax included」は Katsuya だけに掛かる。Matsunoya と Wako の税込は記事内に無く、Wako は chain.json の memo に「東京の特定店舗では未照合」とある（memo は画面に出ない） — Wako を外す、または公式で税込を確認してから。
- [mid] D — 作業メモ口調。「The farm ministry notes that pork cuts are defined in a national retail quality standard; I have not read that standard, so the definitions here are the shops'.」「There is no single national definition that I could find.」、FAQ にも「I could not find a single national rule.」、「Fares and travel times are not on these pages yet.」（末尾の RateNote「Fares verified Oct 2026」と矛盾） — 「公式資料に記載なし」「店の説明による」に。工事中の文は削除。
- [low] B — 店内か持ち帰りが書かれていない。「loin cutlet set ¥913, double loin ¥1,177, fillet set ¥1,056; extra shredded cabbage ¥132 (¥129 to take away)」 — キャベツだけ持ち帰り価格を書き、定食は店内（¥913＝830×1.1）か持ち帰りか分からない — 「eat-in prices」と書く。
- [low] C — 件数に日付が無い。「Yabaton ... has shops in Tokyo, Osaka and elsewhere」「Aichi's tourism site lists ten miso-katsu places in the Tokyo area」「Daruma, the Osaka kushikatsu chain, lists 15 shops in Osaka and one in Kyoto」 — 店舗数は変わる。Daruma の店舗一覧の出典が sources に無い — 「as of 10 October 2026」と出典を足す。
- [low] F — 「ten miso-katsu places in the Tokyo area」 — tonkatsu-miso-katsu は「ten miso-katsu places in Tokyo and Saitama」。「周辺」と「東京と埼玉」を miso-katsu 側に揃える。
- [low] A — sources のうちキッコーマン機関誌 FOOD CULTURE No.8 など、発行年の分かるものに published が無い（ARTICLE-AUDIT「12/13本に published が無い」） — 足せるものだけ足す。
- [low] D — 冒頭「Every part of that arrangement has a reason, and most of the reasons were worked out in Tokyo's Western-style restaurants between the 1890s and the 1920s.」 — 本文は諸説・出典1つの説が多く、冒頭だけ断定的 — 「Every part of that arrangement has a story attached」に。
- 内部リンク候補:
  - /en/eat/donburi-katsudon/ （「The lineages」の表の直後 "Katsudon, the cutlet simmered with egg on rice, is covered on the rice-bowl pages"。リンク無しの名指し）
  - /en/eat/western-yoshoku/ （冒頭と「Deep-frying: Rengatei, Ginza」の "Western-style restaurants"。yoshoku ページの副題が Rengatei から始まる）
  - /en/eat/meat-pork/ （「Kurobuta (black pork)」の項。鹿児島の黒豚を扱う）
  - /en/eat/wagyu-sukiyaki/ （「Why pork」の "learned to eat meat through beef hotpot"）
  - /en/soak/gero/ （「Where to eat it」の Nagoya。tokai・chubu で重なる。Gero 側に名古屋からの行き方があるか要確認）

---
共通傾向（まとめて直せるもの）:
1. DishPrices の keys が話題とずれ（sushi-saba の sushi-kaiten、sweets の parfait・crepe、teishoku の famires-lunch）、かつ税込・「税の記載なし」の注記を画面に出さない。テンプレ側で note の表示（または税の記載が無い行は出さない）を決め、そのうえで keys を全ハブ一括で見直す。
2. 「I could not find / I have not ...」の作業メモ口調が5本中5本にあり、「Fares and travel times are not on this page yet.」が3本（sweets・tea・tonkatsu）。RateNote の "Fares verified" と矛盾するので、一括置換で「公式資料に記載なし」へ、工事中の文は削除。
3. 本文のリンクが0本で、兄弟ページの名指しがリンクなしのまま（wagashi・tea-kakigori-kissaten・conbini・donburi-katsudon・market-toyosu・sushi-osaka-hako など）。名指しを文中リンクにする作業を、全ハブで一括で。
