# 見直しバッチ11（2026-10-13）

対象6本（食の品目ハブ3本＝洋食・焼きそば・屋台、鉄道2本＝関西空港12日ルート・関空→広島、温泉1本＝酸性・硫黄・放射能泉）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、docs/SPEC.md、docs/audit/slug-index.txt、docs/research/onsen-type-*-2026-10-11.md の3本、手元の関連記事（rail/setouchi-area-pass、soak/onsen-water-types、soak/dogo、eat の系譜ページ数本）、src/data/food-prices.*.json、src/components の grep。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

F の照合先（各1本を中心に）: western→western-italian（Napolitan・ホテル説・1985 年の記述は整合。tea-kakigori-kissaten L124 とも整合）と、系譜ページの価格（yoshoku・machichuka に価格あり＝食い違い）／yakisoba→yakisoba-yokote・yakisoba-fujinomiya（B-1 の成績・Sankoku Dōmen の記述は整合）と western-pan（Nozawaya の記述は整合）／yatai→yatai-hakata（約100軒・中洲・天神・長浜・2013年条例は整合）／kansai-12-days→rail/setouchi-area-pass（買う閾値が不一致）と soak/dogo（道後は市電で行く）／kix-to-hiroshima→rail/setouchi-area-pass／soak 酸性・硫黄・放射能→docs/research の3本と soak/onsen-water-types（数値は一致）。

ARTICLE-AUDIT の誤検出・補足:
- 「内部リンクなし」: 本文（Markdown）のリンクは eat 3本・rail 2本とも 0 本で検出どおり。ただし eat 3本は `<LineageTable>` が公開済みの系譜ページ（western: burger・dairy・italian・machichuka・pan・yoshoku／yakisoba: fujinomiya・yokote／yatai: hakata・matsuri）へのリンクを出すので、E は LineageTable が拾わない本文中の名指し（"the page on coffee houses" など）を優先した。rail 2本に LineageTable は無い。soak は onsen-water-types への1本のみで、eat へのリンクは 0 本（検出どおり）。
- 「税込不明の金額」: rail 2本は**検出どおり high**（段落にも FactRow にも「税込」が無く、Price／Verdict／FactRow／CompareTable／RateNote／DishPrices の各コンポーネントにも "tax／税込" を出す箇所が無い。rail 記事全体にも "tax" の語が無い）。eat 3本は本文に金額が無く（yakisoba の「¥15 a roll in 1952」は Camelia の歴史的価格の帰属つき引用）、検出も無し。
- DishPrices: 6本とも使っていないので keys の適合・税込注記の件は対象外。ただし western は「価格なし」と書く一方でサイトの基準価格データに hamburger がある（下記）。
- 「最上級・順位の断定」（yakisoba の "The best account I have of its origin"）は**誤検出**（自分の手持ち資料への言及）。D の作業メモ口調として扱う。
- 「出典http」「出典の日付なし」は low のため取り上げない。RateNote の "Fares verified" の件は既出のため繰り返さない。

---

