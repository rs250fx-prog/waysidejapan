# 見直しバッチ6（2026-10-13）

対象6本（米・酒・刺身・魚介・行事食の各ハブ5本＋酒の系譜1本）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のコード（src/components/{LineageTable,DishPrices,RateNote,Related}.astro、src/layouts/Article.astro）、src/data/lineages/{rice,sake,sashimi,seafood,seasonal}.json、src/data/food-prices.chain.json。
F の照合先（各1本のみ）: rice→rice-curry（CoCo Ichibanya の300g標準・150gで¥90引き・350gで¥65増・400gで¥130増は一致、食い違い無し）／sake→sake-niigata（Ponshukan ¥1,000税込・111/129本は一致）／sake-nada-fushimi→同バッチ内の sake（食い違いあり）／sashimi→sashimi-shime（アニサキス・冷凍の記述は一致。「殺し方・扱い」の語は見つからず）／seafood→seafood-fugu（肝は販売・提供不可、免許は都道府県ごと、で一致）／seasonal→seasonal-hinamatsuri（ひなあられの関西=丸くて塩味・関東=米粒形で甘い、で一致）。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし」: 本文（Markdown）のリンクは6本とも0本で検出どおり。ただし品目ハブ5本は `<LineageTable>` が公開済みの系譜ページへのリンクを出す（rice 2本＝onigiri・curry、sake 2本、sashimi 2本、seafood 6本、seasonal 3本）。系譜の sake-nada-fushimi は Article.astro がパンくずで親ハブ（/en/eat/sake/）へのリンクを出す。全記事の末尾には Related.astro の「Read next」3枚もある。E は、これらが拾わない本文中の参照に絞った。
- 「税込不明の金額」: sake は「記事内に税込の注記はある」と判定されているが、それは直上の Ponshukan（"¥1,000 including tax"）の注記。Toranomon の ¥100 と Gekkeikan の ¥600 の行には税込の記載が無く、CHECKLIST の基準（同じ段落／箇条書き）では違反（high）。sake-nada-fushimi は検出どおり。rice は「¥31,556, ¥930」と CoCo の金額とも同じ段落に "including freight, packaging and consumption tax" / "tax included" があり問題なし。sashimi の ¥2,639 も同段落に "including tax"。seafood の ¥2,890 は免許の申請手数料で食の価格ではない（下記）。
- ARTICLE-AUDIT の rice・sashimi・seafood・seasonal には high の検出は無く、今回も high は2件（sake と sake-nada-fushimi の税込）。

テンプレ側の事実（記事ではなくコンポーネント）: 末尾の RateNote は pricesCheckedOn があれば "Fares verified {月} — check the operator before you travel." を出す（RateNote.astro 19行）。6本とも pricesCheckedOn: 2026-10-10 があるが、運賃・交通費を載せる記事は無い。researched 記事の冒頭には Article.astro が "I have not been to every place in this guide…" を固定で出す（先行バッチで確認済み）。

---

