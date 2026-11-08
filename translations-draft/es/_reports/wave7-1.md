# es wave7-1 報告

## 書いたファイル（12本、語数は概算）
- soak/misasa.mdx（約2,900語）
- eat/konamono.mdx（約2,000語）
- eat/market-toyosu.mdx（約1,700語）
- soak/minakami.mdx（約3,000語）
- eat/konamono-monja.mdx（約1,900語）
- eat/konamono-okonomiyaki.mdx（約2,100語）
- soak/ogoto.mdx（約2,900語）
- soak/ibusuki.mdx（約3,000語）
- eat/konamono-takoyaki.mdx（約1,900語）
- eat/wagashi.mdx（約1,500語）
- soak/unazuki.mdx（約2,900語）
- eat/wagashi-imagawayaki.mdx（約900語）

チェッカー：12本とも error 0、warning 0（ibusuki の「1600」警告は「los años 1600」に直して解消）。
内部リンクは依頼どおり /es/ で書いた（ガイド §2 の「/en/ のまま」とは異なる。公開時の一括置換は不要）。地名は Tokio・Kioto。

## 新規用語
- shitamachi | shitamachi（casco antiguo popular）
- kokumin hoyō onsenchi | onsen de salud nacional（原語を斜体で併記）
- simple alkaline spring | fuente simple alcalina
- hypotonic / low-temperature | hipotónica / de baja temperatura
- radioactive spring | fuente radiactiva
- radium sommelier | sumiller del radio
- sand bath (sunamushi) | baño de arena
- trolley train | tren de vagonetas
- meal voucher | vale de comida
- fresh / semi-dry / dry sweets | dulces frescos / semisecos / secos
- tourism association / tourism bureau / tourism federation | asociación de turismo / oficina de turismo / federación de turismo
- tamagoyaki（Akashi-yaki の現地名）| tamagoyaki（"huevo a la plancha"）
- griddle cake | pastel a la plancha

## 要確認
- 数字の小数点・千位区切りは原文のまま（3,389 / 1.4 mil millones など）。「1.4 billion」は mil millones と訳した（billones ではない）。
- 「Mache units」は「unidades Mache」とした。
- 「Nōka Jizō」「Kaji-i」などの固有名は原文ローマ字のまま。
- 「Sulphate-chloride」等の泉質名（minakami の表）は、直訳で「Sulfato-cloruro de calcio y sodio」とした。母語話者の確認が望ましい。
- 「firefly squid / white shrimp / bai whelk / yellowtail」は calamar luciérnaga / gamba blanca / caracola *bai* / pez limón と訳した（pez limón は yellowtail の対応として一般的だが要確認）。
- 「Okonomimura」「Gozasōrō」「Baby Star」などの商品名・店名は訳さず。
- 「Ōtsu City Ogoto Onsen Supply Ordinance」は「Ordenanza de suministro del onsen de Ogoto de la ciudad de Ōtsu」と意訳。
- 「Kyoto-Higashi interchange」は「enlace Kyoto-Higashi」と固有名のまま（地名 Kioto の規則は本文の都市名にのみ適用）。
- 「Wagashi の kashi = nuts and fruit」は「frutos secos y fruta」とした。

## 原文の問題
- misasa：原文に「pubDate: 2026-12-02」など未来日付があるが、今日（2026-11-09）より後。公開予約なら問題なし。
- misasa：「the 2015 review does not agree with itself on temperature」は原文が自覚している矛盾（76°C と 89.3°C）。そのまま訳した。
- konamono-monja：原文 heroAlt などに問題なし。FAQ の「Tokyo’s official tourism site」は GO TOKYO を指す（原文どおり）。
- minakami：同一ページ内の Takaragawa の巡回バスの案内に、県と宿の英語ページで食い違いがあると原文自身が記載（そのまま訳）。
- ibusuki：原文の「Neither the GI nor ...」等に誤りは見つからず。
- konamono-takoyaki：原文 FAQ「Aizuya ... created takoyaki two years later」の年（1935）は本文に明示されていない（原文どおり）。
- 原文の 12本とも、`translationStatus: reviewed` だが訳文は `machine` にした（ガイドどおり）。
