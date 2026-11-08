# fr wave6-4 報告

## 書いたファイル（本文＋frontmatter の語数 wc -w。すべて translations-draft\fr\ 以下）
- eat\sake-akita.mdx 2111
- eat\sake-hiroshima.mdx 2550
- eat\sake-nada-fushimi.mdx 2192
- soak\sukayu.mdx 3188
- soak\aso-uchinomaki.mdx 3226
- eat\kaiseki.mdx 2461
- eat\sake-niigata.mdx 1604
- soak\echigo-yuzawa.mdx 2724
- eat\kaiseki-shojin.mdx 2093
- eat\kaiseki-tea.mdx 1973
- soak\kaike.mdx 3054
- eat\yakisoba.mdx 1731

check-translation：12本とも error 0 / warning 0（最終確認）。

## 規則の扱い
- 内部リンクは依頼どおり本文で `/fr/` に書いた（ガイド §2 は `/en/` のまま。公開時の一括置換が不要になる代わりに、ガイドと食い違う）。
- 組版（不可分スペース・« »・’）は後処理スクリプトで一括適用。数字は原文書式のまま（12,321 / 3.8% など）。

## 新規用語
- sake（飲料・数え）| saké（複数も saké）
- brewery / brewers' association / cooperative | brasserie / association des brasseurs / coopérative
- geographical indication (GI) | indication géographique (IG)
- tōji (master brewer) | tōji（初出で maître brasseur）
- sake rice | riz à saké
- shared bath / town bath (machi-yu) | bain commun / bain de quartier (machi-yu)
- national health resort onsen | onsen station de santé nationale
- tea kaiseki / banquet kaiseki | kaiseki du thé / kaiseki de banquet
- kappō / ryōtei / omakase | kappō / ryōtei / omakase（そのまま）
- hotpot (nabe) | marmite（nabe）
- caldera | caldeira（用語集どおり）
- alert level | niveau d'alerte
- Geopark | Géoparc
- snow corridor | couloir de neige

## 要確認
- 小説 *Snow Country* を「*Pays de neige*」と訳した（echigo-yuzawa の title / faq / 本文）。フランス語版の定着題と思うが未確認。英訳題は *Snow Country* のまま残した。
- 「Nihyaku-tōka (The 210th Day)」→「Le 210e jour」（title・本文）。
- hatahata（ハタハタ）、shottsuru、kiritanpo は原文ローマ字のまま。説明は付けていない。
- ministry of the Environment 以外の「environment ministry」→ ministère de l'Environnement、「farm ministry」→ ministère de l'Agriculture（§6 の短い形）。「transport ministry」→ ministère des Transports（正式名は用語集に無い）。
- 「Agency for Cultural Affairs」→ Agence des affaires culturelles、「tourism agency」→ Agence du tourisme（kaiseki-shojin では「Agence du tourisme」、本文の別所では「Agence du tourisme du Japon」）。
- Hakkōda「Hotel」→ Hakkōda Hotel（固有名のまま）。
- sukayu の表の見出し・種別（Acidic sulphur 等）は仏語化（source acide / sulfureuse など）。化学名の細かい言い回しは母語確認が望ましい。
- hiba（ヒバ）は仏語で定着した語がなく、そのまま hiba。
- 「buried in snow」「kitamae-bune」などは原文ローマ字＋短い説明。

## 原文の問題
- sake-nada-fushimi / kaiseki-tea / sake-niigata / kaiseki-shojin：原文で「sake overview」「kaiseki overview」にリンクが無い（他の記事は [sake overview](/en/eat/sake/) とリンクあり）。訳文も同様に無リンクのまま。
- kaiseki-shojin：原文 §「Where to eat it」の直前に空行が無い（訳文では空行を入れた）。
- sake-nada-fushimi：原文の「Miyamizu was discovered in 1840」は、記事内で年を挙げないと言っている本文と矛盾して見える（「誤解」欄の引用としては成立）。
- aso-uchinomaki：「Route 57 and the Hōhi line both reopened in August 2020」の誤解欄は、本文の「Route は 2020-10-03」と整合しているが、title/説明に Sōseki の「210th Day」と出典の英題が混在。
- kaike：「44th race」と 1981 開始の食い違いは原文が既に指摘済み。
- sukayu：frontmatter の `pricesCheckedOn` はあるが本文に価格なし（原文のまま）。
