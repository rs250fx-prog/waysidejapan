# es wave6-4 報告

## 書いたファイル（本文語数は原文の `wc -w` 概数。訳文もほぼ同規模）
- eat/sake-akita.mdx（約1,870）
- eat/sake-hiroshima.mdx（約2,180）
- eat/sake-nada-fushimi.mdx（約2,000）
- soak/sukayu.mdx（約2,940）
- soak/aso-uchinomaki.mdx（約2,870）
- eat/kaiseki.mdx（約2,150）
- eat/sake-niigata.mdx（約1,460）
- soak/echigo-yuzawa.mdx（約2,440）
- eat/kaiseki-shojin.mdx（約1,790）
- eat/kaiseki-tea.mdx（約1,780）
- soak/kaike.mdx（約2,720）
- eat/yakisoba.mdx（約1,580）

すべて `translations-draft\es\<cat>\` 配下。checker: error 0。warning は2件（kaiseki、sukayu）で、「1300s→siglo XIV」「13th→siglos XIII」のように数字を序数表記に直したため。内容は原文どおりで問題なし。

## 方針
- 内部リンクは依頼どおり `/es/` で記述（ガイド §2 の `/en/` とは異なる。公開時の一括置換は不要）。
- 原文の `translationStatus: reviewed` は `machine` に変更。
- 地名は Tokio・Kioto（Kyoto prefecture → prefectura de Kioto）。
- YAML の値は、コロン・引用符を含むものは全体を引用符で囲んだ。

## 新規用語（英語 | スペイン語）
- brewery | bodega
- brewer / master brewer (tōji) | bodeguero / maestro cervecero (*tōji*)
- sake rice | arroz para sake
- geographical indication (GI) | indicación geográfica (IG)
- soft water / hard water | agua blanda / agua dura
- hotpot (nabe, 文脈による) | guiso / olla caliente
- open brewery day | jornada de bodegas abiertas
- national health resort onsen | onsen de salud nacional
- shared bath (外湯) | baño compartido（glossary と同じ）
- town bath (machi-yu) | baño del pueblo (*machi-yu*)
- footbath | baño de pies（glossary と同じ）
- Self-Defence Forces | Fuerzas de Autodefensa
- eel restaurant | restaurante de anguila
- tea kaiseki / banquet kaiseki | kaiseki del té / kaiseki de banquete
- hospitality shōjin | shōjin de hospitalidad
- yakisoba bun | bocadillo de yakisoba
- snow corridor | corredor de nieve
- bathing beach | playa de baño
- regional collective trademark | marca colectiva regional

## 要確認
- 「bodega」は酒蔵の訳語。スペイン語では「ワイナリー」の語感があるため、母語話者に確認したい（代案 destilería は不適）。
- 「tómbolo」（砂州で陸と島がつながる地形）の使用は正しいが、一般読者に難しい可能性。
- 「molino de arroz motorizado」（動力精米機）、「encamado」（稲の倒伏）は農業用語として母語話者確認。
- 「Fuerzas de Autodefensa」は国により訳が揺れる。
- sukayu の「Hakkōda Hotel」「Tama no Yu」、aso の「Sankō buses」など固有の施設・路線名は原文ローマ字のまま。
- 「Quinta Escuela Superior de Kumamoto」（第五高等学校）の訳は確認が必要。
- 「kaiseki del té」の見出し・FAQ では 懐石/会席 の漢字を原文どおり残した。
- 数字の書式（12,321 / 80 mg/L など）は原文のまま。
- sake-nada-fushimi と sake-niigata、kaiseki-shojin、kaiseki-tea の「sake overview」「kaiseki overview」「teishoku overview」「dashi overview」「food-shopping overview」は原文がリンクなしの平文だったので、訳もリンクなしのまま。

## 原文の問題
- sake-nada-fushimi：リンク無しの「sake overview」への言及があり、他記事は `/en/eat/sake/` へリンクしている（原文の不統一の可能性）。
- sake-nada-fushimi FAQ「Nada sake has its own GI, Nada Gogō, designated in June 2018」と本文「28 June 2018」は整合（問題なし）。
- sake-hiroshima：本文に「Hiroshima Lab ページは別の木村を創業者とする」と原文自身が注記している（原文の食い違いの明記）。
- sukayu：本文「Hakkōda was named a volcanic disaster alert area in 2016」と警戒レベル開始 2019 の食い違いを原文が注記済み。
- kaike：「44th race」と1981年からの年数が合わない旨を原文が注記済み。
- kaiseki-shojin：「## Where to eat it」見出しの直前に空行がない（原文の整形ミス。訳では空行を補った）。
- aso-uchinomaki：FAQ で「large rocks」と本文「large volcanic rocks」の語が揺れている程度（軽微）。
- kaiseki：frontmatter の `pricesCheckedOn` は 2026-10-11 だが、更新日は 2026-11-22。更新日と確認日の差は仕様どおりか要確認。
