# fr wave6-3 報告

## 書いたファイル（文字数／本文のおよその語数。frontmatter を含む概数）
- eat/western.mdx — 14,584字 / 約1,600語
- eat/western-burger.mdx — 10,281字 / 約1,230語
- eat/western-italian.mdx — 11,397字 / 約1,290語
- eat/western-dairy.mdx — 18,313字 / 約2,230語
- eat/western-machichuka.mdx — 15,690字 / 約1,610語
- eat/western-pan.mdx — 11,256字 / 約1,180語
- eat/western-yoshoku.mdx — 16,134字 / 約1,760語
- eat/sake.mdx — 19,924字 / 約2,250語
- soak/iizaka.mdx — 22,601字 / 約2,610語
- soak/togura-kamiyamada.mdx — 15,953字 / 約1,780語
- soak/naruko.mdx — 30,299字 / 約3,550語
- soak/nyuto.mdx — 29,421字 / 約3,450語

check-translation: 12本とも error 0。warning は数字の形のみ（"1-litre"→"1 litre"、"100-year food" の 100 など）で内容に問題なし。

## 方針メモ
- 内部リンクは指示どおり `/fr/` で書いた（ガイドの「/en/ のまま」とは異なる）。
- 組版の不可分スペース（« » と : ; ! ? の前）は全ファイルに一括適用済み。数字は原文の書式のまま（1,000 / 58% など）。
- YAML の title / description / heroAlt / faq はすべて二重引用符で囲んだ。

## 新規用語
- 100-year food (Agency for Cultural Affairs) | plat centenaire（初出に « 100-year food » を併記）
- local property ward (Iizaka-machi) | conseil de quartier
- milk beverage (nyū-inryō) | boisson lactée
- processed milk (kakō-nyū) | lait transformé
- low-fat milk / non-fat milk | lait à teneur réduite en matière grasse / lait écrémé
- non-fat milk solids | extrait sec dégraissé
- Japan Pasta Association | Association japonaise des pâtes
- Japan Bakers Association | Association japonaise des boulangers
- Consumer Affairs Agency | Agence des affaires de consommation（用語集 §6 の項目に合わせた）
- Fair Trade Commission | Commission du commerce équitable
- Food Sanitation Act | loi sur l’hygiène alimentaire
- national health resort onsen | source thermale nationale de convalescence
- quasi-national park | parc quasi national
- national natural monument | monument naturel national
- national traditional craft | artisanat traditionnel national
- Forestry Agency | Agence des forêts
- geographical indication (GI) | indication géographique (IG)
- brewer’s alcohol | alcool de brasseur
- polishing ratio (seimai buai) | taux de polissage
- Rikuu East line | ligne Rikuu Est
- tōji | tōji（初出に「séjour de plusieurs jours ou semaines」の説明）
- shared bath | bain commun（用語集のとおり）
- footbath / hand bath | bain de pieds / bain de mains
- bath-hopping book / ticket | carnet de bains / billet pour faire le tour des bains
- Napolitan | Napolitan（無変換）

## 要確認
- eat/western-dairy: ALIC の名称を「Agence de promotion de l’agriculture et de l’élevage (ALIC)」と意訳した。公式の仏語名があれば差し替え。
- eat/western-dairy: low-fat milk を「lait à teneur réduite en matière grasse」とした（0.5〜1.5% の範囲に合わせ、demi-écrémé を避けた）。
- eat/western-yoshoku: 「blowfish restaurant」を「restaurant de fugu」、hayashi rice は無変換。
- eat/sake: 「sake meter value (nihonshu-do)」「amino acidity」「ginka」の訳語（valeur du saké-mètre / acidité des acides aminés）。
- eat/western-machichuka: 「lamian」「chūkadon」は無変換、「sweet-sour」は aigre-douce。
- soak/iizaka: 「atsusa banzuke」は原語を残し、説明を添えた。「Respect for the Aged Day」→「jour du Respect des aînés」。
- soak/nyuto: AIST を「Institut national de géologie (AIST)」と意訳。「fifteenth national vacation village」は「quinzième village de vacances national」。
- soak/naruko: 「Mekama / Okama」「Taki no Yu」などの湯名は原文のローマ字のまま。「Kōyō-gō」「Yumeguri-gō」も無変換。
- 全体: 官公庁名（JNTO は用語集どおり「JNTO」、初出の括弧説明は付けていない）。

## 原文の問題
- eat/western-pan: faq の「¥28,731 to ¥28,282 a year」は本文と一致しているが、「households spent about 1.4 times as much on rice」など 2002 年の数値は一次資料の確認が必要（原文自体が確認不足と断っている）。
- soak/naruko: 原文が JR 東日本の復旧見込みを「fiscal 2028, a year later than first planned」と書くが、情報源の日付（2026-07-08）と運行情報（2024年7月から運休）の整合を要確認。
- soak/iizaka: 原文の Sabako-yu の再建年が 1993 と 1992 で、原文自身が両方を併記している（訳文も併記）。
- soak/togura-kamiyamada: 原文の source label に `Nagano''s`（YAML の '' エスケープ）がある。そのまま残した。
- soak/nyuto: Kyūkamura の「15th national vacation village」と環境省の「12th」の食い違いは原文が併記しているため、そのまま。
