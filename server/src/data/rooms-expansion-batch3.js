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
        description: "You walk through a sea of pale white niphredil flowers, the 'snowdrop' of the elves. They glow with a soft, inner luminescence, reminding you of starlight caught in earthly forms. A crystal-clear stream meanders through the green grass, its gentle babble the only sound in this tranquil sanctuary. It was here that Arwen Undómiel once walked, and the memory of her beauty lingers.",
        exits: { 'north': 'galadhrm_flet_1', 'south': 'singing_groves', 'west': 'bombadil_garden' },
        items: ['niphredil_flower'],
        enemies: []
    },

    singing_groves: {
        name: "Singing Groves",
        description: "The mallorn trees here are ancient, their roots deep and their branches high. The wind passing through the golden leaves creates a sound like a chorus of distant voices, singing a song of sorrow and beauty that has no words. Sitting here, one feels the weight of the ages slip away, replaced by a profound sense of connection to the woods.",
        exits: { 'north': 'niphredil_meadow', 'south': 'elven_craft_hall', 'northeast': 'annuminas_approach', 'southwest': 'bucklebury', 'southeast': 'iron_mines_2' },
        items: ['elven_flute'],
        enemies: []
    },

    elven_craft_hall: {
        name: "Hall of the Galadhrim Craftsmen",
        description: "This spacious flet is the heart of creativity in Lothlórien. Elven artisans work here with materials of the wood—mallorn wood, silver bark, and spider-silk. There are no heavy hammers or roaring fires; instead, there is the quiet hum of concentration and the gentle shaping of matter through song and skill. The items made here are more than mere objects; they are works of art imbued with the spirit of the maker.",
        exits: { 'north': 'singing_groves', 'south': 'mallorn_sanctuary', 'west': 'bucklebury', 'southeast': 'iron_mines_1' },
        items: ['elven_rope', 'silver_thimble'],
        enemies: []
    },

    mallorn_sanctuary: {
        name: "The Mallorn Sanctuary",
        description: "Deep within the heart of the Golden Wood lies this secluded glade. The light here is pure gold, filtering through layers of yellow leaves. It is said that time flows differently here, and wounds—both of the body and the spirit—heal at a miraculous pace. The silence is a physical presence, warm and embracing.",
        exits: { 'north': 'elven_craft_hall', 'east': 'celebrant_banks', 'northwest': 'mithril_depths_1', 'northeast': 'iron_mines_1' },
        items: ['athelas_extract', 'healing_herbs'],
        enemies: []
    },

    silverlode_crossing: {
        name: "Silverlode Crossing",
        description: "The rushing waters of the Silverlode foam around a series of ancient white stepping stones. The water is achingly cold and runs swift and deep between the stones. Crossing requires balance and nerve. On the far bank, the golden trees of Lothlórien begin to thin, giving way to the wilder lands of the dimrill dale.",
        exits: { 'down': 'endless_stair_bottom', 'southeast': 'lothlorien_border', 'northeast': 'rivendell_hall' },
        items: ['white_river_stone'],
        enemies: []
    },

    celebrant_banks: {
        name: "Banks of the Celebrant",
        description: "You walk along the mossy banks of the Celebrant. The river is wider here, its current strong and steady. Golden mallorn leaves cover the ground like a carpet of coins. To the south, the eaves of the woods grow dark, and the sound of the Great River Anduin grows louder.",
        exits: { 'west': 'mallorn_sanctuary', 'east': 'anduin_confluence', 'north': 'iron_mines_1' },
        items: ['golden_moss'],
        enemies: []
    },

    anduin_confluence: {
        name: "Confluence of Rivers",
        description: "Here the clear, cold waters of the Silverlode pour into the mighty, grey flood of the Anduin. The two currents swirl and fight for a moment before merging into one. The sheer power of the Great River is palpable here. Standing on the point of land between them, you feel small against the vastness of the wild.",
        exits: { 'west': 'celebrant_banks', 'east': 'skinbark_grove', 'northwest': 'iron_mines_1' },
        items: ['river_reeds'],
        enemies: []
    },

    // FANGORN EXPANSION - The Ancient Wood

    fangorn_hidden_path: {
        name: "Hidden Path in Fangorn",
        description: "A barely visible game trail winds into the oppressive gloom of Fangorn Forest. The trees here are old—older than the elves, some say. They loom over the path, their twisted roots raised like gnarled knees. The air smells of musty leaf mold and ancient earth. You feel as though you are trespassing in a private sanctuary.",
        exits: { 'south': 'anduin_approach', 'north': 'the_silent_glade', 'southwest': 'bree_gate', 'east': 'seventh_level' },
        items: ['ancient_bark'],
        enemies: []
    },

    the_silent_glade: {
        name: "The Silent Glade",
        description: "The path opens into a circular glade where the forest canopy is unbroken, shutting out the sky. The silence is unnatural—not the quiet of peace, but of holding one's breath. No bird calls, no leaf rustles. The trees standing around the edge seem to be leaning inward, listening. It is a place that feels aware.",
        exits: { 'south': 'fangorn_hidden_path', 'north': 'entmoot_circle', 'southeast': 'seventh_level' },
        items: ['ancient_root'],
        enemies: ['huorn']
    },

    entmoot_circle: {
        name: "Entmoot Circle - Derndingle",
        description: "You stand in Derndingle, the meeting place of the Ents. It is a deep, bowl-like depression fringed with tall, evergreen hedge-trees. The ground is smooth turf, free of undergrowth. There is a sense of immense solemnity here, of long, slow thoughts and deliberations that span centuries. You feel the gaze of the forest upon you.",
        exits: { 'south': 'the_silent_glade', 'northwest': 'entwash_headwaters', 'east': 'entwash_delta', 'northeast': 'west_emnet', 'west': 'weathertop_base', 'north': 'treebeard_cellar' },
        items: ['ent_leaf'],
        enemies: []
    },

    entwash_headwaters: {
        name: "Headwaters of the Entwash",
        description: "A spring gushes from the stone at the foot of the Misty Mountains, marking the birth of the river Entwash. The water is icy cold and exceptionally clear. Mist clings to the surface, swirling around the knees of the grey peaks that rise immediately to the North. The roar of the water echoing off the cliffs is the only sound.",
        exits: { 'southeast': 'entmoot_circle', 'east': 'treebeard_cellar', 'south': 'weathertop_base', 'northeast': 'mt_level_4' },
        items: ['mountain_crystal'],
        enemies: []
    },

    treebeard_cellar: {
        name: "Treebeard's Storage",
        description: "A dry, cavernous space beneath the roots of a great oak, used by the oldest of Ents to store his draughts. Large stone jars stand in rows, each sealed with a lid of stone. The air smells of earth and rain and something intoxicatingly green. This is where the Ent-draughts are brewed and kept, the life-water of the shepherds of the trees.",
        exits: { 'west': 'entwash_headwaters', 'southeast': 'entwash_delta', 'south': 'entmoot_circle', 'southwest': 'weathertop_base' },
        items: ['entdraught', 'stone_jar'],
        enemies: []
    },

    skinbark_grove: {
        name: "Skinbark's Grove",
        description: "This grove on the mountain slopes belongs to Skinbark. Many of the birch trees here have been stripped and hewn by orcs, leaving wounded stumps and scarred bark. The surviving trees seem angry, their branches thrashing even when there is no wind. The ground is hard and stony, reflecting the harshness of the struggle here.",
        exits: { 'west': 'anduin_confluence', 'east': 'leaflock_meadow' },
        items: ['charred_wood'],
        enemies: ['orc_scout']
    },

    leaflock_meadow: {
        name: "Leaflock's Meadow",
        description: "A sun-dappled meadow surrounded by ancient, sleepy trees. One of them is likely Leaflock himself, though it is impossible to say which. The grass is tall and soft, inviting rest. A sense of drowsiness hangs in the air, a slow, patient pulse that measures time in seasons rather than hours.",
        exits: { 'west': 'skinbark_grove', 'north': 'westfold_plains' },
        items: ['rare_wildflower'],
        enemies: []
    }
};
