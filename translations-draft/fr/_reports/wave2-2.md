# fr 翻訳 wave2-2 報告

## 書いたファイル（本文の語数。import 行を除く）
- translations-draft/fr/soak/kinosaki.mdx（約4,230語）
- translations-draft/fr/column/food-souvenirs-omiyage.mdx（約2,090語）
- translations-draft/fr/eat/ramen-tokyo-shoyu.mdx（約1,860語）
- translations-draft/fr/eat/wagyu-sukiyaki.mdx（約1,380語）
- translations-draft/fr/eat/soba-wanko.mdx（約1,290語）
- translations-draft/fr/eat/sushi-funa.mdx（約960語）
- translations-draft/fr/eat/yatai-matsuri.mdx（約880語）

自己点検：7本とも check-translation で error 0・warning 0。

## 新規用語（英語 | フランス語）
- Visit Kinosaki（Toyooka 公式観光サイト） | Visit Kinosaki（そのまま）
- sotoyu / uchiyu / yukata / geta | そのまま（斜体）
- bath trust（zaisanku） | fiducie des bains（*zaisanku* を併記）
- tourism association | office du tourisme
- Health ministry | ministère de la Santé
- Animal Quarantine Service | service de quarantaine animale
- Plant Protection Station | station de protection des végétaux
- Food Sanitation Act | loi sur l’hygiène alimentaire
- use-by date / best-before date | date limite de consommation / date de durabilité minimale（日本語表記 消費期限／賞味期限 を併記）
- tax-free（refund method） | détaxe / système de remboursement
- "100-year Food"（文化庁） | « 100-year Food » (cuisine centenaire)（初出で説明を添えた）
- intangible folk cultural property / "food cultural asset" | bien culturel folklorique immatériel / « bien culturel alimentaire »
- National Diet Library | Bibliothèque de la Diète nationale
- Bib Gourmand / Michelin star | Bib Gourmand / étoile Michelin
- household survey | enquête sur les budgets des ménages
- tourism body（Tōhoku） | organisme du tourisme du Tōhoku
- dog days（doyō 前後の盛夏） | canicule
- crab "Kingdom" promotion | opération « Royaume du crabe »
- road-use permit | permis d’utilisation de la route
- temporary-stall notice | déclaration de stand temporaire
- lacquer bowl (wanko) | bol laqué

## 要確認
- 「100-year Food」の公式フランス語名は未確認（原語を残し括弧で説明）。
- 「Agence des affaires de consommation」は用語集どおりだが、omiyage の記事では「l’agence de la consommation」と短縮した箇所がある。
- Visit Kinosaki の「Taking a Japanese Bath」を「guide du bain」と訳した。
- 日本の予約・施設名（Kounotori、Hamakaze、Zentan バスなど）は原文のローマ字のまま。
- 円は原文どおり ¥ 表記、本文では「5,000 yens」「3 millions de yens」と書いた箇所がある（omiyage）。
- ramen-tokyo-shoyu の「kelp」は「kombu」と訳した（原文は kelp のみ）。

## 原文の問題
1. soba-wanko の faq 第2問は引用符なしの YAML で `Yabuya''s` と書かれており、そのまま読むとアポストロフィが2つ表示される（'' はシングルクォート内でだけ1つになる）。訳文では修正して表示。原文の修正が要る。
2. sushi-funa の faq は「New Year まで」発酵と書き、本文の Uoji の説明は「two winters of fermentation」で食い違う。本文の「Salted for about three months … left until New Year」とも合わない。
3. sushi-funa が `<DishPrices keys={['sushi-kaiten']} />`（回転寿司の価格表）を使っている。ふなずしの節に回転寿司の価格が出るのは不自然。意図か確認を。
4. sushi-funa に出典のない記述（「eaten today mostly at festivals and funerals」「most households ... buy fish already salted」など）。sources は農水省・文化庁・魚治のみ。
5. ramen-tokyo-shoyu の「The white pork-bone soup arrived from Kyushu as a fashion in 1989」と「Michelin style 2012」は sources の裏づけが見えない。
6. wagyu-sukiyaki の faq「Japan’s egg hygiene rules make raw egg safe」は出典がない。
7. kinosaki は日付の古さに注意：Kou no Yu の再開は「28 octobre」と「30 octobre 2026」の併記で、本日（2026-11-08）時点では過去の日付。公開前に最新状況へ更新が要る。同様に crab 解禁日「6 November」の記述。
8. kinosaki：Sato no Yu が閉鎖中なのに「all seven public baths accept tattoos」と書かれる点は原文が自ら注記済み。
9. kinosaki の用語注：原文の「Jizo Yu」（faq）と「Jizō Yu」（本文）の表記ゆれ。訳文は原文どおり。