## eat/rice.mdx
- 総評: 読者に実害のある誤りは見当たらない。数字は帰属と日付が揃っていて質が高い。主な問題は「見つからなかった」という作業メモ口調の連発、意味の通らない1文、本文で指しているのにリンクの無い参照。
- [mid] D — 作業メモ口調が7か所。「Older peak figures for rice eating circulate widely; I could not confirm them from a primary source, so none is given here.」「And I could not find an official statistic for the shelf price of a 5 kg bag.」「The ministry's release for the first month of the 2025 crop, September 2025, is a preliminary figure with a later correction sheet, so I have not quoted it here.」「I could not find a statistic on how many people take them.」「I could not find a requirement for restaurants to name the variety」「I could not find an official comparison of whether shops in growing regions and in Tokyo use the same varieties or price them differently」、FAQ の「I could not find a rule that they must name the variety.」 — 「公式の統計は公表されていない」「規則は定められていない（農水省の外食向け案内による）」など事実の言い方に。読者に要らない2か所（9月分を引用しない理由、リフィル人数）は削除。
- [mid] D — 意味が通らない文。「The ministry says it began publishing supply and price information in March 2014, as part of a review of rice policy, applied from the 2018 crop, meant to let farmers and collectors decide for themselves how much to grow according to demand.」 — 2014年3月の公表開始と「2018年産から適用」が一文に混ざり、何の話か分からない。出典を開けないので要確認 — 年を二つの事実に分けて書く。
- [mid] D — 「Fares and travel times are not on this page yet.」（「Where to eat it」の末尾）。米の記事に運賃は要らず、公開本文に残った未完成メモ。末尾の RateNote が pricesCheckedOn から "Fares verified October 2026" を出すので、運賃の無い記事に「運賃確認済み」と出る — 文を削除し、運賃の無い記事の pricesCheckedOn の扱いはテンプレ側で共通対応。
- [low] A — 「Every rice ball is traceable.」（見出し）。本文が述べるのは販売・加工・提供する事業者の記録義務（原則3年）で、「すべてのおにぎりが追跡できる」とまでは言っていない — 見出しを "Rice and rice products must be traceable by law" 等、法の言い方に寄せる。
- [low] A — description の「Japan eats about 52 kg of rice a person a year」。本文は食料需給表の「supply（供給量）」と正しく書いているのに、description と FAQ の問いは "eats"（摂取量）にしている — "is supplied" など。
- [low] C — 「in August 2026 the all-variety average was ¥31,556 per 60 kg」は月次の1点。後続月が出ると古くなるのに、最新分への案内が無い。sources に 2025年9月分（251021.html）が載っているが本文は使っていない — 「以後は農水省の月次公表を参照」と一言添え、未使用の出典を外す。
- [low] D — 重複: 「Rows without a link are on the list but not written yet.」。LineageTable 自身が同趣旨の注記を出す（先行バッチで確認済み）ので二重 — 本文側を削除。
- [low] A — 「Glutinous rice has its own map. Hokkaido grows 17.9% of Japan's glutinous rice, led by a variety called Kazenoko-mochi.」。都道府県12件の％は komenet の PDF が出典と読めるが、この1文だけ別の統計に見える — 出典の表を注記。
- 内部リンク候補: /en/eat/conbini-onigiri/ （"Convenience-store rice balls are a separate story…" の箇条書き。"the convenience-store onigiri page" と書きながらリンクが無い）
- 内部リンク候補: /en/eat/rice-sides-mochi/ （"Glutinous rice, *mochigome*, is the rice for mochi" の段落。もち米の用途の続きとして）
- 内部リンク候補: /en/eat/rice-sides/ （"What goes with rice — pickles, nattō, mochi and cooked-in rice — has its own overview." の箇条書き）
- 内部リンク候補: /en/eat/teishoku/ （"Some set-meal chains offer free refills of rice instead." — 定食のごはんおかわりの説明先）
- 内部リンク候補: /en/eat/sake/ （トレーサビリティ法の対象に "sake and mirin" を挙げる段落、および酒造用米1.3%の文。酒の側の精米歩合とつなぐ）

