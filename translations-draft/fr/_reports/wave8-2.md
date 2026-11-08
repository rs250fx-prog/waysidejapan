# fr wave8-2 報告

## 書いたファイル（translations-draft\fr\eat\、語数は概算・frontmatter 含む）
nabe-botan 1088 / nabe-chanko 924 / nabe-ishikari 987 / rice-sides-shiru 1170 / sashimi-tataki 1225 / seafood-kombu 1270 / seafood-nerimono 1207 / seafood-seaweed 1007 / seasonal-christmas 1006 / seasonal-omisoka 931 / seasonal-tanabata-obon 1080 / seasonal-tango 997 / seasonal-toji 1044（計13本、すべて .mdx）

## 検査結果
- 自分の13本は error 0。warning は sashimi-tataki の1件のみ（「100」。原文の「100-year food」を「plats centenaires」と訳したため。初出に « 100-year food » を併記済み。内容上は問題なし）。
- 全体の error 1 は他の人の `column\new-travel-rules-and-charges-in-japan.mdx`（YAML）。対象外。
- 追加指示どおり：内部リンクは `/fr/`、YAML の文字列は二重引用符、原文に translationStatus が `reviewed` のものは guide §2 に従い `machine` にした（原文側が reviewed でも訳文は machine）。
- 数字は原文書式のまま（5,163 g、1,500、13,000 など）。組版の不可分スペースは後処理で入れた（url・label・import 行を除く）。

## 新規用語
- 100-year food | plat centenaire（初出に « 100-year food » 併記）
- ministry (farm) の文中表記 | ministère de l’Agriculture（§6）
- beach-seine fishing | pêche à la senne de plage
- pole and line | pêche à la canne
- sawachi (platter) | sawachi（grands plateaux）
- Alaska pollock | lieu d’Alaska
- cattail | massette
- kitamae ship | navire kitamae（原文のローマ字を残した）
- sweet flag / mugwort | acore / armoise
- paper mulberry | mûrier à papier
- winter solstice pumpkin | citrouille du solstice
- Children’s Day | Fête des enfants（Tango の説明に使用）
- Japan Sumo Association | Association japonaise de sumo
- Japan Kombu Association | Association japonaise du kombu

## 要確認
- seafood-kombu：Umami Information Center は訳さず原語のまま。National Diet Library は「Bibliothèque nationale de la Diète」と訳した。
- seafood-seaweed：nori growers' association を「association des producteurs de nori」と訳した（原文の「海苔増殖振興会」とは直訳が異なる）。
- seasonal-tanabata-obon：Setagaya「arrondissement」、Miwa sōmen cooperative「coopérative des sōmen de Miwa」。
- seasonal-christmas：ALIC は英語名のまま（Agriculture and Livestock Industries Corporation）。
- sashimi-tataki：nihaizu/sanbaizu は「vinaigre en deux/trois parties」と説明訳。
- seafood-nerimono：Ichikikushikino（原文のまま）、akumochi-zake を地酒として説明。
- nabe-botan：「Meiji 41」「Shōwa」など元号は原文どおり。
- rice-sides-shiru：doyō の日を「jours de doyō」とした（§6 の「jour du bœuf (doyō)」は鰻の文脈のため）。
- 「ministère de la Santé」（health ministry）は用語集に無いため直訳。

## 原文の問題
- seafood-kombu：「national figure 727 (the file gives no unit; presumably yen...)」と原文自体が単位不明と断っている。そのまま訳した。
- 事実誤りは見つからず。
- 内部リンクの `/en/` を `/fr/` に書いた先（kyodo-ryori-kinki など）は、存在確認をしていない。
