# 見直しバッチ4（2026-10-13）

対象6本。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、slug-index.txt、手元のコード（src/components/{LineageTable,DishPrices,RateNote}.astro）、src/data/lineages/{konamono,kyodo-ryori,market,meat,nabe}.json。
F の照合先: konamono→konamono-takoyaki / kyodo-ryori→kyodo-ryori-akita / market→market-toyosu / meat→meat-pork / nabe→nabe-miso / ramen-hakata→yatai-hakata（各1本のみ）。食い違いが出たのは kyodo-ryori（ラーメンのFAQ）、nabe（八丁味噌の団体が2つの理由）、ramen-hakata（屋台の数字3点）。konamono・market・meat は照合先と一致したので F は書いていない。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし：本文に /en/ へのリンクが0本」は本文の文字列だけを数えている。`<LineageTable>` が公開済みの系譜ページへのリンクを出すので、ハブ5本（konamono, kyodo-ryori, market, meat, nabe）は系譜ページへは実際にリンクしている。E は「表が拾わないページ」に絞った。
- kyodo-ryori の「最上級・順位の断定」（"the best receive a special award"）は制度の説明（特別賞）で誤検出。meat の "The best known is Kagoshima's black pork" は検出どおり（low）。
- ramen-hakata の「税込不明の金額」は mid ではなく、下記のとおり high（出典が運営者ではない／別の節にも金額がある）。

テンプレ側の事実（記事ではなくコンポーネント）: pricesCheckedOn を持つ記事は、末尾の RateNote が「Fares verified {月} — check the operator before you travel.」と出す。6本とも pricesCheckedOn があるので、価格をほとんど載せない5本でも「運賃確認」と出て、本文の "Fares and travel times are not on this page yet" と食い違う。DishPrices は税込の注記を固定では出さない。LineageTable は自分で "Lineages without a link are on the list but not written yet. The table is kept in one place so every lineage is described on the same terms." を出す。

---

## eat/konamono.mdx
- 総評: 読者に実害のある点なし（金額は Gindaco の税込のみで、同じ段落に "tax-included" がある）。出典の帰属は概ね丁寧。古くなった案内文と、対応する出典が無い一文が目立つ程度。
- [mid] A — 広島の記述に対応する出典が見えない。「Okonomimura, a building in the city, has 23 shops that all use the same brand of sauce, according to the city.」— sources に広島市のページが無い（広島県ひろしまラボ、農水省、大阪観光局のみ）。同じ節の「Hiroshima's okonomiyaki uses a thick, sweet, fruit-based sauce.」も誰の説明か不明 — 市のページを sources に足すか帰属先を明記、無ければ削除。
- [mid] A — 導入の比較に根拠が無い。「they come with more competing origin stories than almost anything else on a Japanese menu」— 「ほぼどの料理よりも多い」と言える出典が無い — 「several competing origin stories」に弱める。
- [low] A — 「The official accounts disagree, and they disagree in ways that cannot all be true.」は筆者の判断（大阪の2説は両立し得る）。FAQ「Hiroshima's version contains noodles and is rarely eaten with rice.」は、本文の "Hiroshima's prefectural researchers say…" と違い帰属が無い — 前者は "disagree" に留め、後者は帰属を付ける。
- [mid] C — Gindaco の手書き価格に確認日が無い。「Tsukiji Gindaco … posts different tax-included prices … eight standard takoyaki are ¥702 to take away and ¥715 to eat in; … ¥1,393 and ¥2,041」— 現在形のみ。HANDOFF は「価格は本文に手書きしない／固有店は確認日つき」。同じ数字は konamono-takoyaki にも手書きされており、更新時にずれる（DishPrices の takoyaki に Gindaco が入っていれば三重管理、要確認）— 「as of October 2026」を添える、または仕組み（税率差）の説明だけ残す。
- [mid] D — 系譜まわりの文言が古い。「Rows without a link are on the list but not written yet.」— konamono.json の3行（okonomiyaki / takoyaki / monja）は全て公開済みで未公開行は無く、LineageTable 自身も同じ注記を出す。導入「The lineage pages go deep on okonomiyaki and on takoyaki with its Akashi cousin.」は公開済みの konamono-monja に触れていない — 重複文を削り、導入を3本に直す。
- [mid] D — 「Fares and travel times are not on these pages yet.」は作業メモ口調で、末尾の RateNote「Fares verified October 2026」と食い違う。大阪・広島向けの鉄道記事は既にある（E参照）— 一文を削除、または下のリンクに置き換える。
- [low] D — 一人称の作業メモ：「There is no official definition of konamono that I could find」「I could not find a primary source for the history of "okonomi sauce" itself」「the ones I checked」— 主語を出典側にする（"The sources do not give…"）。
- [low] D — FAQ 4問のうち「Does a chain charge the same to eat in and take away?」は旅行者の主要な疑問ではない。「Do I cook it myself?」（本文に "most shops cook it for you" がある）の方が実際の疑問 — 差し替えを検討。
- 内部リンク候補: /en/eat/konamono-monja/ （「From Tokyo.」の箇条と導入の系譜案内。monjayaki に触れるのに導入が2本しか案内しない）
- 内部リンク候補: /en/eat/dashi/ （「Dashi.」の段落。だしを両者の共通点と書くのにだしのハブへの導線が無い）
- 内部リンク候補: /en/eat/yatai-matsuri/ （「Where to eat it」Osaka の箇条 "takoyaki is sold at stalls to eat on the street"。露店で売る話の本体）
- 内部リンク候補: /en/rail/kix-to-hiroshima/ （「Where to eat it」Hiroshima の箇条と、"Fares and travel times are not on these pages yet" の置き換え先。費用・行き方の記事が既にある）
- 内部リンク候補: /en/soak/arima/ （「Where to eat it」Osaka／Akashi の箇条のあと。食⇔温泉の方針、関西・兵庫で地域が重なる）

