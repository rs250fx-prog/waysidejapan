# ko wave8-1 報告

13本、check-translation の error 0・warning 0（自分の記事分）。内部リンクは指示どおり /ko/ で記述。原文に translationStatus があっても全て machine にした。

## 書いたファイルと本文文字数（概数）
- column/crowds-and-local-rules-in-japan.mdx 18,100
- column/how-japanese-rice-is-actually-cooked.mdx 2,950（原文 draft: true のまま）
- column/how-to-eat-sushi-in-japan.mdx 10,900
- column/japan-laws-and-manners-for-visitors.mdx 18,300（表あり）
- column/new-travel-rules-and-charges-in-japan.mdx 17,700（表あり）
- eat/bkyu-senbei-jiru.mdx 6,100
- eat/bkyu-torimotsu.mdx 5,500
- eat/chicken-toriten.mdx 7,100
- eat/donburi-butadon.mdx 8,200
- eat/drinks-whisky.mdx 8,000
- eat/kaiseki-bento.mdx 7,500
- eat/kaiseki-honzen.mdx 7,200
- eat/meat-gibier.mdx 6,800

## 規則の扱い
- 時刻は原文の書式（14.00）のまま「14.00」と書いた（数字検査のため）。60,000,000 は万単位にせず表記。
- FAQ・本文中の < > は使っていない（bento の FAQ に「<모리사다 만코>」を入れたので、MDX/YAML で問題があれば * に直す。検査は通過）。

## 新規用語
- B-grade / B-1 Grand Prix | B級グルメ / B-1グランプリ | B급 구르메 / B-1 그랑프리
- Nanbu senbei / senbei-jiru | 南部せんべい / せんべい汁 | 난부 센베이 / 센베이지루
- torimotsu-ni / teri-ni | 鳥もつ煮 / 照り煮 | 도리모쓰니 / 데리니
- toriten / karaage | とり天 / 唐揚げ | 도리텐 / 가라아게
- butadon | 豚丼 | 부타동
- makunouchi / Shōkadō bento / ekiben | 幕の内 / 松花堂弁当 / 駅弁 | 마쿠노우치 / 쇼카도 도시락 / 에키벤
- honzen ryōri / ichijū sansai / shōjin ryōri | 本膳料理 / 一汁三菜 / 精進料理 | 혼젠 요리 / 이치주 산사이 / 쇼진 요리
- gibier / botan nabe / sōhei-nabe | ジビエ / ぼたん鍋 / 僧兵鍋 | 지비에 / 보탄 나베 / 소헤이 나베
- International Tourist Tax | 国際観光旅客税 | 국제관광여객세
- Immigration Services Agency | 出入国在留管理庁 | 출입국재류관리청
- National Police Agency | 警察庁 | 경찰청
- Japan Spirits and Liqueurs Makers Association | 日本洋酒酒造組合 | 일본양주주조조합
- Association of Shinto Shrines | 神社本庁 | 신사본청
- accommodation tax / minpaku | 宿泊税 / 民泊 | 숙박세 / 민박
- Hanami-kōji / Gion / Kamakura-Kōkōmae | 花見小路 / 祇園 / 鎌倉高校前 | 하나미코지 / 기온 / 가마쿠라고코마에
- Mt Fuji fifth station | 五合目 | 5합목
- karyō (administrative fine) | 過料 | 과태료(過料, 가료)

## 要確認
- 오쿠토（Okuto、原文に漢字なし。出典 label に 奥藤本店）、도요켄（Tōyōken、漢字なし）、반세이샤・요다 벤조（Banseisha・Yoda Benzō、漢字なし）、도리이 신지로（Torii Shinjirō）は漢字を添えず한글のみ。
- 쇼카도 쇼조、모리사다 만코、센노 리큐 の表記。
- 고킨케이(拘禁刑)を「징역」と訳した（原文は imprisonment）。法律用語として「금고/징역」の区別が必要なら要調整。
- 가마쿠라고코마에 の「건널목」、에노덴 など鉄道名の韓国語表記。
- 「이른바（いわゆる）」「迷惑している」「겐쿄 진인」など原語の併記は原文に倣った。
- 도카치 밀키 라이너・포테이토 라이너・산코 버스 等の路線名は片仮名の音写。
- 가라아게 협회の正式韓国語名は未確定。
- 주요 도시（기타큐슈, 구치안, 하쿠바, 가루이자와 等）の漢字併記は初出で一部のみ。

## 原文の問題
- crowds: 「Kamakura-Kōkōmae」の AI カメラ・数値（17.7%→14.6%）は原文のまま。矛盾は見当たらない。2026 年 9 月の JNTO 数値は「10 月 21 日に公表予定」とあり、本稿の pubDate（10-21）と同日で、公開時に古くなる。
- laws: 表「Importing, possessing or using cannabis」の「Import 1 to 10 years」等は原文どおり。出典の旧 Hot Springs Act の記述はそのまま。
- new-travel: JR パスの表見出しに「as of 15 Oct 2026」とあり、日付は固定（更新が必要）。
- how-japanese-rice: draft: true のまま。sources が空。
- toriten: 「Taishō era (1912–26)」と「early Shōwa（1926〜）」の併記は原文どおり（矛盾ではなく併記）。
- gibier: 最後の誤解項目「Botan nabe is named after the peony plating」の根拠（名称の方が先）は原文の言い方が簡略。
