// EXPANSION BATCH 4: Rohan
// This file contains ~30 new rooms to be merged into rooms.js

export const rohanExpansion = {
    // ROHAN EXPANSION - Land of the Mark

    westfold_plains: {
        name: "Westfold Plains",
        description: "The western reaches of Rohan, where the grass is shorter and the wind carries the scent of the sea. The White Mountains loom to the south.",
        exits: { south: 'thranduil_halls_gate', east: 'eastfold_plains', west: 'lake_town_docks', northwest: 'lonely_mountain_approach', southeast: 'dead_city', southwest: 'long_lake_path' },
        items: ['wild_grass'],
        enemies: ['warg_rider']
    },

    eastfold_plains: {
        name: "Eastfold Plains",
        description: "The eastern reaches of Rohan, stretching toward the Great River. The land is low and fertile, dotted with small homesteads.",
        exits: { south: 'dead_city', east: 'elven_craft_hall', west: 'westfold_plains', northeast: 'niphredil_meadow', southeast: 'paths_of_dead', southwest: 'thranduil_halls_gate' },
        items: ['sheaf_of_wheat'],
        enemies: []
    },

    entwash_delta: {
        name: "Entwash Delta",
        description: "Where the Entwash river breaks into many channels before flowing into the Anduin. The ground is marshy and thick with reeds.",
        exits: { north: 'elf_path_entrance', south: 'wellinghall', east: 'fangorn_eaves', west: 'singing_groves', northeast: 'the_silent_glade', northwest: 'fangorn_hidden_path', southeast: 'anduin_confluence', southwest: 'leaflock_meadow' },
        items: ['river_reed'],
        enemies: ['marsh_adder']
    },

    aldburg: {
        name: "Aldburg",
        description: "An ancient settlement of Rohan, once the home of Eorl the Young. Its walls are of stone and wood, weathered by centuries of wind.",
        exits: { south: 'dunharrow', east: 'starkhorn_foothills', northeast: 'galadhrm_flet_1', northwest: 'treebeard_cellar' },
        items: ['ancient_rohirric_coin'],
        enemies: []
    },

    snowbourn_banks: {
        name: "Banks of the Snowbourn",
        description: "The river Snowbourn flows down from the mountains through Edoras. Its waters are cold and clear, tumbling over white stones.",
        exits: { east: 'dimholt_road', northeast: 'helms_gate', northwest: 'erebor_treasury', southeast: 'niphredil_meadow' },
        items: ['river_stone'],
        enemies: []
    },

    starkhorn_foothills: {
        name: "Foothills of the Starkhorn",
        description: "The land rises steeply toward the peak of the Starkhorn. The air is thinning, and the wind is cold.",
        exits: { north: 'galadhrm_flet_1', east: 'dunharrow_firtree_grove', west: 'aldburg', southeast: 'helms_deep_interior', southwest: 'dunharrow' },
        items: ['mountain_flower'],
        enemies: []
    },

    dimholt_road: {
        name: "The Dimholt Road",
        description: "A dark road lined with ancient, weather-worn standing stones. It leads toward the Dark Door under the mountain.",
        exits: { north: 'helms_gate', south: 'niphredil_meadow', east: 'hidden_valley_white_mountains', west: 'snowbourn_banks', northeast: 'glittering_caves', southeast: 'entwash_headwaters' },
        items: [],
        enemies: ['ghostly_whisper']
    },

    dunharrow_firtree_grove: {
        name: "Fir-tree Grove - Dunharrow",
        description: "A dark grove of fir trees near the encampment of Dunharrow. The shadows here are deep even at midday.",
        exits: { south: 'helms_deep_interior', east: 'deeping_stream_upper', west: 'starkhorn_foothills', northeast: 'mallorn_sanctuary', northwest: 'galadhrm_flet_1' },
        items: ['fir_cone'],
        enemies: []
    },

    hidden_valley_white_mountains: {
        name: "Hidden Valley in the White Mountains",
        description: "A secluded nook in the mountains, shielded from the wind. A small spring of sweet water trickles from the rock.",
        exits: { north: 'glittering_caves', south: 'entwash_headwaters', east: 'hornburg_armory', west: 'dimholt_road', northeast: 'fangorn_depths', northwest: 'helms_gate', southeast: 'silverlode_crossing', southwest: 'niphredil_meadow' },
        items: ['sweet_water'],
        enemies: []
    },

    deeping_stream_upper: {
        name: "Upper Deeping Stream",
        description: "Further up the gorge from Helm's Deep, the stream is narrower and swifter. It flows from deep within the mountains.",
        exits: { north: 'mallorn_sanctuary', east: 'deep_coomb', west: 'dunharrow_firtree_grove', northeast: 'celebrant_banks', southwest: 'helms_deep_interior' },
        items: ['crystal_pebble'],
        enemies: []
    },

    hornburg_armory: {
        name: "Hornburg Armory",
        description: "The armory of the great fortress. Shields and spears line the stone walls, ready for the defense of the Mark.",
        exits: { north: 'fangorn_depths', south: 'silverlode_crossing', east: 'west_emnet', west: 'hidden_valley_white_mountains', northeast: 'entwash', northwest: 'glittering_caves', southeast: 'entmoot_circle', southwest: 'entwash_headwaters' },
        items: ['rohirric_spear', 'round_shield'],
        enemies: []
    },

    deep_coomb: {
        name: "The Deep Coomb",
        description: "The valley leading up to the Deeping Wall. It is a natural bottleneck, perfect for defense.",
        exits: { north: 'celebrant_banks', east: 'wold_of_rohan', west: 'deeping_stream_upper', northwest: 'mallorn_sanctuary', southeast: 'east_emnet' },
        items: ['broken_shield'],
        enemies: ['uruk_hai_scout']
    },

    west_emnet: {
        name: "West Emnet",
        description: "The vast grasslands west of the Entwash. The horizon seems infinitely far away in every direction.",
        exits: { north: 'entwash', south: 'entmoot_circle', west: 'hornburg_armory', northwest: 'fangorn_depths', southeast: 'mirkwood_path_2', southwest: 'silverlode_crossing' },
        items: ['wild_horse_hair'],
        enemies: ['wild_horse']
    },

    wold_of_rohan: {
        name: "The Wold",
        description: "The northernmost part of Rohan, a high plateau of rough grass and stone. It is a lonely land, often swept by cold winds from the north.",
        exits: { south: 'east_emnet', west: 'deep_coomb', northwest: 'celebrant_banks' },
        items: ['ancient_arrowhead'],
        enemies: ['orc_raider']
    }
};
