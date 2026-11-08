# fr wave6-2 報告

check-translation: 12本とも error 0 / warning 0。内部リンクは依頼どおり `/fr/`（frontmatter・import・sources は原文のまま、translationStatus は machine）。

## 書いたファイル（文字数、frontmatter 込み）
- eat/tea-kakigori-kissaten.mdx 17,840
- eat/sweets.mdx 15,817
- eat/tea-regions.mdx 19,552
- eat/sweets-amamidokoro.mdx 11,364
- eat/sweets-conbini.mdx 9,861
- eat/sweets-crepe.mdx 7,728
- eat/sweets-yakiimo.mdx 6,453
- eat/sweets-yogashi.mdx 11,138
- soak/okuhida.mdx 21,617
- soak/toyako.mdx 18,031
- soak/higashiyama.mdx 17,262
- soak/shirahone.mdx 23,821

## 新規用語
- Hida beef | bœuf de Hida
- national health resort hot spring | source thermale nationale de villégiature pour la santé
- Meteorological Agency (JMA) | Agence météorologique du Japon
- volcanic alert level | niveau d’alerte volcanique
- tencha / gyokuro / kabusecha / sencha | tels quels（原語）
- deep-steamed sencha | sencha à la vapeur profonde
- geographical indication (GI) | indication géographique (IG)
- shaved ice (kakigori) | glace pilée (kakigori)
- coffee house (kissaten) | café / kissaten
- sweet shop (amamidokoro) | salon de douceurs (amamidokoro)
- convenience-store sweets | douceurs de konbini
- roast sweet potato | patate douce rôtie（yaki-imo 併記）
- tax included | TTC / taxes comprises
- caldera lake | lac de caldeira
- footbath / hand bath | bain de pieds / bain de mains
- mixed open-air bath | bain mixte en plein air
- Kōchi（地名、マクロン保持）

## 要確認
- 政府機関名の訳（Fair Trade Commission = Commission de la concurrence loyale、Patent Office = Office des brevets、Hot Springs Act = loi sur les sources thermales、Act against Unjustifiable Premiums and Misleading Representations = loi contre les primes injustifiables et les représentations trompeuses）。用語集に無く、仮訳。
- Japan Hot Spring Association = Association japonaise des sources thermales、All Japan Coffee Association = Association japonaise du café（仮訳）。
- ALIC は原文の英語名（Agriculture and Livestock Industries Corporation）をそのまま残した。
- 「Long-Run Fireworks」は « Long-Run » と引用符で残した（大会の英語名）。
- 「ro-ten-buro day」は原文の読みを残し、括弧で訳を添えた。
- 「fruit restaurant」「fruit parlour」＝ restaurant de fruits / salon de fruits（仮訳）。
- tea-regions で « 3e / 1re / 2e » 表記と « XVe siècle » 等のローマ数字を使用（原文は 15th など）。
- 数字の書式は原文どおり（1,500 / 58,669 / 10%）。okuhida の FAQ 等も同様で、公開前一括変換が必要。
- Funawa 等、固有名詞はローマ字のまま。

## 原文の問題
- okuhida：原文の「Hotaka…not on the agency’s list」など問題なし。ただし Kasagatake の標高が同一サイト内で 2,897 m と 2,898 m（原文が両論併記済み）。
- tea-kakigori-kissaten：表の見出し行に末尾の空セル（`| Year | Coffee houses | `）があり、Markdown の列数が崩れる可能性。
- tea-kakigori-kissaten：FAQ「Tokyo one for every 2,254」と本文は一致。updatedDate が pubDate と同日で、pricesCheckedOn（2026-10-10）より後の日付。矛盾ではないが確認の余地あり。
- sweets-conbini：Seven-Eleven の価格が小数（¥291.60 など）。原文どおり。
- shirahone：原文の「Kamakura Ōkan road」の年代は明記なし（そのまま訳）。
