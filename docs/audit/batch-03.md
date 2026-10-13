# 見直しバッチ3（2026-10-13）

対象6本。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のデータ（src/data/food-prices.chain.json、src/data/lineages/{gyoza,izakaya,kaiseki}.json、src/layouts/Article.astro と src/components/RateNote.astro の表示仕様）。
F の照合先: gyoza-hamamatsu→gyoza-utsunomiya / gyoza→gyoza-utsunomiya（同じ1本を共用）/ izakaya-otoshi→yatai-hakata / izakaya→column/japanese-table-customs（towel の行のみ）/ kaiseki-tea→kaiseki（同バッチ）/ kaiseki→kaiseki-shojin（価格・サービス料・予約の行のみ）。yatai-hakata で分かったことは izakaya の C 項目にも使った。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出: gyoza-hamamatsu の high（¥4,051・¥2,110 は世帯の年間支出額でメニュー価格ではない）、kaiseki-tea の high（該当段落に "all prices include tax" がある）。izakaya-otoshi の high は店の価格ではなく観光協会の目安と相談事例の金額なので mid に下げた。izakaya は機械チェックで指摘ゼロだったが、読むと mid が複数あった。
テンプレ側の事実（記事ではなく Article.astro / RateNote.astro）: basis: researched の記事は上部に「Researched · N sources」のバッジが出るだけで、価格の確認日は出ない。pricesCheckedOn は記事末尾の RateNote が「Fares verified {月} — check the operator before you travel.」と出す。つまり食の記事でも「運賃確認」と表示され、本文の "Fares and travel times are not on this page" と食い違う。本文の "on the date at the top of this page" も実態に合わない。

---

