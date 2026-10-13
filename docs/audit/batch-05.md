# 見直しバッチ5（2026-10-13）

対象6本（ラーメンの系譜4本＋ラーメンのハブ＋ご飯まわりのハブ）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のコード（src/components/{LineageTable,RateNote}.astro、src/layouts/Article.astro）、src/data/lineages/{ramen,rice-sides}.json、src/data/food-prices.chain.json。
F の照合先（各1本のみ）: tokyo-shoyu→ramen-tsukemen（食い違いあり）／iekei→ramen-hakata（水分率24–28%、Ichiran ¥1,080/¥980 はハブと一致、食い違い無し）／rice-sides→food-shopping-ekiben と rice-sides-takikomi の該当行（食い違いあり）。ramen（ハブ）・kitakata・sapporo は同バッチ内の記事どうしで照合し、追加では開いていない。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし」: 系譜4本（iekei, kitakata, sapporo, tokyo-shoyu）は LineageTable も本文リンクも無く、検出どおり。ハブ2本（ramen, rice-sides）は `<LineageTable>` が公開済みの系譜ページ（ramen は10本、rice-sides は4本）へのリンクを出すので、実際には系譜へリンクしている。E は表が拾わないページに絞った。
- 「税込不明の金額」: iekei と sapporo は「記事内に税込の注記はある」と判定されているが、それは別の店の注記（Ichikakuya Day、Ebisoba Ichigen）。CHECKLIST の基準（同じ段落）で見ると、Yoshimuraya／Machida Shōten／Aji no Sanpei の各段落には税込の記載が無い。"The menu does not state whether tax is included" と書いたうえで金額を載せているのも同じ扱いにして、B は high にした。
- チェーンの価格（Hidakaya ¥420、Kourakuen ¥490、Gyoza no Ohsho ¥748）は src/data/food-prices.chain.json（checkedOn 2026-10-05、公式URL付き）にあるが、tokyo-shoyu と ramen の sources にはそのURLが無く、本文にも税込の記載が無い。

テンプレ側の事実（記事ではなくコンポーネント）: 末尾の RateNote は pricesCheckedOn があれば "Fares verified {月} — check the operator before you travel." と出す。金額を一つも載せない rice-sides でも、"Prices are in Japanese yen. Conversions are approximate…" と "Fares verified October 2026" が出る。LineageTable は自分で "Lineages without a link are on the list but not written yet…" を出す。researched 記事には Article.astro が冒頭に "I have not been to every place in this guide…" を固定で出す。

---

