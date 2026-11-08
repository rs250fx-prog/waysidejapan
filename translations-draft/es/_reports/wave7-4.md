# es wave7-4 報告

## 書いたファイル（本文の語数、概数）
- soak/totsukawa.mdx 約2,800 / soak/nagayu.mdx 約2,290 / soak/yamanaka.mdx 約2,350 / soak/yubara.mdx 約2,760
- eat/drinks-beer-highball.mdx 約1,920 / eat/drinks-shochu.mdx 約1,930
- eat/food-shopping.mdx 約2,100 / eat/food-shopping-depachika.mdx 約1,360 / eat/food-shopping-ekiben.mdx 約1,770
- eat/instant-noodles.mdx 約2,070 / eat/instant-noodles-bag.mdx 約1,760 / eat/instant-noodles-cup.mdx 約1,810
（すべて translations-draft\es\ 配下。計12本）

## チェック結果
- 9本は error 0。
- instant-noodles / -bag / -cup の3本は error 1 件が残る：英語原文に `translationStatus` が無い（checker の「原文に無いキー」）。ガイドは machine を必須とし、checker の下書きチェックも machine を要求するので、両立できない。ガイド（§2）に従い `translationStatus: machine` を残した。checker 側の修正（原文に無いときは許容）が必要。
- warning（数字）：billion / trillion を es の桁（mil millones・billones・「5,900 millones」など）に直したため、桁の比較で出ただけ。内容は確認済み。

## 新規用語
- grandes almacenes | department store（depachika は原語のまま）
- planta de alimentación | food floor
- comida preparada | prepared food (sōzai)
- charcutería (del supermercado) | supermarket deli
- feria de ekiben | ekiben fair
- alambique continuo / alambique simple | continuous still / single still（shōchū）
- shōchū honkaku | honkaku shōchū
- agua simple alcalina | alkaline simple spring
- agua de hidrogenocarbonato | hydrogen-carbonate spring
- baño de pies | footbath（用語集どおり）
- balneario de salud (nacional) | national health resort
- flujo libre | free-flowing (kakenagashi)
- instituto geográfico nacional | national land survey (GSI)
- cooperativa de crédito | credit union
- Territorios del Norte | Northern Territories
- bata de baño (yuami-gi) | bathing wrap

## 要確認
- 内部リンクは依頼どおり `/es/` で書いた（ガイド §2 は「/en/ のまま」）。ガイドとの食い違いなので、公開時の一括書き換え方針と合っているか確認。
- 地名は依頼どおり Tokio・Kioto。ただし固有名詞内の Tokyo（Gransta Tokyo、Tokyo Shimazake、Tokyo monja の施設名・商品名）は原文のローマ字のまま、Tokio にしていない。
- 「Japan Atomic Energy Agency の前身」を「Agencia de Energía Atómica de Japón」とした（用語集に無し）。
- 官庁名は小文字の短い形：ministerio de Economía（trade ministry）、ministerio de Medio Ambiente、ministerio de Agricultura、ministerio de Finanzas。Japan Department Stores Association は「Asociación Japonesa de Grandes Almacenes」、Japan Hot Spring Association は「Asociación Japonesa de Aguas Termales」と自訳。
- 「Corporación de Industrias Agrícolas y Ganaderas」（ekiben）、「Oficina Regional de Impuestos de Tokio」（shōchū）、「Oficina de Turismo de Kumano de la ciudad de Tanabe」は機関名の自訳。
- 人名・組織名で英語のまま残したもの：Japan Craft Beer Association (JBA)、Japan Spirits and Liqueurs Makers Association、WINA、JIFFA、NRIB（「instituto nacional de investigación de la elaboración」を併記）。
- 「Obon」「Golden Week」はそのまま。「Eras」は era Genroku / Kyōhō / Keichō などと era を付けた。
- 「kaku jokki」「kura-wari」「maewari」など原文の斜体語は斜体のまま。
- haiku（Yamanaka）は原文のローマ字＋日本語のまま、訳を足していない。

## 原文の問題
- instant-noodles 系3本の原文 frontmatter に `translationStatus` が無い（他の記事は reviewed）。
- instant-noodles.mdx に「Since 1 April 2026 … 9 allergens」とあるが、同じ文で Nissin のページの記述との食い違いを筆者が確認していない旨を書いている（原文の留保をそのまま訳した）。
- totsukawa：Kamiyu の温度が village 85°C／plan 53.6°C／研究 57.8°C と食い違う（原文が両論併記しており、そのまま訳した）。
- yamanaka：原文の Bashō の日付「27th day of the 7th month of Genroku 2」は旧暦表記（原文に注記あり）。
- drinks-beer-highball：frontmatter の `updatedDate` と `pubDate` が同日（問題ではないが確認の余地）。
- food-shopping の本文中「start from the konbini overview」「start from the drinks overview」「buying-food overview」はリンク無しのまま（原文もリンク無し）。
