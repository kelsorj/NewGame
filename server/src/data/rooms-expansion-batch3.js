// EXPANSION BATCH 3: Lothlórien & Fangorn
// This file contains ~30 new rooms to be merged into rooms.js

export const lothlorienFangornExpansion = {
    // LOTHLÓRIEN EXPANSION - The Heart of Elvendom

    galadhrm_flet_1: {
        name: "Galadhrim Flet - Western Watch",
        description: "The Galadhrim Flet is a high platform built into the branches of a golden mallorn tree, one of the many watch posts that guard the borders of Lothlórien. The platform is constructed with elven artistry, its planks fitted together so perfectly that they seem to have grown from the tree itself. From here, the Sentinels of Lórien keep watch over the western borders, their keen eyes scanning the lands beyond for any sign of danger. The view is breathtaking—you can see for miles across the Golden Wood, with the mallorn trees stretching out like a sea of gold and silver. The air is clear and pure, carrying the scent of elanor flowers and the subtle magic that permeates all of Lothlórien. The platform is large enough for several elves to stand comfortably, and you can see where weapons and supplies are stored in cleverly hidden compartments. Rope ladders and walkways connect this flet to others in the surrounding trees, creating a network of elevated paths that allow the Galadhrim to move through their realm without ever touching the ground. This is a place of vigilance and beauty, where the duty of watchfulness is combined with the natural splendor of the elven realm.",
        exits: { north: 'khazad_dum_chasm_view', south: 'starkhorn_foothills', northeast: 'leaflock_meadow', southeast: 'dunharrow_firtree_grove', southwest: 'aldburg' },
        items: ['elven_bow', 'elven_arrow'],
        enemies: []
    },

    niphredil_meadow: {
        name: "Meadow of Niphredil",
        description: "A beautiful meadow filled with pale niphredil flowers that seem to glow with their own light. A small stream of crystalline water winds through the grass.",
        exits: { north: 'dimholt_road', south: 'elven_craft_hall', east: 'entwash_headwaters', northeast: 'hidden_valley_white_mountains', northwest: 'snowbourn_banks', southeast: 'fangorn_hidden_path', southwest: 'eastfold_plains' },
        items: ['niphredil_flower'],
        enemies: []
    },

    singing_groves: {
        name: "Singing Groves",
        description: "A grove of trees where the wind through the leaves sounds like distant elven voices. It is a place for meditation and song.",
        exits: { north: 'fangorn_hidden_path', south: 'leaflock_meadow', east: 'entwash_delta', west: 'paths_of_dead', northeast: 'elf_path_entrance', northwest: 'elven_craft_hall', southeast: 'wellinghall', southwest: 'khazad_dum_chasm_view' },
        items: ['elven_flute'],
        enemies: []
    },

    elven_craft_hall: {
        name: "Hall of the Galadhrim Craftsmen",
        description: "A large flet where elven artisans craft their legendary ropes, cloaks, and jewelry. The work is done with such grace it seems like magic.",
        exits: { north: 'niphredil_meadow', south: 'paths_of_dead', east: 'fangorn_hidden_path', west: 'eastfold_plains', northeast: 'entwash_headwaters', southeast: 'singing_groves', southwest: 'dead_city' },
        items: ['elven_rope', 'silver_thimble'],
        enemies: []
    },

    mallorn_sanctuary: {
        name: "The Mallorn Sanctuary",
        description: "A quiet space deep within the city of trees, reserved for those seeking healing and rest. The golden light here is particularly strong.",
        exits: { north: 'wellinghall', south: 'deeping_stream_upper', east: 'celebrant_banks', northeast: 'anduin_confluence', northwest: 'leaflock_meadow', southeast: 'deep_coomb', southwest: 'dunharrow_firtree_grove' },
        items: ['athelas_extract', 'healing_herbs'],
        enemies: []
    },

    silverlode_crossing: {
        name: "Silverlode Crossing",
        description: "A place where the river Silverlode is shallow enough to cross via a series of ancient white stones. The water flows swiftly around them.",
        exits: { north: 'hornburg_armory', south: 'elf_path_entrance', east: 'entmoot_circle', west: 'entwash_headwaters', northeast: 'west_emnet', northwest: 'hidden_valley_white_mountains', southeast: 'the_silent_glade', southwest: 'fangorn_hidden_path' },
        items: ['white_river_stone'],
        enemies: []
    },

    celebrant_banks: {
        name: "Banks of the Celebrant",
        description: "Further downstream from the Silverlode, the river Celebrant widens. The banks are covered in thick moss and golden leaves.",
        exits: { north: 'anduin_confluence', south: 'deep_coomb', west: 'mallorn_sanctuary', northeast: 'grey_havens_docks', northwest: 'wellinghall', southeast: 'wold_of_rohan', southwest: 'deeping_stream_upper' },
        items: ['golden_moss'],
        enemies: []
    },

    anduin_confluence: {
        name: "Confluence of Rivers",
        description: "Where the Silverlode meets the Great River Anduin. The waters swirl together, one crystal clear and the other deep and powerful.",
        exits: { north: 'fangorn_eaves', south: 'celebrant_banks', east: 'grey_havens_docks', west: 'wellinghall', northeast: 'mirkwood_edge', northwest: 'entwash_delta', southwest: 'mallorn_sanctuary', south: 'anduin_midstream' },
        items: ['river_reeds'],
        enemies: []
    },

    // FANGORN EXPANSION - The Ancient Wood

    fangorn_hidden_path: {
        name: "Hidden Path in Fangorn",
        description: "A narrow trail through the thickest part of the forest. The trees seem to lean in, their branches interlocking overhead like a gothic cathedral.",
        exits: { north: 'entwash_headwaters', south: 'singing_groves', east: 'elf_path_entrance', west: 'elven_craft_hall', northeast: 'silverlode_crossing', northwest: 'niphredil_meadow', southeast: 'entwash_delta', southwest: 'paths_of_dead' },
        items: ['ancient_bark'],
        enemies: []
    },

    the_silent_glade: {
        name: "The Silent Glade",
        description: "An opening in the forest where no bird sings and the wind does not blow. The silence here is heavy and thick with age.",
        exits: { north: 'entmoot_circle', south: 'fangorn_eaves', east: 'mirkwood_path_1', west: 'elf_path_entrance', northeast: 'mirkwood_path_2', northwest: 'silverlode_crossing', southeast: 'mirkwood_edge', southwest: 'entwash_delta' },
        items: ['ancient_root'],
        enemies: ['huorn']
    },

    entmoot_circle: {
        name: "Entmoot Circle - Derndingle",
        description: "A wide, bowl-shaped clearing surrounded by a high hedge of evergreen trees. This is where the Ents meet to discuss the affairs of the forest.",
        exits: { north: 'west_emnet', south: 'the_silent_glade', east: 'mirkwood_path_2', west: 'silverlode_crossing', northwest: 'hornburg_armory', southeast: 'mirkwood_path_1', southwest: 'elf_path_entrance' },
        items: ['ent_leaf'],
        enemies: []
    },

    entwash_headwaters: {
        name: "Headwaters of the Entwash",
        description: "Where the Entwash river springs from the roots of the Misty Mountains. The water is cold enough to chill the bone.",
        exits: { north: 'hidden_valley_white_mountains', south: 'fangorn_hidden_path', east: 'silverlode_crossing', west: 'niphredil_meadow', northeast: 'hornburg_armory', northwest: 'dimholt_road', southeast: 'elf_path_entrance', southwest: 'elven_craft_hall' },
        items: ['mountain_crystal'],
        enemies: []
    },

    treebeard_cellar: {
        name: "Treebeard's Storage",
        description: "A large hollow beneath the roots of an enormous oak tree. Stone jars filled with entdraught are kept here.",
        exits: { north: 'skinbark_grove', northwest: 'thranduil_halls_interior', southeast: 'aldburg' },
        items: ['entdraught', 'stone_jar'],
        enemies: []
    },

    skinbark_grove: {
        name: "Skinbark's Grove",
        description: "The domain of Skinbark, one of the oldest Ents. Many of the trees here have been scarred by orcs, and there is a sense of anger in the soil.",
        exits: { north: 'thranduil_halls_gate', south: 'treebeard_cellar', west: 'thranduil_halls_interior', northeast: 'dead_city', northwest: 'long_lake_path' },
        items: ['charred_wood'],
        enemies: ['orc_scout']
    },

    leaflock_meadow: {
        name: "Leaflock's Meadow",
        description: "A sunny spot in the forest where Leaflock, an Ent who has become very 'tree-ish', often sleeps. He is almost indistinguishable from the trees around him.",
        exits: { north: 'singing_groves', east: 'wellinghall', west: 'khazad_dum_chasm_view', northeast: 'entwash_delta', northwest: 'paths_of_dead', southeast: 'mallorn_sanctuary', southwest: 'galadhrm_flet_1' },
        items: ['rare_wildflower'],
        enemies: []
    }
};
