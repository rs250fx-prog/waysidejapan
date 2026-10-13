# 見直しバッチ12（2026-10-13）

対象6本（温泉 soak：泉質解説3本＝二酸化炭素・塩化物・鉄／炭酸水素塩・硫酸塩・よう素・単純／源泉かけ流しの解説、温泉地3本＝道後・下呂・伊東）。記事は編集していない（指摘のみ）。出典URLは開いていない。判断材料は記事本文・frontmatter、docs/ARTICLE-AUDIT.md、docs/HANDOFF-CHAT.md、docs/ONSEN-LABEL.md、docs/audit/slug-index.txt、docs/research/onsen-type-co2-chloride-iron と onsen-type-bicarb-sulfate-iodine-simple の2本（全文）、onsen-quality（泉質の数値の行）、docs/research/onsen-town/dogo・gero、onsen-town-izu-yugawara（伊東の節）、手元の関連記事。
項目記号: A 根拠 / B 方針違反 / C 鮮度 / D 読みやすさ・読者価値 / E 内部リンク / F 他記事との整合。重要度: high＝読者に誤り・実害／方針違反、mid＝直した方が良い、low＝好み・軽微。「要確認」は出典ページを開けないため原典で裏取りが要るもの。

## 先に：依頼の共通確認事項の結果（指摘が無い項目は各記事に書かない）

- 泉質の数値は記事とメモで一致。二酸化炭素泉（温泉法250／療養泉1,000mg/kg）、含鉄泉（10／20mg/kg）、含よう素泉（1／10mg/kg）、溶存物質1,000mg/kg、アルカリ性単純温泉は現地 pH 8.5 以上、単純温泉に泉質別適応症あり（2014年7月1日の基準）、強塩泉は Na 5,500・Cl 8,500mg/kg。onsen-type の2本・onsen-quality と食い違いなし。酸性泉・放射能泉・ラジウム塩の数値はこの6本に出てこない。
- ランク（S/A/B/C）表記は6本とも無し（"rank" は「ランク付けしない」という宣言の文だけ）。
- 「源泉かけ流し」: kakenagashi-explained は ONSEN-LABEL の4点（公的な定義なし／日本温泉協会は民間団体／掲示は行っている場合のみ・「なし」と書くのは任意／循環・塩素が衛生上必要な場合がある）と矛盾しない。ただし伊東が協会系サイトの「かけ流し」をそのまま中継している点は ito に書いた。
- 税込: 6本で金額が出るのは道後と下呂のみ。道後の本館の表（表の直前に "prices (tax included)"）・飛鳥乃湯泉（"all prices include tax"）・入浴着 ¥500（including tax）と、下呂の湯めぐり手形 ¥2,500（including tax）は同じ段落に税込の明記あり。例外は道後の椿の湯 ¥10（high）と下呂の旧価格 ¥1,500（mid）。
- 書けない項目（深掘りメモ）: 道後は湧出量・成因・19本と18本の差の理由・日本三古湯の選定主体・3館共通券の価格・タトゥー可否・本場と出先の違いのいずれも書いていない（食い違いは併記）。下呂も源泉総数・成因・84→55℃の理屈・pH 9.2 の出どころ・公衆浴場の入浴料・タトゥー方針を書いていない。伊東も泉質の公的表・按針造船の一次史料・共同浴場の数・入浴料を書いていない。落ちている併記は dogo と gero の各1〜2点（下記）。
- ARTICLE-AUDIT の補足: ito の「効能の断定の可能性」は東海館の沿革（湯治客が団体客に変わった）で誤検出。dogo の「税込不明の金額（¥700, ¥1,300, ¥650）」は表の直前に税込の注記があり表については誤検出（真の該当は椿の湯の ¥10）。dogo の「最上級・順位の断定」("No. 2 ... No. 1") は分湯場の番号で誤検出。gero の ¥1,500 は検出どおり。「食へのリンクなし」は泉質解説3本には地域の重なる eat 記事が無い（areas が japan）ので取り上げない。
- F の照合先（各1本）: co2→nagayu（2026年の計画書の「日本有数」・1991年の「日本一といわれている」は整合）／hydrogen→ureshino（泉質名の3通りの書き分けは整合）／dogo→onsen-shikoku（¥700/¥350/¥2,000 の税込・1894年・596年は整合）／gero→eat/kyodo-ryori-chubu（鶏ちゃん・朴葉味噌は整合。向こうから gero へのリンクあり）／ito→atami（522源泉・19,168L/分・1604年の家康は整合）／kakenagashi→nozawa（ふるさとの湯の記述は整合）。なお CO2 と kakenagashi の間に公衆浴場衛生要領の版の食い違いがある（co2 の F）。