## eat/gyoza-hamamatsu.mdx
- 総評: 読者に実害があるのは価格の税込不明（high 1）。出典の帰属は概ね丁寧だが、導入や結びで「1店の言い伝え」を町の事実のように書く箇所があり、「行き方」節は中身がなく、作業メモ口調（"I could not confirm"、"not on this page yet"）が目立つ。
- [high] B — 価格に税込の明記がない。「six for ¥380 at Utsunomiya Minmin's Miyamirai shop — and its festival in November sells plates of three to five for ¥200」「Hidakaya three for ¥160 and six for ¥300, Gyoza no Ohsho's Kanto menu six for ¥363」の各段落に税込の記載がない。F: gyoza-utsunomiya は ¥380 を「協会の店舗ページが税込と明記」、祭りの ¥200 を「税込かどうか主催者は書いていない」としている — 祭りの ¥200 は削除（または「税込の記載なし」と明記）、¥380 とチェーン3価格には「税込（運営者の表示）」を添える。
- [mid] A — 導入「the story behind it is a practical one — a station-front stall that needed to fry a lot of dumplings at once」は由来を事実として書いているが、本文は「The story belongs to one shop」「I have not found … an independent record」と書く。導入だけ帰属が外れている — 「by one shop's account」を入れる。
- [mid] A — 1店の話を町の話にしている。「It is one of the few Japanese gyoza styles with a look of its own」「Ishimatsu, the best-known shop」「the town's best-known style」は出典がなく、「The wheel of 20 or 25 is a Hamamatsu idea of a plate.」は石松1店の皿を町全体に広げている（本文自身が「every shop follows it」は確認できないと書く）— 「few」「best-known」は出典か削除、20・25個は「at Ishimatsu」に限定。
- [mid] A — リングの推論を断定している。「Ishimatsu's own page on how to fry its gyoza … does not describe the ring arrangement. The ring is how the plate is served at the shop, not an instruction for cooking at home.」— 焼き方ページに記載がないことから「焼き方ではない」と結論しているが、由来の話は「フライパンの縁に沿って円く並べた」で、焼き方そのもの。事実（焼き方ページは円周に油を回すとだけ述べる）だけを書き、結論は外す。
- [mid] A — 年次の範囲が曖昧。「Utsunomiya took 2017 and 2019; Miyazaki took 2021 and 2022.」の表は 2015〜2025 だけなのに、誤解欄は「It first came top in 2011. Utsunomiya led for 15 years before that and has come top twice since; Miyazaki has too.」と 2012〜14 年を含めた「その後ずっと」に読める — 「in 2015–2025, the years tabulated」と範囲を書く。F: gyoza-utsunomiya の年次（2017 ¥4,259・2019 ¥4,358、2015/16/18/20/22/25 は2位）とは一致。
- [mid] D — 「Eating it in Hamamatsu, and getting there」節が空で、作業メモが残っている。「Ishimatsu. The shop whose story the ring is.」「Fares and travel times are not on this page yet; they will be added from the rail operators' own fare pages.」— 末尾に「Fares verified October 2026」と出るので矛盾。店名以外（確認できた範囲の所在地・営業時間）を足すか、節を外す。
- [mid] D — FAQ「Do all Hamamatsu gyoza come in a circle?」の答えが「I could not confirm that.」で始まり、読者の疑問（自分が行って円形が出るのか）に答えていない。本文にも「I could not find out, so I would not expect it」「I have not found other Hamamatsu shops' accounts」— 先頭に結論（「Not necessarily: …」）、未確認の注記は1か所にまとめる。
- [low] D — 家計調査「ぎょうざ」の範囲（冷凍・外食は含まない）の説明が4回以上出る（"Why Hamamatsu"、"The definition matters when reading the ranking"、FAQ、"The ranking is about home"、"What people get wrong"）— "Why Hamamatsu" の1か所に寄せ、他は短い参照に。
- [low] D — 「How to order it」が前節の繰り返し（Order the wheel / Eat the sprouts between / Use the house sauce first）。「first」は店の説明にない指示 — 1行にまとめ、「first」は外す。
- [low] D — 「a local definition of "Hamamatsu gyoza" that circulates in Japanese could not be traced to a primary source」は出所不明の噂への言及で、読者に情報にならない（HANDOFF でも浜松餃子学会の定義は「書けない」扱い）— 削除。
- [low] C — 価格に本文中の確認日がない。pricesCheckedOn は 2026-10-10 だが、DishPrices の行（日高屋 ¥300・王将 ¥363）は checkedOn 2026-10-05 — 本文の価格に「checked 2026-10-10」を添え、日付を揃える。
- 内部リンク候補: /en/eat/gyoza/ （導入2段落目「For gyoza in Japan generally, start from the gyoza overview.」。リンクが無い）
- 内部リンク候補: /en/eat/gyoza-utsunomiya/ （「Not all of Japan's gyoza is this」の Utsunomiya の箇条。「See the Utsunomiya page.」にリンクが無い。"Why Hamamatsu" の「Utsunomiya led that line for 15 years」の段落にも）
- 内部リンク候補: /en/eat/western-machichuka/ （"Why Hamamatsu" の「takeaway from Chinese restaurants」。町中華が家計調査の定義でどちら側かは読者がつまずく点）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （"Hamamatsu gyoza away from Hamamatsu" の価格比較。税込表記の読み方はそちら）
- 内部リンク候補（弱い・任意）: /en/soak/shuzenji/ （または /en/soak/atami/）— 地域 tokai（静岡県）が重なるだけで話題の接点は薄い。「getting there」節を書き直す際に、静岡県内の周遊として一言添えるなら

