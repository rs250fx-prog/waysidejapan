# 記事画像のプロンプト（URL ごと・貼るだけ）

2026-10-10 作成、2026-10-15 更新（作り直し）。対象は src/content/en の公開記事のうち、**ヒーロー（`heroImage`）も本文の画像も未設定のもの 126 本**（eat 50・column 7・soak 69。下書きは除く）。各記事にヒーロー1つ＋本文1つ、計 252 プロンプト。

**画像を入れてコミットした記事は、このファイルから消す。** 残っている見出しが、そのまま未着手の一覧になる。

## 手順

1. **コードブロックを1つコピーして、ChatGPT にそのまま貼る。** ブラウザで開くとボタンでコピーできる：`node tools/prompts-page.mjs` で `inbox/prompts-view/index.html` を作り、Claude のブラウザで開く（launch 設定 `wayside-prompts`、http://localhost:4325）。 共通スタイル（色・紙・3:2・文字なし）は各ブロックに入っている。1回に1枚。
2. **できた画像を `inbox/images/` に保存する。** 名前はブロックの上の「保存名」どおり（例：`gyoza-hero.png`、`gyoza-body.png`）。拡張子は ChatGPT から保存したままでよい。
3. **Claude に「inbox 入れた」と伝える。** Claude が `node tools/ingest-images.mjs` で画像を記事ごとの置き場へ移し、ヒーローの設定と本文への配置、alt・キャプションを書いてコミットする。
4. 絵に事実とずれるもの（その土地に無い山、違う料理など）があれば、その1枚だけ描き直す。

### 決まりごと

- サイズは **3:2**。ChatGPT の横長（1536×1024）で足りる。根拠は `src/lib/images.ts` の `articleHero`。
- 絵の中に文字を入れない。図解で文字が要るときは、`<Figure transcript>` に同じ文言を持たせる。
- これらは **イラスト**。「Photographed myself」の約束は写真に対するものなので、写真風（photorealistic）には寄せない。
- ヒーローは見出しの下に横いっぱいで出る。本文の絵は、Claude が内容に合う節に置く。

### 共通スタイル（各ブロックに入っているもの・参照用）

```
Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

---

## Eat — Local dishes by region

### /en/eat/kyodo-ryori-kinki/ 本文は「What the seven share」の節（海から遠い都）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kinki-hero`

```
Create one image. A low table in an old townhouse, set with a clay pot of boar hotpot (thin slices of boar meat fanned out like peony petals in miso broth), a small plate of Kyoto pickles (white sliced turnip, purple aubergine and cucumber) and a few mackerel sushi wrapped in persimmon leaves, while through the open sliding door a tiled-roof old town and low hills are seen in soft light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kinki-body`

```
Create one image. Porters seen from behind walk in single file along a mountain track through tall cedar forest, each carrying a straw-wrapped bundle of salted mackerel on his back, while far below a basin town of tiled roofs spreads out in the haze. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-kyushu/ 本文は「Where it came from」の節（熊本のからし蓮根）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kyushu-hero`

```
Create one image. A table beside a window, set with an earthenware pot of mizutaki (chicken on the bone simmered in a clear broth with cabbage and leeks), a plate of toriten (golden fried chicken pieces) with a dish of mustard and vinegared soy sauce, and a bowl of cold hiyajiru poured over hot barley rice with sliced cucumber, while a smoking volcano rises beyond green plateau fields. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kyushu-body`

```
Create one image. On a wooden board a cook's hands, with no face shown, press yellow mustard-miso paste into the holes of a peeled lotus root, a bowl of batter and a deep pan of hot oil wait nearby, and one finished fried slice lies cut open to show its round holes filled. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-sanin/ 本文は「Where it came from」の節（島根のしじみ汁）に置く
**ヒーロー** → 保存名 `kyodo-ryori-sanin-hero`

```
Create one image. A wooden table beside a window above a calm brackish lake at dusk, set with a bowl of miso soup holding a small red female snow crab with daikon, a bowl of clam miso soup with tiny dark shells, and a plate of tofu chikuwa sliced into rounds to show their hollow centres, while a single small boat floats on the still lake below low hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-sanin-body`

```
Create one image. Three stages in a row on a wooden kitchen counter: a shallow basin of small dark clams soaking in lightly salted water under a cloth, a small pot with the clam shells just opening in simmering water, and a finished bowl of miso soup full of open shells with a ladle beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-setouchi/ 本文は「Where it came from」の節（広島の牡蠣の土手鍋）に置く
**ヒーロー** → 保存名 `kyodo-ryori-setouchi-hero`

```
Create one image. A wooden table in a seaside room, set with a wide shallow tub of scattered sushi packed with many toppings, an earthenware pot holding a whole sea bream cooked on a bed of rice, and a hot roof tile holding green tea soba, strips of beef and shredded omelette, while the window opens onto the Inland Sea with small green islands, swirling tide lines and fishing boats. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-setouchi-body`

```
Create one image. An overhead view of an iron pot of oyster dote-nabe, with miso spread in a thick ring around the inside rim like a riverbank, plump oysters, tofu, leeks and cabbage simmering in the broth at the centre, and a pair of chopsticks loosening a little miso into the soup. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-shikoku/ 本文は「Where it came from」の節（徳島のいやのでこまわし）に置く
**ヒーロー** → 保存名 `kyodo-ryori-shikoku-hero`

```
Create one image. A tatami banquet room with two large round sawachi platters on a long low table, one heaped with seared bonito slices fanned out with sliced garlic and onion, the other with sashimi, sushi and simmered and fried dishes, and no people, while sliding doors stand open to forested mountains with a glimpse of the Pacific beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-shikoku-body`

```
Create one image. Around a sunken hearth in a mountain farmhouse, skewers of potato, buckwheat dumpling, firm tofu and konnyaku stand slanted in the ash, each brushed with miso and turned toward the glowing embers, an iron kettle hangs above, and steep forested mountains show through the open door. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-tohoku/ 本文は「Where it came from」の節（山形の芋煮）に置く
**ヒーロー** → 保存名 `kyodo-ryori-tohoku-hero`

```
Create one image. A wooden table beside a window onto cold highland fields and a river, set with a bowl of clear soup with a round wheat cracker in it (senbei-jiru), a bowl of soup with hand-torn pieces of dough and vegetables (hittsumi), and a bowl of rice topped with grilled salmon and glossy salmon roe (harako-meshi). Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-tohoku-body`

```
Create one image. On a gravel riverbank in autumn, two boatmen seen from behind squat around an iron pot of simmering taro stew, a bundle of dried cod and a heap of taro lie on a straw mat beside them, flat-bottomed wooden river boats are moored behind, and hills in autumn colour rise beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seasonal and festival food

### /en/eat/seasonal/ 本文は「The year, season by season」の節（秋の月見）に置く
**ヒーロー** → 保存名 `seasonal-hero`

```
Create one image. An overhead view of a round wooden table with eight small dishes arranged in a ring like a calendar of the year, each holding one festival food: a lacquer stacked box of osechi, a wooden box of roasted soybeans, three-coloured diamond-shaped mochi, a kashiwa-mochi wrapped in an oak leaf, a glass bowl of somen noodles in ice water, a stand of round moon-viewing dumplings, a bowl of simmered pumpkin with azuki beans, and a bowl of soba noodles. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-body`

```
Create one image. A wooden veranda at dusk with a tiered stand of round white dumplings, a vase of pampas grass and a cup of tea, and a large full moon rising over harvested rice fields and low hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-hinamatsuri/ 本文は「Not all of Hinamatsuri is this」の節（ひなあられ）に置く
**ヒーロー** → 保存名 `seasonal-hinamatsuri-hero`