---

## src/content/en/soak/carbon-dioxide-chloride-iron-springs.mdx
- 総評: 数値・適応症の表・公式パンフの引用の帰属は研究メモと一致し、読者に実害のある誤りは無い。弱点は調査経緯の一人称が多いこと、「炭酸と呼ばれる湯の大半は〜」の一般化、本文で名指しした温泉地へのリンク欠落、衛生要領の版の不一致。
- [mid] D — 作業メモ口調が集中する: 「By my own arithmetic, a strong salt spring is at least 14,000 mg/kg … I could not find an official explanation comparing the bands with body fluids.」「The detailed rule for writing iron(II) and iron(III) into a name is more involved than it looks, and I could not reconcile the sources, so I leave it out.」「I did not find one named "simple carbon dioxide spring", though the table as I extracted it was incomplete.」、FAQ「…and I could not find that claim on the Taketa city site.」（ほか "I found no official source" 系が約10か所） — 「公式な比較説明は公表されていない（確認日）」の事実形にし、鉄の命名の文と「表の抽出が不完全」の文は削る（後者は筆者のツールの都合で、読者に判断材料にならない）。
- [mid] A — 「Most water people call carbonated is not named as a carbon dioxide spring.」 — 全国の集計は無く、研究メモ自身が「命名の構造からの整理」としている一般化を事実として言い切っている（長湯の源泉表は抽出が不完全） — 「名前の付け方の上では、塩類泉に "carbon dioxide-containing" が付く形になる水が多い」と根拠（命名規則）を主語にするか、Nagayu と Yufuin の例を添える。
- [mid] F — 「The health ministry's 2019 public bath hygiene guidelines set carbon dioxide in bathroom air at 1,500 ppm or less」 — kakenagashi-explained は同じ要領を「most recently revised on 10 December 2020」と書く。2019年版を引いたまま、2020年12月の改正後も1,500ppmが残っているか不明（要確認） — 現行版（2020-12-10）で数値を照合し、2本の版・日付を揃える。
- [low] A — 「**Below 25°C** a salt spring ends in "cold mineral spring" rather than "onsen".」 — 25℃未満の呼び分けは塩類泉に限らない（同じ頁の "simple iron cold mineral spring"、指針の例 "carbon dioxide-containing, iron(II, III) simple cold mineral spring" は塩類泉ではない） — "a salt spring" を "any spring" に直す。
- [low] D — 看板と突き合わせる読者のために、「Reading the names」の項に日本語の泉質名（二酸化炭素泉・塩化物泉・含鉄泉・含二酸化炭素-）が無い。ローマ字（nisanka-tanso-sen など）だけでは現地の掲示と照合できない — サイトの方針で漢字を使えるなら各項に1回だけ添える。
- 内部リンク候補: /en/soak/nagayu/ （「Places named in official sources」の Nagayu の項。nagayu 側は本稿へリンク済みで、返しが無い）／/en/soak/arima/ （同・Arima の項、金泉・銀泉の泉質名）／/en/soak/noboribetsu/ （「Chloride springs, salt on the skin」の段落。登別の観光協会の英語ページを引いている）／/en/soak/yugawara/ （同・Yugawara の項）／/en/soak/kinosaki/ （同・Kinosaki の項。共通泉質の記述）。

