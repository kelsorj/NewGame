// EXPANSION BATCH 4: Rohan
// This file contains ~30 new rooms to be merged into rooms.js

export const rohanExpansion = {
    // ROHAN EXPANSION - Land of the Mark

    westfold_plains: {
        name: "Westfold Plains",
        description: "The western reaches of Rohan, where the grass is shorter and the wind carries the scent of the sea. The White Mountains loom to the south.",
        exits: { east: 'rohan_plains',
            west: 'helms_gate', east: 'deep_coomb'  },
        items: ['wild_grass'],
        enemies: ['warg_rider']
    },

    eastfold_plains: {
        name: "Eastfold Plains",
        description: "The eastern reaches of Rohan, stretching toward the Great River. The land is low and fertile, dotted with small homesteads.",
        exits: {
            west: 'rohan_plains',
            east: 'entwash_delta'
        },
        items: ['sheaf_of_wheat'],
        enemies: []
    },

    entwash_delta: {
        name: "Entwash Delta",
        description: "Where the Entwash river breaks into many channels before flowing into the Anduin. The ground is marshy and thick with reeds.",
        exits: {
            west: 'eastfold_plains'
        },
        items: ['river_reed'],
        enemies: ['marsh_adder']
    },

    aldburg: {
        name: "Aldburg",
        description: "An ancient settlement of Rohan, once the home of Eorl the Young. Its walls are of stone and wood, weathered by centuries of wind.",
        exits: {
            north: 'edoras_approach'
        },
        items: ['ancient_rohirric_coin'],
        enemies: []
    },

    snowbourn_banks: {
        name: "Banks of the Snowbourn",
        description: "The river Snowbourn flows down from the mountains through Edoras. Its waters are cold and clear, tumbling over white stones.",
        exits: { south: 'edoras_gates',
            north: 'rohan_plains', north: 'edoras_gates'  },
        items: ['river_stone'],
        enemies: []
    },

    starkhorn_foothills: {
        name: "Foothills of the Starkhorn",
        description: "The land rises steeply toward the peak of the Starkhorn. The air is thinning, and the wind is cold.",
        exits: {
            north: 'harrowdale',
            south: 'dimholt_road'
        },
        items: ['mountain_flower'],
        enemies: []
    },

    dimholt_road: {
        name: "The Dimholt Road",
        description: "A dark road lined with ancient, weather-worn standing stones. It leads toward the Dark Door under the mountain.",
        exits: {
            north: 'starkhorn_foothills',
            south: 'dunharrow'
        },
        items: [],
        enemies: ['ghostly_whisper']
    },

    dunharrow_firtree_grove: {
        name: "Fir-tree Grove - Dunharrow",
        description: "A dark grove of fir trees near the encampment of Dunharrow. The shadows here are deep even at midday.",
        exits: {
            west: 'dunharrow'
        },
        items: ['fir_cone'],
        enemies: []
    },

    hidden_valley_white_mountains: {
        name: "Hidden Valley in the White Mountains",
        description: "A secluded nook in the mountains, shielded from the wind. A small spring of sweet water trickles from the rock.",
        exits: { east: 'dunharrow', southeast: 'dunharrow'  },
        items: ['sweet_water'],
        enemies: []
    },

    deeping_stream_upper: {
        name: "Upper Deeping Stream",
        description: "Further up the gorge from Helm's Deep, the stream is narrower and swifter. It flows from deep within the mountains.",
        exits: { west: 'helms_deep_interior',
            east: 'glittering_caves', southwest: 'helms_deep_interior'  },
        items: ['crystal_pebble'],
        enemies: []
    },

    hornburg_armory: {
        name: "Hornburg Armory",
        description: "The armory of the great fortress. Shields and spears line the stone walls, ready for the defense of the Mark.",
        exits: {
            down: 'helms_deep_interior'
        },
        items: ['rohirric_spear', 'round_shield'],
        enemies: []
    },

    deep_coomb: {
        name: "The Deep Coomb",
        description: "The valley leading up to the Deeping Wall. It is a natural bottleneck, perfect for defense.",
        exits: { east: 'helms_gate',
            west: 'westfold_plains', west: 'helms_gate'  },
        items: ['broken_shield'],
        enemies: ['uruk_hai_scout']
    },

    west_emnet: {
        name: "West Emnet",
        description: "The vast grasslands west of the Entwash. The horizon seems infinitely far away in every direction.",
        exits: {
            north: 'fangorn_border',
            south: 'rohan_plains'
        },
        items: ['wild_horse_hair'],
        enemies: ['wild_horse']
    },

    wold_of_rohan: {
        name: "The Wold",
        description: "The northernmost part of Rohan, a high plateau of rough grass and stone. It is a lonely land, often swept by cold winds from the north.",
        exits: {
            south: 'east_emnet',
            north: 'anduin_midstream'
        },
        items: ['ancient_arrowhead'],
        enemies: ['orc_raider']
    }
};