```
Create one image. A tiered red-draped doll stand with a few small dolls drawn as simple figures with blank faces and a vase of peach blossom branches, and in front of it on a low table a lacquer box of scattered sushi with prawns, a lidded bowl of clear clam soup beside an open clam shell, and a small tray of three-coloured diamond-shaped mochi in green, white and pink. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-hinamatsuri-body`

```
Create one image. Two small ceramic dishes side by side on a wooden tray: the left holds round puffed rice-cake balls in soft cream and pale brown, the right holds tiny rice-grain-shaped sweets in pink, green and white, with a few pieces scattered between the dishes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-new-year/ 本文は「What makes it New Year food」の節（七草粥）に置く
**ヒーロー** → 保存名 `seasonal-new-year-hero`

```
Create one image. A three-tier lacquer stacked box (jubako) opened with its tiers set side by side on a low table, holding black beans, spiral-patterned rolled omelette slices (datemaki), golden chestnut paste, lotus root slices, red prawns and rolled kelp, with a stand of two round rice cakes (kagami-mochi) on a shelf behind it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-new-year-body`

```
Create one image. On a wooden board a bundle of seven different young spring greens lies with a small white turnip and a daikon radish beside a chopping knife, next to an earthenware pot and a bowl of pale rice porridge flecked with fresh green herbs, steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-setsubun/ 本文は「What makes it Setsubun」の節（恵方巻）に置く
**ヒーロー** → 保存名 `seasonal-setsubun-hero`

```
Create one image. The entrance of a house in the evening with a holly branch bearing a sardine head hung by the door, and on a small table just inside a wooden box of roasted soybeans, a plate of grilled sardines and a whole uncut thick sushi roll on a board. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-setsubun-body`

```
Create one image. A seated person seen from behind on a tatami floor, facing an open window, holds a whole uncut thick sushi roll in both hands, with a cup of tea and a wooden box of roasted beans on the floor beside them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seasoning

### /en/eat/seasoning/ 本文は「How soy sauce works」の節に置く
**ヒーロー** → 保存名 `seasoning-hero`

```
Create one image. A wooden kitchen shelf above a stove holding a short row of unlabelled containers: a dark glass bottle of soy sauce, a small crock of miso, a bottle of vinegar, a flask of mirin and small bowls of sugar and coarse salt, with a bundle of spring onion, a knob of ginger and a dish of green wasabi paste on the shelf below. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-body`

```
Create one image. On a wooden table from left to right: a bowl of steamed soybeans, a bowl of roasted wheat, a small mound of coarse salt, a shallow wooden tray of grain covered in pale green-white koji mould, and a lidded cedar barrel with a little dark mash showing at its open top. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasoning-egg/ 本文は「What makes Japanese eggs edible raw」の節に置く
**ヒーロー** → 保存名 `seasoning-egg-hero`

```
Create one image. A wooden table in a bright kitchen with a bowl of steaming white rice holding a whole raw yolk in a small hollow at the centre while a thread of dark soy sauce is poured from a small pitcher, a wire basket of brown and white eggs beside it, chopsticks laid across a rest, and morning light from a window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-egg-body`

```
Create one image. A bright, clean egg grading room drawn in side view, with a long conveyor on which brown and white eggs roll in single file past a rotating soft brush under a stream of warm water, then under a row of small lamps, and into plain cardboard trays at the end, with no people in the room. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasoning-shoyu/ 本文は「What makes each region’s soy sauce」の節に置く
**ヒーロー** → 保存名 `seasoning-shoyu-hero`

```
Create one image. Inside an old wooden soy sauce brewery, a row of huge cedar barrels bound with bamboo hoops stands in dim light, a wooden ladder leans against one and a long wooden paddle against another, shafts of light fall through high lattice windows, and a few unlabelled glass bottles of dark soy sauce stand on the floor in the foreground, with no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-shoyu-body`

```
Create one image. Five small clear glasses in a row on a wooden board, each filled with soy sauce of a different shade, from thick near-black brown through dark reddish brown and amber to pale gold, with a small spoon beside them and no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Shun, the seasonal peak

## Column

## Soak — Hokkaido

### /en/soak/onsen-hokkaido/ 本文は「How people use them」の節（冬の氷上の風呂と足湯）に置く
**ヒーロー** → 保存名 `onsen-hokkaido-hero`

```
Create one image. A small hot spring town of low inn roofs and bathhouse chimneys, with steam drifting up between the buildings, stands at the foot of a steaming grey lava dome, while beyond it a bare valley of crater hollows vents thin white plumes of steam and a round caldera rim lies on the far horizon under a wide northern sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-hokkaido-body`

```
Create one image. On a frozen lake in winter, a small seasonal village of a few snow-covered huts stands at the lakeshore with an open-air bath and a footbath built out on the ice, both steaming and the bath left empty, while one visitor in a thick coat and boots, seen from behind, sits with only their feet in the footbath, and snowy hills rise under a pale sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/akanko/ 本文は「The marimo」の節に置く
**ヒーロー** → 保存名 `akanko-hero`

```
Create one image. A calm caldera lake at the edge of a hot spring town, with two cone-shaped volcanoes rising behind the far shore, a sightseeing boat crossing the water, small inn roofs along the near shore with thin steam rising, and on the shore a short wooden footbath where only two pairs of feet rest in the water. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `akanko-body`

```
Create one image. A cutaway view of a lake: below the surface, large round green balls of marimo algae lie in a soft colony on the sandy lake bed, while above the surface a sightseeing boat crosses the water towards a small wooded island with a low exhibition building at its shore. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/jozankei/ 本文は「How the town works」の節（無料の足湯と手湯）に置く
**ヒーロー** → 保存名 `jozankei-hero`

```
Create one image. A river gorge with wooded slopes in autumn colours, a row of small inn roofs on the bank of the river with soft steam rising between them, and on the riverside path a small stone kappa statue with a dish on its head. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `jozankei-body`

```
Create one image. A free semi-outdoor footbath under a simple wooden roof overlooks a gorge river, with a long trough of clear steaming water along a bench where only two pairs of bare feet rest, and beside it a small stone kappa figure pours water into a hand-bath basin. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kawayu/ 本文は「Sunayu, the beach on Lake Kussharo」の節に置く
**ヒーロー** → 保存名 `kawayu-hero`

```
Create one image. A bare lava dome with yellow-stained slopes and thin plumes of steam rising from its vents towers over a quiet river valley, where a small hot spring town sits among trees with steam drifting off the river and a walking trail through low marsh shrubs leads from the town towards the mountain. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kawayu-body`

```
Create one image. On the sandy shore of a large caldera lake in cold weather, a hole dug in the sand has filled with steaming warm water and stands empty with a shovel stuck in the sand beside it, while a patch of open water just offshore stays unfrozen and whooper swans rest on it, with light snow on the far hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/sounkyo/ 本文は「The Ice Fall Festival」の節に置く
**ヒーロー** → 保存名 `sounkyo-hero`

```
Create one image. A narrow river gorge walled by tall vertical cliffs split into regular columns of grey rock, with a small hot spring town of inn roofs at its foot and the snow-dusted peaks of a high mountain range showing above the rim. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sounkyo-body`

```
Create one image. A winter night festival site in a snowy gorge, with a tall glowing ice sculpture, a long ice slide, a wall of ice set up for climbing, a small ice bar in warm lantern light and taiko drums on a stage at one side, and a few visitors in thick coats seen from behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/toyako/ 本文は「The water」の節（井戸の断面）に置く
**ヒーロー** → 保存名 `toyako-hero`

```
Create one image. Dusk over a large round caldera lake with fireworks blooming over the water from the lakeshore, an island in the middle of the lake, a row of hot spring hotels and a promenade along the shore where a few visitors are seen from behind, and the rounded lava domes of a volcano rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `toyako-body`

