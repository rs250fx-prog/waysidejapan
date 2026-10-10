# 記事画像のプロンプト（URL ごと）

2026-10-10 作成、2026-10-11 更新。対象は origin/main に push 済みで公開中の記事のうち、**まだ画像が入っていないもの**（下書きの `/en/column/how-japanese-rice-is-actually-cooked/` は除外）。

**画像を入れてコミットした記事は、このファイルから消す。** 残っている見出しが、そのまま未着手の一覧になる。

各記事には **ヒーロー1枚** と **本文1枚以上** が要る（`src/layouts/Article.astro`）。どちらも無いあいだは noimage の仮枠が出る。

## 使い方

1. 下の **共通スタイル** を、各プロンプトの末尾に必ず付ける。
2. サイズはヒーロー・本文とも **3:2、2400×1600px**（最低 2000×1333px）。根拠は `src/lib/images.ts` の `articleHero`。
3. 絵の中に文字を入れない。図解で文字が要るときは、`<Figure transcript>` に同じ文言を持たせる。
4. これらは **イラスト**。「Photographed myself」の約束は写真に対するものなので、写真風（photorealistic）には寄せない。
5. 入れ方
   - **ヒーロー**：画像を `src/assets/<category>/` に置き、frontmatter に `heroImage` と `heroAlt` を書く。
   - **本文**：`<Figure src alt caption>` を、2つ目の見出しの直前あたりに置く。本文に1枚入ると仮枠は自動で消える。

### 共通スタイル（毎回末尾に付ける）

```
Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

ヒーローは、見出しの下に横いっぱいで出る。主題を中央からやや右に置き、周りに余白を残すと収まりがいい。

---

## Column

### /en/column/chopsticks-in-japan/
- **ヒーロー**：`A pair of lacquered chopsticks resting on a small ceramic chopstick rest beside a bowl of rice and a bowl of miso soup, no spoon anywhere on the table, a wooden tray beneath.`
- **本文**：`Five small panels in a row, each showing a pair of hands with chopsticks making a move considered bad form: sticking chopsticks upright in rice, passing food chopstick to chopstick, spearing food, hovering over dishes, pulling a dish toward you with chopsticks; drawn gently, no text.`

### /en/column/food-souvenirs-omiyage/
- **ヒーロー**：`An airport souvenir shop counter piled with neatly wrapped boxes of Japanese sweets in seasonal paper, a traveller with a rolling suitcase choosing one, a departure gate faintly behind.`
- **本文**：`Close view of the back of a gift box of sweets, a fingertip pointing at a small blank date panel; beside it two small icons, a clock and a calendar, to suggest the two kinds of date label; no readable text.`

### /en/column/food-vending-machines-in-japan/
- **ヒーロー**：`A row of brightly lit drink vending machines on a quiet residential street at dusk, a bicycle parked nearby, warm light from the houses behind.`
- **本文**：`A small unstaffed gyoza shop with a freezer cabinet and a simple wooden cash box on the wall, a customer taking a frozen bag; beside it a person paying at a vending machine by tapping a phone.`

### /en/column/japanese-table-customs/
- **ヒーロー**：`A family-style Japanese dinner table with shared plates in the middle, small individual bowls, a folded hot hand towel at each place, two people with palms pressed together before eating.`
- **本文**：`Three small scenes side by side: wiping hands with a rolled oshibori towel, taking food from a shared plate with serving chopsticks onto a small plate, and lifting a rice bowl to the chest to eat.`

### /en/column/roadside-stations-and-farm-stands/
- **ヒーロー**：`A Japanese roadside rest station in the countryside: a low wooden building with a market hall, crates of local vegetables outside, a parking area with a few cars and motorbikes, green hills behind.`
- **本文**：`An unstaffed farm stand at the edge of a field: a small wooden shelf with bags of vegetables, a little coin box, a hand-drawn sign shown blank, a farmer working in the field behind.`

## Eat — Konbini

### /en/eat/conbini-onigiri/
- **ヒーロー**：`Several triangular rice balls in plastic wrap on a convenience store shelf, nori sealed separately inside the wrapper, a hand reaching to pick one.`
- **本文**：`Three-step diagram of opening a convenience store onigiri: pulling the center tab down, pulling the left side, pulling the right side, the nori wrapping crisp around the rice at the end; drawn as three hands in sequence.`

## Eat — Dashi

### /en/eat/dashi/
- **ヒーロー**：`A pot of clear golden dashi on a stove, a sheet of dried kombu and a pile of shaved bonito flakes beside it on a wooden board, a ladle lifting the broth.`
- **本文**：`An arrangement of dashi ingredients laid out like a specimen chart: kombu, bonito flakes, dried shiitake, dried sardines, dried flying fish; each separated with space, no labels.`

### /en/eat/dashi-east-west/
- **ヒーロー**：`Two bowls of udon side by side: the left with a pale, clear kombu broth (Kansai), the right with a darker soy and bonito broth (Kanto); a simple outline of Japan's main island behind them, split in the middle.`
- **本文**：`Two tidy piles side by side on a wooden counter: kombu sheets on the left, bonito flakes and a dried katsuobushi block with a shaving box on the right; a gentle arrow between them suggesting east and west.`

### /en/eat/dashi-iriko-ago/
- **ヒーロー**：`A small heap of dried sardines (iriko) and a few dried flying fish (ago) on a bamboo tray, a bowl of Sanuki udon in pale broth beside them, sea and islands of the Inland Sea faintly behind.`
- **本文**：`A flying fish in flight over the sea, and below it the same fish grilled and dried on a rack; a bowl of Kyushu-style clear soup at the bottom corner.`

## Eat — Donburi

### /en/eat/donburi/
- **ヒーロー**：`Four Japanese rice bowl dishes on a wooden counter: gyudon, katsudon, oyakodon and tendon, each in a lidded donburi bowl with the lid set beside it.`
- **本文**：`A cross-section of a donburi bowl showing layers: rice at the bottom, sauce soaking in, toppings on top, the lid above; drawn as a clean cutaway.`

### /en/eat/donburi-gyudon/
- **ヒーロー**：`A bowl of gyudon at a counter chain shop: thin simmered beef and onion over rice, a small bowl of miso soup and a raw egg beside it, a counter seat and a pot of pickled ginger.`
- **本文**：`An early-morning fish market scene with workers in boots eating beef bowls quickly at a tiny standing counter, crates of fish around them.`

