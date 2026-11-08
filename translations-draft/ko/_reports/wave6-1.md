# ko wave6-1 報告

## 書いたファイルと本文の文字数（frontmatter除く、改行含む）
パスは `translations-draft\ko\` 配下。
- column\tourist-prices-at-famous-markets.mdx 5,515
- eat\seafood-oyster-crab.mdx 10,576
- eat\seafood-saba-katsuo-maguro.mdx 10,950
- soak\shuzenji.mdx 15,269
- soak\nozawa.mdx 19,446
- eat\rice.mdx 11,821
- eat\seafood-salmon.mdx 9,097
- eat\rice-curry.mdx 11,837
- eat\rice-onigiri.mdx 9,687
- soak\sounkyo.mdx 12,070
- soak\hanamaki.mdx 14,294
- eat\tea.mdx 13,462

check-translation: 12本とも error 0。warning は nozawa の1件のみ（下記）。内部リンクは最初から /ko/。

## 新規用語
- yu-nakama | 湯仲間 | 유나카마(湯仲間)
- sotoyu | 外湯 | 소토유
- sunshi (voluntary contribution) | 寸志 | 슨시
- kakenagashi | かけ流し | 가케나가시
- Tokko no Yu / Kūkai | 独鈷の湯 / 空海 | 돗코노유 / 구카이(空海)
- Hako-yu | 箱湯（筥湯） | 하코유
- tonjiki | 屯食 | 돈지키
- ikura / sujiko / aramaki / shiobiki / hizu | いくら / すじこ / 荒巻 / 塩引き / 氷頭 | 이쿠라 / 스지코 / 아라마키 / 시오비키 / 히즈
- harako-meshi | はらこ飯 | 하라코메시
- sake-toba | 鮭とば | 사케토바
- seki saba / heshiko / tataki / ikejime / tsura-gai | 関さば / へしこ / たたき / 活け締め / 面買い | 세키 사바 / 헤시코 / 다타키 / 이케지메 / 쓰라가이
- akami / chūtoro / ōtoro | 赤身 / 中トロ / 大トロ | 아카미 / 주토로 / 오토로
- uruchimai / mochigome | うるち米 / もち米 | 우루치마이 / 모치고메
- aracha / kyūsu / ōi-cha | 荒茶 / 急須 / 覆い茶 | 아라차 / 규스 / 오이차
- sencha / gyokuro / kabusecha / tencha / tamaryokucha / bancha / hōjicha / genmaicha | | 센차 / 교쿠로 / 가부세차 / 덴차 / 다마료쿠차 / 반차 / 호지차 / 겐마이차
- matcha | 抹茶 | 말차（韓国で定着した形を採用。外来語表記なら 맛차）
- wanko soba | わんこそば | 완코 소바
- mehari-zushi | めはりずし | 메하리즈시
- Onsen-kyō | 温泉郷 | 온센쿄
- chum salmon | 秋鮭 | 연어(케타)
- CoCo Ichibanya / Go Go Curry | ココイチ / ゴーゴーカレー | 코코이치반야 / 고고 카레
- House Foods / S&B Foods | ハウス食品 / エスビー食品 | 하우스식품 / 에스비식품
- Maritime Self-Defense Force | 海上自衛隊 | 해상자위대
- Statistics Bureau price survey 等は官庁名を用語集どおり

## 要確認
- 말차 / 맛차 のどちらを標準にするか（本稿は 말차）。
- Dōhoku Bus（道北バス）は 도호쿠 が Tōhoku と同音になるため、本文では「도호쿠(Dōhoku) 버스」と原綴を併記。
- Ōgama（麻釜の池の一つ）→ 오오가마、Kamuy-mintar → 카무이 민타르、Donguri to Yamaneko-gō → 돈구리토 야마네코고、Attaka Onsen-gō → 앗타카 온센고 の読み。
- 신하나마키・가미카와소운쿄 IC など長い固有名詞の表記、「오에도 온센 모노가타리」の表記。
- Mache unit → 마헤 단위。
- Crosse & Blackwell → 크로스 앤드 블랙웰。
- 書名の読み：『조테이 가에이 쓰고』『세이요 료리 쓰』『세이요 료리 시난』『가이군 갓포주쓰 산코쇼』『모리사다 만코』『이세 온도 고이노 네타바』。
- seafood-oyster-crab：日本の旧「厚生省」は原文に「health ministry」とあるのみ。本文は「후생성(현 후생노동성)」と補ったので、補足が不要なら「후생노동성」に統一。
- nozawa の warning「数字 16」：原文 "1.6 to 1.0 million years ago" を §6 規則どおり 1,600,000~1,000,000 と書いたため、桁比較が合わない（意図的）。
- 万単位回避のため "¥46.9 billion" は ¥469억、"¥76.3 billion" は ¥763억 と韓国語の単位語で書いた（用語集の ¥162.7조 の方針に合わせた）。数字検査が気になる場合は要確認。

## 原文の問題
- seafood-saba-katsuo-maguro 末尾の「Check fares and journey times with the operator before you travel.」は魚の記事に不要な定型文で、直前の節とも無関係（訳には残した）。rice の「Where to eat it」節末にも同じ定型文がある。tea にも同様の1行。
- tourist-prices-at-famous-markets：ramen を「the second most satisfying meal visitors report」と書くが出典がなく、sources にも該当が無い。frontmatter の translationStatus は reviewed のまま（訳側は machine にした）、draft: true の記事。
- rice の faq は「roughly 146 g and 143 g」、本文は「about 142.6 g」で数値表記が揺れる。
- seafood-oyster-crab：Okayama の出典が「2010年の古いページ」である旨は原文が自己申告済み。
- nozawa：Ogama のプール名 Ōgama / Ogama no Yu / Ogama Onsen Park が紛らわしい（原文どおり訳）。
- shuzenji：onsen の「Shuzenji」行は行政区か温泉街か不明、と原文が自ら断っている。
- sounkyo：「Check fares…」は無いが、festival 日付が top ページ（古い）と個別ページで食い違うと原文が自己申告。