```
Create one image. A cutaway view of the ground beneath a lakeside hot spring town: many slim well pipes run down through layers of rock to warm water far below, and pipes at the surface carry the steaming water up to the hotel roofs and a small stone footbath, with the lake at the edge of the picture. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Tohoku

### /en/soak/akiu/ 本文は「Akiu Ōtaki falls」の節に置く
**ヒーロー** → 保存名 `akiu-hero`

```
Create one image. A river valley town in autumn on a wide stony river, with low inn roofs and soft steam beside the water, a short footbridge over a narrow gorge with steep rock walls just upstream, and wooded mountains in red and gold leaves behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `akiu-body`

```
Create one image. A tall, narrow waterfall, a whole river falling over a steep rock cliff into a deep green pool in a wooded valley, with a small temple hall standing at the rim of the cliff above the falls. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/asamushi/ 本文は「Hemp, a monk and a deer」の節に置く
**ヒーロー** → 保存名 `asamushi-hero`

```
Create one image. A seaside hot spring town on a calm bay, with a small cone-shaped island just offshore, wooded on top, with a long flight of stone steps and a red torii gate halfway up its slope, fishing boats at rest on the water, and inn roofs along the shore with soft steam rising between them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `asamushi-body`

```
Create one image. In an old seaside village, bundles of hemp stalks are being steamed over a hot spring pool inside a simple wooden shed open to the air, a villager in old-style work clothes tending them, while a deer stands in the shallow edge of the pool and the sea shows between the huts. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hanamaki/ 本文は「Dai Onsen’s two stories」の節（キジの湯の言い伝え）に置く
**ヒーロー** → 保存名 `hanamaki-hero`

```
Create one image. A resort rose garden in full bloom, with beds of many kinds of roses around a round flower bed laid out like a sundial with a slim pointer casting a shadow, low hotel buildings behind with a thin plume of steam rising, and gentle hills under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hanamaki-body`

```
Create one image. In a mountain forest long ago, a hunter in old hunting clothes, seen from behind, stands on a slope looking at a thin plume of steam rising from a hollow ahead, while a pheasant runs away through the undergrowth. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/higashiyama/ 本文は「Gyōki and the three-legged crow」の節に置く
**ヒーロー** → 保存名 `higashiyama-hero`

```
Create one image. A quiet river town with inns standing close together on both banks of a narrow river, steam rising from the buildings, and a wooded hill rising behind the town in autumn colours. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `higashiyama-body`

```
Create one image. A monk in plain travelling robes with a staff and a wide hat, seen from behind, follows a black crow with three legs along a forest path down to a hollow where a spring steams quietly among the rocks. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/iizaka/ 本文は「Food」の節（ラジウム玉子）に置く
**ヒーロー** → 保存名 `iizaka-hero`

```
Create one image. A narrow lane in an old hot spring town, with a small old wooden public bathhouse whose roof vent gives off steam and whose doorway hangs a plain indigo curtain with no markings, a river crossing the town below, and a wide basin of fields and hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `iizaka-body`

```
Create one image. At the front of a small shop beside a bathhouse, a wire basket of eggs is lowered into a stone trough of steaming spring water, with a wooden tray of finished eggs resting on the ledge beside it and steam curling up under the eaves. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/naruko/ 本文は「Kokeshi」の節に置く
**ヒーロー** → 保存名 `naruko-hero`

```
Create one image. A hot spring street in a basin ringed by autumn hills, with steam rising from vents beside the road, a shop window lined with rows of wooden kokeshi dolls, and a small crater lake with steam around its shore visible on a rise beyond the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `naruko-body`

```
Create one image. A woodturner's workbench with a lathe, pale wood shavings on the floor, a half-shaped doll on the lathe, rows of finished kokeshi dolls with rounded heads and layered chrysanthemum petals painted in terracotta and dark ink on their bodies, and a small brush and ink pot, with only the craftsman's hands visible. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/sukayu/ 本文は「The Sennin-buro」の節に置く
**ヒーロー** → 保存名 `sukayu-hero`

```
Create one image. A large old wooden inn on a high mountain slope buried in deep snow, with steam rising from its roof vents, a cleared road running between towering walls of snow, and snow-laden evergreen trees and a rounded mountain peak behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sukayu-body`

```
Create one image. The inside of an enormous empty bath hall built entirely of pale hiba wood, with a high wooden ceiling and not a single pillar, four separate wooden tubs set side by side in one vast space, a stream of hot water falling from a wooden spout, and soft light from small windows through the steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Water types and how to read the bath

### /en/soak/acidic-sulphur-radioactive-springs/ 本文は「Where the water comes from」の節に置く
**ヒーロー** → 保存名 `acidic-sulphur-radioactive-springs-hero`

```
Create one image. A mountain valley with one small wooden bath hut at its centre and two different hillsides on either side: on the left a volcanic slope with thin steam vents ringed with yellow sulphur crust behind a low wooden fence and a pale cloudy stream running down, and on the right pale speckled granite boulders around a calm, still pool in soft mist. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `acidic-sulphur-radioactive-springs-body`

```
Create one image. A cutaway view of the ground drawn without arrows or labels: on the left a volcanic cone with a steaming vent, rainwater soaking down through the rock layers and meeting rising gas bubbles before surfacing as a pale spring at the foot of the slope, and on the right a mass of pale speckled granite deep below with a thin line of tiny bubbles rising through the rock to a quiet stone-edged pool at the surface. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/carbon-dioxide-chloride-iron-springs/ 本文は「Iron springs and colour」の節に置く
**ヒーロー** → 保存名 `carbon-dioxide-chloride-iron-springs-hero`

```
Create one image. Three empty stone basins in a row on a rocky terrace above a misty mountain valley, each fed by its own wooden spout: the first holds clear lukewarm water with fine bubbles clinging along its walls, the second has a white crust of salt around its rim and spout, and the third holds rust-brown water that has stained the stones around it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `carbon-dioxide-chloride-iron-springs-body`

```
Create one image. A single stone spout pours clear water into a long shallow stone channel, and as the water runs along the channel it turns amber and then deep rust-brown, staining the stones and moss along its length, with steam rising from the first pool. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hydrogen-carbonate-sulphate-iodine-simple-springs/ 本文は「Moor: Tokachigawa and Obihiro」の節に置く
**ヒーロー** → 保存名 `hydrogen-carbonate-sulphate-iodine-simple-springs-hero`

```
Create one image. Four shallow ceramic bowls in a row on a low wooden table beside an open window that looks out on a steaming outdoor bath, each bowl holding a different hot spring water: one perfectly clear and glossy, one faintly milky with a thin white limy rim, one pale yellow, and one dark tea-brown with a thin sheen of oil on top. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hydrogen-carbonate-sulphate-iodine-simple-springs-body`

```
Create one image. A cutaway of flat northern marshy ground: a thick layer of dark peat lies below the surface, tea-brown water seeps up through it into a stone-edged pool at the top, and a low bathhouse with a thin plume of steam stands beside the pool among reeds. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-water-types/ 本文は「An onsen is defined by law, and it need not be hot」の節に置く
**ヒーロー** → 保存名 `onsen-water-types-hero`

```
Create one image. The changing room of a mountain bathhouse with woven baskets on a wooden shelf, a folded cotton yukata, and on the wall an empty framed notice board divided into blank ruled boxes with no writing, while a sliding door stands open onto a steaming outdoor bath beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-water-types-body`

