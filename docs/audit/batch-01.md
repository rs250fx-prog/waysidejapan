# 見直しバッチ1（2026-10-13）

対象6本。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter・手元のファイル（docs/ARTICLE-AUDIT.md、docs/research、他記事、src/components、src/data、dist の built HTML）。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。
重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

---

## column/how-meal-ticket-machines-work.mdx
- 総評: 読者に実害のある誤りは見当たらない。仕組みは JNTO・GO TOKYO・メーカー資料に帰属して書けており質は高い。弱いのは「客が実際に詰まる場面」への答えと、調査メモ口調の文が残る点。（high 0）
- [mid] A — 導入「the reasons for it are mostly about the kitchen」は断定だが、根拠は後段で自ら「a sales argument, not an independent study」と認めるメーカー（Glory）のコラム1本だけ — 導入を「メーカーは〜と説明する」に弱めるか、独立した根拠を足す。
- [mid] D — 読者の実際の疑問に答えていない。FAQ 4問（使い方・カード・英語・全店か）は本文の再掲に近く、押し間違い時の取消／返金、札が使えない・釣り銭の扱い、食券をどこへ出すか、大盛り・替え玉など追加の買い方がない — 券売機メーカーの案内や店の掲示で確認できる範囲を FAQ に追加（要出典）。
- [mid] D — 節「How Japanese customers use them」(2文) は "What happens" の繰り返しで「That is all the official sources describe」と自認。"If a machine has no English, ask staff." は出典なしの助言 — 節ごと削除し、上の追加 Q&A に置き換える。
- [mid] D/F — JTA 調査の段落は「Those figures cover the whole trip, not ticket machines in particular」と自認する無関係な数字。「named using credit or debit cards as a problem」は、カードが使えなかったのか使いにくかったのか不明瞭。/en/column/paying-at-restaurants-in-japan/ は同じ調査（4,110件、2025-11-18〜2026-01-13）から「カードで困った場所は飲食店が最多、32%」を載せているが、こちらにはない — 段落を削るか、飲食店32%に差し替えて語を揃え、payments 記事へリンク。
- [mid] C — "Japan Tourism Agency's latest survey" の latest は日付のない現在形（期間も "winter 2025–26" とぼかしている）。Glory VT-T21 の仕様にも確認日が本文にない（frontmatter の pricesCheckedOn のみ） — 「調査期間 2025-11-18〜2026-01-13」「製品ページ確認 2026-10-10」と本文に明記。
- [low] D — 研究メモ口調。"I could not find how many shops' machines do." "I could not find statistics on how many restaurants use ticket machines." "I have not found a reliable source for which machine was Japan's first" — 読者には情報にならない — 1文に集約するか削除。
- [low] A — Omron 1963 の文が "meal-ticket vending machine" と "multi-function ticket machine" の2通りの呼称で、何の券か曖昧。デパートの券売機が、ラーメン店の券売機とどう繋がるかも書かれていない — 沿革ページの文言に合わせて1語に統一し、位置づけ（早い例）を明記。
- [low] A — "one major maker's model" の major に根拠がない — "a maker's model" に。出典名が「居酒屋の楽しみ方」なのに本文は "ramen shops and other casual places" と書く — 出典ページに該当記述があるか再確認（要確認）。
- [low] B — 監査の「税込不明の金額 ¥10,000, ¥5,000, ¥1,000」は紙幣の額面（還流ユニット）で価格ではない（誤検出）— 対応不要。
- 内部リンク候補: /en/column/paying-at-restaurants-in-japan/ （"What the machine accepts" の Cards and phones 箇条書き。カード・現金・IC の全体像と JTA 調査の詳細はそちら。Read next にはあるが本文リンクなし）
- 内部リンク候補: /en/eat/ramen/ （導入1文目 "many ramen shops"。券売機に出会う主な場面なので入口へ）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （"Choose" の手順か導入。ボタンの価格は税込表示・チップ不要の説明）
- 内部リンク候補: /en/column/queues-and-shared-tables/ （"What happens" の末尾。券を買った後の席・順番待ち。相手側はこの記事へリンク済み）
- 内部リンク候補: /en/eat/ramen-iekei/ （"What the machine accepts"。店自身が「券売機の価格が正」と書く実例 Yoshimuraya）。温泉との接点は見つからず（dogo の Tsubaki-no-Yu に券売機の記述はあるが食と別文脈なので推奨しない）