## eat/gyoza.mdx
- 総評: 「消費量ではなく購入額」「ポーションは店が決める」の説明が的確で、構成も明快。実害のあるのは価格節の自己矛盾（税込と言い切った節に税込不明の祭り ¥200、high 1）。起源の書き方は HANDOFF の方針（3説併記）より痩せ、作業メモ口調が多い。
- [high] B — 「Prices below are tax included, as posted by the operator on the date at the top of this page.」の直後に「The festival plate. At the Utsunomiya Gyoza Festival a plate is ¥200, three to five pieces. The organiser does not say whether that includes tax.」— 税込と宣言した節に税込不明の金額を載せており、自己矛盾かつ方針違反。F: gyoza-utsunomiya にも同じ構造がある（別バッチで要修正） — ¥200 は削除、または宣言から外して「税込の記載なし」と明記。
- [mid] C — 確認日の書き方が実態と合わない。「on the date at the top of this page」— 上部に価格の確認日は出ない（上記テンプレの事実）。DishPrices の行は checkedOn 2026-10-05、記事は 2026-10-10。「The festival in 2026 is on 7 and 8 November.」は 11/8 を過ぎると古くなる — 本文に「checked 2026-10-10」と書き、祭りの日付は出典に帰属して更新対象に。
- [mid] A/F — 起源の書き方。「So "repatriates brought it home" is common ground.」「I have not found a primary source that settles which came first.」— HANDOFF 第2弾は引揚者説・気候説・第14師団説の併記、栃木県自身が「分からない」と明記、と指示している。F: gyoza-utsunomiya は栃木県が3説を挙げ「真相は分からない」としている（引揚者説は「最も広く信じられている見方」）。ハブは栃木県ページを sources に入れながら起源では使わず、「Utsunomiya, Kobe and Fukuoka each tell their own story」と書いて宇都宮の話を示さない — 「Tochigi prefecture lists three explanations and says the truth is not known」を1文足し、「common ground」は「the most widely held view（栃木県）」に。
- [mid] A — 見出し「It is a side dish, so it is fried.」は因果の断定。本文は「I would not push it further than a comparison」と留保し、出典（キッコーマンの講座）は日中の食べ方の対比を述べるだけ。農水省の記述（満洲の日本人が焼きを好んだ）は別の理由 — 見出しを「In Japan it is a side dish, and mostly pan-fried」のように事実の並置に。
- [mid] A — 中国側の一般化が無帰属。title「why Japan fries a dumpling China boils」、description「China mostly boils gyoza as a meal」、FAQ「In China the dumpling is mostly boiled, eaten as the meal itself, and is a dish of the Lunar New Year」— 根拠は大塚秀明の講座1本（本文では帰属している）— title/FAQ/description に「according to a Kikkoman lecture」を入れるか、言い方を弱める。
- [mid] A — 歴史の段落に帰属が足りない。「A cookbook of 1778, the *Takkuchōhōhō*, …」「After the Meiji era the Chinatowns of Yokohama and Kobe served them, and still they did not become everyday food.」は出典名がなく、「dried dumplings have been found in the ruins at Dunhuang」は要確認（一般には新疆トルファンの墓の出土として語られることが多い。講座の記述どおりか原典で）— 段落の頭に「The lecture says」を置き、遺跡名は原典に合わせる。
- [mid] A/F — 年と主体の帰属。「Utsunomiya built its brand after city staff announced in 1990 that it led the survey」「has been a registered trademark … since 2002」に帰属が無い（F: gyoza-utsunomiya では宇都宮餃子会の年表）。また lineages/gyoza.json の宇都宮行は「postwar; brand from 1993」で、本文の 1990 とずれて見える — 「per the association's timeline」と帰属し、表の era と本文の年（1990 発表／1993 協会設立）を揃える。
- [mid] D — 作業メモ口調が多い。「I would not push it further than a comparison」「these shops rarely publish prices, and I have not given any」「What a shop outside Utsunomiya needs to use the name, I could not find」「so I would not call one cheaper」「Fares and travel times are not on these pages yet; they will be added from the operators' own fare pages.」— 事実だけ残し、未確認は1か所に。最後の1文は削除（末尾の「Fares verified」とも矛盾）。
- [low] D — 「Two things explain most of what you will see on a Japanese gyoza menu.」の後に太字が3つ（side dish / portion / sauce）。数が合わない — 「Three things」にするか構成を直す。
- [low] A — 「at a chain, a plate of gyoza costs less than most bowls of ramen on the same menu, and it is priced to be added to an order rather than to be the order.」— 手元データでは日高屋の中華そば ¥420、王将 ¥748 に対し餃子 ¥300／¥363 で成り立つが、記事に比較の根拠が出ていない。「priced to be added」は推測 — 2チェーンの数字を示すか、一般化を外す。
- [low] D — 「Where to eat it」の Hamamatsu の行が「at the shop whose story it is」と店名を伏せている。lineage 側で Ishimatsu と書いているので、ここでも名前を出す。
- 内部リンク候補: /en/eat/gyoza-utsunomiya/ と /en/eat/gyoza-hamamatsu/ （「The lineages」直後の「A few things the table cannot show」の箇条と「Where to eat it」の Utsunomiya・Hamamatsu の行。LineageTable に行リンクはあるが、本文の箇条から直接飛べない）
- 内部リンク候補: /en/soak/arima/ （「Where to eat it」の Kobe の行。有馬温泉は神戸市内で kansai。食⇔温泉の結びつき）
- 内部リンク候補: /en/soak/kinugawa/ （「Where to eat it」の Utsunomiya の行。同じ栃木県で kanto。/en/soak/nasu/ でも可）
- 内部リンク候補: /en/eat/western-machichuka/ （「The neighbourhood Chinese diner (*machi-chūka*)」の箇条）
- 内部リンク候補: /en/eat/yatai-hakata/ （Fukuoka の行の "Nakasu drinking district"。F で読んだ yatai-hakata が Nakasu を屋台の場所として挙げている）