## eat/sake-nada-fushimi.mdx
- 総評: 読者に実害のある点が1件（税込不明の金額）。構成と帰属（"said to"、"the association says"）は丁寧。「Why here」の総括が個別の記述と合わない点、終了済みイベント、作業メモ口調が目立つ。
- [high] B — 税込不明の金額。「**Gekkeikan Okura Sake Museum, Fushimi.** ¥600 for over-20s with three tastings … ¥100 for 13–19 … The page does not say whether the price includes tax.」 — 税込不明と書いたうえで金額を載せている。同じ ¥600 は FAQ（"charges ¥600 for over-20s, including three tastings"）にも、「In Tokyo, the brewers' association's information center in Toranomon pours sake from all over Japan from ¥100 a glass」（同段落に税込の記載なし）にもある — 金額を外して「公式に税込の記載なし。料金は museum の公式ページで確認」とする（税込が確認できたら金額と確認日を載せる）。
- [mid] A — 総括が個別の記述と合わない。「The official texts give the same three reasons for both towns: water, a winter suited to brewing, and a way to move the sake.」 — 直後の「Fushimi had abundant spring water and the river between the capital and Osaka」は2つで、冬の醸造適性は Fushimi の節に出てこない（Nada は Rokkō oroshi）— 「both towns: water and a way to move the sake; Nada also had the Rokkō wind」等、出典が言う分だけに。
- [mid] A — 出典の見えない現地情報。「The well sites of Ōzeki, Hakushika and Hakutaka are laid out as the Miyamizu Garden. You cannot go in, but you can see it from the pavement.」 — 庭園の公開状況を示す出典が sources に無く（西宮市は保全条例のページのみ）、現地で見たように読める。要確認 — 公式の案内を出典に足すか、「公開状況は未確認」にする。
- [mid] D — 終了済みのイベント。「Hakutsuru's open brewery day. The autumn 2026 event was on 3 October, free entry, with paid tastings.」 — pubDate（10/10）の時点で既に過去で、読者が行ける日ではない。毎年かどうかも書いていない — 削除するか、「例年の開催は公式に記載なし」と明記して確認先を示す。
- [mid] D — 行き方が空で予告文のみ。「Fares and travel times are not on this page yet; they will be added from the rail operators' own fare pages.」 — 読者には「行きたいが行き方が無い」になる。RateNote が "Fares verified October 2026" を出すのにページに運賃が無い点も不整合 — 最寄り駅と所要時間を出典つきで足すか、予告文を削除。
- [mid] F — 数字の枠が説明無しに食い違って見える。「added alcohol no more than 25% of the rice weight」（Nada）と「no more than 50% of the rice weight」（Kyoto）に対し、sake ハブは「In ginjō and honjōzō it is capped at 10% of the weight of the rice」 — 10%は特定名称酒の区分の上限、25%・50%は GI 基準の上限と読めるが書かれていない。読者は灘のほうが緩い／厳しいと誤読しうる。GI 基準の原文で要確認 — 一文で枠の違いを説明するか、この数字を外す。
- [mid] D — 作業メモ口調。「I have not been able to confirm the year that is often quoted, so I do not give one.」「a claim I could not trace further」「does not appear in any of the official or industry sources I used, so it is not used here」「Whether free tasting is currently offered is not stated on the museum's page.」 — 「出典で確認できた範囲」「公式資料に記載なし」の言い方に。
- [low] A — 「What people get wrong」の「**"Miyamizu was discovered in 1840."** The year is widely repeated」。誰が言う年かが無く、本文のどこにも1840年は出てこない — 「Some sites give 1840; the brewers' association's page gives no year」のように出どころを示す。
- [low] A — 帰属の無い3点。「Nada's *hiyaoroshi* … has traditionally gone out from September」（誰の言い方か）、「The spring at Gokōnomiya shrine is one of Japan's 100 selected waters」（選定主体が無い）、「the Tanba *tōji* — with the Nanbu and Echigo, one of Japan's three great brewer guilds」（三大杜氏を誰が言うか）。
- [low] A — 「Those are national figures for a basic glass.」。DishPrices の sake（food-prices.chain.json）は鳥貴族のカップ酒（¥410）、魚民「白鶴 正一合」（¥548）、磯丸水産の純米酒（¥549）で、「glass」ではなくカップ・一合。居酒屋チェーンの値段で「Tasting it there」（産地での試飲）の比較にも向かない — "a cup or one gō of basic sake at chain izakaya" と正確に。
- [low] D — 「¥100 for 13–19; free for 12 and under」。試飲は20歳以上だけのはずだが、13–19歳の料金で何が付くかが書かれていない — 「(no tasting)」等を明記。
- [low] D — 英語が不自然。「sake that does not get in the way of food, and brings each other out」 — 主語が曖昧で "each other" が文法的に合わない（引用の訳）。
- 内部リンク候補: /en/eat/sake/ （2段落目 "For what sake is and how to read a label, start from the sake overview." — 平文。パンくずには親ハブへのリンクがあるが、本文の案内にも張る）
- 内部リンク候補: /en/soak/arima/ （冒頭 "Nada, on the coast between Kobe and Nishinomiya" の段落、または "Tasting it there" の末尾。灘と同じ神戸圏の温泉で、食（酒）⇔温泉の方針に合う）
- 内部リンク候補: /en/eat/drinks/ （"¥600 for over-20s" の行。飲酒年齢が20歳である理由と酒類の法的区分の説明先）
- 内部リンク候補: /en/eat/dashi-east-west/ （"The GI document links this to Kyoto cooking and its dashi" — 京都のだしと関西・関東の違いへ）
- 内部リンク候補: /en/eat/sake-niigata/ （"The protected names" の節。同じ GI を持つもう1つの系譜と比べる導線）