---

## column/tourist-prices-at-famous-markets.mdx
- 総評: このバッチで最も要修正（high 4）。実名の市場について、税込未確認の実見価格と個人ブログ中心の根拠から「観光客向けの別カテゴリ」と書き、動機を匂わせ、サイト内の市場記事（税込を確認できない丼の価格は載せない）の方針と衝突している。
- [high] B — 税込の明記がない金額。"seafood bowls are ¥4,000–5,000"、ReferencePrice ¥4,500 / ¥2,000、"six ramen"、"a ¥1,500 version" がすべて税込か不明のまま比較されている。/en/eat/market/ と /en/eat/market-omicho-hakodate/ は「どの店も税込が分からないので丼の価格は載せない」と明記しており、方針が割れている（F）— メニューボードで税込／税抜を確認し日単位の日付をつけるか、確認できなければ金額を外して構造の説明だけにする。
- [high] A — FAQ「A good seafood bowl sits above both, and below ¥2,000 in most of the country.」は出典なし。同じ回答の頭と本文で「There is no official figure for kaisendon」「no government statistic for seafood bowls」と自認しており自己矛盾。「Not in the legal sense. Prices are posted and nobody is deceived.」も法的評価の出典がない — 削除するか、税込価格を確認できた非観光地の店の実例（店名・日付つき）に差し替え。
- [high] A — 実名の市場全体への一般化。"At Kuromon and Nishiki in October 2026, seafood bowls are ¥4,000–5,000" は何軒を見たのか不明で、根拠は個人ブログ（Ameblo）2本と All About 記事に実見。近江町は本文に価格が一つもなく（3本目のブログは未使用）、title／description は3市場とも該当するように読める — 見た店名（または軒数）と日付を示して「見た範囲」に限定し、近江町を description から外すか根拠を足す。
- [high] B — 動機の示唆と優劣の断定。"sold to people who have no way of knowing that"（直前の "nobody is deceived" と矛盾）、"A stall in a famous market arcade does not need you to come back"、"The fish is better ... It is not six times better."、"A set meal at an ordinary restaurant behind the arcade will cost a fraction and, more often than not, be better." — 「仕組みと理由」でなく実名市場への批判に読める — 価格差の理由は出典で言える構造に絞り、味・質の優劣と店の動機の推測は削除。
- [mid] D/A — title「the price a local would actually pay」に対し、本文に地元価格はない。ReferencePrice の "What a local pays ¥2,000" は筆者の「迷い始める線」（注記に明記）で価格ではない。"2.3×" や "six ramen" は範囲の中央値と個人的な線から出した擬似精度で、末尾の「order of magnitude」と矛盾 — 箱の見出しを "A line I use" 等に変え、倍率表示を外し、title を実態に合わせる。
- [mid] A — 出典のない断定。"the second most satisfying meal visitors report eating in Japan"（ラーメン）、"Nishiki still sells ingredients to Kyoto kitchens"、"All three are real working markets with long histories"、"Wagyu curry udon is not a dish most Japanese people order" — 調査名・年を付けるか削除（近江町の「約300年」は market-omicho-hakodate に市場の自称として記載あり）。
- [mid] A — 出典の質。統計は民間サイト jpmarket-conditions.com を「総務省統計局」名義で表示し、e-Stat は表IDなし。ブログと All About は本文でどの主張の根拠か示されず、末尾の "marked where each applies" が実装されていない。統計値が税込かどうかも本文にない。"Ten pieces ... roughly ¥1,105" は 221×5 の自前計算で全部まぐろ前提 — e-Stat の表・品目名と税込の定義を明記、ブログは一次情報（日付つきメニュー写真）に置換、¥1,105 は「this site's arithmetic」と明記。
- [mid] C — 実見は "2026-10" と月単位（pricesCheckedOn は 2026-10-04）、ブログに公開日なし、"now have a second layer" の now は日付なし。市場の価格は動くと末尾で自認 — 実見日を日単位に、ブログは公開日を sources に、統計は次回更新で差し替え。
- [mid] F — /en/eat/market-omicho-hakodate/ は "Ōmichō is for tourists." を誤解として扱い（市場の自称で約300年、野菜・肉も売る）、丼の価格は載せていない。コラムの "stalls that exist for visitors, priced accordingly" と調子が逆 — 近江町に触れる箇所はそちらと整合させる（上記 high と同時に直す）。
- [mid] D — description が192字（規則160字以内、機械チェックで検出済み）。FAQ 1問目の見出し自体が "tourist trap" — description を短縮、FAQ の語を中立に。
- [low] D — 冒頭の "That second half is the part English-language guides never answer." は出典なしの他メディア批判 — 削除可。"Invented combinations carry the widest pricing latitude." は意味が曖昧で不自然な英語。
- [low] D — built ページの Read next が allergies / vegetarian / paying で、話題と離れている（dist 上の確認。relatedOf の条件の問題の可能性）。
- 内部リンク候補: /en/eat/market-omicho-hakodate/ （冒頭段落の "Omicho in Kanazawa"。近江町の成り立ちとメニューの読み方はそちら）
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （"What the official figures say" の前。税込表示・時価の読み方）
- 内部リンク候補: /en/eat/food-shopping-depachika/ （"Compare at a department store food hall" の箇条書き）
- 内部リンク候補: /en/column/eating-while-walking-in-japan/ （"What to do instead" の Walk through them。錦市場は食べ歩きを控えるよう求めている）
- 内部リンク候補: /en/soak/yamashiro/ （結びの前後。食⇔温泉。soak 記事は金沢から加賀温泉駅まで最速16分と記載。大阪側なら arima でも可）

