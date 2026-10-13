# 食コンテンツの系譜ギャップ分析（確認日 2026-10-13、読み取り専用）

LINEAGE-MAP の「ジャンル別の地図」A〜M の「系譜ページの候補」を、実在するファイルで照合した。Web 検索はしていない。判断に迷うものは「要確認」と書いた。

## 0. 前提の数（ファイル名と frontmatter から数えた）

| 項目 | 本数 | 内訳・根拠 |
|---|---|---|
| 記事（`src/content/en/eat/*.mdx` + `column/*.mdx`） | **187** | eat 171 + column 16 |
| うち公開（`draft: false`） | 186 | `draft: true` は column の `how-japanese-rice-is-actually-cooked.mdx` の1本 |
| eat の内訳 | 品目ハブ 39（`kind: dish`）＋系譜 132（`kind: lineage`） | 系譜の数は `src/data/lineages/*.json` の published 131 + izakaya の `otoshi`（JSON 外、記事のみ）= 132 で一致 |
| 系譜 JSON の `planned`（準備中）| **61** | 39 ファイル中。リンクの無い表示名だけの系譜 |
| 調査メモ（`docs/research/**/*.md`） | **90** | 直下 75 + `onsen-town/` 15 |
| うち食・作法のメモ | **53** | 直下 75 のうち `onsen-*` の 22 を除いた数。内訳：県別郷土料理 9（`kyodo-*`）、コラム用 5（`chopsticks-table` `manners` `queue-slurp` `dietary` `reservation-payment`）、品目・小品 39 |

注意（実在の確認で分かったこと）
- **ラーメン・うどん・そばのハブと系譜（計 29 本）には、`docs/research/` に対応する調査メモが無い**。メモがあるのは寿司（`sushi-`）と牛肉（`beef-`）のみで、これも「執筆済み・素材使い切り」。したがってラーメン・うどん・そばの planned は、素材が他メモの1項目として散っているか、無いか。
- `HANDOFF-CHAT.md` の「公開 36 本」は古い記述（現在は記事 187 本）。
- 記事化されたメモの素材は「使い切り」扱い。下の b は、**記事がまだ無い**もののみ。

### 状態の記号
- **a**：記事がある（ファイル名を根拠に書く）
- **b**：調査メモに専用の節・項目があり（出典つき）、記事は無い
- **b△**：他メモ（主に `kyodo-*` の県別メモ）に1項目あるだけ。農水省ページ1本程度で、単独の系譜ページには薄い
- **c**：記事も調査メモも無い（通り過ぎる言及のみを含む）
- **除**：既出メモが「出典が取れなかった／未確認」と明記しているので、調査の優先から外す候補

メモ名は `-2026-10-xx` を省略して書く（例：`soup-nabe` = `soup-nabe-2026-10-10.md`）。

---

## 1. ハブ別の表（地図の「系譜ページの候補」と状態）