### /en/eat/donburi-katsudon/
- **ヒーロー**：`A bowl of katsudon: a sliced pork cutlet simmered with egg and onion over rice, steam rising, chopsticks resting on the bowl.`
- **本文**：`Two katsudon bowls side by side: on the left the egg-simmered version, on the right a sauce katsudon with the cutlet dipped in dark Worcestershire-style sauce over shredded cabbage.`

## Eat — Gyoza

### /en/eat/gyoza/
- **ヒーロー**：`A plate of pan-fried gyoza fanned out with crisp golden bottoms facing up, a small dish of soy-vinegar dipping sauce with chili oil, a bowl of white rice beside it, chopsticks on a ceramic rest.`
- **本文**：`Two plates side by side: Chinese boiled dumplings served in a bowl as a meal on the left, Japanese pan-fried gyoza next to a bowl of rice on the right.`

### /en/eat/gyoza-hamamatsu/
- **ヒーロー**：`Hamamatsu-style gyoza: dumplings arranged in a circle in a frying pan like a wheel, a mound of boiled bean sprouts in the center, viewed from above.`
- **本文**：`A cook flipping a round pan of gyoza onto a plate in one motion, the circular arrangement intact, bean sprouts being added to the middle.`

### /en/eat/gyoza-utsunomiya/
- **ヒーロー**：`A small gyoza shop counter in Utsunomiya with plates of fried and boiled gyoza, a gyoza-shaped stone statue faintly visible outside the window.`
- **本文**：`Three plates of gyoza in a row: pan-fried, boiled in water, and deep-fried; each with its own dipping sauce dish.`

## Eat — Izakaya

### /en/eat/izakaya/
- **ヒーロー**：`The entrance of a small Japanese izakaya at evening: a red paper lantern, a short split curtain at the door, warm light inside and a counter with a few customers.`
- **本文**：`Inside an izakaya from the counter: a cook grilling, small plates arriving, glasses of beer being raised, a menu board shown as blank wooden tags on the wall.`

### /en/eat/izakaya-otoshi/
- **ヒーロー**：`A small dish of otoshi (a seasonal appetizer) placed on a wooden izakaya counter beside a freshly poured glass of beer and a folded hot towel, before anything has been ordered.`
- **本文**：`Five different otoshi dishes in small bowls arranged in a row: simmered vegetables, edamame, a tiny salad, pickles and a small piece of fish.`

### /en/eat/izakaya-yakitori/
- **ヒーロー**：`Yakitori skewers on a charcoal grill, smoke rising, a cook's hand brushing tare sauce; some skewers salted, some glazed.`
- **本文**：`A tray of yakitori skewers laid out in a row showing different cuts: thigh with leek, skin, liver, heart, meatball and wings; two small dishes for salt and tare beside them.`

## Eat — Konamono

### /en/eat/konamono/
- **ヒーロー**：`A hot iron griddle with an okonomiyaki, a pan of takoyaki balls, and a wooden board of soft Akashi-yaki with a small bowl of dashi, all seen from above.`
- **本文**：`A bag of wheat flour in the center with three lines leading out to an okonomiyaki, takoyaki and Akashi-yaki; a simple family-tree layout without words.`

### /en/eat/konamono-okonomiyaki/
- **ヒーロー**：`Okonomiyaki on a teppan griddle, brown sauce and mayonnaise drizzled in a lattice, bonito flakes dancing, two small metal spatulas.`
- **本文**：`Cross-sections of two okonomiyaki side by side: Osaka style with batter and cabbage mixed together, Hiroshima style built in stacked layers with noodles in the middle.`

### /en/eat/konamono-takoyaki/
- **ヒーロー**：`A street stall cook turning takoyaki in a cast-iron pan with picks, steam rising, a boat-shaped paper tray of finished takoyaki with sauce and bonito flakes.`
- **本文**：`A wooden board of soft, egg-rich Akashi-yaki dumplings next to a small bowl of dashi for dipping, with one dumpling being dipped by chopsticks; the Akashi Strait bridge faintly in the background.`

## Eat — Market

### /en/eat/market/
- **ヒーロー**：`A Japanese fish market at early morning: styrofoam crates of fish on ice, rubber-booted workers, a forklift cart, and a small queue outside a seafood bowl shop.`
- **本文**：`A seafood rice bowl seen from above: salmon roe, tuna, sea urchin, crab and egg on rice, a small dish of soy sauce and wasabi.`

### /en/eat/market-omicho-hakodate/
- **ヒーロー**：`A town market arcade with crab and squid displays on ice, a stall owner handing over a bowl; snow on the roof edges outside the entrance.`
- **本文**：`At a Hakodate morning market, a visitor fishing a live squid from a tank with a short rod, the squid then served as translucent sashimi on a plate.`

### /en/eat/market-toyosu/
- **ヒーロー**：`A modern, clean wholesale fish market hall with rows of whole tuna on the floor, buyers inspecting them; seen from a visitor gallery behind glass.`
- **本文**：`Split view: on one side the closed wholesale floor seen through an observation window, on the other side an open food court next door where visitors eat sushi at a counter.`

## Eat — Ramen

### /en/eat/ramen/
- **ヒーロー**：`A bowl of ramen at a counter: noodles in soup with chashu, a soft egg, nori and green onion, steam rising, a ticket machine faintly behind.`
- **本文**：`Four ramen bowls in a row showing the main soup types: clear soy, miso with corn and butter, milky white tonkotsu, and pale salt; viewed from slightly above.`

### /en/eat/ramen-hakata/
- **ヒーロー**：`A bowl of Hakata ramen with very thin straight noodles in milky white pork broth, pickled red ginger and sesame on the counter, a yatai stall roof faintly behind.`
- **本文**：`A server pouring a fresh portion of thin noodles (kaedama) into a customer's remaining soup at a ramen counter.`

### /en/eat/ramen-iekei/
- **ヒーロー**：`A bowl of Yokohama iekei ramen: thick noodles in a brown pork-and-soy broth, spinach, three large sheets of nori standing at the edge, a slice of chashu.`
- **本文**：`A small blank order slip with three rows of circles to tick (noodle firmness, richness, oil), a pencil beside it, and a bowl of iekei ramen behind; no readable text.`