## src/content/en/soak/dogo.mdx
- 総評: 税込の扱いと食い違いの併記（源泉の数・修復の完了日・分湯場）は丁寧で、研究メモの「書けない項目」も書いていない。ただし椿の湯の小額の金額が税込の注記なしで載り、記事自身の「椿の湯の価格は載せない」と矛盾する。説明文が「加温・加水なし」だけを言い切る点も要整理。
- [high] B — 「**Tsubaki-no-Yu.** Buy from the ticket machine inside. Lockers cost ¥10 and the hair dryer ¥10 for three minutes.」 — 金額が税込の明記なしで載っている。同じ記事の後段は「The **Tsubaki-no-Yu** page does not say whether its prices include tax, so I have not given them」と書いており矛盾。研究メモ §7 も英語FAQ由来で「使う場合は再確認」としている（飛鳥乃湯泉の「¥100 coin that is returned」は返却される預り金で価格ではない） — 金額を削り「coin lockers and a coin-operated dryer」に留めるか、税込の記載を確認してから載せる。
- [mid] A — 説明文「Dōgo blends hot and cool sources to about 42°C, unheated and undiluted.」と FAQ「Matsuyama city and the official site say no.」 — ①説明文は帰属が無く、同じ分析表にある塩素系消毒の記載（本文と FAQ の2文目には書いてある）が検索結果の要約から落ちる。②研究メモが「加温も加水もしない」を記録しているのは松山市のページ・パンフ（[5][10]）で、公式サイトの記載はメモで確認されていない（要確認） — 説明文に "per Matsuyama city" と塩素の一言を足す。公式サイトの帰属は原典で確認するか FAQ から外す。
- [mid] A — 「The figures below are from that analysis.」（48.7℃・48.1℃・pH 9.0・0.2734 g/kg ほか） — 研究メモ §1-1 は、数字がスキャン画像を目視で読んだもので、細かい数値を使うなら原本PDFで再照合が必要と注記している。gero は "I read them from scanned images" と明示しているが、道後は無い — 一言添えるか、PDF原本で照合する。
- [mid] D — 調査経緯の列挙が本文に出る: 「I checked the official site's Japanese and English manners pages, its English FAQ, top page, About and Honkan pages, Matsuyama city's FAQ and facility pages, and JNTO.」、ほか「I could not match individual emperors to particular passages」「I give both and do not say whether the water differs」「I have not added these up into door-to-door times」「I did not check whether the highway buses are currently running」（一人称が約25か所）、導入の末尾も "what I could not confirm" — 「公式の日英ページ・市のFAQ・JNTOに方針の記載は無い（確認日）」と結果だけにする。
- [low] A — 「Prices below are from the official main bathhouse page, whose table is headed "prices (tax included)"」 — 研究メモ §3-1 では、この見出しは日本語版のページのもので、英語版（出典に挙げた dogo.jp/en/honkan.php）の料金表には税込の記載が無い（"All prices are tax included" はショップの項だけ） — "the official Japanese page" と書く。
- [low] A — 「In 1966, the centenary of Shiki's and others' births, a third-floor room was set aside as the Botchan Room」 — 漱石と子規はどちらも1867年生まれなので生誕100年は1967年。市のページの転記（メモは 昭和41年＝1966）だが年と理由が合わない（要確認） — 原典で年と理由を照合し、合わなければ「in 1966」だけにする。
- [low] A — 食い違いの併記落ち: 研究メモ §3-4 は、文化遺産オンラインが本館の時代を「明治（1897年）」と表示する一方、解説は明治27年（1894年）と書く点を記録している。記事の「a wooden main building from 1894」には出てこない — 「文化庁の別のデータベースの表記は1897年」と一言添える。
- [low] D — 冒頭で使い道が分からない。「神の湯の階下（¥700、予約不要、最終受付22:30）が基本の入り方」のような結論が表（中盤）まで出ない — 導入の後に3行の要点を置く（金額は税込明記のあるものだけ）。
- 内部リンク候補: /en/soak/onsen-shikoku/ （導入の "the Shikoku overview"。3,000年と三古湯の扱いを譲っている相手）／/en/soak/onsen-water-types/ （導入と Tattoos 段落の "the water types guide"）／/en/soak/kakenagashi-explained/ （導入と "What people get wrong" 2項目目。塩素・加温・加水の掲示の説明先）／/en/eat/rice-sides-takikomi/ （「Food nearby」の tai-meshi。愛媛の2種の鯛めしを扱う系譜ページ）／/en/eat/kyodo-ryori-shikoku/ （同・農水省の愛媛25品の段落）。

