# wave5-2 報告（ko）

## 書いたファイル（本文は原文の約1.0倍規模、全8本、check-translation は error 0）
- soak/onsen-water-types.mdx
- soak/ito.mdx
- soak/kawayu.mdx
- eat/udon-inaniwa.mdx
- eat/nabe-miso.mdx
- eat/wagyu.mdx（warn 1：原文 ¥73 billion を ¥730억 と書いたため「73」が一致しない。表記は正しい）
- eat/seafood-anago-hamo.mdx
- eat/seafood-himono.mdx
YAML は js-yaml で8本とも読めることを確認。description は全て60〜90文字。

## 新規用語
- Hot Springs Act | 温泉法 | 온천법
- therapeutic spring (ryōyōsen) | 療養泉 | 요양천(療養泉)
- simple / chloride / hydrogen-carbonate / sulphate / carbon dioxide / iron / acidic / iodine / sulphur / radioactive spring | 単純温泉 / 塩化物泉 / 炭酸水素塩泉 / 硫酸塩泉 / 二酸化炭素泉 / 含鉄泉 / 酸性泉 / 含よう素泉 / 硫黄泉 / 放射能泉 | 단순천 / 염화물천 / 탄산수소염천 / 황산염천 / 이산화탄소천 / 철천 / 산성천 / 요오드천 / 유황천 / 방사능천
- cold mineral spring | 冷鉱泉 | 냉광천
- yuatari | 湯あたり | 유아타리
- kashikiri-buro | 貸切風呂 | 전세탕(貸切風呂, 가시키리부로)
- Seven Lucky Gods | 七福神 | 칠복신
- Itō / Tōkaikan / Matsukawa | 伊東 / 東海館 / 松川 | 이토 / 도카이칸 / 마쓰카와
- Miura Anjin (William Adams) | 三浦按針 | 미우라 안진(三浦按針) / 윌리엄 애덤스
- Kawayu / Teshikaga / Iōzan / Atosanupuri / Kussharo / Sunayu | 川湯 / 弟子屈 / 硫黄山 / アトサヌプリ / 屈斜路 / 砂湯 | 가와유 / 데시카가 / 이오잔 / 아토사누푸리 / 굿샤로 / 스나유
- Inaniwa udon / Yuzawa | 稲庭うどん / 湯沢 | 이나니와 우동 / 유자와
- Hatcho miso | 八丁味噌 | 핫초 된장
- Wagyu / Kuroge / kokusan-gyū / A5 | 和牛 / 黒毛 / 国産牛 | 와규 / 구로게 / 고쿠산규 / A5
- anago / hamo / tsume / honekiri | 穴子 / 鱧 / ツメ / 骨切り | 붕장어(아나고) / 갯장어(하모) / 쓰메 / 호네키리
- himono / ichiya-boshi / Odawara-biraki | 干物 / 一夜干し / 小田原開き | 히모노 / 이치야보시 / 오다와라비라키

## 要確認
- 人名の読み：Satō Ichibei / Satō Kichizaemon / Satō Seiji / Satō Yōsuke（사토 이치베에 / 기치자에몬 / 세이지 / 요스케）、Mukai Shōgen（무카이 쇼겐）、Inaba Yasutarō（이나바 야스타로）、Sano Magoemon（사노 마고에몬）、Yasuda Zenjirō（야스다 젠지로）。漢字は原文に無いものは添えていない。
- 原文にローマ字だけの地名・施設：Ozawa（오자와）、Kanbun Gonendō（そのままローマ字）、Geihan Tsūshi / Hamu Hyakuchin（ローマ字残し）、Hamo Dōchū（하모 도추）、Ōno Seto（오노 세토）、Kusumi / Oka / Komuro / Usami / Matsubara（구스미 / 오카 / 고무로 / 우사미 / 마쓰바라）、Mōriya / Imahan / Wadakin / Sennaritei（모리야 / 이마한 / 와다킨）。
- Marsh Labrador tea（Ezo-iso-tsutsuji）は 에조이소쓰쓰지(Labrador tea) と表記。
- 「農林水産省」は文中で 농림수산성、ministry 単独は 성 を避けて農林水産省に統一した箇所あり。
- ¥73 billion を ¥730억 とした（万単位は使っていない）。

## 原文の問題
- onsen-water-types：環境省の件数表の4数字の合計が27,900で総数27,899と1ずれる（原文が既に注記）。
- ito：第二の船の建造年が資料内で1607年と「翌年から」に揺れる（原文が既に注記）。
- kawayu：硫黄採掘の終了年が1896年（協会）と1963年（気象庁）で食い違う（原文が既に注記）。説明会の年（9月1日）が不明。
- udon-inaniwa：1665年・創始者・藩御用達の年（1690/1752）が資料ごとに違う（原文が既に注記）。
- anago-hamo：原文内に「tax-included price 未確認」の記述のみで価格表なし（問題ではないが、frontmatter の pricesCheckedOn 2026-10-10 と整合）。