## eat/ramen-iekei.mdx
- 総評: 読者に実害のある点あり（税込不明の金額の掲載、実体験の主張）。構成と出典の帰属は全体に丁寧で、系譜の「誰がiekeiか」の整理は読者価値が高い。タイトルの数字と、作業メモ口調の一文が目立つ。
- [high] B — 税込不明の金額。「**Machida Shōten.** Ramen ¥880, egg ramen ¥1,000, negi ramen ¥1,060, chāshū-men and "MAX" ¥1,160. The menu does not say whether tax is included」、「**Yoshimuraya** … Ramen ¥890, medium ¥1,200, large ¥1,300; … **rice ¥130**」、「anniversary offers have put the basic bowl at ¥650–760」には税込の記載が無い（税込と書いてあるのは Ichikakuya Day の ¥760 だけ）。同じ額は FAQ（"rice is ¥130"）、「Prices, same bowl, different places」、「What people get wrong」にも再掲 — 税込を確認できた額だけ残し、他は金額を外して「公式に税込の記載なし」とだけ書く。
- [high] A — 実体験の主張。「The common way to eat it — soak a sheet of nori in the soup and fold it round a mouthful of rice — is something I have watched at every counter and could not find written down by any shop, so take it as observation.」— basis は researched で、Article.astro も冒頭で「全部の店には行っていない」と宣言している。「every counter で見た」は書けない。同じ内容が src/data/lineages/ramen.json の iekei の howToEat にもある — 手順3の該当文を削除（出典があれば帰属つきで）、JSON も同時に直す。
- [mid] A — タイトルの数字が本文と合わない。タイトル「three hundred successors」に対し、本文は「some 300 people have trained in its kitchen as apprentices or apprentices' apprentices」（人数、吉村家の自己申告）で、店の数は museum の "several hundred shops" だけ。「written 25 years after 1974」の「25年後」も sources に日付が無い — タイトルを "hundreds of successors" 等にして帰属を付ける。
- [mid] A — 帰属の無い最上級・推量。「now the most copied ramen format in the country」、「there is a fair chance it was this」、「The 'three great houses' of the early days」— 誰の言い方か不明。TDB の "so-called iekei" が店数増の大半という記述など、出典側の言い方に寄せる。
- [mid] A — 帰属の無い比較・因果と、この記事の sources に無い断言。「It is thicker and saltier than Kyushu tonkotsu」（FAQ にも）、「A thick noodle in a heavy soup does not go limp, so there is no refill culture」、「The word 'tonkotsu ramen' for the white Kyushu bowl is itself a 1970s coinage.」— 最後の一文の元は museum の trivia/02 で、ハブの sources にはあるがこの記事には無い — 出典の追加、または「museum によると」。
- [mid] A／C — 存命の個人に関する無出典の現在形。「The founder is still alive and his shop still has a queue.」— 出典が無く、日付も無い。後で誤りになりうる — 削除、または "as of October 2026, the shop … " に限定。
- [mid] B — チェーンを劣るものとして並べる書き方。「The chain bowl is not dearer than the original — it is the original's price without the queue, and without the pot.」、直前の「Yoshimuraya, by contrast, says its owner starts the stock at five every morning」。比較の中身も、定価（Machida ¥880）と販促価格（Ichikakuya ¥650–760）が混ざっている — 事実の並置だけにして結論の一文を外す。
- [mid] C — 日付の基準が読者に見えない。「On the date of this page the official list has five shops」、「had no shops in Kansai on the date of this page」、「lists 45 shops in Tokyo and 11 in Osaka prefecture」— 「this page の日付」が pubDate なのか pricesCheckedOn なのか分からない — "as of October 2026" と書く。
- [mid] C — 京急の運賃・所要時間。「Keikyū's airport line runs direct to Yokohama in 28 minutes, ¥400 (¥397 by IC card); … Sugita station (¥510 from Haneda)」— 出典の運賃表は 2023-10 付けで、同じ段落が JR は 2026年3月に改定されたと書いている。末尾は "Fares verified October 2026" と出す — 京急に改定が無いか要確認。本文に出典の日付を入れる。
- [mid] D — 作業メモ口調。「JR's own fares from Tokyo station changed in March 2026 and I could not confirm them from an official page, so none are given.」— "The operator's fare page was not available…" など出典側を主語にするか、一文ごと削除。
- [mid] D — description 183字（目安160字以内）。末尾の "and the prices today" も短縮の候補 — 一文削る。
- [low] D — 英語・語義。「a shop whose owner trained at Yoshimuraya *and* opened *and* runs a successful iekei shop」は and の三連で読みにくく、"successful" の根拠も不明。FAQ の「Literally "the -ya lineage"」は literal ではない（家 = house／family を、店名では -ya と読む）— 「家 (ie, "house") — shops take it as the suffix -ya」のように説明に直す。
- 内部リンク候補: /en/column/how-meal-ticket-machines-work/ （「How to order it」の1「Buy a ticket at the machine」。券売機の仕組みの記事が既にある）
- 内部リンク候補: /en/eat/ramen-hakata/ （「What makes it iekei」の麺の段落「the opposite of Hakata's hair-thin strand」と「no refill culture」。比較先の本体）
- 内部リンク候補: /en/eat/ramen-tokyo-shoyu/ （「Iekei away from Yokohama」の冒頭、東京で出会うiekeiの話。ハブが「Tokyo has two traditions」と書く、もう一方の系譜）
- 内部リンク候補: /en/soak/hakone/ （「Getting there」のあと。関東・横浜を起点にした温泉への足。食⇔温泉の方針）
- 内部リンク候補: /en/column/queues-and-shared-tables/ （「Yoshimuraya」の行と末尾の "still has a queue"。待ち方の記事）

