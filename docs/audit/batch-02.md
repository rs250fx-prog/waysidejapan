# 見直しバッチ2（2026-10-13）

対象6本。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のデータ（src/data/food-prices.chain.json・food-prices.ts、src/layouts/Article.astro の表示仕様）。
F の照合先: dashi→dashi-east-west / donburi→donburi-gyudon / drinks→drinks-shochu / food-shopping→food-shopping-depachika。drinks-beer-highball は同バッチの drinks、food-shopping-ekiben は同バッチの food-shopping と相互に照合した。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。
重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

---

## eat/dashi.mdx
- 総評: 読者に実害のある誤りは見当たらない（high 0）。NDL・農水省・うま味インフォメーションセンターに帰属して書けており、「魚を食べない人へ」の節は実用的。弱いのは、出典欄にない根拠、東西の対比を断定で書いた箇所、調査メモ口調。
- [mid] A — 「A Kyoto restaurateur interviewed by the city's tourism site says the same: the cooks knew before the chemists.」と「the first dashi of one long-established restaurant, when analysed, came out at exactly 1-to-1」— 前者は `sources` に京都市観光サイトが無い（dashi-east-west は同じ人物を「2021年のインタビュー」と年つきで使っている）。後者は店名も、センターのどのページかも本文から辿れない — 出典を sources に足して年を書き、「one long-established restaurant」は出典どおりの表現か削除。
- [mid] A/F — 「Where to taste it」の「Tokyo — bonito-led broth with dark soy.」「Osaka and Kyoto — kombu-led stock, light soy」と「The soy differs. Kansai uses light soy, Kantō dark.」— 帰属のない断定。dashi-east-west は「傾向であって境界ではない」「東京の公式なそば・うどん出汁レシピは見つからなかった」「家計調査では東京と大阪の昆布・かつお支出はほぼ同じ」「濃口は生産の約85%、淡口は主に関西で使う」と書いており、ハブの言い切りと食い違う — 「NDL は〜の傾向と述べる」と帰属して傾向と明記するか、箇条書きを east-west へのリンクに置き換える。
- [mid] A — 「A Tokyo or Osaka stock is made from ingredients shipped in, as it has been since the Edo period.」— 「since the Edo period」に帰属がない（east-west は北前船の NDL・農水省の記述で説明している）— 「according to the NDL's account of the kitamae route」など出典を示す。
- [mid] B — 「*honkarebushi* (mould-cured repeatedly, the finest)」— 「the finest」は優劣の断定（ARTICLE-AUDIT も指摘）。農水省の分類上の呼称なのか本文から分からない — 農水省ガイドの表現に帰属させる。確認できなければ削除。
- [mid] D — 公開本文に残った作業メモ口調。「I could not find an official figure for how many Japanese dishes use bonito stock.」「I have not found an official source calling it the standard vegan dashi」「(the 2015 version I read)」「so I give them side by side」「this site gives both years」— 読者には情報にならない — 事実だけ残し、未確認の注記は1か所にまとめる。
- [low] A — 「The difference is between starting the research and identifying the compound; this site gives both years.」— 1907年と1908年のずれの理由を記事側が説明しているが、出典がその説明をしているか本文から分からない（要確認）— 「sources differ」と書くだけにするか、出典の記述に合わせる。
- [low] C — 「Hokkaido produces over 90% of Japan's kombu」「Kagoshima produces the most」「water content is 26% or less」「Most is harvested … from July to September」— 数字に年も出典名もない。JAS 基準も「最終改正 2015-05-28」としか書けておらず確認日がない — 出典名と年を添える。
- [low] D — 「That is the price of a bowl of miso soup at the chains, kept on the price reference page.」— DishPrices の直後に置かれただけで、出汁の話とどう繋がるかが書かれていない — 「味噌汁は出汁を一番安く試せる料理」など一文でつなぐか、ブロックごと外す。
- [low] D — 「Fish is not "not meat".」の見出し文は二重否定で意味が取りにくい — 「For vegetarians, fish counts as an animal food」のように言い換える。
- [low] D — FAQ「Is instant dashi the same thing?」の答えが定義から始まり、結論（同じとは限らない／魚を含みうる）が先頭に出ない — 先頭に「Not necessarily.」を置く。
- 内部リンク候補: /en/column/eating-in-japan-vegetarian/ （「If you do not eat fish」の冒頭。ベジ用語と基準の全体像はそちら）
- 内部リンク候補: /en/eat/kaiseki-shojin/ （「"Vegetable" is not "vegetarian."」の箇条書き。shōjin kaiseki を例に出しているのに先が無い）
- 内部リンク候補: /en/eat/nabe-miso/ （導入1文目の miso soup と、誤解欄「"Miso soup is vegetarian."」。味噌汁の出汁と地域差はそちら）
- 内部リンク候補: /en/eat/udon-osaka/ （「Where to taste it」の Osaka and Kyoto。kitsune udon と昆布出汁）
- 内部リンク候補: /en/eat/udon-sanuki/ （同じく Kagawa。iriko か鰹節かは店ごと、の実例）。温泉との自然な接点は見つからず。