```
Create one image. Two small baths side by side on a hillside, both empty: on the left in cool shade a mossy stone basin of clear spring water with no steam and a wooden ladle resting on its edge, and on the right in sunlight a steaming stone tub of hot water, with a thin wooden fence between them and a low bathhouse roof behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kakenagashi-explained/ 本文は「The idea」の節（掛け流しと循環の違い）に置く
**ヒーロー** → 保存名 `kakenagashi-explained-hero`

```
Create one image. A wooden bathtub in an empty bathhouse with a carved stone spout pouring steaming water into it, the water brimming over the rim in a smooth sheet across the stone floor and into a channel, and on the wall nearby an empty notice board with blank ruled boxes and no writing. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kakenagashi-explained-body`

```
Create one image. Two empty baths in cutaway side by side, drawn without arrows: on the left a tub filled by a spout with water spilling over its rim into a drain and never returning, and on the right a tub with an intake grate on its wall, a pipe leading to a round filter tank and a second pipe returning the water to the tub. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Regional overviews

### /en/soak/onsen-honshu/ 本文は「Why here」の節（Under Tokyo の段落）に置く
**ヒーロー** → 保存名 `onsen-honshu-hero`

```
Create one image. A wide landscape in three parts: on the left a steaming volcanic cone above a mountain spa town of wooden inns, in the middle a low gentle valley of tiled roofs with a single thread of steam rising from a bathhouse and no volcano on the horizon, and on the right the edge of a city of low buildings with a public bathhouse chimney giving off steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-honshu-body`

```
Create one image. A cutaway of the ground under a city: low buildings on the surface, a narrow well pipe drilled hundreds of metres down through layers of rock to a pocket of warm water from old trapped seawater, and at the top a public bathhouse with a tall chimney and an empty tub filled with tea-brown water from a spout. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-kyushu/ 本文は「How people use them」の節（地獄蒸し）に置く
**ヒーロー** → 保存名 `onsen-kyushu-hero`

```
Create one image. A hillside town above a wide bay with plumes of white steam rising from many roofs and vents and from one bubbling pool in the foreground, rows of small inn roofs stepping down to the water, and a line of volcanic peaks along the horizon behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-kyushu-body`

```
Create one image. A row of stone steam ovens set over natural vents in a hot spring lane, one iron lid lifted to show vegetables and steamed buns in a bamboo basket inside, with more baskets of raw food waiting on a wooden bench and clouds of steam drifting between low old buildings. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kanto

### /en/soak/ikaho/ 本文は「Golden and silver」の節（金の湯と銀の湯の色の違い）に置く
**ヒーロー** → 保存名 `ikaho-hero`

```
Create one image. A hillside hot spring town built on a long, straight flight of broad stone steps climbing the slope between rows of wooden inns and small shops with plain blank curtains, a narrow channel of steaming water running down the middle of the steps, a footbath at the side of the steps with only one pair of feet in it, a small shrine gate at the top, and the forested rounded dome of a volcano rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ikaho-body`

```
Create one image. Two stone troughs stand side by side on a stone-paved step, both fed by wooden spouts and left empty of people: the water in the left trough is clear at the spout and turns golden brown as it runs along, staining the stone it passes over, while the water in the right trough stays perfectly clear and colourless all the way down, with thin steam rising from both and a few stone steps behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kinugawa/ 本文は「The station footbath」の節に置く
**ヒーロー** → 保存名 `kinugawa-hero`

```
Create one image. A river gorge with wooded cliffs, where a row of large multi-storey inns and hotels stands along the rim above the water, a small flat-bottomed river boat drifts on the green river among boulders, and a train crosses a bridge at the edge of the town with soft steam rising from a few rooftops. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kinugawa-body`

```
Create one image. A small square in front of a modest railway station, with a long roofed wooden footbath along a bench where only two pairs of bare feet rest in the steaming water, a stone hand-bath basin with a bamboo spout beside it, a limited-express train waiting at the platform behind, and wooded gorge hills rising beyond the station roof. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/minakami/ 本文は「Takaragawa’s open-air baths」の節に置く
**ヒーロー** → 保存名 `minakami-hero`

```
Create one image. A broad mountain river valley at the foot of a rugged rocky ridge with patches of snow, with hotels and inns strung along the river bank, a railway line crossing the river on a bridge, a ropeway cable climbing from the valley towards the ridge with one small gondola, and thin steam rising from a few roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `minakami-body`

```
Create one image. Beside a rushing mountain river in light snow, a cluster of large open-air stone pools laid out in steps, all empty and steaming, with flat stone rims and hot water flowing in from stone spouts, a small wooden changing hut with folded cotton bathing wraps stacked on a bench, and snow-laden trees overhanging the pools. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nasu/ 本文は「Bathing by the clock」の節（鹿の湯の入浴の決まり）に置く
**ヒーロー** → 保存名 `nasu-hero`

```
Create one image. A rugged volcano with a steaming summit crater and thin white fumaroles on its slopes, a small hot spring village at its southern foot with a single-storey wooden bathhouse and a few old inns, and in the foreground a stretch of yellow-stained stony ground with thin steam vents and a large boulder split cleanly into three pieces. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nasu-body`

```
Create one image. The inside of a plain single-storey wooden bathhouse with a high wooden ceiling and a row of deep wooden tubs along the wall, all empty, each giving off a different amount of steam from thick clouds to a faint wisp, long flat wooden boards for stirring the water leaning against the tub rims, a wooden ladle and a sand hourglass resting on a ledge, and a shelf of wooden buckets. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shima/ 本文は「Lake Okushima and Shima blue」の節に置く
**ヒーロー** → 保存名 `shima-hero`

```
Create one image. A long narrow valley town strung along a clear river, with old wooden inns and modern hotels standing side by side on both banks, a small thatched hall with a hipped roof beside the road, steam rising from a few roofs, a single arched footbridge over the river, and forested mountains closing in on both sides. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shima-body`

```
Create one image. A broad reservoir of vivid, perfectly clear blue-green water between steep wooded mountains in spring, with streaks of melting snow on the slopes and thin silver streams running into the lake, a concrete dam wall at one end, a single canoe on the water with one paddler seen from behind, and a short footpath along the shore. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Tokai

### /en/soak/atami/ 本文は「The Seven Springs walk」の節（入れない史跡の湧出口）に置く
**ヒーロー** → 保存名 `atami-hero`

```
Create one image. A steep hillside resort city stepping down to a curved bay, with tall hotel buildings and old inn roofs on the slopes, a narrow street where a small stone-walled spring monument sends up a jet of steam and hot water, and fishing boats at rest in the bay below. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `atami-body`

```
Create one image. A walking route along a narrow old seaside shopping street past small stone-walled spring monuments, each fenced with a low wooden rail and giving off steam, one with a jet of hot water bursting up inside its stone enclosure, another with a wire basket of eggs hanging over a steaming vent, and a few strollers seen from behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ito/ 本文は「William Adams and the ships」の節に置く
**ヒーロー** → 保存名 `ito-hero`

```
Create one image. A calm river running through the middle of a seaside town, with a walking path along its bank under cherry trees and a row of tall glowing bamboo lanterns, an old three-storey wooden inn with an ornate roof on the far bank, a small stone statue of a smiling god in front of a modest bathhouse, and steam rising from a few roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ito-body`