## eat/ramen-kitakata.mdx
- 総評: 読者に実害のある点あり（税込不明の金額、「三大ラーメン」の言い方の誤りの疑い）。閉店情報や「最多」の言い切りを避ける姿勢は良い。数字の揺れと、作業メモ口調が目立つ。
- [high] B — 税込不明の金額。「The chain's menu lists the basic Kitakata ramen at ¥890, negi ramen ¥1,020, chāshū ramen ¥1,360, wonton ramen ¥1,130, rice ¥200, five gyōza ¥390, a large portion for ¥160 extra. The menu page does not state whether tax is included」＋「Its basic bowl is ¥890 and the same price is listed for every branch」— 税込が確認できないなら金額を外し、「メニューに税込の表記なし」と店の存在だけ書く。
- [high] A（要確認）— 「三大ラーメン」の帰属が違う疑い。「Fukushima has a second ramen town, and Yamagata a third, and they are often grouped with Kitakata as the "three great ramens of Japan"」— 「日本三大ラーメン」は一般に札幌・博多・喜多方を指す呼び方で、この記事の出典の見出し（現代ビジネス「このままだと日本三大ラーメンが死語に…」）もその用法のはず（私の記憶による。原典未確認）。白河・米沢との組み合わせを「日本三大」と書くと読者を誤らせる — 出典の記事を確認して、組み合わせと呼び名を直すか、段落ごと削除。
- [mid] A — 人口と店数の数字が揺れる。タイトル「a town of 40,000」、導入「about 40,000 people and around 90 shops」、「roughly 40,000–50,000 people」、「the roughly 100 ramen shops in Kitakata city」（老麺会）、「in the 1980s … a population in the 30,000s and some 120 ramen shops」（過去の方が人口が少ない）。チェーンの「about 90 shops」とも同じ数字で紛らわしい — 市域の合併の有無（要確認）と、各数字の主体・年を本文で示す。
- [mid] A — 帰属の無い一般化。「which is how most of Japan outside Fukushima first ate Kitakata ramen」、「Outside Fukushima, "Kitakata ramen" almost always means the Bannai chain」、「Two of the three names in every guide have closed since 2023」、「Both were still trading when most English-language guides were written」— 根拠が見えない。弱めるか削る。
- [mid] A（要確認）— Makoto Shokudō の記述。「Makoto Shokudō, long the reference for the soy-sauce style, closed in September 2023」— 閉店月の出典が sources に見当たらない（源来軒は東洋経済がある）。現代ビジネスにあるなら帰属を付ける。
- [low] A — 「the effect is a slippery, springy chew that no other regional style quite has」は同じ記事の白河・米沢（波打つ高加水麺）と食い違う。「good soy sauce and good water are most of a Kitakata soup」も無出典。「hardness of 13」は単位が無く「among the softest in Japan」と比べられない。「Bannai Shokudō, probably the best-known shop today」と、「What people get wrong」の断定「The best-known shop today serves salt」で言い方がそろっていない。
- [mid] C — 営業時間と列車の条件。「Open 07:00 to 18:00 (last orders 17:50), closed Thursdays and some Wednesdays」に確認日が無い。「the direct services to Kitakata (including the Akabeko limited express and the Aizu Satono rapid) leave Kōriyama around 10:00」も、運転日（平日／土休日、臨時）の条件が無い — 「as of October 2026」を添え、運転日の条件を確認して書く。
- [mid] D — 作業メモ口調が3か所。「I could not find a public body that states it」、「a phrase whose origin I could not trace to any authority, so treat it as marketing」（根拠なき結論でもある）、「I have not been able to confirm the fare and journey time from an official page, so none are given here」— 出典側を主語にする。
- [mid] D — 読者の主な疑問に答えていない。「If the point is morning ramen, that means either staying the night before …」の前に、会津若松（または郡山）から何時の列車で何時に着けば7時台に間に合うか、が無い。「日帰りで朝ラーは可能か」が最大の疑問 — 時刻表の出典（JR東日本）で始発到着の時刻だけでも書く。
- [low] D — description 173字（目安160字以内）。
- 内部リンク候補: /en/eat/ramen-hakata/ （「The noodle is the point.」の段落「Compare it with the dry, hair-thin Hakata noodle」。比較先の本体）
- 内部リンク候補: /en/eat/wagyu-yonezawa/ （「Nearby, and different」の Yonezawa の箇条。同じ地名で、東北・山形の記事がある）
- 内部リンク候補: /en/eat/kyodo-ryori-tohoku/ （導入「a small town in the Aizu basin of Fukushima」のあと、または「Who eats it」の "Tōhoku eats ramen…"。こづゆなど会津の郷土料理を含む）
- 内部リンク候補: /en/soak/zao/ （「Who eats it」の "Yamagata, over the mountains, is first"。東北・山形の温泉。食⇔温泉の方針だが、会津の温泉記事は無く距離はやや離れる）

