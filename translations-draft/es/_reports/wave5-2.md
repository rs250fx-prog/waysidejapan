# es wave5-2 報告

## 書いたファイル（原文の語数、`wc -w` 基準。訳文はほぼ同量）
- soak/onsen-water-types.mdx（3673）
- soak/ito.mdx（2874）
- soak/kawayu.mdx（2413）
- eat/udon-inaniwa.mdx（2109）
- eat/nabe-miso.mdx（1769）
- eat/wagyu.mdx（1722）
- eat/seafood-anago-hamo.mdx（1445）
- eat/seafood-himono.mdx（1029）

自己点検：check-translation error 0。warning は kawayu のみ（19, 20 = 「19世紀・20世紀」をローマ数字 XIX/XX にしたため。問題なし）。8本とも frontmatter を YAML として読めること、description が 120〜160 字に収まることを確認済み。

## 新規用語
- Hot Springs Act | Ley de Aguas Termales（既存の es 記事と統一）
- therapeutic spring (ryōyōsen) | manantial terapéutico
- Japan Hot Spring Association | Asociación Japonesa de Aguas Termales
- Japan Meat Grading Association | Asociación Japonesa de Clasificación de Carnes
- Beef Marbling Standard (BMS) | Estándar de Marmoleado de la Carne de Vacuno (BMS)
- Japanese Black / Brown / Shorthorn / Polled | Negro Japonés / Pardo Japonés / Shorthorn Japonés / Sin Cuernos Japonés
- traceability law | ley de trazabilidad
- Seven Lucky Gods | Siete Dioses de la Suerte
- pike conger (hamo) | hamo（本文では「congrio picudo」と説明）
- hand bath | baño de manos
- soybean miso / barley miso / rice miso | miso de soja / de cebada / de arroz
- miso-simmered udon | udon estofado en miso
- Imperial Household Ministry | Ministerio de la Casa Imperial
- Patent Office | Oficina de Patentes
- cold mineral spring | agua mineral fría

## 要確認
- 和牛の部位（round → babilla、sirloin → solomillo alto）は用語集どおりだが、母語話者の確認が要る。
- Negro Japonés などの和牛4品種のスペイン語名は定訳が不明。母語話者の確認が要る。
- onsen-water-types の「Natorium-enkabutsu-sen」など、泉質名のローマ字は原文のまま。表の見出しの「(sen)」注記は、原文の「spring」を直したもの。
- 「Estados」の表記や「ejercicio fiscal」（fiscal year）の用語は他記事と揃えていない可能性あり。
- ito / kawayu の内部リンクは `/en/...` のまま（規則どおり）。
- nabe-miso の「visión general de sopas y cocidos」、anago-hamo / himono の「visión general de productos del mar」「del sushi」「del unagi」は原文でリンクなしの語。そのまま平文で訳した。

## 原文の問題
- onsen-water-types：`translationStatus: reviewed` のまま draft に置かれているため、es 側は `machine` にした（規則どおり）。ほか 7 本の原文も `reviewed`。
- onsen-water-types：本文の radon の表で「Lithium」などの語順は問題ないが、「Radium salt 0.00000001 mg」の「one hundred-millionth」は 1 億分の1で正しい。問題なし。
- onsen-water-types：「These four figures add up to 27,900, one more than the total」と原文が自分で断っている点は、そのまま訳した。
- ito：原文「Tōkaikan」の節で、休館日を「third Tuesday of each month, among other days」と書くが、出典の確認が弱い。
- ito / kawayu：`pubDate` 欠落や日付の矛盾は見つからず。kawayu は「1 September」の説明会の年が原文でも不明（原文が断っている）。
- nabe-miso：FAQ の「Shinshu miso is classed as ... salty rice miso」と本文は一致。
- wagyu：本文の「exported ¥73 billion」は円の大きな数。`¥73 billion` を「¥73 mil millones」と訳した（billion = 10の9乗。原文の意図と合うか要確認）。
- anago-hamo：Miyajima anago-meshi の「Meiji 34 = 1901」は正しい。
