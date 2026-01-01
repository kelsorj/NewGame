// EXPANSION BATCH 4: Rohan
// This file contains ~30 new rooms to be merged into rooms.js

export const rohanExpansion = {
    // ROHAN EXPANSION - Land of the Mark

    westfold_plains: {
        name: "Westfold Plains",
        description: "The sea of grass stretches endlessly to the horizon, rolling in waves under the wind. To the south, the White Mountains rise like a jagged wall, their peaks capped with eternal snow. This is the domain of the horse-lords, a land of wide skies and thundering hooves. Far in the distance, you can see the smoke of crofts and the dark specks of herds grazing.",
        exits: { 'south': 'leaflock_meadow', 'north': 'eastfold_plains' },
        items: ['wild_grass'],
        enemies: ['warg_rider']
    },

    eastfold_plains: {
        name: "Eastfold Plains",
        description: "The grass here is lush and tall, fed by the waters of the Entwash. Small farming settlements dot the landscape, protected by wooden palisades. The land is greener and more settled than the Westfold, but the shadow of the East still reaches here. The wind sometimes carries the foul reek of the marshes.",
        exits: { 'south': 'westfold_plains', 'north': 'starkhorn_foothills' },
        items: ['sheaf_of_wheat'],
        enemies: []
    },

    entwash_delta: {
        name: "Entwash Delta",
        description: "The river breaks into a thousand confusing channels, turning the land into a maze of reeds and pools. Fog hangs thick over the water, obscuring the path. Birds cry mournfully in the mist, and the ground sucks at your boots. It is a treacherous place, easy to get lost in, and full of hidden dangers.",
        exits: { 'northwest': 'treebeard_cellar', 'south': 'elf_path_entrance', 'west': 'entmoot_circle', 'northeast': 'mt_level_6', 'southeast': 'rohan_plains' },
        items: ['river_reed'],
        enemies: ['marsh_adder']
    },

    aldburg: {
        name: "Aldburg",
        description: "Aldburg is the ancient capital of the Eastfold, a stronghold of stone and timber perched on a hill. It is older than Edoras, and its walls have withstood many sieges. The people here are proud and fierce, loyal to the memory of Eorl. The wind whistles through the narrow streets, carrying the sound of horses and the smell of roasting meats.",
        exits: { 'east': 'thranduil_halls_interior', 'west': 'snowbourn_banks', 'south': 'lossarnach_valleys', 'southwest': 'mt_level_6', 'northeast': 'white_tower', 'northwest': 'pelennor_fields', 'north': 'minas_tirith_gates' },
        items: ['ancient_rohirric_coin'],
        enemies: []
    },

    snowbourn_banks: {
        name: "Banks of the Snowbourn",
        description: "The Snowbourn river rushes down from the Starkhorn, its water icy cold and clear as glass. Willows weep over the banks, their branches trailing in the swift current. The sound of the river is a constant roar here, drowning out the noises of the plains. It is a lifeline of fresh water in a dry land.",
        exits: { 'east': 'aldburg', 'west': 'dunharrow_firtree_grove', 'southeast': 'lossarnach_valleys', 'south': 'mt_level_6', 'northwest': 'osgiliath_ruins', 'northeast': 'minas_tirith_gates' },
        items: ['river_stone'],
        enemies: []
    },

    starkhorn_foothills: {
        name: "Foothills of the Starkhorn",
        description: "You climb into the rocky foothills of the Starkhorn, one of the great peaks of the White Mountains. The air grows thin and cold. Scraggy pines cling to the slopes, and loose shale scuffs under your boots. The shadow of the mountain falls long over the path, and a sense of foreboding grows as you ascend.",
        exits: { 'south': 'eastfold_plains', 'north': 'dimholt_road' },
        items: ['mountain_flower'],
        enemies: []
    },

    dimholt_road: {
        name: "The Dimholt Road",
        description: "A dark, ancient road runs beneath the trees, leading towards the Haunted Mountain. Standing stones, carved with worn figures, mark the way like silent sentinels. The forest is unnaturally quiet here; no birds sing, and even the wind seems afraid to whisper. This is the path to the Paths of the Dead.",
        exits: { 'south': 'starkhorn_foothills', 'west': 'deeping_stream_upper' },
        items: [],
        enemies: ['ghostly_whisper']
    },

    dunharrow_firtree_grove: {
        name: "Fir-tree Grove - Dunharrow",
        description: "A gloomy grove of black fir trees stands near the entrance to the hold of Dunharrow. The branches are thick and interlocked, creating a permanent twilight beneath them. The ground is covered in a thick layer of needles that muffles your footsteps. It feels like a place where secrets are kept.",
        exits: { 'east': 'snowbourn_banks', 'south': 'west_emnet', 'west': 'mt_level_3', 'northwest': 'mordor_plains' },
        items: ['fir_cone'],
        enemies: []
    },

    hidden_valley_white_mountains: {
        name: "Hidden Valley in the White Mountains",
        description: "Tucked away high in the mountains is a small, green valley, sheltered from the winds and the eyes of the world. A spring of sweet water bubbles from a rock, feeding a patch of vibrant flowers. It is a rare place of peace in a harsh land, a sanctuary for the weary traveler.",
        exits: { 'down': 'mount_doom_summit', 'north': 'lonely_mountain_approach' },
        items: ['sweet_water'],
        enemies: []
    },

    deeping_stream_upper: {
        name: "Upper Deeping Stream",
        description: "The stream cuts a deep gorge through the rock here, churning white as it crashes over boulders. The walls of the gorge rise high on either side, blocking out the sun. The air is filled with the roar of the water and the spray that wets your face. It is a wild and dangerous place.",
        exits: { 'east': 'dimholt_road', 'north': 'hornburg_armory', 'southwest': 'the_unending_stair_middle' },
        items: ['crystal_pebble'],
        enemies: []
    },

    hornburg_armory: {
        name: "Hornburg Armory",
        description: "Rows of spears, shields, and helms line the walls of this sturdy stone chamber. The smell of oil and cold iron is strong. This is where the defenders of Helm's Deep arm themselves before battle. Though many weapons are gone, taken by the soldiers, enough remain to outfit a small company.",
        exits: { 'south': 'deeping_stream_upper', 'northwest': 'deep_coomb', 'southwest': 'goblin_ward' },
        items: ['rohirric_spear', 'round_shield'],
        enemies: []
    },

    deep_coomb: {
        name: "The Deep Coomb",
        description: "The valley opens up before the Hornburg, a wide green bowl surrounded by cliffs. The Deeping Stream flows through the center. This was the killing field during the Battle of the Hornburg, and the earth here is surely soaked in the blood of Orcs. Now, it is silent, offering a clear view of the fortress walls.",
        exits: { 'southeast': 'hornburg_armory', 'west': 'wold_of_rohan', 'northwest': 'lake_evendim', 'southwest': 'annuminas_ruins', 'northeast': 'pelargir_port' },
        items: ['broken_shield'],
        enemies: ['uruk_hai_scout']
    },

    west_emnet: {
        name: "West Emnet",
        description: "A boundless ocean of grass rolling under the wide sky. This is the heart of the horse-country, where the herds of the Rohirrim roam free. There are no roads here, only the paths made by animals and the Riders. The wind is constant, singing in the grass. It creates a feeling of immense freedom and space.",
        exits: { 'north': 'dunharrow_firtree_grove', 'southeast': 'gap_of_rohan', 'southwest': 'entmoot_circle', 'east': 'mt_level_6', 'northwest': 'mt_level_5' },
        items: ['wild_horse_hair'],
        enemies: ['wild_horse']
    },

    wold_of_rohan: {
        name: "The Wold",
        description: "The Wold is a stark, upland region of rocky hills and brown grass. It is colder here than in the rest of Rohan, exposed to the northern winds. Few live in this desolate country, save for hardy shepherds and the occasional patrol of Riders. The emptiness of the land is both beautiful and melancholic.",
        exits: { 'east': 'deep_coomb', 'south': 'ithilien_woods', 'north': 'hall_of_fire_guest' },
        items: ['ancient_arrowhead'],
        enemies: ['orc_raider']
    }
};