## eat/izakaya-otoshi.mdx
- 総評: 観光協会・JNTO・国民生活センターの記述を併記して「scam」と決めつけない姿勢は良く、読者への実害は小さい（high 0）。弱いのは、冒頭の一文が壊れていること、屋台の記述が yatai-hakata とずれていること、金額に税込の注記がないこと。
- [mid] D — 冒頭「Japan's consumer affairs center names it as a typical source of disputes with visitors. It has not, in the ordinary case.」の "It has not" は主語・述語が取れない（「普通は問題ではない」の意か）。結論に当たる文なので読者がつまずく — 書き直し。
- [mid] B — 税込かどうか不明の金額を載せている。「Kyoto's tourism association gives ¥300–500 per person as a guide」（FAQ にも）、「about ¥400 each」「¥2,500 … ¥4,300」。店のメニュー価格ではなく観光協会の目安と相談事例の金額なので ARTICLE-AUDIT の high は大げさだが、同じ記事の末尾に「some menus show prices before the 10% consumption tax」とあり、¥300–500 がどちらか読者に分からない — 「the source does not say whether tax is included」と注記、事例は「as reported」と明記。
- [mid] F/E — 「Stall prices must be posted, as the Hakata ramen page explains.」の参照先が違う。F: yatai-hakata は運営者の義務として「the city's newsletter adds clear price display」「Check prices before ordering」を書き、ramen-hakata は「bowl prices three stalls listed in 2026」を載せるページ。また「must」は断定で、この記事では帰属がない — 「the city's newsletter lists clear price display among operators' duties」と帰属し、yatai-hakata へリンク。
- [mid] C/F — 屋台の支払いが古い書き方。「Most stalls are cash only, with about one in ten taking cards.」— F: yatai-hakata は同じ約10%に「a 2023 article says more are taking cards and electronic payment」と注記している。otoshi 記事は注記も年も落としている — 「per the city's tourism site; a 2023 article says more are taking cards」と帰属して年を入れる。
- [mid] A — 「Can you refuse it?」の「official sources differ」が GO TOKYO と京都だけを並べる。前節では JNTO を「a compulsory starter」「cannot be swapped」と紹介しているのに、FAQ「Can I refuse the otoshi?」と本文の対比には JNTO が出ない — 3機関の記述を並べるか、JNTO の blog が観光庁系の一般記事である点を明記。
- [low] A — 「The practical reading: in Tokyo, assume it comes with the seat; anywhere, if you do not want it, ask at the door.」— 「anywhere … ask」は GO TOKYO の「generally cannot be refused」と食い違いうる。助言が出典より強い — 「Kyoto's tourism association says you can ask」と帰属した言い方に。
- [low] C — 相談事例は 2019 年、1年まとめは 2020-01。「In December 2018 … opened a hotline」「In its first year, the hotline received 24 consultations」は過去の数字だが、その後の公表を見たかが書かれていない — 「2019–2020 reports」と年を明示し、新しい発表は未確認と一言。
- [low] D — 作業メモ口調。「I could not find a primary official source — from the Consumer Affairs Agency or a local authority — on whether there is a legal obligation」「I could not find official figures for the hours or amounts」「The law is not spelled out in any official source I found」— 「No official source sets out a legal right either way」の1文に統一。
- [low] D — 表記ゆれ。見出し・本文は "otoshi"、GO TOKYO の引用だけ "seat charge (*otōshi-dai*)" と長音つき — 統一。
- [low] D — sources に国民生活センターの同じ2資料が PDF と HTML で重複（4件）。「Researched · N sources」のバッジが実際より多く見える — 同資料は1件にまとめる。
- [low] D — DishPrices（beer / sake / highball）が「Tax」段落の直後に説明なく出る。お通しの金額ではなく飲み物の目安である旨が分からない — 一文の見出しを添える。
- 内部リンク候補: /en/eat/izakaya/ （導入2段落目「For how an izakaya evening runs … start from the izakaya overview.」。リンクが無い）
- 内部リンク候補: /en/eat/yatai-hakata/ （"Fukuoka's stalls are different" 節。現在の参照先「the Hakata ramen page」を差し替え。F の確認どおり、お通し無し・支払い・予約の記述が揃っている）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （"The other lines on the bill" の Service charge と Tax の段落。税込表記・サービス料・チップ無しを扱うページ）
- 内部リンク候補: /en/column/paying-at-restaurants-in-japan/ （Fukuoka の「cash only」の文と勘定の段落。現金のみの店・支払いのタイミング）
- 内部リンク候補: /en/eat/izakaya-snack/ （"A cover charge on top" の段落。スナックの settai と訪日客への注意を扱うページ。温泉記事への自然な接点は本文に無い）

