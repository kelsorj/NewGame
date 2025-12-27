// EXPANSION BATCH 2: Rivendell & Moria
// This file contains ~40 new rooms to be merged into rooms.js

export const moriaRivendellExpansion = {
    // RIVENDELL EXPANSION - The Last Homely House

    rivendell_gardens: {
        name: "Gardens of Rivendell",
        description: "A peaceful garden where rare flowers from across Middle Earth bloom. The sound of many waterfalls creates a constant, soothing harmony. Stone benches are placed under ancient trees.",
        exits: {
            west: 'rivendell_hall',
            east: 'waterfall_walkway',
            north: 'hall_of_fire_guest'
        },
        items: ['elanor_flower', 'silver_leaf'],
        enemies: []
    },

    hall_of_fire_guest: {
        name: "The Hall of Fire",
        description: "A great hall where a fire is always burning. On either side of the hearth are pillows and carpets where elves sit and listen to songs and tales. The atmosphere is one of profound peace.",
        exits: {
            south: 'rivendell_gardens',
            north: 'elrond_study'
        },
        items: ['harp', 'ancient_scroll'],
        enemies: []
    },

    elrond_study: {
        name: "Elrond's Private Study",
        description: "A circular room filled with ancient maps and star-charts. Elrond Half-elven spends much of his time here, contemplating the fate of Middle Earth.",
        exits: {
            south: 'hall_of_fire_guest'
        },
        items: ['vilya_reflection', 'ancient_map'],
        enemies: []
    },

    waterfall_walkway: {
        name: "Waterfall Walkway",
        description: "A narrow bridge of stone that hangs over a spectacular waterfall. The mist rises to dampen your face, and the roar of the water is deafening but beautiful.",
        exits: {
            west: 'rivendell_gardens',
            east: 'hidden_flet'
        },
        items: ['crystalline_water'],
        enemies: []
    },

    hidden_flet: {
        name: "Hidden Flet",
        description: "A platform built high in the branches of a massive pine tree. From here, you can see the entire valley of Imladris stretching out below.",
        exits: {
            west: 'waterfall_walkway'
        },
        items: ['elven_spyglass'],
        enemies: []
    },

    rivendell_guest_house: {
        name: "The Guest House",
        description: "A comfortable lodging for travelers of all races. The beds are soft and the air is filled with the scent of pine and lavender.",
        exits: {
            north: 'rivendell_hall'
        },
        items: ['fresh_linen', 'healing_salve'],
        enemies: []
    },

    // MORIA EXPANSION - The Deeps of Khazad-dûm

    durin_throne_hall: {
        name: "Great Hall of Durin",
        description: "A massive hall that served as the primary seat of power for the Dwarven Kings. The throne of Durin, carved from a single block of stone, sits empty at the far end.",
        exits: {
            west: 'twenty_first_hall',
            east: 'royal_armory',
            north: 'hall_of_kings',
            south: 'smelting_chambers'
        },
        items: ['dwarven_scepter', 'gold_coin'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    hall_of_kings: {
        name: "Hall of Kings",
        description: "A long gallery lined with statues of the great kings of Moria. Their stone eyes seem to watch you with ancient pride and sorrow.",
        exits: {
            south: 'durin_throne_hall',
            north: 'royal_tombs'
        },
        items: ['king_statuette'],
        enemies: []
    },

    royal_tombs: {
        name: "Royal Tombs of Khazad-dûm",
        description: "The final resting place of the kings of Durin's line. The stone sarcophagi are intricately carved and covered in ancient dwarven runes.",
        exits: {
            south: 'hall_of_kings'
        },
        items: ['ancient_crown', 'mithril_ring'],
        enemies: ['dwarven_wraith']
    },

    royal_armory: {
        name: "Royal Armory",
        description: "A vast chamber once filled with the finest weapons and armor crafted by dwarven smiths. Most has been looted, but some relics remain hidden in the dust.",
        exits: {
            west: 'durin_throne_hall'
        },
        items: ['heavy_dwarven_axe', 'iron_shield'],
        enemies: ['orc_captain']
    },

    smelting_chambers: {
        name: "Smelting Chambers",
        description: "Huge furnaces once blazed here, melting the ores brought up from the deep mines. The heat is long gone, but the smell of sulfur remains.",
        exits: {
            north: 'durin_throne_hall',
            south: 'deep_mines_hub'
        },
        items: ['iron_bar', 'coal'],
        enemies: ['goblin', 'goblin']
    },

    deep_mines_hub: {
        name: "Deep Mines Hub",
        description: "A central point where several mining tunnels converge. Ropes, pulleys, and broken carts litter the floor.",
        exits: {
            north: 'smelting_chambers',
            east: 'mithril_depths_1',
            west: 'iron_mines_1',
            south: 'the_unending_stair_middle'
        },
        items: ['rusty_pickaxe'],
        enemies: ['cave_troll']
    },

    mithril_depths_1: {
        name: "Mithril Depths - Upper Vein",
        description: "A tunnel carved through the hard rock in search of the elusive mithril. Tiny flecks of silver still glitter in the walls.",
        exits: {
            west: 'deep_mines_hub',
            east: 'mithril_depths_2'
        },
        items: ['mithril_pebble'],
        enemies: ['goblin_miner']
    },

    mithril_depths_2: {
        name: "Mithril Depths - The Mother Lode",
        description: "A vast cavern where the greatest vein of mithril was ever found. The walls are a shimmering tapestry of natural silver.",
        exits: {
            west: 'mithril_depths_1'
        },
        items: ['mithril_shard', 'star_gem'],
        enemies: ['moria_stalker']
    },

    iron_mines_1: {
        name: "Iron Mines - Level 1",
        description: "The source of the iron that armed the dwarven legions. The air is thick with red dust.",
        exits: {
            east: 'deep_mines_hub',
            west: 'iron_mines_2'
        },
        items: ['heavy_iron_ore'],
        enemies: []
    },

    iron_mines_2: {
        name: "Iron Mines - The Pit",
        description: "A deep pit where the richest iron was extracted. The descent is steep and dangerous.",
        exits: {
            east: 'iron_mines_1'
        },
        items: ['pure_iron_ore'],
        enemies: ['giant_spider']
    },

    the_unending_stair_middle: {
        name: "The Unending Stair - Middle Section",
        description: "The great stair continues its spiral. You are far below the peaks and far above the roots of the mountains.",
        exits: {
            north: 'deep_mines_hub',
            up: 'endless_stair_top',
            down: 'endless_stair_bottom'
        },
        items: [],
        enemies: []
    },

    goblin_ward: {
        name: "The Goblin Ward",
        description: "A section of the mines that has been crudeley reinforced by the goblins. Gutteral voices echo through the tunnels.",
        exits: {
            east: 'goblin_warren',
            west: 'goblin_watchtower'
        },
        items: ['goblin_scimitar'],
        enemies: ['goblin_sentry', 'goblin_sentry']
    },

    goblin_watchtower: {
        name: "Goblin Watchtower",
        description: "A crude structure built from stolen dwarven stones and wood. It overlooks the Seventh Level.",
        exits: {
            east: 'goblin_ward',
            south: 'seventh_level'
        },
        items: ['black_arrow'],
        enemies: ['goblin_archer']
    },

    // Bridge of Khazad-dum expansion
    khazad_dum_chasm_view: {
        name: "Chasm Viewpoint",
        description: "A side ledge that offers a terrifying view of the bottomless chasm over which the bridge spans. The air is hot and smells of ancient fire.",
        exits: { west: 'bridge_of_khazad_dum', southwest: 'bridge_of_khazad_dum'  },
        items: ['scorched_stone'],
        enemies: []
    },

    // Deep Places
    nameless_tunnels: {
        name: "The Nameless Tunnels",
        description: "Dark, narrow tunnels below the lowest level of Moria. These were not carved by dwarves, but by things older and more terrible.",
        exits: {
            up: 'first_level',
            down: 'the_dark_lake'
        },
        items: ['slime_puddle'],
        enemies: ['nameless_thing']
    },

    the_dark_lake: {
        name: "The Dark Lake",
        description: "A vast underground lake where the water is as black as ink. Strange, sightless fish swim in the depths.",
        exits: {
            up: 'nameless_tunnels'
        },
        items: ['glowing_mushroom'],
        enemies: ['water_creature']
    }
};
