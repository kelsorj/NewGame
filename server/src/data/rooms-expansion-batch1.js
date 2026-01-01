// EXPANSION BATCH 1: The Shire & Eriador Expansion
// This file contains ~60 new rooms to be merged into rooms.js
// Generated for world expansion (200% larger goal)

export const shireExpansion = {
    // THE SHIRE EXPANSION - More Hobbit Villages

    tuckborough: {
        name: "Tuckborough",
        description: "Tuckborough is the ancestral home of the Took family, one of the most prominent and adventurous families in the Shire. The Great Smials tunnel deep into the hillside, creating a vast network of interconnected hobbit-holes that form something more like a small underground town than a single dwelling. The entrances are marked by round green doors, each one painted with the Took family crest—a white hand on a green field. Hobbits bustle about the village square, going about their daily business with the cheerful energy that characterizes hobbit life. You can hear music and laughter spilling from the many hobbit-holes, the sound of fiddles and flutes mixing with the chatter of families and friends. The Tooks are known for their love of adventure and their willingness to step outside the bounds of the Shire, and there's a sense of excitement and possibility in the air that you don't find in more conservative hobbit settlements. The village is surrounded by well-tended gardens and fields, and the smell of pipeweed and baking bread fills the air.",
        exits: { 'west': 'bag_end', 'east': 'tookbank', 'southeast': 'weathertop_approach', 'south': 'bombadil_house' },
        items: ['took_pipe', 'hobbit_ale'],
        enemies: []
    },

    tookbank: {
        name: "Tookbank",
        description: "A rolling hill dotted with the comfortable smials of the extended Took clan. The view from here is one of the finest in the Westfarthing, commanding a sweeping panorama of the Green Hill Country to the east and the ominous darkening of the Old Forest to the south. The sound of hobbit-children playing games on the slopes fills the air, and the smell of roasting meat wafts from the chimneys of the wealthier holes below.",
        exits: { 'west': 'tuckborough', 'east': 'michel_delving', 'south': 'weathertop_approach', 'southeast': 'weathertop_summit', 'southwest': 'bombadil_house' },
        items: ['ancient_coin'],
        enemies: []
    },

    michel_delving: {
        name: "Michel Delving",
        description: "Michel Delving is the largest town in the Shire, a bustling center of commerce and government that serves as the unofficial capital of hobbit lands. The town is built into and around a series of hills, with hobbit-holes of all sizes dotting the landscape. The marketplace is the heart of the town, a great open square where hobbits from all over the Shire come to buy and sell their wares. Stalls line the square, displaying everything from fresh produce and baked goods to handcrafted items, fine pipeweed, and the occasional trinket from distant lands. The air is filled with the sounds of haggling, laughter, and the calls of merchants advertising their goods. The Mayor's office stands prominently in the town square, a larger-than-usual hobbit-hole with an official-looking round door and a sign that swings in the breeze. The building is well-maintained and clearly important, and you can see hobbits coming and going on official business. The streets are wide and well-paved, and the whole town has an air of prosperity and contentment that speaks to the success of hobbit society.",
        exits: { 'west': 'tookbank', 'east': 'waymeet', 'down': 'doors_of_durin' },
        items: ['mayor_badge', 'shire_map'],
        enemies: []
    },

    mayor_office: {
        name: "Mayor's Office",
        description: "A well-appointed office with official documents and maps of the Shire. The Mayor's chair sits empty, waiting for the next election.",
        exits: { 'up': 'dimrill_dale', 'west': 'scary', 'northeast': 'archet', 'southwest': 'durthang_fortress' },
        items: ['official_seal', 'shire_census'],
        enemies: []
    },

    waymeet: {
        name: "Waymeet",
        description: "A major crossroads where the Great East Road meets the Northway. It is a place of transit and trade, where wagons laden with goods from the Farthing rumble past at all hours. An old wooden signpost stands in the center of the muddy junction, pointing the way to Michel Delving, Hobbiton, and points beyond. Travelers often stop here to water their ponies and exchange news before continuing on their journeys.",
        exits: { 'west': 'michel_delving', 'north': 'overhill', 'southwest': 'weathertop_summit' },
        items: ['travelers_guide'],
        enemies: []
    },

    overhill: {
        name: "Overhill",
        description: "Perched on the northern slopes above Hobbiton, Overhill offers a quieter existence than its busy neighbor below. The air is crisp and clean, and the gardens here are famous for their hardiness. From the edge of the village, you can look down upon the Hill and Bag End, spotting the distant smoke of the Gaffer's fires. It is a place of simple folk who appreciate a good view and a quiet pint.",
        exits: { 'south': 'waymeet', 'north': 'buckland_kitchen', 'southeast': 'bree_gate', 'down': 'moria_entrance' },
        items: ['spyglass'],
        enemies: []
    },

    scary: {
        name: "Scary",
        description: "A remote hamlet nestled against the rising hills of the Northfarthing, uncomfortably close to the Hills of Scary where goblins were once said to hide. The hobbits here are grim-faced and tough, accustomed to hard work in the quarries. The village is built of grey stone rather than brick or wood, giving it a somewhat fortress-like appearance. Fog often rolls down from the hills, shrouding the village in mist.",
        exits: { 'east': 'mayor_office', 'south': 'needlehole', 'southeast': 'barad_dur_throne_room', 'southwest': 'morgul_vale' },
        items: ['warding_charm'],
        enemies: []
    },

    needlehole: {
        name: "Needlehole",
        description: "A village of industrious dwarves and hobbits, named for the narrow split in the rock through which the stream flows. The ringing of hammers on anvils is the music of this place, for Needlehole is known for its tools and ironwork. Smoke rises from the smithies, and the streets are paved with crushed stone. It is a place of craft and metal, distinct from the farming villages of the rest of the Shire.",
        exits: { 'north': 'scary', 'south': 'longbottom', 'northwest': 'morgul_vale' },
        items: ['craftsman_tools'],
        enemies: []
    },

    longbottom: {
        name: "Longbottom",
        description: "The air here is thick and sweet with the scent of the finest pipe-weed in all of Middle-earth. Fields of broad-leafed plants stretch as far as the eye can see, tended by generations of the Hornblower family. The sun seems to shine warmer here in the Southfarthing, and the pace of life is slow and contented. Drying sheds line the road, their slatted walls leaking the rich aroma of curing leaf.",
        exits: { 'north': 'needlehole', 'east': 'sackville_manor', 'northwest': 'morgul_pass', 'west': 'cirith_ungol' },
        items: ['longbottom_leaf', 'pipeweed_pouch'],
        enemies: []
    },

    sackville_manor: {
        name: "Sackville Manor",
        description: "An ostentatious hobbit-hole that tries too hard to be 'grand', much like its inhabitants, the Sackville-Bagginses. The furniture is stiff and uncomfortable, the doilies are excessive, and the silverware is suspiciously similar to some missing from Bag End. The air smells of lavender water and unspoken judgment. It is a place where one wipes one's feet twice before entering, and then is likely scolded anyway.",
        exits: { 'west': 'longbottom', 'east': 'whitwell', 'northeast': 'fornost_gates', 'south': 'barad_dur_approach' },
        items: ['silver_spoon', 'fancy_doorknob'],
        enemies: []
    },

    whitwell: {
        name: "Whitwell",
        description: "Named for the ancient white stone well in its center, Whitwell is a peaceful village in the Tookland. The water drawn here is cool and sweet, said to be the purest in the Shire. Hobbits gather around the well to gossip and trade news. The pace of life here is even slower than the rest of the Shire, if such a thing is possible.",
        exits: { 'west': 'sackville_manor', 'northeast': 'rushock_bog', 'southeast': 'house_of_stewards' },
        items: ['pure_water'],
        enemies: []
    },

    rushock_bog: {
        name: "Rushock Bog",
        description: "A misty, damp stretch of land where the water table rises to meet the grass. Reeds and cattails grow in thick clumps, and the ground squelches alarmingly underfoot with every step. Strange insects buzz in the humid air, and the fog seems to have a personality of its own, curling and twisting around the stunted willows. It's a place most sensible hobbits avoid.",
        exits: { 'southwest': 'whitwell', 'east': 'green_hill_country', 'north': 'royal_armory', 'southeast': 'deep_mines_hub' },
        items: ['bog_herb'],
        enemies: ['giant_midge_swarm']
    },

    green_hill_country: {
        name: "Green Hill Country",
        description: "This region of the Shire is renowned for its beauty, a landscape of rolling emerald hills and hidden valleys. The sun seems to linger longer here, and the grass is a vibrant, healthy green. Hobbit-holes are tucked discreetly into the hillsides, their round doors painted in bright cheerful colors. It is the very picture of pastoral peace.",
        exits: { 'west': 'rushock_bog', 'east': 'bucklebury', 'northwest': 'royal_armory' },
        items: ['wildflower_bouquet'],
        enemies: []
    },

    // BUCKLAND EXPANSION

    bucklebury: {
        name: "Bucklebury",
        description: "Bucklebury is the main village of Buckland, a region east of the Brandywine River that serves as a bridge between the Shire and the wider world. The hobbits here are more adventurous than their cousins in the Shire proper, having regular contact with travelers from Bree and beyond. The village has a slightly different character than typical Shire settlements—the hobbit-holes are still round and comfortable, but there's a sense of readiness, of being prepared for the unexpected. The Brandybuck family, who founded the settlement, are known for their curiosity and their willingness to explore beyond the borders of the Shire. The village square is smaller than Michel Delving but no less lively, with a market that specializes in goods from both the Shire and the outside world. You can see signs of this contact everywhere—strange plants in gardens, unusual tools, and the occasional item that clearly came from far away. The air carries the mingled scents of the Shire—pipeweed, fresh bread, wildflowers—and something else, something that speaks of adventure and the wider world beyond the river.",
        exits: { 'west': 'green_hill_country', 'north': 'brandy_hall', 'east': 'elven_craft_hall', 'south': 'mithril_depths_1', 'northeast': 'singing_groves' },
        items: ['buckland_ale'],
        enemies: []
    },

    brandy_hall: {
        name: "Brandy Hall",
        description: "Brandy Hall is the ancestral home of the Brandybuck family, and it's unlike any other hobbit-hole in the Shire. It's more like a small underground town than a single dwelling, with dozens of rooms, corridors, and tunnels that extend deep into the hillside. The main entrance is a grand affair, with a large round door and a porch that's wide enough for several hobbits to stand comfortably. Inside, the corridors branch in all directions, leading to bedrooms, kitchens, pantries, wine cellars, libraries, and gathering halls. The walls are lined with portraits of Brandybuck ancestors, maps of the Shire and beyond, and the occasional trophy from some long-ago adventure. The air is filled with the scent of good food, fine wine, and the comfortable smell of a well-lived-in home. Despite its size, Brandy Hall manages to feel cozy rather than overwhelming, with each room designed for comfort and hospitality. The Brandybucks are famous for their wine-making, and the cellars are said to contain vintages that are older than some hobbits. This is a place of history, family, and the adventurous spirit that defines the Brandybuck name.",
        exits: { 'south': 'bucklebury', 'north': 'bombadil_garden' },
        items: ['brandybuck_heirloom', 'old_wine'],
        enemies: []
    },

    buckland_kitchen: {
        name: "Buckland Kitchen",
        description: "The heart of Brandy Hall, this massive kitchen is a scene of constant, organized chaos. Dozens of ovens radiate heat, filling the air with the mouthwatering scents of baking bread, roasting meats, and simmering soups. Cooks and scullery maids bustle about with purpose, dodging around huge tables piled high with ingredients. It is said that a Brandybuck breakfast is a meal to be reckoned with.",
        exits: { 'south': 'overhill', 'north': 'buckland_cellar', 'east': 'bree_east_road' },
        items: ['fresh_bread', 'honey_cake'],
        enemies: []
    },

    buckland_cellar: {
        name: "Buckland Cellar",
        description: "Cool, dark, and smelling of damp wood and fermentation, the Brandy Hall cellars are legendary. Barrels of '1420' and other fine vintages are stacked to the ceiling in endless rows. Dust motes dance in the beams of lantern light, revealing shelves lined with jars of pickles and preserves. It is a treasure trove of culinary delights.",
        exits: { 'south': 'buckland_kitchen', 'north': 'crickhollow' },
        items: ['aged_wine', 'wine_cork'],
        enemies: []
    },

    crickhollow: {
        name: "Crickhollow",
        description: "A quiet, secluded house in Buckland, surrounded by a well-tended garden and a high hedge. It feels removed from the rest of the world, a perfect hiding place. Inside, the rooms are comfortable and homely, but with a sense of waiting emptiness. This was Frodo's 'new home' before his flight, and it still holds an air of secrecy.",
        exits: { 'south': 'buckland_cellar', 'west': 'old_forest_buckland_entrance', 'southeast': 'weathertop_base' },
        items: ['garden_tool'],
        enemies: []
    },

    old_forest_buckland_entrance: {
        name: "Old Forest - Buckland Entrance",
        description: "A small, rusted iron gate set into the High Hay offers a second way into the Old Forest. The trees on the other side seem to crowd the gate, as if pressing against the bars. A cold draft blows through the gaps, carrying the scent of decay and stagnant water. To step through is to leave the safety of the Shire behind.",
        exits: { 'east': 'crickhollow', 'west': 'hobbiton_square', 'south': 'midgewater_marshes' },
        items: [],
        enemies: ['huorn']
    },

    // OLD FOREST EXPANSION

    // Note: bombadil_house already exists, so we expand from it
    bombadil_garden: {
        name: "Tom's Garden",
        description: "A riot of color and life, Tom Bombadil's garden is a place where nature grows with a wild, joyful abandon. Giant sunflowers nod their heads, beans climb rapidly up poles, and the air is thick with the scent of herbs and flowers. Bees drone contentedly, and the feeling of safety and peace is absolute. Here, the malice of the Old Forest cannot reach.",
        exits: { 'south': 'brandy_hall', 'north': 'barrow_downs_approach', 'east': 'niphredil_meadow' }, // connects to existing bombadil_house
        items: ['magical_herb', 'garden_seed'],
        enemies: []
    },

    old_forest_exit: {
        name: "Old Forest - Eastern Exit",
        description: "The oppressive canopy of the Old Forest finally breaks, revealing the open sky and the rolling downs ahead. The air tastes fresh and clean after the stagnant gloom of the woods. You have escaped the trees, but the journey is far from over. The land ahead is empty and wild.",
        exits: { 'east': 'bywater', 'south': 'mirkwood_path_1', 'southwest': 'troll_cave' },
        items: ['forest_trophy'],
        enemies: []
    },

    // BARROW-DOWNS EXPANSION

    barrow_downs_approach: {
        name: "Approach to the Barrow-downs",
        description: "The cheerful green of the Shire fades into a greyer, wilder landscape. The hills ahead rise steeply, their summits crowned with ancient stones and their slopes shrouded in a clinging mist. The air grows noticeably colder, and a sense of unease settles over you. The path winds upward into the fog, leading to the burial grounds of the Kings of Men.",
        exits: { 'south': 'bombadil_garden', 'north': 'barrow_downs', 'east': 'nameless_tunnels' },
        items: [],
        enemies: []
    },

    barrow_downs: {
        name: "The Barrow-downs",
        description: "You stand amidst the Great Barrows, massive green mounds that hide the tombs of ancient kings. The fog here is thick and cold, obscuring the sun and muffling all sound. Strange, pale lights sometimes flicker in the distance, and the wind sounds like a despairing moan. It is easy to lose one's way here, and even easier to lose one's hope. This is a domain of the dead.",
        exits: { 'south': 'barrow_downs_approach', 'west': 'barrow_chamber_1', 'northeast': 'hall_of_fire_guest', 'southeast': 'khazad_dum_chasm_view', 'east': 'henneth_annun' },
        items: [],
        enemies: ['barrow_wight']
    },

    barrow_chamber_1: {
        name: "Barrow Chamber - First Mound",
        description: "You have entered the dark interior of a barrow. The air is stagnant and smells of dry rot. In the center of the chamber, a stone bier lies empty, surrounded by rusted weapons and tarnished gold—items buried with the dead to serve them in the afterlife. The darkness seems to press against your light, and shadows dance on the walls.",
        exits: { 'east': 'barrow_downs', 'west': 'barrow_chamber_2', 'northeast': 'elrond_study', 'northwest': 'hidden_flet', 'southwest': 'rivendell_guest_house' },
        items: ['ancient_sword', 'barrow_treasure'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_2: {
        name: "Barrow Chamber - Second Mound",
        description: "The air in this larger chamber is freezing cold. Stone coffins line the walls, their lids cracked or pushed aside. Dust covers everything. You hear a scratching sound coming from the shadows, like bone scraping against stone. This tomb has been disturbed, and its profound silence feels threatening.",
        exits: { 'east': 'barrow_chamber_1', 'west': 'barrow_chamber_3', 'north': 'hidden_flet' },
        items: ['ancient_shield', 'barrow_gold'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_3: {
        name: "Barrow Chamber - Third Mound",
        description: "The deepest and largest of the barrows contains a great stone table in its center, laid out with gold and jewels that glitter coldly in the gloom. An ancient sword lies across the table, its blade notched but still sharp. This was the resting place of a great prince of old, but now a Wight claims lordship here. The air is thick with malice.",
        exits: { 'east': 'barrow_chamber_2', 'west': 'combe', 'northeast': 'hidden_flet' },
        items: ['barrow_blade', 'ancient_crown'],
        enemies: ['barrow_wight']
    },

    weathertop_approach: {
        name: "Approach to Weathertop",
        description: "The hills rise sharply here, culminating in the great peak of Amon Sûl. The slopes are covered in rough grass and treacherous shale. The ruins of the ancient watchtower crown the summit like a broken tooth. A sense of history hangs over the place, but also a sense of recent danger. The wind whips around the hill, cold and biting.",
        exits: { 'west': 'bombadil_house', 'east': 'weathertop_summit', 'northwest': 'tuckborough', 'north': 'tookbank', 'south': 'rivendell_forge', 'southeast': 'hollin_gate' },
        items: [],
        enemies: []
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "You stand within the ring of stones that marks the summit of Weathertop. The view is commanding, stretching for leagues in every direction across Eriador. In the center of the ring, the stones are blackened and cracked by fire. This was once a great watchtower of Arnor, holding a Palantír, but now it is a ruin, haunted by the memory of the Witch-king's attack on the Ringbearer.",
        exits: { 'west': 'weathertop_approach', 'east': 'chetwood', 'northwest': 'tookbank', 'northeast': 'waymeet', 'southeast': 'mirror_chamber', 'southwest': 'rivendell_forge' },
        items: ['watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith']
    },

    // ERIADOR EXPANSION - Bree-land

    combe: {
        name: "Combe",
        description: "A small, secluded village tucked into a deep valley northeast of Bree. The inhabitants here are a mix of Men and Hobbits, though they tend to be more rustic and suspicious of strangers than the Bree-folk. Woodsmoke hangs low in the valley, and the inn offers a decent, if simple, meal. It feels removed from the bustle of the Great Road.",
        exits: { 'east': 'barrow_chamber_3', 'south': 'archet' },
        items: ['combe_ale'],
        enemies: []
    },

    archet: {
        name: "Archet",
        description: "Hidden deep within the gloom of the Chetwood, Archet is a tiny settlement of woodcutters and foresters. The houses are built of rough logs, and the forest presses close on all sides. It is a shadowy place, even at noon, and the villagers largely keep to themselves. They know the secrets of the woods better than anyone.",
        exits: { 'north': 'combe', 'south': 'staddle', 'southwest': 'mayor_office' },
        items: ['wooden_whistle'],
        enemies: []
    },

    chetwood: {
        name: "The Chetwood",
        description: "A dense, ancient forest that lies to the east of Bree. While not as malevolent as the Old Forest, the Chetwood is still a wild and easy place to get lost in. The trees are mostly oak and ash, and the undergrowth is thick. Bandits and outlaws are known to sometimes hide here, preying on unwary travelers.",
        exits: { 'west': 'weathertop_summit', 'northeast': 'bree_gate', 'south': 'mirror_chamber' },
        items: ['forest_berry'],
        enemies: ['brigand']
    },

    staddle: {
        name: "Staddle",
        description: "Located on the gentler slopes of the Bree-hill, Staddle is primarily a hobbit village. It is known for its agriculture, with pipe-weed patches and vegetable gardens surrounding the smials. The community is tight-knit and hardworking, supplying much of the food for Bree. The atmosphere is peaceful and domestic.",
        exits: { 'north': 'archet', 'south': 'fornost_approach', 'southwest': 'barad_dur_throne_room' },
        items: ['grain_sack', 'farm_tool'],
        enemies: []
    },

    // FORNOST - Ruined City of Arnor

    fornost_approach: {
        name: "Approach to Fornost",
        description: "The road leads toward the ruins of Fornost Erain, the ancient capital of the North Kingdom of Arnor. As you travel along the path, the landscape begins to change—the cheerful green of the Shire gives way to rougher, wilder terrain. The road itself is still well-maintained, but there's a sense of age and abandonment that grows stronger with each step. In the distance, you can see the ruins of the great city rising on a hill, their broken walls and towers silhouetted against the sky like the bones of some great beast. Fornost was once a magnificent city, the seat of the Kings of Arnor, but it was destroyed long ago by the Witch-king of Angmar in a war that shattered the North Kingdom. Now, the city lies in ruins, its stones weathered by centuries of wind and rain, its streets overgrown with grass and wildflowers. The air here carries a sense of loss and memory, as if the very ground remembers the glory that once was. You can see the remains of great buildings, broken walls, and the occasional intact structure that hints at the city's former grandeur. This is a place of history and tragedy, where the past weighs heavily on the present.",
        exits: { 'north': 'staddle', 'south': 'fornost_gates', 'southeast': 'minas_morgul_gates' },
        items: [],
        enemies: []
    },

    fornost_gates: {
        name: "Fornost Gates",
        description: "The great gates of Fornost stand before you, or rather, what remains of them. Once magnificent portals that welcomed travelers to the capital of the North Kingdom, they now hang broken and askew, their massive wooden panels splintered and weathered by centuries of exposure. The iron bands that once reinforced them are rusted and broken, and the great hinges that held them in place are twisted and bent. Beyond the gates lies the ruined city, its streets and buildings visible through the gaping opening. The ruins stretch out before you like a testament to the fall of the North Kingdom, a reminder that even the greatest of civilizations can be brought low. The stones of the gatehouse are covered in moss and lichen, and you can see where ancient carvings have been worn away by time. The air here is heavy with the weight of history, and you can't help but feel a sense of loss and melancholy. This was once a place of power and glory, but now it stands as a monument to defeat and the passage of time. The silence is broken only by the wind whistling through the broken gates and the occasional sound of something moving in the ruins beyond.",
        exits: { 'north': 'fornost_approach', 'east': 'fornost_ruins', 'southwest': 'sackville_manor' },
        items: ['ancient_key'],
        enemies: ['orc_scout']
    },

    fornost_ruins: {
        name: "Fornost Ruins",
        description: "You walk amongst the rubble of a lost kingdom. The streets are choked with weeds and piles of fallen masonry. Everywhere you look, you see the remnants of grandeur—a shattered column, a broken statue, a mosaic floor half-hidden by dirt. But the silence is heavy and unnatural. Shadows seem to flit between the ruins, and you feel the weight of unseen eyes watching your every move.",
        exits: { 'west': 'fornost_gates', 'northeast': 'fornost_temple', 'up': 'erebor_gates' },
        items: ['ancient_coin', 'ruined_artifact'],
        enemies: ['orc_warrior', 'warg']
    },

    fornost_temple: {
        name: "Fornost Temple",
        description: "The remains of a great temple stand open to the sky, its dome long since collapsed. The altar is cracked, and vines crawl over the statues of the Valar that once lined the walls. It is a desolate place, where the sanctity of the past has been violated by time and decay. Yet, a faint aura of power still lingers, a whisper of the reverence this place once commanded.",
        exits: { 'southwest': 'fornost_ruins', 'east': 'fornost_palace', 'west': 'royal_armory' },
        items: ['temple_relic', 'ancient_scroll'],
        enemies: ['barrow_wight']
    },

    fornost_palace: {
        name: "Fornost Palace",
        description: "The shell of the royal palace stands as a hollow reminder of the Kings of Arnor. The great hall is roofless, its floor a mosaic of broken tiles. Throne and tapestry have rotted away, leaving only bare stone walls that echo with the wind. It is a place of melancholy beauty, a gravestone for a kingdom.",
        exits: { 'west': 'fornost_temple', 'east': 'fornost_keep', 'southeast': 'iron_mines_2' },
        items: ['royal_seal', 'palace_treasure'],
        enemies: ['ringwraith']
    },

    fornost_keep: {
        name: "Fornost Keep",
        description: "The keep is the most intact structure in the city, a high tower that offers a strategic view of the surrounding lands. The stairs are treacherous, and parts of the battlements have crumbled away. From here, you can see the full extent of the devastation—the city spread out like a broken corpse below. It is a lonely and desolate vigil.",
        exits: { 'west': 'fornost_palace', 'north': 'annuminas_approach', 'south': 'iron_mines_2', 'east': 'the_unending_stair_middle' },
        items: ['keep_banner', 'ancient_map'],
        enemies: ['orc_warrior']
    },

    // ANNÚMINAS - Ancient Capital

    annuminas_approach: {
        name: "Approach to Annúminas",
        description: "The road leads to the ruins of Annúminas, the first capital of Arnor. The city lies on the shores of Lake Evendim, now mostly underwater.",
        exits: { 'south': 'fornost_keep', 'north': 'annuminas_ruins', 'southwest': 'singing_groves' },
        items: [],
        enemies: []
    },

    annuminas_ruins: {
        name: "Annúminas Ruins",
        description: "The ruins of Annúminas, the first capital of Arnor, rise from the waters of Lake Evendim like the bones of a drowned city. The ancient capital is now mostly submerged, its streets and lower buildings lost beneath the dark, still waters of the lake. Only the highest structures remain above water—towers, spires, and the upper floors of great buildings that once housed the kings and lords of the North Kingdom. The stone is weathered and covered in moss, and the architecture speaks of a time when elven and human craftsmanship reached their peak. The lake reflects the ruins eerily, creating a mirror image that seems to extend the city into the depths below. The water is dark and still, its surface broken only by the occasional ripple or the movement of some unseen creature. The air is heavy with moisture and carries the scent of water, stone, and something else—something ancient and sorrowful. This is a place of great beauty and great sadness, where the glory of the past is preserved in ruin, a monument to what was and what might have been. The silence here is profound, broken only by the sound of water lapping against stone and the distant cry of waterfowl.",
        exits: { 'south': 'annuminas_approach', 'north': 'annuminas_tower', 'east': 'goblin_watchtower', 'west': 'khazad_dum_chasm_view', 'northeast': 'deep_coomb' },
        items: ['ancient_artifact'],
        enemies: ['water_wraith']
    },

    annuminas_tower: {
        name: "Annúminas Tower",
        description: "A solitude tower of white stone rises from the water, the last intact remnant of the city's upper citadel. From its balcony, you gaze out across the expanse of Lake Evendim. The water is a deep, tranquil blue, and the ruins below shimmer like a sunken dream. It is a place of peace and contemplation, far from the troubles of the world.",
        exits: { 'south': 'annuminas_ruins', 'north': 'lake_evendim', 'northeast': 'minas_tirith_houses_of_healing', 'southwest': 'nameless_tunnels', 'west': 'henneth_annun' },
        items: ['tower_crystal', 'ancient_compass'],
        enemies: []
    },

    lake_evendim: {
        name: "Lake Evendim",
        description: "You are on the shores of Nenuial, the Lake of Twilight. The water is crystal clear and cool. The ruins of Annúminas visible beneath the surface give the lake a haunted, magical quality. It is said that the Lady of the Lake sometimes appears here, and that the water has healing properties. The silence is profound.",
        exits: { 'south': 'annuminas_tower', 'west': 'hall_of_fire_guest', 'southeast': 'deep_coomb' },
        items: ['lake_pearl', 'enchanted_water'],
        enemies: ['water_wraith']
    }
};

// Total: 60 new rooms in this batch
// Next batches will cover: Rivendell expansion, Moria expansion, Lothlórien expansion, etc.