---

## eat/bkyu.mdx
- 総評: 実害なし。B-1 の運営・年次は主催者サイトに帰属して慎重に書けている（high 0）。弱点は金賞表の空白年の説明、タイトルの「fried food」に本文が応えていない点、調査メモ口調の空節。
- [mid] A/C — 金賞表は 2016 の次が 2019 で、2017・2018・2020 年以降の行がない。"The organisers' list" を見た日もない。読者は「大会が終わった」と誤読しかねない — 「2026-10-11 時点の事務局の一覧には 2017・2018・2019 年以降の記載なし」と開催状況を1文で（要確認）。
- [mid] A — "B" の指す対象が混在。FAQ は "the B in their own event name stands for 'brand'"、本文は B級ご当地グルメ の B が brand で語源は "B movie" とされる、と書く。"B-grade means second-rate." の反証が "B stands for brand" だけだと、同記事の "from B movie" と食い違って見える — 事務局ページの原文で B が何を指すか確認し、(1)イベント名の B (2)用語 B級 の由来を分けて書く（要確認）。
- [mid] A — "Senbei-jiru is a centuries-old name." の反証 "the name dates from Heisei" は断定。本文は "took hold ... when Hachinohe tourism groups promoted it"（農水省の言い方）。/en/eat/kyodo-ryori-tohoku/ には文化庁の百年フード「200年以上」も — "the name took hold in Heisei" に揃え、"About 200 restaurants" に出典の年を添える。
- [mid] F — 甲府鳥もつ煮の段落は "That is the shop's account; I found no independent record." "Its ingredients and seasoning were not on the page I read." と書く。/en/eat/kyodo-ryori-chubu/ は農水省の記述として、肉屋が二代目店主（1913年創業の蕎麦店）に内臓の活用を頼んだ話（1950年頃）、"glazed quickly ... in soy sauce and sugar"、2008年から甲府市職員有志が普及、を載せている — その内容を bkyu に反映するか、リンクで委ねる。
- [mid] D — title／導入の "the fried food of Japan's towns ... korokke above all" に対し、本文のコロッケは「has its own page」の1文と Mishima の箇条書き1行のみ。 — /en/eat/bkyu-korokke/ にある内容（1895年のレシピ、1918年の歌、みしまコロッケの定義）を3〜4行で要約するか、title から fried food を外す。
- [mid] D — 「What it costs」は金額なし（方針には適合）で4文、「The same name, a different place」は4項目すべて "I found no ..."、"Fares and travel times are not on these pages yet" — 読者に情報がない — 各節を中立の1〜2文に圧縮（「確認できる出典なし」）。
- [low] C — 数字が古い。来場者（17,000 / 435,000 / 581,000 / 610,000）と加盟76団体は2013年以前。最新回の規模が不明。"they currently decline all requests" に確認日がない — 「事務局ページ確認 2026-10-11」を足す。
- [low] D — "Another of the site's pages names no organiser except for the 'Ai B League Association' in its footer." は読者に不要 — 削除。導入の第1段落は約8文と長い。
- 内部リンク候補: /en/eat/kyodo-ryori/ （"No official definition" の 'The kyōdo-ryōri overview'。名指ししているのに未リンク）
- 内部リンク候補: /en/eat/konamono-monja/ （"What it costs" の 'the one tax-included price ... monjayaki' と "Where to eat it" の Tsukishima）
- 内部リンク候補: /en/eat/yakisoba-fujinomiya/ （金賞表の後、'Fujinomiya and Yokote in the yakisoba overview'。yakisoba-yokote も同段落）
- 内部リンク候補: /en/soak/shuzenji/ （"Where to eat it" の Mishima korokke。soak 記事は三島から伊豆箱根鉄道で約33分と記載。食⇔温泉）
- 内部リンク候補: /en/soak/unzen/ （"Nagasaki Toruko rice"。県レベルの接点。同県の Obama champon を切り分ける記事。食⇔温泉）
- 補足: /en/eat/bkyu-korokke/ は表と Read next にはあるが本文リンクはない。

