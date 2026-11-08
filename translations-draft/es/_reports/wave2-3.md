# 報告 wave2-3（es）

check-translation：自分の7本はすべて error 0。warning 2件は下記（ローマ数字の世紀）。

## 書いたファイルと語数（本文のみ、概数）
- translations-draft/es/soak/yufuin.mdx：約3,500語
- translations-draft/es/eat/ramen.mdx：約2,140語
- translations-draft/es/eat/gyoza.mdx：約1,920語
- translations-draft/es/column/restaurant-reservations-in-japan.mdx：約1,640語
- translations-draft/es/column/chopsticks-in-japan.mdx：約1,220語
- translations-draft/es/eat/chicken-mizutaki.mdx：約1,160語
- translations-draft/es/eat/wagyu-tajima.mdx：約890語

## 新規用語
Consumer Contract Act | Ley de Contratos de Consumo
National Consumer Affairs Center | Centro Nacional de Asuntos del Consumidor
Tokyo District Court | Tribunal de Distrito de Tokio
chopsticks | palillos
bad form（箸のマナー違反） | mala educación
no-show | no-show（そのまま）
disposable chopsticks | palillos desechables（*waribashi* 併記）
hotpot（mizutaki） | olla（olla de pollo）
rice cakes（mochi） | pastelitos de arroz（*mochi*）
offal | menudillos
young chicken（wakadori） | pollo joven（*wakadori*）
seed stock（moto-ushi） | ganado base（*moto-ushi*）
heifer / steer | hembra / macho castrado
pan-fried / deep-fried / boiled（gyoza） | frito en sartén / frito en abundante aceite / hervido
billion（10^9） | mil millones（5.9 mil millones、¥790 mil millones など。billones は使っていない）
simple spring / chloride spring / sulphate spring | manantial simple / de cloruros / de sulfatos
national health resort onsen | onsen de salud nacional（*kokumin hoyō onsenchi* 併記）
Japan Meteorological Agency | Agencia Meteorológica de Japón
Japan Spa Association | Asociación Japonesa de Balnearios

## 要確認
1. wagyu-tajima：quality 2 / marbling 6 は「calidad」「marmoleado」と直訳した。国内用語（等級の言い方）を母語話者に確認したい。
2. wagyu-tajima：steer を「macho castrado」とした。「novillo / buey」の選択は母語話者の確認が要る。
3. chopsticks：*kuromoji*（黒文字）を「el arbusto kuromoji」とした（原文は spicebush）。スペイン語の通用名は未確認。
4. chopsticks：*watashi-bashi* / *sashi-bashi* など箸の作法名はローマ字のまま。「palillos cruzados」等の説明の言い回しは確認したい。
5. yufuin：「concurso de gritos」（shouting contest）は自然な言い方か確認したい。「Kuāju Yufuin」（原文表記のまま）。
6. yufuin：古い行政区分「municipio」と、商店街名 Yu-no-tsubo はそのまま。
7. gyoza：*hitokuchi*、*machi-chūka*、*ichi-ninmae* はローマ字のまま説明を添えた。
8. 世紀は用語集に規定がないためローマ数字（siglo XII など）を使い、チェッカーが「数字が足りない」と warn（yufuin：4, 12, 17。chopsticks：3, 7）。誤りではない。算用数字にしたければ指示がほしい。
9. ramen：「Cutter number」を「número de corte」とした。製麺用語として通じるか確認したい。

## 原文の問題
1. wagyu-tajima：「約7,500頭がTajima、うち約7,000頭がKobe」とあるのに、「the two or three hundred that qualify as Tajima but not Kobe」と書いている。差は約500頭で、数が合わない。訳は原文どおり。
2. wagyu-tajima：Tajima と Kobe のGI登録順（2番目・3番目）が、本文冒頭の説明と GI file の表記で一貫するか未確認。
3. yufuin：「as checked on 11 October 2026」と pricesCheckedOn が一致。問題なし（確認のみ）。
4. ramen：frontmatter の `updatedDate` が `pubDate` の前に並んでいる（キー順だけ。gyoza・chicken-mizutaki も同様）。実害なし。
5. chopsticks：見出し「Why」の項で「farm ministry lists the five as bad form against the background...」は原文のまま訳したが、文意がやや分かりにくい。