```
Create one image. At the mouth of a river long ago, a pit dug in a sandbar and lined with logs holds a nearly finished Western-style wooden sailing ship with tall bare masts, shipwrights in old Japanese work clothes stand on scaffolds around its hull, stacked timber logs lie on the bank, and an earth dam across the river waits to be opened to float the ship, with forested hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shuzenji/ 本文は「Kūkai and the Tokko no Yu」の節に置く
**ヒーロー** → 保存名 `shuzenji-hero`

```
Create one image. A small spa town in a wooded valley along a clear river, with a path through a bamboo grove following the bank and round bamboo benches along it, a stone-set spring steaming beside the water behind a low rail, a temple roof with a tiled gable rising among the trees, and a slim lookout tower above the town roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shuzenji-body`

```
Create one image. A travelling monk in plain robes, seen from behind, raises a small bronze ritual implement towards a boulder on the bank of a river in a wooded valley, while hot water and steam well up from a crack in the rock and run into the river, and a young boy in plain old clothes holding a small wooden bucket watches from a few steps away. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Chubu

### /en/soak/gero/ 本文は「Twelve sources and seven tanks」の節（源泉からタンク、旅館への配湯）に置く
**ヒーロー** → 保存名 `gero-hero`

```
Create one image. A hot spring town on a wide clear river, with a bridge crossing the water, rows of inn buildings along the bank, a small plaza where a roofed wooden footbath of pale cypress seats several people side by side with only a few pairs of feet in the water, a white heron standing on the gravel bank, and wooded mountains behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `gero-body`

```
Create one image. A cutaway-style view of a hillside above a river town: a few small pump houses near the top draw hot water from wells, pipes run from them to a row of large round storage tanks on the slope, and from the tanks many pipes run down to the roofs of inns, a hospital and houses in the town below, while at a roadside tap stand one resident, seen from behind, fills a container from a spout. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/isawa/ 本文は「Three accounts of 1961」の節に置く
**ヒーロー** → 保存名 `isawa-hero`

```
Create one image. A wide basin of vineyards and orchards in spring, with rows of grapevines on trellises and blossoming peach trees surrounding a hot spring town of mid-rise hotels along a narrow waterway lined with cherry trees in bloom, thin steam rising from the roofs, and a ring of low mountains on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `isawa-body`

```
Create one image. A vineyard at the moment a hot spring was struck: hot water bursts from a drilled pipe beside a small wooden derrick and runs as a steaming stream between the rows of vines towards a river, while at the edge of the field a few makeshift bath pits lined with boards and screened with reed mats stand empty and steaming. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/masutomi/ 本文は「Food」の節（山里の暮らしと食べもの）に置く
**ヒーロー** → 保存名 `masutomi-hero`

```
Create one image. A tiny hot spring hamlet high in the mountains, with a handful of old wooden inns on a forested slope above a stone-lined stream, one bathhouse with a thin plume of steam, a vegetable plot with bean poles beside a path, and rugged granite peaks rising behind under a clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `masutomi-body`

```
Create one image. The veranda of a mountain farmhouse on a cold clear day, with long strips of white radish hung in rows on a wooden frame to freeze-dry in the cold air, baskets of runner beans, cucumbers and sesame stacked on the boards, a pot of miso and a block of tofu on a low table, and forested peaks behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nozawa/ 本文は「The Ogama」の節に置く
**ヒーロー** → 保存名 `nozawa-hero`

```
Create one image. A snowy mountain village of narrow lanes between old wooden houses and inns with snow heaped on the roofs, small public bathhouses with steam pouring from their roof vents, an open-air spring steaming in a stone-walled corner, a temple roof up the slope, and a broad forested mountain with ski runs rising behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nozawa-body`

```
Create one image. A boiling open-air spring set in a stone-walled corner of a village, with several pools of steaming water side by side, villagers in aprons and rubber boots, seen from behind, lowering wire baskets of vegetables and eggs into the water on ropes, clouds of steam drifting over the wooden roofs, and a small souvenir shop with stacked crates next to the wall. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/okuhida/ 本文は「Falls and the ropeway」の節に置く
**ヒーロー** → 保存名 `okuhida-hero`

```
Create one image. A high mountain valley with a clear river and a cluster of old wooden inns, a few thin steam plumes and an open-air bath hut by the water, a route bus on the valley road, and behind the valley a steaming rounded volcano beside jagged snow-capped alpine peaks under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `okuhida-body`

```
Create one image. A double-decker ropeway gondola with two cabins stacked one above the other hangs from a cable climbing a steep forested slope towards high rocky alpine ridges, with a snow-fed stream below the cable, a small station building with a car park at the foot of the slope, and a second gondola passing in the other direction. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shirahone/ 本文は「Why it turns white」の節に置く
**ヒーロー** → 保存名 `shirahone-hero`

```
Create one image. A small hollow valley high on the flank of a broad volcano, with a handful of old wooden inns, a pale milky white stream running through the hollow, low white-crusted mounds of stone covering the ground, and the broad rounded summit of a mountain rising behind in clear light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shirahone-body`

```
Create one image. A bamboo spout pours perfectly clear water into a small wooden trough at the top of a slope, and the water then flows down through a series of stone and wooden troughs and steps, turning cloudy and then milky white, leaving a pale white crust on the rocks and on fallen branches along the way, with thin steam rising from the first trough. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/togura-kamiyamada/ 本文は「The Zenkōji pilgrims' spa」の節に置く
**ヒーロー** → 保存名 `togura-kamiyamada-hero`

```
Create one image. A retro Showa-era spa town lane at dusk, narrow and lined with small wooden-fronted inns, snack bars and an old shooting-gallery stall with shelves of small prizes, plain blank paper lanterns glowing, a woman in a kimono seen from behind walking away, steam rising from a small public bathhouse roof, and a wide river with a low bridge at the end of the street. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `togura-kamiyamada-body`

```
Create one image. At the end of a day of pilgrimage, a small group of travellers in plain old-style travelling clothes with walking staffs and wide hats, seen from behind, walk into a quiet spa town lane at dusk towards the glow of inn windows and a bathhouse roof with steam rising, with a river and a low railway bridge behind them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Hokuriku

### /en/soak/echigo-yuzawa/ 本文は「Snow Country」の節に置く
**ヒーロー** → 保存名 `echigo-yuzawa-hero`

```
Create one image. A snow-buried spa town at the foot of snowy mountains, with inn roofs heaped with snow, steam rising from a small shared bathhouse, a shinkansen train gliding along an elevated line at the edge of the town, and a distant ski slope with a lift line and tiny skiers on the white mountainside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `echigo-yuzawa-body`

```
Create one image. A quiet tatami room in an old inn, with a low desk by a window, blank sheets of manuscript paper under a small weight, an ink stone and a brush, a lamp and a teapot beside a charcoal heater, while through the window heavy snow falls on rooftops and a steep snowy slope climbs to a small bathhouse with steam rising from its roof. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tsukioka/ 本文は「The colour」の節に置く
**ヒーロー** → 保存名 `tsukioka-hero`

```
Create one image. A small walkable hot spring street on a flat plain of rice fields, with low inns and shop fronts selling sake and rice crackers behind plain blank curtains, a person grilling rice crackers over a charcoal grill at one shop front, a small roofed footbath in the middle of the street with two pairs of feet in pale emerald-green water, and low hills on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tsukioka-body`

```
Create one image. A small wooded garden at a spring source, with a stone basin of steaming emerald-green water fed by a spout, a hand-bath basin beside it, a small stone statue that visitors pour water over, a drinking fountain on a stone post, and the green water turning milky white where it spills over the basin's edge into a shallow channel. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/unazuki/ 本文は「A plateau of peaches, and water from upstream」の節に置く
**ヒーロー** → 保存名 `unazuki-hero`

```
Create one image. A V-shaped river gorge with steep wooded walls and a green river, a small narrow-gauge open-sided trolley train crossing a bridge deep in the gorge, and at the mouth of the gorge a hot spring town of inns spreading out onto a plain, with soft steam rising from the roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `unazuki-body`