## eat/western.mdx
- 総評: 読者に実害のある誤りは無く、起源は「ホテルの説明では」と帰属して書けている。ただし「価格は出さない、系譜ページも同じ」の一文が実際の系譜ページと食い違い、"I could not find" 口調と鉄道の定型文が残る。
- [mid] F — 「I could not confirm a tax-included price for any of these foods from an official source when this page was written, so no prices are given. The lineage pages say the same.」 — LineageTable の先にある western-yoshoku（¥ と tax の行が9）・western-machichuka（同16。ARTICLE-AUDIT にも ¥420 などの価格行）は価格を載せており「同じ」は事実でない — 「ハンバーガー・パスタ・牛乳の系譜には価格が無い。yōshoku と machi-chūka の系譜ページには価格がある」と書き分けるか、文を削る。
- [mid] F — 同じ節の「so no prices are given」だが、サイトの基準価格データには hamburger の項目がある（src/data/food-prices.chain.json:300 モスのハンバーガー ¥250、確認日 2026-10-05、food-prices.official.json:36）— ハンバーガーの節は価格を出せる。DishPrices を使うなら「出力に税込の注記は出ない」ので、本文に「tax included」を1回明記する（データ側が税込かは要確認）。
- [mid] D — 作業メモ口調: 「where I could not reach a primary source I have said so rather than fill the gap」「Not by any record I could find.」（FAQ）「I could not reach a primary source for any of them」「I found no official source on whether it tastes different when it gets there.」「Whether anyone came before MOS, I did not check.」 — 「確認できない」は事実の形（"The sources checked do not say …"）にし、調査経緯の説明（"I have said so rather than …"）は削る。
- [mid] D — 定型の「Fares and travel times are not on this page yet.」（「Where to eat it」末尾）。食の記事に鉄道テンプレの一文が残っている（同文は en 配下54本） — 削除。
- [mid] A — 見出し的な太字リード「**Napolitan was a hotel chef’s answer to a soldier’s plate.**」がホテルの自己説明を事実として言い切る。FAQ は「Yokohama city’s tourism site … says the hotel story is what is told」と書くのに、見出しは帰属が無い — 「The hotel’s account of Napolitan」のように帰属を見出しに出す。
- [low] A — 「Father de Rotz (マリク・マリ・ド・ロ in the association’s Japanese)」 — 一般には「マルク・マリー・ド・ロ」と表記される。協会ページの表記のままなら注記を、転記ミスなら修正（要確認、原典で綴り照合）。
- [low] A — 題名の「a nation of milk drinkers」 — 本文に消費量の数字が無い（58% は生乳の生産シェア）。しかも「Japanese people have always drunk milk」を誤解として否定している — 題名を本文の内容（導入の経緯と産地）に合わせる。
- [low] D — 冒頭は「three smaller groups」（パスタ・ピザ、ハンバーガー、牛乳）だが、LineageTable は yōshoku・machi-chūka・パンも含み、表の後の1文で触れるだけ — 冒頭で「6つの系譜」と範囲を言う。
- [low] C — 「Anywhere — the national chains’ Japan-only menus」「Domino’s Japanese pizzas」が現在形で、確認日の言及が無い（pricesCheckedOn は価格の無い記事で意味が薄い） — 「各社公式の沿革による」を添える。
- 内部リンク候補: /en/eat/tonkatsu/ と /en/eat/donburi/（冒頭「Tonkatsu and the beef and katsu bowls have their own pages.」— 名指しているのにリンクが無い）／/en/eat/tea-kakigori-kissaten/（「The same name, a different place」の「The page on coffee houses and shaved ice」）／/en/eat/wagyu-sukiyaki/（Milk の段落の "the beef hotpot"、肉と牛乳を勧めた明治の運動と対になる）／/en/soak/unzen/（Where to eat it の Sasebo の項。長崎県で地域が重なる eat⇔soak の結びつき）。