### /en/eat/ramen-kagoshima/
- **ヒーロー**：`A bowl of Kagoshima ramen with a cloudy pork broth, thin noodles, bean sprouts and fried onion; a small plate of pickled daikon and a cup of tea served beside it.`
- **本文**：`A ramen shop table where pickles and green tea are already set out before the bowl arrives, a customer picking up a piece of pickle while waiting; Sakurajima volcano through the window.`

### /en/eat/ramen-kitakata/
- **ヒーロー**：`A bowl of Kitakata ramen with wide wavy noodles in clear soy broth, layers of chashu covering the surface; a morning street of old storehouses with white walls outside the window.`
- **本文**：`An early-morning ramen shop with a few customers eating bowls at 7 in the morning, sunlight low through the door, a clock with its hands pointing to seven.`

### /en/eat/ramen-kumamoto/
- **ヒーロー**：`A bowl of Kumamoto ramen: milky tonkotsu broth with dark black garlic oil swirled on top, medium noodles, chashu and wood ear mushroom.`
- **本文**：`A small pan of garlic being slowly fried until black in oil, and the oil being drizzled over a white ramen broth.`

### /en/eat/ramen-kurume/
- **ヒーロー**：`A large cauldron of pork bone broth simmering in a Kurume ramen shop kitchen, a cook stirring with a long paddle, steam filling the room.`
- **本文**：`A cook topping up an old cauldron of broth with fresh bones and water, the level kept full instead of emptied; a ladle filling a bowl beside it.`

### /en/eat/ramen-sapporo/
- **ヒーロー**：`A bowl of Sapporo miso ramen topped with stir-fried bean sprouts, corn, a pat of butter and ground pork, snow falling outside a steamy window.`
- **本文**：`A cook tossing bean sprouts and ground pork in a wok, then adding miso and broth to the same wok before pouring it over noodles.`

### /en/eat/ramen-tokyo-shoyu/
- **ヒーロー**：`A classic Tokyo shoyu ramen: clear brown soy broth, curly thin noodles, a slice of chashu, menma, a naruto fish cake slice and spinach.`
- **本文**：`A family tree drawn as branching noodles: one clear soy ramen bowl at the root, with branches leading to miso, tonkotsu and other bowls; no words.`

## Eat — Sake

### /en/eat/sake/
- **ヒーロー**：`A sake bottle and a small ceramic tokkuri with two cups on a wooden counter, one cup warm with faint steam, one cold with condensation.`
- **本文**：`A row of sake vessels showing serving temperatures: a cold glass in an ice bucket, a room-temperature cup, a warm tokkuri in a small pot of hot water.`

### /en/eat/sake-nada-fushimi/
- **ヒーロー**：`A row of old sake breweries with dark wooden walls and white plaster in Fushimi, a canal with a small wooden boat, a ball of cedar leaves hanging at the brewery door.`
- **本文**：`A spring of clear water flowing from a stone spout outside a brewery, a person filling a bottle, brewery buildings behind.`

### /en/eat/sake-niigata/
- **ヒーロー**：`A sake brewery in deep snow in Niigata, steam rising from the roof, rice fields buried white around it, mountains behind.`
- **本文**：`A tasting corner with a long row of small sake vending dispensers, a visitor holding a tiny tasting cup; drawn without readable labels.`

## Eat — Soba

### /en/eat/soba/（本文の2枚はそのまま。ヒーローのみ）
- **ヒーロー**：`A quiet soba shop counter: a bamboo tray of cold soba noodles, a cup of dipping sauce, a small plate of green onion and wasabi, and a red lacquer pot of soba-yu; a buckwheat field in white flower seen through the window.`

### /en/eat/soba-edo/
- **ヒーロー**：`A traditional Tokyo soba house interior with tatami seating and a wooden lattice, a lacquered tray of cold soba, a cup of dark dipping sauce.`
- **本文**：`A pair of chopsticks lifting soba noodles and dipping only the lower half into dark sauce; beside it, a small standing soba counter at a station with a customer eating quickly.`

### /en/eat/soba-izumo/
- **ヒーロー**：`Izumo warigo soba: three round red lacquer dishes stacked with dark whole-grain soba, toppings of grated daikon, seaweed and green onion.`
- **本文**：`A hand pouring dipping sauce directly onto the top dish of stacked red lacquer soba dishes, then pouring the leftover sauce into the next dish down.`

### /en/eat/soba-togakushi/
- **ヒーロー**：`Five small bundles of soba arranged on a round bamboo tray, a cedar forest and a mountain shrine gate in mist behind.`
- **本文**：`A cook arranging soba into small horseshoe-shaped bundles on a bamboo tray one by one.`

### /en/eat/soba-wanko/
- **ヒーロー**：`Wanko soba: a server standing beside a diner, tossing a small mouthful of soba into the diner's bowl, a stack of empty little bowls growing on the table.`
- **本文**：`A diner closing the lid on a small bowl to signal they are finished, the server pausing with the next serving in hand.`

## Eat — Sushi

### /en/eat/sushi/
- **ヒーロー**：`A sushi counter with a chef pressing nigiri, pieces of tuna, sea bream and shrimp on a wooden geta board, a cup of green tea.`
- **本文**：`A timeline drawn as a row of objects: a fermented fish in a jar, a pressed sushi box, a street stall with nigiri, a conveyor belt, an upscale counter; no words.`

### /en/eat/sushi-edomae/
- **ヒーロー**：`An Edomae sushi counter seen from the guest seat: the chef's hands, a cypress counter, nigiri of cured gizzard shad and marinated tuna.`
- **本文**：`The preparation behind "raw" fish: a fish fillet being salted, rinsed in vinegar, marinated in soy, and lightly simmered; four small trays side by side.`

### /en/eat/sushi-funa/
- **ヒーロー**：`Slices of funa-zushi with orange roe showing on a small plate, a wooden fermentation barrel and Lake Biwa with reeds behind.`
- **本文**：`Cutaway of a wooden barrel with layers of crucian carp packed in rice under a heavy stone weight, fermenting.`

### /en/eat/sushi-kaiten/
- **ヒーロー**：`A conveyor belt sushi restaurant with colorful plates circling past a row of seated customers, a touch-screen order panel at the table, a tea tap.`
- **本文**：`A beer bottling line conveyor in an old Osaka brewery, its motion echoed by a sushi conveyor belt drawn beside it.`