## eat/ramen-sapporo.mdx
- 総評: 読者に実害のある点あり（税込不明の金額）。起源を複数説で並べる姿勢は良い。年表の整合、作業メモ口調、出典の無い食べ方のコツが目立つ。
- [high] B — 税込不明の金額。「**Aji no Sanpei** … its miso, soy, salt and spicy-miso bowls would rise from ¥1,000 to ¥1,200 in September; chāshū-men and wonton-men were listed at ¥1,500 before the rise, rice ¥200. The menu does not state whether tax is included.」。FAQ（"from ¥1,000 to ¥1,200"）、「What people get wrong」（"¥1,200 since September 2026"）、description（"the price after the 2026 rise"）、空港の "roughly ¥950–1,500" にも税込の記載が無い（税込は Ichigen の ¥990 だけ）— 税込の確認できる額だけ残し、Sanpei は「値上げした」事実と日付だけにするなど金額を外す。
- [mid] A — 「nobody disputes it」。「Aji no Sanpei … calls itself the birthplace of miso ramen, and nobody disputes it.」— 他の主張者がいないという確認は出典に無い。「the shop says so; no competing claim appears in the sources I used」のように弱める。
- [mid] A — 年表の内部矛盾。導入「a Sapporo shopkeeper stirred … miso … a noodle maker across town built a noodle to stand up to it」は、味噌が1958年説だと麺（1955年1月）が先になる。「In 1964 … Kahei put butter into miso ramen. That is the first recorded appearance, a decade after the soup itself」の "a decade" も1954年説でしか成り立たず、"first recorded" の記録主体が無い — 「麺は味噌のために作られた」は出典の言い方（波は濃いスープを持ち上げるため）に合わせ、バターは「a decade or six years」にして帰属を付ける。
- [mid] A — 広すぎる言い切り。「within a generation "Sapporo ramen" meant miso everywhere in Japan」、「The department-store fair is how Japan met miso ramen」、「The style's national life began at a counter in a department store basement」— 出典は「1964–65 の物産展の反応が他店の味噌導入につながった」まで。"basement" も無出典。「Sapporo ramen went national … on Nishiyama's trucks and later its ships」の trucks／ships も同様 — museum の記述の範囲に戻す。
- [mid] D — 作業メモ口調と、出典の無いコツの掲載。「Honestly, the sources I trust do not explain it beyond the people.」、「Everything else people will tell you — eat from the far side because the soup under the lard is hotter, drink the soup with the spoon not the bowl — is good advice but not something I can source, so take it as that.」— 出典の無い食べ方を "good advice" と載せるのは方針（出典で確認できる事実だけ／「正しい」と書かない）に反する — 該当文は削除、「Why Sapporo」は「出典は人以外の理由を示していない」に。
- [mid] A — 「the queue in February is the city's own warning about Snow Festival week」。誰の警告か不明で、同じ段落の箇条書きにも "Expect queues during the Snow Festival in February." があり重複 — 出典が無ければ両方削除。
- [low] C — 日付の無い現在形。「Open 11:00–15:30 and 17:00–18:20, closed Mondays and some Tuesdays」、「six trains an hour through the day and 163 a day」（平日／土休日の別）、「Nishiyama Seimen says it now makes more than 500 different noodles」、Hakodate の「counts around 150 ramen shops」— "as of October 2026" を添える。
- [low] B／D — 優劣・評価語。description の「The real history」（他は偽、の含み）、「a good Sapporo bowl arrives with a sheen of fat」、タイトルの「younger than your parents」（読者の親の年齢を前提にしている。約70年）— 「The documented history」「a Sumire-style bowl」等に。
- [mid] D — description 164字（目安160字以内）。
- [low] D — 「How it is eaten」は中身が薄く、"rice (¥200) and a house-made shūmai"（house-made の根拠も不明）と雪まつりの行列の繰り返し。見出しに合う内容が無いなら統合する。
- 内部リンク候補: /en/soak/jozankei/ （「Getting there」のあと。札幌から約1時間の塩化物泉。北海道・札幌で地域が重なる。食⇔温泉の方針）
- 内部リンク候補: /en/eat/market-omicho-hakodate/ （「The other two of the "three"」の Hakodate の箇条。函館の市場の記事が既にある）
- 内部リンク候補: /en/eat/kyodo-ryori-hokkaido/ （「Hokkaido ramen is miso」の箇条、または Hakodate／Asahikawa の段落のあと。ラーメン以外の道内の食べ物の入口）
- 内部リンク候補: /en/eat/western-dairy/ （「**Butter.**」の段落。北海道の乳製品の記事）
- 内部リンク候補: /en/soak/noboribetsu/ （「Getting there」の New Chitose からの行き方のあと。空港から南へ向かう温泉。北海道で地域が重なる）