```
Create one image. A long insulated pipe runs along the wall of a river gorge, carrying hot water from steaming source huts far upstream, crossing a small bridge and descending towards a plateau of peach trees in blossom at the gorge mouth, where the first few inn roofs stand among the trees with steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/wakura/ 本文は「The white heron」の節に置く
**ヒーロー** → 保存名 `wakura-hero`

```
Create one image. A calm bay at the edge of a hot spring town, with inns lined along the shore and soft steam rising from their roofs, a promenade with a small roofed footbath and a drinking fountain beside a modest public bathhouse, fishing boats at rest on the still water, and low hills along the far side of the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wakura-body`

```
Create one image. At dawn on a misty bay, a small wooden fishing boat holds an elderly couple in plain old clothes, seen from behind, watching a white heron standing on one leg in a patch of bubbling, steaming water in the shallows near the shore, with a few thatched roofs and pine trees along the beach. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yamanaka/ 本文は「The Kiku-no-yu」の節（男湯と女湯が別棟）に置く
**ヒーロー** → 保存名 `yamanaka-hero`

```
Create one image. A gorge of a clear river with maple-clad slopes, a graceful all-wood arched bridge spanning the gorge, a long slender footbridge crossing the river lower down, a wooden seating platform at the water's edge, and a few inn roofs with soft steam on the bank above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yamanaka-body`

```
Create one image. A small square in a hot spring town with two separate tile-roofed bathhouse buildings in an old temple-like style standing side by side with a gap between them, each with steam rising from its roof and a plain curtain at the door, a small theatre building beside one of them, a footbath by its entrance with one pair of feet, and a shallow pond in the square with a basket of eggs hanging in the warm water. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yamashiro/ 本文は「The Kosōyu」の節に置く
**ヒーロー** → 保存名 `yamashiro-hero`

```
Create one image. A small hot spring town laid out around a Meiji-style wooden public bathhouse with latticed windows and an upstairs rest room with sliding screens under a tiled roof, a black crow perched on the roof ridge, steam rising from the roof vent, narrow lanes of old inns climbing the hillside behind, and an old wooden gate at the street. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yamashiro-body`

```
Create one image. The inside of an old public bathhouse hall, empty, with walls decorated in coloured ceramic tiles of flowing floral patterns in muted green, ochre and terracotta, one wide shallow tub filled to the rim with steaming water, wooden buckets and a ladle stacked beside it, bare walls with no taps or showers, and a wooden stair rising to an upstairs rest room. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kinki

### /en/soak/nanki-katsuura/ 本文は「Bōkidō, the cave bath」の節（波が削った海食洞の湯）に置く
**ヒーロー** → 保存名 `nanki-katsuura-hero`

```
Create one image. A fishing port town on a bay dotted with small rocky islets topped with a few trees, tuna fishing boats moored along a quay beside a low market hall, a row of mid-rise hotels along the shore with soft steam rising from a few rooftops, and wooded hills rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nanki-katsuura-body`

```
Create one image. A wide sea cave carved by waves into a mudstone cliff at the water's edge, its mouth open to the ocean, hot water welling up into a few stone-edged pools on the cave floor, all empty, with thin steam drifting out of the mouth and surf rolling in beneath the opening. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ogoto/ 本文は「How the city supplies it」の節（市の番号つきの井戸から旅館の内風呂へ配湯）に置く
**ヒーロー** → 保存名 `ogoto-hero`

```
Create one image. A calm large lake at sunrise with the low sun just above the water, a small harbour with a few moored boats, a handful of inns along the western shore each with an empty open-air bath terrace facing the lake and thin steam rising, and a broad forested mountain ridge rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ogoto-body`

```
Create one image. A cutaway view of a lakeside town: three small well houses beside a road with slender pipes dropping deep into the ground, underground pipes running from them beneath the street to a row of inns, and inside each inn an empty in-house bath receiving the water, with a little steam rising from the baths and the lake beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shirahama/ 本文は「Saki no Yu」の節（海に面した岩の露天風呂、無人）に置く
**ヒーロー** → 保存名 `shirahama-hero`

```
Create one image. A wide crescent of pale quartz-white sand beach beside a calm bay on the Pacific coast, a small rocky island offshore with a natural sea-cave tunnel through its middle, a line of resort hotels behind the beach with thin steam rising from a few rooftops, and a rocky headland at one end of the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shirahama-body`

```
Create one image. An open-air rock-pool hot spring on a shoreline facing the open ocean: a few empty pools edged with natural stones and filled with steaming water, waves breaking against the rocks just beyond the lowest pool and throwing spray, a low plain fence along the back, and a small channel where the overflow runs straight into the sea. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/totsukawa/ 本文は「The 2004 free-flowing pledge」の節（かけ流しの仕組み）に置く
**ヒーロー** → 保存名 `totsukawa-hero`

```
Create one image. A remote mountain valley covered almost entirely in forest, with layered green ridges, a deep river gorge and a long dam lake, a few inns clustered beside the lake with soft steam, one lone inn on the river bank further up, and a single route bus on a winding road along the valley. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `totsukawa-body`

```
Create one image. The side of a simple riverside bathhouse with its wall open to the valley: a wooden spout pours fresh hot water straight into a stone tub, the tub is empty of people and brimming, the water spills over the far rim into a channel that runs out to the river, with no pumps, filters, boilers or tanks anywhere in sight, steam rising, and forested mountains beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Chugoku

### /en/soak/kaike/ 本文は「1900, told three ways」の節（浅瀬で泡立つ湯の発見）に置く
**ヒーロー** → 保存名 `kaike-hero`

```
Create one image. A gently curving sandy beach on a calm bay, with low breakwaters standing offshore and sand built up behind them, a row of tall inns and hotels behind the beach with thin steam rising from their roofs, a small seaside park with a few trees, and a broad mountain rising in the distance inland. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kaike-body`

```
Create one image. About the year 1900, a fisherman in old-style work clothes, seen from behind, stands knee-deep in the shallows near the shore looking at a patch of bubbles and faint steam rising from the sea surface a few steps away, with wooden fishing boats pulled up on the sand and a few thatched huts behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/misasa/ 本文は「The white wolf」の節（白い狼の伝説）に置く
**ヒーロー** → 保存名 `misasa-hero`

```
Create one image. A small hot spring town on a clear mountain river, with a road bridge crossing the water and, on the gravel bank below it, a large open-air pool built of big stones, empty and steaming, beside a simple changing screen, with old inns climbing the bank and wooded hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `misasa-body`

```
Create one image. A legend from long ago: a warrior in plain old court dress lowers his bow before a gentle old white wolf sitting at the foot of a huge old camphor tree, while warm water steams up from the ground among the roots and runs in a thin stream towards a river, with soft mist among the trees. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nagato-yumoto/ 本文は「A bath over its source」の節（源泉の真上に建つ共同浴場）に置く
**ヒーロー** → 保存名 `nagato-yumoto-hero`

```
Create one image. A small hot spring town along a shallow river, with a stone-paved path beside the water, stepping stones across the stream, four wooden terraces built out over the river with benches and soft lamps, old inns and small shops along the banks, and soft steam rising from the roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nagato-yumoto-body`

