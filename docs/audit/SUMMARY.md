# 公開済み記事の見直し・まとめ（2026-10-13）

**対象**：公開済み238本（draft を除く）。機械チェックを全件、AI の読み込みチェック（軽いチェック）を優先86本（品目ハブ39・温泉の地域編/泉質編・機械チェックの上位）で実施。
**記事は編集していない。** 指摘のリストを作っただけで、直すのは執筆専任チャット。
**詳細**：記事ごとの指摘は `docs/audit/batch-01.md`〜`batch-14.md`（各記事に重要度つき・引用つき・改善案つき・内部リンク候補つき）。機械チェックの結果は `docs/ARTICLE-AUDIT.md`（誤検出を含む）。手順は `docs/audit/CHECKLIST.md`、ツールは `tools/audit-articles.mjs`。

## 件数

| 重要度 | 件数 | 意味 |
|---|---|---|
| high | 70 | 読者に誤りや実害の可能性／方針違反 |
| mid | 441 | 直した方が良い |
| low | 269 | 好み・軽微 |

high が多いのは、和牛（バッチ9・10で計30）、ラーメン（バッチ5で8）、バッチ1（市場コラム・chicken・conbini）。温泉の記事は high が少ない（バッチ12〜14で計3）。

## 1. 一度直せば広く効くもの（サイト側・共通）

優先度が高い順。**記事を1本ずつ直す前に、先にここを直すと効率が良い。**

1. **`<DishPrices>` の出力に税込と確認日が出ない。** チェーン行の「tax not stated」も表示されず、税込の記載がない価格が画面に出る（conbini、sweets、teishoku、sushi、unagi など）。`chain.json` に「Tax is not stated on the lunch menu」があるのに出力に反映されない
2. **`<DishPrices keys={[...]}>` の keys が記事の内容と合っていない。**
   - 回転寿司用 `sushi-kaiten` が、鯖寿司（sushi-saba）・柿の葉寿司（sushi-kakinoha）・大阪箱寿司（sushi-osaka-hako）に流用されている
   - 神戸牛でない浅草の `wagyu-lunch/dinner`（Matsunami）が wagyu-kobe に出る
   - 米国産牛の食べ放題を含む `sukiyaki`/`shabu` が wagyu-omi と wagyu-shabu に出る
   - `parfait`/`crepe`（sweets）、`famires-lunch`/`wa-breakfast`（teishoku）、`unaju`（unagi）にも同種の疑い
   - 対応：keys を記事ごとに見直す。流用しない
3. **`RateNote` が、運賃を載せていない記事にも "Fares verified …" を出す。** 本文の「Fares and travel times are not on this page yet」と矛盾する。`basis: researched` の食・温泉の記事のほとんどに出る。運賃のある記事（rail、一部の温泉）だけに出す条件にする
4. **「Read next」が同じカテゴリの中からしか選ばれない。** `src/lib/content.ts` の `relatedOf` は食→食、温泉→温泉。**食と温泉を結ぶ方針なのに、サイトの仕組みでは結ばれない。** 本文に手書きされた `/en/` リンクがある記事は238本中42本。**温泉29本は食へのリンクが0本。** 対応案：`relatedOf` に、地域（`areas`）が重なる別カテゴリの記事を1枚入れる。加えて、各記事の「内部リンク候補」（バッチファイルにある。1記事あたり最大5つ）を本文に入れる
5. **作業メモ口調が公開本文に残っている**（約62本）。"I could not find …"、"not on this page yet"、"I saw a search summary claiming …"（eat/chicken.mdx、food-shopping-depachika.mdx）など。読者には情報にならず、サイトの信頼を下げる。「確認できなかった」の定型の1文に集約するか、削除する
6. **2027年4月の消費税1%案に触れていない。** 8%（持ち帰り）前提の記事が約30本で、触れているのは conbini と reading-menu-prices のみ。成立前の予定なので、共通の注記（日付つき・留保つき）を1か所に置き、該当記事から参照する

## 2. サイト内の方針の割れ（先に決める）