## eat/ramen-tokyo-shoyu.mdx
- 総評: 読者に実害のある点あり（税込不明の金額、姉妹ページが「決めない」と書く起源を一つに決めている）。食い違う水分率の数字も気になる。大阪の節は、見出しの約束（東京の一杯が外で変わる話）と中身（大阪の別系譜）が合っていない。
- [high] B — 税込不明の金額（本文に「税込」の語が一度も無い）。「Hidakaya's chūka soba at ¥420, Kourakuen's at ¥490」、「Harukiya … Chūka soba ¥950, large ¥1,150, wonton-men ¥1,350, chāshū-men ¥1,450, tsukemen ¥1,050, rice ¥180」、「Shōyu soba ¥2,000, shio soba ¥2,000 … ¥1,500」、FAQ の ¥620／¥420–490／¥950。チェーンの2つは公式URL付きで food-prices.chain.json にあるが、この記事の sources に無い — 公式に税込が確認できる額だけ残し、sources に公式URLを足す。統計の ¥620 は「survey price」と性格を明記する。
- [high] A／F — 起源を一つに決めている。「one of them, Yamagishi Kazuo, turned a staff meal into "special mori soba" at a Marucho-family shop in Nakano in 1955 — the origin of tsukemen」、FAQ「Marucho, from 1947, is the family that later produced tsukemen」。照合先の ramen-tsukemen は「The best-documented account credits Yamagishi Kazuo … 1 April 1955 … Others say the dipping style was shaped across the wider Marucho group of shops. This site does not choose.」で、ramen.json も "1955 (one account)"。ハブ ramen.mdx の「dipping noodles (tsukemen) in 1955」も同様 — 「by the best-documented account」を付け、/en/eat/ramen-tsukemen/ へ誘導。
- [mid] A — 見出しと導入の断言。「the clear brown bowl that everything else diverged from」、「Every other lineage on this site is defined by how it departs from this one.」— museum の言い分は "soy, wavy noodle, Japanese dashi" が全国の型になった、まで。九州の系譜や札幌の味噌まで「ここから外れたもの」とは出典に無い — 「the baseline many of the others are measured against」などに弱め、museum の帰属を付ける。
- [mid] A — 統計の方法についての無出典の説明。FAQ「It samples ordinary shops and chains, not the specialists.」、「The survey bowl is ¥620 because the survey samples the chains too.」— 引いている出典は価格表で、調査対象の選び方（銘柄の指定など）を述べるページは sources に無い。統計局の調査方法のページで確認するか、断定をやめる（要確認）。
- [mid] A — 無出典の最上級・断定。「The ¥2,000 bowl is the top of the Tokyo market and, for this lineage, the ceiling.」、「At Tsuta you will queue.」、「Slurping is normal, and nobody will look up.」、「After 1945 the black markets of Tokyo ran on cheap wheat noodles, and the western suburbs … filled with stalls」、「Tokyo had the customers」— 出典か帰属を付ける。slurping は E の記事へ。
- [mid] A／C — Tsuta の経歴と "current"。「Bib Gourmand 2015; … starred for four editions; … It is not in the current guide.」— sources に Michelin 関連は 2015-12-01 のトラベルWatch（2016年版の発表）だけで、その後の版の出典が無い。"current" も日付が無い — 出典を足し、"the Michelin Guide Tokyo 2026 edition" のように版を書く。
- [mid] A／F — Harukiya の年。FAQ「Harukiya has been there since 1949」、「For the shop that has made it since 1949」に対し、本文「Harukiya began as a stall in postwar Ogikubo and became a company in April 1949」— 屋台と法人の年が混ざっている。「a company since April 1949」にそろえる。
- [mid] F／A（要確認）— 水分率の数字がページ間で食い違う。この記事「the museum gives Tokyo's typical hydration as 20–24% … a drier, firmer noodle than the northern styles and thicker than Hakata's」。ハブは「about 35% is typical, Kitakata runs near 40%, Hakata 24–28%」、kitakata は「ordinary ramen noodles at around 30% water and Kitakata's above 40%」、Sano は「37–38%」。Tokyo の 20–24% は Hakata（24–28%）より低くなり、「drier … than the northern styles」とは言えても「thicker than Hakata's」と並べると読者が混乱する — museum の辞典で定義（小麦粉に対する加水率か）をそろえて確認する。
- [low] A — 「its Chinatown was where the Kurume pioneer went to learn the craft」— 人名が無く、この記事の sources にも Kurume の出典が無い。ramen-hakata は横浜で学んだのを Kagoshima の Noboruya の創業者としている — どの創業者かを確認して名前と帰属を書く。「Two hours north in Tochigi」の所要時間、「the water comes from a famous spring」も無出典。
- [mid] D — 見出しと中身が合わない。「The Tokyo bowl away from Tokyo — and what Osaka means by chūka soba」の節は、"No public body describes how the Tokyo bowl is altered when it is served in other regions, so this page does not." と書いた上で、大阪の別系譜（高井田）の話が中心。ほかの系譜の「本場と出先の違い」にあたる内容が実質無い — 見出しを「Osaka's chūka soba」に寄せ、メモ口調の一文を削る。「JR changed its fares in March 2026 and I could not confirm the Tokyo–Ogikubo fare from an official page」も同じ（作業メモ）。
- [mid] D — description 171字（目安160字以内）。Tsuta の箇条は1文に年が8つ並び、読者が使う情報（営業時間・行列）が埋もれる。
- 内部リンク候補: /en/eat/ramen-tsukemen/ （「The postwar centre of gravity」の段落、Marucho／Yamagishi の件。つけ麺の系譜ページが既にあり、起源の複数説はそちらにある）
- 内部リンク候補: /en/column/slurping-noodles/ （「How to eat it」の "Slurping is normal, and nobody will look up."。出典付きの記事がある）
- 内部リンク候補: /en/column/how-meal-ticket-machines-work/ （同じ「How to eat it」の "Buy a ticket if there is a machine."）
- 内部リンク候補: /en/eat/udon-osaka/ （大阪の節の "Osaka was a dashi-and-udon city"。大阪のうどんの記事）
- 内部リンク候補: /en/soak/kinugawa/ （「The country cousin: Sano」。栃木。浅草からの列車の記事で、本文の Asakusa の来々軒とも結べる。食⇔温泉の方針）

