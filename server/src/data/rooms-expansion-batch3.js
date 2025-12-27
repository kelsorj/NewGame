// EXPANSION BATCH 3: Lothlórien & Fangorn
// This file contains ~30 new rooms to be merged into rooms.js

export const lothlorienFangornExpansion = {
    // LOTHLÓRIEN EXPANSION - The Heart of Elvendom

    galadhrm_flet_1: {
        name: "Galadhrim Flet - Western Watch",
        description: "A high platform built into a golden mallorn tree. From here, the Sentinels of Lórien keep watch over the western borders. The air is clear and carries the scent of elanor flowers.",
        exits: {
            east: 'cerin_amroth',
            down: 'lothlorien_border'
        },
        items: ['elven_bow', 'elven_arrow'],
        enemies: []
    },

    niphredil_meadow: {
        name: "Meadow of Niphredil",
        description: "A beautiful meadow filled with pale niphredil flowers that seem to glow with their own light. A small stream of crystalline water winds through the grass.",
        exits: {
            north: 'cerin_amroth',
            south: 'singing_groves'
        },
        items: ['niphredil_flower'],
        enemies: []
    },

    singing_groves: {
        name: "Singing Groves",
        description: "A grove of trees where the wind through the leaves sounds like distant elven voices. It is a place for meditation and song.",
        exits: {
            north: 'niphredil_meadow',
            east: 'caras_galadhon'
        },
        items: ['elven_flute'],
        enemies: []
    },

    elven_craft_hall: {
        name: "Hall of the Galadhrim Craftsmen",
        description: "A large flet where elven artisans craft their legendary ropes, cloaks, and jewelry. The work is done with such grace it seems like magic.",
        exits: {
            down: 'caras_galadhon'
        },
        items: ['elven_rope', 'silver_thimble'],
        enemies: []
    },

    mallorn_sanctuary: {
        name: "The Mallorn Sanctuary",
        description: "A quiet space deep within the city of trees, reserved for those seeking healing and rest. The golden light here is particularly strong.",
        exits: {
            west: 'caras_galadhon'
        },
        items: ['athelas_extract', 'healing_herbs'],
        enemies: []
    },

    silverlode_crossing: {
        name: "Silverlode Crossing",
        description: "A place where the river Silverlode is shallow enough to cross via a series of ancient white stones. The water flows swiftly around them.",
        exits: {
            west: 'silverlode_banks',
            east: 'dimrill_dale'
        },
        items: ['white_river_stone'],
        enemies: []
    },

    celebrant_banks: {
        name: "Banks of the Celebrant",
        description: "Further downstream from the Silverlode, the river Celebrant widens. The banks are covered in thick moss and golden leaves.",
        exits: {
            north: 'silverlode_banks',
            south: 'anduin_confluence'
        },
        items: ['golden_moss'],
        enemies: []
    },

    anduin_confluence: {
        name: "Confluence of Rivers",
        description: "Where the Silverlode meets the Great River Anduin. The waters swirl together, one crystal clear and the other deep and powerful.",
        exits: {
            north: 'celebrant_banks',
            east: 'anduin_approach'
        },
        items: ['river_reeds'],
        enemies: []
    },

    // FANGORN EXPANSION - The Ancient Wood

    fangorn_hidden_path: {
        name: "Hidden Path in Fangorn",
        description: "A narrow trail through the thickest part of the forest. The trees seem to lean in, their branches interlocking overhead like a gothic cathedral.",
        exits: {
            north: 'fangorn_border',
            south: 'the_silent_glade'
        },
        items: ['ancient_bark'],
        enemies: []
    },

    the_silent_glade: {
        name: "The Silent Glade",
        description: "An opening in the forest where no bird sings and the wind does not blow. The silence here is heavy and thick with age.",
        exits: {
            north: 'fangorn_hidden_path',
            east: 'wellinghall'
        },
        items: ['ancient_root'],
        enemies: ['huorn']
    },

    entmoot_circle: {
        name: "Entmoot Circle - Derndingle",
        description: "A wide, bowl-shaped clearing surrounded by a high hedge of evergreen trees. This is where the Ents meet to discuss the affairs of the forest.",
        exits: {
            west: 'wellinghall',
            north: 'fangorn_depths'
        },
        items: ['ent_leaf'],
        enemies: []
    },

    entwash_headwaters: {
        name: "Headwaters of the Entwash",
        description: "Where the Entwash river springs from the roots of the Misty Mountains. The water is cold enough to chill the bone.",
        exits: {
            north: 'fangorn_depths',
            south: 'entwash'
        },
        items: ['mountain_crystal'],
        enemies: []
    },

    treebeard_cellar: {
        name: "Treebeard's Storage",
        description: "A large hollow beneath the roots of an enormous oak tree. Stone jars filled with entdraught are kept here.",
        exits: {
            up: 'wellinghall'
        },
        items: ['entdraught', 'stone_jar'],
        enemies: []
    },

    skinbark_grove: {
        name: "Skinbark's Grove",
        description: "The domain of Skinbark, one of the oldest Ents. Many of the trees here have been scarred by orcs, and there is a sense of anger in the soil.",
        exits: {
            west: 'fangorn_depths'
        },
        items: ['charred_wood'],
        enemies: ['orc_scout']
    },

    leaflock_meadow: {
        name: "Leaflock's Meadow",
        description: "A sunny spot in the forest where Leaflock, an Ent who has become very 'tree-ish', often sleeps. He is almost indistinguishable from the trees around him.",
        exits: {
            east: 'fangorn_eaves'
        },
        items: ['rare_wildflower'],
        enemies: []
    }
};
