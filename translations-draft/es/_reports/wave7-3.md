# es wave7-3 報告

12本すべて check-translation で error 0。warning は shima の「17」のみ（原文の「17th century」を「siglo XVII」とローマ数字にしたための誤検出）。

## 書いたファイル（本文の概算語数）
- eat/rice-sides-mochi.mdx（約1,550語）
- eat/rice-sides-takikomi.mdx（約1,250語）
- eat/rice-sides-tofu-natto.mdx（約1,250語）
- eat/rice-sides-tsukemono.mdx（約1,650語）
- eat/champon.mdx（約1,500語）
- eat/champon-sara-udon.mdx（約1,050語）
- eat/bkyu.mdx（約2,350語）
- eat/bkyu-korokke.mdx（約1,700語）
- eat/drinks.mdx（約2,300語）
- soak/wakura.mdx（約2,700語）
- soak/tamatsukuri.mdx（約2,200語）
- soak/shima.mdx（約2,700語）

## 新規用語
- kokumin hoyō onsenchi | onsen nacional de salud（初出は原語を併記）
- farm ministry | ministerio de Agricultura（§6 に従い小文字）
- Fisheries Agency | Agencia de Pesca
- National Tax Agency | Agencia Tributaria Nacional
- Liquor Tax Act | Ley del Impuesto sobre el Alcohol
- B-grade (gourmet) | (gourmet de) clase B
- town-revival group | grupo de revitalización de ciudades
- footbath | baño de pies（§4 どおり）
- sea onsen | onsen marino
- sparkling / brewed / distilled / mixed（酒税の4分類）| espumosas / fermentadas / destiladas / mezcladas
- happoshu / new genre | happoshu / nuevo género
- Toruko rice | arroz Toruko
- sekihan / zōni / tai-meshi / iro-gohan | 原語のまま（説明を添えた）
- Disaster Relief Act | Ley de Socorro en Desastres
- hotspring "Wakura" の別名 Wakuura | *Wakuura*（原文のまま）

## 要確認
- 「Ministry of Health」を「ministerio de Salud」と訳した（原文は health ministry、mochi と drinks）。用語集に無い。
- Hokkoku Shimbun は固有名として原文のまま、「periódico」を添えた。
- 「Jōshin'etsu Kōgen National Park」は Parque Nacional Jōshin'etsu Kōgen とした。
- 「Yamato shijimi」「kinshi-uri」「hana-ingen」はローマ字のまま。説明（judías de enramar など）の訳語は母語話者の確認が要る。
- 「tamari soy」を「soja *tamari*」と訳した。
- 「Kawara no Yu」などの施設名は原文のまま。
- Obon / Bon は原文どおり使い分けた（mochi は Obon、sara udon は festival de Bon）。
- 「heces de sake」（sake lees）「pez de cola amarilla」（yellowtail）「chanquete」（whitebait）の訳語。
- 「dace」を pez dace とした。

## 原文の問題
- 内部リンクを `/es/` に直した（onsen-water-types、kakenagashi-explained、soba-izumo、misasa、kusatsu、ikaho、minakami、sukayu、hydrogen-carbonate-sulphate-iodine-simple-springs、kyodo-ryori-kanto）。リンク先の es 記事が無いものがある可能性がある。
- 原文の description が120〜160字の範囲かは、スペイン語側で厳密に数えていない（check-translation の判定は通過）。
- 原文に「overview」と書かれた箇所（rice and sides、champon、B-grade、tonkatsu、izakaya、donburi、konamono、yakisoba、sake など）はリンクが無い平文。そのまま平文で訳した。
- bkyu: 表（B-1 の金賞一覧）の「2008」行の注記は原文どおり。
- wakura: 原文の faq に「Hokkoku Shimbun」を使った記述があり、公式資料ではなく新聞を根拠にしている点は原文どおり訳した（原文自身が注記している）。
- shima: 原文の「Shima blue」は英語名のまま引用符付きで残した。
- 翻訳中に YAML のコロン問題が champon と mochi の faq で出たため、値全体を引用符で囲んで直した。