## eat/ramen.mdx
- 総評: 読者に実害のある点あり（税込不明の金額）。価格の三層構造と「¥1,000 wall」の説明は読者価値が高い。ただし「いま公開済みの系譜は10本」なのに本文が5本時点のまま、他の系譜ページと食い違う数字や断言が複数ある。description が約束する「how to read a menu」が本文に無い。
- [high] B — 税込不明の金額（5段落）。「The statistical bowl … was ¥620 … up from ¥569」、「The chain bowl is ¥420–750」、「The specialist bowl in a city is ¥900–1,200 … Harukiya … ¥950; … Yoshimuraya, is ¥890; Sapporo's miso originator went to ¥1,200 …; Ichiran's head shop is ¥1,080」、「The starred bowl is ¥2,000 at Tsuta」、「Ichiran's classic bowl is ¥980 … ¥1,080 … ¥1,180 … ¥210 refill」— 本文に税込の記載が無く、Sanpei・Yoshimuraya は系譜ページ側で税込不明と書かれている額。DishPrices 部分も税込の注記は固定で出ない — 税込を確認できた店だけ金額を残し、他は価格帯の説明（統計値は survey price と明記）だけにする。
- [mid] C／D — 本文が古い。「The pattern across the five lineages written so far」、「Every lineage page on this site now ends with a section on what changes when the dish leaves home」、「Where to eat it, and how to get there」の5件（Hakata, Sapporo, Kitakata, iekei, Tokyo soy）。ramen.json では公開済みが10本（Hakata, Kurume, Kumamoto, Kagoshima, Kitakata, Sapporo, iekei, Tokyo soy, Tsukemen, Hiyashi chūka）で、Kurume・Kumamoto・Kagoshima・Tsukemen・Hiyashi chūka が両方の節から抜けている — "now" と "so far" を外し、10本分に更新するか、本数に触れない書き方にする。
- [mid] D — description の約束が本文に無い。「…and how to read a menu.」— 本文には、メニューの読み方（味玉・大盛り・チャーシュー麺・券売機の押し方など）の節が無い。FAQ も歴史と値段の3問だけで、旅行者の実際の疑問（券売機、すすって良いか、ベジタリアン可否：スープは「animal bones, dried fish, or both」）に答えていない — description を実態に合わせるか、短い「How to order」の節を足す。description も190字（目安160字以内）。
- [mid] F — 他の系譜ページと食い違う。(1)「Kitakata's wide, wet, wavy noodle and Sapporo's egg-enriched wavy noodle were both products of a specific noodle maker working with a specific shop」— kitakata は「the town's noodle makers refined it」で、特定の製麺所と店の組み合わせとは書いていない。(2)「Kurume … Hakata and Kumamoto descend from each other」— 「互いの子孫」は成り立たない。slug-index では Kumamoto は "Kurume's descendant" — 文言を系譜ページに合わせる（要確認）。(3) 水分率「about 35% is typical, Kitakata runs near 40%」は kitakata「around 30% … above 40%」と、tokyo-shoyu「20–24%」と数字が違う — 定義をそろえる。
- [mid] F — 「Each lineage page ends with the town, the shops that publish their prices, and the way in from the nearest airport or Shinkansen station, taken from the operators' own fare pages.」— Kitakata は運賃・所要時間を「none are given」、Tokyo soy も同様（Harukiya の行き方だけ）— 「most」に弱める。
- [mid] A — 「The only certification in Japanese ramen is Yoshimuraya's private list of five direct-line shops.」、「Nobody owns the name. Iekei, Sapporo, Hakata and Kitakata are descriptions, not designations.」— 「ラーメン界で唯一」の言い切りは、kitakata が書く老麺会の加盟店リスト（31軒）と食い違う。地域団体商標などの登録の有無も確認していない（私の記憶では喜多方ラーメンに登録があったはずだが原典未確認 — 要確認）— 「iekei の直系の公式リスト」に限定する。
- [mid] A／D — FAQ と本文の食い違い。FAQ「Every regional lineage on this page is a Japanese invention of the last hundred years.」、「What people get wrong」の「Chinese noodle made Japanese over the last century」に対し、本文は「The oldest lineage on the table has a documented start in 1884」。また「The starred bowl is ¥2,000 at Tsuta」と、末尾の「Tsuta … is not in the current guide」が同じページで食い違う（今は星がない）— 「more than a century」にし、星付きの層の書き方を過去形にする。
- [low] A — 帰属の無い因果・評価。「Same bowl, same ¥210 refill, dearer rent.」、「above ¥1,500 you are paying for a name, and the queue is part of the product」、「It is a good ¥2,000 bowl」（優劣の評価語）、「Industry research says the national average is still under ¥700」（どの調査か不明）、「Japan now produces about six billion servings of instant ramen a year, 48 per person」（年が無い）。「A stock (*dashi*)」は、このサイトの dashi の記事（昆布・鰹の出汁）より広い意味で使っている。
- [low] D — 重複。「Rows without a link are on the list but not written yet.」は直後の LineageTable の注記と同じ。
- 内部リンク候補: /en/column/how-meal-ticket-machines-work/ （「What it costs」のあと、または「Where to eat it」の前。ラーメン店が最も券売機を使う業態。上の D の「How to order」の置き場にも）
- 内部リンク候補: /en/column/slurping-noodles/ （「What it is」の末尾か「What people get wrong」。麺をすする作法の記事）
- 内部リンク候補: /en/column/eating-in-japan-vegetarian/ （「Why it is the way it is」の "The soup is two layers"。スープが動物性という本題で、ベジタリアンが最初に困る点）
- 内部リンク候補: /en/eat/western-machichuka/ （「The chain bowl is ¥420–750」の箇条。町中華とチェーンの値段の記事）
- 内部リンク候補: /en/soak/jozankei/ （「Where to eat it」の Sapporo の箇条。札幌から約1時間の温泉。北海道で地域が重なる。食⇔温泉の方針）