## src/content/en/soak/gero.mdx
- 総評: 出典の食い違い（1265年と1489年、84℃と55℃、噴泉池の英語ページ）の扱いが丁寧で、税込も手形 ¥2,500 は守れている。気になるのは旧価格・旧軒数の転記、「要約で読んだ」ことの付記つきの規則の中継、調査経緯口調、リンク0本。
- [mid] B — 「an older city page from 2020 says about 25, alongside a price of ¥1,500 that is out of date」 — 手形の価格が税込の明記なしで載る（古い数字と断ってはいる）。研究メモも「軒数は数字を書かない」としているのに、15・19・25の3つを並べている — 2020年のページの 25 と ¥1,500 は削り、「older pages differ; use the cooperative's current list」とする。
- [mid] A — 「In the summary I read, they also say you may be refused on busy weekends and holidays, family and private baths may not be included, many inns do not let pass holders use their car parks …」、および温泉寺「(which I read in summary, not word for word)」 — 研究メモ §4-3・§3-2 では「取得要約（逐語照合はしていない）」の内容。読者の行動に関わる規則（断られる場合・駐車場）を、要約から読んだと断りながら載せている — 原文で確認できた分（入浴のみ・払い戻し不可・黙浴・入れ墨）に絞るか、確認してから載せる。
- [mid] D — 調査経緯・失敗の記述: 「I could not get a single count.」「I could not find these described as *kyōdōyu*…」「I could not open JR Central's own pages for the *Hida* or its timetable, the local bus company's site gives no Gero routes or times, and the JNTO page I tried for Gero did not open.」（Getting there の末尾）。ほか "I could not find an official English guide to bathing in Gero." など約20か所 — 結果だけを日付つきで（"No official English bathing guide was found (checked 11 Oct 2026)"）、JR・バス・JNTO のページが開けなかった件の段落は削る。
- [low] B — 「He also wrote that those who bathed there felt its effect; that is his view, not evidence of any effect.」 — 林羅山の効能の記述。帰属と打ち消しはあるが、研究メモ §3-3 は「効能の断定になるので記事では使わない。遠方で知られていないと書いた、まで」としている — この節を削る。
- [low] C — 「From 6 September to 26 October 2026 the Nagoya boarding point changes because of the Asian Games.」 — 10月26日で失効する案内。節頭に確認日はあるが、失効後は残る — 失効日以降に削除する（運用メモ）。
- [low] D — 「Public bath prices」の節は、価格を載せない理由だけで、読者が現行料金を見る先（運営会社のページ）を示さない — 「Check the operator's page for current fees」と案内先を添える。
- 内部リンク候補: /en/soak/onsen-water-types/ （導入末尾の "the guide to onsen water types"）／/en/soak/onsen-honshu/ （同・"the Honshu overview"）／/en/eat/kyodo-ryori-chubu/ （「Food」の鶏ちゃん・朴葉味噌の段落。向こうは gero を名指しして「朴葉味噌は Gero の料理ではない」と整合した説明をしている）／/en/soak/hydrogen-carbonate-sulphate-iodine-simple-springs/ （「Spring type and pH」。アルカリ性単純温泉の定義。向こうは gero にリンク済み）。

## src/content/en/soak/hydrogen-carbonate-sulphate-iodine-simple-springs.mdx
- 総評: 閾値（よう化物イオン 1mg と 10mg、pH 8.5、2014年基準の単純温泉の適応症）と湯村・嬉野の泉質名の扱いは研究メモと一致し、読者に実害のある誤りは無い。残るのは調査経緯の口調と、内部リンクの返し。
- [mid] D — 「So, on my reading of the table, "*jūsō*" meant the sodium kind and "*jūtansan-dorui*" the calcium and magnesium kind.」「I could not find a general explanation from the ministry, the Geological Survey of Japan or the Japanese Society of Hot Spring Sciences for how any of these four types forms.」（「Where the water comes from」の書き出し）「I have not resolved the difference.」「I found no official warning about the yellowing staining towels or clothes.」、FAQ「I could not find that warning in the ministry's standard …」（約20か所） — 「4種の成因を一つにまとめた公的な解説は確認されていない（確認日）」と事実形に。旧名の対応は「対照表では〜に当たる」と表の主語に。
- [low] F — 「Shirahama turned salty as heavy pumping from around 1941 drew in seawater」 — carbon-dioxide-chloride-iron は同じ白浜の牟婁の湯を「sulphur-containing sodium chloride strong salt spring at 74.0°C」とだけ書く。両頁を続けて読むと白浜が塩化物泉にも炭酸水素塩泉にも見える。研究メモ（炭酸水素塩）には白浜の町・県のページの食い違いも記録されているが、どちらの頁にも出てこない — 両頁に相互の1文を足す。
- [low] D — pH の液性（"acidic under 3 …"）と酸性泉の泉質（水素イオン 1mg/kg 以上）は別の物差し。酸性泉は別頁で扱うが、この頁の pH 表の近くに "the acidic spring type is defined by hydrogen ion, not pH" の1文があると取り違えない — 該当頁へのリンクつきで一文を足す（導入には同頁へのリンクあり）。
- 内部リンク候補: /en/soak/ureshino/ （「Places named in official sources」の Ureshino の項。ureshino 側は本稿へリンク済みで、返しが無い）／/en/soak/yufuin/ （同・Yufuin の項、単純温泉が大部分の県の研究）／/en/soak/shirahama/ （「Where the water comes from」の Hydrogen-carbonate の項、塩水化の記述）／/en/soak/onsen-hokkaido/ （「Moor: Tokachigawa and Obihiro」「Oil: Toyotomi」の段落。北海道の概観）。注意: 本文の "Kawayu (Wakayama)" を /en/soak/kawayu/ にリンクしてはいけない（kawayu は北海道の川湯）。