## eat/kyodo-ryori.mdx
- 総評: 読者への実害は小さい。ただし FAQ のラーメン回答に根拠が無く、同サイトの秋田の記事と食い違う。作業メモ口調が多く、数字・営業情報に確認日が無い。
- [mid] A（F の照合で判明）— FAQ「Is ramen or yakisoba a local dish? — Not in the farm ministry's sense, unless a region chooses it. … has certified Yokote yakisoba … I found no official definition of B-grade gourmet food to compare.」は、質問の半分のラーメンに答えていない。kyodo-ryori-akita は文化庁の100年フードの future に「Kosaka-machi katsu ramen (2023)」が入っていると書いており、ラーメンも認定され得る — 「ramen」を答えから外すか、akita の例を使って答える。
- [mid] A — 「An earlier list」の段落。「The ministry's own page for that list could not be opened, so I give neither its total nor its criteria.」— リスト名は "100 Local Dishes…" と書いてあり総数は読者に見える。出典が開けなかったという作業メモが公開本文に出ている — 秋田県の記載（2007年12月18日発表）に出典を限って書き、"could not be opened" は削除。
- [mid] C — 数字・営業情報に確認日が無い。「The agency's criteria page says 329 have been certified; its top page says 250 in one place and over 300 in another.」（3つの数字が並ぶだけで読者は使えない）、「Akita 29, Okinawa 30 when I counted」、「11:00–23:00, closed on New Year's Day」「10:00–20:00 … (10:30–18:45)」「about 4,000 products」「10 shops nationwide」— 確認月（as of October 2026）を添え、100年フードの数は最新の1つに絞る。
- [mid] D — 系譜ページの案内が実態と合わない。「The lineage pages cover Akita and Okinawa as examples.」— kyodo-ryori.json は12地域すべて公開済み（slug-index にも12本）— 導入で「12 regional pages」と案内し、表へ導く。
- [mid] D — 作業メモ口調：「I could not find the national total」「I found no official definition of B-kyū gurume」（FAQ と本文で2回）「when I counted」「could not be opened」「so I do not draw the line more sharply than the sources do」— 「No official definition appears in the sources used」のように出典側の主語にし、重複を1か所に。
- [low] A — 「Prefectures run shops in Tokyo to sell their food」は2例（秋田・沖縄）からの一般化で、わしたショップは「prefecture's trading company」の運営。「The ministry opened it in 2019」にも日付つき出典が見えない — 「Two examples:」に絞る。開設年は出典の日付を確認（要確認）。
- [low] D — あきた美彩館の説明に旅行者に不要な事業者向け情報（"The prefecture lends space in and in front of it, in principle free, to towns, farm and business groups … for promotion and trade talks"）— 食べる・買う話に絞る。
- 内部リンク候補: /en/eat/bkyu/ （「Two lists, two ideas」の B-kyū gurume の文と FAQ3。定義が無いと書くなら、サイト内の B級グルメのページへ飛ばすのが自然）
- 内部リンク候補: /en/eat/yakisoba-yokote/ （同段落／FAQ3 の "Yokote yakisoba"。繰り返し例にしているのに詳細への導線が無い。表は秋田行しか出さない）
- 内部リンク候補: /en/eat/ramen/ （FAQ3 の "ramen"。質問の片方の受け皿）
- 内部リンク候補: /en/column/food-souvenirs-omiyage/ （「Eating local dishes away from home」の "retort pouches and gift sets to take away"。持ち帰り形の買い方の解説）
- 内部リンク候補: /en/soak/nyuto/ （秋田の例、Akita Bisaikan の箇条のあと。食⇔温泉の方針、東北で地域が重なる）

