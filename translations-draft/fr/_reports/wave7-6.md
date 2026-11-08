# fr wave7-6 報告

## 書いたファイル（11本、語数は frontmatter を除くおおよその値）
- soak/tsuetate.mdx（約2,300語）
- soak/unzen.mdx（約2,600語）
- soak/ureshino.mdx（約2,300語）
- eat/kyodo-ryori-kanto.mdx（約3,800語）
- eat/kyodo-ryori-kinki.mdx（約3,500語）
- eat/kyodo-ryori-kyushu.mdx（約3,700語）
- eat/kyodo-ryori-okinawa.mdx（約850語）
- eat/kyodo-ryori-sanin.mdx（約2,700語）
- eat/kyodo-ryori-setouchi.mdx（約3,100語）
- eat/kyodo-ryori-shikoku.mdx（約2,550語）
- eat/kyodo-ryori-tohoku.mdx（約3,450語）

check-translation: 11本とも error 0。warning は「100」の数字不足（"100-year food" を「plat centenaire」と訳したため。意図どおり）と、kyushu の「1」のみ（1F 等を「rez-de-chaussée」と訳したため）。ureshino・kyodo-ryori-* 全部が同じ「100」警告。

## 実施した規則
- 内部リンクは依頼どおり /fr/ で書いた（ガイドの「/en/ のまま」より依頼文を優先）。
- YAML の title / description / heroAlt / faq の q・a は全部二重引用符。sources は原文のまま。translationStatus は machine。
- 不可分スペース（U+00A0）は、書いたあとスクリプトで `: ; ! ? »` の前と `«` の後に一括挿入（sources ブロックと import 行は除外）。
- 数字・円・°C は原文の書式のまま（98 °C のようにスペースを入れた箇所はある）。換算金額は書いていない。

## 新規用語
- Japan Meteorological Agency (JMA) | Agence météorologique du Japon (JMA)
- Cultural Agency | Agence des affaires culturelles（用語集の Agency for Cultural Affairs に合わせた）
- 100-year food | plat centenaire
- Fair Trade Commission | Commission des pratiques commerciales loyales
- farm ministry's list / database | liste / base de données du ministère de l’Agriculture
- Japan Hot Spring Association | Association japonaise des sources thermales
- tourism association / bureau / federation | office du tourisme / bureau du tourisme / fédération du tourisme
- Geopark (Aso / Shimabara) | Géoparc d’Aso / de la péninsule de Shimabara
- Kii channel | détroit de Kii
- mudskipper | périophthalme (mutsugorō)
- soft-shelled turtle (suppon) | tortue molle
- icefish (Shimane) | salanx (shirauo)
- Sicilian rice | riz sicilien
- sea squirt | ascidie
- wood ear | oreille de Judas
- Day of the Horse | jour du Cheval
- runner bean (hana-ingen) | haricot d’Espagne
- Kitamae ships | navires kitamae
- warrior monks (sōhei) | moines guerriers

## 要確認
- unzen: 「Obama-machi Onsen ryokan association」→「association des ryokan d’Obama-machi Onsen」。unzen の「kokumin hoyō onsenchi」は「onsen de santé nationale désigné」と訳した。
- ureshino: 「sodium-hydrogen carbonate·chloride」は「bicarbonate de sodium·chlorure」と訳した（日本語の泉質名「ナトリウム-炭酸水素塩・塩化物泉」に合わせた）。
- setouchi: 「Seto anago」「Setouchi Shunsaikan」「Kaorihime」など固有名詞は原文のまま。
- sanin: 「hikado/seri」など食材名は原文のローマ字、「salanx」(shirauo) の訳語は母語話者の確認が要る。
- kyushu: 「Yobuko squid」を「calmar de Yobuko」、「gizzard shad」を「alose gizzard (kohada)」とした。
- kinki: 「critically endangered (IA)」→「en danger critique (IA)」。
- kanto: 「sakura-nabe horse-meat hotpot」→「marmite de viande de cheval sakura-nabe」。
- 全体：「prix spécial」（special award）、「exercice」（fiscal year）の訳語は他の記事と揃っているか未確認。

## 原文の問題
- setouchi: 「## What makes it Setouchi」と「## Eating it at the source…」の直前に空行が無い（訳文では空行を入れた）。
- kyushu: 「Nagasaki」の dish 一覧に「Kankoro-mochi」「Nagasaki milkshake」とあるが、これらが農水省リストにあるかは原文に出典がない（要確認）。
- ureshino: Siebold の年（1812 と 1826）の食い違いは原文が既に指摘している。
- tsuetate: pubDate が 2026-12-22 で今日（2026-11-09）より未来（unzen・ureshino・kyodo-ryori-* も同様に未来日付）。
- 原文の translationStatus は reviewed だが、訳文は machine にした（ガイドどおり）。