## eat/sake.mdx
- 総評: 読者に実害のある点は税込不明の金額2件。ラベルの読み方は告示・法令・協会資料に基づいていて質が高い。外国での保護範囲の記述に出典が見えない点と、帰属の無い言い切りが少しある。
- [high] B — 税込不明の金額。「**Japan Sake and Shochu Information Center** … from ¥100 a glass, with sets of three. Weekdays 10:00–18:00. The page does not say whether prices include tax.」と「**Gekkeikan Okura Sake Museum**, Fushimi, Kyoto — ¥600 for over 20s, including three tastings. Cashless only.」 — 前者は税込不明と書いたうえで金額を載せ、後者は税込の記載が一切ない。Ponshukan の「¥1,000 including tax」は別の店の注記なので流用できない — 2行の金額を外す（sake-nada-fushimi の同じ2点と同時に直す）。
- [mid] A — 出典の見えない断言。「Since December 2015 it has been a national geographical indication, protected in the EU, the UK, the US and India under trade agreements.」 — sources に貿易協定・外国での保護を示す資料が無い（指定年月は NTA の GI 一覧で裏づく可能性があるが、4か国の保護は別資料）。要確認 — 出典を足すか、国名を外して "designated by the national tax agency in December 2015" だけにする。
- [mid] D — 作業メモ口調と出典の無い断言が同居。「Sake has no standard price structure, and I found no official explanation of how bar and shop prices are set.」 — 前半は出典なし、後半は作業メモ。削除して、次の「What can be said is on the label…」から始める。
- [mid] D — 数字の意味が不明。「Ponshukan's machines hold 111–129 sakes from Niigata's breweries」 — sake-niigata では Echigo-Yuzawa が129、Niigata・Nagaoka が111（一致）だが、ここは範囲だけで駅ごとの違いが読めない — 「111 at Niigata and Nagaoka, 129 at Echigo-Yuzawa」または「over 100」。
- [mid] F — hiyaoroshi の定義が2本でずれる。ここは「sake brewed in winter, matured over summer and bottled in autumn after only one heating」、sake-nada-fushimi は「shipped without a second heating once it has cooled to the outside temperature」 — 「bottled」か「shipped」か、「火入れ1回」の意味を、酒類総研の用語事典（sources にあり）の言い方に揃える。
- [low] A — 帰属の無い言い切り。「Warming became common from the mid-Edo period.」「Superlatives such as "best" or "first" are banned.」（どの基準か）「Nada's *hiyaoroshi* has traditionally been shipped from September.」（誰の言い方か）— 「the brewers' association says」「the labelling standard bans」等を付す。
- [low] A — 「Until 2003, junmai also had to be polished to 70% or less. That requirement was removed, and the 15% kōji rule added.」。2003は告示の年か適用の年か不明 — 出典の日付で要確認。
- [low] C — 「The national tax agency lists 23 geographical indications for sake as of this page's date」。"this page's date" が読者には分からない — 「as of 10 October 2026」と日付を書く。試飲施設3件（Toranomon、Ponshukan、Gekkeikan）の価格・営業時間にも行ごとの確認日が無い — 「(checked 2026-10-10)」を各行に。
- [low] D — 「The table is kept in one place so that every region is described on the same terms.」。表の運用の説明で、読者に要らない — 削除。
- [low] D — 温度の節の10語（yuki-bie から tobikiri-kan まで）が1段落に詰まっていて、訪日客が使う場面（冷酒・燗）が見えにくい — 箇条書きか温度順の表に。
- 内部リンク候補: /en/eat/drinks/ （"What it is" の酒税法の定義の段落、および "Over 20s only"。酒類の法的区分と飲酒年齢の説明先）
- 内部リンク候補: /en/eat/izakaya/ （"How it is served" の節。徳利・升が出てくる居酒屋の使い方）
- 内部リンク候補: /en/eat/drinks-shochu/ （"Japan Sake and Shochu Information Center … shōchū, awamori" の行）
- 内部リンク候補: /en/eat/rice/ （"most rice for sake to 75% or less" の精米歩合の段落。酒米は米全体の1.3%、という米ハブの数字へ）
- 内部リンク候補: /en/soak/arima/ （"The same name, a different glass" の "poured in Niigata or Kobe" — 灘＝神戸圏の温泉。食⇔温泉の方針）