## eat/yakisoba.mdx
- 総評: 実害のある誤りは無い。「is thought to」の帰属が丁寧で、B-1 の成績も系譜ページ2本と一致する。弱点は、答えになっていない価格 FAQ、"I could not find" の連発、日付の無い店数。
- [mid] D — FAQ「How much does yakisoba cost? — I could not confirm a tax-included price for yakisoba at any shop on 2026-10-10, so this page gives none.」 — 読者の疑問に答えず、「What it costs」節の文の重複 — FAQ から外すか、確認できた範囲（町の公式ページに価格が無い、祭りの屋台は店ごと）に絞る。
- [mid] D — 作業メモ口調: 「The best account I have of its origin comes from a sauce company, and it is worth reading as one.」「Every step is written as "is thought to"; I have kept that.」「I could not find a public or company primary source for the familiar story …」「Both are a foundation’s and a company’s articles. I found no record from 1952 itself …」「I found no source that compares the taste of any of these at home and away, and this page does not.」 — 「出典は企業サイトであり、〜とされる」という事実の形に。
- [mid] D — 定型の「Fares and travel times are not on this page yet.」 — 削除（食の記事に鉄道テンプレが残っている）。
- [mid] C — 「Ota’s shop association, formed in 2002, counts 44 shops including supporting members」「Ota, Gunma — 44 association shops」 — 店数に「as of」の日付が無い。会員数は増減する — 「as of 2026-10-10」を付ける。
- [low] A — 「Yokote’s yakisoba is said to have started just after the Second World War with a man who ran an okonomiyaki stall」 — 「is said」の主体が無い — 特許庁の登録情報か横手の団体かを明記。
- [low] A — FAQ「Both treat it as the leading theory」— 本文は「The Morinaga Angel Foundation says it may have begun at Nozawaya」「Camelia calls Nozawaya the leading theory」。財団は "may have"、企業は "leading theory" で、FAQ が同じ強さに丸めている（western-pan も "it is said" 型） — 本文の書き分けに揃える。
- [low] D — 「Otafuku calls sauce yakisoba a standard of festival stalls」が2回（It suits a stall と Where to eat it の A festival）。後者は店の案内になっていない — 具体的な祭りを挙げるか削る。
- [low] D — 「Rows without a link are on the list but not written yet.」— 公開本文に未執筆という内部事情。「planned」と言い換えるか削除。
- 内部リンク候補: /en/eat/bkyu/（「A contest made two of them famous」の B-1 Grand Prix。同ページは B-1 の仕組みを解説）／/en/eat/yatai-matsuri/（冒頭「It is festival-stall food」。祭りの屋台が何を売れるかの規則）／/en/eat/champon-sara-udon/（What it is の "Nagasaki’s thick-noodle *sara udon* … like champon" — 名指しているのにリンクが無い）／/en/eat/western-pan/（「The yakisoba bun」。Nozawaya の記述は western-pan と整合）／/en/soak/ikaho/（Where to eat it の Ota, Gunma。群馬で地域が重なる eat⇔soak の結びつき）。

## eat/yatai.mdx
- 総評: 実害のある誤りは無い。制度・歴史の説明は出典（NDL・条例・警察庁など）の帰属が明確で、yatai-hakata とも整合する。弱点は、制度の説明が長い一方で旅行者の使い道が薄い点と、日付の無い「約100軒」。
- [mid] D — 構成: 「The permits」節（食品衛生法の改正、道路使用許可、大阪の臨時出店届）が最も長く、旅行者が知りたい点（どこで、何を売り、現金か、並ぶか）は「Where to find them」の2行だけ。冒頭の「the lineage pages cover Fukuoka’s stalls and festival stalls」で系譜ページに送る作りだが、ハブ単体では使い道が見えない — 制度は要点に圧縮し、「Where to find them」に各系譜ページの1行案内と、行き先（Fukuoka の通り）を書く。
- [mid] C — 「Fukuoka — about 100 licensed street stalls in Nakasu, Tenjin and Nagahama.」 — 軒数に日付も出典も無い。yatai-hakata は「fell from over 400 to about 100」「competitions since 2016 have created 56 new stalls」と同系統の数字を持ち整合はしているが、"as of" が無い — 年月と出典（市の公式）を添える。
- [low] D — 作業メモ口調: 「I found no official source that sorts Japan’s food stalls into these types as a whole; the list above puts the cities’ descriptions side by side.」「That is Osaka’s practice; I have not confirmed it nationally.」 — 「No official source sorts … ; Osaka’s practice only」の形に。
- [low] A — 「Night trading in cooked food was banned in 1661, and trading after 6 p.m. in 1670 — though one source notes the basis for the hour is unclear.」 — 1661・1670・1686・1699 の4つの年が一段落に並び、どの年がどの資料か分からない — 年ごとに「(NDL reference answer)」を付ける。
- 内部リンク候補: /en/eat/sushi-edomae/（Where it came from の「Nigiri sushi. Its origin is not settled.」）／/en/eat/soba-edo/（Fire rules の「udon, soba and other foods cooked on fire」。Edo の屋台が起源とされる食べ物）／/en/eat/konamono-takoyaki/（「What a stall may sell, in Osaka」の takoyaki、FAQ の「takoyaki and karaage」）／/en/eat/ramen-hakata/（「Where to find them」の Fukuoka。屋台のラーメン）／/en/soak/yufuin/（Fukuoka の項。九州で地域が重なる eat⇔soak の結びつき。Beppu・Kurokawa・Takeo でも可）。