## eat/izakaya.mdx
- 総評: 公式サイトへの帰属が多く、全体の質は高い（high 0）。ARTICLE-AUDIT は指摘ゼロだが、年代表記の食い違い、「many」と「most」のずれ、出典より強い作法の言い切り、リンク欠落が中心。
- [mid] A — 年代が食い違う。本文は「the Kyōhō era (1716–36)」、誤解欄は「One account dates them to the 1720s–30s at Edo's sake shops」— 享保は 1716–36 で、範囲が合わない。「Kyōhō era (1716–36)」に統一。
- [mid] A — 「many」が「most」に強まっている。FAQ・本文は「Many close around midnight」（Tokyo の公式サイト）、誤解欄は「Izakaya are open all day. They are evening places; most close around midnight.」。FAQ の「Most are evening places … and are not open at lunch」も、帰属が閉店時刻にしか付いていない — 出典の強さに合わせ、「generally」「many」に。
- [mid] A/F — 「The *oshibori*, the damp towel, is for your hands, not your face.」と誤解欄「"The towel is for your face." It is for your hands.」は出典より強い禁止。F: column/japanese-table-customs は JNTO を引いて「wipe your hands and freshen up」と書くだけで、顔に使うなとは書いていない — 「JNTO describes it as for wiping your hands」と帰属し、誤解欄の項目は削除（"correct way" 型の書き方になっている）。
- [mid] A — 「At the door」「When you sit」の指示が出典に結びつかない。「Wait to be shown to a seat, even if you can see an empty one, even if you have booked.」「Water is usually free (sometimes self-service).」「Use the small plates (*torizara*) to take your share.」— 特に「even if you have booked」は強い — どの出典（JNTO か GO TOKYO か）の記述か帰属する。出せなければ削除。
- [mid] A — 「Drinking and smoking in the street are not allowed.」（Tokyo's yokochō の項）は帰属がなく、法的な禁止にも読める。全国一律の路上飲酒禁止ではない（地域の条例による）ので誤読を招く。要確認 — GO TOKYO の横丁ガイドの文言と範囲（「in the alleys」か）を原典で見て、帰属と範囲を限定。
- [mid] D — 公開本文に作業メモが残る。「Rows without a link are on the list but not written yet.」（"The kinds"）、「Fares and travel times are not on this page.」（末尾に「Fares verified October 2026」と出るので矛盾）、「I could not confirm this from the city's own materials」— 読者には不要な作成状況。削除し、未確認の注記は事実の形に。
- [low] A — 北九州の角打ち。本文は「a private tourism magazine, Fukuoka Now, ties it to workers from the Yawata steelworks, which began operating in 1901」だが、lineages/izakaya.json は同じ話を「linked by a Kitakyushu group to the 1901 Yawata steelworks」と別の主体に帰属している。1901 年が雑誌の記述か記事側の補足か不明 — 帰属を表と揃え、年は原典で確認（要確認）。
- [low] A — 冒頭「its bill is one of the misunderstandings Japan's consumer affairs center names as typical for visitors」は、センターが挙げたのは勘定一般ではなくお通し（izakaya-otoshi の書き方と食い違う）— 「the otoshi is one of the …」に。
- [low] D — "Where it came from" の段落が長く、江戸の呼び名（nawa-noren、niuri-sakaya）や 1660〜70 年代の規制まで続く。「今夜どう使うか」に先立つ位置で読者を止める — 後半を別の節に分けるか短縮。
- [low] C — 屋台の条件「most are cash only (about one in ten takes cards)」は、F（yatai-hakata）の「a 2023 article says more are taking cards」の注記が落ちている。年も無い — 帰属と年を足す（otoshi と同じ直し方）。
- [low] A — FAQ「Do I have to order beer first?」の「partly because it is the quickest drink to pour」は、本文では京都市観光協会に帰属した「because beer is the quickest to bring」。FAQ だけ帰属が外れ、言い方も違う — 本文に揃える。
- 内部リンク候補: /en/eat/izakaya-otoshi/ （導入「The otoshi page goes into the bill in detail」と "The bill, and why it surprises people" の最初の箇条。リンクは "The kinds" の直後に1本あるだけ）
- 内部リンク候補: /en/eat/izakaya-yakitori/ （導入「the yakitori page」と "The same night out, in a different city" の「See the yakitori page.」）
- 内部リンク候補: /en/eat/izakaya-kakuuchi/ （「Drinking at a sake shop's counter survives. In Kitakyushu it is called *kaku-uchi*」の段落と "Where to go" の Kitakyushu の行。専用ページがあるのに出典の説明だけで先が無い）
- 内部リンク候補: /en/eat/yatai-hakata/ （"Where to go" の Fukuoka's yatai の行と "The same night out" の Fukuoka の箇条。現在は「covered on the Hakata ramen page」）
- 内部リンク候補: /en/column/japanese-table-customs/ （"When you sit" の oshibori と "Sharing" の torizara。F で読んだページが同じ話題を扱う。温泉記事への自然な接点は本文に無い）