## eat/sashimi.mdx
- 総評: 読者に実害のある点は無い。寄生虫の安全の記述は厚労省・農水省の言い方に沿っていて質が高い。作業メモ口調、FAQ が読者の疑問に答えていない点、本文からリンクの無い参照が主。
- [mid] D — 作業メモ口調。「I could not find an official definition, or a reliable official history of the word and its origins, so this page does not give one.」（直前に Kikkoman の定義を出しているので読みが矛盾する）「Whether restaurants must show farmed or wild, I could not establish from the sources I read.」「I could not find verified tax-included prices for sashimi set meals or specialist restaurants.」「I found no official explanation of how sashimi prices are set.」 — 「公式の定義は示されていない。ここでは Kikkoman の定義を紹介する」など事実の言い方に。
- [mid] D — FAQ 4問目「How much is a sashimi platter?」の答えが、居酒屋チェーン1社の1商品（Isomaru Suisan ¥2,639）と「I could not find verified tax-included prices」だけで、読者の疑問（定食・専門店でいくらか）に答えていない。本文「What it costs」と同内容 — FAQ を別の実際の疑問（"Is it safe to eat raw fish in Japan as a visitor?" 等）に差し替えるか、基準価格ページに刺身の項目があれば DishPrices に置き換える。
- [mid] A — 帰属の無い解釈。「Tuna and bonito appear under two cuts each: the choice depends on the thickness and firmness of the flesh, not only on the species.」 — 前半は Kikkoman の列挙から読めるが、後半は記事の解釈。「Kikkoman's guide lists…」に限るか削除。
- [low] A — 帰属の曖昧。「Wasabi cultivation is said to have begun in the early Edo period, at Utōgi in what is now Shizuoka city.」（誰が言うか。aff 2020年12月号なら明記）、「No deaths are recorded; rarely, an allergic reaction.」（主語が省庁か不明で断言に読める）、FAQ の「Wasabi does contain an antibacterial compound」（本文は農水省の雑誌の記述として帰属しているが FAQ は無帰属）。
- [low] A — 「small mackerel landed there have a freshness index (K value) of about 3% on average. Hokkaido's research institute gives 20% or less as the guide for eating raw.」 — 魚種も機関も違う数字を並べ、3% が何を意味するか（低いほど新鮮）の説明も、島根県「とびっくす」2018・北海道立総合研究機構マニュアル（sources にある）の名指しも無い。魚種と年を付す。
- [low] D — 「The lineage pages go into how fish is killed and handled.」。系譜は出世魚（shusse-uo）と〆（shime）の2本で、sashimi-shime を grep した限り「締め方・殺し方」の語は無い。shusse-uo は開いていないので要確認 — 約束と中身が合うか確認し、合わなければ言い換える。
- [low] C — 「Isomaru Suisan, launched a boat-shaped sashimi platter (*funamori*) at ¥2,639 including tax in its April 2026 menu」に確認日が無い（出典の公開日は 2026-03-25）— 「(menu checked 2026-10-10)」を付す。
- [low] D — 導入の「which is only partly true and dangerously misleading in one respect」は評価語が強い — 次の "The important caveat" に任せ、導入は "only partly true" までに。
- 内部リンク候補: /en/eat/seafood-saba-katsuo-maguro/ （"Garlic with bonito. In Kōchi, *katsuo no tataki* is always served with sliced garlic…" — 高知のたたきを扱うページ。sashimi 表の tataki 行は planned なので、代わりにここへ）
- 内部リンク候補: /en/eat/sashimi-shime/ （"Which fish" の "unfrozen *shimesaba*"。安全の節で直接つながると読者に有益。表にも出るが本文の文脈リンクが無い）
- 内部リンク候補: /en/eat/seasoning-shoyu/ （"Soy sauce came late" の節。醤油の種類と産地の説明先）
- 内部リンク候補: /en/eat/market/ （"What the label tells you"。魚売り場・市場の見方）
- 内部リンク候補: /en/eat/sushi/ （冒頭の "raw fish, sliced, with soy sauce and wasabi" と、寿司との違いの導線）