### A. 麺（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| ラーメン | 博多／久留米／熊本／鹿児島／喜多方／札幌／横浜家系／東京醤油 | a | `eat/ramen-{hakata,kurume,kumamoto,kagoshima,kitakata,sapporo,iekei,tokyo-shoyu}.mdx` |
| ラーメン | 函館（塩）、旭川（醤油） | b△ | `kyodo-hokkaido-sanin-shikoku` の農水省「ラーメン」項に1段落（札幌味噌・函館塩・旭川醤油、1884年の函館「南京そば」）。JSON は planned |
| ラーメン | 尾道、徳島、和歌山、富山ブラック、燕三条、白河、米沢（地図外・JSON にあり）| c | JSON planned。`kyodo-*` は徳島・和歌山・富山ブラックを「農水省の一覧にない」と記すのみ（`kyodo-kinki` `kyodo-hokuriku` `kyodo-hokkaido-sanin-shikoku`） |
| ラーメン | 高山、天理、京都（背脂・鶏白湯） | c | メモ・JSON ともに無い |
| ラーメン | 台湾ラーメン（名古屋） | c（公的資料は薄い見込み） | `kyodo-chubu` が「一覧にない」と記すのみ |
| ラーメン | 二郎系 | 除 | JSON planned。`donburi` `tonkatsu` メモに語が混じるだけで、一次資料の足がかりが無い |
| ラーメン | インスタント（日清の歴史） | c／要確認 | メモ無し。`ramen.mdx` の出典に日本即席食品工業協会のページ2本があるが、本文で1958年・1971年まで扱っているかは未確認 |
| つけ麺 | 東池袋大勝軒、六厘舎系、三田製麺所 | a | `eat/ramen-tsukemen.mdx`（素材は `noodles-mid` の B） |
| うどん | 讃岐／博多／大阪 | a | `eat/udon-{sanuki,hakata,osaka}.mdx` |
| うどん | 味噌煮込み（名古屋）| b | `kyodo-chubu`（農水省ページ・100年フード）、`soup-nabe` の味噌節。JSON planned |
| うどん | 吉田（山梨）、伊勢、水沢（群馬）| b | `kyodo-chubu`（吉田は専用の見出し）、`kyodo-kinki`（伊勢は専用段落、参宮客の話）、`kyodo-kanto`（群馬のうどんの中。伊香保との温泉接点あり）。JSON planned |
| うどん | 五島 | b△ | `kyodo-kyushu`（地獄炊き）、`dashi`（あご）、100年フード令和6。JSON planned |
| うどん | 稲庭 | c | `kyodo-ryori` にアンテナショップの土産の例として出るだけ |
| うどん | 氷見、カレーうどん | c | カレーうどんは `rice-curry` に語が出るだけ。氷見は無し |
| うどん（地図外で既出）| きしめん／ほうとう／だご汁 | a | `eat/udon-{kishimen,hoto,dagojiru}.mdx` |
| そば | 江戸／出雲／戸隠／わんこ | a | `eat/soba-{edo,izumo,togakushi,wanko}.mdx` |
| そば | へぎ（新潟）、越前おろし | b | `kyodo-hokuriku`（へぎはふのりとの関係、農水省と文化庁の言い方。越前は専用の節）。JSON planned |
| そば | 年越しそば | b | `events-kids-minor`（12月31日）、`seasons`。JSON は seasonal の `omisoka` が planned |
| そば | 立ち食いそば | c | JSON planned。`soba-edo.mdx` が立ち食いの帳場に触れる。`yatai` メモが江戸の立ち食いに触れる。専用の素材は無い |
| そば | 信州、茶そば、深大寺（JSON） | c | `kyodo-chubu` `kyodo-setouchi` の通りがかりのみ。深大寺は無し |
| 焼きそば | 富士宮／横手 | a | `eat/yakisoba-{fujinomiya,yokote}.mdx` |
| 焼きそば | 太田、焼きそばパン | b | `noodles-mid`（B の太田節・パン節）、`yoshoku-chuka-pan` |
| 焼きそば | 塩焼きそば、あんかけ（北海道・長崎皿うどん）| c（皿うどんは a） | あんかけは `eat/champon-sara-udon.mdx` で a。塩焼きそばは無し |
| ちゃんぽん | 長崎、皿うどん | a | `eat/champon.mdx`（ハブに起源）、`eat/champon-sara-udon.mdx`。JSON の `nagasaki` は planned だが、ハブが実質カバー |
| ちゃんぽん | 小浜、リンガーハット、天草 | 小浜 b△／他 c | 小浜は `noodles-mid` `kyodo-kyushu` `seafood-mid` に語のみ。JSON planned |
| 素麺 | 揖保乃糸・三輪 | a | `eat/somen-{banshu,miwa}.mdx` |
| 素麺 | 小豆島、流しそうめん | 除／c | 小豆島は `noodles-minor` が「検索要約でしか確認できず未確認」。流しそうめんは無し |
| きしめん・ほうとう・だご汁 | — | a | 上記3本 |
| 冷やし中華 | — | a | `eat/ramen-hiyashi-chuka.mdx` |