---

## eat/donburi.mdx
- 総評: high 1。かつやの持ち帰り価格の記述が事実と逆で、差の理由（税率）も見落としている。由来・地方差は農水省データベースに帰属して書けており質は高い。
- [high] A — 「Takeaway prices differ: ume is cheaper (¥669), take and matsu dearer (¥853 and ¥1,069). The menu does not say why.」— 店内は take ¥869・matsu ¥1,089 なので、¥853・¥1,069 はどちらも安い（梅-13、竹-16、松-20）。3つとも本体 620/790/990 円に店内10%・持ち帰り8%をかけた額と一致する（620×1.10=682、620×1.08≒669 など）ので、理由は税率の差と読める — 「all three are cheaper to take away」と直し、理由を税率差として原典（かつや公式）で確認のうえ書く（要確認）。
- [mid] B — 「Yoshinoya, regular ¥498. Sukiya: mini ¥420, regular ¥480 …」と FAQ「¥498 at Yoshinoya and ¥480 at Sukiya … both including tax」— 店内か持ち帰りかが書かれていない。手元の food-prices.chain.json は吉野家 ¥498 を「店内価格。テイクアウトは489円」と記録している — 「eat-in, tax included（takeaway ¥489）」のように店内／持ち帰りを併記する。
- [mid] A/C — 「Matsuya posted a price-change notice on 9 October 2026 that I have not read, so its prices are not given here」— 直上の `<DishPrices keys={['gyudon', …]}>` が chain.json の gyudon（松屋 牛めし並盛 ¥460、確認日 2026-10-05）を表示するなら、同じページで「載せない」と「載っている」が矛盾する。gyudon 記事は「上の基準価格は通知より古いかもしれない」と断っている — 通知を読んで更新するか、同じ注記を入れる。
- [mid] A/F — 「Sukiya sells mini, regular, *tokumori* and mega」「large (*tokumori*) ¥880」— 並盛 ¥480 の次が ¥880 と飛んでおり、すき家には中盛・大盛もあるはず（要確認）。gyudon 記事は *tokumori* を "large" と訳さず「mini to mega」と書いていて訳語・段階が揃わない — 公式メニューで段階を確認し、2記事で訳語（tokumori は extra large 等）と段階数を揃える。
- [mid] A/D — FAQ「Why did I get katsudon with sauce and no egg?」の「jō-katsudon」「tamago-toji katsudon」「In Komagane ask for ni-katsudon」— 本文は ni-katsudon を山梨の呼称としてしか書かず、jō-katsudon は本文に出てこない。注文で使える語かどうか読者が判断できない — 福井市観光協会・駒ヶ根ソースかつ丼会の記述で語を確認（要確認）し、本文に1文入れるか FAQ から外す。
- [mid] D/F — 「Tokyo — where Yoshinoya's beef bowl began, at the fish market … Toyosu market has 38 restaurants inside, open to visitors.」— 発祥の市場（日本橋→築地）は現存せず、豊洲は2018年移転後の別の場所。gyudon 記事は「a fish market that no longer exists」と明記しており、豊洲＝発祥地と読まれうる。38店にも帰属と確認日がない — 「The original market is gone; Toyosu is where it moved in 2018」と足し、店数は「GO TOKYO lists 38 (checked 2026-10-10)」と帰属。
- [mid] D — 作業メモ口調。「that I have not read」「I could not find an official date for when the rice-bowl dish itself took shape.」「The menu does not say why.」「Fares and travel times are not on these pages yet.」「Rows without a link are on the list but not written yet.」— 公開本文に作業状況が出ている — 削除するか1文の注記にまとめる。
- [low] C — 「Checked on the date at the top of this page, tax included:」— 画面上部に出るのは「Verified Oct 2026」（月まで。Article.astro の formatMonth）で日付を特定できない。FAQ だけ「10 October 2026」とある — 本文にも日付を書く。
- [low] A — 「Yayoi-ken's best-selling set meals were ¥890–990.」— どの定食か品名がなく、「best-selling」の根拠も不明 — 品名つきで1品に絞るか削る。
- [low] A — 「Niigata's *tare-katsudon* … said to date from the early Shōwa era」「Komagane … under a registered regional trademark」— 誰が言うのか、何の商標か（地域団体商標か）が本文にない — 「the ministry says」と帰属し、商標の種類を出典どおりに書く。
- [low] D — 誤解欄の「"Ume is the smallest everywhere."」「"Donburi is a dish."」— 誰の誤解か出典がなく、後者は冒頭の説明（bowl first, then dishes）の言い換えにすぎない — 実際に迷う点（店内／持ち帰りの価格差、サイズ名がチェーンごとに違う）に差し替える。
- 内部リンク候補: /en/eat/unagi/ （「The lineages」節の「The eel bowl is on the unagi pages」。文で言及しているのにリンクが無い）
- 内部リンク候補: /en/eat/market/ （同じ文の「the seafood bowl on the market pages」）
- 内部リンク候補: /en/eat/meat-pork/ （「Why it is the way it is」の Obihiro butadon の箇条書き。Obihiro pork bowl を扱うページ）
- 内部リンク候補: /en/eat/tonkatsu/ （「Sauce poured on」など katsudon の箇条書きの手前。カツそのものの由来と用語）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （「What it costs」。税込表示と、店内・持ち帰りの税率差の説明）。温泉との接点は見つからず。

