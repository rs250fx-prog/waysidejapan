# 見直しバッチ7（2026-10-13）

対象6本（調味料・旬・そば・素麺の品目ハブ4本＋寿司の系譜2本）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のコード（src/components/{LineageTable,DishPrices,RateNote}.astro）、src/data/lineages/{seasoning,shun,soba,somen}.json、src/data/food-prices.{chain,official}.json。
F の照合先（各1本のみ）: seasoning→seasoning-shoyu（Chiba 37.6%・淡口の塩10%増・樽1%・Yamaroku は一致。食い違い＝ハブの「蔵の価格が soy sauce ページにある」が shoyu 側に無い）／shun→shun-autumn-winter（マクドナルド・スタバの価格と日付は一致。食い違い＝表の "saury at record lows"）／soba→soba-edo（創業年は一致。食い違い＝Yabu・Komoro の税込未記載を soba-edo が明記、立ち食いの所要「四分／五分」）／somen→somen-miwa（冬仕込み・熟成・つゆの比は一致。食い違い＝「best」の強さ、JAS と GI の手延べ要件）／sushi-kakinoha→sushi-saba（「江戸期からの祭りの寿司」は一致。食い違い＝鯖の産地・経路、「おいしい時間」）／sushi-osaka-hako→sushi-kaiten（考案地が Higashi-Ōsaka）。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし」: 6本とも本文（Markdown）のリンクは0本で検出どおり。ただしハブ4本は `<LineageTable>` が公開済みの系譜ページへのリンクを出す（seasoning 2本＝seasoning-shoyu・seasoning-egg、shun 2本＝shun-spring-summer・shun-autumn-winter、soba 4本＝edo・izumo・togakushi・wanko、somen 2本＝miwa・banshu。status が planned の行はリンクにならない）。系譜2本は Article.astro のパンくずで親ハブ（/en/eat/sushi/）へのリンクを出す（batch-06 で確認済み）。全記事の末尾には Related.astro の「Read next」もある。E は、これらが拾わない本文中の参照に絞った。
- 「税込不明の金額」の判定: soba は検出どおり（同じ段落に税込の記載なし。後述）。seasoning は検出されていないが、「税込を確認できなかった」と書いた段落に円の金額がある（high）。shun は節頭の「Only prices that the companies state as tax included are given」が価格の箇条書き全体にかかるため違反とせず（McDonald's は個別にも "all prices include tax" とある）。sushi-osaka-hako の ¥16,839 は家計調査の年間支出で店の価格ではなく誤検出。soba の「¥2,500」（トガクシ行きバスの運賃）も税込の問題ではなく誤検出（ただし出典なし、後述）。
- sushi-kakinoha の「効能の断定」は誤検出（"the same cure" の cure は塩締めの意味）。ただし「grander form」などの優劣語は別件で指摘した。

テンプレ側の事実（記事ではなくコンポーネント）:
- `DishPrices.astro` は税込の注記を一切出さず、food-prices.chain.json の個別メモ（例: Komoro Soba "tax not stated on the menu"）も表示しない。また official.definition と area を日本語のまま出す（例: 「日本そば 外食 1枚 · Aug 2026 · 特別区部」「回転ずし店 にぎりずし／まぐろ（赤身）／2個」）ので、英語ページに日本語がそのまま出る。意図的か要確認。
- 末尾の RateNote は pricesCheckedOn があれば "Fares verified {月} — check the operator before you travel." を出す（RateNote.astro 19行）。6本とも pricesCheckedOn があり、運賃の数字を載せているのは soba の Togakushi のバス（¥2,500）だけで、ほかの5本は運賃を載せない。
- 同じ寿司系譜の「店と値段」節で `<DishPrices keys={['sushi-kaiten']} />` を流用している。今回 kakinoha と osaka-hako、F の照合で開いた sushi-saba でも確認（回転寿司の記事 sushi-kaiten 自身では正当）。

---