### B. 米・丼・寿司（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 寿司 | 江戸前／大阪箱／ます寿司／柿の葉／鯖寿司／なれずし（鮒鮨）／回転寿司／金沢 | a | `eat/sushi-*.mdx`（8本） |
| 寿司 | ちらし・巻（太巻・恵方巻） | a△ | `eat/seasonal-hinamatsuri.mdx` `seasonal-setsubun.mdx` `kyodo-ryori-kanto.mdx` が触れる。専用の系譜ページは無い |
| 寿司 | いなり | b△ | `kyodo-*`（秋田・山梨・関東・九州・東北）に項目、愛知は100年フード「豊川いなり寿司」（`kyodo-chubu`）。単独の素材は無い |
| 寿司 | 立ち食い、スーパーのパック | c | 無し |
| 寿司 | 高級店の値段の仕組み | a△ | `eat/sushi-edomae.mdx`（同じ店の昼夜の値段） |
| 寿司 | 寿司の食べ方（M にもある） | b | `sushi` メモ。column に該当記事が無い。HANDOFF が「新規調査は不要の見込み」と記す |
| 丼 | 牛丼／カツ丼 | a | `eat/donburi-{gyudon,katsudon}.mdx` |
| 丼 | 豚丼（帯広）| b | `donburi` `meat-minor` `kyodo-hokkaido-sanin-shikoku`（十勝川温泉との接点）。JSON planned |
| 丼 | ソースカツ丼（福井・駒ヶ根）| b | `kyodo-hokuriku`（100年フードの専用段落）、`donburi`（駒ヶ根）。地図は `bkyu` にも載せる |
| 丼 | 新潟のタレカツ丼 | c | JSON planned。`タレカツ` の語はどのメモにも無い |
| 丼 | 親子丼（人形町）、天丼 | b△ | `donburi` `chicken` に語。天丼は農水省の天ぷらページの記述（`monja-bkyu-fry` [16]） |
| 丼 | 海鮮丼（観光地価格）| a△ | `eat/market.mdx` `market-omicho-hakodate.mdx`、column `tourist-prices-at-famous-markets.mdx` |
| 丼 | 鉄火丼、ステーキ丼、ローストビーフ丼 | c | 語がどこにも無い |
| 鰻 | 関東／関西（ひつまぶし含む）| a | `eat/unagi-{kanto,kansai}.mdx` |
| 鰻 | 柳川せいろ蒸し | b△／要確認 | `unagi` に1段落（1681年、100年フード令和3）。「独立史料は取れず」と明記。JSON planned |
| おにぎり | コンビニ、地域差 | a | `eat/conbini-onigiri.mdx` `rice-onigiri.mdx` |
| 米そのもの | 品種・値段・炊き方 | a | `eat/rice.mdx`、column `how-japanese-rice-is-actually-cooked.mdx`（draft） |
| 炊き込み・釜飯 | 鯛めし・釜飯・とりめし | a | `eat/rice-sides-takikomi.mdx` |
| 炊き込み | めはりずし | b | `kyodo-kinki`（専用段落）、`rice-curry`。JSON `rice` に planned |
| 駅弁 | — | a | `eat/food-shopping-ekiben.mdx` |
| カレーライス | 海軍／金沢／ココイチ／カツカレー | a | `eat/rice-curry.mdx`（1本にまとめて記載）|
| カレーライス | スープカレー（札幌）| b△ | `kyodo-hokkaido-sanin-shikoku`（100年フード未来部門・令和7）。欧風カレー（神保町）は c |
| 餅・赤飯 | 雑煮の地域差 | a | `eat/rice-sides-mochi.mdx` |

