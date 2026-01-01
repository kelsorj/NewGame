// EXPANSION BATCH 5: Gondor & Mordor
// This file contains ~30 new rooms to be merged into rooms.js

export const gondorMordorExpansion = {
    // GONDOR EXPANSION - Kingdom of the South

    ithilien_woods: {
        name: "Woods of Ithilien",
        description: "You walk beneath the fair trees of Ithilien, a garden of Gondor that has not yet fallen to the shadow. The scent of aromatic herbs—thyme, sage, and wild marjoram—fills the air. Flowers bloom in secret glades, and falling streams make music among the stones. It is a place of lingering beauty, watched over by the Rangers who keep the Enemy at bay.",
        exits: { 'north': 'henneth_annun', 'east': 'annuminas_ruins' },
        items: ['herbs', 'wild_berry'],
        enemies: []
    },

    henneth_annun: {
        name: "Henneth Annûn - Window on the West",
        description: "Behind a curtain of thunderous water lies the secret refuge of Henneth Annûn. The cave is cool and dim, lit by torches that burn with a steady flame. Provisions are stacked against the walls, and weapons are well-tended. From the western arch, you can look out through the waterfall at the setting sun, turning the spray into a veil of gold.",
        exits: { 'south': 'ithilien_woods', 'northeast': 'minas_tirith_houses_of_healing', 'west': 'barrow_downs', 'east': 'annuminas_tower', 'northwest': 'elrond_study' },
        items: ['ranger_cloak', 'bow_of_ithilien'],
        enemies: []
    },

    minas_tirith_stables: {
        name: "Stables of Minas Tirith",
        description: "The City Stables are a hive of activity. The smell of hay and horses is comforting and earthy. Great beasts of war stamp in their stalls, while swift messenger horses are groomed by anxious stable-hands. Tack and harness hang from every wall, polished to a shine. This is the lifeline of the city's communication.",
        exits: { 'east': 'east_emnet', 'west': 'lossarnach_valleys', 'northeast': 'mirkwood_depths' },
        items: ['horse_brush'],
        enemies: []
    },

    minas_tirith_houses_of_healing: {
        name: "Houses of Healing",
        description: "In the Hallows of the city, the air is still and fragrant with athelas and crushed herbs. The Houses of Healing are built of white stone, cool and airy. Healers in grey robes move silently between the beds, tending to the wounded with a gentle touch. It is a place where the ravages of war are fought with patience and skill.",
        exits: { 'southwest': 'henneth_annun', 'south': 'citadel_guards_hall' },
        items: ['athelas_leaf', 'bandage'],
        enemies: []
    },

    citadel_guards_hall: {
        name: "Citadel Guards Hall",
        description: "This austere hall serves as the barracks for the Elite Guards of the Tower. The walls are hung with the black and silver livery of the Stewards. The room is impeccably clean, and weapons are racked with military precision. The men here are silent and watchful, their loyalty absolute.",
        exits: { 'north': 'minas_tirith_houses_of_healing', 'east': 'pelargir_port', 'southwest': 'annuminas_tower', 'northeast': 'mines_level1' },
        items: ['silver_helm_crest'],
        enemies: []
    },

    pelargir_port: {
        name: "Port of Pelargir",
        description: "The air here is salty and damp, filled with the cries of gulls. Pelargir is the ancient haven of the Faithful, and its quays are lined with ships of war and trade. Sailors from many lands shout in strange tongues, and crates of exotic goods are stacked high. The Great River Anduin flows past, wide and grey, heading for the sea.",
        exits: { 'west': 'citadel_guards_hall', 'east': 'grey_havens_docks', 'southwest': 'deep_coomb' },
        items: ['sea_shell', 'foreign_coin'],
        enemies: []
    },

    lossarnach_valleys: {
        name: "Valleys of Lossarnach",
        description: "You have entered the warm, sun-filled valleys of Lossarnach. The air is sweet with the scent of blossoms from the miles of orchards that cover the slopes. It is a land of peace and plenty, where the dark shadow of the East seems distant. White houses nestle among the trees, and the sound of bees is everywhere.",
        exits: { 'east': 'minas_tirith_stables', 'west': 'mt_level_6', 'north': 'aldburg', 'northwest': 'snowbourn_banks', 'southwest': 'gap_of_rohan' },
        items: ['apple', 'pear'],
        enemies: []
    },

    // MORDOR EXPANSION - Land of Shadow

    minas_morgul_gates: {
        name: "Gates of Minas Morgul",
        description: "A terror that freezes the blood radiates from this place. The city of the Ringwraiths glows with a corpse-light that illuminates nothing. The bridge over the Morgulduin is guarded by grotesque statues that seem to writhe in the corner of your eye. The air smells of decay and death. To enter is madness.",
        exits: { 'south': 'house_of_stewards', 'north': 'minas_morgul_interior', 'northwest': 'fornost_approach' },
        items: ['cursed_coin'],
        enemies: ['morgul_orc']
    },

    minas_morgul_interior: {
        name: "Interior of Minas Morgul",
        description: "The streets of the Dead City are silent, save for the echo of your own fearful footsteps. The buildings are twisted into impossible shapes, seeming to leer at you. A sickly mist clings to the ground. You feel thousands of unseen eyes watching, and the corruption of the place presses against your mind like a physical weight.",
        exits: { 'south': 'minas_morgul_gates', 'north': 'gorgoroth_plateau', 'southwest': 'whitwell', 'northeast': 'royal_armory', 'southeast': 'mount_doom_summit' },
        items: ['morgul_blade_shard'],
        enemies: ['nazgul_wraith']
    },

    gorgoroth_plateau: {
        name: "Plateau of Gorgoroth",
        description: "You stand on the vast, ash-strewn plain of Gorgoroth. The air is choked with smog and the fumes of the Mountain of Fire. Useable light is dim and red. All around, the fires of industry burn in deep pits, and the armies of Mordor drill endlessly in the dust. It is a land where hope has died.",
        exits: { 'south': 'minas_morgul_interior', 'west': 'mount_doom_sammath_naur', 'southeast': 'smelting_chambers' },
        items: ['scorched_bone'],
        enemies: ['orc_soldier', 'orc_soldier']
    },

    mount_doom_sammath_naur: {
        name: "Sammath Naur - Chambers of Fire",
        description: "The heat here is terrible, searing the lungs. You stand at the very crack of Doom, where the fires of the earth bubble and roar. This is the only place where the One Ring can be unmade. The weight of the Ring (if you had it) would be unbearable here. The fate of the world hangs over this precipice.",
        exits: { 'east': 'gorgoroth_plateau', 'west': 'barad_dur_throne_room' },
        items: ['magma_rock'],
        enemies: ['gollum_shadow']
    },

    barad_dur_throne_room: {
        name: "Throne Room of Barad-dûr",
        description: "You stand before the throne of the Dark Lord Sauron. The darkness here is absolute, pierced only by the burning red light of the Great Eye. The sheer malevolence of his presence forces you to your knees. To look upon him is to know despair. This is the center of the shadow that threatens to swallow Middle-earth.",
        exits: { 'east': 'mount_doom_sammath_naur', 'west': 'durthang_fortress', 'northwest': 'scary', 'northeast': 'staddle' },
        items: ['eye_of_sauron_artifact'],
        enemies: ['sauron_embodiment']
    },

    durthang_fortress: {
        name: "Durthang Fortress",
        description: "An ancient fortress of Gondor, long since captured and corrupted. It sits high in the mountains, overlooking the plains of Gorgoroth. The walls are crumbling but still strong, manned by orcs who hate the light. It serves as a grim reminder that even the strongest defenses can fall.",
        exits: { 'east': 'barad_dur_throne_room', 'west': 'morgul_vale', 'northeast': 'mayor_office', 'southwest': 'morgul_pass' },
        items: ['black_armor_piece'],
        enemies: ['orc_captain']
    }
};