## eat/seasoning.mdx
- 総評: 税込を確認できなかったと書いた段落に円の金額（¥1,817・約¥465/L）を載せている点が方針違反（high）。仕組み・統計の説明は帰属が丁寧で質は高い。作業メモ口調、結論と噛み合わない比較、リンクの無い名指しが目立つ。
- [high] B — 税込不明と書いて金額を載せている。「I could not confirm tax-included prices for ordinary supermarket soy sauce, so there are none here; … The association’s 2024 figures give 3.9 litres a year per household, for ¥1,817 — about ¥465 a litre」（What it costs。ARTICLE-AUDIT は未検出）。家計の支出統計で店頭価格ではないが、「¥465 a litre」は価格と読め、3.9 L は丸め値なので単価に精度も無い — 円の単価の一文を削り、購入量の推移（3.9 L／1972年の22.2 L）だけにする。支出額を残すなら「家計調査の支出額」と定義を明記。
- [mid] D — 作業メモ口調が複数。「The ministry’s guide has no entry for it, and I could not find an official definition or explanation of why it is used.」（Cooking sake の項）、「(my subtraction)」「I use the 2024 spreadsheet.」、「I could not find an official comparison of brewery soy sauce and supermarket soy sauce. What the sources show:」、「I could not confirm tax-included prices …」 — 「公式資料に記載なし」の言い方に。Cooking sake の項は内容が無いので削除。
- [mid] A — 反証が噛み合っていない。「Where it is made is not where it is bought. In 2024 Chiba shipped 37.6% of Japan’s soy sauce and Tokyo about 0.05%. Yet … Chiba city bought 3,870 ml a household against a national 3,915 ml.」「"The brewing town buys the most." Chiba makes the most; Chiba city buys less than the national average.」 — 醸造町は Noda・Chōshi で、家計調査の千葉市（県庁所在市）は代理にならない。差は約1%で標本調査の誤差内にも読める。「Tokyo about 0.05%」は購入側の数字が無く宙に浮く。F: seasoning-shoyu は「Yamagata bought the most (5,356 ml)」と購入トップを示す — 「調査は県庁所在市のみで、醸造町の購入量は分からない」と書き、購入トップを shoyu と揃える。Tokyo の数字は購入側と対にするか削除。
- [mid] F — 「one brewery’s posted prices are on the soy sauce page」（What it costs）。seasoning-shoyu は「I could not confirm tax-included shop prices or tour fees from the breweries’ own pages, so none are given here.」と価格を載せていない（sources にヤマロク「商品（価格）」が残るだけ） — ハブの一文を「蔵の価格は系譜ページにも載せていない」へ直すか削除。shoyu 側の未使用出典も整理。
- [mid] A — 推定を本文に置いている。「the remaining 9.8% or so (my subtraction) is presumably the third method, simply called "mixed"」 — 3方式の名称と割合が出典の数字として示されていない — 協会の統計表で3つとも確認できれば出典の数字に、無ければ89.8%だけにする。
- [mid] A — 保存日数の帰属が無い。「Mentsuyu … once a glass bottle is open, about 3–5 days for the ready-to-use kind, 2–3 weeks for double strength, 1–1.5 months for triple」 — 直前の「the association says keep it cool and dark」の文とつながるが、日数が協会の Q&A かメーカー目安か不明。食品の保存日数は読者の安全に関わる — 出典（協会 Q&A「保存」）を明示し、「製品の表示に従う」を添える。
- [low] A — 「they cost a little more because salt is removed after brewing」（Genen・usu-shio）、「Cane from Okinawa and Kagoshima, beet from Hokkaido.」 — 価格の差と産地に帰属が無い — 「ministry/association によると」を付けるか削除。
- [low] A — FAQ「brewed with about 10% more salt than dark koikuchi, about 18% against 15 to 17%」 — 「10% more」は相対比（18÷16.5≒1.09）で、並んだ数字は百分率ポイント（差は1〜3）。「10ポイント高い」と誤読しうる — 「roughly 10% more in relative terms」と書く。
- [low] D — 重複と名指し。「Rows without a link are on the list but not written yet.」は LineageTable 自身の注記と同文（表の直前直後で同じ文が2回出る）。「The soy sauce page」「The egg page」の文中言及（表の下、What it costs、Where to see it made で計4回）は名指しのみ — 本文側の重複文を削除し、名指しは文中リンクにする。
- [low] D — 卵が調味料ページに並ぶ理由の説明が無い。「The lineage pages go deeper on soy sauce by region and type, and on eggs, which in Japan are sold to be eaten raw.」 — title・description・FAQ に卵が出てこない — 一文で「なぜここに卵か」を。
- [low] C — 「against "about 20 kg" now (the page gives no year)」、「Yamaroku on Shōdoshima needs none」 — 年の無い「now」と、見学条件の現在形に確認日が無い — 年が出典に無いと明記するか削除。見学条件は確認月を添える。
- 内部リンク候補: /en/eat/dashi/ （冒頭第2段落「stock is on the dashi overview」。名指しでリンク無し）
- 内部リンク候補: /en/eat/nabe-miso/ （同文「miso on the nabe overview and its miso page」。直接の行き先は miso の系譜ページ）
- 内部リンク候補: /en/eat/rice-sides/ （同文「pickles and natto on the rice-sides overview」。Yamaroku の納豆の話の続きにもなる）
- 内部リンク候補: /en/eat/drinks-shochu/ （Mirin の箇条書き「put into shōchū」。みりんの原料酒の説明先）
- 内部リンク候補: /en/eat/sushi-edomae/ （Vinegar の箇条書き「a cheaper vinegar from sake lees (kasuzu) spread with the fashion for Edo-style sushi」）