### C. 肉（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 和牛 | 神戸／松阪／近江／但馬／米沢 | a | `eat/wagyu-{kobe,matsusaka,omi,tajima,yonezawa}.mdx` |
| 和牛 | 飛騨・宮崎・佐賀・前沢・仙台 | c／要確認 | 飛騨牛は `kyodo-chubu` の「単独項目なし」のみ。ハブ `wagyu.mdx` が一覧に触れているかは未確認 |
| すき焼き／しゃぶしゃぶ／焼肉／ステーキ・鉄板焼 | — | a | `eat/wagyu-{sukiyaki,shabu,yakiniku,steak}.mdx` |
| とんかつ | 味噌カツ、串カツ | a | `eat/tonkatsu-{miso-katsu,kushikatsu}.mdx` |
| とんかつ | 上野・ぽん多・煉瓦亭、黒豚、カツサンド、かつや | a△／b△ | ハブ `tonkatsu.mdx`（煉瓦亭・ぽん多）、`meat-pork`（黒豚）、`tonkatsu` メモ（かつや価格）。カツサンドは c |
| 焼鳥 | 部位・タレと塩・東松山／美唄／今治 | a | `eat/izakaya-yakitori.mdx`（「焼鳥が鶏でない町」まで書いてある）。やきとんは要確認 |
| 唐揚げ | 中津・宇佐、ザンギ、竜田揚げ、チキン南蛮、手羽先 | 唐揚げ a／他 b△ | `eat/chicken-karaage.mdx`。チキン南蛮・とり天は `chicken` `kyodo-kyushu`（JSON `toriten` planned）、ザンギは `kyodo-hokkaido-sanin-shikoku`、手羽先は `kyodo-chubu`（単独項目なし）|
| 鶏 | 地鶏の規則・水炊き | a | `eat/chicken.mdx` `chicken-mizutaki.mdx`。せんざんき（今治）は b△（`chicken` `izakaya` `kyodo-setouchi`）|
| 豚 | 黒豚・豚丼・角煮 | a | `eat/meat-pork.mdx` |
| もつ・ホルモン | もつ鍋、ホルモン焼き | a | `eat/meat-horumon.mdx`。せんじがら（広島）は c |
| ジンギスカン | 北海道 | a | `eat/meat-jingisukan.mdx`。長野（信州新町）は要確認（`meat-minor` にラム・マトンの節はあるが長野は未確認）|
| 馬・鹿・猪 | 馬刺し | a | `eat/meat-basashi.mdx` |
| 馬・鹿・猪 | ジビエ（鹿・猪）| b | `meat-minor`（衛生ルールのみ。ぼたん鍋・もみじ鍋の食べ方は「出典不足で書けない」と明記）。JSON planned |
| 馬・鹿・猪 | 桜鍋、鯨の歴史 | b△／c | 桜鍋は `kyodo-*` `monja-bkyu-fry` に語のみ。鯨は `sashimi` `kyodo-*` に語のみ |

### D. 魚介（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 刺身と魚の名前 | 出世魚、〆 | a | `eat/sashimi-{shusse-uo,shime}.mdx` |
| 刺身と魚の名前 | かつおのたたき（高知）| b△ | `seafood-mid`、`kyodo-hokkaido-sanin-shikoku`。`eat/seafood-saba-katsuo-maguro.mdx` が高知のたたきを含むので、JSON `tataki` は a△ の可能性（要確認）|
| 市場と時価 | 豊洲／函館 | a | `eat/market-{toyosu,omicho-hakodate}.mdx` |
| 市場と時価 | 金沢近江町、唐戸 | b△ | `market-kaisendon`（近江町）、`seafood-minor`（唐戸は語のみ）|
| 牡蠣・蟹 | 広島、的矢、厚岸、ズワイのブランド | a | `eat/seafood-oyster-crab.mdx`（1本にまとめ）|
| 鯖・鰹・鮪 | しめ鯖、若狭、鰹節、大間、本鮪 | a | `eat/seafood-saba-katsuo-maguro.mdx`。関鯖（大分）は c |
| 鮭・いくら／河豚／穴子・鱧／干物 | — | a | `eat/seafood-{salmon,fugu,anago-hamo,himono}.mdx` |
| 練り物（かまぼこ・ちくわ）| — | b | `seafood-minor` の D 節。JSON planned |
| 海藻（昆布・海苔・もずく）| 昆布／海苔・わかめ・もずく | b | `seafood-minor` の D 節、`dashi`（昆布ロード）。JSON は `kombu` `seaweed` planned |

### E. だし・汁・鍋（★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| だし | 昆布と鰹、いりこ・あご | a | `eat/dashi-{east-west,iriko-ago}.mdx`。椎茸・顆粒だしは `dashi` ハブ止まりで c／a△ |
| 味噌汁と味噌 | 赤・白・合わせ・麦 | a | `eat/nabe-miso.mdx` |
| おでん | 関東・関西・静岡・金沢・姫路 | a | `eat/nabe-oden.mdx` `conbini-oden.mdx` |
| 鍋 | ちゃんこ、石狩鍋、牡丹鍋（丹波篠山）| b | `soup-nabe` の鍋1〜3節。JSON planned |
| 鍋 | きりたんぽ | a | `eat/kyodo-ryori-akita.mdx` |
| 鍋 | あんこう、湯豆腐 | b△ | `kyodo-kanto` `kyodo-kinki` `soup-nabe` に語 |
| 汁物 | 豚汁・けんちん・だんご汁・のっぺ・しじみ | b | `staples-minor` の C。だんご汁は a（`eat/udon-dagojiru.mdx`）。JSON `shiru` planned |