## eat/kaiseki-tea.mdx
- 総評: 茶懐石の順序を農水省と表千家の2資料で併記し、説が分かれるところは決めずに書けている（high 0）。ARTICLE-AUDIT の high は誤検出。弱いのは「懐石」と「会席」の字の説明が無いこと、FAQ・価格節が鰻料理店の例だけになっていること、作業メモ口調とリンクが無いこと。
- [mid] A — 価格の対象が曖昧。本文「eel and seasonal kaiseki courses from ¥12,100 at lunch and ¥16,500 in the evening」は鰻コースを含むか不明で、FAQ「kaiseki courses start at ¥12,100 at lunch and ¥16,500 in the evening」は懐石コースだけに読める。F: ハブ（kaiseki）も本文と同じ「eel and seasonal kaiseki courses」— 出典（あつた蓬莱軒）で ¥12,100 が懐石コースの価格かを確認し、本文と FAQ の言い方を揃える（要確認）。
- [mid] D — FAQ「How much is a kaiseki course?」と節「The shops, and what they charge」の中身が鰻料理店1軒の例だけで、タイトルの茶懐石・会席の相場にならない。読者が「kaiseki はこの価格帯」と受け取りうる。「Booking by three days before; it may not be possible in busy periods.」も英語として切れ切れ — 節を「What it costs」にし、「税込が公式で確認できた例は1軒（鰻料理店）」から始める。
- [mid] D — 「会席」と「懐石」の字の説明が本文に無い。F: ハブ（kaiseki）は冒頭で「懐石＝茶の席、会席＝酒の宴」を説明するが、系譜ページは "The word" 節で懐石の語源しか書かず、会席の字・語を説明しない。タイトルに両方があるので、読者が表記の違いに気づけない — "The word" 節か冒頭に2つの表記を1文で。
- [mid] A — 冒頭「Banquet kaiseki, which is what most restaurants now mean by the word」は無帰属。ハブ（FAQ）では「The farm ministry says what is called Kaiseki in Japan today is mostly the banquet kind」と帰属している — 冒頭にも農水省に帰属。
- [mid] A — 「Dislikes and allergies. GO TOKYO, writing about omakase sushi, advises mentioning them early; that is sushi, but the idea of leaving it to the chef is the same.」— 寿司の記事を根拠に懐石の対応を述べるのは筆者の類推。読者に必要な情報はアレルギー・ベジ対応の実際 — 類推の一文を削り、/en/column/eating-in-japan-allergies/ にリンク。
- [low] A — 「Kyoto prefecture registered Kyō-ryōri … it also says ryōtei have fallen by about 90% in 30 years, without showing data.」— 90% は登録の発表ではなく別資料（国への提案・要望資料）の記述で、「it」が曖昧。F: ハブは「A Kyoto prefecture request to the national government says …」と資料を分けている — ハブと同じ書き方に。"Kaiseki away from Kyoto" の節名なのに中身が Kyoto の話で、題とも合わない。
- [low] D — 順序の2資料が数え方で食い違うのに触れていない。農水省の7段は azukebachi を含み、表千家は「shiizakana, a clear soup and hassun added」。同じ枠か別物か分からず、読者が数えると混乱する — 「the two sources name the extra dishes differently」と1文。
- [low] D — 作業メモ口調。「Only one official site I checked states …」「I could not find an official source for the fixed sequence of banquet courses」「I could not confirm any other account of the word in an official source」「I found no official comparison … and make none」。ハブにも同じ文が重複 — 「official sources do not give a fixed order」の事実の形に。
- [low] D — 「Not all kaiseki is this」の「JNTO gives grilled fish, soup and rice as the basic elements, but not the only ones.」は何と対比するのか不明で、前の2行（季節・肉魚）と並ぶ意味が弱い。
- 内部リンク候補: /en/eat/kaiseki/ （第2段落「For kaiseki in general, start from the kaiseki overview.」。リンクが無い）
- 内部リンク候補: /en/eat/kaiseki-shojin/ （"Where it came from" の「taking in the shōjin ryōri of Zen temples」と、"Not all kaiseki is this" の「kaiseki was originally vegetarian (shōjin)」の2か所）
- 内部リンク候補: /en/eat/sashimi-shime/ （"The order" の1番、mukōzuke の「kelp-cured fish」。kobujime の解説がそのページにある）
- 内部リンク候補: /en/eat/wagashi/ （"The flow of a chaji" の「then the main sweet, and thick and thin tea」。お茶の前の菓子）
- 内部リンク候補: /en/column/eating-in-japan-allergies/ （"How to order it" の Dislikes and allergies の項。上記 mid の差し替え先。soak 記事に kaiseki への言及は無く、温泉側の接点は今回見つからなかった）

