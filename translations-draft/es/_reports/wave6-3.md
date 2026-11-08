# es wave6-3 報告

## 書いたファイル（語数はおおよそ。frontmatter含む語数に近い）
- soak/iizaka.mdx 約2,800
- eat/western-burger.mdx 約1,260
- eat/western-dairy.mdx 約2,270
- soak/togura-kamiyamada.mdx 約1,880
- eat/western-italian.mdx 約1,320
- eat/western-machichuka.mdx 約1,620
- soak/naruko.mdx 約3,730
- eat/western-pan.mdx 約1,180
- eat/western-yoshoku.mdx 約1,750
- soak/nyuto.mdx 約3,640
- eat/sake.mdx 約2,330

自己点検：11本とも error 0。warning は western-yoshoku の1件のみ（原文「4 pm」を「16:00」と書いたため「4」が足りないと判定。問題なし）。
（全体の error 1 は他の担当の記事）

## 方針（依頼どおり）
- 本文の内部リンクは `/es/`（ガイドは `/en/` のままだが、依頼の指示を優先）。
- 地名は Tokio・Kioto（Kioto は sake 本文・FAQ・出典外の箇所）。
- `translationStatus: machine`（原文は reviewed）。YAML のコロンを含む title は引用符で囲んだ。

## 新規用語
- shared bath（ここでは property ward の訳）| distrito de bienes (Iizaka-machi)
- national health resort onsen | onsen / fuente termal de balneario de salud nacional
- footbath / hand bath | baño de pies / baño de manos
- kakenagashi | *kakenagashi*（原文のまま斜体、説明は「de flujo continuo」）
- brewer's alcohol | alcohol de elaboración
- Quasi-National Park | Parque Cuasi Nacional
- hitō（fuente oculta）| fuente oculta
- Forestry Agency | Agencia Forestal
- Cultural Agency（100-year food）| Agencia de Asuntos Culturales / alimento de 100 años
- Consumer Affairs Agency | Agencia de Asuntos del Consumidor（用語集どおり）
- shokupan / kashi-pan | そのまま（斜体なし）
- hamburg steak | hamburg steak（そのまま）
- tasting flight | cata por tandas / juego de tres

## 要確認
- Naruko の「Quasi-National Park」を Parque Cuasi Nacional とした（定訳があれば差し替え）。
- Hotel New Grand の「The Café」はそのまま。
- sake の「Japan Sake and Shochu Information Center」を「Centro de Información del Sake y el Shōchū de Japón」と訳し、括弧で英名を併記。
- sake の GI 説明で Kyoto を「Kioto」としたが、Nada Gogō は原綴のまま。
- Iizaka の「Beppu in the West; Iizaka in the East」は引用符内の英語を残し、スペイン語訳を併記。Togura の同様箇所（"believed to have been discovered about 2,000 years ago"）も同じ。
- western-yoshoku の「hamburg steak」は和牛部位語と同様、国による違いは未確認。
- naruko・nyuto の「sulphur-bearing sodium sulphate-chloride」等の泉質名は直訳（母語話者の確認推奨）。
- naruko の地名「Hare Onsen」「Spa Onikobe no Yu」等は原文のまま。

## 原文の問題
- iizaka：英語サイトの「9 Public Baths」が古い（原文自体が指摘済み）。
- naruko：計画書が「最古の湯」で自己矛盾（原文自体が指摘済み）。
- nyuto：Kyūkamura の「15番目 / 12番目」の食い違い（原文自体が指摘済み）。
- western-burger：frontmatter に `updatedDate` が pubDate と同日（問題なし）。
- western-dairy：原文 heroAlt などに問題なし。「Cultural Agency」が soak/iizaka で「Cultural Agency」、他で「Agency for Cultural Affairs」と表記ゆれ（原文側）。
- iizaka：本文冒頭で「Cultural Agency」と表記（原文の揺れ。訳は Agencia de Asuntos Culturales に統一）。