- **税込の明記がない金額の扱い。** 方針は「税込が確認できたものだけ載せる」だが、運用が割れている。
  - 載せない側：eat/market、eat/market-omicho-hakodate、soak/ureshino、soak/dogo（椿の湯）など
  - 「税込不明」と書いたうえで金額を載せる側：eat/ramen-iekei、ramen-kitakata、ramen-sapporo、ramen-tokyo-shoyu、ramen（ハブ）、sake、sake-nada-fushimi、seasoning、soba、gyoza、gyoza-hamamatsu、wagyu 6本（ハブ・kobe・omi・shabu・sukiyaki・yakiniku）、udon、udon-sanuki、column/tourist-prices-at-famous-markets、rail の2本
  - 選択肢：**(A)** 税込が確認できない金額は全て外す（方針どおり）／**(B)** 載せるときは「税込の明記なし」を同じ段落に必ず書く。(A) が方針に一致する。(B) にするなら CHECKLIST と HANDOFF の方針文を変える
- **`tourist-prices-at-famous-markets`（コラム）。** 個人ブログ2本（ameblo）と実見だけを根拠に、実名の市場の丼価格（¥4,000–5,000）を一般化している。FAQ の「below ¥2,000 in most of the country」は出典なし、同記事の「no official figure」と自己矛盾。動機の示唆と優劣の断定もある。サイトの市場記事（eat/market など）は「税込が確認できないので丼の価格は載せない」と書いており、割れている。**書き直すか、非公開にするかの判断が要る**

## 3. 事実の誤り・食い違いの疑い（記事を直す前に原典で確認）

**確実に誤りと言えるもの**
- eat/wagyu-omi：「1771年に将軍 Ienari へ献上」。家斉の将軍就任は1787年、1771年の将軍は家治。人名か年が誤り
- eat/donburi：かつやの持ち帰り価格を「take と matsu は dearer（¥853・¥1,069）」と書くが、店内（¥869・¥1,089）より安い。店内10%・持ち帰り8%の税率差と一致する。吉野家 ¥498 が店内価格で持ち帰りは ¥489 であることも本文にない
- eat/wagyu-sukiyaki：description と末尾で「1867–68年の翌年に天皇が牛肉を食べた」と書くが、本文は1872年
- soak/onsen-kyushu：黒川の泉質を「Neither gives a spring name that I could find」と書くが、kurokawa.mdx は計画書どおりに訂正済み（塩化物・硫酸塩泉と単純泉）
- eat/ramen-iekei と `ramen.json`：「I have watched at every counter」という運営者の実体験の主張（根拠なし）

**記事間の食い違い（どちらかを直す）**
- wagyu の4本：ハブの「Ōmi は1687年から献上」と wagyu-omi（1687は製法、献上は1771）／ハブの「Jojoen は Fukuoka の店」と wagyu-yakiniku（東京の店）／Imahan の ¥13,530 を FAQ とハブで "top" と書くが、本文には ¥18,920 がある／wagyu-kobe の「安い部位はサーロインの1/4」が Mōriya の価格（約0.37〜0.43倍）と合わない／wagyu-sukiyaki と seasoning-egg の生卵の安全性の言い方
- eat/udon-sanuki：「Kagawa 発祥のチェーン」に Marugame を入れるが、同記事が Marugame の1号店は兵庫（加古川）と書く。「麺で唯一の書面基準」は somen-miwa（GI と等級あり）と食い違う
- eat/ramen・ramen-tokyo-shoyu：つけ麺の起源を「1955年・Marucho 系・Nakano」の一つに決めているが、ramen-tsukemen は「This site does not choose」と書く
- eat/ramen-kitakata：「三大ラーメン」を喜多方・白河・米沢の組合せで書く疑い（一般には札幌・博多・喜多方とされる。要確認）
- eat/nabe：八丁味噌の団体が2つある理由を「分からない」と書くが、nabe-miso と nabe 自身の sources が答えている
- eat/kyodo-ryori：FAQ「ラーメンは郷土料理か」が、秋田記事の「Kosaka-machi katsu ramen」認定と食い違う
- eat/sake と sake-nada-fushimi：添加アルコールの上限、hiyaoroshi の定義が食い違う
- eat/seafood：本文の一覧が公開済みの系譜6本のうち4本。seafood-oyster-crab と seafood-saba-katsuo-maguro が本文のどこにも出ない
- eat/ramen（ハブ）：「five lineages written so far」のまま。公開済みは10本
- eat/seasoning：ハブが「蔵の価格は shoyu ページにある」と書くが、shoyu 側には価格が無い
- soak/onsen-hokkaido と onsen-honshu：北海道編は「ahead of Nagano's 193 and Fukushima's 122」だが、本州編は2位 Nagano 193 の次を Niigata 135 とする。登別の「十種」が noboribetsu.mdx の整理とずれる
- soak/onsen-water-types：内訳の合計が27,900で、総数27,899と1合わない（要確認）
- soak/co2 と kakenagashi-explained：同じ公衆浴場衛生要領を「2019年版」と「2020年12月改正」で引いている。1,500ppm が改正後も残るか要確認
- soak/nyuto：FAQ「Anyone can buy the one-day bus pass」と誤解リストが2020年版の市パンフだけで言い切る。組合の現行ページは宿泊者限定。題名の「seven sources」は本文の18源泉と食い違う
- rail/kansai-12-days-setouchi：パス失効後の日11（松山から関西へ戻る最長移動）なのに「all of the expensive movement inside the seven days」と書く。道後を「Covered」とするのは soak/dogo の記述（市電20〜30分）と合わない。rail 3記事で「買う閾値」が不一致（2か所以上／3か所以上／more than twice）
- rail/kix-to-hiroshima：題名で「パスが元を取る点」を約束するが計算が無い。新大阪〜広島の新幹線運賃・所要が未出典のまま「the comparison is already over」と言い切る
- soak/ureshino：湯どうふの由来で市の説（江戸時代）が落ち、武雄市の1826年・剣の柄の話が sources に無い

