# wave3-1 報告（es）

## 書いたファイル（語数は frontmatter 込みの wc -w）
- soak/hakone.mdx（4,411語）
- eat/ramen-sapporo.mdx（2,477語）
- eat/udon-goto.mdx（2,398語）
- eat/sushi.mdx（1,844語）
- column/eating-while-walking-in-japan.mdx（1,589語）
- eat/tonkatsu-miso-katsu.mdx（1,404語）
- eat/ramen-kagoshima.mdx（855語）
- eat/udon-kishimen.mdx（784語）

check-translation: 8本とも error 0。warning は数字の書式だけ（sapporo「1950/1980」＝años cincuenta/ochenta、sushi「1800」＝mediados del siglo XIX。いずれも文章で表現、問題なし）。
FAQ の a/q に「: 」が入る行は YAML 破損を避けるため単一引用符で囲んだ。

## 新規用語
- health ministry | ministerio de Salud
- land ministry (MLIT) | ministerio de Tierra
- environment ministry | ministerio de Medio Ambiente
- bean miso | miso de soja
- national health resort hot spring | onsen de salud nacional（*kokumin hoyō onsenchi* 併記）
- bathing tax (nyūtō-zei) | impuesto de baño
- regional collective trademark | marca colectiva regional
- 100-year food | alimento de 100 años
- Japan Heritage | Patrimonio de Japón
- Ramen Yokochō | Ramen Yokochō（そのまま）
- iron pot (jigoku-daki の説明) | olla de hierro
- scoop stick (udon-sukui-bō) | utensilio para recoger（原語併記）

## 要確認
- hakone: 「ministerio de Medio Ambiente」を文中で大文字にせず小文字で統一（§6）。Hakone Jūnana-yu / Nijū-yu はローマ字のまま。
- sushi: gizzard shad は「sábalo gizzard (*kohada*)」とした（kohada は原文に無い補足。不要なら削除）。
- sushi: 「Edomae」「kaiten」「battera」は原文ローマ字のまま。
- ramen-kagoshima / udon-kishimen: muroaji は「macarela」とした（mackerel scad の正確な西語名は未確認。jurel の可能性）。
- udon-kishimen: red fish cake は「pastel de pescado rojo」とした（kamaboko の語は使っていない）。
- udon-goto: 「Taishū soba」「Nagoya karasumi」等は原文ローマ字のまま。
- sushi: 「sábalo」「congrio」「vientre graso del atún」の語選択は母語話者確認が望ましい。
- tonkatsu-miso-katsu: Yabaton メニュー（loin, fillet 等）は「lomo, solomillo」と訳した（和牛部位ではないので §6 の部位表は適用せず）。

## 原文の問題
- hakone: 原文の translationStatus が reviewed（ほか全記事も同様）。訳文は machine にした。
- hakone: 気象庁の警戒レベルは2025年7月の情報に基づく記述で、2026年の確認が無い（原文自身が注記済み）。
- udon-goto: Nagasaki-kan に関する記述が「when I checked」で一人称。ほか記事と文体が揃っているか確認を。
- ramen-sapporo: 原文本文に「New Chitose」の国内線3階など時点情報あり（日付なし）。