### F. 和食の構造と郷土料理（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 一汁三菜と定食 | 構造・おかわり | a | `eat/teishoku.mdx` |
| 朝食 | 和朝食、モーニング | a | `eat/teishoku-{washoku-breakfast,morning}.mdx` |
| 懐石と会席／精進料理 | — | a | `eat/kaiseki-{tea,shojin}.mdx` |
| 懐石と会席 | 本膳料理 | b | `kaiseki-shojin-bento`（室町、京都市資料、農水省冊子）。JSON planned |
| 弁当 | 幕の内、仕出し | b | `kaiseki-shojin-bento`（C 節）。JSON `bento` planned |
| 郷土料理 | 47都道府県 | a | `eat/kyodo-ryori-*.mdx`（12本）。地図の優先の順（瀬戸内→九州→東北→北陸）は完了 |
| 発酵と調味料 | 醤油／卵 | a | `eat/seasoning-{shoyu,egg}.mdx` |
| 発酵と調味料 | 酢、みりん | b | `ferment-egg` の A（農水省図鑑の記述）。JSON planned |
| 発酵と調味料 | 納豆・漬物・豆腐 | a | `eat/rice-sides-{tofu-natto,tsukemono}.mdx` |
| 発酵と調味料 | くさや、酒粕 | c | 無し（酒粕は語のみ）|

### G. 粉もの・B級・屋台（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| お好み焼き／もんじゃ／たこ焼き | — | a | `eat/konamono-{okonomiyaki,monja,takoyaki}.mdx` |
| 餃子 | 宇都宮／浜松 | a | `eat/gyoza-{utsunomiya,hamamatsu}.mdx` |
| 餃子 | 神戸の味噌だれ、博多の一口餃子、王将、羽根つき | 神戸 b△／一口 除／王将 b△／羽根 c | `gyoza`（一口餃子は「元祖・引揚港との関係は未確認」）。`kyodo-kinki`（神戸）。羽根つきは無し |
| ご当地B級 | B-1、コロッケ | a | `eat/bkyu.mdx` `bkyu-korokke.mdx` |
| ご当地B級 | 八戸せんべい汁、甲府鳥もつ煮、トルコライス | b | `monja-bkyu-fry` の「ご当地B級（3種）」。JSON planned |
| 屋台 | 博多、祭り | a | `eat/yatai-{hakata,matsuri}.mdx` |
| 屋台 | キッチンカー | c／要確認 | `yatai` に語が1つあるが節は無し。JSON planned |
| コロッケ・揚げ物 | 天ぷら（江戸の屋台→高級化）| b | `monja-bkyu-fry` の「天ぷら」節（農水省とキッコーマンの時期の違いを併記）|
| コロッケ・揚げ物 | メンチ、ハムカツ、かき揚げ | 除 | `monja-bkyu-fry` が「公的な歴史：取れなかった」と明記 |

### H. 洋食・日本化した外来食（★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 洋食／町中華／パン／ピザ・パスタ／ハンバーガー／牛乳 | — | a | `eat/western-{yoshoku,machichuka,pan,italian,burger,dairy}.mdx`（6本とも）|

### I. 居酒屋・酒（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 居酒屋の仕組み | お通し、焼鳥、角打ち、スナック | a | `eat/izakaya-{otoshi,yakitori,kakuuchi,snack}.mdx` |
| 居酒屋の仕組み | 大衆酒場（赤羽・立石・野毛）／横丁／せんべろ | c／除寄り | JSON `yokocho` planned。`bar-minor` `izakaya` が公的資料を取れていない。「大衆酒場」「せんべろ」の語はメモに無い |
| 日本酒 | 灘・伏見、新潟 | a | `eat/sake-{nada-fushimi,niigata}.mdx` |
| 日本酒 | 秋田、広島西条、生酛・山廃、酒蔵見学、季節（ひやおろし）| c | メモ `sake` はこの2系統のみ（GI の全体像と酒蔵ツーリズムの節は b だが、産地別は無し）。「西条」「生酛」「山廃」の語はメモ・記事とも無し |
| 焼酎／ビール・ハイボール | — | a | `eat/drinks-{shochu,beer-highball}.mdx` |
| ウイスキー | ジャパニーズウイスキー（表示基準2021）| b | `drinks` の B/C 節。JSON `whisky` planned |
| 酒のつまみ | 枝豆・冷奴 ほか | b | `bar-minor` の C。系譜ページ化は薄い |