---

## eat/champon.mdx
- 総評: 実害なし。農水省・四海樓への帰属、三説の併記、予約方針の日付入りは模範的（high 0）。弱いのは実用情報（どこで・いくらで）がほぼ空なことと、出典を使っていない比較段落。
- [mid] D — "Where to eat it" が実用にならない。第1項は「予約不可」だけ、第2項 "Elsewhere in Nagasaki. The ministry says champon is eaten every day in Nagasaki." は行き先を示さない。住所・営業時間・価格・待ち時間はなく "Fares and travel times are not on this page yet" — 四海樓の所在地と営業案内（公式ページ確認済み）、長崎市観光サイトの提供店一覧（bkyu 記事で at-nagasaki.jp を引用済み）を足す。
- [mid] D — "What it costs" は価格ゼロ（方針準拠）だが、読者の最大の疑問が空白 — 全国チェーン（例: リンガーハット）の公式サイトの税込価格を DishPrices 方式（店名・確認日つき）で出す案。長崎ちゃんぽんと同一視しない注記が要る（要出典・要確認）。
- [mid] A — "One wok" 段落の tsukemen・yakisoba との比較は "That grouping is this site's, not any source's" と自認する独自整理。tsukemen は出典を使っていないのに sources に Bunshun（つけ麺の誕生）があり、Otafuku は企業の自社史 — 段落を削るか、比較は同一店・出典ありの sara udon に絞り、未使用の出典を外す。
- [mid] A — "Champon is ramen." の反証「It is stewed ... The farm ministry treats it as a Nagasaki local dish in its own right」は出典の主張でなく本サイトの定義。農水省は麺を「中華麺」と書いており、ramen ではないと読ませる根拠にならない — 「ちゃんぽんは具と一緒に麺をスープで煮る」という事実の記述に言い換え。
- [mid] F — /en/soak/unzen/ と /en/eat/kyodo-ryori-kyushu/ は同じ農水省ページから「小浜町温泉旅館組合（雲仙市）が小浜ちゃんぽんを催しで使う」を載せる。本記事は "I have no further source on Obama's" — 同じ出典の事実を反映し unzen へリンク（unzen 側は champon へリンク済み）。
- [mid] F — /en/eat/meat-horumon/ は博多もつ鍋の締めを "Hakata's champon noodles"（¥308）と書く。本記事は "belongs to Nagasaki" のみで、福岡の「ちゃんぽん麺」との関係を説明しない。読者が混同し得る — 1文で触れる（要確認）。
- [low] A — 長崎ちゃんぽんは「豚骨主体」（農水省）だが、四海樓自身のスープは "chicken and pork bones"。読者には矛盾に見える — 「四海樓の説明」と帰属を一言添える。
- [low] D — FAQ「Can I book a table at Shikairou? — Not in its restaurant.」は不自然な英語で意味が曖昧。FAQ に、本文の材料表で答えられる「豚・魚介が入るか」（ベジタリアン／アレルギー）がない — 英語を直し、材料を答える FAQ を追加。
- [low] D — "The ministry presents this as what is held to be the beginning." は "is held to" の連発で読みにくい — 「農水省は『〜とされる』として紹介」。
- 内部リンク候補: /en/soak/unzen/ （"Two champon in one prefecture" の Obama champon。小浜は雲仙市の別の温泉町で、unzen 記事が切り分けを解説。食⇔温泉）
- 内部リンク候補: /en/eat/champon-sara-udon/ （FAQ と "Sara udon is the same restaurant's dish"。現状は表のみ）
- 内部リンク候補: /en/eat/yakisoba/ （"One wok" 段落の yakisoba。yakisoba 側は sara udon に言及済み）
- 内部リンク候補: /en/eat/ramen/ （"Champon is ramen." の誤解の項。ramen ハブの定義へ）
- 内部リンク候補: /en/eat/meat-horumon/ （博多もつ鍋の締めの "champon noodles"。同じ語の別用法）