## rail/kansai-12-days-setouchi.mdx
- 総評: 「7日間のパスを12日のどこに置くか」という切り口は良いが、行程の最後（日11）でパスが切れた後の最も長い移動が費用も所要も書かれず、冒頭の約束（高額な移動はすべてパス内）と食い違う。税込の明記が無く、買う/買わないの判断を支える運賃の計算も無い（high 2件）。
- [high] A / D — 「The pass expires at the end of day 10; the last two days are short local hops.」「leaves the last two days back in Kansai, where the local fares are small」「puts all of the expensive movement inside the seven days」 — 日9–10 は松山。関西に戻る日11（松山→岡山→関西）が最も長い移動になるが、パスは日10で失効している。「short local hops」にならず、費用・所要も書かれていない — 日11の移動（区間と運賃・所要）を明記するか、開始日・行程を組み替える。
- [high] B — 「{ label: 'Price', value: '¥22,000 adult' }」（FactRow）、Verdict の `<Price jpy={22000} />`／`<Price jpy={11000} />`、CompareTable 3行すべて ¥22,000。どの段落にも「税込／tax included」が無く、各コンポーネントも注記を出さない（rail 記事全体に "tax" の語が無い） — JR-WEST 公式ページで税込表示を確認して本文に「tax included」を1回明記する。確認できなければ価格の出典と確認日を本文に書く。
- [mid] F — 「Day 9–10 — **Matsuyama and Dogo Onsen.** Covered, because JR-SHIKOKU is inside the pass.」 — 道後は市電（伊予鉄）で行く（soak/dogo は「JR Matsuyama station to Dōgo … about 20 to 30 minutes by tram」）。記事自身が書くパスの範囲（JR-WEST・JR-SHIKOKU の在来線と宮島フェリー）に市電は入らず、setouchi-area-pass も「他の島の航路は別事業者で現地払い」と書く — 「Matsuyama is covered; the tram to Dōgo is paid separately」に。
- [mid] A — Verdict「buyIf: You are going at least as far as Hiroshima and stopping more than twice on the way.」「skipIf … Point-to-point tickets will cost less」 — この行程の区間運賃の合計と ¥22,000 の比較が無い（Costs 節は宿と食費のみで「not listed here yet」）。 — 区間ごとの運賃を出典つきで並べて損益分岐を示す。
- [mid] F — 同じ買う閾値が3記事で違う: 本記事「stopping more than twice」、kix-to-hiroshima「two or more places」、setouchi-area-pass「stop three or more times」「The arithmetic turns at three long legs」 — 閾値を1つに揃え、根拠は setouchi-area-pass の試算（4区間 ¥18,400）にリンクして示す。
- [mid] D — 10日版が「パスを買うか」に答えていない: 「If you have only ten days, cut Matsuyama rather than shortening everything.」 — 同記事は「Matsuyama and Takamatsu are inside the pass, which is what makes a twelve-day trip work」「This is the part a nationwide pass would not do better」と書く。松山を削る10日版でパスが元を取れるか、取れない人には買わない案、が無い（SPEC の方針: 日数違いの派生案には使えない人に「買うな」と書く） — 10日版で、パスを買う/買わないの条件を1段落。
- [mid] B — 「**Starting on day 4 is right for most trips.**」「Starting on day 1 wastes the pass on three days of city walking.」「Starting on day 6 works only if you are certain the second half is the heavy half.」 — 「right」「wastes」と「most trips」の言い切りに根拠が無い（「正しい」と書かず仕組みと理由で書く方針）。FAQ 1 は Haruka がパス対象と書くのに、日1開始案の利点（空港からの Haruka）が本文の比較に出ない — 「day 4 から始めると〜が入る／day 1 は〜が入る」と対象になる移動で比べる。
- [mid] A — 「Twelve days is the length most British, Australian and Canadian visitors actually take」 — 統計の出典が無い — JNTO・観光庁などの滞在日数に帰属させるか、「a common length」に弱める。
- [mid] D — 作業メモ口調: 「Accommodation and food figures are not listed here yet — this article is researched rather than ridden, and I would rather leave a number out than publish one I cannot source.」。さらに「What I would change」（"If you have a thirteenth day, put it in Onomichi rather than Hiroshima … Onomichi is a town that rewards a second morning, and most itineraries give it an afternoon."）は「researched rather than ridden」と矛盾し、体験に基づく助言に読める — 「Costs」節は削るか確認できた運賃だけの表にし、「What I would change」は理由と出典を付ける。
- [mid] D — 行程に区間の所要・乗換・運賃が1つも無い（SPEC のモデルルートは日ごとの事実行）。日4「Kyoto to Okayama or Kurashiki」、日9–10 の広島→松山の経路（JR で岡山経由かフェリーか）が不明。Onomichi の「the start of the bridges across to Shikoku」（しまなみ）がパス内かも書かれない（setouchi-area-pass は「Other island routes … are paid at the terminal」）。FactRow「Longest single leg: Kyoto → Okayama」は、日9・日11 の移動の方が長く見え、定義（距離か時間か）も出典も無い — 日ごとに「区間・所要・パス内/外」を書き、FactRow の項目は削るか定義する。
- [mid] A（要確認）— パスの購入資格と新幹線の列車種別が書かれていない。kix-to-hiroshima は HARUKA 切符に「holders of a foreign passport entering as a Temporary Visitor」と書くのに、パス本体の資格は本記事・kix・FAQ のどこにも無い。Sanyo Shinkansen の Nozomi／Mizuho に乗れるかも不明（JR-WEST 公式ページで確認）— 対象外の人には「買うな」を明記する（方針）。
- [low] D — description が173字（160字上限、ARTICLE-AUDIT）。CompareTable の費用列が3行とも ¥22,000 で比較情報にならない — 列を「パス内に入る日／パス外になる区間」に。
- 内部リンク候補: /en/rail/setouchi-area-pass/（冒頭2段落目「The Setouchi Area Pass runs for seven consecutive days」— 記事全体がこのパスの話でリンクが無い）／/en/rail/kix-to-hiroshima/（日1–3と日4の「Kansai Airport」。空港区間の運賃）／/en/soak/dogo/（日9–10「Matsuyama and Dogo Onsen」）／/en/eat/konamono-okonomiyaki/（日7–8 の Hiroshima、広島風お好み焼き）／/en/eat/kyodo-ryori-setouchi/（日4–6 の Okayama・Onomichi。瀬戸内の郷土料理）。