## eat/market.mdx
- 総評: 金額が一切無く、税込の問題は無い。読者に実害のある誤りも見当たらない。ただし読者の最大の疑問（海鮮丼はいくらか）に答えず、「出せない」の説明が3か所で繰り返される。
- [mid] D — 方針の説明で終わっている。FAQ「How much is a seafood bowl at a market? — This page does not give a figure.」、「What it costs」の「so the honest answer for now is: the shops post their menus, and you can read the price at the door」、比較節の「The price comparison is missing.」— 同じ内容が3回。価格の読み方（jika・税込表示）はコラムに任せ、本文は1か所にまとめる／DishPrices に海鮮丼の基準があれば出す。
- [mid] A — 理由の言い切りが本文の留保と食い違う。FAQ「Market price. The menu gives no figure because the price changes.」vs 本文「My reading — not an official one — is that items whose wholesale cost moves with the day's auction are hard to print at a fixed price.」— FAQ が筆者の推測を事実として書いている — FAQ にも同じ留保を付ける。
- [mid] C — 営業時間・数字に確認日が無い。「from 05:00 (May–December) or 06:00 (January–April) until a little after 14:00」「the visitor route from 05:00 to 17:00 on market days」「about 170 shops」。また「The ministry's figure, from the end of fiscal 2017, was 64 central wholesale markets in 40 cities」は9年前の統計で、「The national law … was revised in June 2018」には施行時期が無く現行制度と取り違えやすい（施行は2020年6月のはず、要確認）— 営業時間は "as of October 2026"、古い統計は削除か "as of FY2017" と明記。
- [mid] D — 作業メモ口調：「I could not confirm whether either is a wholesale market in the legal sense, and I have not found an official definition of jōgai or "town market"」「I have not found an official definition, or an account of its origin」「My reading — not an official one —」「Hakodate's federation … had its menu file offline」。導入の「is honest about what it cannot tell you: what a bowl should cost」は「should」が規範的 — 出典側の主語にするか削除。
- [mid] D — 「Fares and travel times are not on these pages yet.」と末尾の RateNote「Fares verified October 2026」の食い違い。金額も運賃も無いのに pricesCheckedOn が付いている — pricesCheckedOn を外す（テンプレ一括）か一文を削除。
- [low] A — 本文で名指しする店に出典が見えない：「Ōmichō's Kaisendon Ichiba」「Ikiikitei says its fish comes straight from Kanazawa port」— sources は近江町市場公式・ひら井・どんぶり横丁・函館朝市のみ。該当ページを足す。ひら井の出典が http://（ARTICLE-AUDIT 指摘）なので https 版の有無も確認。
- [low] D — 導入「where you, as a member of the public, cannot buy anything」は絶対表現で、後段の "Some markets hold open days … when the public can buy inside" と温度が違う — "as a rule, cannot buy" に揃える。
- 内部リンク候補: /en/column/tourist-prices-at-famous-markets/ （「What it costs」と比較節の "The price comparison is missing"。注意：同コラムが近江町の価格を載せていれば本文の「価格が取れない」と食い違うので要照合）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （FAQ2 の jika と「Some bowls have no price」。時価・税込表示の読み方の本体）
- 内部リンク候補: /en/eat/seafood/ （「The seafood bowl」節。魚介の食べ方の親ページ）
- 内部リンク候補: /en/soak/yamashiro/ （Ōmichō（金沢）の箇条のあと。食⇔温泉の方針、加賀の温泉、金沢からの所要は要確認）
- 内部リンク候補: /en/soak/toyako/ （Hakodate 朝市の箇条のあと。食⇔温泉の方針、函館から札幌方面の途中の温泉地、要確認）

