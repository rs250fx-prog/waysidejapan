# ko wave7-6 報告

自己点検: check-translation.mjs で10本とも error 0。warning もなし（unzen は「4.3 million」「500,000」を万単位にせず 4,300,000 / 500,000 と書いて解消）。内部リンクは依頼どおり `/ko/` で書いた（ガイド§2の「/en/のまま」より依頼を優先）。

## 書いたファイルと本文の文字数（frontmatter 除く、空白・記号込み）
- soak/tsuetate.mdx 約14,200
- eat/kyodo-ryori-kanto.mdx 約24,400
- eat/kyodo-ryori-kinki.mdx 約22,700
- soak/unzen.mdx 約15,700
- eat/kyodo-ryori-kyushu.mdx 約23,500
- eat/kyodo-ryori-okinawa.mdx 約5,000
- soak/ureshino.mdx 約13,700
- eat/kyodo-ryori-sanin.mdx 約16,600
- eat/kyodo-ryori-setouchi.mdx 約19,600
- eat/kyodo-ryori-shikoku.mdx 約15,800
- eat/kyodo-ryori-tohoku.mdx 約21,500

（依頼リストは11本。全て完了。冒頭の「10本」は11本の誤記）

## 新規用語（用語集に無く、複数回出る語）
- koinobori / 鯉のぼり | 잉어 깃발
- mushi-buro / 蒸し風呂 | 무시부로（증기탕）
- kyōdō-yu / 共同湯 | 공동탕
- kazoku-buro / kashikiri-buro | 가족탕 / 전세탕
- shimotsukare | 시모쓰카레
- okirikomi / nibōtō / himokawa | 오키리코미 / 니보토 / 히모카와
- sauce katsudon | 소스 가쓰동（用語集準拠）
- futomaki-zushi / mehari-zushi / kakinoha-zushi | 후토마키즈시 / 메하리즈시 / 가키노하즈시
- 100-year food（文化庁） | 100년 음식
- sawachi / okyaku | 사와치 / 오캬쿠
- champon | 짬뽕
- tai-meshi / dote-nabe | 다이메시 / 도테나베
- hittsumi / imoni / kozuyu | 힛쓰미 / 이모니 / 고즈유
- Inland Sea | 세토 내해
- Geographical Indication | 지리적 표시（用語集準拠）
- Heisei Shinzan | 헤이세이신잔
- yudōfu | 유도후
- 地方名: Tōhoku 도호쿠 / Kinki 긴키 / San'in 산인 / Setouchi 세토우치 / Shikoku 시코쿠

## 要確認（読みに確信が持てない・慣用が割れる）
- Siebold: 지볼트（韓国語では 시볼트 も使われる）
- Chiki-agi（沖縄料理）: 치키아기
- Kōrēgusu: 고레구스 / Tibichi: 티비치 / Kufa-jūshī: 구파주시（沖縄語の表記）
- Kasari 가사리、Ōmura Sumikore 오무라 스미코레、Hayashida Heizaburō 하야시다 헤이자부로
- Rakkyō: 락교（慣用）
- Yamagata-chō (Kuji): 야마가타초
- Gu-zōni: 구조니 / Kawara soba: 가와라 소바 / Atama ryōri: 아타마 료리
- Hattō（후쿠시마）: 원문の表記差（hatto / hattō）を 핫토 に統一
- Shunpanrō: 슌판로（漢字は添えず）
- Kyūshū-gō（高速バス名）: 규슈고
- kujira-mochi（青森）: 구지라모치
- 原文に漢字が無い語には漢字を添えていない（ただし用語集の 伊藤博文 と、原文に漢字がある 湯波・生馬麺・布来・替え玉 系は残した）。

## 原文の問題
- tsuetate: 「Official Tsuetate sources say nothing about recovery from the 2016 earthquakes」と「2026年7月の地震」への言及が混在（2026年の地震の記述は協会ページに無いと原文自身が断っている）。年の取り違えがないか要確認。
- kanto: 本文中に「Nibōto-kai」と「Nibōtō」の綴り揺れ。
- kinki: 本文中の「Kinki」と frontmatter の areas が `kansai`（用語は問題ないが表記のゆれ）。1人称「I」が混在（韓国語では省略または客観表現に調整）。
- setouchi: 「## What makes it Setouchi」「## Eating it at the source」の直前に空行が無い（原文のMarkdown。訳文では空行を入れた）。
- 一部の記事（kyodo-ryori-okinawa）に内部リンクが一つも無い（「start from the local-dishes overview」がリンクになっていない）。
- unzen / ureshino: 同じ地名の「Obama」が福井の小浜ではなく長崎の小浜温泉（韓国語読者には米国大統領と紛らわしい。오바마と表記）。
- 作業中の事故: 共有スクラッチパッドの asm.sh が他の翻訳者のスクリプトに上書きされており、誤って `translations-draft\es\eat\kyodo-ryori-kanto.mdx` を生成してしまった。生成直後に自分で削除した（es の他ファイルは未変更）。