### /en/eat/sushi-kakinoha/
- **ヒーロー**：`Kakinoha-zushi: small rectangles of salted mackerel on rice, each wrapped in a green persimmon leaf, packed neatly in a wooden box; mountain village houses behind.`
- **本文**：`Hands wrapping a piece of mackerel sushi in a persimmon leaf, a pile of fresh leaves and pressed rice beside them.`

### /en/eat/sushi-kanazawa/
- **ヒーロー**：`A sushi counter in Kanazawa with nigiri of local fish like blackthroat seaperch and sweet shrimp, the Sea of Japan seen through the window.`
- **本文**：`A conveyor sushi shop where the belt is stopped and a chef takes orders directly, handing plates across the counter.`

### /en/eat/sushi-masu/
- **ヒーロー**：`Masu-zushi: a round wooden container lined with bamboo leaves, a cake of pink trout over rice, a slice cut out; a railway platform faintly behind.`
- **本文**：`A train station kiosk with round wooden masu-zushi containers stacked on the counter, a traveler buying one before boarding.`

### /en/eat/sushi-osaka-hako/
- **ヒーロー**：`Osaka box sushi: a neat rectangular block of pressed rice topped with shrimp, sea bream and egg, cut into squares on a wooden board.`
- **本文**：`A wooden press box being filled with rice and toppings, the lid being pressed down, and the block coming out cleanly.`

### /en/eat/sushi-saba/
- **ヒーロー**：`Kyoto saba-zushi: a whole cured mackerel laid over a log of rice wrapped in kombu, sliced, on a lacquer plate; a Kyoto townhouse lattice behind.`
- **本文**：`A traveler on an old mountain road carrying salted mackerel on a frame on their back toward Kyoto, wooded hills around them.`

## Eat — Teishoku

### /en/eat/teishoku/
- **ヒーロー**：`A teishoku set meal on a tray: rice, miso soup, grilled fish, pickles and a small side dish, viewed from above.`
- **本文**：`A server refilling a customer's rice bowl from a wooden rice tub at a set-meal restaurant.`

### /en/eat/teishoku-morning/
- **ヒーロー**：`A Nagoya coffee shop table with a cup of coffee, a thick slice of toast with sweet red bean paste, a boiled egg, served together in the morning light.`
- **本文**：`A chain beef-bowl restaurant breakfast set on a tray: rice, miso soup, grilled salmon, a raw egg and nori.`

### /en/eat/teishoku-washoku-breakfast/
- **ヒーロー**：`A traditional Japanese breakfast at an inn: rice, miso soup, grilled fish, rolled omelet, natto, pickles and small dishes on a lacquer tray, morning light from a paper window.`
- **本文**：`A guest at a ryokan seated on a cushion, lifting the lid of a miso soup bowl, many small breakfast dishes arranged in front of them.`

## Eat — Tonkatsu

### /en/eat/tonkatsu/
- **ヒーロー**：`A tonkatsu set: a sliced golden pork cutlet, a mound of shredded cabbage, rice, miso soup and a pot of thick sauce.`
- **本文**：`A pork loin cutlet and a fillet cutlet sliced side by side, showing the difference in fat; a bowl of sesame seeds being ground in a mortar beside them.`

### /en/eat/tonkatsu-kushikatsu/
- **ヒーロー**：`A plate of kushikatsu skewers at an Osaka counter, a shared stainless steel pot of thin sauce in front, raw cabbage leaves on the side, Tsutenkaku tower faintly through the window.`
- **本文**：`A customer dipping a skewer into a shared sauce pot once, then using a cabbage leaf to scoop more sauce onto the skewer instead of dipping again.`

### /en/eat/tonkatsu-miso-katsu/
- **ヒーロー**：`Miso-katsu: a pork cutlet covered in thick dark red bean-miso sauce on a sizzling iron plate, with cabbage.`
- **本文**：`Three ways miso-katsu is served side by side: sauce poured over a plate of cutlet, a cutlet dipped into a pot of miso sauce, and miso-katsu on rice as a bowl.`

## Eat — Udon

### /en/eat/udon/
- **ヒーロー**：`A bowl of hot udon with thick white noodles in clear broth, green onion, a slice of fish cake and tempura bits.`
- **本文**：`Three udon bowls from different regions in a row: thick firm Sanuki udon, soft Hakata udon with burdock tempura, and Osaka kitsune udon with fried tofu.`

### /en/eat/udon-hakata/
- **ヒーロー**：`A bowl of soft Hakata udon with a large burdock tempura stick on top, clear broth, a small udon shop counter.`
- **本文**：`A cook cutting burdock into thin sticks and frying them into a crisp tempura fan.`

### /en/eat/udon-osaka/
- **ヒーロー**：`Osaka kitsune udon: a sheet of sweet simmered fried tofu floating on pale kelp broth over soft noodles.`
- **本文**：`Two bowls compared: a Kansai "tanuki" with fried tofu over soba, and a Kanto "tanuki" with tempura bits over udon; placed side by side.`

### /en/eat/udon-sanuki/
- **ヒーロー**：`A self-service Sanuki udon shop: a customer dipping noodles in a strainer into hot water, trays and tempura on a counter, rice fields of Kagawa outside.`
- **本文**：`A pair of hands kneading udon dough by stepping on it wrapped in cloth, and then rolling and cutting it into thick noodles.`

## Eat — Unagi

### /en/eat/unagi/
- **ヒーロー**：`An unadon in a lacquered box: grilled eel glazed in sweet sauce over rice, a small dish of sansho pepper and a bowl of clear eel liver soup.`
- **本文**：`Three lacquer eel boxes of increasing size in a row, showing the grades by how much eel covers the rice.`

### /en/eat/unagi-kansai/
- **ヒーロー**：`Hitsumabushi: grilled eel chopped over rice in a round wooden tub, with condiments and a small pot of dashi beside it.`
- **本文**：`An eel being opened along the belly and grilled directly over charcoal without steaming, crisp on the outside.`

### /en/eat/unagi-kanto/
- **ヒーロー**：`A Tokyo eel restaurant with a cook fanning skewered eel over charcoal, smoke rising, a lacquer box of soft glazed eel ready on the counter.`
- **本文**：`Three steps of Kanto-style eel: opening it along the back, steaming the fillets in a bamboo basket, then glazing and grilling them over charcoal.`

