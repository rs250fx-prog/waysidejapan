# wave2-2 報告（ko 翻訳）

## 書いたファイルと本文の文字数（frontmatter 除く、概算）
- translations-draft/ko/soak/kinosaki.mdx — 約24,200
- translations-draft/ko/column/food-souvenirs-omiyage.mdx — 約11,900
- translations-draft/ko/eat/ramen-tokyo-shoyu.mdx — 約11,200
- translations-draft/ko/eat/wagyu-sukiyaki.mdx — 約8,300
- translations-draft/ko/eat/soba-wanko.mdx — 約7,700
- translations-draft/ko/eat/sushi-funa.mdx — 約5,400
- translations-draft/ko/eat/yatai-matsuri.mdx — 約5,200

check-translation: 7本とも error 0。kinosaki に警告1件（数字「00」の不足。時刻表記の桁比較と思われ、原文の時刻・数字は訳文に残している）。

## 新規用語（英語 | 日本語 | 韓国語）
- chūka soba | 中華そば | 初出は 주카소바(中華そば)
- shina soba / Nanking soba | 支那そば / 南京そば | 시나소바 / 난킨소바
- sotoyu / uchiyu | 外湯 / 内湯 | 소토유 / 우치유
- zaisanku | 財産区 | 자이산쿠（本文では「욕탕 재산구」）
- kakeyu | かけ湯 | 가케유
- matsuba-gani / zuwai-gani | 松葉ガニ / ズワイガニ | 마쓰바가니 / 즈와이가니（一般語は 대게）
- namanare / honnare / narezushi | 生なれ / 本なれ / なれずし | 나마나레 / 혼나레 / 나레즈시
- nigoro-buna | ニゴロブナ | 니고로부나
- warishita | 割下 | 와리시타
- gyūnabe | 牛鍋 | 규나베
- roten / tekiya / yashi / ikka | 露店 / 的屋 / 香具師 / 一家 | 로텐 / 데키야 / 야시 / 잇카
- wanko soba | わんこそば | 완코소바
- reimen / jajamen | 冷麺 / じゃじゃ麺 | 레이멘 / 자자멘
- Visit Kinosaki | — | 原文のまま（サイト名）
- Bib Gourmand / Michelin | — | 빕 구르망 / 미쉐린
- use-by / best-before | 消費期限 / 賞味期限 | 소비기한 / 상미기한（括弧に日本語を併記）
- 100-year food | 100年フード | 100년 푸드
- kansui | かん水 | 간스이(かん水)


## 要確認
- 사토노유（Sato no Yu）：原文に漢字が無いため漢字を添えず。読みは確信あり、漢字は未確認。
- 도치（Dōchi）：道智の韓国語表記。외래어 표기에 従い 도치。
- 『탄포포』（Tampopo）：韓国での公開題は 담뽀뽀 の可能性。
- 『기노사키에서』（城崎にて）：韓国語題名は仮訳。
- 『메이게쓰키』『잇폰도 야쿠센』『쇼코쿠 온센 고노 가가미』：書名は音訳のみ（漢字を添えていない）。
- 초쿠리안（Chokurian）、미키야、기타무라、친야 など店名の音訳。

- 완탕멘・차슈멘：韓国語の慣用に合わせた表記。
- 도요（土用）に当たる語をsushi-funa で「삼복더위」と訳した（原文は dog days of summer）。
- 쇼켄 황태후（Empress Dowager Shōken）の表記。
- 미시마테이の「쓰키・하나・고쿠조 하나」コース名は音訳。

## 原文の問題
1. soba-wanko：原文冒頭で「agriculture ministry が완코소바をイズモ・戸隠と並ぶ三大そばに分類」とあるが、出典欄にあるのは島根県資料と出雲市資料で、農林水産省の資料ではない。訳は原文のまま「농림수산성」。
2. soba-wanko：faq の `Yabuya''s` は YAML の素のスカラーでは `''` が二つのアポストロフィとして出る恐れ（訳文では所有格を消したので影響なし）。
3. kinosaki：frontmatter の translationStatus は原文 reviewed、訳は machine。「2026年10月11日現在」の休館情報は時間が経つと古くなる。
4. ramen-tokyo-shoyu：「Tsuta … starred for four editions」など店情報が2026年10月時点のもの。要更新確認。

