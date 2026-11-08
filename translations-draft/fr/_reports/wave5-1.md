# fr wave5-1 報告

## 書いたファイル（語数は wc -w、frontmatter 込み）
- soak/gero.mdx 約4,900語
- soak/ginzan.mdx 約3,100語
- soak/yunoyama.mdx 約2,450語
- eat/ramen-iekei.mdx 約2,260語
- eat/meat-pork.mdx 約2,030語
- eat/soba.mdx 約1,870語
- eat/soba-izumo.mdx 約1,490語

全7本：チェッカ error 0。YAML は js-yaml で全件読めることを確認（faq と sources の件数も原文と一致）。
warning は「原文の数字が足りない」のみ（XVe / XVIe / XVIIe 世紀のローマ数字、「100年フード」→ centenaire、five → cinq）。意図どおり。

## 新規用語
- hypotonic / neutral / high-temperature spring | hypotonique / neutre / à haute température
- national health resort onsen | onsen de cure national
- shuttle (day visitors) | navette
- warrior monk (sōhei) | moine guerrier (sōhei)
- brand pork / black pork | porc de marque / porc noir
- standing soba | soba debout
- hotpot (nabe) | pot-au-feu（sōhei-nabe）
- capital line (shihon-kei) | lignée capitaliste
- direct line (chokkei) | lignée directe
- stewards（ginzan の現地係員） | stewards

## 要確認
- gero：Funsenchi / Shirasagi-no-Yu / Sachi-no-Yu / Gasshō-mura 等、原文のローマ字をそのまま残した。
- gero：「Our Local Cuisines」（農水省のシリーズ名）は英語の書名のまま。公式のフランス語名があれば差し替え。
- gero：「Asian Games」→「Jeux asiatiques」（2026年名古屋大会のつもり）。
- gero：Osaka Onsen-kyō の「小坂」は原文どおり日本語表記で残した。
- ginzan：「Goshoyama Prefectural Natural Park」→「parc naturel préfectoral de Goshoyama」。
- ginzan：Ōu mountains →「monts Ōu」、Shinkansen は「shinkansen」（小文字）で統一。soba では原文の見出しに合わせ「Shinkansen du Tōhoku」。
- yunoyama：「Kansai no oku-zashiki」は原語のまま、訳は括弧の「salon intérieur」に頼った。
- yunoyama：Satsuma Rebellion →「rébellion de Satsuma」、Aichi National Sports Festival →「Festival national des sports d’Aichi」。
- ramen-iekei：「Teikoku Databank」、「Garden Co.」、「Gift Holdings」は原文のまま。
- ramen-iekei：「Ichikakuya Day」は原語のまま、「le jour d’Ichikakuya」と併用。
- meat-pork：「Berkshire」は仏語でもそのまま。「six blancs」（roppaku）は訳語を添えた。
- soba：lineage-table / DishPrices の部品は props 変更なし。transcript（画像の文字起こし）は訳した。
- 数字は全て原文書式のまま（小数点・千位の変換はしていない）。

## 原文の問題
1. gero：万里集九の来訪年。市の日本語ページが「延徳元年（1265）」と書くが、延徳元年は1489年（原文が既に指摘済み）。
2. gero：Hayashi Razan の像は「1992 年から」と、「年間150万人以上」の併記が時期的に不明確（原文のとおり訳した）。
3. ginzan：2026–27 冬季交通案内のページが「制作ドラフト」の注記つきで sources に入っている。公開前に正式版へ差し替えが要る可能性。
4. soba：英語の title は "70% of it is grown abroad" だが、本文は国産比率を「about 30%」と書く（38,000 / (38,000+88,000)）。整合はするが、数字は実は輸入の比率（約70%）。表現に注意。
5. soba-izumo：hikigurumi を「小麦約20%」とする記述が、冒頭の「whole-grain」の説明と、soba 記事の jūwari / ni-hachi 説明の間でやや緊張（原文のまま訳した）。