---

## eat/drinks-beer-highball.mdx
- 総評: high 0。酒税・ウイスキー基準・サントリー社員記事の数字は一次資料に帰属して書けており質は高い。弱いのは、冒頭の根拠のない一般化、本文に残った調査メモ（特に空の「Craft breweries」項）、見出しと中身のずれ。
- [mid] A — 導入「Most visitors' first drink in Japan is a beer, and many of the cans in a convenience store are not beer in law.」— 前半は出典なし、後半も割合の裏づけなし — 「A common first drink」程度に弱めるか、国税庁の分類を根拠として書く。
- [mid] A — 「The jump in 2019 is not a sudden boom: the tax agency explains that the 2017 reform widened the definition of beer …」— 本文は 184→395 の増加をほぼ全て免許変更で説明するが、FAQ と誤解欄は「Part of the jump」。表現が揃っていない。FAQ の「How many craft breweries」の答えも、国税庁の「地ビール」集計で、記事自身が「craft に法的定義はない」とする JBA の定義とは別カテゴリ — 国税庁の説明の範囲に合わせて「part of」に統一し、FAQ の答えの先頭で「local beer count」と明示。
- [mid] A/D — 「malt must be at least 50%」と FAQ「if other grains are used malt must be at least half of them」— 何の50%かが書かれず、FAQ の "half of them" は「穀物の半分」とも読める。法令は水を除いた原料全体の重量比のはず（要確認）— 「at least 50% of the weight of the ingredients other than water」と国税庁PDFどおりに書く。
- [mid] D — 見出しと中身のずれ。ウイスキーの定義と業界基準（約12行、FAQ 4問目）が「What makes it beer」の中に入っており、title・description はビールとハイボールだけ。ハブ drinks にも同じ説明がある — 独立した節に分けるか、ハブへ寄せて要約とリンクにする。
- [mid] D — 公開本文に残った調査メモ。「Craft breweries — I did not read any official material on brewery taprooms or tours, so I say nothing about them.」（項ごと中身が空）「What that did to the price of a can, I have not checked …」「Where the highball itself began, I could not confirm」「whether they may join at Yamazaki … I could not confirm, nor the fee」— 読者には情報にならない — 空の項は削除、他は1文の注記にまとめる。
- [mid] D — 「How many "big" brewers? … so this page says "the big brewers" and leaves the number alone.」と、後の節の「excluding the five big brewers」— 数を出さないと言った直後の節で「five」と書いていて自己矛盾 — 「five」は国税庁統計の用語と帰属して整合させるか、上の項を削る。
- [mid] C — 山崎蒸溜所「open 10:00–16:45 (last entry 16:30)」「tours need reservations except for walk-in courses」、アサヒ「has charged since 14 January 2023」— 営業時間・予約ルールに本文内の確認日がない（frontmatter は月表示のみ）— 「(Suntory's page, checked 11 Oct 2026)」のように日付を添える。
- [mid] D — 「How to order it」の中身が、ハイボールは Suntory の角ジョッキ・1:4 の説明、ビール／発泡酒／新ジャンルは「I could not find an official source … so if it matters to you, ask」で終わる。注文の場面で使える情報（ビールとハイボールの頼み方、メニュー上の表示）が無い — 出典のある範囲で書くか、izakaya 記事の注文の節へのリンクに置き換える。
- [low] A — サントリーの1994年の商品が「Hop's Nama」と「Suntory's Hop's」（JBA）の二つの名前で出る — どちらが正式か分からない — 表記を揃えるか「(launched as Hop's)」と整理。
- [low] D — 「¥155,000 per kilolitre for beer (with or without sparkle) and happoshu」— 「(with or without sparkle)」が分かりにくく、新ジャンルが文中に出ない — 「beer, happoshu and the new genre」と書く。
- [low] B — ARTICLE-AUDIT の「税込不明の金額 ¥155,000 …」は1kLあたりの酒税率で価格ではない（誤検出）— 対応不要。
- 内部リンク候補: /en/eat/drinks/ （導入2段落目「start from the drinks overview」の文）
- 内部リンク候補: /en/eat/izakaya/ （「Prices are not given here; the izakaya overview …」と「The highball spread from the izakaya out」）
- 内部リンク候補: /en/eat/conbini/ （導入1文目の「cans in a convenience store」。税の線引きと売り場の説明がそちらにある）
- 内部リンク候補: /en/soak/jozankei/ （Sapporo の項。札幌から車で1時間の塩化物泉。ビール（札幌）⇔温泉の結びつき）
- 内部リンク候補: /en/soak/arima/ （山崎蒸溜所・アサヒ吹田の項。関西の温泉地として、見学とセットの導線）

