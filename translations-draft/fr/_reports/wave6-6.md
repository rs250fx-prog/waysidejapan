# fr wave6-6 報告

## 書いたファイル（translations-draft\fr\ 配下、語数は原文語数のおおよそ）
- soak/yudanaka-shibu.mdx（約2700）
- eat/shun-autumn-winter.mdx（約2200）
- eat/shun-spring-summer.mdx（約1750）
- soak/zao.mdx（約2850）
- soak/hinagu.mdx（約2600）
- eat/seasonal.mdx（約1900）
- eat/seasonal-hinamatsuri.mdx（約1000）
- eat/seasonal-new-year.mdx（約1270）
- eat/seasonal-setsubun.mdx（約1310）
- soak/tsukioka.mdx（約2050）
- eat/market.mdx（約1920）
- eat/market-omicho-hakodate.mdx（約1370）

check-translation: 12本とも error 0、warning 0（description は120〜160字に収めた。market のみ約160）。
内部リンクは指示どおり /fr/ で記述（ガイド §2 の /en/ のままとは異なる。公開時の一括書き換えは不要）。不可分スペースは : ; ! ? と « » に挿入済み。

## 新規用語
- washoku | washoku（そのまま）
- tōji | tōji（séjour thermal de plusieurs jours ou semaines と説明）
- sotoyu / gensen kakenagashi | sotoyu / gensen kakenagashi（原語のまま）
- monster of snow (juhyō) | monstres de neige (juhyō)
- 100-year food | aliment de 100 ans
- gyōji-shoku | gyōji-shoku（cuisine des événements annuels）
- hashiri / shun / nagori | hashiri / shun / nagori
- Forestry Agency | Agence des forêts
- priority landscape district | district paysager prioritaire
- national health resort onsen | onsen de villégiature de santé nationale
- Chikuwan Dog | Chikuwan Dog（原語）
- shaku tempura | tempura de shaku
- seafood bowl (kaisendon) | bol de fruits de mer (kaisendon)
- wholesale market / intermediate wholesaler | marché de gros / grossiste intermédiaire (nakaoroshi)
- negotiated trading (aitai) / auction (seri) | transaction de gré à gré (aitai) / vente aux enchères (seri)
- sakura-dai | sakura-dai（daurade de la saison des cerisiers）

## 要確認
- 魚介・植物名：pike conger（hamo）=congre brochet、blackthroat seaperch=nodoguro（そのまま）、pond smelt=wakasagi（用語集どおり）、turban shell=turbo、Japanese parsley=persil japonais（セリ）、Japanese honewort=mitsuba、water shield=brasenia、yamaimo=igname yamaimo、hosta=hosta、Amur adonis=adonis de l’Amour、Japanese belladonna=belladone japonaise。母語話者の確認が望ましい。
- sweetfish (ayu) を「l’ayu (*ayu*)」と訳した（重複気味。整理可）。
- 数字は原文書式のまま（1,300 / 18,000 / 70.6 % など）。「70.6 %」の % 前に不可分でないスペースを置いた（公開時の一括処理で統一）。
- 時刻 10 h / 10:00 の混在：原文が "10 to 20"（hinagu FAQ）の箇所のみ「10 h à 20 h」とした。

## 原文の問題
- shun-autumn-winter：「Autumn products appear in autumn」の節で 2 September を「autumn」とする記述は意図的な皮肉と思われるが、説明なし。
- zao：5,900 の単位が原文でも不明（記載済み）。pricesCheckedOn 2026-10-11 だが記事末「Getting there」は 11 October 2026 確認。
- yudanaka-shibu：原文の "50.°C" は誤植のまま（原文が as printed と明記）。pubDate/updatedDate が 2026-11-28 で pricesCheckedOn(2026-10-13) と大きく離れるが矛盾ではない。
- hinagu：FAQ で「Hon-yu on 1F」と本文の "banpeiyu" 表記。"3F has family baths" と "some family baths" の関係は原文どおり。原文に "Kōkan-sen" の綴りが一度のみ。
- seasonal-new-year：frontmatter に updatedDate が無く pubDate 2026-12-01 が他記事より後（問題なし）。
- seasonal / hinamatsuri：原文の "Jōshi, 3 March" と本文 "3 March" で整合。特記なし。
- tsukioka：原文 "Echigo Kōtsū runs the bus" は誤解として否定するための記述（そのまま訳した）。
- market：LineageTable の dish="market" の行内容は別ファイル依存（未確認）。
- tsukioka「top class」「bijin no yu」、hinagu「Kōkan-sen」（source de la piété filiale）、yudanaka「seven faces」の引用訳は要確認。
