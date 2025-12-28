// EXPANSION BATCH 5: Gondor & Mordor
// This file contains ~30 new rooms to be merged into rooms.js

export const gondorMordorExpansion = {
    // GONDOR EXPANSION - Kingdom of the South

    ithilien_woods: {
        name: "Woods of Ithilien",
        description: "A fair land of trees and flowers, even so close to the shadow of Mordor. The air is filled with the scent of herbs and resins.",
        exits: { 'north': 'henneth_annun', 'east': 'annuminas_ruins' },
        items: ['herbs', 'wild_berry'],
        enemies: []
    },

    henneth_annun: {
        name: "Henneth Annûn - Window on the West",
        description: "A secret refuge of the Rangers of Ithilien, hidden behind a thin curtain of falling water. The cave is cool and dry.",
        exits: { 'south': 'ithilien_woods', 'northeast': 'minas_tirith_houses_of_healing', 'west': 'barrow_downs', 'east': 'annuminas_tower', 'northwest': 'elrond_study' },
        items: ['ranger_cloak', 'bow_of_ithilien'],
        enemies: []
    },

    minas_tirith_stables: {
        name: "Stables of Minas Tirith",
        description: "The great stables on the first level of the city. Strong horses of Gondor are kept here, ready for the messengers of the King.",
        exits: { 'east': 'east_emnet', 'west': 'lossarnach_valleys', 'northeast': 'mirkwood_depths' },
        items: ['horse_brush'],
        enemies: []
    },

    minas_tirith_houses_of_healing: {
        name: "Houses of Healing",
        description: "A place of quiet and rest on the sixth level of the city. The scent of athelas is strong here. Many wounded from the war are cared for by the healers.",
        exits: { 'southwest': 'henneth_annun', 'south': 'citadel_guards_hall' },
        items: ['athelas_leaf', 'bandage'],
        enemies: []
    },

    citadel_guards_hall: {
        name: "Citadel Guards Hall",
        description: "A hall on the seventh level, near the White Tower. The Guards of the Citadel, in their black livery and silver helms, stand in silent vigilance.",
        exits: { 'north': 'minas_tirith_houses_of_healing', 'east': 'pelargir_port', 'southwest': 'annuminas_tower', 'northeast': 'mines_level1' },
        items: ['silver_helm_crest'],
        enemies: []
    },

    pelargir_port: {
        name: "Port of Pelargir",
        description: "The great port of Gondor on the Anduin. Ships from across the sea dock here, bringing goods and news from afar.",
        exits: { 'west': 'citadel_guards_hall', 'east': 'grey_havens_docks', 'southwest': 'deep_coomb' },
        items: ['sea_shell', 'foreign_coin'],
        enemies: []
    },

    lossarnach_valleys: {
        name: "Valleys of Lossarnach",
        description: "The 'flower-valley' of Gondor. It is a rich land of orchards and gardens, providing food for the capital.",
        exits: { 'east': 'minas_tirith_stables', 'west': 'sixth_level', 'north': 'aldburg', 'northwest': 'snowbourn_banks', 'southwest': 'gap_of_rohan' },
        items: ['apple', 'pear'],
        enemies: []
    },

    // MORDOR EXPANSION - Land of Shadow

    minas_morgul_gates: {
        name: "Gates of Minas Morgul",
        description: "The terrifying entrance to the city of the Nazgûl. The bridge is flanked by huge, carven figures with white, empty eyes. A sickly green light glows from the walls.",
        exits: { 'south': 'house_of_stewards', 'north': 'minas_morgul_interior', 'northwest': 'fornost_approach' },
        items: ['cursed_coin'],
        enemies: ['morgul_orc']
    },

    minas_morgul_interior: {
        name: "Interior of Minas Morgul",
        description: "A city of nightmare. The buildings are twisted and silent, and the air is cold with a deathly chill.",
        exits: { 'south': 'minas_morgul_gates', 'north': 'gorgoroth_plateau', 'southwest': 'whitwell', 'northeast': 'royal_armory', 'southeast': 'mount_doom_summit' },
        items: ['morgul_blade_shard'],
        enemies: ['nazgul_wraith']
    },

    gorgoroth_plateau: {
        name: "Plateau of Gorgoroth",
        description: "A vast, blasted plain of ash and rock. The air is thick with smoke from Mount Doom. Orc-camps are scattered across the desert.",
        exits: { 'south': 'minas_morgul_interior', 'west': 'mount_doom_sammath_naur', 'southeast': 'smelting_chambers' },
        items: ['scorched_bone'],
        enemies: ['orc_soldier', 'orc_soldier']
    },

    mount_doom_sammath_naur: {
        name: "Sammath Naur - Chambers of Fire",
        description: "The heart of the volcano. A narrow path leads over the Crack of Doom, where the One Ring was forged. The heat is unbearable.",
        exits: { 'east': 'gorgoroth_plateau', 'west': 'barad_dur_throne_room' },
        items: ['magma_rock'],
        enemies: ['gollum_shadow']
    },

    barad_dur_throne_room: {
        name: "Throne Room of Barad-dûr",
        description: "The seat of the Dark Lord. A massive shadow looms over the throne. The Eye is always watching.",
        exits: { 'east': 'mount_doom_sammath_naur', 'west': 'durthang_fortress', 'northwest': 'scary', 'northeast': 'staddle' },
        items: ['eye_of_sauron_artifact'],
        enemies: ['sauron_embodiment']
    },

    durthang_fortress: {
        name: "Durthang Fortress",
        description: "An old fortress on the northern edge of the Ephel Dúath, now used as a major garrison for orcs.",
        exits: { 'east': 'barad_dur_throne_room', 'west': 'morgul_vale', 'northeast': 'mayor_office', 'southwest': 'morgul_pass' },
        items: ['black_armor_piece'],
        enemies: ['orc_captain']
    }
};