## rail/kix-to-hiroshima.mdx
- 総評: 「直通は無い、必ず新大阪経由」という整理は読者に役立つ。ただし題名と description が約束する「パスが元を取る点」が本文のどこにも計算されておらず、記事自身が「Still to confirm」で新幹線の運賃・所要を未出典と認めたまま、「comparison is already over」と言い切る（high 2件）。
- [high] B — FactRow「To Shin-Osaka ¥1,800／To Kyoto ¥2,200／To Tennoji ¥1,300」、本文「Shin-Osaka is ¥1,800, Kyoto ¥2,200, Tennoji ¥1,300, Kobe ¥2,000, Nara ¥1,800」「from ¥3,500」「¥22,000」。どの段落にも税込の明記が無く、コンポーネントも注記を出さない — JR-WEST の HARUKA 切符ページで税込表示を確認して「tax included」を1回明記。バス運賃の ¥3,500 は税込か不明のまま載っている（下の A も参照）。
- [high] A — 題名「the one number that decides it」、description「the point at which a seven-day pass starts paying for itself」だが、本文は損益分岐を示さない。「A return trip to Hiroshima and nothing else will not reach ¥22,000」「Add Onomichi, add Miyajima, add the crossing to Matsuyama — and the pass stops being a question」「If Shikoku is anywhere in your plans, the comparison is already over」は運賃の根拠が無く、末尾「The Shin-Osaka to Hiroshima Shinkansen fare and journey time are not stated here, because I have not sourced them from the operator yet」で、最も要る数字を自認して欠いている — 新大阪〜広島の運賃・所要を出典つきで入れ、往復＋空港区間の合計と ¥22,000 を並べる。入れられないなら題名の「one number」と「already over」を外す。
- [mid] D — CompareTable の費用が同じ尺度でない: Haruka 行は jpy 1800（空港区間のみ、「Shinkansen fare on top」）、バス行は jpy 3500（「Bus leg only」）、パス行は jpy 22000（全部入り）。一見パスが12倍高く見える — 3行とも合計額（空港区間＋本線）に揃える。
- [mid] F — 買う閾値: 「stopping at two or more places」「Two or more stops in the west」— setouchi-area-pass は「three or more stops」「The arithmetic turns at three long legs」、kansai-12-days は「more than twice」。3記事で違う — 閾値を揃え、根拠の試算にリンク。
- [mid] A — 「Every option goes through Shin-Osaka」「Always via: Shin-Osaka」 — 同記事のバス案は「Into Osaka, then highway bus」で、FAQ は「getting into Osaka first」。バスの乗り場が新大阪だとは書かれていない（sources は中国JRバスのトップページのみ） — 「Every option goes through Osaka」に弱めるか、乗り場を出典で示す。
- [mid] A — 「Chugoku JR Bus runs a Hiroshima–Osaka highway bus from ¥3,500」「four hours or so on top」「Hiroshima is 300 kilometres west of it」 — バス運賃・所要・距離に個別ページの出典も確認日も無い（出典は中国JRバスのトップ `https://www.chugoku-jrbus.co.jp/` のみ）。本文に確認日も無い — 運賃ページの URL と「checked on」を付ける。運賃の税込も同時に確認。
- [mid] A — 「Pass covers: Both legs」（FactRow）、CompareTable「Both legs, plus Miyajima ferry and JR Shikoku」— FAQ は「Check the current area map before travelling」と留保し、本文は断定。また「What I would do」は「start west with the pass the following morning」と勧めるので、空港の Haruka はパス外で別払い（¥1,800）が前提 — 「Both legs, if you start the pass on arrival day」と条件を書く。
- [mid] A（要確認）— パスの購入資格と Nozomi／Mizuho の可否。HARUKA 切符の資格（Temporary Visitor）は書くが、パス本体の資格は無い（kansai-12-days と同じ）。対象外の人には「買うな」を明記。
- [mid] D — 作業メモ口調: 「Still to confirm … because I have not sourced them from the operator yet. They will be added with the date they were checked. Everything above comes from the pages listed at the end.」「The honest answer is that there is no clever route.」 — 公開本文での将来の約束と「honest」は不要 — 新幹線の運賃を入れて節ごと削除。
- [low] D — description が179字（160字上限、ARTICLE-AUDIT）。
- [low] A — 「Children are half.」 — 年齢区分と出典が無い（kansai-12-days は「child aged 6–11」と ¥11,000）。
- 内部リンク候補: /en/rail/setouchi-area-pass/（「The number that decides it」の "The pass is ¥22,000 for seven consecutive days"。本文にリンクが無い）／/en/rail/kansai-12-days-setouchi/（「What I would do」の「start west with the pass the following morning」— パスの7日を置く話）／/en/eat/konamono-okonomiyaki/（冒頭の Hiroshima。広島風お好み焼き）／/en/eat/seafood-oyster-crab/（Miyajima・Hiroshima の牡蠣。「Add Onomichi, add Miyajima」の段落）／/en/soak/dogo/（「the crossing to Matsuyama」の段落）。