## eat/shun.mdx
- 総評: 読者に実害のある誤りは見当たらない（価格は節頭で税込と明記）。タイトルが約束する「なぜ店は季節を早く売るか」を本文自身が「見つからなかった」と書いて答えていない点、作業メモ口調、運賃の予告文が目立つ。
- [mid] D — タイトルと中身がずれる。title「why the shops sell the season early」、見出し「The shops sell the season, and often early.」に対し、本文は「I could not find a public or company explanation of why Japanese chains build so much around limited seasonal products.」「That they sell the season ahead of the calendar is this site’s reading of the dates, not something the companies say.」 — 理由は書かれておらず、「early」は本サイトの読みと自認している — title を「how the chains sell the season」等、実際の中身に。見出しの「often early」も「in early September and mid-February, by the releases’ dates」等に。
- [mid] D — 作業メモ口調が多い。「the company pages I read do not say」「I could not read the observatory’s page on it」「I found no official source that gives one.」「I could not read which area supplies which month」、最終段落の「What I could not find: an official source on how Tokyo supermarkets handle out-of-season produce … I have also not said that produce tastes better where it is grown.」、FAQ の「no public or company source I could find …」「I could not find an official source that links them.」 — 調査経過が本文の相当部分を占め、読者の役に立たない — 「出典に記載なし」の言い方に集約。最終段落は削除。
- [mid] D — 「Fares and travel times are not on this page yet.」（Where to eat it の末尾） — 同節が「There is no one place.」と書く旬の記事に運賃は要らず、未完成メモが公開本文に残っている。RateNote が "Fares verified October 2026" を出す点も不整合（テンプレ側） — 文を削除。
- [mid] C — 読者が今買えない/確認できない商品が価格・事例に並ぶ。「Starbucks Japan, spring 2026. … These were the spring 2026 range; the release gave a start date only.」（秋の記事の価格欄に春の3行）、「That is the 2025 fair; I could not find a 2026 version, so its prices are not given here.」 — 終了済みの春商品の価格と昨年の催事が「いま」の情報に混ざる — 春は価格欄から外し「例」の文に留める。Seven-Eleven は2025年版と明示するか削除。
- [mid] F — 表のセルの現在形。shun.json（ハブの LineageTable）の autumn-winter「marker」に「saury at record lows」。shun-autumn-winter は「The Fisheries Agency’s white paper put the 2021 catch at about 18,000 tonnes … I could not confirm Japan’s catch for 2022 to 2025, so I do not say whether it has recovered.」 — 表が現況のように言い切っている — 「saury catch at a record low in 2021 (Fisheries Agency)」へ（src/data/lineages/shun.json）。
- [low] A — 「The Tsukimi Burger dates from 1991, and the company marks 2026 as its 35th year.」 — 1991年から数えて2026年は満35年／36年目になりうる。会社の言い方か本サイトの計算か不明 — 「the company calls 2026 its 35th anniversary」等、会社の語として。
- [low] D — 「Tsukimi Burger from ¥460 (value set from ¥760)」 — "value set" は英語として通じにくい — 「as a meal set」等、一言添える。
- [low] A — Starbucks の行（autumn / spring）は個別に税込と書かず、節頭の宣言に頼る。「which follows Japan’s two consumption tax rates — 8% for takeaway, 10% for eating in」は本サイトの解釈（687÷1.08≒700÷1.10≒636 で整合はする） — リリースが税率に触れるか確認し、無ければ「the two prices work out to the same pre-tax amount」と書く。
- [low] C — 税率の基準日「as of 2026-10-10」と pricesCheckedOn 2026-10-11 が1日ずれ、「checked on the date at the top of this page」が指す日付が本文から分からない — 日付を1つに揃えて本文に明記。
- [low] D — ハブの「Tokyo’s side is shown by its central wholesale market …」の段落（2008年の数字、りんご6〜7月貯蔵、午前7時の競り）は shun-autumn-winter の「Autumn away from where it grows」とほぼ同文で重複 — ハブは一文に圧縮し詳細は系譜側のみに。
- 内部リンク候補: /en/eat/seasonal/ （冒頭第2段落「has its own overview of food for annual events」、および What people get wrong の最終項。名指しでリンク無し。shun-autumn-winter は年越しそば・冬至を seasonal の守備範囲と書く）
- 内部リンク候補: /en/eat/unagi/ （The lineages の「Eel, sashimi and yellowtail, oysters, crab and fugu, hot pots, shaved ice and cold noodles have their own overviews on this site.」の「Eel」）
- 内部リンク候補: /en/eat/sashimi-shusse-uo/ （同文の「sashimi and yellowtail」。出世魚の説明先）
- 内部リンク候補: /en/eat/seafood-oyster-crab/ （同文の「oysters, crab」）
- 内部リンク候補: /en/eat/nabe/ （同文の「hot pots」）