---

## eat/drinks.mdx
- 総評: high 0。分類・年齢・免税範囲を国税庁・税関・警察庁などに帰属して書けている。弱いのは、品目数の合計が合わない点、中身のない節と調査メモ口調、定義のない用語が誤解欄に出る点。
- [mid] A — 「four kinds and 17 items」（title 側の description にも出る）と、箇条書きの列挙 — Sparkling 3 ＋ Brewed 3 ＋ Distilled 6 ＋ Mixed 6 ＝ 18 で、読者が数えると合わない — 国税庁の分類表で品目数と列挙を突き合わせ、数か列挙のどちらかを直す（要確認）。
- [mid] D — 「What it costs: Nothing here. I could not find drink prices that the makers or operators state as tax included, so this page gives none.」— 見出しだけで中身がない。ほかに「What Tokyo pours, I could not document.」「What that means for a visitor, I could not confirm.」「Fares and travel times are not on this page yet.」「Rows without a link … not written yet.」、FAQ内の「I could not find an official source …」「I could not confirm from the customs page …」— 作業メモ口調が本文・FAQ の双方に残る — 空の節は削除して izakaya へのリンク1文に。FAQ は「公式資料では確認できない」の形にする。
- [mid] C — 「One limit has just moved.」— 「just」は日付のない相対表現。免税枠（3本・760ml）や「under 20 は免税なし」にも本文内の確認日が無い — 「from 1 October 2026」と固定し、税関ページの確認日を添える。
- [mid] D/F — 誤解欄「"Kōrui shōchū is the cheap, worse kind."」— 「kōrui」はこの本文では一度も定義されていない（本文は continuous-still のみ。drinks-shochu の FAQ では kōrui/otsurui を定義している）— 「Continuous-still (kōrui) shōchū」と本文の分類箇所にも併記する。
- [mid] A — 「Shōchū country — Kagoshima and southern Miyazaki for sweet potato, Iki and Ōita for barley, Kuma for rice, the Amami Islands for brown sugar …」— 帰属がない。drinks-shochu は「Iki is said to be its birthplace」「Ōita は1951年の麦配給終了が契機」と帰属つきで書いている — 「according to NRIB」と帰属するか、shochu へのリンクに置き換える。
- [low] A — 冒頭「Why can a 19-year-old vote but not order a highball?」— 投票年齢18歳は本文にも sources にもない — 出典を足すか、Civil Code の成年年齢（本文にある）の話に揃える。
- [low] A — 「An izakaya you just walk into.」— 予約が要る店もあり、出典のない一般化 — 「Many izakaya take walk-ins」程度に弱め、予約の記事へリンク。
- [low] D — FAQ「Will I be asked for ID?」の答えは「Possibly」で始まるが、本文にある JNTO の「unlikely to be asked, but may be」が FAQ に入っていない — FAQ に JNTO の記述を入れる。
- [low] D — 「At the source, you book」「At the source, tasting has conditions」の内容（サントリー・アサヒ・霧島の予約・試飲ルール）が drinks-beer-highball と重複しており、片方の更新漏れが起きやすい — ハブは要約＋リンクにする。
- 内部リンク候補: /en/eat/izakaya/ （導入末尾「start from the izakaya overview」と「Where to drink it」の Izakaya の項）
- 内部リンク候補: /en/eat/sake/ （導入「Sake has its own overview」の文）
- 内部リンク候補: /en/eat/drinks-shochu/ （「Where to drink it」の Shōchū country と、「Shōchū is two drinks in law」の箇条書き。LineageTable のリンクとは別に、本文からの導線）
- 内部リンク候補: /en/soak/kirishima/ （「Shōchū country」の Kagoshima・南宮崎の項。焼酎どころと同じ鹿児島・霧島エリアの温泉。食と温泉の結びつき）
- 内部リンク候補: /en/eat/conbini/ （導入「beer, happoshu and something called new genre on the same shelf」。缶が並ぶ売り場の説明）