## eat/rice-sides.mdx
- 総評: 読者に実害のある点なし（金額は載せず、各主張は農水省ページに帰属）。作業メモ口調が6か所あり、金額を載せない旨を説明するだけの FAQ とテンプレの「Fares verified」が食い違う。ハブとして他のページへ案内する文が、リンクになっていない。
- [mid] D — 作業メモ口調が6か所。「Fares and travel times are not on this page yet.」、「I could not confirm any with tax included for the date at the top of the page.」、「I could not find an official source that compares any of these foods at home with the same food sold in Tokyo or elsewhere.」、FAQ「I could not find an official survey of how eating habits differ east and west, so this page does not give one.」、「I could not find a source I could use for the origin of kamameshi」、「I could not find an official description of what each part is "for"」— 主語を出典に（"The ministry does not describe…"）、「not on this page yet」は削除。
- [mid] D／C — 金額も運賃も無いページなのに、末尾のテンプレが "Prices are in Japanese yen. Conversions are approximate…" と "Fares verified October 2026 — check the operator before you travel." を出す（pricesCheckedOn: 2026-10-10 のため）。本文の "No prices are given" と食い違う。FAQ 4問目 "How much do these things cost? — This page gives no prices." も答えになっていない — 質問ごと削除するか /en/food-prices/ へ案内。テンプレ側は金額が出ない記事で RateNote を出さない扱いが要る。
- [mid] F — 「"Kamameshi was invented by the railway."」の項。照合先の food-shopping-ekiben は「Tōge no Kamameshi, Oginoya … First sold on 1 February 1958 at Yokokawa station」と書くのに、この記事は「I could not find a source I could use for the origin … began selling at Yokokawa station in 1885, and that its first boxed lunch was salt onigiri」と返し、誤解に答えていない — Oginoya 自身の説明として1958年を足し、1885年の onigiri の件は rice-sides-takikomi 側（"Oginoya started with kamameshi" の項）に任せる。「the best-known kamameshi maker」（takikomi の FAQ にも）は帰属の無い最上級。
- [mid] F／D — 古い案内。「Onigiri are covered with convenience stores, and station boxed lunches, including the famous kamameshi in a clay pot, with food shopping.」— slug-index には /en/eat/rice-onigiri/（dish、onigiri の3つの起源とご当地おにぎり）と /en/eat/conbini-onigiri/ がある。rice-sides.json の _note も同じ書き方で、rice-onigiri を追加した時点で未更新 — 文言と JSON の _note を直す。
- [low] A — 帰属の無い一般化。導入「much of what sits next to it exists because of the rice」、「Five groups, all of them everyday or seasonal foods rather than restaurant specialities」。一方、本文の大半は農水省の説明を「ministry says」で受けていて良い。
- [low] D — リンクにならない案内。「"Mochi is harmless." … see the mochi page.」— LineageTable に行はあるが、本文の "see the mochi page" がリンクでない。同じく「Miso soup in general is covered in the nabe section, and stock in the dashi section」も未リンク。
- [low] D — 「Where to eat it」は地名と食べ物の対応だけで、旅行者が実際に試す手段（駅弁、コンビニ、市場）が書いていない。"Ehime — tai-meshi, … also sold as station boxed lunches" は良い例 — 他の地域も同様に1つずつ具体策を足す。
- [low] D — タイトルが約112字（SERP で切れる）。「Rows without a link are on the list but not written yet.」は LineageTable の注記と重複。
- 内部リンク候補: /en/eat/nabe-miso/ （「What it is」の Soups の箇条 "Miso soup in general is covered in the nabe section"。味噌汁の記事がある）
- 内部リンク候補: /en/eat/rice-onigiri/ （「What it is」の末尾 "Onigiri are covered with convenience stores…"。おにぎりの本体が公開済み）
- 内部リンク候補: /en/soak/tamatsukuri/ （「Where to eat it」の "Lake Shinji, Shimane — clam soup"。宍道湖畔・島根の温泉。食⇔温泉の方針で、地域が重なる）
- 内部リンク候補: /en/soak/nyuto/ （同じ節の "Akita — smoked iburi-gakko pickles, and a sweetened sekihan"。秋田の温泉）
- 内部リンク候補: /en/soak/dogo/ （同じ節の "Ehime — tai-meshi"。愛媛・松山の温泉）

---

## 共通傾向（まとめて直せるもの）
- 税込: 系譜4本とハブで、"The menu does not state whether tax is included" と書いて金額を載せる型が共通（Machida／Bannai／Aji no Sanpei）。税込を確認できた額だけ残す一括修正と、food-prices.chain.json 由来のチェーン価格の公式URLを sources に足す作業が要る。
- 作業メモ口調（"I could not find / confirm … so none are given"、"not on this page yet"）が6本すべてにある。出典側を主語にして一括で直せる。description の長さ超過（5本）、ハブの「5本時点」の古い案内、ページ間で食い違う数字（水分率・人口・店数）もまとめて確認できる。
- 他のページと食い違う起源・数字は、系譜ページが「決めない」と書いたものをハブや隣の系譜が一つに決めている（つけ麺、麺の製造元、水分率）。ハブ側の言い切りを系譜ページの書き方に合わせる。
