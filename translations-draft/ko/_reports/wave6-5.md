# wave6-5 ko 報告

## 書いたファイル（本文の文字数、空白除く）
- eat/yakisoba-fujinomiya.mdx 1,856
- eat/conbini.mdx 2,917
- soak/kinugawa.mdx 4,110
- eat/yakisoba-yokote.mdx 1,476
- eat/conbini-oden.mdx 2,066
- eat/conbini-onigiri.mdx 2,052
- soak/nanki-katsuura.mdx 5,809
- eat/dashi.mdx 4,430
- eat/dashi-east-west.mdx 3,042
- soak/onsen-shikoku.mdx 6,358
- eat/dashi-iriko-ago.mdx 2,096
- eat/shun.mdx 3,736

全12本、check-translation は error 0 / warning 0（12本とも OK）。
本文の内部リンクは依頼どおり `/ko/` で書いた（kinugawa, nanki-katsuura）。本文に出る https URL は無い。

## 新規用語（英語 | 日本語 | 韓国語）
- Fujinomiya / Shizuoka | 富士宮 / 静岡 | 후지노미야 / 시즈오카
- Yokote / Akita / Ota | 横手 / 秋田 / 太田 | 요코테 / 아키타 / 오타
- Sankoku Dōmen | 三国同麺 | 산코쿠 도멘
- nikukasu | 肉かす | 니쿠카스
- 100-Year Food | 100年フード | 100년 푸드
- B-1 Grand Prix | B-1グランプリ | B-1 그랑프리
- fukujinzuke | 福神漬 | 후쿠진즈케
- Patent Office | 特許庁 | 특허청
- Seven-Eleven / FamilyMart / Lawson | セブン-イレブン / ファミリーマート / ローソン | 세븐일레븐 / 패밀리마트 / 로손
- Famichiki | ファミチキ | 파미치키
- oden | おでん | 오뎅（既存 nabe-oden に合わせた）
- chikuwa / hanpen / gobō-maki | ちくわ / はんぺん / ごぼう巻き | 지쿠와 / 한펜 / 고보마키
- Japan Franchise Association | 日本フランチャイズチェーン協会 | 일본프랜차이즈체인협회
- Kinugawa / Nikko / Tochigi | 鬼怒川 / 日光 / 栃木 | 기누가와 / 닛코 / 도치기
- alkaline simple spring | アルカリ性単純温泉 | 알칼리성 단순천
- Nachikatsuura / Katsuura / Wakayama | 那智勝浦 / 勝浦 / 和歌山 | 나치카쓰우라 / 가쓰우라 / 와카야마
- Bōkidō | 忘帰洞 | 보키도
- Fudarakusan-ji | 補陀洛山寺 | 후다라쿠산지
- Kumano caldera | 熊野カルデラ | 구마노 칼데라
- dashi / kombu / katsuobushi | だし / 昆布 / 鰹節 | 다시 / 다시마(곤부) / 가쓰오부시
- umami | うま味 | 우마미（基本味としては 우마미、文脈で 감칠맛は使わず統一）
- ichiban dashi | 一番だし | 이치방 다시
- hashiri / shun / nagori | 走り / 旬 / 名残 | 하시리 / 슌 / 나고리
- niboshi / iriko / ago | 煮干し / いりこ / あご | 니보시 / 이리코 / 아고
- Median Tectonic Line | 中央構造線 | 중앙구조선
- Dōgo / Shionoe / Yunoura | 道後 / 塩江 / 湯ノ浦 | 도고 / 시오노에 / 유노우라
- Tsukimi | 月見 | 쓰키미

## 要確認
- yakisoba-yokote: 「Yokote Yakisoba Sanrai's」は読みに確信が持てず、本文は「Sanrai's」のままローマ字残し。
- yakisoba-yokote: 「Yokote Yakisoba Noren-kai」を「노렌카이」と書いた（漢字は添えていない）。
- nanki-katsuura: 地質名 Shikiya 層・Noroshi-yama・Natsuyama は読みに確信が持てずローマ字のまま（시키야は付けず「Shikiya층」）。
- nanki-katsuura: 「Yu Meguri Ticket」を「유메구리 티켓」と音写（原文に漢字なし）。
- nanki-katsuura: 「Japan Fisheries Information Service Center」を「일본수산정보서비스센터」と訳した（公式韓国語名は無いと思われる）。
- nanki-katsuura: 「Meikō Bus」を「메이코 버스」、「Fudaraku tokai」を「후다라쿠토카이」とした。
- dashi: 人名「Kodama Shintarō」「Kuninaka Akira」は読みどおり한글（漢字は添えず）。
- dashi-east-west: 「Kawamura Zuiken」を「가와무라 즈이켄」と한글のみで書いた。
- shun: 「Torori mitsu-imo」「Sakura saku yo」「annō-imo」の音写（商品名）。
- onsen-shikoku: 「Tama-no-ishi」「Nibukawa」「Hondani」などの読み。
- 数字：`¥12.06 trillion` は `¥12.06조`、`16.3 billion` は `16,300,000,000`、`14 million years` は `14,000,000년` と書いた（検査との一致のため。韓国語として少し不自然）。
- 農林水産省は shun で「농림수산성」を全箇所で使った（短縮せず）。

## 原文の問題
- yakisoba-fujinomiya / yakisoba-yokote: frontmatter の `updatedDate`（2026-11-24 / 25）が `pubDate` と同日で、かつ今日（2026-11-09）より未来の日付。他の記事にも多数ある（2026-11-2x の日付）。公開日として意図した予約日付なら問題なし。
- conbini: 本文の「A change is proposed, not law」節は 2027年4月1日からの消費税 1% 案を扱う。法案の成否で古くなるので、公開前に再確認が必要。
- kinugawa / nanki-katsuura / onsen-shikoku: 時刻表・料金は 2026-10 時点の確認で、公開時には古くなりうる（原文に「確認日」は明記済み）。
- nanki-katsuura: 「Katsuura Onsen は 200 超（レッドデータブック）／町は 177（2018年3月）」の不一致は原文が両論併記しているので、そのまま訳した。
- shun: 原文に「Starbucks の秋 2026 の発売が 9/2」と「2026-10-10 時点の消費税」が混在。内容に矛盾はないが、2026-11-09 時点でまだ販売中かどうか不明。
