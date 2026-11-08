# fr wave6-1 報告

## 書いたファイル（語数は wc -w、frontmatter 込み）
- column/tourist-prices-at-famous-markets.mdx 約1,100
- eat/seafood-oyster-crab.mdx 約2,230
- eat/seafood-saba-katsuo-maguro.mdx 約2,350
- soak/shuzenji.mdx 約3,070
- soak/nozawa.mdx 約3,750
- eat/rice.mdx 約2,530
- eat/seafood-salmon.mdx 約1,840
- eat/rice-curry.mdx 約2,600
- eat/rice-onigiri.mdx 約2,050
- soak/sounkyo.mdx 約2,320
- soak/hanamaki.mdx 約2,700
- eat/tea.mdx 約2,860

すべて check-translation error 0。warning は oyster-crab の「1500, 1600, 1800」のみ（世紀をローマ数字 XVIe 等で訳したため。内容は一致）。内部リンクは最初から /fr/。不可分スペースは自動挿入済み。

## 新規用語
- Ministry of Health → ministère de la Santé
- Food Sanitation Act → loi sur l’hygiène alimentaire
- Geographical Indications Act → loi sur les indications géographiques
- Japan Maritime Self-Defense Force → Force maritime d’autodéfense du Japon
- Japan Meteorological Agency → Agence météorologique du Japon
- National Diet Library → Bibliothèque nationale de la Diète
- Japan Heritage → Patrimoine du Japon
- WCPFC → Commission des pêches du Pacifique occidental et central (WCPFC)
- Japan Fisheries Association → Association japonaise des pêches (Dai Nippon Suisankai)
- Consumer Affairs Agency（用語集の Agence des affaires de consommation を使用）
- rice traceability law → loi sur la traçabilité du riz
- Important Intangible Folk Cultural Property → bien culturel folklorique immatériel important
- national health resort onsen area (kokumin hoyō onsenchi) → station thermale de santé nationale
- Rice Stable Supply Support Organization → Organisation de soutien à l’approvisionnement stable en riz
- cooking oyster / raw-eating oyster → huître à cuire / huître à manger crue
- sotoyu → sotoyu（bains extérieurs の説明付き）、yu-nakama → yu-nakama
- covered tea (ōi-cha) → thé couvert
- retort pouch → sachet rétort
- seiko-gani, matsuba-gani 等の蟹の呼称は原文ローマ字のまま

## 要確認
- description が160字をやや超える記事あり（column 166、onigiri 178、oyster-crab 174 など。チェッカーの許容は200）。公開前に160以内へ詰めるか判断を。
- 「Seki saba」「Seki aji」を「saba de Seki」等と冠詞つきで訳した（固有ブランド名の扱い）。
- 「Ice Fall Festival」→ Festival des chutes de glace（固有名の意訳）。
- 「Hundred Views of Japan」→ Cent vues du Japon、「Twelve Heavenly Generals」→ Douze Généraux célestes。
- 「Japan Anniversary Association」は原語を括弧で残した。
- onigiri 記事の「The Tale of Genji」→ Le Dit du Genji（定訳に近いが母語話者確認を）。
- 「Hanamaki Manten-no-yu」等の施設名はローマ字のまま。
- 「Hōrai-yu」の臨時休業告示の訳（mazout = 重油）。
- 数字のコンマ・小数点は §1 のとおり原文の書式のまま。

## 原文の問題
- tourist-prices（column）: 原文 `draft: true` かつ `translationStatus: reviewed`。訳は machine にした。draft は原文どおり true のまま。
- rice-curry: 「Hayashi」と「hayashi rice」の表記が混在（原文どおり訳した）。
- nozawa: 「ogama」「Ōgama」「Ogama」の表記揺れが原文にある（原文のまま訳した）。
- shuzenji / sounkyo / hanamaki: 原文の内部リンク先（kyodo-ryori-chubu / hokkaido / tohoku、naruko、iizaka、higashiyama、sukayu、toyako など）が実在する記事かは未確認。