## eat/meat.mdx
- 総評: 読者に実害のある誤りは見当たらない。ジビエの安全の記述は厚く出典もあるが、FAQ の言い方（"rule"）と帰属の欠けが一部ある。羊肉の輸入比率の使い方に飛躍があり、予告した内容が本文に無い箇所がある。
- [mid] A — 全国統計をジンギスカンに当てはめている。「Most jingisukan lamb is imported, mainly from Australia and New Zealand.」の根拠は「in FY2022 domestic lamb and mutton was 98 tonnes against 20,187 tonnes imported, a domestic share of 0.5 percent」で、羊肉全体の需給でありジンギスカン用の内訳ではない。年次も「by the ministry's 2023 count」と FY2022 が混在。誤解欄「Jingisukan lamb is Hokkaido lamb.」も同じ — 「most lamb and mutton eaten in Japan is imported (ministry, FY2022)」と範囲を書く。
- [mid] A — 帰属の無い評価・因果：「The best known is Kagoshima's black pork」（誰にとっての最有名か不明、機械チェックも検出）、見出し「Raw horse is eaten where horses were kept.」（本文は山梨・熊本・会津の由来を別々に述べるだけで、一般則を述べた出典は見えない）— 前者は削除か出典を付ける、見出しは「Each raw-horse region has its own story」程度に。
- [mid] A — FAQ2 の安全の言い方。「That is the rule for horse only.」— 農水省が述べるのは熊本の流通上の対策（衛生管理した施設での解体・冷凍）で、法令上の規則とは読めない。FAQ3 の「Freezing does not make it safe.」も帰属が無い（直前の厚労省の記述と続けて読めるが、文が独立している）。安全情報なので「the ministry describes … as a measure」「According to the health ministry, freezing…」に直す。
- [mid] D — 予告した内容が本文に無い。「Kumamoto's story starts with a warlord, Aizu's with a war. All three are below and on the horse page.」— "below" に3つの話は無い（「Where to eat it」は "basashi, each eaten its own way"、比較節は食べ方の差だけ）— 1行ずつ足すか、"on the horse page" に絞る。
- [mid] D — 作業メモ・予告：「I could not confirm any price from an official or operator source for this page, so none is given. … Prices will be added when they can be checked with tax included.」「I could not find an official source comparing any of these dishes…」「I could not confirm a legal definition of "brand pork"…」「Fares and travel times are not on this page yet.」。「Rows without a link are on the list but not written yet.」は LineageTable が同じ注記を出すので重複（gibier が未公開なのは事実で、"Deer and boar are on the horse page for now" で足りる）— 予告文と価格節を削除。pricesCheckedOn も外す（RateNote と食い違う）。
- [low] B — タイトル「the deer you must cook through」は、本文の "the government asks you to cook" / FAQ の "guidance" より強い命令調 — "should" か "the deer the government says to cook through" に。
- 内部リンク候補: /en/eat/wagyu/ （導入 "it has its own page on this site, starting from the wagyu overview"。文中で案内しているのにリンクが無い）
- 内部リンク候補: /en/eat/donburi/ （「Butadon is filed under rice bowls. The donburi overview has Obihiro's pork bowl on its list」。同上）
- 内部リンク候補: /en/eat/tonkatsu/ （「Pork cutlets are covered on the tonkatsu pages」。同上）
- 内部リンク候補: /en/eat/kyodo-ryori-okinawa/ （「Okinawa's braised pork rafute on the Okinawa local-food page」。同上）
- 内部リンク候補: /en/soak/ibusuki/ （「Where to eat it」Kagoshima の箇条。食⇔温泉の方針、鹿児島で地域が重なる）

