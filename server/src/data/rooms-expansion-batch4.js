// EXPANSION BATCH 4: Rohan
// This file contains ~30 new rooms to be merged into rooms.js

export const rohanExpansion = {
    // ROHAN EXPANSION - Land of the Mark

    westfold_plains: {
        name: "Westfold Plains",
        description: "The western reaches of Rohan, where the grass is shorter and the wind carries the scent of the sea. The White Mountains loom to the south.",
        exits: { 'south': 'leaflock_meadow', 'north': 'eastfold_plains' },
        items: ['wild_grass'],
        enemies: ['warg_rider']
    },

    eastfold_plains: {
        name: "Eastfold Plains",
        description: "The eastern reaches of Rohan, stretching toward the Great River. The land is low and fertile, dotted with small homesteads.",
        exits: { 'south': 'westfold_plains', 'north': 'starkhorn_foothills' },
        items: ['sheaf_of_wheat'],
        enemies: []
    },

    entwash_delta: {
        name: "Entwash Delta",
        description: "Where the Entwash river breaks into many channels before flowing into the Anduin. The ground is marshy and thick with reeds.",
        exits: { 'northwest': 'treebeard_cellar', 'south': 'elf_path_entrance', 'west': 'entmoot_circle', 'northeast': 'sixth_level', 'southeast': 'rohan_plains' },
        items: ['river_reed'],
        enemies: ['marsh_adder']
    },

    aldburg: {
        name: "Aldburg",
        description: "An ancient settlement of Rohan, once the home of Eorl the Young. Its walls are of stone and wood, weathered by centuries of wind.",
        exits: { 'east': 'thranduil_halls_interior', 'west': 'snowbourn_banks', 'south': 'lossarnach_valleys', 'southwest': 'sixth_level', 'northeast': 'white_tower', 'northwest': 'pelennor_fields', 'north': 'minas_tirith_gates' },
        items: ['ancient_rohirric_coin'],
        enemies: []
    },

    snowbourn_banks: {
        name: "Banks of the Snowbourn",
        description: "The river Snowbourn flows down from the mountains through Edoras. Its waters are cold and clear, tumbling over white stones.",
        exits: { 'east': 'aldburg', 'west': 'dunharrow_firtree_grove', 'southeast': 'lossarnach_valleys', 'south': 'sixth_level', 'northwest': 'osgiliath_ruins', 'northeast': 'minas_tirith_gates' },
        items: ['river_stone'],
        enemies: []
    },

    starkhorn_foothills: {
        name: "Foothills of the Starkhorn",
        description: "The land rises steeply toward the peak of the Starkhorn. The air is thinning, and the wind is cold.",
        exits: { 'south': 'eastfold_plains', 'north': 'dimholt_road' },
        items: ['mountain_flower'],
        enemies: []
    },

    dimholt_road: {
        name: "The Dimholt Road",
        description: "A dark road lined with ancient, weather-worn standing stones. It leads toward the Dark Door under the mountain.",
        exits: { 'south': 'starkhorn_foothills', 'west': 'deeping_stream_upper' },
        items: [],
        enemies: ['ghostly_whisper']
    },

    dunharrow_firtree_grove: {
        name: "Fir-tree Grove - Dunharrow",
        description: "A dark grove of fir trees near the encampment of Dunharrow. The shadows here are deep even at midday.",
        exits: { 'east': 'snowbourn_banks', 'south': 'west_emnet', 'west': 'third_level', 'northwest': 'mordor_plains' },
        items: ['fir_cone'],
        enemies: []
    },

    hidden_valley_white_mountains: {
        name: "Hidden Valley in the White Mountains",
        description: "A secluded nook in the mountains, shielded from the wind. A small spring of sweet water trickles from the rock.",
        exits: { 'down': 'mount_doom_summit', 'north': 'lonely_mountain_approach' },
        items: ['sweet_water'],
        enemies: []
    },

    deeping_stream_upper: {
        name: "Upper Deeping Stream",
        description: "Further up the gorge from Helm's Deep, the stream is narrower and swifter. It flows from deep within the mountains.",
        exits: { 'east': 'dimholt_road', 'north': 'hornburg_armory', 'southwest': 'the_unending_stair_middle' },
        items: ['crystal_pebble'],
        enemies: []
    },

    hornburg_armory: {
        name: "Hornburg Armory",
        description: "The armory of the great fortress. Shields and spears line the stone walls, ready for the defense of the Mark.",
        exits: { 'south': 'deeping_stream_upper', 'northwest': 'deep_coomb', 'southwest': 'goblin_ward' },
        items: ['rohirric_spear', 'round_shield'],
        enemies: []
    },

    deep_coomb: {
        name: "The Deep Coomb",
        description: "The valley leading up to the Deeping Wall. It is a natural bottleneck, perfect for defense.",
        exits: { 'southeast': 'hornburg_armory', 'west': 'wold_of_rohan', 'northwest': 'lake_evendim', 'southwest': 'annuminas_ruins', 'northeast': 'pelargir_port' },
        items: ['broken_shield'],
        enemies: ['uruk_hai_scout']
    },

    west_emnet: {
        name: "West Emnet",
        description: "The vast grasslands west of the Entwash. The horizon seems infinitely far away in every direction.",
        exits: { 'north': 'dunharrow_firtree_grove', 'southeast': 'gap_of_rohan', 'southwest': 'entmoot_circle', 'east': 'sixth_level', 'northwest': 'fifth_level' },
        items: ['wild_horse_hair'],
        enemies: ['wild_horse']
    },

    wold_of_rohan: {
        name: "The Wold",
        description: "The northernmost part of Rohan, a high plateau of rough grass and stone. It is a lonely land, often swept by cold winds from the north.",
        exits: { 'east': 'deep_coomb', 'south': 'ithilien_woods', 'north': 'hall_of_fire_guest' },
        items: ['ancient_arrowhead'],
        enemies: ['orc_raider']
    }
};