### J. 甘味・茶・喫茶（★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 和菓子 | 羊羹、今川焼系 | a | `eat/wagashi-{yokan,imagawayaki}.mdx` |
| 和菓子 | 八ツ橋・ういろう | 除 | `wagashi`：「公式サイトを開けず未確認」「確認できず」 |
| 和菓子 | カステラ（長崎）、もみじ饅頭（宮島）| c | カステラは `kyodo-kyushu` `buying-minor` に語のみ。もみじ饅頭の語はメモに無し |
| 和菓子 | 大福・団子・最中・どら焼き・たい焼き | b△ | `wagashi`（分類・呼び名の地域差）、`sweets-minor`（たい焼き）|
| 茶／かき氷・喫茶 | — | a | `eat/tea-regions.mdx` `tea-kakigori-kissaten.mdx` |
| あんみつ／洋菓子／クレープ／焼き芋／コンビニ | — | a | `eat/sweets-*.mdx`（5本）|
| パフェ・プリン | 札幌の〆パフェ | c（優先低） | `sweets-minor` に洋菓子の節はあるが札幌の〆パフェは無し |

### K. コンビニ・中食・買う食（★★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| コンビニ | おにぎり／おでん | a | `eat/conbini-{onigiri,oden}.mdx` |
| デパ地下／駅弁 | — | a | `eat/food-shopping-{depachika,ekiben}.mdx` |
| スーパー | 惣菜・半額シール | b△ | `retail-ekiben`（惣菜構成比11.3%）。JSON `supermarket` planned |
| 道の駅・直売所／土産 | — | a | column `roadside-stations-and-farm-stands.mdx` `food-souvenirs-omiyage.mdx` |
| 自販機 | 台数・支払い | b | `buying-minor` の B 節（column 内には語のみ）|
| 駅ナカ（エキュート）| — | c／要確認 | `retail-ekiben` に節があるか未確認 |

### L. 季節と行事（★★）

| ハブ | 候補 | 状態 | 根拠ファイル |
|---|---|---|---|
| 正月／節分／ひな祭り／春夏秋冬の旬 | — | a | `eat/seasonal-{new-year,setsubun,hinamatsuri}.mdx` `shun-{spring-summer,autumn-winter}.mdx` |
| 端午／七夕・お盆／十五夜／冬至／大晦日／クリスマス／七五三 | — | b | `events-kids-minor` の節（A 部）、`seasons`。JSON は6本が planned（`tango` `tanabata-obon` `tsukimi` `toji` `omisoka` `christmas`）|
| バレンタイン | — | c | 無し |

### M. 作法と仕組み（コラム）

| テーマ | 状態 | 根拠 |
|---|---|---|
| 箸とテーブル／食券／列・相席／時価と値段／麺をすする／持ち帰り・食べ歩き／制約のある人／子ども／予約と支払い | a | column 16本のうち該当（`chopsticks-in-japan` `japanese-table-customs` `how-meal-ticket-machines-work` `queues-and-shared-tables` `reading-menu-prices-in-japan` `slurping-noodles` `eating-while-walking-in-japan` `eating-in-japan-{vegetarian,allergies}` `eating-out-with-children-in-japan` `restaurant-reservations-in-japan` `paying-at-restaurants-in-japan`）|
| 寿司の食べ方 | b | `sushi` メモ。column に記事無し（★★★のコラムで未記事化はこれのみ）|

---

## 2. (c) のうち「調査すれば記事になりそうなもの」の優先順位

基準：①地図の★、②訪日客が実際に出会うか、③公的資料の見込み、④既出メモで「出典が取れず書けない」と判明したものは除外。さらに運営方針（地域は瀬戸内→九州を先に）を加点した。

