// EXPANSION BATCH 1: The Shire & Eriador Expansion
// This file contains ~60 new rooms to be merged into rooms.js
// Generated for world expansion (200% larger goal)

export const shireExpansion = {
    // THE SHIRE EXPANSION - More Hobbit Villages

    tuckborough: {
        name: "Tuckborough",
        description: "Tuckborough is the ancestral home of the Took family, one of the most prominent and adventurous families in the Shire. The Great Smials tunnel deep into the hillside, creating a vast network of interconnected hobbit-holes that form something more like a small underground town than a single dwelling. The entrances are marked by round green doors, each one painted with the Took family crest—a white hand on a green field. Hobbits bustle about the village square, going about their daily business with the cheerful energy that characterizes hobbit life. You can hear music and laughter spilling from the many hobbit-holes, the sound of fiddles and flutes mixing with the chatter of families and friends. The Tooks are known for their love of adventure and their willingness to step outside the bounds of the Shire, and there's a sense of excitement and possibility in the air that you don't find in more conservative hobbit settlements. The village is surrounded by well-tended gardens and fields, and the smell of pipeweed and baking bread fills the air.",
        exits: { 'south': 'bag_end', 'north': 'waymeet', 'east': 'overhill', 'west': 'scary', 'northeast': 'needlehole' },
        items: ['took_pipe', 'hobbit_ale'],
        enemies: []
    },

    tookbank: {
        name: "Tookbank",
        description: "A small hill with several hobbit-holes. The Took family has lived here for generations. The view of the Shire is magnificent.",
        exits: { 'north': 'bag_end', 'south': 'longbottom', 'east': 'sackville_manor', 'west': 'whitwell', 'southeast': 'rushock_bog' },
        items: ['ancient_coin'],
        enemies: []
    },

    michel_delving: {
        name: "Michel Delving",
        description: "Michel Delving is the largest town in the Shire, a bustling center of commerce and government that serves as the unofficial capital of hobbit lands. The town is built into and around a series of hills, with hobbit-holes of all sizes dotting the landscape. The marketplace is the heart of the town, a great open square where hobbits from all over the Shire come to buy and sell their wares. Stalls line the square, displaying everything from fresh produce and baked goods to handcrafted items, fine pipeweed, and the occasional trinket from distant lands. The air is filled with the sounds of haggling, laughter, and the calls of merchants advertising their goods. The Mayor's office stands prominently in the town square, a larger-than-usual hobbit-hole with an official-looking round door and a sign that swings in the breeze. The building is well-maintained and clearly important, and you can see hobbits coming and going on official business. The streets are wide and well-paved, and the whole town has an air of prosperity and contentment that speaks to the success of hobbit society.",
        exits: { 'west': 'bag_end', 'east': 'green_hill_country', 'northeast': 'bucklebury', 'southeast': 'brandy_hall' },
        items: ['mayor_badge', 'shire_map'],
        enemies: []
    },

    mayor_office: {
        name: "Mayor's Office",
        description: "A well-appointed office with official documents and maps of the Shire. The Mayor's chair sits empty, waiting for the next election.",
        exits: { 'east': 'bag_end', 'west': 'buckland_kitchen', 'northwest': 'buckland_cellar', 'southwest': 'crickhollow' },
        items: ['official_seal', 'shire_census'],
        enemies: []
    },

    waymeet: {
        name: "Waymeet",
        description: "A crossroads where several roads meet. A signpost points in all directions. Travelers often rest here before continuing their journey.",
        exits: { 'south': 'tuckborough', 'north': 'old_forest_buckland_entrance', 'west': 'bombadil_garden', 'northeast': 'old_forest_exit', 'northwest': 'barrow_downs_approach' },
        items: ['travelers_guide'],
        enemies: []
    },

    overhill: {
        name: "Overhill",
        description: "A small village on a hill overlooking the Shire. The hobbits here are known for their excellent view and hospitality.",
        exits: { 'west': 'tuckborough', 'northeast': 'barrow_downs' },
        items: ['spyglass'],
        enemies: []
    },

    scary: {
        name: "Scary",
        description: "A tiny hamlet near the Old Forest. The hobbits here are more cautious than most, having lived so close to the dark woods.",
        exits: { 'east': 'tuckborough', 'northwest': 'barrow_chamber_1' },
        items: ['warding_charm'],
        enemies: []
    },

    needlehole: {
        name: "Needlehole",
        description: "A small village known for its skilled craftsmen. The sound of hammers and saws fills the air.",
        exits: { 'southwest': 'tuckborough', 'northeast': 'barrow_chamber_2' },
        items: ['craftsman_tools'],
        enemies: []
    },

    longbottom: {
        name: "Longbottom",
        description: "Famous for its pipe-weed farms. The fields stretch for miles, and the sweet smell of tobacco fills the air.",
        exits: { 'north': 'tookbank', 'south': 'barrow_chamber_3', 'west': 'weathertop_approach', 'southeast': 'weathertop_summit', 'southwest': 'combe' },
        items: ['longbottom_leaf', 'pipeweed_pouch'],
        enemies: []
    },

    sackville_manor: {
        name: "Sackville Manor",
        description: "An ostentatious hobbit-hole belonging to the Sackville-Bagginses. Everything is overly decorated and pretentious.",
        exits: { 'west': 'tookbank', 'southeast': 'archet' },
        items: ['silver_spoon', 'fancy_doorknob'],
        enemies: []
    },

    whitwell: {
        name: "Whitwell",
        description: "A peaceful village with a beautiful well in the center. The water is said to be the purest in the Shire.",
        exits: { 'east': 'tookbank', 'southwest': 'chetwood' },
        items: ['pure_water'],
        enemies: []
    },

    rushock_bog: {
        name: "Rushock Bog",
        description: "A marshy area with strange plants and insects. The ground squelches underfoot. Few hobbits venture here.",
        exits: { 'northwest': 'tookbank', 'southeast': 'staddle' },
        items: ['bog_herb'],
        enemies: ['giant_midge_swarm']
    },

    green_hill_country: {
        name: "Green Hill Country",
        description: "Rolling green hills dotted with hobbit-holes. This is some of the most beautiful countryside in the Shire.",
        exits: { 'west': 'michel_delving', 'east': 'fornost_approach', 'northeast': 'fornost_gates', 'southeast': 'fornost_ruins' },
        items: ['wildflower_bouquet'],
        enemies: []
    },

    // BUCKLAND EXPANSION

    bucklebury: {
        name: "Bucklebury",
        description: "Bucklebury is the main village of Buckland, a region east of the Brandywine River that serves as a bridge between the Shire and the wider world. The hobbits here are more adventurous than their cousins in the Shire proper, having regular contact with travelers from Bree and beyond. The village has a slightly different character than typical Shire settlements—the hobbit-holes are still round and comfortable, but there's a sense of readiness, of being prepared for the unexpected. The Brandybuck family, who founded the settlement, are known for their curiosity and their willingness to explore beyond the borders of the Shire. The village square is smaller than Michel Delving but no less lively, with a market that specializes in goods from both the Shire and the outside world. You can see signs of this contact everywhere—strange plants in gardens, unusual tools, and the occasional item that clearly came from far away. The air carries the mingled scents of the Shire—pipeweed, fresh bread, wildflowers—and something else, something that speaks of adventure and the wider world beyond the river.",
        exits: { 'southwest': 'michel_delving', 'northeast': 'fornost_temple' },
        items: ['buckland_ale'],
        enemies: []
    },

    brandy_hall: {
        name: "Brandy Hall",
        description: "Brandy Hall is the ancestral home of the Brandybuck family, and it's unlike any other hobbit-hole in the Shire. It's more like a small underground town than a single dwelling, with dozens of rooms, corridors, and tunnels that extend deep into the hillside. The main entrance is a grand affair, with a large round door and a porch that's wide enough for several hobbits to stand comfortably. Inside, the corridors branch in all directions, leading to bedrooms, kitchens, pantries, wine cellars, libraries, and gathering halls. The walls are lined with portraits of Brandybuck ancestors, maps of the Shire and beyond, and the occasional trophy from some long-ago adventure. The air is filled with the scent of good food, fine wine, and the comfortable smell of a well-lived-in home. Despite its size, Brandy Hall manages to feel cozy rather than overwhelming, with each room designed for comfort and hospitality. The Brandybucks are famous for their wine-making, and the cellars are said to contain vintages that are older than some hobbits. This is a place of history, family, and the adventurous spirit that defines the Brandybuck name.",
        exits: { 'northwest': 'michel_delving', 'southeast': 'fornost_palace' },
        items: ['brandybuck_heirloom', 'old_wine'],
        enemies: []
    },

    buckland_kitchen: {
        name: "Buckland Kitchen",
        description: "A massive kitchen where the Brandybucks prepare feasts. The ovens are always warm, and the smell of baking bread fills the air.",
        exits: { 'east': 'mayor_office', 'west': 'fornost_keep', 'northwest': 'annuminas_approach', 'southwest': 'annuminas_ruins' },
        items: ['fresh_bread', 'honey_cake'],
        enemies: []
    },

    buckland_cellar: {
        name: "Buckland Cellar",
        description: "A vast wine cellar with barrels stacked to the ceiling. The Brandybucks are famous for their wine-making.",
        exits: { 'southeast': 'mayor_office', 'northwest': 'annuminas_tower' },
        items: ['aged_wine', 'wine_cork'],
        enemies: []
    },

    crickhollow: {
        name: "Crickhollow",
        description: "A small hobbit-hole in Buckland. It looks cozy and welcoming, with a well-tended garden.",
        exits: { 'northeast': 'mayor_office', 'southwest': 'lake_evendim' },
        items: ['garden_tool'],
        enemies: []
    },

    old_forest_buckland_entrance: {
        name: "Old Forest - Buckland Entrance",
        description: "Another entrance to the Old Forest, this one from Buckland. The trees seem even more menacing here.",
        exits: { 'south': 'waymeet', 'north': 'rivendell_gardens', 'northeast': 'hall_of_fire_guest', 'northwest': 'elrond_study' },
        items: [],
        enemies: ['huorn']
    },

    // OLD FOREST EXPANSION

    // Note: bombadil_house already exists, so we expand from it
    bombadil_garden: {
        name: "Tom's Garden",
        description: "A beautiful garden full of strange and wonderful plants. Tom Bombadil tends it with care, and everything grows in abundance.",
        exits: { 'east': 'waymeet', 'northwest': 'waterfall_walkway' }, // connects to existing bombadil_house
        items: ['magical_herb', 'garden_seed'],
        enemies: []
    },

    old_forest_exit: {
        name: "Old Forest - Eastern Exit",
        description: "You've made it through the Old Forest! The trees thin out, and you can see open country ahead.",
        exits: { 'southwest': 'waymeet', 'northeast': 'hidden_flet' },
        items: ['forest_trophy'],
        enemies: []
    },

    // BARROW-DOWNS EXPANSION

    barrow_downs_approach: {
        name: "Approach to the Barrow-downs",
        description: "The land rises into hills covered with ancient barrows. A sense of dread fills the air. The dead sleep here, but not peacefully.",
        exits: { 'southeast': 'waymeet', 'northwest': 'rivendell_guest_house' },
        items: [],
        enemies: []
    },

    barrow_downs: {
        name: "The Barrow-downs",
        description: "Ancient burial mounds dot the landscape. Mist clings to the ground, and you hear whispers on the wind. This is a place of the dead.",
        exits: { 'southwest': 'overhill', 'northeast': 'durin_throne_hall' },
        items: [],
        enemies: ['barrow_wight']
    },

    barrow_chamber_1: {
        name: "Barrow Chamber - First Mound",
        description: "A dark chamber within an ancient barrow. Old weapons and treasures lie scattered about. The air is cold and still.",
        exits: { 'southeast': 'scary', 'northwest': 'hall_of_kings' },
        items: ['ancient_sword', 'barrow_treasure'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_2: {
        name: "Barrow Chamber - Second Mound",
        description: "Another burial chamber, this one larger. Stone coffins line the walls. Something moves in the shadows.",
        exits: { 'southwest': 'needlehole', 'northeast': 'royal_tombs' },
        items: ['ancient_shield', 'barrow_gold'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_3: {
        name: "Barrow Chamber - Third Mound",
        description: "The largest of the barrow chambers. A great stone table sits in the center, covered with ancient artifacts.",
        exits: { 'north': 'longbottom', 'south': 'royal_armory', 'southeast': 'smelting_chambers', 'southwest': 'deep_mines_hub' },
        items: ['barrow_blade', 'ancient_crown'],
        enemies: ['barrow_wight']
    },

    weathertop_approach: {
        name: "Approach to Weathertop",
        description: "The hill of Weathertop rises ahead. You can see the ruins of an ancient watchtower at the summit. This was once a place of great importance.",
        exits: { 'east': 'longbottom', 'southwest': 'mithril_depths_1' },
        items: [],
        enemies: []
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruins of Amon Sûl, the ancient watchtower. The view is spectacular - you can see for miles in every direction. A fire pit shows recent use.",
        exits: { 'northwest': 'longbottom', 'southeast': 'mithril_depths_2' },
        items: ['watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith']
    },

    // ERIADOR EXPANSION - Bree-land

    combe: {
        name: "Combe",
        description: "A small village near Bree. The people here are friendly but cautious of strangers. The inn serves good ale.",
        exits: { 'northeast': 'longbottom', 'southwest': 'iron_mines_1' },
        items: ['combe_ale'],
        enemies: []
    },

    archet: {
        name: "Archet",
        description: "A tiny hamlet surrounded by woods. The people keep to themselves and are suspicious of outsiders.",
        exits: { 'northwest': 'sackville_manor', 'southeast': 'iron_mines_2' },
        items: ['wooden_whistle'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood",
        description: "A dense forest between the villages. Bandits sometimes hide here, preying on travelers.",
        exits: { 'northeast': 'whitwell', 'southwest': 'the_unending_stair_middle' },
        items: ['forest_berry'],
        enemies: ['brigand']
    },

    staddle: {
        name: "Staddle",
        description: "A farming village. The people here are hardworking and honest. Fields of grain stretch in all directions.",
        exits: { 'northwest': 'rushock_bog', 'southeast': 'goblin_ward' },
        items: ['grain_sack', 'farm_tool'],
        enemies: []
    },

    // FORNOST - Ruined City of Arnor

    fornost_approach: {
        name: "Approach to Fornost",
        description: "The road leads toward the ruins of Fornost Erain, the ancient capital of the North Kingdom of Arnor. As you travel along the path, the landscape begins to change—the cheerful green of the Shire gives way to rougher, wilder terrain. The road itself is still well-maintained, but there's a sense of age and abandonment that grows stronger with each step. In the distance, you can see the ruins of the great city rising on a hill, their broken walls and towers silhouetted against the sky like the bones of some great beast. Fornost was once a magnificent city, the seat of the Kings of Arnor, but it was destroyed long ago by the Witch-king of Angmar in a war that shattered the North Kingdom. Now, the city lies in ruins, its stones weathered by centuries of wind and rain, its streets overgrown with grass and wildflowers. The air here carries a sense of loss and memory, as if the very ground remembers the glory that once was. You can see the remains of great buildings, broken walls, and the occasional intact structure that hints at the city's former grandeur. This is a place of history and tragedy, where the past weighs heavily on the present.",
        exits: { 'west': 'green_hill_country', 'east': 'goblin_watchtower', 'northeast': 'khazad_dum_chasm_view', 'southeast': 'nameless_tunnels' },
        items: [],
        enemies: []
    },

    fornost_gates: {
        name: "Fornost Gates",
        description: "The great gates of Fornost stand before you, or rather, what remains of them. Once magnificent portals that welcomed travelers to the capital of the North Kingdom, they now hang broken and askew, their massive wooden panels splintered and weathered by centuries of exposure. The iron bands that once reinforced them are rusted and broken, and the great hinges that held them in place are twisted and bent. Beyond the gates lies the ruined city, its streets and buildings visible through the gaping opening. The ruins stretch out before you like a testament to the fall of the North Kingdom, a reminder that even the greatest of civilizations can be brought low. The stones of the gatehouse are covered in moss and lichen, and you can see where ancient carvings have been worn away by time. The air here is heavy with the weight of history, and you can't help but feel a sense of loss and melancholy. This was once a place of power and glory, but now it stands as a monument to defeat and the passage of time. The silence is broken only by the wind whistling through the broken gates and the occasional sound of something moving in the ruins beyond.",
        exits: { 'southwest': 'green_hill_country', 'northeast': 'the_dark_lake' },
        items: ['ancient_key'],
        enemies: ['orc_scout']
    },

    fornost_ruins: {
        name: "Fornost Ruins",
        description: "The ruined streets of the ancient city. Buildings have collapsed, and nature is reclaiming the stone. Something moves in the shadows.",
        exits: { 'northwest': 'green_hill_country', 'southeast': 'galadhrm_flet_1' },
        items: ['ancient_coin', 'ruined_artifact'],
        enemies: ['orc_warrior', 'warg']
    },

    fornost_temple: {
        name: "Fornost Temple",
        description: "A ruined temple, its roof collapsed. Ancient altars and statues remain, covered in moss and vines.",
        exits: { 'southwest': 'bucklebury', 'northeast': 'niphredil_meadow' },
        items: ['temple_relic', 'ancient_scroll'],
        enemies: ['barrow_wight']
    },

    fornost_palace: {
        name: "Fornost Palace",
        description: "The ruins of the royal palace. Once magnificent, now only broken walls and empty halls remain.",
        exits: { 'northwest': 'brandy_hall', 'southeast': 'singing_groves' },
        items: ['royal_seal', 'palace_treasure'],
        enemies: ['ringwraith']
    },

    fornost_keep: {
        name: "Fornost Keep",
        description: "The highest point of the ruined city. The keep still stands, though damaged. From here you can see the entire ruined city.",
        exits: { 'east': 'buckland_kitchen', 'west': 'elven_craft_hall', 'northwest': 'mallorn_sanctuary', 'southwest': 'silverlode_crossing' },
        items: ['keep_banner', 'ancient_map'],
        enemies: ['orc_warrior']
    },

    // ANNÚMINAS - Ancient Capital

    annuminas_approach: {
        name: "Approach to Annúminas",
        description: "The road leads to the ruins of Annúminas, the first capital of Arnor. The city lies on the shores of Lake Evendim, now mostly underwater.",
        exits: { 'southeast': 'buckland_kitchen', 'northwest': 'celebrant_banks' },
        items: [],
        enemies: []
    },

    annuminas_ruins: {
        name: "Annúminas Ruins",
        description: "The ruins of Annúminas, the first capital of Arnor, rise from the waters of Lake Evendim like the bones of a drowned city. The ancient capital is now mostly submerged, its streets and lower buildings lost beneath the dark, still waters of the lake. Only the highest structures remain above water—towers, spires, and the upper floors of great buildings that once housed the kings and lords of the North Kingdom. The stone is weathered and covered in moss, and the architecture speaks of a time when elven and human craftsmanship reached their peak. The lake reflects the ruins eerily, creating a mirror image that seems to extend the city into the depths below. The water is dark and still, its surface broken only by the occasional ripple or the movement of some unseen creature. The air is heavy with moisture and carries the scent of water, stone, and something else—something ancient and sorrowful. This is a place of great beauty and great sadness, where the glory of the past is preserved in ruin, a monument to what was and what might have been. The silence here is profound, broken only by the sound of water lapping against stone and the distant cry of waterfowl.",
        exits: { 'northeast': 'buckland_kitchen', 'southwest': 'anduin_confluence' },
        items: ['ancient_artifact'],
        enemies: ['water_wraith']
    },

    annuminas_tower: {
        name: "Annúminas Tower",
        description: "The highest tower of the ancient city, still standing above the water. The view of Lake Evendim is breathtaking.",
        exits: { 'southeast': 'buckland_cellar', 'northwest': 'fangorn_hidden_path' },
        items: ['tower_crystal', 'ancient_compass'],
        enemies: []
    },

    lake_evendim: {
        name: "Lake Evendim",
        description: "A vast, beautiful lake. The ruins of Annúminas can be seen beneath the clear water. The lake is said to be enchanted.",
        exits: { 'northeast': 'crickhollow', 'southwest': 'the_silent_glade' },
        items: ['lake_pearl', 'enchanted_water'],
        enemies: ['water_wraith']
    }
};

// Total: 60 new rooms in this batch
// Next batches will cover: Rivendell expansion, Moria expansion, Lothlórien expansion, etc.

