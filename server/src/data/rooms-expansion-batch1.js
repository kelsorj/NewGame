// EXPANSION BATCH 1: The Shire & Eriador Expansion
// This file contains ~60 new rooms to be merged into rooms.js
// Generated for world expansion (200% larger goal)

export const shireExpansion = {
    // THE SHIRE EXPANSION - More Hobbit Villages

    tuckborough: {
        name: "Tuckborough",
        description: "The ancestral home of the Took family. The Great Smials tunnel deep into the hillside. Hobbits bustle about, and you can hear music and laughter from the many hobbit-holes.",
        exits: { north: 'tookbank', south: 'green_hill_country', southeast: 'scary', southwest: 'bywater' },
        items: ['took_pipe', 'hobbit_ale'],
        enemies: []
    },

    tookbank: {
        name: "Tookbank",
        description: "A small hill with several hobbit-holes. The Took family has lived here for generations. The view of the Shire is magnificent.",
        exits: { south: 'tuckborough' },
        items: ['ancient_coin'],
        enemies: []
    },

    michel_delving: {
        name: "Michel Delving",
        description: "The largest town in the Shire. The marketplace is bustling with hobbits buying and selling. The Mayor's office stands prominently in the town square.",
        exits: { north: 'green_hill_country', south: 'marish', east: 'brandywine_bridge', west: 'mayor_office', northeast: 'scary', northwest: 'bywater', southeast: 'old_forest_entrance' },
        items: ['mayor_badge', 'shire_map'],
        enemies: []
    },

    mayor_office: {
        name: "Mayor's Office",
        description: "A well-appointed office with official documents and maps of the Shire. The Mayor's chair sits empty, waiting for the next election.",
        exits: { north: 'bywater', east: 'michel_delving', northeast: 'green_hill_country', southeast: 'marish' },
        items: ['official_seal', 'shire_census'],
        enemies: []
    },

    waymeet: {
        name: "Waymeet",
        description: "A crossroads where several roads meet. A signpost points in all directions. Travelers often rest here before continuing their journey.",
        exits: { north: 'longbottom', east: 'overhill', northeast: 'stock_road', southwest: 'sackville_manor' },
        items: ['travelers_guide'],
        enemies: []
    },

    overhill: {
        name: "Overhill",
        description: "A small village on a hill overlooking the Shire. The hobbits here are known for their excellent view and hospitality.",
        exits: { north: 'stock_road', west: 'waymeet', northeast: 'archet', northwest: 'longbottom', southeast: 'withywindle' },
        items: ['spyglass'],
        enemies: []
    },

    scary: {
        name: "Scary",
        description: "A tiny hamlet near the Old Forest. The hobbits here are more cautious than most, having lived so close to the dark woods.",
        exits: { south: 'brandywine_bridge', east: 'rushock_bog', west: 'green_hill_country', northeast: 'staddle', northwest: 'tuckborough', southeast: 'combe', southwest: 'michel_delving' },
        items: ['warding_charm'],
        enemies: []
    },

    needlehole: {
        name: "Needlehole",
        description: "A small village known for its skilled craftsmen. The sound of hammers and saws fills the air.",
        exits: { north: 'withywindle', northeast: 'bombadil_house' },
        items: ['craftsman_tools'],
        enemies: []
    },

    longbottom: {
        name: "Longbottom",
        description: "Famous for its pipe-weed farms. The fields stretch for miles, and the sweet smell of tobacco fills the air.",
        exits: { south: 'waymeet', east: 'stock_road', southeast: 'overhill' },
        items: ['longbottom_leaf', 'pipeweed_pouch'],
        enemies: []
    },

    sackville_manor: {
        name: "Sackville Manor",
        description: "An ostentatious hobbit-hole belonging to the Sackville-Bagginses. Everything is overly decorated and pretentious.",
        exits: { west: 'bag_end', northeast: 'waymeet', southwest: 'woody_end' },
        items: ['silver_spoon', 'fancy_doorknob'],
        enemies: []
    },

    whitwell: {
        name: "Whitwell",
        description: "A peaceful village with a beautiful well in the center. The water is said to be the purest in the Shire.",
        exits: { southwest: 'havens_approach' },
        items: ['pure_water'],
        enemies: []
    },

    rushock_bog: {
        name: "Rushock Bog",
        description: "A marshy area with strange plants and insects. The ground squelches underfoot. Few hobbits venture here.",
        exits: { north: 'staddle', south: 'combe', east: 'prancing_pony', west: 'scary', southeast: 'bree_square', southwest: 'brandywine_bridge' },
        items: ['bog_herb'],
        enemies: ['giant_midge_swarm']
    },

    green_hill_country: {
        name: "Green Hill Country",
        description: "Rolling green hills dotted with hobbit-holes. This is some of the most beautiful countryside in the Shire.",
        exits: { north: 'tuckborough', south: 'michel_delving', east: 'scary', west: 'bywater', southeast: 'brandywine_bridge', southwest: 'mayor_office' },
        items: ['wildflower_bouquet'],
        enemies: []
    },

    // BUCKLAND EXPANSION

    bucklebury: {
        name: "Bucklebury",
        description: "The main village of Buckland, east of the Brandywine. The hobbits here are more adventurous, having contact with the outside world.",
        exits: { north: 'bree_east_road', east: 'old_forest_exit', west: 'crickhollow', northeast: 'barrow_downs_approach', northwest: 'old_forest_depth', southeast: 'weathertop_summit', southwest: 'bombadil_house' },
        items: ['buckland_ale'],
        enemies: []
    },

    brandy_hall: {
        name: "Brandy Hall",
        description: "The ancestral home of the Brandybuck family. It's more like a small town than a single hobbit-hole, with dozens of rooms and tunnels.",
        exits: { south: 'old_forest_buckland_entrance' },
        items: ['brandybuck_heirloom', 'old_wine'],
        enemies: []
    },

    buckland_kitchen: {
        name: "Buckland Kitchen",
        description: "A massive kitchen where the Brandybucks prepare feasts. The ovens are always warm, and the smell of baking bread fills the air.",
        exits: { north: 'weathertop_summit', east: 'chetwood', west: 'weathertop_base', northeast: 'barrow_chamber_2' },
        items: ['fresh_bread', 'honey_cake'],
        enemies: []
    },

    buckland_cellar: {
        name: "Buckland Cellar",
        description: "A vast wine cellar with barrels stacked to the ceiling. The Brandybucks are famous for their wine-making.",
        exits: { north: 'weatherhills', east: 'barrow_chamber_3', northwest: 'fornost_gates', southwest: 'midgewater_marshes' },
        items: ['aged_wine', 'wine_cork'],
        enemies: []
    },

    crickhollow: {
        name: "Crickhollow",
        description: "A small hobbit-hole in Buckland. It looks cozy and welcoming, with a well-tended garden.",
        exits: { north: 'old_forest_depth', south: 'bombadil_house', east: 'bucklebury', northeast: 'bree_east_road', northwest: 'archet', southwest: 'withywindle' },
        items: ['garden_tool'],
        enemies: []
    },

    old_forest_buckland_entrance: {
        name: "Old Forest - Buckland Entrance",
        description: "Another entrance to the Old Forest, this one from Buckland. The trees seem even more menacing here.",
        exits: { north: 'brandy_hall' },
        items: [],
        enemies: ['huorn']
    },

    // OLD FOREST EXPANSION

    // Note: bombadil_house already exists, so we expand from it
    bombadil_garden: {
        name: "Tom's Garden",
        description: "A beautiful garden full of strange and wonderful plants. Tom Bombadil tends it with care, and everything grows in abundance.",
        exits: { north: 'bree_square', west: 'fornost_approach', northwest: 'combe', southwest: 'barrow_downs_approach' }, // connects to existing bombadil_house
        items: ['magical_herb', 'garden_seed'],
        enemies: []
    },

    old_forest_exit: {
        name: "Old Forest - Eastern Exit",
        description: "You've made it through the Old Forest! The trees thin out, and you can see open country ahead.",
        exits: { north: 'barrow_downs_approach', south: 'weathertop_summit', east: 'last_bridge', west: 'bucklebury', northwest: 'bree_east_road', southeast: 'barrow_chamber_2' },
        items: ['forest_trophy'],
        enemies: []
    },

    // BARROW-DOWNS EXPANSION

    barrow_downs_approach: {
        name: "Approach to the Barrow-downs",
        description: "The land rises into hills covered with ancient barrows. A sense of dread fills the air. The dead sleep here, but not peacefully.",
        exits: { north: 'fornost_approach', south: 'old_forest_exit', west: 'bree_east_road', northeast: 'bombadil_garden', northwest: 'old_forest_entrance', southeast: 'last_bridge', southwest: 'bucklebury' },
        items: [],
        enemies: []
    },

    barrow_downs: {
        name: "The Barrow-downs",
        description: "Ancient burial mounds dot the landscape. Mist clings to the ground, and you hear whispers on the wind. This is a place of the dead.",
        exits: { west: 'chetwood', northeast: 'barrow_chamber_1', northwest: 'barrow_chamber_2' },
        items: [],
        enemies: ['barrow_wight']
    },

    barrow_chamber_1: {
        name: "Barrow Chamber - First Mound",
        description: "A dark chamber within an ancient barrow. Old weapons and treasures lie scattered about. The air is cold and still.",
        exits: { north: 'midgewater_marshes', southwest: 'barrow_downs' },
        items: ['ancient_sword', 'barrow_treasure'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_2: {
        name: "Barrow Chamber - Second Mound",
        description: "Another burial chamber, this one larger. Stone coffins line the walls. Something moves in the shadows.",
        exits: { north: 'last_bridge', south: 'chetwood', west: 'weathertop_summit', northwest: 'old_forest_exit', southeast: 'barrow_downs', southwest: 'buckland_kitchen' },
        items: ['ancient_shield', 'barrow_gold'],
        enemies: ['barrow_wight']
    },

    barrow_chamber_3: {
        name: "Barrow Chamber - Third Mound",
        description: "The largest of the barrow chambers. A great stone table sits in the center, covered with ancient artifacts.",
        exits: { west: 'buckland_cellar', northwest: 'weatherhills' },
        items: ['barrow_blade', 'ancient_crown'],
        enemies: ['barrow_wight']
    },

    weathertop_approach: {
        name: "Approach to Weathertop",
        description: "The hill of Weathertop rises ahead. You can see the ruins of an ancient watchtower at the summit. This was once a place of great importance.",
        exits: {  },
        items: [],
        enemies: []
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruins of Amon Sûl, the ancient watchtower. The view is spectacular - you can see for miles in every direction. A fire pit shows recent use.",
        exits: { north: 'old_forest_exit', south: 'buckland_kitchen', east: 'barrow_chamber_2', northeast: 'last_bridge', northwest: 'bucklebury', southeast: 'chetwood', southwest: 'weathertop_base' },
        items: ['watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith']
    },

    // ERIADOR EXPANSION - Bree-land

    combe: {
        name: "Combe",
        description: "A small village near Bree. The people here are friendly but cautious of strangers. The inn serves good ale.",
        exits: { north: 'rushock_bog', south: 'fornost_approach', east: 'bree_square', west: 'brandywine_bridge', northeast: 'prancing_pony', northwest: 'scary', southeast: 'bombadil_garden', southwest: 'old_forest_entrance' },
        items: ['combe_ale'],
        enemies: []
    },

    archet: {
        name: "Archet",
        description: "A tiny hamlet surrounded by woods. The people keep to themselves and are suspicious of outsiders.",
        exits: { east: 'old_forest_depth', west: 'stock_road', northeast: 'marish', southeast: 'crickhollow', southwest: 'overhill' },
        items: ['wooden_whistle'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood",
        description: "A dense forest between the villages. Bandits sometimes hide here, preying on travelers.",
        exits: { north: 'barrow_chamber_2', east: 'barrow_downs', west: 'buckland_kitchen', northwest: 'weathertop_summit' },
        items: ['forest_berry'],
        enemies: ['brigand']
    },

    staddle: {
        name: "Staddle",
        description: "A farming village. The people here are hardworking and honest. Fields of grain stretch in all directions.",
        exits: { north: 'hobbiton_square', south: 'rushock_bog', northeast: 'green_dragon', southeast: 'prancing_pony', southwest: 'scary' },
        items: ['grain_sack', 'farm_tool'],
        enemies: []
    },

    // FORNOST - Ruined City of Arnor

    fornost_approach: {
        name: "Approach to Fornost",
        description: "The road leads to the ruins of Fornost Erain, the ancient capital of Arnor. The city lies in ruins, destroyed long ago by the Witch-king.",
        exits: { north: 'combe', south: 'barrow_downs_approach', east: 'bombadil_garden', west: 'old_forest_entrance', northeast: 'bree_square', northwest: 'brandywine_bridge', southwest: 'bree_east_road' },
        items: [],
        enemies: []
    },

    fornost_gates: {
        name: "Fornost Gates",
        description: "The great gates of Fornost, now broken and hanging. Beyond lies the ruined city, a testament to the fall of the North Kingdom.",
        exits: { east: 'weatherhills', southeast: 'buckland_cellar' },
        items: ['ancient_key'],
        enemies: ['orc_scout']
    },

    fornost_ruins: {
        name: "Fornost Ruins",
        description: "The ruined streets of the ancient city. Buildings have collapsed, and nature is reclaiming the stone. Something moves in the shadows.",
        exits: { north: 'fornost_palace' },
        items: ['ancient_coin', 'ruined_artifact'],
        enemies: ['orc_warrior', 'warg']
    },

    fornost_temple: {
        name: "Fornost Temple",
        description: "A ruined temple, its roof collapsed. Ancient altars and statues remain, covered in moss and vines.",
        exits: { north: 'troll_cave', northeast: 'trollshaws' },
        items: ['temple_relic', 'ancient_scroll'],
        enemies: ['barrow_wight']
    },

    fornost_palace: {
        name: "Fornost Palace",
        description: "The ruins of the royal palace. Once magnificent, now only broken walls and empty halls remain.",
        exits: { south: 'fornost_ruins' },
        items: ['royal_seal', 'palace_treasure'],
        enemies: ['ringwraith']
    },

    fornost_keep: {
        name: "Fornost Keep",
        description: "The highest point of the ruined city. The keep still stands, though damaged. From here you can see the entire ruined city.",
        exits: {  },
        items: ['keep_banner', 'ancient_map'],
        enemies: ['orc_warrior']
    },

    // ANNÚMINAS - Ancient Capital

    annuminas_approach: {
        name: "Approach to Annúminas",
        description: "The road leads to the ruins of Annúminas, the first capital of Arnor. The city lies on the shores of Lake Evendim, now mostly underwater.",
        exits: { south: 'annuminas_ruins', southeast: 'annuminas_tower' },
        items: [],
        enemies: []
    },

    annuminas_ruins: {
        name: "Annúminas Ruins",
        description: "The ancient capital, now mostly submerged. Only the highest buildings remain above water. The lake reflects the ruins eerily.",
        exits: { north: 'annuminas_approach', south: 'ford_of_bruinen', east: 'annuminas_tower', southeast: 'rivendell_gates', southwest: 'trollshaws' },
        items: ['ancient_artifact'],
        enemies: ['water_wraith']
    },

    annuminas_tower: {
        name: "Annúminas Tower",
        description: "The highest tower of the ancient city, still standing above the water. The view of Lake Evendim is breathtaking.",
        exits: { south: 'rivendell_gates', west: 'annuminas_ruins', northwest: 'annuminas_approach', southwest: 'ford_of_bruinen' },
        items: ['tower_crystal', 'ancient_compass'],
        enemies: []
    },

    lake_evendim: {
        name: "Lake Evendim",
        description: "A vast, beautiful lake. The ruins of Annúminas can be seen beneath the clear water. The lake is said to be enchanted.",
        exits: {  },
        items: ['lake_pearl', 'enchanted_water'],
        enemies: ['water_wraith']
    }
};

// Total: 60 new rooms in this batch
// Next batches will cover: Rivendell expansion, Moria expansion, Lothlórien expansion, etc.

