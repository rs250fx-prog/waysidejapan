# wave6-2 報告（ko）

## 書いたファイルと文字数（wc -m、ファイル全体）
- eat/tea-kakigori-kissaten.mdx 約17,800
- soak/okuhida.mdx 約21,100
- eat/sweets.mdx 約11,800
- eat/tea-regions.mdx 約18,900
- eat/sweets-amamidokoro.mdx 約11,300
- eat/sweets-conbini.mdx 約9,500
- soak/toyako.mdx 約17,200
- soak/higashiyama.mdx 約16,400
- eat/sweets-crepe.mdx 約7,800
- eat/sweets-yakiimo.mdx 約6,000
- soak/shirahone.mdx 約22,300
- eat/sweets-yogashi.mdx 約11,000

check-translation: 12本とも error 0 / warning 0。内部リンクは追加指示どおり /ko/ で書いた（原文に内部リンクがある okuhida, toyako, higashiyama, shirahone）。URLチェックは http(s) のみ対象のため影響なし。

## 新規用語（英語 | 日本語 | 韓国語）
- kissaten | 喫茶店 | 깃사텐
- jun-kissa | 純喫茶 | 준깃사
- kakigori | かき氷 | 가키고리
- Asami Reizo | 阿左美冷蔵 | 아사미 레이조
- Itohkyuemon | 伊藤久右衛門 | 이토 규에몬
- Uji kintoki | 宇治金時 | 우지 긴토키
- junpyō (pure ice) | 純氷 | 순빙(준표)
- tencha / gyokuro / sencha / kabusecha | 碾茶 / 玉露 / 煎茶 / かぶせ茶 | 덴차 / 교쿠로 / 센차 / 가부세차
- crude tea (aracha) | 荒茶 | 아라차
- deep-steamed | 深蒸し | 후카무시
- san-Senke / Omotesenke / Urasenke / Mushakōjisenke | 三千家 他 | 산센케 / 오모테센케 / 우라센케 / 무샤코지센케
- national health resort | 国民保養温泉地 | 국민보양온천지（用語集どおり）
- yuami-gi | 湯あみ着 | 유아미기（입욕용 겉옷と併記）
- Okuhida Onsen-gō | 奥飛騨温泉郷 | 오쿠히다 온천향
- keichan | 鶏ちゃん | 게이찬
- hoba miso | 朴葉味噌 | 호바 미소
- amamidokoro / anmitsu / zenzai / oshiruko / warabi-mochi / kuzu | 甘味処 / あんみつ / ぜんざい / お汁粉 / わらびもち / 葛 | 아마미도코로 / 안미쓰 / 젠자이 / 오시루코 / 와라비모치 / 구즈
- ogura-jiruko / inaka-jiruko | 小倉汁粉 / 田舎汁粉 | 오구라지루코 / 이나카지루코
- yōgashi | 洋菓子 | 요가시
- yaki-imo | 焼き芋 | 야키이모
- Ōu san-rakukyō | 奥羽三楽郷 | 오우 산라쿠쿄（原文に漢字なし、漢字は添えず）
- tōji-ba / okuzashiki | 湯治場 / 奥座敷 | 도지바 / 오쿠자시키
- Byakkotai | 白虎隊 | 뱌코타이
- phreatomagmatic eruption | 水蒸気マグマ噴火 | 수증기마그마 분화
- spring mound / spherical limestone | 噴湯丘 / 球状石灰石 | 분탕구 / 구상 석회암
- Act against Unjustifiable Premiums and Misleading Representations | 景品表示法 | 부당경품류 및 부당표시방지법
- onsen-gayu | 温泉がゆ | 온센가유
- Lawson / FamilyMart / Seven-Eleven | ローソン 他 | 로손 / 패밀리마트 / 세븐일레븐

## 要確認
- 読みに自信が薄い固有名詞（ローマ字音写のままハングル化。漢字は添えていない）：Hodosan-michi（호도산미치）、Ōoke silver mine（오오케 은광）、Kamakura Ōkan（가마쿠라 오칸）、Princess Chiho（지호 공주）、Rapushi Oyau / Kotan-kor-kamuy（라푸시 오야우 / 코탄 코르 카무이）、Hikaku no Yu / Nakazaki Sansō（히카쿠노유 / 나카자키 산소）、dora-mocchi（도라모치）、Akabe（아카베코）、Shinku no Misuzu（신쿠노미스즈）。
- 漢字を添えたもの（原文に漢字がないが、確定的な固有名詞として）：데이 에이케이(鄭永慶)、엔쿠(円空)、鹿鳴館は不使用。判断が分かれるなら削除してよい。それ以外の推測漢字は一度入れたが取り除いた。
- 「뱌코타이」は韓国語で「백호대」とも言う。用語集に無いため日本語読みを採用。
- 日本語の記事名のうち、본문の「타이어」等は無関係。tea-regions の「덴차」は原文 tencha を音写、「아라차」は荒茶（原文は crude tea）。
- 용어 「순빙(純氷)」は原文 pure ice を「純氷」と解し、漢字は本文に出していない。
- Komeda を「고메다」、Doutor を「도토루」と表記（用語集に無い）。

## 原文の問題
- tea-kakigori-kissaten: frontmatter の updatedDate/pubDate が 2026-11-12（本日 2026-11-09 より未来）。他の記事（pubDate 2026-11-13〜16）も同様に未来日付。draft: false のまま公開される場合は要注意。
- okuhida: 協会サイトで笠ヶ岳の標高が 2,897 m と 2,898 m で食い違う（原文自体が両方を記載、訳も踏襲）。
- tea-regions: 本文は「Three of the four tea regions ... a Buddhist monk」とするが、僧の創始譚は Uji・Nishio・Yame の3つで、Shizuoka は話を載せないので整合している。ただし Uji の項は Eisai・Myōe 等複数の僧が出る。
- toyako: 英語版の source label に "Lake Toya Onsen Tourism Association, ..." が英語のまま（sources は変更不可）。
- sweets-yogashi / sweets: 「Ginza Wakamatsu の閉店」は sweets.mdx が「end of 2023」、amamidokoro が「December 2023」と表記が混在（矛盾ではない）。
