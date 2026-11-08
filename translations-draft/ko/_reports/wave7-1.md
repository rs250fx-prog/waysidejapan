# ko 翻訳 wave7-1 報告

## 書いたファイル（12本、いずれも check-translation で error 0 / 自分の記事の warning 0）
すべて `translations-draft\ko\` 配下。本文はおおよそ原文の語数の 1.3〜1.6 倍の韓国語文字数（正確な文字数は未計測）。
- soak\misasa.mdx / soak\minakami.mdx / soak\ogoto.mdx / soak\ibusuki.mdx / soak\unazuki.mdx
- eat\konamono.mdx / eat\konamono-monja.mdx / eat\konamono-okonomiyaki.mdx / eat\konamono-takoyaki.mdx
- eat\market-toyosu.mdx / eat\wagashi.mdx / eat\wagashi-imagawayaki.mdx

内部リンクは /ko/ で記述（依頼の追加注意 1）。YAML の値は全体を引用符で囲んだ。

## 新規用語（英語 | 日本語 | 韓国語）
- Kawara-buro | 河原風呂 | 가와라부로
- radioactive spring / radium onsen | 放射能泉 / ラジウム温泉 | 방사능천 / 라듐 온천
- kakenagashi | 掛け流し | 가케나가시
- tōji | 湯治 | 도지(湯治)
- konamono | 粉もの | 고나모노(粉もの)
- okonomiyaki / takoyaki / Akashi-yaki / monjayaki | お好み焼き / たこ焼き / 明石焼き / もんじゃ焼き | 오코노미야키 / 다코야키 / 아카시야키 / 몬자야키
- dashi | 出汁 | 다시
- tamagoyaki（明石での呼称）| 玉子焼 | 다마고야키
- Tsukishima / Nishinaka-dori | 月島 / 西仲通り | 쓰키시마 / 니시나카도리
- Senkyaku Banrai | 千客万来 | 센캬쿠 반라이(千客万来)
- Sakamoto / Hiei / Hōkō-ji / Saichō | 坂本 / 比叡山 / 宝光寺? ほか | 사카모토 / 히에이산 / 호코지 / 사이초
- sunamushi | 砂むし | 스나무시（모래찜질）
- Wagashi 系: wagashi / yōkan / daifuku / nerikiri / kinton | 和菓子 / 羊羹 / 大福 / 練り切り / きんとん | 와가시 / 요칸 / 다이후쿠 / 네리키리 / 긴톤
- imagawayaki / ōbanyaki / kaitenyaki | 今川焼 / 大判焼 / 回転焼 | 이마가와야키 / 오반야키 / 가이텐야키
- Gozasōrō | 御座候 | 고자소로
- Otafuku / Tsukiji Gindaco / Nichirei Foods | オタフク / 築地銀だこ / ニチレイフーズ | 오타후쿠 / 쓰키지 긴다코 / 니치레이 푸즈
- 地名: Misasa 미사사, Tottori 돗토리, Kurayoshi 구라요시, Minakami 미나카미, Takaragawa 다카라가와, Ogoto 오고토, Ōtsu 오쓰, Ibusuki 이부스키, Kaimondake 가이몬다케, Unazuki 우나즈키, Kuronagi 구로나기, Keyakidaira 게야키다이라, Kurobe 구로베, Toyama 도야마, Hiroshima 히로시마, Akashi 아카시, Himeji 히메지

## 要確認（読みに確信が持てない・原文がローマ字のみ）
- Ōkubo Samanosuke → 오쿠보 사마노스케、Imao no Sukune → 이마오노 스쿠네、Myōken → 묘켄、Endō Tomekichi → 엔도 도메키치、Edoya Iwakichi → 에도야 이와키치、Mukai Seitarō → 무카이 세이타로（いずれも原文ローマ字のみで漢字なし。ローマ字からの韓国語表記）
- Su-Ha Onsen → 스하 온천、Kabuyu → 가부유（原文表記のまま音写）
- Mifune（三船? 未確認）→ 미후네
- Mitsuwa（広島のソース銘柄）→ 미쓰와、Mizutsukiyo → 미즈쓰키요
- Horiuchi → 호리우치
- Toppy Rocket（高速船）→ 토피 로켓（公式の韓国語表記は不明）
- Sume-ryōri → 스메 요리（原文ローマ字のみ）
- Mount Washiba → 와시바다케（「다케」は慣用で付加）
- Nihon Denryoku → 닛폰 전력（日本電力と推定、原文はローマ字）
- kashō itadaki → 가쇼 이타다키（嘉祥頂戴の読みは「かじょう」の可能性あり。原文のローマ字に従った）
- Tōyō Aluminium → 도요 알루미늄、Kenmyōji → 겐묘지、Kaiō → 가이오
- 漢字を添えた箇所: 三朝温泉・河原風呂・宇奈月温泉・指宿・水上・雄琴（おごと）・千客万来・汪泉閣・月島ほか（いずれも原文のソース label や本文に出る確定した名称）

## 原文の問題
- misasa: 原文自身が最高水温を 76°C と 89.3°C で併記（原文が明記している既知の不一致）。
- minakami: 群馬県リストの泉質を PDF の文字順で読んだ旨が原文にあり、確認が必要と原文自身が述べている。
- unazuki: 構成上 `Last analysed 7 November 2024`・「Flow column」の単位が不明確と原文が注記。トロッコ列車の運行情報（2026年10月）は日付依存で更新が必要になり得る。
- konamono-okonomiyaki: 本文に "Tokyo's monjayaki ... is on the list for a future page" とあるが、monja のページは今回の波で既に存在する（リンク先の整理が必要）。
- ibusuki: 官公庁のPDFの列崩れによる数値（414/175）は原文が注意書き付き。
- konamono-monja: Monja 記事の `crêpe` 等の表現に問題なし。monja 記事中「Yoshimiya」の「創業1954年」は店の自称として原文が区別している。
