# es 翻訳 wave2-2 報告

check-translation: 7本とも error 0、警告 0（自分の記事）。translationStatus は machine。

## 書いたファイルと語数（本文、frontmatter を除く概数）
- translations-draft/es/soak/kinosaki.mdx — 約4,200
- translations-draft/es/column/food-souvenirs-omiyage.mdx — 約2,030
- translations-draft/es/eat/ramen-tokyo-shoyu.mdx — 約1,820
- translations-draft/es/eat/wagyu-sukiyaki.mdx — 約1,340
- translations-draft/es/eat/soba-wanko.mdx — 約1,270
- translations-draft/es/eat/sushi-funa.mdx — 約915
- translations-draft/es/eat/yatai-matsuri.mdx — 約860

## 新規用語（英語 | スペイン語）
- Tokyo / Kyoto | Tokio / Kioto（スペイン語で定着した形。Kyushu・Hakata・Osaka などは原文のまま）
- use-by date / best-before date | fecha de consumo / fecha de consumo preferente
- Consumer Affairs Agency | Agencia de Asuntos del Consumidor（§6 準拠）
- National Tax Agency | Agencia Tributaria Nacional
- Animal Quarantine Service / Plant Protection Station | Servicio de Cuarentena Animal / Servicio de Protección Vegetal
- tax-free shopping / refund system | compras libres de impuestos（tax-free は併記）/ sistema de reembolso
- bath trust (zaisanku) | fideicomiso de los baños（zaisanku は初出で説明）
- public bath(s) | baño(s) público(s)（sotoyu は斜体のまま）
- snow crab | cangrejo de las nieves（matsuba-gani / zuwai-gani は斜体）
- warishita | *warishita*（初出で「caldo preparado」と説明）
- narezushi / namanare / honnare | *narezushi*（sushi madurado）/ *namanare* / *honnare*
- crucian carp | carpa crucian
- roten / tekiya / yashi | *roten* / tekiya / yashi（yatai の概観ページへの言及は「visión general sobre los yatai」）
- wanko soba tournament / championship | Campeonato de Japón del Wanko Soba（Hanamaki は「Original」付き）
- 100-year food | comida de 100 años
- yukata / geta | *yukata* / *geta*
- Bib Gourmand / Michelin | そのまま

## 要確認
- Tokio / Kioto の採用（§3 のローマ字原則との関係）。方針が違えば一括置換が必要
- 官庁名 farm ministry / Agriculture ministry は §6 に従い「ministerio de Agricultura」。「health and farm ministries」は「ministerios de Sanidad y de Agricultura」とした（Sanidad は用語集に無い）
- Tajima cattle は kinosaki で「ganado tajima」、Kobe/Matsusaka/Ōmi beef は「carnes de Kobe, Matsusaka y Ōmi」とした
- reimen / jajamen は斜体のローマ字のまま。「Wanko Soba Day」は「Día del Wanko Soba」
- キノサキの「Important Cultural Property」は「Bien Cultural Importante」と訳した（用語集に無い）
- Hanamaki 大会名「Original Wanko Soba All-Japan Tournament」の訳（Campeonato de Japón del Wanko Soba Original）
- sushi-funa の「dog days」は canícula とした
- 数字・%・°C は原文の書式のまま（1,400 / 6.8 / 10% / 42°C）。ただし「1,300.º」などの序数表記は原文にない形

## 原文の問題
1. soba-wanko の faq（a: ¥4,500 … `Yabuya''s shop`）：引用符なしの YAML で `''` が二重のまま。英語版では "Yabuya''s" と表示される誤り
2. soba-wanko 本文：農林水産省が「出雲・戸隠と並ぶ三大そば」に挙げたとあるが、sources に農水省の資料はない（出雲市資料は文化庁「100年フード」）。出典と機関が合っていない可能性
3. sushi-funa：faq・本文は「正月まで」発酵、価格の節では魚治の方法を「two winters of fermentation」と書いていて食い違う。また導入の「festivals and funerals」（葬儀で食べる）に出典がない
4. kinosaki：Kou no Yu の再開日が 28 日と 30 日の二つ併記（原文が意図的に併記）。FAQ「Jizo Yu」と本文「Jizō Yu」でマクロン不統一
5. wagyu-sukiyaki：図のキャプションだけ「Kantō」、本文は「Kanto」で表記ゆれ
6. ramen-tokyo-shoyu：「白い豚骨スープは1989年に九州から流行として来た」に sources 上の裏づけが見当たらない
7. food-souvenirs-omiyage：「From 1 November 2026 Japan moves…」は未来形。公開時期（切替直後）によっては現在形への修正が要る