## Eat — Wagashi

### /en/eat/wagashi/
- **ヒーロー**：`An assortment of seasonal wagashi on a lacquer tray: a cherry blossom nerikiri, a chestnut sweet, a translucent summer jelly, beside a bowl of matcha.`
- **本文**：`Four wagashi representing the four seasons in a row: a pink spring blossom, a blue summer water jelly, an orange autumn leaf, a white winter snow sweet.`

### /en/eat/wagashi-imagawayaki/
- **ヒーロー**：`A street stall griddle with rows of round imagawayaki cakes being filled with sweet red bean paste, a paper bag of finished cakes.`
- **本文**：`A cut imagawayaki showing the red bean filling, with a simple outline map of Japan behind showing different regions in different colors.`

### /en/eat/wagashi-yokan/
- **ヒーロー**：`A bar of dark red bean yokan sliced on a small plate, a cup of green tea, the wrapped bar beside it.`
- **本文**：`A historical scene of a soldier's ration pack including bars of yokan, drawn next to a modern wrapped bar of yokan; no words.`

## Eat — Wagyu

### /en/eat/wagyu/
- **ヒーロー**：`A raw marbled wagyu steak on a wooden board, a black Japanese cow grazing in a green valley behind.`
- **本文**：`Three slices of beef side by side showing increasing marbling, from lightly marbled to very heavily marbled, drawn like a specimen chart.`

### /en/eat/wagyu-kobe/
- **ヒーロー**：`A teppanyaki chef searing a thick Kobe beef steak on a hot iron plate, garlic chips crisping, the Kobe harbor at dusk through the window.`
- **本文**：`A small bronze cow statue in a restaurant window, with a certificate frame shown as a blank decorated document beside it.`

### /en/eat/wagyu-matsusaka/
- **ヒーロー**：`A pot of Matsusaka beef sukiyaki on a table in a traditional room, thin marbled slices of beef laid in the pot, raw egg in a small bowl.`
- **本文**：`Black cattle grazing in a quiet valley surrounded by hills, a farmer brushing one of them.`

### /en/eat/wagyu-omi/
- **ヒーロー**：`Ōmi beef steak on a plate, Lake Biwa and a castle town faintly behind.`
- **本文**：`A historical scene: a lacquer box of preserved beef being presented at the shogun's court as medicine; drawn in a classical style.`

### /en/eat/wagyu-shabu/
- **ヒーロー**：`Shabu-shabu: a pair of chopsticks swishing a thin slice of wagyu in a pot of boiling kombu broth, a plate of vegetables and tofu beside it.`
- **本文**：`A shabu-shabu table with two small dipping bowls of sesame sauce and ponzu, plates of thin beef being brought in as refills.`

### /en/eat/wagyu-sukiyaki/
- **ヒーロー**：`A cast-iron sukiyaki pan with marbled beef, tofu, leek, mushrooms and shirataki simmering in sweet soy broth, a raw egg for dipping.`
- **本文**：`Two sukiyaki pans side by side: Kanto style with a pre-mixed broth poured in, Kansai style with beef seared first, then sugar and soy added directly.`

### /en/eat/wagyu-tajima/
- **ヒーロー**：`A black Tajima cow standing in a mountain pasture in northern Hyogo, terraced hills and a farmhouse behind.`
- **本文**：`A family tree of cattle drawn as branching lines from one Tajima cow at the root, leading to many calves; no names.`

### /en/eat/wagyu-yakiniku/
- **ヒーロー**：`A yakiniku table with a smokeless grill in the center, slices of beef cooking, small dishes of sauce, an extraction hood above.`
- **本文**：`A grill at a postwar black market stall with offal cooking on it, people standing around; and beside it a modern smokeless table grill; no words.`

### /en/eat/wagyu-yonezawa/
- **ヒーロー**：`Yonezawa beef steak on a plate, snowy mountains of Yamagata outside a window.`
- **本文**：`A Meiji-era scene: an English teacher leading a black cow down a road toward a port, wooden houses around them.`

## Eat — Yatai


### /en/eat/yatai/
- **ヒーロー**：`A row of yatai food stalls along a river at night with lanterns glowing, customers seated at small counters, steam rising.`
- **本文**：`Inside a yatai stall: a narrow counter with six stools, a cook serving ramen and grilled skewers, customers shoulder to shoulder.`

### /en/eat/yatai-hakata/
- **ヒーロー**：`Hakata yatai stalls along the Naka River at night, reflections of lights on the water, a stall with a bowl of ramen being served.`
- **本文**：`A yatai stall being set up in the early evening: a cart being wheeled in, an awning unfolded, stools placed around the counter.`

### /en/eat/yatai-matsuri/
- **ヒーロー**：`A Japanese summer festival with a lane of food stalls under strings of lanterns: yakisoba, candied apples, shaved ice, people in yukata.`
- **本文**：`A child in a yukata holding a candied apple and a cup of shaved ice, stall awnings and lanterns above.`

## Eat — Sashimi

### /en/eat/sashimi/
- **ヒーロー**：`A plate of sashimi arranged on shiso leaves and shredded daikon: slices of tuna, sea bream and yellowtail, a small mound of wasabi and a dish of soy sauce beside it.`
- **本文**：`A chef's knife drawing one long pull through a block of tuna on a cutting board; beside it three small groups of slices showing different cuts: flat thick slices, thin translucent slices, and small cubes.`

### /en/eat/sashimi-shime/
- **ヒーロー**：`Slices of vinegar-cured mackerel with silver skin on a plate, and white fish fillets pressed between sheets of kombu on a board beside it.`
- **本文**：`A fillet of white fish being laid between two sheets of kombu and wrapped, then the same fish unwrapped and sliced, slightly translucent and amber at the edges.`

### /en/eat/sashimi-shusse-uo/
- **ヒーロー**：`A fish market counter with yellowtail of four different sizes laid out in a row from small to large on ice, a buyer looking along the row.`
- **本文**：`A growth chart drawn as one fish growing larger in four stages from left to right, with a small blank tag above each stage; no readable names.`

## Eat — Seafood

### /en/eat/seafood/
- **ヒーロー**：`A Japanese harbor fish market table with salted salmon, a puffer fish, dried horse mackerel on a rack, a bundle of kombu and a tray of fish cakes, fishing boats behind.`
- **本文**：`A row of preserved seafood laid out like a specimen chart: a salted salmon fillet, a split dried fish, a fish-paste log, a sheet of nori and a strip of kombu; no labels.`