---

## eat/food-shopping-ekiben.mdx
- 総評: high 1。起源の諸説を並べて決めない書き方は方針どおりで、JR西日本の報告書の読み込みも丁寧。弱いのは、JNTO の価格帯と2017年の価格に税の扱いが書かれていないこと、FAQ の言い切りが本文の留保より強いこと、調査メモ口調。
- [high] B — 「JNTO gives a range from under ¥1,000 to around ¥3,000 for boxes with wagyu.」（FAQ と「Two boxes」の末尾。ハブ food-shopping にも同文）、「*Aff* listed it at ¥1,000 in 2017」「*Aff* listed it at ¥830 in 2017」— 税込の明記がない。「Prices are tax included, as listed on the makers' own sites on 10 October 2026」は両社の2026年価格にしか掛からず、JNTO の価格帯は別段落、2017年の2価格も税の扱い不明。FAQ の「both tax included」も2社の価格のみ — JNTO の価格帯と2017年価格は外すか、「税の扱いは出典に記載なし」と明記する。
- [mid] A — 「Made to be eaten cold.」と誤解欄「"Heat it in the microwave." … Ekiben are made to be eaten cold.」— aff の記述は「常温でおいしいように作られている」で、「冷たいまま食べる」とは言っていない。同節で「some makers explain on their sites how to heat theirs」「some ekiben heat themselves」と加熱に触れており、誤解欄は「温めるのが誤り」と読める。ポリスチレン容器が電子レンジ不可という農水省の警告は容器の話 — 「Eat at room temperature; follow the maker's heating instructions and check the container」の趣旨に直す。
- [mid] C — FAQ「Not on the Tokaido Shinkansen, where JR Central ended trolley sales on 31 October 2023 and moved to mobile ordering in the Green Cars.」と、本文「I could not read JR Central's current page, so later changes are not confirmed」— FAQ は現在形の断定、本文は留保つきで食い違う。JR東日本のFAQも「updated August 2024」で記事日（2026-10）から約2年前 — FAQ にも「as of 2023 / August 2024」と書き、現行ページで再確認する。
- [mid] C — 「about 80 now」「On 1 July 2023 it had 83 members」「Large stations sell …」— JR西日本の報告書（令和8年3月）の時点が本文になく、「now」が何時点か分からない — 「about 80 in March 2026 (JR West)」と時点を添える。
- [mid] D — 作業メモ口調。「I have no source explaining the change.」「I could not read JR Central's current page」「I could not find any official comparison of the same box at its home station and in Tokyo … so I do not say one is better or dearer」「Fares and travel times are not on this page yet.」— 読者には情報にならない — 削除するか1文にまとめる。
- [mid] A/F — ハブ food-shopping は同じ京王の催事を「about 40 makers **cooking** on site」、この記事は「about 40 makers **selling** on site」。ほかにハブは「Kanagawa's shūmai bento」、この記事は崎陽軒「Shiumai Bento」で綴りも違う — PR配信文を確認して cooking／selling を揃え、shiumai／shūmai の表記を統一。
- [low] A — 「the trolley left Japan's busiest shinkansen line in 2023」— 「busiest」の選定主体・指標がない — 「the Tokaido Shinkansen」と書けば足りる。
- [low] A — 「today's "big three" are at Tsuruya in Kumamoto …, Keio …, Hanshin …」— 「the report says」が前の文にしか掛かっておらず、"big three" が誰の呼称か曖昧 — 「JR West's report names three long-running fairs」のように帰属させる。
- [low] D — 「弁 looks like a 4 combined with 十 (ten), and 当 is read *tō*, which sounds like ten」— 英語の読者には、tō と ten の関係が伝わりにくい — 「十 (read *tō*)」の形にして英語の ten と混ぜない。
- [low] D — 「Supermarkets count bento among their prepared food, 11.3% of their sales in 2025.」— 11.3% が弁当の割合に読める（実際は惣菜全体）— 「prepared food, bento included, was 11.3%」と書く。
- [low] D — 「Two boxes」が両方とも関東圏（群馬の横川、横浜）で、areas に kansai があるのに関西の箱がない — 公式サイトで税込を確認できる関西の箱を1つ足すか、現状のままで構わない。
- 内部リンク候補: /en/eat/food-shopping/ （導入2段落目「start from the buying-food overview」の文。リンクが無い）
- 内部リンク候補: /en/eat/food-shopping-depachika/ （「Not all of Japan's ready-made food is this」の Department store food floors と、「At a fair」の百貨店催事）
- 内部リンク候補: /en/eat/rice-sides-takikomi/ （「Two boxes」の Tōge no Kamameshi。釜めし＝炊き込みご飯の解説）
- 内部リンク候補: /en/eat/sushi-masu/ （「Ekiben away from the station」の masu-zushi の言及。駅の売店が名物にした経緯）
- 内部リンク候補: /en/soak/hakone/ （Kiyoken の Shiumai Bento の項。横浜から神奈川の温泉地へ。出典に両者の関係は無いので、「同じ県の別ページ」程度の導線に留める）

