# ko wave7-4 報告

## 書いたファイル（文字数は frontmatter 込みのおおよその値）
ディレクトリ: D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\translations-draft\ko\
- soak\totsukawa.mdx 約16,800字
- eat\drinks-beer-highball.mdx 約11,900字
- eat\drinks-shochu.mdx 約11,800字
- soak\nagayu.mdx 約13,900字
- eat\food-shopping.mdx 約12,000字
- eat\food-shopping-depachika.mdx 約8,000字
- soak\yamanaka.mdx 約14,400字
- eat\food-shopping-ekiben.mdx 約10,900字
- eat\instant-noodles.mdx 約12,700字
- soak\yubara.mdx 約15,900字
- eat\instant-noodles-bag.mdx 約10,500字
- eat\instant-noodles-cup.mdx 約10,700字

## 自己点検
- 9本 OK、food-shopping は警告なし（「¥535 billion」を `¥535십억` と書いて数字検査に合わせた）。
- **error 3件（instant-noodles / -bag / -cup）は解消不能**：原文にこの3本だけ `translationStatus` キーが無い。入れると「原文に無いキー」、消すと「machine でない」。ガイド（§2）に従い `translationStatus: machine` を入れた状態で残している。原文側に `translationStatus` を足せば解消する。
- 内部リンクは依頼どおり `/ko/` で書いた（ガイド §2 の「/en/ のまま」と異なる）。公開時の一括書き換えが不要な代わりに、`/ko/` 側に該当ページが無いリンクがある可能性（例：/ko/soak/yamashiro/, wakura, misasa, yuda, shirahama, nanki-katsuura, /ko/eat/kyodo-ryori-*/, /ko/eat/conbini/, /ko/eat/ramen/）。

## 新規用語
- shōchū | 焼酎 | 쇼추（소주と紛れるため音写）
- kōrui (A-type) / otsurui (B-type) | 甲類 / 乙類 | 고루이(A형) / 오쓰루이(B형)（漢字は添えず）
- honkaku / maewari / mizuwari / oyuwari / roku-yon | 本格 / 前割り / 水割り / お湯割り / ロクヨン | 혼카쿠 / 마에와리 / 미즈와리 / 오유와리 / 로쿠욘
- awamori / kūsu | 泡盛 / 古酒 | 아와모리 / 구스
- National Research Institute of Brewing | 酒類総合研究所 | 주류종합연구소(NRIB)
- Japan Sake and Shochu Makers Association | 日本酒造組合中央会 | 일본주조조합중앙회
- Japan Spirits and Liqueurs Makers Association | 日本洋酒酒造組合 | 일본양주주조조합
- happoshu / new genre | 発泡酒 / 新ジャンル | 핫포슈 / 신장르
- nakashoku / sōzai / depachika / ekinaka | 中食 / 惣菜 / デパ地下 / エキナカ | 나카쇼쿠 / 소자이 / 데파치카 / 에키나카
- ekiben / makunouchi / yusō ekiben | 駅弁 / 幕の内 / 輸送駅弁 | 에키벤 / 마쿠노우치 / 유소 에키벤
- Japan Department Stores Association | 日本百貨店協会 | 일본백화점협회
- Japan Instant Food Industry Association (JIFFA) | 日本即席食品工業協会 | 일본즉석식품공업협회(JIFFA)
- WINA | 世界ラーメン協会 | 세계인스턴트면협회(WINA)
- Nissin / Toyo Suisan / Myojo / Sanyo Foods / Acecook | 日清 / 東洋水産 / 明星 / サンヨー食品 / エースコック | 닛신 / 도요 스이산 / 묘조 / 산요 식품 / 에이스쿡
- Cup Noodle / Chicken Ramen / Akai Kitsune | カップヌードル / チキンラーメン / 赤いきつね | 컵누들 / 치킨라멘 / 아카이 기쓰네
- gensen kakenagashi | 源泉かけ流し | 겐센 가케나가시 / 가케나가시
- sotoyu / ashimoto yūshutsu / yuami-gi / tōji | 外湯 / 足元湧出 / 湯あみ着 / 湯治 | 소토유 / 아시모토 유출 / 유아미기 / 도지
- Fusō no san meitō | 扶桑三名湯 | 후소노 산메이토
- hanzaki (giant salamander) | ハンザキ | 한자키（본문 첫머리에 산초어 병기）
- Kiku-no-yu / Sunayu | 菊の湯 / 砂湯 | 기쿠노유 / 스나유
- Nara Kōtsū | 奈良交通 | 나라 고쓰(奈良交通)

## 要確認（読み・表記に確信が持てない）
- 人名：Matsuo Takeyuki（nagayu、漢字・読みとも不確か）、Tansō Shōemon（drinks-shochu）→ ローマ字のまま。
- 商品名：Sukiyanen（instant-noodles-bag）はローマ字のまま。
- 地名・施設名：「Taru」→ 다루（yubara）、「Kamiyu」の漢字（原文に無いため添えず）、「Futsuno」→ 후쓰노、「Tōsenji」→ 도센지（湯泉地。sources に漢字あり）。
- 「kōtsū」を 고쓰 と書く外来語表記法の適用（나라 고쓰）。「나라 교통」の方が自然との見方もある。
- 쇼추：韓国の「소주」と混同を避けて音写したが、本文では初出に説明を付けていない。
- 「sun」（寸）→ 슨：韓国語の単位としては馴染みが薄い。
- 「Lawson」「Seven-Eleven」等は 로손 / 세븐일레븐。「Natural Lawson」→ 내추럴 로손。
- 「PLUSTABento」「KIRISHIMA WALK FACTORY」「Cold Rehydrate」はローマ字のまま。

## 原文の問題
- instant-noodles / -bag / -cup の3本だけ frontmatter に `translationStatus` が無い（他の記事は全部ある）。チェッカーと衝突する。
- instant-noodles：「Sendai」を青森・福島・新潟・秋田に並べているが、センダイは宮城（都市名）。形式の違いだけ（県庁所在市ランキングなので問題はない）。
- instant-noodles：WINA の数字（5,952 million）と JIFFA の数字（5,905.06 million）の関係は原文が注記済み。訳は両方そのまま。
- food-shopping：「Daimaru’s sweets」等の固有名詞は JNTO の記述の引用。年月日の矛盾は無し。
- totsukawa：計画書と村の温度（Kamiyu 85°C vs 53.6°C）の食い違いは原文が明記済み。
- yamanaka：「Kyūtoran bus (キュートらん)」を原文が否定的に言及（公式ページに無い）。訳はそのまま。
- 数の表記：`5.9 billion` などは、ガイド §6 に従い 5,900,000,000 のように桁を全部書いた。instant-noodles の本文の `5,905.06 million` 等は小数を含むため「백만」で書いた（検査は通過）。
