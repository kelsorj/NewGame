// EXPANSION BATCH 3: Lothlórien & Fangorn
// This file contains ~30 new rooms to be merged into rooms.js

export const lothlorienFangornExpansion = {
    // LOTHLÓRIEN EXPANSION - The Heart of Elvendom

    galadhrm_flet_1: {
        name: "Galadhrim Flet - Western Watch",
        description: "The Galadhrim Flet is a high platform built into the branches of a golden mallorn tree, one of the many watch posts that guard the borders of Lothlórien. The platform is constructed with elven artistry, its planks fitted together so perfectly that they seem to have grown from the tree itself. From here, the Sentinels of Lórien keep watch over the western borders, their keen eyes scanning the lands beyond for any sign of danger. The view is breathtaking—you can see for miles across the Golden Wood, with the mallorn trees stretching out like a sea of gold and silver. The air is clear and pure, carrying the scent of elanor flowers and the subtle magic that permeates all of Lothlórien. The platform is large enough for several elves to stand comfortably, and you can see where weapons and supplies are stored in cleverly hidden compartments. Rope ladders and walkways connect this flet to others in the surrounding trees, creating a network of elevated paths that allow the Galadhrim to move through their realm without ever touching the ground. This is a place of vigilance and beauty, where the duty of watchfulness is combined with the natural splendor of the elven realm.",
        exits: { 'northwest': 'fornost_ruins', 'southeast': 'gorgoroth_plateau' },
        items: ['elven_bow', 'elven_arrow'],
        enemies: []
    },

    niphredil_meadow: {
        name: "Meadow of Niphredil",
        description: "A beautiful meadow filled with pale niphredil flowers that seem to glow with their own light. A small stream of crystalline water winds through the grass.",
        exits: { 'southwest': 'fornost_temple', 'northeast': 'mount_doom_sammath_naur' },
        items: ['niphredil_flower'],
        enemies: []
    },

    singing_groves: {
        name: "Singing Groves",
        description: "A grove of trees where the wind through the leaves sounds like distant elven voices. It is a place for meditation and song.",
        exits: { 'northwest': 'fornost_palace', 'southeast': 'barad_dur_throne_room' },
        items: ['elven_flute'],
        enemies: []
    },

    elven_craft_hall: {
        name: "Hall of the Galadhrim Craftsmen",
        description: "A large flet where elven artisans craft their legendary ropes, cloaks, and jewelry. The work is done with such grace it seems like magic.",
        exits: { 'east': 'fornost_keep', 'west': 'durthang_fortress', 'northwest': 'grey_havens_docks', 'southwest': 'havens_approach' },
        items: ['elven_rope', 'silver_thimble'],
        enemies: []
    },

    mallorn_sanctuary: {
        name: "The Mallorn Sanctuary",
        description: "A quiet space deep within the city of trees, reserved for those seeking healing and rest. The golden light here is particularly strong.",
        exits: { 'southeast': 'fornost_keep', 'northwest': 'mirkwood_edge' },
        items: ['athelas_extract', 'healing_herbs'],
        enemies: []
    },

    silverlode_crossing: {
        name: "Silverlode Crossing",
        description: "A place where the river Silverlode is shallow enough to cross via a series of ancient white stones. The water flows swiftly around them.",
        exits: { 'northeast': 'fornost_keep', 'southwest': 'mirkwood_path_1' },
        items: ['white_river_stone'],
        enemies: []
    },

    celebrant_banks: {
        name: "Banks of the Celebrant",
        description: "Further downstream from the Silverlode, the river Celebrant widens. The banks are covered in thick moss and golden leaves.",
        exits: { 'southeast': 'annuminas_approach', 'northwest': 'mirkwood_path_2' },
        items: ['golden_moss'],
        enemies: []
    },

    anduin_confluence: {
        name: "Confluence of Rivers",
        description: "Where the Silverlode meets the Great River Anduin. The waters swirl together, one crystal clear and the other deep and powerful.",
        exits: { 'northeast': 'annuminas_ruins', 'southwest': 'mirkwood_depths' },
        items: ['river_reeds'],
        enemies: []
    },

    // FANGORN EXPANSION - The Ancient Wood

    fangorn_hidden_path: {
        name: "Hidden Path in Fangorn",
        description: "A narrow trail through the thickest part of the forest. The trees seem to lean in, their branches interlocking overhead like a gothic cathedral.",
        exits: { 'southeast': 'annuminas_tower', 'northwest': 'rhosgobel' },
        items: ['ancient_bark'],
        enemies: []
    },

    the_silent_glade: {
        name: "The Silent Glade",
        description: "An opening in the forest where no bird sings and the wind does not blow. The silence here is heavy and thick with age.",
        exits: { 'northeast': 'lake_evendim', 'southwest': 'elf_path_entrance' },
        items: ['ancient_root'],
        enemies: ['huorn']
    },

    entmoot_circle: {
        name: "Entmoot Circle - Derndingle",
        description: "A wide, bowl-shaped clearing surrounded by a high hedge of evergreen trees. This is where the Ents meet to discuss the affairs of the forest.",
        exits: { 'south': 'rivendell_gardens', 'north': 'thranduil_halls_gate', 'northeast': 'thranduil_halls_interior', 'northwest': 'long_lake_path' },
        items: ['ent_leaf'],
        enemies: []
    },

    entwash_headwaters: {
        name: "Headwaters of the Entwash",
        description: "Where the Entwash river springs from the roots of the Misty Mountains. The water is cold enough to chill the bone.",
        exits: { 'southwest': 'rivendell_gardens', 'northeast': 'lake_town_docks' },
        items: ['mountain_crystal'],
        enemies: []
    },

    treebeard_cellar: {
        name: "Treebeard's Storage",
        description: "A large hollow beneath the roots of an enormous oak tree. Stone jars filled with entdraught are kept here.",
        exits: { 'southeast': 'rivendell_gardens', 'northwest': 'lonely_mountain_approach' },
        items: ['entdraught', 'stone_jar'],
        enemies: []
    },

    skinbark_grove: {
        name: "Skinbark's Grove",
        description: "The domain of Skinbark, one of the oldest Ents. Many of the trees here have been scarred by orcs, and there is a sense of anger in the soil.",
        exits: { 'southwest': 'hall_of_fire_guest', 'northeast': 'erebor_gates' },
        items: ['charred_wood'],
        enemies: ['orc_scout']
    },

    leaflock_meadow: {
        name: "Leaflock's Meadow",
        description: "A sunny spot in the forest where Leaflock, an Ent who has become very 'tree-ish', often sleeps. He is almost indistinguishable from the trees around him.",
        exits: { 'southeast': 'elrond_study', 'northwest': 'erebor_great_hall' },
        items: ['rare_wildflower'],
        enemies: []
    }
};