**断定表現（選定主体・出典を足すか、弱める）**
- eat/wagyu-omi の題名「the oldest beef in Japan」と冒頭の「the best story of the three great names」／wagyu-kobe の「the strictest beef certification in Japan」／wagyu-shabu の「wagyu reduced to its simplest form」／udon-sanuki の「the one noodle in Japan with a written standard」
- eat/sushi-saba：家計調査の順位と「saba-zushi is a large part of why」の因果は出典がない
- eat/udon：FAQ の「¥1,000 and up at a sit-down shop in a city」に根拠がない
- eat/wagyu：「rank beef the most satisfying thing … ahead of sushi by a factor of two」の出典（観光庁の調査）が sources に無い

## 4. 機械チェックの誤検出（直さなくてよいもの）

- 「cure」＝塩締め・酢締めの意味（sushi-kakinoha、sushi-saba、wagyu-omi の miso cure）。「cure」＝温泉の「効く」の意味ではない
- ¥10,000／¥5,000／¥1,000 は券売機の紙幣の額面（how-meal-ticket-machines-work）
- 世帯の年間支出額（gyoza-hamamatsu の ¥4,051、sushi-osaka-hako の ¥16,839）は価格ではない
- soak/kawayu の「ランク混入」は火山の "rank C" で、S/A/B/C の優劣表記ではない（ただし何の尺度か書いていない）
- 「内部リンクなし」の機械チェックは、`LineageTable` が出す系譜へのリンクを数えていない

## 5. 費用

- 軽いチェックは14バッチ（86本）で約3,630,000トークン。1バッチ約190,000〜390,000、1記事あたり約42,000（目安の30,000を超えた）
- 超過の理由：記事の全文読み込みに加えて、記事ごとに関連記事・調査メモ・built HTML を開く照合を入れたため。指摘の質は高く、他では拾えない食い違い（記事間の矛盾、人名と年の不整合）が見つかったのは、この照合のおかげ

## 6. 直す順序の提案

1. **共通コンポーネント**（§1の1〜3）：DishPrices の税込・確認日の表示と keys の見直し、RateNote の条件。これで約30本の high が一気に減る
2. **方針の決定**（§2）：税込の扱いを (A)/(B) のどちらにするか、`tourist-prices-at-famous-markets` を書き直すか
3. **確実な誤り**（§3の最初の5項目）と、和牛6本・ラーメン5本の高い指摘
4. **内部リンク**（§1の4）：`relatedOf` の変更案＋各記事の候補の挿入
5. **作業メモ口調の一掃**（§1の5）：一括の編集（語句の検索で拾える）