---

## eat/food-shopping.mdx
- 総評: high 1。統計の出典と税抜／税込の注記が丁寧で、depachika 記事の数字と一致している。弱いのは、JNTO の価格帯の税の扱い、出典より強い FAQ の「Often」、見出し文の言い切り、調査メモ口調。
- [high] B — 「Ekiben are sold … according to JNTO, which gives prices from under ¥1,000 to around ¥3,000 for boxes with wagyu.」— 税込の明記がない（同じ箇条書きにも "tax" がない）。他の数字は「figures before tax」「without consumption tax」と注記しているのにここだけ抜けている — 外すか「tax treatment not stated」と書く。ekiben 記事と同じ文なので同時に直す。
- [mid] A/F — FAQ「Is food really discounted before shops close? Often, but not on a fixed rule.」— JNTO は「may be discounted … does not always happen」。「Often」は出典より強い（depachika 記事は「do not always happen」まで）— 「Sometimes」「JNTO says it may happen」にする。
- [mid] A — 太字の見出し文「More people buy food than cook it.」— 出典は農水省白書の中食市場「2014年比118.6%」で、買う人が作る人より多いとは言っていない — 「The ready-made food market grew to 118.6% of its 2014 size by 2023」のように出典の言葉で書く。
- [mid] A — 「A bento is cheaper than eating out.」「Department stores sell gifts.」「Sweets, not dinner, are the larger line.」— 根拠は JR西日本の報告書と、2026年8月（お盆月）1か月分の百貨店協会のコメント。誤解欄は「August 2026」と限定しているのに、この3つの見出し文は通年のように読める。ekiben 記事には ¥1,500 の箱もあり「cheaper」と並ぶと矛盾して見える — 帰属と時点を見出し文に入れる。
- [mid] A — 「This is the part visitors ask about most, and the official record is thin.」— 「ask about most」の根拠がない — 削除する。
- [mid] D — FAQ「What is the difference between a depachika and a supermarket deli? Mostly what sells.」— 百貨店「食品が売上の約4分の1」とスーパー「惣菜が約11%」は分母が違う数字で、比較にならない。読者が知りたい差（売り場、贈答向けか、買い方）に答えていない — 品ぞろえと買い方の違いで答え直し、数字は別の問いに回す。
- [mid] D — 作業メモ口調。「Why Japanese people give food gifts the way they do, I could not find explained in an official source, so it is not explained here.」「Why prices fall into tiers, I could not find.」「Its pages that I read did not say in so many words whether anyone can shop there, so I do not say so either.」「Regional supermarket products are not covered yet; I did not collect sources for them.」「The supermarket row is thin on purpose.」、FAQ 1 の末尾「I could not find an official rule …」— 読者には情報にならず、業務スーパーの一文は「誰でも買えるか不明」という状態を公開している — 削除する。
- [mid] C — 「JNTO's 2011 article names Isetan, Odakyu, Seibu and Takashimaya」「every city has several」— 2011年の記事の店名。depachika 記事は「2011年なので数字は変わりうる」と注記しているが、ハブにはない。「every city has several」は出典なし — 「as of 2011」と明記するか、depachika 記事が引く JNTO の現行ガイドに差し替える。
- [low] C — 「It estimates that food retailers produced 480,000 tonnes of food loss in fiscal 2024. A separate ministry release gives 4.64 million tonnes … for fiscal 2023」— 年度の違う数字を並べ、自分でも「different estimates for different years」と書いている — 年度を揃えられる最新値に統一するか、一方を削る。
- [low] D — 見出し「Where to eat it」は買い物の記事に合わない — 「Where to buy it」にする。
- 内部リンク候補: /en/eat/conbini/ （導入2段落目「start from the konbini overview」の文）
- 内部リンク候補: /en/eat/food-shopping-depachika/ （導入末尾「The lineage pages go into the department store food floor …」と、「Where to eat it」の Department store food floors）
- 内部リンク候補: /en/eat/food-shopping-ekiben/ （「The ekiben page has the details」の文と、「Where to eat it」の Ekiben の項）
- 内部リンク候補: /en/column/food-souvenirs-omiyage/ （「Department stores sell gifts」の段落。日本の贈答の理由は本文で「説明できない」としているが、土産の買い方と日付表示はそちらにある）
- 内部リンク候補: /en/eat/sweets/ （「Sweets, not dinner, are the larger line」と「What it is」の depachika の項。洋菓子・和菓子の説明）。温泉との自然な接点は見つからず。

---

## このバッチ全体の共通傾向
- 「I could not find / I did not read / not on this page yet / not written yet」型の調査メモ口調が6本すべてに残る（「Fares and travel times are not on this page yet.」は donburi・drinks・ekiben・food-shopping で同一文）。検索して一括で削除・書き換えできる。
- 価格の書き方が揃っていない。JNTO の ¥1,000〜3,000 が ekiben と food-shopping に税込の記載なしで載り、donburi では店内（10%）と持ち帰り（8%）の別を書かず、かつやの差を取り違えている。「店内／持ち帰り・税込・日単位の確認日」で統一する（画面上部の確認日は月表示までなので、日付は本文に書く）。
- 本文の内部リンクが6本ともゼロ。「start from the … overview」「The ekiben page has the details」のように文中で名指ししているのにリンクがないので、該当の文をそのままリンクにすれば E の大半は片付く。
