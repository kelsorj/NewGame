// EXPANSION BATCH 5: Gondor & Mordor
// This file contains ~30 new rooms to be merged into rooms.js

export const gondorMordorExpansion = {
    // GONDOR EXPANSION - Kingdom of the South

    ithilien_woods: {
        name: "Woods of Ithilien",
        description: "A fair land of trees and flowers, even so close to the shadow of Mordor. The air is filled with the scent of herbs and resins.",
        exits: { north: 'tunnel_exit', south: 'morgul_vale', east: 'minas_morgul_gates', west: 'pelargir_port', northeast: 'osgiliath_ruins', northwest: 'white_tower', southeast: 'cirith_ungol', southwest: 'dimrill_dale' },
        items: ['herbs', 'wild_berry'],
        enemies: []
    },

    henneth_annun: {
        name: "Henneth Annûn - Window on the West",
        description: "A secret refuge of the Rangers of Ithilien, hidden behind a thin curtain of falling water. The cave is cool and dry.",
        exits: { north: 'dimrill_dale', northeast: 'morgul_vale', southeast: 'morgul_pass', southwest: 'lothlorien_border' },
        items: ['ranger_cloak', 'bow_of_ithilien'],
        enemies: []
    },

    minas_tirith_stables: {
        name: "Stables of Minas Tirith",
        description: "The great stables on the first level of the city. Strong horses of Gondor are kept here, ready for the messengers of the King.",
        exits: { south: 'first_level' },
        items: ['horse_brush'],
        enemies: []
    },

    minas_tirith_houses_of_healing: {
        name: "Houses of Healing",
        description: "A place of quiet and rest on the sixth level of the city. The scent of athelas is strong here. Many wounded from the war are cared for by the healers.",
        exits: { north: 'third_level', south: 'bridge_of_khazad_dum', east: 'citadel_guards_hall', west: 'hall_of_kings', northeast: 'sixth_level', northwest: 'goblin_warren', southeast: 'mithril_depths_1', southwest: 'the_unending_stair_middle' },
        items: ['athelas_leaf', 'bandage'],
        enemies: []
    },

    citadel_guards_hall: {
        name: "Citadel Guards Hall",
        description: "A hall on the seventh level, near the White Tower. The Guards of the Citadel, in their black livery and silver helms, stand in silent vigilance.",
        exits: { north: 'sixth_level', south: 'mithril_depths_1', east: 'mithril_depths_2', west: 'minas_tirith_houses_of_healing', northwest: 'third_level', southeast: 'pelennor_fields', southwest: 'bridge_of_khazad_dum' },
        items: ['silver_helm_crest'],
        enemies: []
    },

    pelargir_port: {
        name: "Port of Pelargir",
        description: "The great port of Gondor on the Anduin. Ships from across the sea dock here, bringing goods and news from afar.",
        exits: { north: 'white_tower', south: 'dimrill_dale', east: 'ithilien_woods', northeast: 'tunnel_exit', northwest: 'minas_tirith_gates', southeast: 'morgul_vale' },
        items: ['sea_shell', 'foreign_coin'],
        enemies: []
    },

    lossarnach_valleys: {
        name: "Valleys of Lossarnach",
        description: "The 'flower-valley' of Gondor. It is a rich land of orchards and gardens, providing food for the capital.",
        exits: { south: 'iron_mines_1', northwest: 'fifth_level' },
        items: ['apple', 'pear'],
        enemies: []
    },

    // MORDOR EXPANSION - Land of Shadow

    minas_morgul_gates: {
        name: "Gates of Minas Morgul",
        description: "The terrifying entrance to the city of the Nazgûl. The bridge is flanked by huge, carven figures with white, empty eyes. A sickly green light glows from the walls.",
        exits: { north: 'osgiliath_ruins', south: 'cirith_ungol', west: 'ithilien_woods', northeast: 'durthang_fortress', northwest: 'tunnel_exit', southeast: 'mordor_plains', southwest: 'morgul_vale' },
        items: ['cursed_coin'],
        enemies: ['morgul_orc']
    },

    minas_morgul_interior: {
        name: "Interior of Minas Morgul",
        description: "A city of nightmare. The buildings are twisted and silent, and the air is cold with a deathly chill.",
        exits: { south: 'durthang_fortress', west: 'east_gate_moria', northwest: 'rath_dinen', southwest: 'osgiliath_ruins' },
        items: ['morgul_blade_shard'],
        enemies: ['nazgul_wraith']
    },

    gorgoroth_plateau: {
        name: "Plateau of Gorgoroth",
        description: "A vast, blasted plain of ash and rock. The air is thick with smoke from Mount Doom. Orc-camps are scattered across the desert.",
        exits: { north: 'mordor_plains', south: 'mount_doom_approach', west: 'shelob_lair', northwest: 'cirith_ungol', east: 'barad_dur_approach' },
        items: ['scorched_bone'],
        enemies: ['orc_soldier', 'orc_soldier']
    },

    mount_doom_sammath_naur: {
        name: "Sammath Naur - Chambers of Fire",
        description: "The heart of the volcano. A narrow path leads over the Crack of Doom, where the One Ring was forged. The heat is unbearable.",
        exits: { north: 'mount_doom_summit' },
        items: ['magma_rock'],
        enemies: ['gollum_shadow']
    },

    barad_dur_throne_room: {
        name: "Throne Room of Barad-dûr",
        description: "The seat of the Dark Lord. A massive shadow looms over the throne. The Eye is always watching.",
        exits: { north: 'barad_dur_chamber', northeast: 'barad_dur_base' },
        items: ['eye_of_sauron_artifact'],
        enemies: ['sauron_embodiment']
    },

    durthang_fortress: {
        name: "Durthang Fortress",
        description: "An old fortress on the northern edge of the Ephel Dúath, now used as a major garrison for orcs.",
        exits: { north: 'minas_morgul_interior', west: 'osgiliath_ruins', northwest: 'east_gate_moria', southwest: 'minas_morgul_gates' },
        items: ['black_armor_piece'],
        enemies: ['orc_captain']
    }
};