| 順 | 候補 | ★ | 訪日客の関心 | 公的資料の見込み | 備考 |
|---|---|---|---|---|---|
| 1 | インスタント麺（チキンラーメンとカップヌードル）| ラーメン ★★★ | 高い。横浜・池田の博物館が観光地 | 高い。日本即席食品工業協会、日清食品の公式の歴史ページと博物館、世界ラーメン協会 | `ramen.mdx` が協会の2ページを出典にしている。本文の重複範囲は要確認 |
| 2 | 立ち食いそば | そば ★★★ | 高い。駅で最初に出会う食 | 中程度。日本鉄道構内営業中央会（`retail-ekiben` で既出）、麺類の業界団体、自治体 | 食券の column・`soba-edo.mdx`・`yatai` と重複しやすい |
| 3 | 尾道ラーメン | ラーメン ★★★ | 高い。しまなみ海道・瀬戸内のルート上 | 中程度。尾道市・観光協会、ラーメン博物館。農水省の一覧には無い | 瀬戸内を先にする方針に合う |
| 4 | 日本酒の産地：広島（西条）| 日本酒 ★★★ | 高い。酒蔵通りと秋の酒まつり | 高い。国税庁、日本酒造組合中央会、広島県・東広島市 | `sake` メモの GI の節と重複。西条の語は既出メモに無い |
| 5 | 稲庭うどん | うどん ★★★ | 中程度。秋田土産 | 中程度。製造者の組合、商標・GI の公的記録（要確認）| `kyodo-ryori` のアンテナショップ記述と、`kyodo-ryori-akita.mdx` との関係を確認 |
| 6 | 親子丼・天丼 | 丼 ★★★ | 高い。天ぷらは定番 | 中程度。農水省の天ぷらページ（`monja-bkyu-fry` 既出）、鶏の食文化 | `donburi` `chicken` `monja-bkyu-fry` に語があるので重複に注意。b△ に近い |
| 7 | 徳島ラーメン／和歌山ラーメン | ラーメン ★★★ | 中程度 | 低〜中。県・市の観光サイト。農水省の一覧には無い | 順位3の次のラーメン群 |
| 8 | 日本酒の産地：秋田 | 日本酒 ★★★ | 中程度 | 高い。国税庁 GI の一覧、県の酒造組合 | 4 とセットにできる |
| 9 | 深大寺そば（東京）| そば ★★★ | 中程度 | 中程度。調布市、観光協会 | 2 とセットにできる |
| 10 | 函館・旭川ラーメン | ラーメン ★★★ | 高い | 中程度（農水省ページが既出メモにある）| b△。素材は1段落。単独記事には出典が足りない |
| 11 | もみじ饅頭、カステラ | 和菓子 ★★ | 高い。宮島・長崎 | 中程度。観光協会、業界団体 | `buying-minor` の銘菓、column `food-souvenirs-omiyage` と重複 |
| 12 | 関サバ・関アジ、くさや | 魚介 ★★★／発酵 ★★ | 中程度 | くさやは東京都の資料が見込める。関サバは漁協・県 | 低優先 |
| 13 | いなり寿司（寿司の庶民形）| 寿司 ★★★ | 中程度。コンビニ・スーパーで見る | 農水省ページが複数県にある（既出メモに散在）。100年フード愛知 | b△。調査というより再編集に近い |
| 14 | 白河・燕三条・富山ブラックのラーメン | ラーメン ★★★ | 低〜中 | 低。農水省にない | 北陸・東北の郷土料理が出そろってからで良い |

### 除外または保留（理由つき）
- 二郎系：業界団体・公的資料が見つからない見込み。個人ブログやWikipedia不可のルールで、記事化の足がかりが無い
- 八ツ橋・ういろう：`wagashi` メモが「公式サイトを開けず／確認できず」と明記済み。別の出典ルートが見つかれば再開
- メンチ・ハムカツ・かき揚げの歴史：`monja-bkyu-fry` が取れずと明記
- 小豆島素麺：`noodles-minor` が検索要約のみで未確認と明記
- 博多一口餃子：`gyoza` が起源・引揚港との関係を未確認と明記
- 柳川せいろ蒸し：`unagi` が「独立史料は取れず」と明記。100年フードの記述だけなら書ける（b△）
- 大衆酒場・せんべろ・横丁：`bar-minor` `izakaya` で公的資料が取れていない。取り組むなら自治体の商店街・横丁の資料を新規に探す必要があり、見込みは低い
- 台湾ラーメン、鯨の歴史：公的資料の見込みは薄い、または扱いが難しい（要確認）