## eat/kaiseki.mdx
- 総評: 「懐石と会席は別の食事」を最初に切り分ける構成がよく、高額店の価格を出さない姿勢は方針に沿う（high 0）。弱いのは冒頭の無帰属の最上級、「見つからなかった」で終わる項目の連続、弁当節の「出典の食い違い」が実際は矛盾していないこと、リンクの欠落。F の kaiseki-shojin とは価格・サービス料・予約の記述が一致した。
- [mid] A — 冒頭「"Kaiseki" is the word visitors meet on the most expensive menus in Japan」は最上級で選定主体が無く、本文の価格情報（鰻料理店の ¥12,100〜）では裏づけにならない — 削除するか、出典に帰属。
- [mid] A — 弁当の節。「The sources date it differently: "mid-1800s" in the booklet, "the Edo period" in the magazine.」— "mid-1800s" は "the Edo period" の中に含まれ、矛盾ではない。雑誌が挙げる『守貞謾稿』も江戸後期の書とされる。「sources differ」と書くと読者が食い違いと受け取る — 「the booklet says mid-1800s; the magazine says only 'the Edo period'」と事実を並べる。
- [mid] D — 「見つからなかった」で終わる項目が多く、読者の疑問に答えない。「Ryōtei. I found no official definition.」（読者が知りたい説明が無く、直後は Kyō-ryōri の登録の話に移る）、「Koryōriya … I could not find defined in any official source.」、「I could not find an official source on introduction-only restaurants」、「I could not confirm tax-included prices for any Kyoto restaurant, so I give none.」、FAQ「Is there a fixed order …?」の答えも「I could not find an official source for one.」で始まる — 定義できる範囲（kappō の農水省の説明のように）だけ残し、koryōriya のように用語だけ出して放棄した項目は削除、未確認は1か所に。
- [mid] D — 「Where to eat it」に店・地域の実用情報が無く、2024 年 2〜3 月の文化庁イベント（「events on 11 days at 11 long-established ryōtei」）が最も具体的な記述になっている。2年前に終わった催しで、今の食べ方の案内にならない — 過去のイベントとして短くするか外し、確認できる範囲（Kyoto の寺内、JNTO が挙げる東京の3店）に絞る。
- [low] A — 「On Kōya, the temple that serves you is also where you sleep and where you are invited to the morning service.」は帰属が無い（shōjin ページの内容に依拠するはず）— 帰属して shōjin ページへリンク。
- [low] D — 「Bento, briefly」が宋代・1300 年代末・1937 年の弁当史に偏り、「何を確認するか」の話に繋がらない。タイトルの "the box" を満たす節だが長い — 短縮して ekiben ページへ。
- [low] D — ryōtei が 30 年で約 90% 減ったという話が、このハブと kaiseki-tea の両方に出る。ハブは「the prefecture's claim; the document does not show the data」と書いており、重複 — どちらかに寄せる。
- 内部リンク候補: /en/eat/kaiseki-shojin/ （"Where to eat it" の「(see the shōjin page)」と "The same name, a different place" の Temple food の箇条。「see」と書いてリンクが無い）
- 内部リンク候補: /en/eat/teishoku/ （"One soup and three dishes" の「The everyday side of that count is covered in the teishoku overview.」。リンクが無い）
- 内部リンク候補: /en/eat/food-shopping-ekiben/ （"Bento, briefly" の「Station bento are covered in the food-shopping overview.」。駅弁は ekiben ページの話題で、overview（/en/eat/food-shopping/）より直接）
- 内部リンク候補: /en/column/restaurant-reservations-in-japan/ （"Booking" 節。「introduction-only restaurants」「booking channels and cancellation」は読者の実際の疑問で、予約全般はそのページに任せられる）
- 内部リンク候補: /en/eat/dashi/ （"The same name, a different place" の「Kyoto's tourism site warns that some shōjin restaurants use fish stock.」。dashi の「魚を食べない人へ」の節）

---

共通傾向（まとめて直せるもの）
- 公開本文に一人称の作業メモが残る（"I could not find/confirm …"、"Fares and travel times are not on this page yet; they will be added …"、"Rows without a link are on the list but not written yet"）。6本すべてにあり、FAQ の答えの書き出しにまで及ぶ — 事実の形（"no official source gives …"）に直し、未確認は1か所にまとめる。「Fares … will be added」の文は gyoza・gyoza-hamamatsu・izakaya にあり、削除。
- 「the gyoza overview」「the otoshi page」「the yakitori page」「the shōjin page」「the Hakata ramen page」など、別ページを名指ししながらリンクが無い（本文リンクは izakaya の1本だけ）。参照先が古い例もある（Hakata ramen→yatai-hakata）— 一括で /en/ リンクに置き換える。
- 価格・確認日: 税込を宣言した節に税込不明の祭り ¥200（gyoza / gyoza-hamamatsu / gyoza-utsunomiya）、本文の「on the date at the top of this page」は実態と合わず、末尾は「Fares verified {月}」と出る（食の記事のテンプレ文言。要判断）。DishPrices の checkedOn（10-05）と記事の pricesCheckedOn（10-10）のずれも直す。