```
Create one image. A cutaway of a public bathhouse built directly over its spring: an empty deep stone-lined tub, hot water welling up through cracks in the bedrock at the bottom and bubbling gently to the surface, a thin sheet of water overflowing the rim, the wooden walls cut away to show the rock below, and steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tamatsukuri/ 本文は「The fudoki」の節（733年の風土記の記述）に置く
**ヒーロー** → 保存名 `tamatsukuri-hero`

```
Create one image. A small spa town on both banks of a narrow clear river, with inns lined along the banks, small footbridges, a roofed free footbath beside the river with two pairs of feet in it, a small comma-shaped island in the river holding a rough blue stone, soft steam rising from a few roofs, and low hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tamatsukuri-body`

```
Create one image. Long ago, villagers in plain old-style clothes, men and women, young and old, all fully clothed, crowd along a river bank where warm water wells up in a cloud of steam, kneeling to touch the water with their hands, while an official in old court dress sits on a mat to one side writing on a scroll of blank bamboo slips. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yubara/ 本文は「The dam and the salamander」の節（オオサンショウウオ）に置く
**ヒーロー** → 保存名 `yubara-hero`

```
Create one image. A wide river running out from below a concrete dam wall, with three large natural open-air pools of different tones side by side on the gravel bank beneath the dam, all empty and steaming, a simple wooden changing screen beside them, and a forested valley with a few inn roofs on the bank above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yubara-body`

```
Create one image. A giant salamander with a broad flat head and mottled brown skin rests on the stony bed of a clear shallow river, seen from above, with a small stone shrine and a plain gate on the bank beside it and the dam wall far away in the background. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Shikoku

### /en/soak/onsen-shikoku/ 本文は「The towns」の節（香川の冷たい鉱泉。25℃未満でも温泉）に置く
**ヒーロー** → 保存名 `onsen-shikoku-hero`

```
Create one image. A hot spring town built around a large old wooden bathhouse of several storeys with a tiled roof and steam rising from it, a small old tram running past on a street beside a covered shopping arcade, a white heron standing on a stone near the bathhouse, and gentle rounded forested mountains behind with no volcano among them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-shikoku-body`

```
Create one image. Two stone basins side by side in a quiet wooded hollow, the left one holding clear hot water and giving off steam, the right one filled with clear cold spring water pouring from a bamboo spout with no steam at all, the same mossy stone rim on both, and a wooden ladle resting on each. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kyushu and Okinawa

### /en/soak/aso-uchinomaki/ 本文は「An irrigation well, 1897」の節（灌漑用の井戸を掘って湯が出た）に置く
**ヒーロー** → 保存名 `aso-uchinomaki-hero`

```
Create one image. A broad caldera floor of green grassland and rice fields, with a few red-brown cattle grazing, a small spa town of low inn roofs and thin steam along a gentle river with a riverside path, the gently steaming cone of a volcano rising calmly in the middle distance, and the long straight rim of the caldera wall on the horizon under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `aso-uchinomaki-body`

```
Create one image. A few farmers in plain Meiji-era work clothes, seen from behind, stand around a freshly dug irrigation well in a rice field where hot water has suddenly welled up, steam billowing from the hole and spilling into the field channel, with digging tools lying on the ground and the caldera wall rising behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hinagu/ 本文は「Banpeiyu baths in winter」の節（大きな柑橘を浮かべた冬の風呂）に置く
**ヒーロー** → 保存名 `hinagu-hero`

```
Create one image. A seaside hot spring town with a main street of old wooden shops and small workshops, bamboo baskets and bamboo crafts hanging in the shop fronts, one shop front grilling rows of chikuwa, tubes of fish paste on skewers, over charcoal with a plume of smoke, plain blank curtains over the doors, steam rising from a bathhouse roof, and the calm sea of a gulf at the end of the street with low hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hinagu-body`

```
Create one image. A wooden bathing tub, empty of people and brimming with steaming water, on whose surface several very large pale-yellow citrus fruits, each as big as a small melon, float together, with a stone washing area beside it and a window onto a winter garden with bare branches. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ibusuki/ 本文は「The sand bath」の「How it works」の節（砂浜に湯が上がる仕組み）に置く
**ヒーロー** → 保存名 `ibusuki-hero`

```
Create one image. A volcanic shore at low tide with a wide sandy beach where rows of shallow rectangular hollows have been dug in the sand, all empty, thin steam rising from the sand, long-handled shovels stuck upright beside them, folded cotton robes stacked on a low bench, a calm sea, and the neat conical shape of a volcano rising across the bay in the distance. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ibusuki-body`

```
Create one image. A cutaway of a beach: below the surface, hot water rises from deep underground as thin wavy lines, meets the heavier cold seawater at the water's edge, floats over it and seeps upward through the sand, where thin steam rises from the surface, with small waves on the sea side and a long-handled shovel leaning in the sand. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kirishima/ 本文は「Ryōma’s honeymoon」の節（幕末の新婚旅行の道）に置く
**ヒーロー** → 保存名 `kirishima-hero`

```
Create one image. A cool highland on the south-eastern slopes of a group of volcanoes, with scattered small inns among forest and meadow each giving off a thin plume of steam, a roadside footbath with one pair of feet in it, a round green crater lake in a hollow, and several rounded volcanic peaks with faint steam rising from one summit under a high clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kirishima-body`

```
Create one image. A young couple in 1860s travelling clothes and straw hats, seen from behind, walk side by side along a dirt path through highland grass towards a volcano, with plain blank wooden signposts at intervals along the path and a thin plume of steam rising from a roadside hot spring in the distance. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nagayu/ 本文は「Outside baths and drinking」の節（炭酸の湯を飲む文化と外湯）に置く
**ヒーロー** → 保存名 `nagayu-hero`

```
Create one image. A small hot spring town in a green valley among rounded hills, with public bathhouses and old inns along a narrow street, a stone drinking fountain at a street corner with two cups hung beside it and one person in a cotton robe, seen from behind, sipping from a cup, and a line of high flat-topped volcanic mountains on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nagayu-body`

```
Create one image. A small outdoor stone pool, empty of people, filled with pale water covered in fine bubbles that cling to the stone rim and rise in tiny beads, with almost no steam above it because the water is cool, a drinking spout with a wooden ladle nearby, and through a wooden doorway a hotter indoor bath giving off thick steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-okinawa/ 本文は「Why here」の節（1,000m以上掘り下げた井戸と、地層に閉じ込められた古い海水）に置く
**ヒーロー** → 保存名 `onsen-okinawa-hero`

```
Create one image. A low resort hotel on a coast of calm shallow turquoise sea, with an empty open-air bath terrace at the edge of the water giving off thin steam, a small green island on the horizon, and a few low clouds in a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-okinawa-body`

```
Create one image. A cutaway of the ground: a small pump house on the surface with a very long, thin borehole dropping straight down through many bands of rock in different tones to a deep layer holding pockets of ancient seawater, and a pipe running from the pump house to a hotel bath at the surface, with the length of the borehole making the depth clear. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/takeo/ 本文は「Details of the gate」の節（楼門の天井四隅の干支の彫刻）に置く
**ヒーロー** → 保存名 `takeo-hero`

```
Create one image. A two-storey vermilion wooden gate in the style of a dragon-palace gate, with a tiled hip-and-gable roof and upswept eaves, standing at the front of an old bathhouse hall with a tiled roof and thin steam rising behind it, a stone-paved forecourt, and low wooded hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `takeo-body`

```
Create one image. Looking up at the underside of the upper eaves of a vermilion wooden gate, with exposed beams and brackets, the four corners of the ceiling each carved with a different zodiac animal: a rat, a rabbit, a horse and a rooster, and a patch of sky at the edge of the frame. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tsuetate/ 本文は「Steam rooms」の節（蒸し湯の入口、無人）に置く
**ヒーロー** → 保存名 `tsuetate-hero`

```
Create one image. A narrow gorge town on both banks of a small river, with old multi-storey wooden inns stacked up the slopes, a small bridge across the river, many carp streamers strung on ropes high across the river, small steaming boxes along the edge of a lane, and thin steam rising from many rooftops. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tsuetate-body`

```
Create one image. The entrance of a traditional steam room in an old inn: a small low wooden door ajar in a stone wall, steam pouring out of the dark cave-like room beyond, a bamboo bench, a wooden bucket and ladle, a few folded cotton towels, and a glass of water on a small stool beside the door, with no one present. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/unzen/ 本文は「A summer resort for foreigners」の節（明治の避暑地）に置く
**ヒーロー** → 保存名 `unzen-hero`

