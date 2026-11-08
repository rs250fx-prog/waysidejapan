# fr wave8-3 報告

## 書いたファイル（語数はファイル全体の概数。frontmatter 含む）
- fr\eat\seasonal-tsukimi.mdx（約1,120語）
- fr\eat\seasoning-mirin.mdx（約1,450語）
- fr\eat\seasoning-vinegar.mdx（約1,470語）
- fr\eat\soba-echizen-oroshi.mdx（約1,500語）
- fr\eat\soba-hegi.mdx（約1,290語）
- fr\eat\udon-miso-nikomi.mdx（約1,660語）
- fr\eat\yakisoba-ota.mdx（約1,230語）
- fr\soak\onsen-etiquette.mdx（約3,220語）
- fr\soak\onsen-tattoos.mdx（約3,020語）

チェッカー：9本とも error 0。warning は9本中5本（数字の桁比較）。原因は原文の「100-year food」を centenaire、「15th」を quinzième、「40 sakes」を une quarantaine と文字で訳したため。内容の欠落ではない。

## 運用上の注意
- 内部リンクは依頼の指示どおり `/fr/` で書いた（ガイド §2 は「公開時に `/en/` のまま」とあるため、ガイドとは逆。公開時の一括書き換えの方向に注意）。
- 原文の translationStatus は reviewed だったが、依頼の指示（3）と §2 に従い machine にした。
- 不可分スペースは後処理で一括挿入（: ; ! ? の前、« » の内側。sources と import 行は除外）。時刻 `11:00` などは触っていない。
- 数字は原文の書式のまま（¥2,200、42°C、−ではなく半角ハイフン -20 °C）。

## 新規用語
- Health ministry | ministère de la Santé
- Hot Springs Act | loi sur les sources chaudes
- Liquor Tax Act | loi sur les taxes sur l’alcool
- brewed vinegar / synthetic vinegar | vinaigre de fermentation / vinaigre de synthèse
- sake lees | lie de saké
- mixed liquors (konseishu) | alcools « mélangés »
- Hatchō miso specification | cahier des charges
- cover sticker | autocollant de camouflage
- private bath (kashikiri-buro) | bain privé
- Tourism Bureau / tourism association | Office du tourisme / association touristique（Atami は Office、Kumano は Bureau）
- Warring States period | époque des Provinces en guerre
- 100-year food | plat centenaire

## 要確認
- 用語集の「Cultural Agency」は §4 の Agency for Cultural Affairs に合わせ「Agence des affaires culturelles」とした。
- 「pampas grass」は pampa、「taro」は taro、「heso-mochi」の説明は「mochi nombril」とした。
- 「hot pot」(mizutaki) は pot-au-feu de poulet としたが、nabe の既存訳語に合わせる必要があるかもしれない。
- 「Sennin-buro」「Kawara-buro」「Bit」などの施設名は原文のまま。
- 「Hatchō miso cooperative」は coopérative Hatchō Miso とした（固有名詞扱い）。
- 「Nagoya-meshi」は原文のまま引用符付き。
- 「shimeru」は「saler au vinaigre」と訳した（原文は curing）。

## 原文の問題
- seasoning-vinegar：特に誤りは見つからなかった（Taihō Code 701 の記述は出典未確認、訳は原文どおり）。
- soba-echizen-oroshi：本文冒頭の「Reihoku area」は出典の言い方と合っているが、sources に掲載のない「Tannan area」の説明あり（出典は農水省の別ページか）。
- onsen-etiquette / onsen-tattoos：原文の英語に「Kurokawa Onsen Ryokan Association」が日本語版と英語版の2件で sources に載っている（意図的と思われる）。
- onsen-tattoos：本文の相互参照 `soak/*` 記事が全て存在するかは未確認（リンク先の存在チェックは自分ではしていない）。