---

## eat/chicken.mdx
- 総評: 規格・部位名・価格（税込・確認日つき）の帰属は丁寧。ただし公開本文に作業ノートが残り、title の "legally" の射程が本文と食い違う（high 2）。
- [high] B — 「I saw a search summary claiming a ministry document gives 80 days. I did not open that document; the standard itself says 75.」— 作業過程（検索要約）と未確認の説を読者に見せている。同種は /en/eat/food-shopping-depachika/ にもある — この段落を削除（必要なら「基準は75日」だけ残す）。
- [high] A — 射程が不明確。title／description の "what jidori legally means / legally requires"、導入の "printed on the board as if they were a promise, and one of them is" に対し、FAQ「What does jidori mean on a Japanese menu?」の答えは包装肉の表示（JAS）で、末尾は自ら "A word on a menu board is not the label." と否定する。JAS 規格が飲食店のメニュー表記や認証なしの表示を法的に拘束するかが本文にない — 規格の位置づけ（強制か任意か、メニューに及ぶか）を出典つきで1文、または title を "what the jidori standard defines" に（要確認）。
- [mid] B/C — "As of 2026-10-10, consumption tax in Japan is 8% on takeaway food and 10% when you eat in." と ¥288 / ¥248（8%前提）。/en/eat/conbini/ と /en/column/reading-menu-prices-in-japan/ が書く 2027-04-01 から1%の案（閣議決定 2026-09-15、法案成立は未確認）に触れていない — 1文とリンク、次回確認日を足す。
- [mid] D — title／導入は "where karaage and mizutaki come from" を約束するが、本文は表の下の3項目のみ。mizutaki は "a documented founder" とだけで名前・年がない（/en/eat/chicken-mizutaki/ は林田平三郎・1905年）— 各1〜2文（人名・年・複数説）を足すか、title を部位・規格の側に寄せる。
- [mid] F — "Nakatsu, also in Oita, is the town with 60 or more of them" と "Oita is the karaage prefecture" は断定気味。/en/eat/chicken-karaage/ は協会「60軒超」、店主「60軒以上」、地元の組合 約17軒で「数える対象が違うらしく、現行の公式な数はない」、起源も複数と書く。"Oita city also led a 2019 ... survey" は karaage 側の限定（県庁所在地・政令市の中で）が抜けている — 帰属（"the association says more than 60"）を付け、"karaage prefecture" は削除または帰属。
- [mid] C — 古い数字。2016年の aff（国産種約2%・自給率60〜70%・ブロイラー約50日）、鹿児島 FY2023 の出荷羽数、愛知 62.8%（年なし）。本文は「newer ones not found」と明記するが、2026年10月時点で10年前の数字 — 最新の自給率などに差し替え、年のない 62.8% は年を確認して付すか削除。
- [mid] B — 効能。"breast meat is said to be rich in imidazole dipeptides, which it describes as helping recovery from fatigue." は帰属つきだが、部位の呼称がテーマの節に効能を持ち込んでいる。"Akita describes the meat as ... more inosinic acid than a broiler" も県のPR文言 — どちらも削除が安全（方針: 効能の断定禁止）。
- [mid] D — FAQ 3問目 "Which are the three great jidori of Japan?" は読者の疑問として薄く、答えも「出典が見つからない」。代わりに 焼き鳥で何を頼むか（部位名は本文にある）、鶏刺し・生食は安全か（九州で遭遇しやすい。要調査）が FAQ 向き。
- [low] D — 研究メモ口調が約11箇所。"I could not find / I did not find"、"What I could find is about the home towns; what I could not find ..."、"Fares and travel times are not on this page yet" — 中立の1文に。
- [low] C — "The Satsuma-dori ... now kept only for show" の now は日付なし。
- 内部リンク候補: /en/soak/beppu/ （"Where to eat it" の Beppu toriten。Beppu 記事は「toriten と温泉を結ぶ出典はない」と明記済みで、因果を書かずに町として接続できる。食⇔温泉）
- 内部リンク候補: /en/eat/izakaya-yakitori/ （"How the parts are named" の furisode / seseri / bonjiri、"names you will meet at yakitori counters"）
- 内部リンク候補: /en/eat/kyodo-ryori-akita/ （Hinai-jidori の項。同ページは切りたんぽ鍋の比内地鶏スープを解説）
- 内部リンク候補: /en/eat/kyodo-ryori-kyushu/ （"Where to eat it"。mizutaki・toriten を九州の郷土料理一覧として）
- 内部リンク候補: /en/eat/conbini/ （"What it costs" のコンビニ唐揚げ2品。8%／10% の税込の仕組みはそちら）
- 補足: karaage／mizutaki の本文リンクは表と Read next にはあるが、散文の "The lineage pages go deep on each" には付いていない。