## src/content/en/soak/ito.mdx
- 総評: 税込の金額は一つも載せず、県の調査の数字（689・296・30,841L/分・地区別温度）は研究メモと一致し、atami とも整合する。弱点は協会系サイトの「すべてかけ流し」の中継、旧称の説明不足、調査経緯口調。
- [mid] A — FAQ「The tourism association's site says the old shared baths in the town centre all run as kakenagashi, straight from the source」、および「Compared with city baths」の「the shared baths are all *kakenagashi* (tourism association)」 — 帰属はあるが、"straight from the source" は記事側の言い換えで、リンク先の解説自身が「かけ流しに法的定義は無く、加温・加水・塩素の有無は分からない」と述べている。同じ頁の県の数字（利用中の源泉の294/296がポンプ）と並ぶと誤解しやすい — FAQ の言い換えを外し、「加温・加水・塩素の有無は各浴場の掲示で確認」と一文足す。
- [mid] D — 「The cooperative's site says mostly simple springs and weak salt springs, and JNTO, undated, says the same.」 — "weak salt"（弱食塩泉）は旧名で、環境省の新旧対照表では現行のナトリウム－塩化物泉に当たる（co2 メモ A-2）。リンク先の塩化物泉の頁は "Salt spring is not an official type" と書くので、読者には食い違いに見えるうえ、観光協会の「塩化物泉と硫酸塩泉」との差が旧称のせいかどうか分からない — 旧称である旨と現行名を一言添える。
- [mid] D — 調査経緯の記述が本文に出る: 「The tourism association's souvenir page has a heading, "Itō's speciality dried fish", with nothing beneath it.」「Its access page could be read only in its summary line」「I could not open JR East's pages.」「I could not open a prefectural or national source on the shipbuilding.」「The tourism association's English address returned Japanese text when I opened it」 — 干物の段落は読者に何も伝えない（見出しだけで中身無し）ので削る。アクセスは「確認できた最短所要は〜（観光協会の案内文による）」と事実形に。
- [low] A — 説明文「689 sources on the prefecture's count」 — 689 には枯渇63・埋没32・不使用298が含まれ、利用中は296。説明文だけ読むと稼働源泉と取れる — "689 listed sources, 296 in use" とする。
- [low] A — 「**"Itō's heat comes from Mount Ōmuro and the active East Izu volcanoes."** The geopark names three old volcanoes, Yugawara, Taga and Usami.」 — 誤解の否定が「正解は3火山」と読めるが、本文は「ジオパークは湯になる仕組みを説明していない」と書いている — 「ジオパークは3つの古い火山の恵みとするが、仕組みの説明はない」に合わせる。
- [low] D — 節の見出し「What it is eaten with」の中身は、みかん・橙（正月飾り）・イルカの味噌煮などで、橙は食べない。本文自身が「温泉の料理とは呼ばない」と断っている — 「Local food in Itō city」などにする。
- [low] C — 竹あかりの点灯時間（「18:00 to 22:00, or from 17:30 from 1 October」）、東海館の休館日、按針祭の日程に確認日の併記が無い（確認日があるのは Getting there の節頭だけ） — 各所に「（観光協会の案内、2026-10-12確認）」を添える。
- 内部リンク候補: /en/soak/yugawara/ （「The volcanoes」の Yugawara。同名の火山の頁の湯河原温泉）／/en/soak/shuzenji/ （導入。同じ伊豆半島の温泉地）／/en/eat/shun-autumn-winter/ （「Mikan」の段落。旬の記事でみかんを扱う）／/en/eat/seasonal-new-year/ （「Daidai」の段落。正月飾りの橙。同頁が橙に触れているか要確認）／/en/soak/onsen-honshu/ （導入。東海の概観）。

