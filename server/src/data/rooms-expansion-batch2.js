// EXPANSION BATCH 2: Rivendell & Moria
// This file contains ~40 new rooms to be merged into rooms.js

export const moriaRivendellExpansion = {
    // RIVENDELL EXPANSION - The Last Homely House

    rivendell_gardens: {
        name: "Gardens of Rivendell",
        description: "The Gardens of Rivendell are a peaceful sanctuary where rare flowers from across Middle-earth bloom in perfect harmony. The gardens are laid out with elven artistry, each plant placed to create a living tapestry of color, scent, and form. Flowers that grow nowhere else in Middle-earth flourish here—elanor with its golden petals, niphredil with its pale white blooms, and many others whose names are known only to the elves. The sound of many waterfalls creates a constant, soothing harmony, their waters cascading down from the mountains and flowing through the gardens in carefully designed channels. Stone benches, carved with intricate elven designs, are placed under ancient trees whose branches form natural canopies. The air is filled with the mingled scents of flowers, fresh water, and the subtle magic that permeates all of Rivendell. Butterflies and birds move through the gardens, adding their own music to the symphony of nature. This is a place where time seems to stand still, where the cares of the world fade away, and where one can find peace and renewal simply by being present.",
        exits: { 'south': 'old_forest_buckland_entrance', 'north': 'entmoot_circle', 'northeast': 'entwash_headwaters', 'northwest': 'treebeard_cellar' },
        items: ['elanor_flower', 'silver_leaf'],
        enemies: []
    },

    hall_of_fire_guest: {
        name: "The Hall of Fire",
        description: "A great hall where a fire is always burning. On either side of the hearth are pillows and carpets where elves sit and listen to songs and tales. The atmosphere is one of profound peace.",
        exits: { 'southwest': 'old_forest_buckland_entrance', 'northeast': 'skinbark_grove' },
        items: ['harp', 'ancient_scroll'],
        enemies: []
    },

    elrond_study: {
        name: "Elrond's Private Study",
        description: "A circular room filled with ancient maps and star-charts. Elrond Half-elven spends much of his time here, contemplating the fate of Middle Earth.",
        exits: { 'southeast': 'old_forest_buckland_entrance', 'northwest': 'leaflock_meadow' },
        items: ['vilya_reflection', 'ancient_map'],
        enemies: []
    },

    waterfall_walkway: {
        name: "Waterfall Walkway",
        description: "A narrow bridge of stone that hangs over a spectacular waterfall. The mist rises to dampen your face, and the roar of the water is deafening but beautiful.",
        exits: { 'southeast': 'bombadil_garden', 'northwest': 'westfold_plains' },
        items: ['crystalline_water'],
        enemies: []
    },

    hidden_flet: {
        name: "Hidden Flet",
        description: "A platform built high in the branches of a massive pine tree. From here, you can see the entire valley of Imladris stretching out below.",
        exits: { 'southwest': 'old_forest_exit', 'northeast': 'eastfold_plains' },
        items: ['elven_spyglass'],
        enemies: []
    },

    rivendell_guest_house: {
        name: "The Guest House",
        description: "A comfortable lodging for travelers of all races. The beds are soft and the air is filled with the scent of pine and lavender.",
        exits: { 'southeast': 'barrow_downs_approach', 'northwest': 'entwash_delta' },
        items: ['fresh_linen', 'healing_salve'],
        enemies: []
    },

    // MORIA EXPANSION - The Deeps of Khazad-dûm

    durin_throne_hall: {
        name: "Great Hall of Durin",
        description: "The Great Hall of Durin is a massive chamber that once served as the primary seat of power for the Dwarven Kings of Khazad-dûm. The hall is vast beyond comprehension, its ceiling lost in darkness high above, supported by columns of stone so large that they seem like the trunks of petrified trees. The walls are covered in intricate carvings depicting the history of the dwarves—scenes of mining, crafting, battle, and the great deeds of Durin's line. At the far end of the hall, the throne of Durin sits empty, carved from a single block of mithril-adorned stone. The throne is massive, designed for a king of legendary stature, and it's covered in runes and symbols that speak of power and authority. Despite the darkness and decay that now fills Moria, the throne still radiates a sense of majesty and ancient power. The floor is paved with great stone blocks, and you can see where banners once hung from the walls, their remnants now tattered and faded. This was once the heart of the greatest dwarven kingdom in Middle-earth, and even in ruin, it speaks of the glory that once was. The air is heavy with the weight of history, and you can almost hear the echoes of ancient councils and the voices of kings long dead.",
        exits: { 'southwest': 'barrow_downs', 'northeast': 'aldburg' },
        items: ['dwarven_scepter', 'gold_coin'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    hall_of_kings: {
        name: "Hall of Kings",
        description: "A long gallery lined with statues of the great kings of Moria. Their stone eyes seem to watch you with ancient pride and sorrow.",
        exits: { 'southeast': 'barrow_chamber_1', 'northwest': 'snowbourn_banks' },
        items: ['king_statuette'],
        enemies: []
    },

    royal_tombs: {
        name: "Royal Tombs of Khazad-dûm",
        description: "The final resting place of the kings of Durin's line. The stone sarcophagi are intricately carved and covered in ancient dwarven runes.",
        exits: { 'southwest': 'barrow_chamber_2', 'northeast': 'starkhorn_foothills' },
        items: ['ancient_crown', 'mithril_ring'],
        enemies: ['dwarven_wraith']
    },

    royal_armory: {
        name: "Royal Armory",
        description: "A vast chamber once filled with the finest weapons and armor crafted by dwarven smiths. Most has been looted, but some relics remain hidden in the dust.",
        exits: { 'north': 'barrow_chamber_3', 'south': 'dimholt_road', 'southeast': 'dunharrow_firtree_grove', 'southwest': 'hidden_valley_white_mountains' },
        items: ['heavy_dwarven_axe', 'iron_shield'],
        enemies: ['orc_captain']
    },

    smelting_chambers: {
        name: "Smelting Chambers",
        description: "Huge furnaces once blazed here, melting the ores brought up from the deep mines. The heat is long gone, but the smell of sulfur remains.",
        exits: { 'northwest': 'barrow_chamber_3', 'southeast': 'deeping_stream_upper' },
        items: ['iron_bar', 'coal'],
        enemies: ['goblin', 'goblin']
    },

    deep_mines_hub: {
        name: "Deep Mines Hub",
        description: "A central point where several mining tunnels converge. Ropes, pulleys, and broken carts litter the floor.",
        exits: { 'northeast': 'barrow_chamber_3', 'southwest': 'hornburg_armory' },
        items: ['rusty_pickaxe'],
        enemies: ['cave_troll']
    },

    mithril_depths_1: {
        name: "Mithril Depths - Upper Vein",
        description: "A tunnel carved through the hard rock in search of the elusive mithril. Tiny flecks of silver still glitter in the walls.",
        exits: { 'northeast': 'weathertop_approach', 'southwest': 'deep_coomb' },
        items: ['mithril_pebble'],
        enemies: ['goblin_miner']
    },

    mithril_depths_2: {
        name: "Mithril Depths - The Mother Lode",
        description: "A vast cavern where the greatest vein of mithril was ever found. The walls are a shimmering tapestry of natural silver.",
        exits: { 'northwest': 'weathertop_summit', 'southeast': 'west_emnet' },
        items: ['mithril_shard', 'star_gem'],
        enemies: ['moria_stalker']
    },

    iron_mines_1: {
        name: "Iron Mines - Level 1",
        description: "The source of the iron that armed the dwarven legions. The air is thick with red dust.",
        exits: { 'northeast': 'combe', 'southwest': 'wold_of_rohan' },
        items: ['heavy_iron_ore'],
        enemies: []
    },

    iron_mines_2: {
        name: "Iron Mines - The Pit",
        description: "A deep pit where the richest iron was extracted. The descent is steep and dangerous.",
        exits: { 'northwest': 'archet', 'southeast': 'ithilien_woods' },
        items: ['pure_iron_ore'],
        enemies: ['giant_spider']
    },

    the_unending_stair_middle: {
        name: "The Unending Stair - Middle Section",
        description: "The great stair continues its spiral. You are far below the peaks and far above the roots of the mountains.",
        exits: { 'northeast': 'chetwood', 'southwest': 'henneth_annun' },
        items: [],
        enemies: []
    },

    goblin_ward: {
        name: "The Goblin Ward",
        description: "A section of the mines that has been crudeley reinforced by the goblins. Gutteral voices echo through the tunnels.",
        exits: { 'northwest': 'staddle', 'southeast': 'minas_tirith_stables' },
        items: ['goblin_scimitar'],
        enemies: ['goblin_sentry', 'goblin_sentry']
    },

    goblin_watchtower: {
        name: "Goblin Watchtower",
        description: "A crude structure built from stolen dwarven stones and wood. It overlooks the Seventh Level.",
        exits: { 'west': 'fornost_approach', 'east': 'minas_tirith_houses_of_healing', 'northeast': 'citadel_guards_hall', 'southeast': 'pelargir_port' },
        items: ['black_arrow'],
        enemies: ['goblin_archer']
    },

    // Bridge of Khazad-dum expansion
    khazad_dum_chasm_view: {
        name: "Chasm Viewpoint",
        description: "A side ledge that offers a terrifying view of the bottomless chasm over which the bridge spans. The air is hot and smells of ancient fire.",
        exits: { 'southwest': 'fornost_approach', 'northeast': 'lossarnach_valleys' },
        items: ['scorched_stone'],
        enemies: []
    },

    // Deep Places
    nameless_tunnels: {
        name: "The Nameless Tunnels",
        description: "Dark, narrow tunnels below the lowest level of Moria. These were not carved by dwarves, but by things older and more terrible.",
        exits: { 'northwest': 'fornost_approach', 'southeast': 'minas_morgul_gates' },
        items: ['slime_puddle'],
        enemies: ['nameless_thing']
    },

    the_dark_lake: {
        name: "The Dark Lake",
        description: "A vast underground lake where the water is as black as ink. Strange, sightless fish swim in the depths.",
        exits: { 'southwest': 'fornost_gates', 'northeast': 'minas_morgul_interior' },
        items: ['glowing_mushroom'],
        enemies: ['water_creature']
    }
};
