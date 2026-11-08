# wave5-3 報告（es）

## 書いたファイル（本文の語数は原文 wc -w を目安、スペイン語は概ね1.1〜1.2倍）
- es/soak/kurokawa.mdx（原文 約3,270語）
- es/soak/yugawara.mdx（約2,890語）
- es/soak/masutomi.mdx（約2,450語）
- es/soak/jozankei.mdx（約2,130語）
- es/eat/ramen-kitakata.mdx（約1,950語）
- es/eat/seafood-fugu.mdx（約1,740語）
- es/eat/meat-jingisukan.mdx（約1,690語）

自己点検：check-translation の error は 7本とも 0。YAML は js-yaml で全7本読めることを確認。description は全て 150〜159 文字。translationStatus は machine に変更（原文は reviewed）。
warning（確認のうえ問題なしと判断）：jozankei「19」、masutomi「4, 16」。数字は原文どおり入れており、桁比較の拾い方による誤検知とみられる。

## 新規用語
- Ministry of Health, Labour and Welfare（health ministry）| ministerio de Salud
- Food Sanitation Act | Ley de Higiene Alimentaria
- Food Safety Commission | Comisión de Seguridad Alimentaria
- mutton / lamb | carne de oveja / cordero
- Genghis Khan | Gengis Kan
- Hokkaido Heritage | Patrimonio de Hokkaido
- national health resort onsen（kokumin hoyō onsenchi）| balneario nacional de salud（*kokumin hoyō onsenchi*）
- open-air bath | baño al aire libre
- entry pass（nyūtō tegata）| pase de entrada
- ryokan（inn）| ryokan（原文の inn を ryokan に統一）
- Aso Geopark / Hakone Geopark / Izu Peninsula Geopark | Geoparque de Aso / de Hakone / de la península de Izu
- sheep station | estación de ovejas
- tiger puffer | tora-fugu
- hot spring research institute | instituto de investigación de aguas termales

## 要確認
- inn を ryokan にしたのは、同じ soak 系の既訳との整合のため。母語話者に「alojamiento」などの方が良いか確認。
- mutton を「carne de oveja」、sirloin 等は未使用。
- 「balneario nacional de salud」は公式の定訳があるか未確認。
- 「Meiji 42」「Keiō 2」は「Meiji 42 (1909)」の形に。era 表記の方針が合うか。
- Hōtō の語は原文どおり。ramen-kitakata の「Bannai Shokudō (細田 7230)」の漢字・番地は原文のまま残した。
- ramen-kitakata の「Rōmenkai」、jozankei の「Kappa Pool」を「Poza de los Kappa」とした点。
- yugawara で wakasagi を「pond smelt」の訳として使用（用語集の wakasagi に合わせた）。

## 原文の問題
1. yugawara：「the only one of the three towns on this page」「among the three towns on this page」。この記事は1つの町だけなので、3町の記事から転用した文が残っている。
2. kurokawa：「An earlier version of this page gave … I have corrected it」「as read for the first version of this page」。編集履歴のメモが本文に残っている。
3. jozankei：「I read this page through a summarising tool」が2か所。作業工程のメモが本文に残っている。
4. meat-jingisukan：「Check fares and journey times with the operator before you travel」。交通の話がない記事に、定型文が残っている。
5. ramen-kitakata：「Bannai Shokudō (細田 7230)」の住所が断片的で意味不明。「Two of the three names in every guide」は、本文で名前が挙がる閉店店が2つなのに「3つ」とある。
6. kurokawa：浴場数が「25」と「about 25」で揺れ、本文でも「about 25」。ペアは原文どおり訳した（原文自体が各資料の差を述べている）。