## src/content/en/soak/kakenagashi-explained.mdx
- 総評: ONSEN-LABEL の整理（公的定義なし、協会は民間団体、掲示は行っている場合のみ、循環・塩素は衛生上必要な場合がある）と一致し、ランクも価格も無い。弱点は「定義なし」の言い切りと、看板を読む読者のための日本語の語が無いこと、リンク0本。
- [mid] A — 見出し「### No legal definition」と FAQ「There is no legal definition.」 — 本文の2段落あとで「This is a limited finding: I read the laws in summary, not word for word, and absence is hard to prove.」と断る。ONSEN-LABEL §6 も施行規則10条の逐語照合は未了としている。見出しと FAQ は断りなしの断定 — 「No legal definition found」とし、「（法令は要約で確認、逐語照合は未了）」を FAQ にも添える。「"free-flowing" is not one of the items」「I confirmed in summary that the current article has the same four items」も同じ扱い。
- [mid] D — 「Reading the sign」の4項目は ローマ字（kasui、kaon、junkan、shōdoku）だけで、実際の掲示に出る語（加水・加温・循環・消毒、源泉かけ流し）が無い。読者が現地で突き合わせられるのは日本語の語 — サイトの方針で可なら、4項目と見出しの語に日本語を併記し、掲示の例文を1つ添える。
- [low] D — 導入「is one of the most prized phrases on a Japanese onsen sign or website. It is also one of the least explained in English.」「I could not find a JNTO, tourism agency or environment ministry guide …」 — 最上級が根拠なし（"least explained" は筆者の探索結果だけ） — 「英語の公式案内（JNTO・環境省の2019年の英語冊子、確認日）には説明が無い」と事実形に。
- [low] C — 「In English」の節「Neither of the two JNTO onsen pages I checked mentions …」「The English guides I checked do not explain any of this.」 — 他サイトの内容は変わるのに確認日が無い（frontmatter の pricesCheckedOn: 2026-10-10 だけ） — 本文に「as of 10 October 2026」を添える。
- [low] A — 「In 2015 the consumer agency ordered an inn operator to correct advertising …」 — 出典のラベルは「公正取引委員会 報道発表 景品表示法に基づく措置命令（温泉表示）」（jftc.go.jp）。景表法の措置命令は2009年以降消費者庁の所管のため、本文かラベルのどちらかが誤っている可能性（要確認） — 原典で機関名とURLを照合する。
- 内部リンク候補: /en/soak/onsen-water-types/ （「Reading the sign」1項目目の "the separate piece on onsen water types"。平文のまま）／/en/soak/beppu/ （「Who does define it」の Beppu city の4語と onsen karute の段落）／/en/soak/ureshino/ （「In English」の Ureshino の足湯。ureshino 側は本稿へリンク済み）／/en/soak/nozawa/ （同・ふるさとの湯。nozawa 側も本稿へリンク済み）／/en/soak/acidic-sulphur-radioactive-springs/ （「Why chlorine is not always used」の低pHの水が塩素で有毒ガスを出す記述）。

---

## このバッチ全体の共通傾向（まとめて直せるもの）
- 全6本で「I could not find / I found no / I did not check」の調査経緯口調が各15〜25か所（道後・下呂は開いたページの列挙まで）。「〜は確認できなかった（確認日）」の事実形にする一括の見直しで直る。
- 本文リンクがほぼ無い（道後・下呂・かけ流し解説は0本）。nagayu・ureshino・nozawa・kyodo-ryori-chubu は本稿へリンクしているのに、本稿から返していない。既存の「see the guide to …」の平文参照をリンク化するだけで足りる。
- 税込は概ね守れている（例外は道後の椿の湯 ¥10 と下呂の旧価格 ¥1,500）。価格の無い4本（co2・hydrogen・ito・kakenagashi）の `pricesCheckedOn` は意味が薄い。
