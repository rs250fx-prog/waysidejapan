# fr wave8-1 報告

13本、すべて error 0。本文語数は frontmatter を除く概数。内部リンクは指示どおり /fr/ で書いた（ガイド §2 の /en/ 規則とは異なる。公開時の一括置換は不要になる）。translationStatus は全件 machine（原文は reviewed）。

## 書いたファイル（translations-draft\fr\ 配下）
| ファイル | 語数 |
|---|---|
| column\crowds-and-local-rules-in-japan.mdx | 約3,070 |
| column\how-japanese-rice-is-actually-cooked.mdx | 約490 |
| column\how-to-eat-sushi-in-japan.mdx | 約1,770 |
| column\japan-laws-and-manners-for-visitors.mdx | 約3,400 |
| column\new-travel-rules-and-charges-in-japan.mdx | 約3,270 |
| eat\bkyu-senbei-jiru.mdx | 約1,050 |
| eat\bkyu-torimotsu.mdx | 約950 |
| eat\chicken-toriten.mdx | 約1,190 |
| eat\donburi-butadon.mdx | 約1,370 |
| eat\drinks-whisky.mdx | 約1,440 |
| eat\kaiseki-bento.mdx | 約1,250 |
| eat\kaiseki-honzen.mdx | 約1,220 |
| eat\meat-gibier.mdx | 約1,170 |

description は 150〜163 字（new-travel 163、chicken-toriten 162 がわずかに 160 超）。表（Markdown table）は 3 本の column にあり、セルを訳した（列数・行数は不変）。

## 新規用語
- 100-Year Food (Cultural Agency) | 100-Year Food（そのまま。bkyu 2本・donburi-butadon に出る）
- Cultural Agency | Agence des affaires culturelles（§4 の Agency for Cultural Affairs に合わせた）
- B-grade food / B-kyū gurume | cuisine de type B（B-1 Grand Prix はそのまま）
- Public Bath Act / Hotel Business Act / Hot Springs Act | loi sur les bains publics / loi sur l’hôtellerie / loi sur les sources chaudes
- Minor Offences Act | loi sur les infractions mineures
- Immigration Control Act | loi sur le contrôle de l’immigration
- Civil Aeronautics Act / Road Transport Act | loi sur l’aviation civile / loi sur le transport routier
- Cultural Properties Act | loi sur la protection des biens culturels
- International Tourist Tax | taxe touristique internationale
- accommodation tax | taxe de séjour
- Local Tax Act | loi sur les impôts locaux
- Metropolitan Police Department | Préfecture de police de Tokyo
- National Police Agency | Agence nationale de la police
- Immigration Services Agency | Agence des services d’immigration
- persons cleared (kenkyo jin’in) | personnes mises en cause
- overstayers | séjour irrégulier prolongé
- white taxi | taxi blanc
- minpaku | minpaku（そのまま）
- tax-free refund method | système de remboursement（détaxe）
- dual pricing | double tarification
- ekiben | ekiben（そのまま）
- gibier (jibie) | gibier

## 要確認
- 「trillion」（¥9.4549 trillion、¥15 trillion など）は、フランス語で数字書式を原文のままにする規則のため「¥9.4549 billions」と書いた。フランス語の billion は 10^12 で英語の trillion に当たる。ただし読者には billion=10^9 と誤読されやすいので、公開時の数字書式変換で「9 454,9 milliards de yens」等にするか要判断（crowds の3箇所）。
- crowds：「Travel Etiquette for the Future」を「Savoir-voyager pour l’avenir」と訳し、原題を括弧で添えた。母語話者確認が望ましい。
- crowds：Kyoto 市民調査の注記「過去形から変わった」を「前年の調査で使われた過去形から表現が変わった」と訳した（原文の意図が不明確）。
- 地名・施設名は原文のローマ字のまま。「Chichū Art Museum」は「musée d’art Chichū」とした。
- kaiseki-honzen：honzen ryōri の「ichijū sansai / nijū gosai」は「une soupe et trois plats / deux soupes et cinq plats」と説明的に訳した。
- bkyu-senbei-jiru：魚 *ugui* を「vandoise」（dace の訳）と注釈なしで訳した。種の確認が望ましい。
- meat-gibier の「trichinella」を「trichine」、「hepatitis E virus」を「virus de l’hépatite E」とした。
- chicken-toriten：「soul food」はそのまま英語で残した（原文が引用符付きの英語）。
- drinks-whisky の「Japan Spirits and Liqueurs Makers Association」を「Association japonaise des fabricants de spiritueux et de liqueurs」と訳した。
- `10:00 à 16:45` のように、原文の時刻表記（コロン）はそのまま残した。

## 原文の問題
- crowds：本文中の「The September 2026 figure is due on 21 October.」は、pubDate が 2026-10-21 なので公開時点で古くなる可能性。
- crowds：Mt Fuji の 2024 年規制の記述で「passage was closed from 16.00 to 3.00」と、2026 年の 14.00 とで時刻が異なる（原文どおり訳した。誤りではなく年ごとの変更の可能性が高い）。
- new-travel：「Cabinet Office」と「Hotel Business Act rules」の呼称が揺れている（Cabinet Office は訳語が決まらずそのまま残した）。
- japan-laws：表の「Making a public bath markedly unclean ...」の項は Public Bath Act art. 5 の記述だが、本文の説明が無い（原文どおり）。
- how-japanese-rice-is-actually-cooked：frontmatter が draft: true、sources が空。原文のまま。
- donburi-butadon の「Yoshinoya ... 2004」の記述は出典 sources に対応するものが見当たらない。
- kaiseki-honzen：FAQ に ISO 日付「2026-10-11」が混在（原文どおり）。