### /en/eat/seafood-salmon/
- **ヒーロー**：`Whole salmon hanging to cure under the eaves of a northern fishing house, snow on the ground, a cold grey sea behind.`
- **本文**：`Two small bowls side by side: loose, glistening orange salmon roe on the left, and roe still held together in its membrane on the right; a salmon fillet on the board behind.`

### /en/eat/seafood-fugu/
- **ヒーロー**：`A large round platter of fugu sashimi sliced so thin the blue pattern of the plate shows through, arranged like a chrysanthemum, a small dish of ponzu beside it.`
- **本文**：`A licensed chef in white working carefully at a clean board, separating a puffer fish into parts, a covered container set apart at the side for the parts that must be discarded.`

### /en/eat/seafood-anago-hamo/
- **ヒーロー**：`A box of grilled conger eel sliced over rice, the island shrine gate of Miyajima standing in the sea behind.`
- **本文**：`A Kyoto chef making many fine cuts across a pike conger fillet with a heavy knife, without cutting through the skin; next to it, the cut fish blooming open like a white flower in clear soup.`

### /en/eat/seafood-himono/
- **ヒーロー**：`Split horse mackerel drying on bamboo racks in the sun by the sea, a fishing village roof and nets behind.`
- **本文**：`Four small scenes in a row showing ways to preserve fish: drying in the sun, salting in a tub, boiling in a large pot, and grilling over charcoal; drawn without words.`

## Eat — Meat

### /en/eat/meat/
- **ヒーロー**：`A table spread with Japanese meats beyond beef: grilled black pork, a domed lamb grill with vegetables, a plate of raw horse sashimi, and a pot of venison stew.`
- **本文**：`A simple outline map of Japan with four small food icons placed far apart: lamb in the north, horse sashimi in the south-west, black pork at the southern tip, a deer in the mountains; no names.`

### /en/eat/meat-pork/
- **ヒーロー**：`A black pig grazing in a field of sweet potato plants in southern Kyushu, a volcano gently smoking in the distance.`
- **本文**：`Two dishes side by side: an Obihiro pork bowl with grilled pork slices glazed in sweet sauce over rice, and a square of braised pork belly kakuni in a small bowl.`

### /en/eat/meat-jingisukan/
- **ヒーロー**：`A domed iron grill on a table with lamb slices on the crown and bean sprouts and onions around the rim, smoke rising, a Hokkaido field behind.`
- **本文**：`Cross-section of a domed lamb grill showing the fat and juices running down the ridges from the meat onto the vegetables at the edge.`

### /en/eat/meat-basashi/
- **ヒーロー**：`A plate of horse sashimi with marbled pink slices, grated ginger and garlic, and a small dish of sweet soy sauce, Mount Aso faintly behind.`
- **本文**：`Two scenes side by side: on the left a deer and a wild boar in a forest, on the right a pot of deer stew bubbling on a stove with a thermometer standing in it.`

## Eat — Chicken

### /en/eat/chicken/
- **ヒーロー**：`A farmyard of free-ranging Japanese chickens under trees, a wooden coop behind.`
- **本文**：`A chicken drawn as a simple outline with the cuts shown as separate soft-colored areas (thigh, breast, tender, wing, skin, heart, liver), no labels.`

### /en/eat/chicken-karaage/
- **ヒーロー**：`A paper boat of freshly fried karaage chicken pieces with a wedge of lemon, steam rising, a small takeaway shop counter in Oita behind.`
- **本文**：`A cook dropping marinated pieces of chicken coated in starch into a deep pot of oil, a tray of finished golden pieces draining beside it.`

### /en/eat/chicken-mizutaki/
- **ヒーロー**：`A clay hotpot of Hakata mizutaki with chicken on the bone in a cloudy white broth, cabbage and leeks around it, a dish of ponzu beside it.`
- **本文**：`The order of a mizutaki meal in three panels: drinking a cup of the broth first, then eating the chicken, then rice cooked into the leftover broth as porridge.`

## Eat — Soups and hotpots

### /en/eat/nabe/
- **ヒーロー**：`A table set for a winter hotpot meal: a clay pot simmering on a portable burner, plates of vegetables and fish, a ladle, steam rising.`
- **本文**：`Three bowls side by side: a bowl of miso soup, a bowl of oden in clear broth, and a small portion of hotpot ladled into a bowl.`

### /en/eat/nabe-miso/
- **ヒーロー**：`A row of large cedar barrels of miso in an old brewery, stacked river stones weighing the lids, light through high windows.`
- **本文**：`Four small dishes of miso in a row showing different colors from very dark red to cream white, with a small heap of soybeans, rice and barley in front of them.`

### /en/eat/nabe-oden/
- **ヒーロー**：`A large square oden pot at an old oden shop counter with daikon, eggs, tofu and fish cakes in clear brown broth, a cook ladling a portion.`
- **本文**：`Three oden plates side by side: blocks of tofu grilled with sweet miso on skewers, Tokyo-style oden in soy broth, and Shizuoka-style oden in a very dark broth topped with fish powder.`

## Eat — Rice and what goes with it

### /en/eat/rice-sides/
- **ヒーロー**：`A bowl of white rice in the center surrounded by small dishes: pickles, natto, a sprinkle of furikake, simmered seaweed and a piece of grilled mochi.`
- **本文**：`A pantry shelf with jars of pickles, a tub of natto, a box of furikake and a pot of tsukudani, arranged neatly with no labels.`

### /en/eat/rice-sides-tsukemono/
- **ヒーロー**：`A Kyoto pickle shop with wooden barrels of pickled vegetables at the front, a shopkeeper lifting a large pickled turnip with tongs.`
- **本文**：`Three small dishes in a row: colorful pickles, a dark simmered tsukudani of small fish, and a little pile of furikake over rice.`

### /en/eat/rice-sides-tofu-natto/
- **ヒーロー**：`A tofu maker's workshop at dawn, blocks of tofu resting in a water tank, a wooden mold being lifted.`
- **本文**：`Two blocks of tofu cut side by side showing the rough pressed texture of momen and the smooth silky texture of kinugoshi; beside them a bowl of sticky natto being stirred with chopsticks.`