## eat/soba.mdx
- 総評: 税込の無い金額が本文・FAQ・価格カード・表の注の4か所にあり、Kanda Yabu の価格は兄弟記事 soba-edo が「税込の記載なし」と明記しているのに本文では並べて載っている（high）。歴史・原料の数字は帰属がおおむね丁寧だが、Yabu の年代・価格には出典が無い。
- [high] B — 同じ段落に税込の明記が無い金額。「A standing counter in a Tokyo station charges ¥390–450 for a hot bowl and expects you gone in five minutes. The statistical plate in central Tokyo is ¥788. The old Edo houses charge ¥1,000 (Sarashina Horii's mori) to ¥1,320 (Kanda Yabu's seiro) … and ¥2,310–2,860 for one with tempura.」（What it costs）、FAQ「Standing counters charge ¥390–450; the old Edo houses ¥1,000–1,320 …; a plate with tempura ¥2,300–2,900」、表の注「Standing, under five minutes, ¥390–450」。F: soba-edo は Komoro Soba ¥390 を「tax not stated」、Kanda Yabu（¥1,320・¥2,860）を「the menu does not state whether tax is included」とし、税込と書けるのは Sarashina Horii（¥1,000・¥2,310）だけ。範囲の下限と上限が税込未確認の価格。DishPrices のカードにも税込の注記は出ない — 本文と FAQ の円の範囲を外して DishPrices と food-prices に任せる。店名で書くなら税込明記のある Sarashina Horii だけに「tax included」を添える。立ち食いの範囲は Komoro を除くか「tax not stated」を添える。
- [mid] A — 店の情報に出典が無い。「*Yabu* is the dark, firm noodle with a very salty sauce, from a house founded in 1880.」「¥1,320 (Kanda Yabu's seiro)」、「*Sunaba* is the oldest name」 — sources に かんだやぶそば・Sarashina Horii のお品書きが無い（F: soba-edo は yabusoba.net の2ページと東都のれん会を出典にしている）。「oldest name」は選定主体の無い最上級（soba-edo は「older than Edo」「1580s」と書く） — soba-edo と同じ出典を足し、「oldest」は「the Sunaba house traces the name to the 1580s」等に。
- [mid] A — 「最古」の断定。「The oldest record is a document from Jōshōji temple … 1574 … the prefecture calls Kiso the birthplace of the noodle, with the usual caveat about other theories.」、What people get wrong の「The oldest record is in Nagano」 — 選定主体が地の文に出ず、「other theories」の中身も無い — 「Nagano prefecture’s page gives … as the oldest record it cites」と帰属し、他説があれば一行で。
- [mid] A — 帰属の無い最上級・数字。「The spread is the widest of any noodle.」「the Japanese noodle with the most ritual attached to eating it」「buckwheat grew in seventy days on poor soil」「what most of the country still eats on the last night of the year」 — 「most of the country」の根拠（農水省の年越しそば。sources にあるが本文で未使用。「more than 60% of households」は表の planned 行にだけある） — 帰属を付けるか、比較の主張を外す。
- [mid] A — 年が無い数字。「Japan harvests about 38,000 tonnes of buckwheat a year and imports about 88,000 — three-quarters of it from China — so the domestic share is about 30%.」「Hokkaido grows by far the most (16,800 t)」。title の「70%」は 38,000÷(38,000＋88,000) の計算値で、資料が70%と言うのか本サイトの計算かが分からない — 「in (年), per the ministry」と年を入れ、計算値と書く。
- [mid] A — 交通に出典も確認日も無い。「Togakushi — the limited-express bus from Nagano station, 56 minutes to Chūsha, ¥2,500.」「Izumo — … airport bus about 35 minutes to the shrine.」 — sources に交通の出典が無く、¥2,500 が片道か往復かも不明 — 事業者の運賃ページを出典に足し、片道／往復と所要を明記。
- [mid] D — 交差接触・アレルギーに触れない。FAQ「Is soba gluten-free? Only if it is jūwari — 100% buckwheat. … Ask, and expect the answer to be no.」、「"Soba is gluten-free." Only *jūwari*.」 — 十割でも茹で湯・器具が小麦の麺と共用される可能性、そば自体がアレルギー表示の対象であることに触れていない（要確認：allergies コラムの記述と揃える）。セリアック・アレルギーの読者に不足 — 一言足してコラムへ誘導。
- [low] B — FAQ の問い「How do I eat cold soba properly?」 — 答えは協会の指示として帰属し、半分だけ浸ける理由（そばを味わうため）も本文にあるが、問いの "properly" は「正しい」の書き方。What people get wrong の「"Dunk the whole noodle." Half.」も断定調 — 「How is cold soba usually eaten?」等に。
- [low] A — FAQ の数字が本文と違う。FAQ「a plate with tempura ¥2,300–2,900」、本文「¥2,310–2,860」 — 丸めた別の数字が検索結果に出る — 円を外すなら FAQ も。残すなら本文と同じ数字に。
- [low] F — 所要時間の食い違い。本文「expects you gone in five minutes」、表「under five minutes」、soba-edo「Four minutes is normal」「in four minutes」 — 出典の無い数字が3か所で違う — 出典を付けるか削除。
- [low] A — 媒体名のずれ。「a food-industry paper notes the folk etymology」の出典は日本食糧新聞（業界紙）、「the association’s own officer says」の出典は J-CAST（ニュースサイト）で、協会自身の資料ではない — 「the trade paper Nihon Shokuryo Shimbun」「J-CAST quotes the association’s officer」と媒体名で。
- 内部リンク候補: /en/column/slurping-noodles/ （Why it is the way it is の冷たい皿の段落「dip only half the noodle … and slurp, drawing air through the noodle」。すする作法の専用コラム）
- 内部リンク候補: /en/column/eating-in-japan-allergies/ （FAQ「Is soba gluten-free?」と What people get wrong の gluten 項。グルテン・アレルギー表示の説明先）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （What it costs の段落。税込・本体表記の読み方。税込を明記できない価格を扱う説明先にもなる）
- 内部リンク候補: /en/eat/seasonal/ （冒頭「what most of the country still eats on the last night of the year」。年越しそばは shun-autumn-winter が seasonal ハブの守備範囲と書く）
- 内部リンク候補: /en/soak/tamatsukuri/ （Where to eat it の Izumo「the approach to Izumo Grand Shrine and Matsue」。松江エリアの温泉。食⇔温泉の方針枠で、地域が重なる）

## eat/somen.mdx
- 総評: 読者に実害のある点は無い。数字の帰属は丁寧で、somen-miwa との照合でも大きな食い違いは無い。調査の限界を述べる文が本文に残っていること、「best」「improves with age」を事実のように言う箇所、基本の疑問（太さ・他の麺との違い）に答えていないことが主な問題。
- [mid] D — 作業メモ口調。「The version I read is the 2019 standard as shown in a 2024 revision document; I have not confirmed how the revision took effect, or the resting times, which the document omits.」「I could not confirm the official thickness boundaries between sōmen and other noodles, so I do not give them.」「It gives no sources.」「No official source compares sōmen eaten at Miwa or Tatsuno with sōmen bought in Tokyo, so this page does not.」 — 読者には「確認できていない」という不安だけが残る — 事実だけ書く（「JAS の2019年版を2024年の改正資料で確認」）。確認できない点は削除。
- [mid] D — 基本の疑問に答えていない。「I could not confirm the official thickness boundaries between sōmen and other noodles」 — 冒頭の「a fine wheat noodle」の「fine」の基準、hiyamugi・udon との違いが無い — 規格の太さ区分を出典で確認して一文にする。確認できなければ「手延べの定義」に絞る。
- [mid] B — 優劣・断定の書き方。冒頭「The best of it is still stretched by hand, and the paradox of the trade is that this summer food is made in the coldest months and improves with age.」、What people get wrong「It is made in winter and the best is aged a year.」 — 本文の根拠は2組合の主張（Miwa「aged noodles are generally prized」、Ibo no Ito「improve through the rainy season」）。F: somen-miwa は同じ話を「Aged hine noodles are generally prized」と抑え、「New sōmen is best.」を誤解として挙げる。ハブの「the best is aged a year」はそれより強い — 「makers prize aged noodles」と帰属し、「best」「improves」は外す。
- [mid] F — 手延べの要件が2ページで違って見える。ハブ「Every act of stretching, from the first pull (*kobiki*) to hanging the noodles on frames (*kadoboshi*), must be done by hand.」「"Machine-made and hand-stretched are the same." The standard requires all stretching by hand.」。somen-miwa は GI 文書として「The stretching at the first pull or on the frames, or both, is done by hand. After the war, machines took over what they could」 — JAS と GI で要件が違う可能性があるのに、ハブは「全工程が手」と言い切り、Miwa の行（表）は "Hand-stretched" とだけ書く — JAS の手延べ要件であることを明記し、GI は別の基準と一文で断る。
- [low] A — 「Both sell *hine*: noodles aged a year.」 — "Both" の帰属が無い（Miwa の「aged a year after making」は somen-miwa で確認できるが、Ibo no Ito 側の定義は本文に出ない） — 組合名を付ける。
- [low] A — 「The lineage pages cover the two great producing areas, Miwa in Nara and Banshū in Hyōgo.」 — 「two great」は選定主体の無い評価。表には Shōdoshima の行（planned）があり、somen-miwa は「carried the craft to Banshū, Shōdoshima and Shimabara」と書く — 「the two areas covered so far」に。
- [low] D — 「sōmen is eaten at Tanabata likened to the Milky Way or the weaver princess's thread」 — 修飾関係が曖昧（sōmen が likened?）。FAQ の「the threads are likened to …」は明確 — 「at Tanabata, where the threads are likened to …」。
- [low] D — 重複と空の節。「Rows without a link are on the list but not written yet.」は LineageTable の注記と同文。「Summer food, winter work」節は「No official source compares … so this page does not.」で始まり、中身は既出の要約のみ。F: somen-miwa が持つ「Shelf life: Three years and six months」はハブの Storage 項に無い — 重複文は削除。節は読者に使える情報（保存期間、どこで買う・食べるか）に差し替え。
- [low] A — 「Storage. It absorbs smells; keep it away from strong ones and out of the fridge」「Nyūmen. Dashi 5, light soy ½, mirin ⅓」 — 保存の注意とつゆの比の帰属が無い（直前の Cold sauce は「The Miwa cooperative's ratio」と明記） — 出典（組合）を明記。
- 内部リンク候補: /en/eat/seasonal/ （Sōmen and Tanabata 節。七夕の行事食は行事食ハブの守備範囲。※ seasonal が七夕を扱うかは要確認）
- 内部リンク候補: /en/eat/dashi/ （How to cook and eat it の「Cold sauce」「Nyūmen」。つゆの土台）
- 内部リンク候補: /en/eat/seasoning-shoyu/ （同箇条の「light soy」。淡口の成り立ちは seasoning-shoyu が持つ）
- 内部リンク候補: /en/eat/shun/ （Summer food, winter work 節。季節の食べ方の考え方。shun ハブは「cold noodles have their own overviews」と書き、相互リンクになる）
- 内部リンク候補: /en/soak/arima/ （方針枠：Banshū は兵庫。話題の結びつきは弱く、地域〔兵庫〕のみ）

## eat/sushi-kakinoha.mdx
- 総評: 読者に実害のある点が1件（別料理の価格カード）。読みやすい構成だが、sources が3本と少なく、出典で確認できない断定（具材、「one of the oldest」、価格感）と、翌日食べる助言に保存の注意が無い点が目立つ。
- [high] B — 「The shops, and what they charge」の `<DishPrices keys={['sushi-kaiten']} />` — 回転寿司のカード（Survey ¥241「回転ずし店 にぎりずし／まぐろ（赤身）／2個」、Chains ¥110〜の最安皿 · Kura Sushi, Hama Sushi, Sushiro）が柿の葉寿司の店と値段の見出しの下に出る。直後の本文は「the makers' prices were not confirmed from official pages for this edition, so none are given」で、読者は柿の葉寿司の相場と誤読しうる。税込の注記もカードには出ない — カードを外し、公式の税込価格が確認できた時点で確認日つきで載せる。
- [mid] A — 価格感に根拠が無い。「Expect a box of eight to twelve to cost what a station bento costs.」 — 駅弁の金額も出典も無く、上の「Sold by the dozen or so」とも数が違う — 削除。残すなら /en/eat/food-shopping-ekiben/ の価格に帰属。
- [mid] A — 出典に無い断定。「Salmon is a common second filling now; shad, prawn and sea bream appear at some makers.」「The leaf … keeps the rice from drying and lends a faint tannic smell.」「the salt and the vinegar do the preserving, so no soy is needed」「Sold by the dozen or so, in a wooden or card box」 — sources は農水省2本・文化庁1本。農水省ページで確認できる形になっているのは起源2説と「一晩置くとおいしい」まで — 出典で確認できる分だけに絞る。確認できない具材・包装は「makers differ」程度に。
- [mid] A — 「"Nara has no sushi." It has one of the oldest, made precisely because it has no sea.」 — 「one of the oldest」に年代も選定主体も無い（本文に成立年の記述自体が無い）。「made precisely because it has no sea」は、本文が「two origins without choosing」と書く起源2説の片方の読みを決めている — 「100-year food に認定」など言える範囲に。
- [mid] D — 保存の助言に注意が無い。「If you buy a box in the morning, eat it in the afternoon or the next day; the ministry's advice is the maker's.」「"Eat it fresh." Tomorrow is better, by the ministry's own note.」 — 塩サバを酢で締めた食品を翌日食べる助言で、消費期限・持ち歩きの温度に触れない。「the ministry's advice is the maker's」も意味が取りにくい — 「表示の消費期限に従う」を足し、農水省の記述の範囲で書き直す。
- [mid] A — 販売・交通に出典も確認日も無い。「Gojō and Yoshino are on the Kintetsu Yoshino line from Osaka-Abenobashi and the JR Wakayama line」「Nara station's kiosks sell the boxes」「at Nara and Kyoto stations, and at Kansai department stores」 — 吉野線は吉野方面、JR和歌山線は五條方面と読めるが、文は両駅が両線上にあるようにも読める（要確認）。駅売店・百貨店の取り扱いは変わりやすい — 事業者の公式ページを出典に足し確認月を添える。駅名・路線は要確認。
- [low] B — 優劣・最上級。「It is the neatest sushi in Japan — one piece, one leaf — and it is one of the few that is better the day after it is made.」「the same fish, the same cure and the same idea in a grander form」 — "neatest" "grander" "one of the few" に根拠が無い — 主観語を外す。
- [low] F — 「the same fish」 — sushi-saba は若狭（小浜）で塩をした鯖が鯖街道で京都へ、kakinoha は熊野灘の鯖を紀伊の漁師が運ぶと書き、産地・経路が違う — 「the same kind of fish」に。
- [low] D — 作業メモ口調と節の中身。「the makers' prices were not confirmed … for this edition」。「Kakinoha-zushi away from Nara」節は「travels well」と鯖寿司との比較で、本場と出先の違い（東京で買うと何が違うか）は書かれていない。676語（ARTICLE-AUDIT）で、値段・保存・買える場所が薄い — 「for this edition」を外し、不足分は確認できた出典の範囲で補う。
- 内部リンク候補: /en/eat/sushi-saba/ （Kakinoha-zushi away from Nara 節「Kyoto's *saba-zushi* — a whole cured mackerel fillet …」。名指しでリンク無し）
- 内部リンク候補: /en/eat/sushi-osaka-hako/ （同節。押し寿司・醤油なし・持ち運び向きという共通点。Osaka の側は battera を挙げる）
- 内部リンク候補: /en/eat/sushi-funa/ （What people get wrong「It has one of the oldest」と、起源の「preserved ration」説。なれずしの祖先の説明先）
- 内部リンク候補: /en/eat/food-shopping-ekiben/ （「cost what a station bento costs」「sold … at Nara and Kyoto stations」。駅弁の値段・仕組みの説明先）
- 内部リンク候補: /en/soak/shirahama/ （方針枠：「fishermen from Kii — the peninsula's Pacific coast」。紀伊半島で地域が重なるが、話題の結びつきは弱い）

## eat/sushi-osaka-hako.mdx
- 総評: 読者に実害のある点が1件（別料理の価格カード）。歴史の叙述は帰属が丁寧で読みやすいが、結びの一般化（"Tokyo habit"、"go to Kanazawa"、"barely travels"）と、店の営業時間・値段の出典と確認日が弱い。
- [high] B — 「The shops, and what they charge」の `<DishPrices keys={['sushi-kaiten']} />` — 回転寿司のカード（Survey ¥241、Chains ¥110〜）が箱寿司の店の見出しの下に出る。直後の本文は「the two historic houses do not publish prices online」「Expect a box to cost what a good lunch costs」で、カードと噛み合わない。税込の注記もカードには出ない — カードを外す。
- [mid] A — 営業時間・住所に出典と確認日が無い。「**Yoshino-zushi** (Awajichō 3-4-14, 09:30–18:00, closed weekends and holidays)」、FAQ「(9:30–18:00, closed weekends)」 — 出典は吉野寿司公式「歴史」（http）で、営業時間・休業日・住所がそのページにあるかは不明（要確認）。FAQ は「and holidays」が抜けて本文と食い違う — 公式の営業案内を出典に足し、確認月を添える。FAQ と本文を揃える。
- [mid] A — 否定の断定と価格感。「the two historic houses do not publish prices online」「Expect a box to cost what a good lunch costs.」 — 「公表していない」は見つからなかっただけの可能性があり、「good lunch」に根拠が無い — 「公式ページで価格を確認できなかった」と書き、価格感の一文は外す。
- [mid] A — 比較の数字が足りない。「Osaka households rank 23rd of 52 cities for sushi eaten out, at ¥16,839 a year — just above the national average, and far behind Kanazawa; the ministry's remark that fewer shops now make box sushi is borne out by how hard it is to find one.」 — 全国平均・金沢の額、年（2023〜2025年平均）が本文に無く、「just above」「far behind」を確かめられない。「how hard it is to find one」は著者の体験に読めるが記事は調査ベースで、外食すし全体の支出は箱寿司が減った裏づけにならない — 平均・金沢の額と年を添えるか比較を外し、「borne out by」の一文は削除。
- [mid] B — 一般化と優劣。「the Tokyo habit of dipping everything in soy sauce defeats it — the fish is already seasoned, and soy on battera is the local tell of someone from the east」「In Tokyo, "Osaka sushi" is a speciality a few shops keep rather than a category」 — 東京の習慣、「地元ですぐ分かる」に出典が無く、"defeats it" は優劣の書き方 — 「the fish is already seasoned (ministry), so soy adds salt on top」の事実に。
- [mid] A — 出典の無い "best"。「It is at its best an hour or two after pressing, not straight from the box, which is the opposite of nigiri and the whole point.」 — F: sushi-saba は「best a few hours after it is made and good the next day」、kakinoha は農水省の「一晩置くとおいしい」と帰属して書き、近縁3ページで時間が違うのに、このページだけ出典が無い — 帰属できる分だけにする。
- [mid] A — 数字が換算と合わない。「a kaiseki in two *sun* six *bu*」(the size of the box, about 8.5 cm) — 2寸6分は標準換算（1寸≒3.03cm）で約7.9cm。8.5cm が出典の値か換算か不明（要確認） — 出典の値を確認して直す。
- [mid] F — 「It barely travels, except as *battera* in station bento across Kansai.」 — 冒頭「it keeps for hours」、FAQ「they travel well as a take-away box」、「a gift to carry home」と矛盾して見える（前者は地理、後者は物理の意味） — 「rarely sold outside Kansai」等に言い換え。
- [mid] A — 販売・駅名の一般化。「Battera is at any JR or Nankai station kiosk in the city, and on the Kansai Airport train.」、FAQ「the battera counters at the stations」、「Kyoto, forty minutes away」 — 「any … kiosk」は過剰で、出典も確認日も無い。「a short walk from Awajichō」は駅名に読めるが、大阪市中央区の淡路町は通常「Awajimachi」で、「Awajichō」は東京の駅名（soba-edo の Kanda Yabu の近く）。要確認 — 「at some station shops」と出典つきに。最寄り駅は公式で確認。
- [mid] B — 支出額の順位から店選びを勧めている。「It is a box-sushi city that invented the conveyor belt; for nigiri, go to Kanazawa.」 — 家計調査の支出順位と握りの質・満足度は別の話で、行き先の優劣になる — 「Kanazawa spends the most on sushi eaten out (survey)」の事実に。
- [low] F — 「a box-sushi city that invented the conveyor belt」 — sushi-kaiten は考案地を Higashi-Ōsaka（大阪市の外の郊外）、ビール工場の見学は Suita と書く。また sushi-kaiten は「Osaka had no nigiri tradition to protect」と書くが、本ページは大阪の握りのカウンター（砂糖入りの飯）を認めている — 「in Higashi-Ōsaka, Osaka prefecture」と揃える。
- [low] A — 「it is disappearing」（冒頭）、FAQ「Fewer shops make it each year」 — 農水省の言うのは「fewer shops now make」で、「each year」「disappearing」はそれより強い — 農水省の言い方に。
- 内部リンク候補: /en/eat/sushi-saba/ （What makes it Osaka sushi の Battera 段落末「Kyoto, forty minutes away, has its own cousin — *saba-zushi* … made at Izuu since 1781」。名指しでリンク無し）
- 内部リンク候補: /en/eat/sushi-kaiten/ （What people get wrong の最終項「invented the conveyor belt」。考案の経緯は kaiten ページに詳しい）
- 内部リンク候補: /en/eat/sushi-kanazawa/ （The shops 節「far behind Kanazawa」と最終項「for nigiri, go to Kanazawa」）
- 内部リンク候補: /en/eat/sushi-edomae/ （冒頭「In Tokyo, "sushi" means nigiri」と Where it came from の「Edo switched to nigiri around the 1820s」）
- 内部リンク候補: /en/soak/arima/ （方針枠：大阪から近い関西の温泉。話題の結びつきは弱く、地域〔関西〕のみ）

---

共通傾向（まとめて直せるもの）:
- 作業メモ口調（"I could not find / confirm …"、"my subtraction"）と未完成の予告文（"Fares and travel times are not on this page yet."）が seasoning・shun・somen に集中（batch-06 の rice・sake-nada-fushimi と同型）。「出典に記載なし」の言い方への置換と、読者に不要な1文の削除で一括対応できる。
- 本文で「X overview / X page」と名指ししながらリンクが無い（seasoning・shun・somen・kakinoha・osaka-hako）。LineageTable の注記と同文を本文側にも書いた重複（seasoning・somen）も共通。
- 寿司系譜の「店と値段」節に sushi-kaiten の DishPrices が流用されている（kakinoha・osaka-hako・saba で確認）。寿司系譜を grep して一括で外す。税込については、DishPrices が税込も個別メモ（"tax not stated"）も出さない点をテンプレ側で共通対応する（運賃の無いページの "Fares verified" と日本語定義の表示も併せて）。