## soak/acidic-sulphur-radioactive-springs.mdx
- 総評: 定義の数値は温泉法と療養泉を分けて正しく書かれ、docs/research の3本と soak/onsen-water-types に食い違いは無い（H⁺ 1mg／1mg、総硫黄 1mg／2mg、ラドン 74Bq・5.5 マッヘ／111Bq・8.25 マッヘ、ラジウム塩 1×10⁻⁸mg で療養泉の欄は「No entry」、「弱放射能」は8.25以上50未満、泉質名の順序）。二酸化炭素泉・含よう素泉の数値はこの記事の範囲外で、water-types の CO₂ 250／1,000 と一致。ランク（S/A/B/C）は無く、効能の断定も無い（適応症は「公式の基準にこう書かれている」形）。high は無し。
- [mid] D — 作業メモ口調が9回前後: 「I could not find any official grouping of "Japan’s three great radium springs".」「I could not find an official general explanation of how sulphur springs away from volcanoes form.」「I found no official explanation of how the radon gets into the spring water.」「I could not find a ministry or prefectural document telling bathers to remove jewellery」「I could not find its spring names.」「I could not confirm the official one.」「I found no official source calling it an acidic spring.」「I did not find a newer official statement.」 — 読者に必要な不確かさは「公的資料では確認できない」と事実の形で1回ずつに。調査の経緯の文体を減らす。
- [mid] A — 「Sukayu, Aomori. Despite the name, the association lists its water as a sulphur spring, gives no pH … I found no official source calling it an acidic spring.」 — 出典の範囲内の記述だが（research も「酸性泉と書く公式出典は取れなかった」止まり）、「Despite the name」が「酸性ではない」と読まれうる。施設や県の分析書までは確認していない（私の記憶では施設の表示は酸性・含硫黄だが未確認。要確認） — 「The association lists it as a sulphur spring; the sources checked give no pH」に留め、「Despite the name」を外す。
- [mid] D — 構成: 「Local and elsewhere」（東京の化石水、景品表示法の措置命令、浴用剤）は3つの泉質の話から外れ、onsen-water-types と重なりそう。冒頭は「does not rank any spring and does not say what any water will do for you」で終わり、読者の使い道（硫黄の湯で何に気をつけるか）が分かるのは「Bathing in them」以降 — 冒頭に3行の要点（数値の表、硫化水素は臭いを頼りにしない、洗い流すかは公式の言い方）を置き、「Local and elsewhere」は別ページへ移すか短縮。
- [mid] E — 本文のリンクは onsen-water-types の1本のみ。草津・蔵王・三朝・玉川を名指すのに、既存の温泉地ページにも食のページにもリンクが無い（ARTICLE-AUDIT の「食へのリンクなし」も該当）。
- [low] A — 「western Japan, where granite is often exposed, tends to have natural radiation about 1.5 times that of eastern Japan」 — 環境省の資料（research C）は「大地からの放射線量が1.5倍ほど」で、自然放射線全体ではない — 「radiation from the ground」に。
- [low] A — 冒頭「Three of Japan’s ten official spring types cause more confusion than the rest … Each has a name that sounds alarming in English」 — 編集上の判断で出典が無い — 「three of the ten types carry labels that do not match the legal definition」のように事実に寄せる。
- [low] D — 出典の e-Gov が API URL（`…/law_data/323AC0000000125?response_format=json`）で、読者が開くと JSON — 人が読めるページ `https://laws.e-gov.go.jp/law/323AC0000000125` に。題名が約135字で検索結果で切れる — 60字前後に。
- 内部リンク候補: /en/soak/kusatsu/（Reading the names の「the one given for Kusatsu’s Yubatake source」。名称の読み解きの実例）／/en/soak/misasa/（Places named in official sources の Misasa, Tottori。ラドンの温泉地）／/en/soak/zao/（同 Zao, Yamagata。pH 1.6〜1.25 と宝飾品の注意）／/en/eat/kyodo-ryori-akita/（Tamagawa, Akita の項。秋田で地域が重なる eat⇔soak の結びつき）／/en/eat/kyodo-ryori-sanin/（Misasa の項。鳥取＝山陰の郷土料理）。

---

共通傾向（まとめて直せるもの）:
1. rail 2本: 税込の明記ゼロ（rail 記事全体に "tax" 無し、コンポーネントも出さない）、¥22,000 を3記事（setouchi-area-pass 含む）に手書き（src に passes.ts の該当値は見つからず）、買う閾値が3記事で不一致（2か所以上／3か所以上／more than twice）、パスの購入資格と Nozomi／Mizuho の記載なし — 1文の税込定型と閾値の統一、資格の1行で一括修正できる。
2. 作業メモ口調（"I could not find …" の連発、定型の「Fares and travel times are not on this page yet.」は en 配下54本）— 食の記事の定型文は一括削除、rail の「Still to confirm」「not listed here yet」は数字を入れて消す。
3. 食のハブは本文が名指す別ページ（tonkatsu・coffee house のページ・champon など）にリンクが無く（LineageTable は系譜しか出さない）、「系譜ページも同じ」型の相互参照は実態と食い違う（western）。温泉の解説記事は、名指す温泉地・産地の既存ページ（soak／eat）へ張る。