## eat/nabe.mdx
- 総評: 読者に実害のある誤りは見当たらない。ただ、導入の主張（調理は同じ構造で、違いは調味料）が本文の「出典が言えるのはここまで」と釣り合わず、八丁味噌の「なぜ2団体か」は姉妹記事に答えがあるのに「分からない」と書いている。作業メモ口調が多い。
- [mid] A（F の照合で判明）— 八丁味噌の団体が2つある理由。「Why there are two, the official documents I read do not explain, and this site does not judge between them.」— nabe-miso は「Hatcho Miso cooperative (added in January 2025)」と書き、この記事自身の sources にも「登録生産者団体の追加」（農水省報道発表 2025-01-24）がある。説明が無いのではなく後から追加された — 「The second group was added in January 2025」と書き、誤解欄「Two registered specifications under one name」も合わせる。
- [mid] A — 導入・タイトルの主張が本文の留保と合わない。「They are built the same way. Stock goes in a pot, things are simmered in it, and what separates one dish from the next is mostly what it is seasoned with」「why the seasoning tells them apart」vs 「That is as far as the sources go. I would not turn it into a rule」— 出典が支えるのは「味噌／醤油／どちらも」の分類まで — 導入を「The farm ministry's pages sort them by seasoning」と帰属させる。
- [mid] A — 起源の断定。「"Oden is soy broth." It started as miso-grilled tofu, and Aichi still eats it with miso.」— 本文に根拠も帰属も無い。農水省の東京おでん／nabe-oden の出典から取ったなら "According to the farm ministry, oden began as miso-grilled tofu" と書く。
- [low] A — 単位が揃わない。「about one tablespoon of miso to about 150 ml of hot water」と「about 12 g of miso … ordinary bowl」「about 10 g … full version」— 味噌大さじ1は約18gなので読者には食い違いに見える（要確認）。別ページ（aff と長野県）の数字だと明示。
- [mid] D — 作業メモ口調：「The research for this page did not collect any tax-included prices from official sites」「I could not find in any public source — only in private explanations —」「the official documents I read」「I could not find any public source … that compares…」「How that affects what is sold elsewhere, or at what price, I did not find.」「Botan nabe in Tokyo was not compared in any source I found.」— 中身の無い箇条（"was not compared"）は削除、他は出典側の主語に。
- [mid] D — 重複と未実装の予告：「The table is kept in one place so that every lineage is described on the same terms. Rows without a link are on the list but not written yet.」は LineageTable が同じ注記を出す（chanko / ishikari / botan が未公開なのは事実）。「Fares and travel times are not on this page yet.」は RateNote と食い違う — 本文の該当文を削除、pricesCheckedOn を整理。
- [low] D — FAQ「What are the kinds of miso in Japan? — Three, … Japan's product standard also has a blended miso」は "Three" のあとに4つ目が出る — "Three base types, plus blended"。
- [low] D — 「Three hotpots with a story」の段落が長い（チャンコ・ボタンは各150語前後）。複数説は箇条に分けると読める。
- 内部リンク候補: /en/eat/dashi/ （「For the stock itself, start from the dashi overview」。文中で案内しているのにリンクが無い）
- 内部リンク候補: /en/eat/conbini-oden/ （「What it costs」の "on the konbini oden page"。価格の受け皿だと書いているのにリンクが無い。slug は conbini）
- 内部リンク候補: /en/eat/chicken-mizutaki/ （チャンコ（鶏だし）の段落のあと。鶏だしの鍋として福岡の水炊きがあり、ハブにすき焼き・しゃぶしゃぶ・水炊きの案内が無い）
- 内部リンク候補: /en/soak/jozankei/ （「Ishikari nabe」の段落／Where to eat it の Ishikari。食⇔温泉の方針、札幌近郊で道央が重なる）
- 内部リンク候補: /en/soak/arima/ （「Botan nabe」の段落／Where to eat it の Tamba-Sasayama。食⇔温泉の方針、同じ兵庫県）