### /en/eat/rice-sides-mochi/
- **ヒーロー**：`Two people pounding mochi with a wooden mallet in a stone mortar on New Year's morning, steam rising from the rice.`
- **本文**：`Two bowls of New Year zōni side by side: square grilled mochi in clear broth on the left, round mochi in white miso soup on the right.`

### /en/eat/rice-sides-takikomi/
- **ヒーロー**：`A clay rice pot with the lid lifted, rice cooked with a whole sea bream on top, steam rising.`
- **本文**：`Three bowls of mixed rice in a row: rice cooked with chestnuts, rice cooked with vegetables and mushrooms, and a small individual kamameshi pot with a wooden lid.`

## Eat — Sōmen and more noodles

### /en/eat/somen/
- **ヒーロー**：`A glass bowl of chilled thin white somen noodles in iced water, a small cup of dipping sauce and grated ginger, a summer porch with a wind chime behind.`
- **本文**：`Thin noodles hanging in long white curtains from wooden poles to dry in a winter workshop, a worker stretching them by hand.`

### /en/eat/somen-miwa/
- **ヒーロー**：`Long strands of somen drying on wooden racks in front of a mountain shrine gate in Nara, winter light.`
- **本文**：`Hands kneading dough, rolling it into a rope, twisting and stretching it between two poles, shown as four small steps.`

### /en/eat/somen-banshu/
- **ヒーロー**：`Bundles of somen tied with paper bands stacked in wooden boxes in a warehouse, a quiet country town in Hyogo behind.`
- **本文**：`A large pot of boiling water with somen being stirred, then the noodles rinsed in cold water in a strainer.`

### /en/eat/udon-kishimen/
- **ヒーロー**：`A bowl of kishimen, flat wide udon noodles in dark broth topped with bonito flakes and spinach, at a station noodle counter.`
- **本文**：`A plate of cold flat kishimen noodles in summer with a small amount of sauce poured over and grated daikon on top.`

### /en/eat/udon-hoto/
- **ヒーロー**：`An iron pot of hoto simmering, wide flat noodles with pumpkin, mushrooms and vegetables in miso broth, Mount Fuji visible through the window.`
- **本文**：`A cook dropping freshly cut flat noodles straight into a pot of simmering miso soup without boiling them first.`

### /en/eat/udon-dagojiru/
- **ヒーロー**：`A bowl of Kyushu dumpling soup with torn flat flour dumplings, root vegetables and pork in miso broth.`
- **本文**：`Hands tearing pieces of dough into a pot on the left; on the right, hands stretching dough into long thin strips over another pot.`

### /en/eat/ramen-tsukemen/
- **ヒーロー**：`A plate of thick cold noodles beside a bowl of rich hot dipping soup, a hand lifting noodles toward the soup, a ramen counter behind.`
- **本文**：`A kitchen scene of noodle shop staff eating a quick meal by dipping leftover noodles in soup, the shop still closed.`

### /en/eat/ramen-hiyashi-chuka/
- **ヒーロー**：`A plate of chilled ramen noodles topped with strips of ham, cucumber, egg and tomato arranged in a fan, a summer window behind.`
- **本文**：`Two small restaurant storefronts in the 1930s style side by side, one in a northern city and one in Tokyo, each with a plate of chilled noodles in the window.`

### /en/eat/champon/
- **ヒーロー**：`A large bowl of Nagasaki champon with thick noodles, cabbage, seafood and pork in milky white soup, a harbor with ships behind.`
- **本文**：`A cook stir-frying vegetables and seafood in a wok, then pouring soup and noodles into the same wok to stew them together.`

### /en/eat/champon-sara-udon/
- **ヒーロー**：`A plate of crisp thin fried noodles topped with a thick glossy sauce of seafood and vegetables, a bottle of sauce beside it.`
- **本文**：`Two plates side by side: crisp thin fried noodles on the left, soft thick fried noodles on the right, both under the same vegetable sauce.`

### /en/eat/yakisoba/
- **ヒーロー**：`A festival stall cook tossing yakisoba on a large iron griddle with two spatulas, cabbage and pork, steam and lanterns around.`
- **本文**：`A bread roll split open and filled with yakisoba, topped with pickled ginger, on a paper napkin.`

### /en/eat/yakisoba-fujinomiya/
- **ヒーロー**：`A plate of Fujinomiya yakisoba with chewy noodles, cabbage and pork crackling, sprinkled with sardine powder, Mount Fuji behind.`
- **本文**：`Steamed noodles being cooled on a tray and coated with oil in a small noodle factory.`

### /en/eat/yakisoba-yokote/
- **ヒーロー**：`A plate of Yokote yakisoba with thick straight noodles and minced pork, a runny fried egg on top and red pickles on the side, snow outside.`
- **本文**：`A cook sliding a soft fried egg onto a plate of yakisoba, the yolk breaking slightly.`

## Eat — Local dishes

### /en/eat/kyodo-ryori/
- **ヒーロー**：`A long table set with regional dishes from across Japan in small bowls and plates, rice paddies and mountains seen through a farmhouse window.`
- **本文**：`An outline of Japan with small dish icons scattered over the regions, like pins on a map; no names.`

### /en/eat/kyodo-ryori-akita/
- **ヒーロー**：`Sticks of rice toasted by an open hearth fire, a clay hotpot of chicken broth with burdock and mushrooms beside it, snow outside.`
- **本文**：`A bottle of fish sauce beside a pot of hatahata fish simmering with vegetables and tofu.`

### /en/eat/kyodo-ryori-okinawa/
- **ヒーロー**：`A bowl of Okinawa soba with wheat noodles, slices of braised pork belly and pickled ginger, a red-tiled Okinawan roof and a shisa statue behind.`
- **本文**：`A plate of rafute, dark glazed cubes of braised pork belly, beside a small cup of awamori and a bowl of pig's trotter soup.`

## Eat — Izakaya (additions)

### /en/eat/izakaya-kakuuchi/
- **ヒーロー**：`A small liquor shop with bottles on wooden shelves and a narrow counter at the back where a few customers stand drinking from glasses, a cash register at the front.`
- **本文**：`Split scene: on the left a customer buying a bottle to take home, on the right the same shop's standing counter with a glass and a small plate of snacks.`