## eat/seafood.mdx
- 総評: 読者に実害のある点は無い。出典の帰属（"the ministry says"）は丁寧。ただし表の公開済み6本のうち2本が本文の一覧に無く、作業メモ口調が強く、FAQ と費用の節が読者の役に立たない。
- [mid] D — 本文の一覧が公開済みの系譜と合わない。「The pages under this overview cover:」に挙がるのは salmon、fugu、anago/hamo、himono の4つだが、LineageTable（src/data/lineages/seafood.json）の published は6本で、seafood-oyster-crab と seafood-saba-katsuo-maguro が本文のどこにも出てこない（description もこの2つに触れない）。F — 一覧と導入に2項目を足す。
- [mid] D — 作業メモ口調。「The industry association's own history pages would not open for me, so I give only the ministry's dates.」「I could not verify a tax-included price for any dish on this page, so none is given.」「For most of these foods, I could not find an official source comparing them where they are produced with the same food in Tokyo」「I could not confirm a more recent figure.」 — 公開本文から外し、「協会の年表は使っていない」など事実だけ残す。
- [mid] D — 同じ注記が3回。「Rows without a link are on the list but not written yet.」「are on the list below but not written up as separate pages yet. What the sources say about them is summarised further down.」と見出し「The ones without a page yet」 — 見出しは読者には社内事情なので "Fish paste, kombu and seaweed" にし、前の2文は1文に。
- [mid] D — FAQ「How much do these dishes cost?」の答え「I could not verify a single tax-included price for any of them, so this page gives none.」は質問に答えておらず、本文「What it costs」に ¥2,890 が載るため「gives none」と食い違う。FAQ を別の実際の疑問（"Is it safe to eat fugu as a visitor?" は別にあるので、"Which of these are sold in supermarkets or at the station?" 等）に差し替える。
- [mid] A — 帰属の無い最上級・断言。「Fugu — pufferfish, the fish with the strictest rules on who may prepare it.」（誰の比較か）、「The main raw material today is Alaska pollock.」（農水省の記述か不明）、「**Anago** is a standard topping at Edomae sushi shops」（"The sources describe where these foods belong…" の前置きの下だが、出典の語に寄せていない）— 「the health ministry requires a prefecture-approved handler」のように事実で言う。
- [low] B — 「Yamaguchi prefecture lists a fee of ¥2,890 to apply for a fugu handler's licence (checked 2026-10-10).」。税込の語が無い。行政の手数料は通常消費税の対象外のはずだが記事はそう書いておらず、食の価格でもないため読者に要らない（要確認）— 削除するか「手数料（税の対象外）」と書く。
- [low] C — 「Okinawa's fisheries research centre said in 2007 that over 95% of Japan's mozuku came from Okinawa; I could not confirm a more recent figure.」。出典は2007年のみ。年は書いてあるが後半が作業メモ — "as of 2007, over 95%…" と文頭に年を置き、後半を削除。
- [low] D — 「Where to eat it」は "The sources describe where these foods belong rather than which shops to visit." と、店でなく所在の話だけ。訪日客がどこで何を頼めば出会えるか分からない — 系譜ページ（seafood-fugu の Shimonoseki など）への案内に置き換える。
- 内部リンク候補: /en/eat/market/ （"For the markets themselves, start from the market overview." — 平文）
- 内部リンク候補: /en/eat/unagi/ （"For unagi, start from the unagi overview." と導入の "Sushi, sashimi, unagi and the fish markets each have their own overview"）
- 内部リンク候補: /en/eat/dashi-east-west/ （Kombu の段落 "How to make kombu stock is on the dashi overview." — 昆布は関西、鰹節は関東という本文の「関東は昆布をあまり食べない」の記述と直結）
- 内部リンク候補: /en/eat/sashimi/ （導入の "Sushi, sashimi, unagi and the fish markets each have their own overview"）
- 内部リンク候補: /en/eat/sushi/ （同じ導入文。anago の Edomae sushi の言及の箇所にも）

