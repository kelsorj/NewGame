// EXPANSION BATCH 3: Lothlórien & Fangorn
// This file contains ~30 new rooms to be merged into rooms.js

export const lothlorienFangornExpansion = {
    // LOTHLÓRIEN EXPANSION - The Heart of Elvendom

    galadhrm_flet_1: {
        name: "Galadhrim Flet - Western Watch",
        description: "The Galadhrim Flet is a high platform built into the branches of a golden mallorn tree, one of the many watch posts that guard the borders of Lothlórien. The platform is constructed with elven artistry, its planks fitted together so perfectly that they seem to have grown from the tree itself. From here, the Sentinels of Lórien keep watch over the western borders, their keen eyes scanning the lands beyond for any sign of danger. The view is breathtaking—you can see for miles across the Golden Wood, with the mallorn trees stretching out like a sea of gold and silver. The air is clear and pure, carrying the scent of elanor flowers and the subtle magic that permeates all of Lothlórien. The platform is large enough for several elves to stand comfortably, and you can see where weapons and supplies are stored in cleverly hidden compartments. Rope ladders and walkways connect this flet to others in the surrounding trees, creating a network of elevated paths that allow the Galadhrim to move through their realm without ever touching the ground. This is a place of vigilance and beauty, where the duty of watchfulness is combined with the natural splendor of the elven realm.",
        exits: { 'east': 'the_dark_lake', 'south': 'niphredil_meadow', 'north': 'henneth_annun' },
        items: ['elven_bow', 'elven_arrow'],
        enemies: []
    },

    niphredil_meadow: {
        name: "Meadow of Niphredil",
        description: "A beautiful meadow filled with pale niphredil flowers that seem to glow with their own light. A small stream of crystalline water winds through the grass.",
        exits: { 'north': 'galadhrm_flet_1', 'south': 'singing_groves', 'west': 'bombadil_garden' },
        items: ['niphredil_flower'],
        enemies: []
    },

    singing_groves: {
        name: "Singing Groves",
        description: "A grove of trees where the wind through the leaves sounds like distant elven voices. It is a place for meditation and song.",
        exits: { 'north': 'niphredil_meadow', 'south': 'elven_craft_hall', 'northeast': 'annuminas_approach', 'southwest': 'bucklebury', 'southeast': 'iron_mines_2' },
        items: ['elven_flute'],
        enemies: []
    },

    elven_craft_hall: {
        name: "Hall of the Galadhrim Craftsmen",
        description: "A large flet where elven artisans craft their legendary ropes, cloaks, and jewelry. The work is done with such grace it seems like magic.",
        exits: { 'north': 'singing_groves', 'south': 'mallorn_sanctuary', 'west': 'bucklebury', 'southeast': 'iron_mines_1' },
        items: ['elven_rope', 'silver_thimble'],
        enemies: []
    },

    mallorn_sanctuary: {
        name: "The Mallorn Sanctuary",
        description: "A quiet space deep within the city of trees, reserved for those seeking healing and rest. The golden light here is particularly strong.",
        exits: { 'north': 'elven_craft_hall', 'east': 'celebrant_banks', 'northwest': 'mithril_depths_1', 'northeast': 'iron_mines_1' },
        items: ['athelas_extract', 'healing_herbs'],
        enemies: []
    },

    silverlode_crossing: {
        name: "Silverlode Crossing",
        description: "A place where the river Silverlode is shallow enough to cross via a series of ancient white stones. The water flows swiftly around them.",
        exits: { 'down': 'endless_stair_bottom', 'southeast': 'lothlorien_border', 'northeast': 'rivendell_hall' },
        items: ['white_river_stone'],
        enemies: []
    },

    celebrant_banks: {
        name: "Banks of the Celebrant",
        description: "Further downstream from the Silverlode, the river Celebrant widens. The banks are covered in thick moss and golden leaves.",
        exits: { 'west': 'mallorn_sanctuary', 'east': 'anduin_confluence', 'north': 'iron_mines_1' },
        items: ['golden_moss'],
        enemies: []
    },

    anduin_confluence: {
        name: "Confluence of Rivers",
        description: "Where the Silverlode meets the Great River Anduin. The waters swirl together, one crystal clear and the other deep and powerful.",
        exits: { 'west': 'celebrant_banks', 'east': 'skinbark_grove', 'northwest': 'iron_mines_1' },
        items: ['river_reeds'],
        enemies: []
    },

    // FANGORN EXPANSION - The Ancient Wood

    fangorn_hidden_path: {
        name: "Hidden Path in Fangorn",
        description: "A narrow trail through the thickest part of the forest. The trees seem to lean in, their branches interlocking overhead like a gothic cathedral.",
        exits: { 'south': 'anduin_approach', 'north': 'the_silent_glade', 'southwest': 'bree_gate', 'east': 'seventh_level' },
        items: ['ancient_bark'],
        enemies: []
    },

    the_silent_glade: {
        name: "The Silent Glade",
        description: "An opening in the forest where no bird sings and the wind does not blow. The silence here is heavy and thick with age.",
        exits: { 'south': 'fangorn_hidden_path', 'north': 'entmoot_circle', 'southeast': 'seventh_level' },
        items: ['ancient_root'],
        enemies: ['huorn']
    },

    entmoot_circle: {
        name: "Entmoot Circle - Derndingle",
        description: "A wide, bowl-shaped clearing surrounded by a high hedge of evergreen trees. This is where the Ents meet to discuss the affairs of the forest.",
        exits: { 'south': 'the_silent_glade', 'northwest': 'entwash_headwaters', 'east': 'entwash_delta', 'northeast': 'west_emnet', 'west': 'weathertop_base', 'north': 'treebeard_cellar' },
        items: ['ent_leaf'],
        enemies: []
    },

    entwash_headwaters: {
        name: "Headwaters of the Entwash",
        description: "Where the Entwash river springs from the roots of the Misty Mountains. The water is cold enough to chill the bone.",
        exits: { 'southeast': 'entmoot_circle', 'east': 'treebeard_cellar', 'south': 'weathertop_base', 'northeast': 'fourth_level' },
        items: ['mountain_crystal'],
        enemies: []
    },

    treebeard_cellar: {
        name: "Treebeard's Storage",
        description: "A large hollow beneath the roots of an enormous oak tree. Stone jars filled with entdraught are kept here.",
        exits: { 'west': 'entwash_headwaters', 'southeast': 'entwash_delta', 'south': 'entmoot_circle', 'southwest': 'weathertop_base' },
        items: ['entdraught', 'stone_jar'],
        enemies: []
    },

    skinbark_grove: {
        name: "Skinbark's Grove",
        description: "The domain of Skinbark, one of the oldest Ents. Many of the trees here have been scarred by orcs, and there is a sense of anger in the soil.",
        exits: { 'west': 'anduin_confluence', 'east': 'leaflock_meadow' },
        items: ['charred_wood'],
        enemies: ['orc_scout']
    },

    leaflock_meadow: {
        name: "Leaflock's Meadow",
        description: "A sunny spot in the forest where Leaflock, an Ent who has become very 'tree-ish', often sleeps. He is almost indistinguishable from the trees around him.",
        exits: { 'west': 'skinbark_grove', 'north': 'westfold_plains' },
        items: ['rare_wildflower'],
        enemies: []
    }
};