### /en/eat/izakaya-snack/
- **ヒーロー**：`A narrow lane of small bars at night with doors and soft glowing signs shown blank, one door slightly open with warm light inside.`
- **本文**：`Inside a small snack bar: a counter with a few stools, a hostess behind the counter pouring a drink, a karaoke screen dark on the wall.`

## Eat — Food shopping

### /en/eat/food-shopping/
- **ヒーロー**：`A busy department store basement food floor with glass cases of prepared food and sweets, staff in white caps behind the counters.`
- **本文**：`A supermarket deli shelf in the evening with a staff member placing discount stickers on bento boxes, shown as blank round stickers.`

### /en/eat/food-shopping-depachika/
- **ヒーロー**：`A department store food hall counter with beautiful boxed sweets and prepared salads, a shopper being handed a sample on a toothpick.`
- **本文**：`A staff member weighing a portion of salad on a small scale behind a glass counter, a customer waiting.`

### /en/eat/food-shopping-ekiben/
- **ヒーロー**：`A station platform kiosk stacked with bento boxes, a bullet train at the platform behind.`
- **本文**：`A traveller opening a bento box on a train seat, the window showing passing countryside.`

## Eat — Sweets

### /en/eat/sweets/
- **ヒーロー**：`A table with a bowl of anmitsu, a strawberry shortcake, a paper-wrapped crepe, a roasted sweet potato in paper and a convenience-store pudding cup.`
- **本文**：`A simple map-like layout with five dessert icons spread out, each in its own soft colored circle; no words.`

### /en/eat/sweets-amamidokoro/
- **ヒーロー**：`A traditional sweet shop interior with a glass bowl of anmitsu topped with fruit and red bean paste, a pot of black sugar syrup, a teacup.`
- **本文**：`Two bowls side by side: a thick red bean soup with toasted mochi, and a lighter bowl of sweet bean soup with rice dumplings.`

### /en/eat/sweets-yogashi/
- **ヒーロー**：`A strawberry shortcake slice with whipped cream on a plate in an old-style cake shop window, a pudding à la mode in a glass dish beside it.`
- **本文**：`A fruit parlour counter with perfectly arranged fruit in a glass case and a parfait being served.`

### /en/eat/sweets-crepe/
- **ヒーロー**：`A paper-wrapped crepe with strawberries and cream held in a hand on a busy Harajuku street, crepe stalls behind.`
- **本文**：`A crepe maker spreading batter on a round griddle with a wooden spreader, then folding it into a cone with paper.`

### /en/eat/sweets-yakiimo/
- **ヒーロー**：`A roasted sweet potato truck at dusk with a stone oven, potatoes in paper bags, a customer buying one.`
- **本文**：`A broken roasted sweet potato showing its golden glossy inside, steam rising, beside a crate of raw potatoes being stored.`

### /en/eat/sweets-conbini/
- **ヒーロー**：`A convenience store chilled dessert shelf with roll cakes, cream puffs and puddings in clear packages, a hand reaching for one.`
- **本文**：`Three desserts in a row on a table: a slice of roll cake, a cream puff and a cup of pudding, each with a plastic spoon.`

## Eat — Tea

### /en/eat/tea/
- **ヒーロー**：`A teapot pouring green tea into a small cup on a wooden table, a tin of loose leaf tea beside it, tea fields seen through the window.`
- **本文**：`Three cups side by side showing different teas: pale green sencha, deep green gyokuro, and frothy bright green matcha in a bowl with a bamboo whisk.`

### /en/eat/tea-regions/
- **ヒーロー**：`Rows of rounded tea bushes covering rolling hills in Shizuoka, Mount Fuji behind.`
- **本文**：`A tea field partly covered with black shade cloth, workers picking leaves by hand under it.`

### /en/eat/tea-kakigori-kissaten/
- **ヒーロー**：`A tall bowl of fluffy shaved ice with syrup in a summer café, a block of natural ice on a wooden counter behind.`
- **本文**：`An old-style Japanese coffee house interior with dark wood booths, a siphon coffee maker on the counter and a cup of coffee being served.`

## Eat — Western foods made Japanese

### /en/eat/western/
- **ヒーロー**：`A table with a plate of Napolitan spaghetti, a teriyaki burger and a glass bottle of milk, a retro diner interior behind.`
- **本文**：`A timeline drawn as objects on a long table from left to right: a macaroni box, a hotel plate of spaghetti, a burger, a milk bottle; no words.`

### /en/eat/western-italian/
- **ヒーロー**：`A plate of Napolitan spaghetti with ketchup sauce, sliced sausage, green pepper and onion, on an old hotel restaurant table.`
- **本文**：`A delivery scooter carrying a pizza box through a Japanese residential street at evening.`

### /en/eat/western-burger/
- **ヒーロー**：`A tall hamburger on a plate at a small burger shop near a harbor, navy ships faintly in the distance.`
- **本文**：`A teriyaki burger cut in half showing the glazed patty, lettuce and mayonnaise, on a paper wrapper.`

### /en/eat/western-dairy/
- **ヒーロー**：`Dairy cows grazing in a wide green Hokkaido pasture with a red barn and a silo.`
- **本文**：`A school lunch tray with a small carton of milk, a bowl of rice, a soup and a side dish, on a classroom desk.`

## Rail

> **メモ**：`setouchi-area-pass` は `basis: visited` の記事。ヒーローは、ご自身が撮った写真のほうが記事の根拠と合う。写真が用意できるまで、下のイラストで仮置きする。

### /en/rail/kansai-12-days-setouchi/
- **ヒーロー**：`A train running along the coast of the Seto Inland Sea, small islands and bridges in the background, a calm sea under a soft sky.`
- **本文**：`A simple illustrated route along the Inland Sea drawn as a line connecting small station dots, with tiny icons of a castle, a torii gate and a bridge along the way; no names.`

### /en/rail/kix-to-hiroshima/
- **ヒーロー**：`Kansai Airport with an airport express train in the foreground and a plane taking off behind, a long bridge across the sea.`
- **本文**：`Three options for travelling drawn side by side: a bullet train, a highway bus and a regional train, each with a small clock beside it.`

### /en/rail/setouchi-area-pass/
- **ヒーロー**：`A regional train crossing a bridge with the Seto Inland Sea and islands behind it, a paper rail pass shown as a blank card in the foreground corner.`
- **本文**：`A traveller at a station ticket gate showing a rail pass to a staff member, a train waiting at the platform beyond.`
