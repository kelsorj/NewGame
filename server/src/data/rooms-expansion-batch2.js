// EXPANSION BATCH 2: Rivendell & Moria
// This file contains ~40 new rooms to be merged into rooms.js

export const moriaRivendellExpansion = {
    // RIVENDELL EXPANSION - The Last Homely House

    rivendell_gardens: {
        name: "Gardens of Rivendell",
        description: "The Gardens of Rivendell are a peaceful sanctuary where rare flowers from across Middle-earth bloom in perfect harmony. The gardens are laid out with elven artistry, each plant placed to create a living tapestry of color, scent, and form. Flowers that grow nowhere else in Middle-earth flourish here—elanor with its golden petals, niphredil with its pale white blooms, and many others whose names are known only to the elves. The sound of many waterfalls creates a constant, soothing harmony, their waters cascading down from the mountains and flowing through the gardens in carefully designed channels. Stone benches, carved with intricate elven designs, are placed under ancient trees whose branches form natural canopies. The air is filled with the mingled scents of flowers, fresh water, and the subtle magic that permeates all of Rivendell. Butterflies and birds move through the gardens, adding their own music to the symphony of nature. This is a place where time seems to stand still, where the cares of the world fade away, and where one can find peace and renewal simply by being present.",
        exits: { 'north': 'troll_cave', 'south': 'last_bridge', 'northeast': 'mirkwood_path_1' },
        items: ['elanor_flower', 'silver_leaf'],
        enemies: []
    },

    hall_of_fire_guest: {
        name: "The Hall of Fire",
        description: "A great hall filled with soft light and the warmth of a fire that never burns down. It is a place of quiet reflection and song, where elves gather to tell tales of ages past. Shadows dance upon the high, carved pillars, but they are not menacing here. The peace of Imladris is deepest in this room, soothing the weary soul.",
        exits: { 'east': 'lake_evendim', 'west': 'elrond_study', 'southwest': 'barrow_downs', 'south': 'wold_of_rohan' },
        items: ['harp', 'ancient_scroll'],
        enemies: []
    },

    elrond_study: {
        name: "Elrond's Private Study",
        description: "A circular room lined with shelves containing scrolls and books from the First Age. Ancient maps and star-charts cover the tables, marking the movements of the Enemy. The air smells of ink and old parchment. Here, Elrond Half-elven, Master of Rivendell, contemplates the fate of Middle-earth, his wisdom a light against the gathering shadow.",
        exits: { 'east': 'hall_of_fire_guest', 'west': 'waterfall_walkway', 'southwest': 'barrow_chamber_1', 'southeast': 'henneth_annun' },
        items: ['vilya_reflection', 'ancient_map'],
        enemies: []
    },

    waterfall_walkway: {
        name: "Waterfall Walkway",
        description: "A slender bridge of white stone arches gracefully over a thundering waterfall. The spray creates perpetual rainbows in the air, cooling your face. Below, the water crashes into a deep pool with a roar that drowns out all other sound. It is a place of raw natural beauty, tamed only by the delicate architecture of the elves.",
        exits: { 'east': 'elrond_study', 'west': 'hidden_flet' },
        items: ['crystalline_water'],
        enemies: []
    },

    hidden_flet: {
        name: "Hidden Flet",
        description: "High in the canopy of a massive pine, this wooden platform offers a secluded vantage point. The valley of Imladris spreads out below like a hidden jewel, protecting its inhabitants from the eyes of the world. The wind sighs through the pine needles, a soft and comforting sound.",
        exits: { 'east': 'waterfall_walkway', 'south': 'rivendell_guest_house', 'southeast': 'barrow_chamber_1', 'southwest': 'barrow_chamber_3' },
        items: ['elven_spyglass'],
        enemies: []
    },

    rivendell_guest_house: {
        name: "The Guest House",
        description: "A large, airy building designed for the comfort of travelers. Vines climb the wooden pillars, and the windows look out over the gardens. The beds are soft, and the simple meals provided here are more restorative than the richest feasts of kings. It is a house of healing and rest.",
        exits: { 'north': 'hidden_flet', 'south': 'hall_of_kings', 'northeast': 'barrow_chamber_1' },
        items: ['fresh_linen', 'healing_salve'],
        enemies: []
    },

    // MORIA EXPANSION - The Deeps of Khazad-dûm

    durin_throne_hall: {
        name: "Great Hall of Durin",
        description: "The Great Hall of Durin is a massive chamber that once served as the primary seat of power for the Dwarven Kings of Khazad-dûm. The hall is vast beyond comprehension, its ceiling lost in darkness high above, supported by columns of stone so large that they seem like the trunks of petrified trees. The walls are covered in intricate carvings depicting the history of the dwarves—scenes of mining, crafting, battle, and the great deeds of Durin's line. At the far end of the hall, the throne of Durin sits empty, carved from a single block of mithril-adorned stone. The throne is massive, designed for a king of legendary stature, and it's covered in runes and symbols that speak of power and authority. Despite the darkness and decay that now fills Moria, the throne still radiates a sense of majesty and ancient power. The floor is paved with great stone blocks, and you can see where banners once hung from the walls, their remnants now tattered and faded. This was once the heart of the greatest dwarven kingdom in Middle-earth, and even in ruin, it speaks of the glory that once was. The air is heavy with the weight of history, and you can almost hear the echoes of ancient councils and the voices of kings long dead.",
        exits: { 'up': 'hollin_gate', 'north': 'royal_tombs' },
        items: ['dwarven_scepter', 'gold_coin'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    hall_of_kings: {
        name: "Hall of Kings",
        description: "A somber gallery hewn from black stone, lined with the statues of the Kings of Durin's Folk. The statues are colossal, their stone eyes staring sternly into the darkness. Dust lies thick on the floor, undisturbed for centuries. The silence here is heavy with the weight of a fallen kingdom.",
        exits: { 'north': 'rivendell_guest_house', 'south': 'royal_armory', 'up': 'erebor_treasury' },
        items: ['king_statuette'],
        enemies: []
    },

    royal_tombs: {
        name: "Royal Tombs of Khazad-dûm",
        description: "The air here is cold and still. Rows of stone sarcophagi stretch into the gloom, holding the remains of the Lords of Moria. The lids are carved with the likenesses of the dead, their hands clasping stone axes upon their chests. It is a sacred place, now desecrated by the presence of orcs and worse things.",
        exits: { 'south': 'durin_throne_hall', 'north': 'doors_of_durin' },
        items: ['ancient_crown', 'mithril_ring'],
        enemies: ['dwarven_wraith']
    },

    royal_armory: {
        name: "Royal Armory",
        description: "Racks that once held thousands of axes and shields now stand mostly empty or overturned. The floor is littered with broken metal and rust changes the color of the stone. Yet, in the corners, one might still find a weapon of old integrity, untouched by the slow decay of the mines.",
        exits: { 'north': 'hall_of_kings', 'south': 'smelting_chambers', 'east': 'fornost_temple', 'southeast': 'green_hill_country', 'southwest': 'minas_morgul_interior' },
        items: ['heavy_dwarven_axe', 'iron_shield'],
        enemies: ['orc_captain']
    },

    smelting_chambers: {
        name: "Smelting Chambers",
        description: "Giant blast furnaces, cold for centuries, loom like dark towers in this cavern. The walls are stained with soot and the smell of sulfur and ash is still pungent. Piles of slag and unrefined ore lie forgotten, a testament to the sudden end of industry here. The heat that once forged a kingdom has long since faded.",
        exits: { 'north': 'royal_armory', 'southeast': 'deep_mines_hub', 'northeast': 'fornost_temple', 'northwest': 'gorgoroth_plateau' },
        items: ['iron_bar', 'coal'],
        enemies: ['goblin', 'goblin']
    },

    deep_mines_hub: {
        name: "Deep Mines Hub",
        description: "A chaotic junction of mine-tracks and lift shafts. Rusted chains hang from great wheels in the ceiling, and overturned ore-carts block the way. This was once the bustling heart of the mining operations, where the wealth of the mountain was brought up from the deeps. Now, it is a silent, dusty tomb.",
        exits: { 'northwest': 'smelting_chambers', 'east': 'mithril_depths_1' },
        items: ['rusty_pickaxe'],
        enemies: ['cave_troll']
    },

    mithril_depths_1: {
        name: "Mithril Depths - Upper Vein",
        description: "You have reached the legendary Mithril lodes. The rock here is different—harder, darker, yet glittering with tiny flecks of silver fire. The tunnel is narrow and follows the seam of the precious metal deep into the earth. It was for this prize that the dwarves delved too greedily and too deep, and the shadow of that greed still hangs heavy in the air.",
        exits: { 'west': 'deep_mines_hub', 'east': 'mithril_depths_2', 'north': 'bucklebury', 'southeast': 'mallorn_sanctuary' },
        items: ['mithril_pebble'],
        enemies: ['goblin_miner']
    },

    mithril_depths_2: {
        name: "Mithril Depths - The Mother Lode",
        description: "A breathtaking cavern opens up before you, its walls shimmering with the light of pure mithril. This was the heart of the dwarves' wealth, the greatest concentration of 'true-silver' ever found. Even now, after centuries of looting, the walls glow with a soft, ethereal light. But there is a coldness here that seeps into your bones, a warning that this treasure is guarded by the memory of Durin's Bane.",
        exits: { 'west': 'mithril_depths_1', 'east': 'iron_mines_1', 'north': 'elven_craft_hall', 'northeast': 'iron_mines_2' },
        items: ['mithril_shard', 'star_gem'],
        enemies: ['moria_stalker']
    },

    iron_mines_1: {
        name: "Iron Mines - Level 1",
        description: "The air here is thick with red dust that coats your throat and lungs. This is where the iron that armed the legions of Khazad-dûm was mined. Rusty tracks crisscross the floor, and discarded pickaxes lie rusting in the gloom. The work here was hard and brutal, and the very stone seems to remember the sweat and toil of the miners.",
        exits: { 'west': 'mithril_depths_2', 'north': 'iron_mines_2', 'northwest': 'elven_craft_hall', 'south': 'celebrant_banks', 'southeast': 'anduin_confluence', 'southwest': 'mallorn_sanctuary' },
        items: ['heavy_iron_ore'],
        enemies: []
    },

    iron_mines_2: {
        name: "Iron Mines - The Pit",
        description: "A massive, funnel-shaped pit drops away into darkness, spiral paths cut into its sides. This was the main extraction point for the iron ore. The vertigo is intense as you look over the edge. Far below, you can hear the chittering of things that have made nests in the abandoned deeps. It is a long way down.",
        exits: { 'south': 'iron_mines_1', 'northeast': 'the_unending_stair_middle', 'northwest': 'fornost_palace', 'north': 'fornost_keep', 'southwest': 'mithril_depths_2' },
        items: ['pure_iron_ore'],
        enemies: ['giant_spider']
    },

    the_unending_stair_middle: {
        name: "The Unending Stair - Middle Section",
        description: "You are on the legendary Endless Stair, suspended in the void between the roots of the mountain and its peak. Steps carved from the living rock spiral endlessly up and down. To look over the edge is to stare into eternity. The air is thin and cold, and the only sound is the wind howling through the shaft like a trapped spirit.",
        exits: { 'southwest': 'iron_mines_2', 'north': 'goblin_ward', 'west': 'fornost_keep', 'northeast': 'deeping_stream_upper' },
        items: [],
        enemies: []
    },

    goblin_ward: {
        name: "The Goblin Ward",
        description: "The architecture changes here—crude, jagged structures of wood and bone have been lashed onto the ancient stonework. The smell is foul, a mix of rot and unwashed bodies. This area has been claimed by the goblins of the Misty Mountains. Graffiti smears the walls, and the darkness is full of guttural whispers and the clatter of weapons.",
        exits: { 'south': 'the_unending_stair_middle', 'north': 'goblin_watchtower', 'northeast': 'hornburg_armory' },
        items: ['goblin_scimitar'],
        enemies: ['goblin_sentry', 'goblin_sentry']
    },

    goblin_watchtower: {
        name: "Goblin Watchtower",
        description: "A rickety wooden platform built out over a precipice, serving as a lookout post for the goblin hordes. From here, they watch the movements in the lower halls. The construction is shoddy but effective, bristling with spikes and crude barricades. It commands a strategic view of the Seventh Level and beyond.",
        exits: { 'south': 'goblin_ward', 'west': 'khazad_dum_chasm_view' },
        items: ['black_arrow'],
        enemies: ['goblin_archer']
    },

    // Bridge of Khazad-dum expansion
    khazad_dum_chasm_view: {
        name: "Chasm Viewpoint",
        description: "You stand on a crumbling ledge overlooking the great chasm of Khazad-dûm. The abyss dominates everything, a void of absolute darkness that swallows the light of your torch. Far, far below, you can see the faint, red glow of fire, and the heat rising from the depths carries the smell of sulfur and ancient stone. It is a terrifying glimpse into the heart of the mountain.",
        exits: { 'east': 'goblin_watchtower', 'west': 'nameless_tunnels', 'northwest': 'barrow_downs', 'south': 'niphredil_meadow', 'north': 'wold_of_rohan' },
        items: ['scorched_stone'],
        enemies: []
    },

    // Deep Places
    nameless_tunnels: {
        name: "The Nameless Tunnels",
        description: "These tunnels are not of dwarven make. They are smooth, round, and slimy, bored through the rock by something immensely old and powerful. The air is cold and damp, and a unnatural silence presses in on your ears. There is a sense of being an intruder in a place where light has never shone. Something watches from the dark.",
        exits: { 'east': 'khazad_dum_chasm_view', 'west': 'the_dark_lake', 'northwest': 'barrow_downs', 'northeast': 'annuminas_tower', 'north': 'wold_of_rohan' },
        items: ['slime_puddle'],
        enemies: ['nameless_thing']
    },

    the_dark_lake: {
        name: "The Dark Lake",
        description: "A vast, sunless sea lies before you, its surface black and still as oil. The ceiling is lost in the gloom above. Strange ripples disturb the water, though there is no wind. The shore is lined with glowing fungi that cast a sickly pale light. It is a place of nightmares, where blind things gnaw at the roots of the world.",
        exits: { 'east': 'nameless_tunnels', 'west': 'galadhrm_flet_1' },
        items: ['glowing_mushroom'],
        enemies: ['water_creature']
    }
};
