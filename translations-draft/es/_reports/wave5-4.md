# wave5-4 報告（es）

## 書いたファイル（空白区切りの語数、frontmatter含む概算）
- soak/yunomine.mdx — 約3,470語
- soak/carbon-dioxide-chloride-iron-springs.mdx — 約3,530語
- soak/isawa.mdx — 約2,990語
- eat/meat-horumon.mdx — 約2,450語
- eat/ramen-tokushima.mdx — 約2,380語
- eat/seafood.mdx — 約2,030語
- eat/nabe-oden.mdx — 約1,810語

check-translation: 7本とも error 0。yunomine のみ warn（桁 4, 13）。原因は「4th century / 13th century」を「siglo IV / siglo XIII」とローマ数字で書いたため（偽陽性。意図的）。
YAML: 7本とも frontmatter を PyYAML で読み込めることを確認（description は全て 140〜155字、faq 件数・sources 件数は原文と同じ）。

## 新規用語（英語 | スペイン語）
- hot spring (onsen) health resort / national health resort | balneario de salud (nacional)
- carbon dioxide spring / simple iron spring | fuente de dióxido de carbono / fuente simple de hierro
- hydrogen-carbonate spring | fuente de hidrogenocarbonato
- strong salt spring | fuente fuertemente salina
- source (spring outlet) | manantial
- therapeutic spring (ryōyōsen) | fuente terapéutica
- hypotonic / isotonic / hypertonic | hipotónica / isotónica / hipertónica
- offal / by-products | vísceras / subproductos del ganado
- pork belly (Tokushima ramen) | panceta de cerdo
- cheap-sweet shop (dagashiya) | tienda de golosinas baratas (*dagashiya*)
- earthenware miso pot | olla de miso de barro
- fish paste (nerimono) | pasta de pescado
- enterprise bureau (prefecture) | oficina de empresas
- Ramen Business Cooperative | Cooperativa Empresarial del Ramen

## 要確認
- 「ministerio de Sanidad」（health ministry）は用語集に無い。ministerio de Sanidad で統一した
- 「Mar Interior de Seto」（Seto Inland Sea）：用語集に無い。本文では Mar Interior de Seto とした
- 「Shōwa 24」「hōtō」「rahō」などは原文のローマ字を維持
- 数値の小数点は原文のまま（53.5°C、106.87 ha 等）。千位区切りも原文のまま
- carbon-dioxide 記事：Fe²⁺ 等の化学表記と mval% は原文のまま
- 「kanjin-moto」（sponsor）、「Keihin no okuzashiki」は説明を添えた訳。妥当か要確認
- yunomine の JNTO・協会英語ページの引用 3 か所は、英語原文を引用符内に残し、スペイン語訳を括弧で添えた

## 原文の問題
- yunomine：協会の英語ページの引用 "the world's first public hot bath in World Heritage sites" など、原文自体が出典の言い回しを引いている（問題なし）。ただし「Hanamuro and others (2008 and 2007 abstracts)」は sources の順序（2008, 2007）と一致するだけで、本文の年の並びが逆順。
- carbon-dioxide：英語版で "carbon dioxide-containing, iron(II, III) simple cold mineral spring" の例と、FAQ の Nagayu 回答（"I could not find"）が一人称で書かれている。サイトの語り口として一貫しているので訳でも一人称を維持。
- ramen-tokushima：本文「Awa Navi's brown-soup guide」と「Awa Navi's shop guide」が別の記事か同じ記事か不明確。
- meat-horumon：本文の「Sayo」のリンク先説明は農水省近畿農政局とあるが、FAQ では「regional farm ministry page」。表現の不一致のみ。
- isawa：「Chūō expressway ... 1 hour 20 minutes」「Fuefuki city's portal」等、数値は一貫。