### 参考：調査なしで書ける b の主な項目（記事化待ち。調査の対象外）
うどん（味噌煮込み・吉田・伊勢・水沢）、そば（へぎ・越前おろし・年越し）、焼きそば（太田・パン）、豚丼、ソースカツ丼、めはり、鍋（ちゃんこ・石狩・牡丹）、汁物、本膳、弁当、酢・みりん、練り物・海藻、天ぷら、ご当地B級3種、ジャパニーズウイスキー、ジビエ、自販機、行事食6本、寿司の食べ方（column）。

---

## 3. 1回の調査に収まる単位の提案（ハブ＋系譜2本、5系統）

既出メモの形式（A ハブ／B 系譜1／C 系譜2／D 本場と出先／記事化できる・書けない／出典）に合わせる。

### 系統1：インスタント麺（ハブ）＋袋麺（チキンラーメン）＋カップ麺（カップヌードル）
- 対象の料理名：インスタントラーメン、袋麺（1958年の初の商品）、カップ麺（1971年の初の商品）
- 公的資料の見込み：日本即席食品工業協会（年表・生産統計）、日清食品の公式の歴史と博物館、世界ラーメン協会（消費量）
- 重複しそうな既出メモ：`ramen.mdx` の出典欄（協会の2ページ）。本文の扱いは要確認。`queue-slurp`（日清「音彦」）、`conbini`（カップ麺の売り場）に語が出る程度

### 系統2：そばの店の型（ハブは soba の補遺）＋立ち食いそば＋深大寺そば
- 対象の料理名：立ち食いそば（駅そば）、深大寺そば（東京・調布）
- 公的資料の見込み：日本鉄道構内営業中央会（`retail-ekiben` で既出）、麺類の業界団体、調布市・観光協会。立ち食いの歴史は農水省の屋台の記述（`yatai`）が足がかり
- 重複しそうな既出メモ：`soba-edo.mdx`（立ち食いの帳場）、`yatai`（江戸の立ち食い）、`manners` と column `how-meal-ticket-machines-work`（食券）、`retail-ekiben`（駅の構内営業）

### 系統3：日本酒の産地（ハブは sake の補遺）＋広島（西条）＋秋田
- 対象の料理名：広島・西条の酒（酒蔵通り・酒まつり）、秋田の酒
- 公的資料の見込み：国税庁（清酒のGI一覧・製法品質表示基準）、日本酒造組合中央会、各県の酒造組合、東広島市・秋田県の観光サイト
- 重複しそうな既出メモ：`sake`（GIの全体像、酒蔵ツーリズム、本場と出先）、`kyodo-setouchi` `kyodo-tohoku`（郷土料理側の酒の言及は少ない）、`eat/kyodo-ryori-akita.mdx`（秋田）

### 系統4：ラーメンの瀬戸内・四国（ハブは ramen の補遺）＋尾道ラーメン＋徳島ラーメン
- 対象の料理名：尾道ラーメン、徳島ラーメン（和歌山ラーメンを3本目の候補として控える）
- 公的資料の見込み：尾道市・観光協会、徳島県・市の観光サイト、新横浜ラーメン博物館。農水省の一覧には無い（`kyodo-hokkaido-sanin-shikoku` が徳島ラーメンを「一覧にない」と記す）。公的資料は他の系統より薄い
- 重複しそうな既出メモ：`kyodo-setouchi`（尾道の語）、`konamono`（尾道焼き）、`kyodo-kinki`（和歌山の語）

### 系統5：乾麺・手延べの産地（ハブは udon の補遺）＋稲庭うどん＋五島うどん
- 対象の料理名：稲庭うどん（秋田）、五島うどん（長崎・地獄炊き）
- 公的資料の見込み：農水省（五島の地獄炊きは既出）、100年フード（五島うどんは長崎の令和6年度）、稲庭は製造者の組合と商標・GIの公的記録（要確認）
- 重複しそうな既出メモ：`noodles-minor`（素麺の手延べ）、`kyodo-kyushu`（地獄炊き）、`dashi`（あご）、`kyodo-ryori`（稲庭の語）、`eat/somen-*.mdx` `eat/dashi-iriko-ago.mdx`

### 控え（この5系統に入らなかったが次点）
- 丼の補遺：親子丼＋天丼（`donburi` `chicken` `monja-bkyu-fry` の素材が多く、調査量は小さい）
- ラーメン北海道の補遺：函館＋旭川（b△を厚くする型）
- 銘菓：もみじ饅頭＋カステラ（`buying-minor` と column `food-souvenirs-omiyage` と重複）