## eat/seasonal.mdx
- 総評: 読者に実害のある誤りは見当たらない。複数の説明を並べて選ばない姿勢は方針に合う。ただし FAQ と「誤解」の節が本文に出てこない内容を言い切っている点、作業メモ口調、訪日客向けの実用情報の欠如が目立つ。
- [mid] A — FAQ と「What people get wrong」が本文に無い内容を根拠にしている。FAQ「The ministry’s own pages give two different meanings for the black beans in osechi, two for eating sardines at Setsubun」と誤解「two readings of osechi’s black beans, two of Setsubun sardines」 — 本文の osechi は「three *iwai-zakana* (black beans, tazukuri and herring roe), each with its own meaning」で黒豆の2つの意味は書かれず、Setsubun も鰯の理由は「the smell and smoke of grilled sardines」の1つだけ。読者は確認できない — 本文の New Year／Setsubun の段に2つの意味を併記するか、系譜ページ（seasonal-new-year・setsubun）へのリンクで補う。
- [mid] D — 作業メモ口調が多い。「I did not find an official explanation of their meaning.」（higan）「I could not find an official explanation of chitose-ame.」「but I found no official explanation of why.」（ゆず湯）「Other stories about how chicken came to stand in for turkey I could not confirm, and have left out.」「I could not find an official source comparing how any of these foods is eaten where it began and how it is eaten in Tokyo or elsewhere.」「I have no shops to list.」 — 公開本文は調査の成否でなく読者に必要な事実を書く。「chicken came to stand in for turkey」は前提が本文のどこにも出ておらず唐突。
- [mid] D — 読者価値。FAQ 4問目「Where can a visitor try these foods?」の答えは「The research behind this page did not cover restaurants or shops for these foods.」、「Where to eat it」も「I have no shops to list.」。訪日客に、いつ・どこで買えるか（出典のある ehōmaki のコンビニ・スーパー経路は既に本文にある）という行動情報が弱い — FAQ を ehōmaki の入手経路に絞って答えるか、別の疑問に差し替える。
- [mid] D — 「Fares and travel times are not on this page yet.」と、価格が無いのに立てた節「Nothing on this page has a price. The research behind it did not find a single tax-included price on an official site for any of these foods.」 — 行事食の記事に運賃は不要な未完成メモで、価格の節も内容が無い。RateNote が "Fares verified October 2026" を出す点も不整合 — 3つとも削除（RateNote 側は共通対応）。
- [low] D — タイトルが約120字と長い（「Food for the calendar: what Japan eats at New Year, Setsubun, Hinamatsuri and the rest of the year, and the reasons it gives」）。検索結果で切れる — 「Food for the calendar: what Japan eats on which day, and the reasons it gives」など。
- [low] A — Christmas の段落が KFC の採用情報ページ（"KFCのこだわり"）を典拠に "the 'Christmas means Kentucky' message grew from that" を載せている。企業の自己物語であることは書いてあるが、出典が採用ページ（広報）だという点が読者に伝わらない — "KFC Japan's recruitment page says…" と出典の種類を書く。
- [low] D — 「The Hinamatsuri page has more.」「Soba has its own overview.」「Sōmen itself has its own overview.」 — 参照先を指すだけでリンクが無い（下記 E）。
- 内部リンク候補: /en/eat/rice-sides-mochi/ （"Mochi and zōni, the New Year soup with mochi in it, are covered in the overview of rice and what goes with it." — 餅・雑煮の詳細は mochi のページ）
- 内部リンク候補: /en/eat/somen/ （"Tanabata, 7 July, and Obon" の段の "Sōmen itself has its own overview."）
- 内部リンク候補: /en/eat/soba/ （"New Year’s Eve" の段の "Soba has its own overview."）
- 内部リンク候補: /en/eat/wagashi/ （"Where to eat it" の "start from the wagashi overview"）
- 内部リンク候補: /en/eat/conbini/ （"Where to eat it" の ehōmaki が "convenience stores and supermarkets took it up in the 1990s" の文。訪日客がコンビニで季節の行事食を買う導線）

---

## このバッチ全体の共通傾向（まとめて直せるもの）
- 作業メモ口調（"I could not find / would not open for me / not on this page yet"）が6本すべてにある。「公式資料に記載なし」「出典で確認できた範囲」の言い方に統一し、食のハブから "Fares and travel times are not on this page yet." を一括で削除（rice・seasonal・sake-nada-fushimi）。運賃の無い記事に RateNote の "Fares verified" が出る点は、テンプレ側で pricesCheckedOn の使い方を整理する。
- 税込: 同じ2行（Toranomon の ¥100、Gekkeikan の ¥600）が sake と sake-nada-fushimi の両方にあり、ARTICLE-AUDIT は別の店（Ponshukan）の税込注記を流用して sake を mid と判定していた。2本まとめて外す。
- 本文で "start from the … overview" "has its own overview" と書きながら平文のままの参照が多い（seafood 5、seasonal 4、rice 3、sake 2）。リンクにするだけで内部リンクが増える。FAQ の問いが読者の疑問に答えていない記事（sashimi・seafood・seasonal）は FAQ の差し替え候補。