```
Create one image. A steaming volcanic hot spring area known as the hells, with bare white ground of altered clay, many small vents sending up plumes of white steam, a long wooden walkway crossing the white ground with a few visitors seen from behind, and a forested volcanic mountain with a rounded lava dome rising calmly behind under a clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `unzen-body`

```
Create one image. On the veranda of a Meiji-era wooden highland inn, two Western traders in light summer suits and straw hats, seen from behind, sit in cane chairs looking out over a cool mountain plateau where steam rises from a distant white valley, with a tray of tea on a small table between them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ureshino/ 本文は「Hot-spring tofu」の節（温泉で煮る湯豆腐）に置く
**ヒーロー** → 保存名 `ureshino-hero`

```
Create one image. A small hot spring town in a river valley, surrounded by rolling hills covered in neat rounded rows of green tea bushes, a small early-twentieth-century bathhouse with pointed gables and tall arched windows beside the river with steam rising from its roof, and a free roofed footbath with two pairs of feet in it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ureshino-body`

```
Create one image. A shallow earthenware pot on a small tabletop burner, soft white cubes of tofu simmering and melting in cloudy hot-spring broth with steam rising, a small dish of condiments, a cup of green tea and wooden chopsticks on the table, and a window looking out over rows of tea bushes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Other

### /en/soak/yuda/ 本文は「The white fox」の節（傷ついた白狐が池で足を癒した話）に置く
**ヒーロー** → 保存名 `yuda-hero`

```
Create one image. A small station square in a city spa district with a giant white fox statue on a plinth as tall as a house, beside it a row of free footbaths under a small roof with two pairs of feet in them, a small steam locomotive pulling old carriages along the railway line behind, low business hotels with a plume of steam rising from a spring pumping building, and low hills on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yuda-body`

```
Create one image. At night in a temple garden under the moon, a white fox with a limp sits at the edge of a small pond, dipping one front paw in faintly steaming water, while a priest in plain robes watches quietly from the temple veranda and a small golden statue gleams in the water at the bottom of the pond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yudanaka-shibu/ 本文は「The monkey park」の節（雪の谷の露天風呂にいるニホンザル）に置く
**ヒーロー** → 保存名 `yudanaka-shibu-hero`

```
Create one image. A narrow stone-paved lane in an old hot spring town lined with wooden inns of two and three storeys, a small wooden public bathhouse with a closed latticed door and a plain cotton hand towel hanging on a hook by its entrance, hot-water pipes running along the walls with steam rising from them, a couple of guests in cotton robes seen from behind carrying small towels, and wooded mountains behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yudanaka-shibu-body`

```
Create one image. A snowy mountain valley beside a small river, where a stone-edged outdoor pool of steaming water holds a few Japanese macaques with snow on their fur, more monkeys sitting on the snowy rocks around the pool, steaming vents in the snow, and bare winter trees, with no people anywhere. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yufuin/ 本文は「Yunohira’s shared bath」の節（石畳の坂と川沿いの共同浴場）に置く
**ヒーロー** → 保存名 `yufuin-hero`

```
Create one image. A broad basin of farmland and farmhouses at the foot of a large rounded mountain, a small lake in the foreground with mist and steam rising from its surface in the cold morning air, a horse-drawn carriage on a country road lined with small shops, and a small railway station. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yufuin-body`

```
Create one image. A narrow stone-paved slope running beside a small river through a quiet hot spring district, with old wooden inns on both sides behind plain blank curtains, a small communal bathhouse at the bottom of the slope with a curl of steam rising from its roof, and green hills above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yugawara/ 本文は「The town buys the water」の節（所有者から買って町が配る仕組み）に置く
**ヒーロー** → 保存名 `yugawara-hero`

```
Create one image. A spa town in a green valley along a small river, with a park beside the water where a thatched teahouse stands among trees and a stone monument carved with a poem sits on the grass, a footbath on a terrace beside a small cafe with one pair of feet in it, mandarin orange trees heavy with fruit on the sunny slopes above the town, and a hint of sea at the mouth of the valley. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yugawara-body`

```
Create one image. A schematic bird's-eye view of a small town in a valley: several privately owned spring huts at different spots each send a pipe into one thick main pipe running through the middle of the town, a small junction house where the main pipe is checked by the town's staff, and branch pipes running from there to inn roofs and houses with thin steam rising from them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunomine/ 本文は「The yuzutsu」の節（湯筒で卵や野菜をゆでる）に置く
**ヒーロー** → 保存名 `yunomine-hero`

```
Create one image. A tiny hot spring village in a narrow mountain valley, with forested mountains rising steeply on all sides, a small clear river running through, beside it a stone-edged spring well steaming strongly where a wire basket of eggs hangs in the water, a few old wooden inns and a plain public bathhouse with steam rising from its roof, and a stone-paved path where a lone pilgrim in white with a straw hat and a staff, seen from behind, walks away. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunomine-body`

```
Create one image. A close view of a steaming stone-edged spring well beside a river, where a person in an apron, seen from behind, lowers a wire basket holding eggs and sweet potatoes into the hot water on a rope, with a second basket resting on the stone edge and a wooden bucket beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunotsu/ 本文は「The tanuki」の節（傷ついたタヌキが湯で癒した話）に置く
**ヒーロー** → 保存名 `yunotsu-hero`

```
Create one image. A small silver-port town in a narrow valley opening onto the sea, with one long street of old wooden houses and inns with tiled roofs running down to a small harbour with a few fishing boats, two bathhouse roofs each with a plume of steam, temple and shrine roofs among the trees on the hillside, and low green headlands closing the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunotsu-body`

```
Create one image. A travelling monk in plain robes with a staff and a wide straw hat, seen from the side, stops on a forest path to watch an old tanuki, a Japanese raccoon dog, with a limp, soaking one hind leg in a small steaming pond among rocks, with soft mist and gentle light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunoyama/ 本文は「Food」の節（僧兵鍋）に置く
**ヒーロー** → 保存名 `yunoyama-hero`

```
Create one image. A small hot spring town at the foot of a high forested mountain, with a ropeway cable rising from the town up the mountain with two small gondolas, inns climbing the lower slope with thin steam, a small waterfall and a temple roof among the trees at the edge of town, and rounded ridges of a mountain range behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunoyama-body`

```
Create one image. A big iron pot of hotpot simmering on a charcoal brazier in the middle of a low table, with thick miso broth, slices of boar meat, mushrooms and root vegetables, steam rising, wooden bowls and chopsticks around it, a folded white head cloth of the kind warrior monks wore lying beside the pot, and a window looking out to mountain slopes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/zao/ 本文は「Skiing and the snow monsters」の節（樹氷）に置く
**ヒーロー** → 保存名 `zao-hero`

```
Create one image. A mountain hot spring town on a steep street of old wooden inns half buried in snow, steam rising from the street gutters and the rooftops, a ropeway line climbing from the top of the street over the forest towards a ridge, and high on the ridge rows of huge white frozen trees like snow-covered giants under a pale winter sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `zao-body`

```
Create one image. A winter mountain slope covered with fir trees thickly coated in rime ice and snow so that each tree has become a huge rounded white shape, a ropeway gondola with a warmly lit window gliding on its cable among them, and one tiny skier far in the distance on the open snow. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Body image still needed (hero already set)

