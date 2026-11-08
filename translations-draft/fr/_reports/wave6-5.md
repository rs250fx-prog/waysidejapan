# fr wave6-5 報告

自己点検：12本すべて error 0 / warning 0（check-translation.mjs）。本文の内部リンクは指示どおり `/fr/`（soak の kinugawa・nanki-katsuura のみリンクあり）。

## 書いたファイル（本文の語数、空白区切り）
- eat/yakisoba-fujinomiya.mdx 923
- eat/conbini.mdx 1418
- soak/kinugawa.mdx 2111
- eat/yakisoba-yokote.mdx 712
- eat/conbini-oden.mdx 991
- eat/conbini-onigiri.mdx 1038
- soak/nanki-katsuura.mdx 2811
- eat/dashi.mdx 2214
- eat/dashi-east-west.mdx 1552
- soak/onsen-shikoku.mdx 3323
- eat/dashi-iriko-ago.mdx 1136
- eat/shun.mdx 2016

description は 155〜168 字（kinugawa 165・conbini-onigiri 162・nanki-katsuura 162・dashi 163・shun 168 は目安160をわずかに超過。checker は通る）。

## 新規用語
- Japan Franchise Association | Association japonaise de la franchise
- National Diet Library | Bibliothèque nationale de la Diète
- Umami Information Center | Centre d’information sur l’umami
- Japan Meteorological Agency | Agence météorologique du Japon
- Japan Geoscience Union | Union japonaise des géosciences
- Red Data Book | Livre rouge
- Median Tectonic Line | ligne tectonique médiane
- hot spring law | loi sur les sources thermales
- national health resort onsen (kokumin hoyō onsenchi) | station thermale nationale de santé（*kokumin hoyō onsenchi* を併記）
- Important Cultural Property | bien culturel important
- 100-Year Food | aliment de 100 ans
- reduced tax rate / "providing a meal" | taux réduit / « fourniture d’un repas »
- limited express | express limité
- local train | train omnibus
- hashiri / shun / nagori | そのまま（初出で説明）
- kombu road / kitamae ship | 「route du kombu」/ navires *kitamae*
- cold spring | source froide

## 要確認
- 大きな数の単位：`¥12.06 trillion` → `¥12.06 billions`（フランス語の短位法）、`16.3 billion` → `16.3 milliards`、`¥6,576,259 thousand` → `6,576,259 milliers de yens`。公開時の数字書式一括変換のとき見直しを。
- `Nanki-Katsuura Onsen` の「ville / commune」の使い分け（town → ville）、`Nachikatsuura` を「ville」としたが町制の訳は要確認。
- 「Wakayama’s World Heritage Centre」は `Centre du patrimoine mondial de Wakayama`（県の機関名）。
- 「shōjin kaiseki」「kaiseki」は訳さず原語のまま。
- `Tama-no-ishi`、`Nukata no Ōkimi`（原文は poet、訳は poétesse）：性別表現の確認。
- 時刻 `9:00 à 18:00` はコロン前に不可分スペースなし（§6 の規則）。`7 h` は原文の「7 a.m.」の訳。
- `beni haruka` / `annō-imo`、`Famichiki`、`Torori mitsu-imo` は原文のローマ字のまま。
- 注：conbini-oden の「FamilyMart seule prépare quatre bouillons」は原文の "FamilyMart alone blends four broths" の直訳。

## 原文の問題
- conbini：「eat-in tax 8%/10%」の説明と、2027年4月からの1%案（「explicitly conditional on a bill」）は将来の日付を含む。公開前に最新確認が要る。
- yakisoba-fujinomiya / yokote：`translationStatus: reviewed` のまま原文にあるが、日付は `updatedDate: 2026-11-24/25`（今日より後ではない）で問題なし。ただし「2026-10-10」の確認日が記事ごとに散在。
- shun：pricesCheckedOn が 2026-10-11 だが本文は「as of 2026-10-10」と書く（1日ずれ）。
- kinugawa：「Nikko city」と JNTO 記述の混在、`Kinuta no Yu`（原文では footbath の名前）と faq の表記は一致。日付 `1 February 2024` は問題なし。
- nanki-katsuura：faq の World Heritage 登録日 7 July 2004 と本文は一致。ただし Wakayama 県「177 sources (March 2018)」と Red Data Book「200超」は原文自身が不一致を認めている。
- dashi：JNTO の Kodama Shintarō（1913）などの人名・年は一次出典未確認（原文のまま訳した）。