---

## eat/conbini.mdx
- 総評: 統計・沿革・税の説明は一次寄りで帰属が明確。実害の候補は "What it costs" の表示（税込・確認日が出ず、同ページ内で上限が食い違う）（high 1）。
- [high] B/C — "What it costs"（DishPrices）。built ページは "Chains ¥145.80–¥354 / ¥398–¥754"、"Local from ¥150 / ¥700 (Oct 2026)" で、税込の語も chain 行の確認日も出ない。下の段落は "The figures above are kept on the price reference page" とだけ言い、次の文で「lineage ページは税込」と分けるため、上の数字は税込でないように読める。Local 行は運営者の実見（reference/seenOn）で公式の税込ではない。遷移先 /en/food-prices/ には "tax included" とあるが記事内表示は未対応。pricesCheckedOn は 2026-10-10 だが chain データは 2026-10-05 — 段落かコンポーネントに "tax included · chains' own sites · checked 2026-10-05" を出す（DishPrices の修正で全記事に効く）。Local 行は実見と明記。
- [mid] F/A — 同一ページ内の食い違い。DishPrices の onigiri 上限は ¥354（Lawson）、下の表は "About ¥146–378 including 8% tax at Seven-Eleven"。/en/eat/conbini-onigiri/ で ¥378 は豚玉＋ツナマヨ（表の地域欄では沖縄の系統と思われる、要確認）、food-prices の 7-Eleven 関東ページの上限は ¥300.24。¥145.80 と ¥146 の表記も混在 — 上限が地域限定品であることを表に書くか、基準（関東）を揃える。
- [mid] C — 2027-04-01 から1%の案は日付と留保つきで書けている（監査の確認点は満たす）。ただし閣議決定（2026-09-15、/en/column/reading-menu-prices-in-japan/ に記載）、"法案成立は未確認" の確認日、成立時に持ち帰り（1%）と店内（10%）の差が広がる点がない。主題が "the tax line" なので1〜2文とリンクが要る。"(as of the date of this page)" は具体日に。
- [mid] C — 決済・加熱（アプリ一覧、Apple Pay / Google Pay、QR 不可、¥10,000 の非接触上限、500／600W）に "as of" がない。決済ページは更新が速い — 本文に「各社ページ確認 2026-10-10」。
- [mid] D — 「None of the lists mentions cash, so I make no claim about it either way.」は最初の疑問（現金は使えるか）に答えず、メモ口調 — JNTO など出典のある文に置換するか削除。FAQ に ATM（本文に JNTO 由来の段落あり）を追加。
- [mid] A — "The same store, a different region" の2項目は本ページの sources にない。FamilyMart の4種のだしは /en/eat/conbini-oden/ で「2020年の発表」と日付つきなのに、ここは現在形 "blends" — 出典と年を付ける。
- [low] D — "Where to find it" は2文（"almost any corner"＋Famichiki）で薄い — "What it is" に統合し、ホットスナックの価格は /en/eat/chicken/ へ。
- [low] A — "Seven-Eleven opened the first Japanese convenience store." を誤解として扱うが、同ページが引く2004年論文は 7-Eleven を時代の始まりとし、1969年の店は "said to be" — 反証を「一つの説」程度に弱める。
- [low] D — "The association thinks record visitor numbers and the Osaka Expo helped" の "record visitor numbers" が来店客数かインバウンドか曖昧。
- [low] F — /en/column/paying-at-restaurants-in-japan/（別件で既読）は JNTO として "Apple Pay, Google Pay ... may not work in Japan" と書くが、本ページは FamilyMart／Lawson が両方に対応と書く。対象（飲食店とコンビニ）の違いを1句で。
- [low] B — 監査の "¥10,000" は非接触決済の上限で価格ではない（誤検出）— 対応不要。
- 内部リンク候補: /en/column/reading-menu-prices-in-japan/ （"The tax line" と "A change is proposed" 。税込表示と1%案の詳細）
- 内部リンク候補: /en/eat/chicken/ （"Where to find it" の Famichiki。コンビニ唐揚げ2品の税込価格あり）
- 内部リンク候補: /en/eat/sweets-conbini/ （"What it is" の fresh daily food。コンビニスイーツの価格。lineage 表に行がない）
- 内部リンク候補: /en/column/paying-at-restaurants-in-japan/ （"Paying and heating" の Payment。IC・QR の全体像と現金のみの店）
- 内部リンク候補: /en/eat/food-shopping/ （"Where to find it"。デパ地下・駅弁など他の買い方）。温泉との自然な接点は見つからず（全国展開のため）

---

## このバッチ全体の傾向（まとめて直せるもの）
1. 調査メモ口調が公開本文に残る（"I found no / I could not find / not on this page yet"。このバッチは column 1本・eat 3本で多数、"not on this page yet" は全体で約62本）。chicken と depachika には "search summary" の一文もある — 中立の1文に圧縮するか削除、"search summary" は全記事を grep して削除。
2. 内部リンクが本文0本（6本すべて）。表と Read next に頼り、散文の "its own page / the overview" が未リンク — 実リンク化。食⇔温泉は Mishima→shuzenji、Nagasaki→unzen、Beppu、Kanazawa→yamashiro など地名で自然に結べる。
3. 価格: DishPrices の出力に税込・確認日が出ない（コンポーネントで一括修正可）、コラム tourist-prices は税込未確認の実見価格で market 系2本の方針と食い違う。8% 前提の記事（約30本）のうち 2027-04 の1%案に触れるのは conbini と reading-menu-prices のみ。