## eat/ramen-hakata.mdx
- 総評: 読者に実害があるのは価格の税込不明（high 2）。系譜・調理・注文の説明は厚く出典の帰属も概ね丁寧。ただし導入の「魚市場でできた」は事実のように書かれ、屋台の数字（約9割・カード率・チャージ）が姉妹記事 yatai-hakata と食い違う。作業メモ口調と、存在しない「Kyushu routes」への案内がある。
- [high] B — 屋台の価格に税込の明記が無く、出典も運営者ではない。「Three stalls featured by the city's tourism office in September 2026 list their basic bowl at ¥700 (Takechan fr Tsukasa, Nakasu), ¥750 (Kojima Shōten, Nakasu) and ¥750 (Tomochan, Tenjin).」、FAQ「around ¥700–750, which is ordinary for Fukuoka」。直前の節頭は「Prices below are tax included, … as posted by the operator」だが、これは観光局の記事の価格。F: yatai-hakata は「The city's tourism site has published menu prices in articles, but without stating tax … so I do not reproduce them」と、同種の出典の価格を載せていない — 3店の価格を外す（または「税込の記載なし」と明記）、FAQ は「Prices vary; the city requires every stall to post a price list」に。「ordinary for Fukuoka」は比べる対象が記事に無い（本文「A bowl is ordinary-priced」も同じ）。
- [high] B — 別の節の Ichiran 価格に税込が無い。「On the date of this page its classic bowl is ¥980 at the Tenjin shop in Fukuoka, ¥1,080 at the 24-hour head shop in Nakasu, and ¥1,180 at both Shibuya in Tokyo and Dōtonbori in Osaka. The kaedama is ¥210 everywhere.」— 「Prices below are tax included」は前の節の頭の1文で、この節（"Hakata ramen away from Hakata"）には効かない。FAQ「At Ichiran it is ¥210, or ¥150 for a half portion」、誤解欄「¥210 at Ichiran」、「The shops, and what they charge」の Ichiran 箇条（¥1,080 / ¥210 / ¥150 / ¥140 / ¥250）も段落内に税込が無い — 各段落に "tax included (Ichiran's posted prices)" を添える（出典の店舗ページの表示を原典で確認）。
- [mid] A — 起源を事実として書く導入。「The thin noodles, the refill, and the vocabulary for how hard you want them cooked were worked out at a fish market」「Almost none of it was designed.」、「Why Fukuoka」の「The city's fish market is the reason the style looks the way it does.」、description の「shaped by a fish market, not a recipe」— 本文は「By the tourism federation's account」「Nobody has settled which city was first」と留保しており、導入と見出しだけが断定 — 導入・description にも「by the tourism federation's and the museum's account」を入れる。
- [mid] A — 九州比較の帰属が欠ける。「Kurume itself had the earliest ramen in Kyushu: Nankin Senryō」（誰が「最古」と言うのか不明）、「Japan's tourism agency describes it as a descendant of Kurume」（sources に観光庁の出典が無く、熊本はラーメン博物館のページのみ）、「Kagoshima is said to be the one Kyushu style not influenced by Kurume at all」（誰が言うか不明）— 帰属先を書く。出典に無ければ削除（要確認）。
- [mid] A — 価格差の理由を推測で書く。「The company does not explain the gap, but the pattern is the one you will see across the country: the same bowl, dearer where the rent is.」「The kaedama is ¥210 everywhere.」— 4店舗の確認から「全国のパターン」「everywhere」と言っており、出典が無い — "at the four shops checked" に限定、家賃の推測は削除。
- [mid] F — 屋台の姉妹記事と食い違う（1）。「about nine out of ten licensed stalls on public land in the whole country are here」「by a wide margin, the yatai city of Japan」は帰属が無く、yatai-hakata は「I found no official count of Fukuoka-style stalls elsewhere」と書く。「a ten-year limit on a licence」も yatai-hakata は「Road occupancy lasts up to a year; park occupancy six months」。「by 2022 there were 100」も yatai-hakata は「In May 2025 … about 100」— 出典（市・よかなび）を本文で示すか、yatai-hakata と同じ表現にそろえる。
- [mid] F — 屋台の姉妹記事と食い違う（2）。「As of 2026, more than three in ten stalls take cards or QR payment」vs yatai-hakata「about 10% take credit cards (a 2023 article says more are taking cards and electronic payment)」。誤解欄「a cover charge is normal and legal as long as it is posted」vs yatai-hakata「Most have no otoshi or table charge; bar-style stalls may」「'Stalls charge a cover.' Most do not」— "normal" は削除、カード率は出典と年をそろえる。
- [mid] C — 存在しない日付への参照。「Prices below are tax included, … as posted by the operator on the date at the top of this page」「On the date of this page」— 記事上部に日付は出ない（確認日は末尾に「Fares verified October 2026」と出るだけで、食の価格に「運賃」と出る）。元祖長浜屋の「open 06:00 to 01:45」にも確認日が無い。description の「the prices Fukuoka posts today」も日付なしの現在形 — 本文に "as of 9 October 2026" と書く。
- [mid] B — description が199字（上限160字、ARTICLE-AUDIT 指摘）。HANDOFF では `npm run check` が落ちるルール — 160字以内に切る（"today" も外す）。
- [mid] D — 作業メモ口調：「Where a shop does not publish its prices, I say so rather than guess.」「Both publish menus whose prices did not load in a form I could verify, so none are given here.」「I could not find them in the public sources used for this page, so take that as observation rather than record」（辛子高菜）— 出典側の主語にし、検証できない観察（辛子高菜）は削除するか帰属を付ける。
- [mid] D — 存在しない案内と無出典の道案内。「the Kyushu routes on this site cover the connections」— slug-index に九州の鉄道記事は無い（rail は kansai-12-days-setouchi / kix-to-hiroshima / setouchi-area-pass のみ）。「Ganso Nagahamaya is a 20–30 minute walk from Akasaka station … or a bus to Minato 1-chōme」も出典が無い（sources は地下鉄の運賃と概要のみ）— 一文を削除。徒歩・バスは出典を足すか店の公式アクセスへの誘導に。
- [low] D — 細部：「Takechan fr Tsukasa」は店名として不自然（"fr" の意味が不明）／「It is a good system.」（Ichiran、優劣の評価）／「Few large cities in the world put their airport this close to a bowl of noodles.」「A little ginger is what most locals add.」（無出典）／「Why Fukuoka」の屋台統計の段落（400→100、2013、2016、61応募、31.6歳対54.5歳、グッドデザイン賞）は yatai-hakata と重複しラーメンの話から逸れる — 評価語・無出典文を削り、屋台の経緯は2文にして yatai-hakata に任せる。
- 内部リンク候補: /en/eat/ramen/ （導入第2段落 "start from the ramen overview"。案内のみでリンクが無い）
- 内部リンク候補: /en/eat/yatai-hakata/ （「Why Fukuoka」の屋台の段落と「At a stall」。条例・公募・料金表示・チャージの詳細があり、数字をそろえる必要もある）
- 内部リンク候補: /en/eat/ramen-kurume/ （「Not all of Kyushu is this」の Kurume の箇条と「Next door」。yobimodoshi などの詳細）
- 内部リンク候補: /en/eat/ramen-kumamoto/ （同節の Kumamoto の箇条。"descendant of Kurume" の説明）
- 内部リンク候補: /en/soak/takeo/ （「Next door」で久留米・九州の他の街へ続ける箇所。食⇔温泉の方針、佐賀の武雄温泉。博多からの所要時間は要確認）

---

## このバッチの共通傾向（まとめて直せるもの）
1. 6本とも末尾の RateNote が「Fares verified October 2026」と出るのに、本文は「Fares and travel times are not on this page yet」「価格は載せない」。価格・運賃を載せない5本は pricesCheckedOn を外し、本文の予告文と一人称の作業メモ（"I could not find / I did not find"、6本中6本）を出典側の主語に一括で直せる。
2. LineageTable が公開済み系譜へのリンクと "Lineages without a link… / The table is kept in one place…" を自分で出すため、本文の同文は重複（konamono, meat, nabe）。konamono（全3行公開）・kyodo-ryori（12行公開）は導入の案内が古い。文中で「〜のページを見よ」と案内しながらリンクが無い箇所も多く（meat 4、nabe 2、ramen-hakata 1）、一括でリンク化できる。
3. 税込の問題が実際にあるのは ramen-hakata だけ（金額の出る節ごとに税込を入れる）。営業時間・件数・店数に確認日が無いものが多い（kyodo-ryori, market, ramen-hakata）。
