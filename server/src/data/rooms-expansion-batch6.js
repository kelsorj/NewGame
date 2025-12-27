// EXPANSION BATCH 6: New Regions (Mirkwood, Erebor, Grey Havens)
// This file contains ~30 new rooms to be merged into rooms.js

export const newRegionsExpansion = {
    // GREY HAVENS - The Western Shore

    grey_havens_docks: {
        name: "Docks of Mithlond",
        description: "The white towers of the Grey Havens rise above the western sea. Elven ships, slim and white, are moored at the docks, waiting for the final journey to the West.",
        exits: { north: 'mirkwood_edge', west: 'anduin_confluence', northwest: 'fangorn_eaves', southwest: 'celebrant_banks' },
        items: ['elven_ship_model'],
        enemies: []
    },

    havens_approach: {
        name: "Approach to Mithlond",
        description: "A wide, white road leads down to the sea. The air is salty and filled with the sound of gulls.",
        exits: { northeast: 'whitwell' },
        items: ['sea_shell'],
        enemies: []
    },

    // MIRKWOOD - The Forest of Night

    mirkwood_edge: {
        name: "Edge of Mirkwood",
        description: "The Great Forest looms before you, dark and silent. The trees are gnarled and covered in hanging moss. A narrow path leads into the gloom.",
        exits: { north: 'mirkwood_path_1', south: 'grey_havens_docks', west: 'fangorn_eaves', northwest: 'the_silent_glade', southwest: 'anduin_confluence' },
        items: ['black_mushroom'],
        enemies: []
    },

    mirkwood_path_1: {
        name: "Mirkwood Path - The Old Forest Road",
        description: "The ancient road is now overgrown and broken. The canopy overhead is so thick that constant twilight reigns below.",
        exits: { north: 'mirkwood_path_2', south: 'mirkwood_edge', west: 'the_silent_glade', northwest: 'entmoot_circle', southwest: 'fangorn_eaves' },
        items: ['broken_cobweb'],
        enemies: ['giant_spider']
    },

    mirkwood_path_2: {
        name: "Mirkwood Path - The Enchanted Stream",
        description: "A dark, sluggish stream crosses the path. A bridge once stood here, but only rotten timbers remain. The water looks deep and dangerous.",
        exits: { south: 'mirkwood_path_1', west: 'entmoot_circle', northeast: 'mirkwood_depths', northwest: 'west_emnet', southwest: 'the_silent_glade' },
        items: ['enchanted_water_vial'],
        enemies: []
    },

    mirkwood_depths: {
        name: "Mirkwood Depths - Spider Warrens",
        description: "The thickest part of the forest. Massive webs stretch between the trees, some containing large, struggling cocoons. Multiple pairs of eyes watch you from the dark.",
        exits: { north: 'rhosgobel', southwest: 'mirkwood_path_2' },
        items: ['spider_silk'],
        enemies: ['giant_spider', 'giant_spider']
    },

    rhosgobel: {
        name: "Rhosgobel - Home of Radagast",
        description: "A small, thatched house built around an old tree. Birds and squirrels are everywhere, and the air is filled with the scent of wild herbs.",
        exits: { south: 'mirkwood_depths' },
        items: ['bird_feather', 'herbal_poultice'],
        enemies: []
    },

    elf_path_entrance: {
        name: "Entrance to the Elf-path",
        description: "A narrower, more secret path that leads toward the Kingdom of Thranduil. It is marked with subtle elven runes.",
        exits: { north: 'silverlode_crossing', south: 'entwash_delta', east: 'the_silent_glade', west: 'fangorn_hidden_path', northeast: 'entmoot_circle', northwest: 'entwash_headwaters', southeast: 'fangorn_eaves', southwest: 'singing_groves' },
        items: ['elven_marker'],
        enemies: []
    },

    thranduil_halls_gate: {
        name: "Gate of the Elven-king",
        description: "A massive stone archway carved into a hillside. Great beech trees surround the entrance, and the sound of a rushing river can be heard within.",
        exits: { north: 'westfold_plains', south: 'skinbark_grove', east: 'dead_city', west: 'long_lake_path', northeast: 'eastfold_plains', northwest: 'lake_town_docks', southwest: 'thranduil_halls_interior' },
        items: ['beech_leaf'],
        enemies: ['elven_guard']
    },

    thranduil_halls_interior: {
        name: "Thranduil's Halls",
        description: "A vast underground palace of stone pillars and winding passages. The air is fresh, and the sound of music echoes through the halls.",
        exits: { north: 'long_lake_path', east: 'skinbark_grove', northeast: 'thranduil_halls_gate', southeast: 'treebeard_cellar' },
        items: ['elven_wine_bowl'],
        enemies: []
    },

    long_lake_path: {
        name: "Path to Long Lake",
        description: "The path leaves the forest and follows the Forest River toward the east. The sky is visible again, and the air is cooler.",
        exits: { north: 'lake_town_docks', south: 'thranduil_halls_interior', east: 'thranduil_halls_gate', northeast: 'westfold_plains', southeast: 'skinbark_grove' },
        items: ['river_reed'],
        enemies: []
    },

    lake_town_docks: {
        name: "Lake-town Docks",
        description: "The city of Esgaroth, built on wooden piles above the waters of the Long Lake. Boats are moored at the docks, and merchants cry their wares.",
        exits: { north: 'lonely_mountain_approach', south: 'long_lake_path', east: 'westfold_plains', southeast: 'thranduil_halls_gate' },
        items: ['fish_scale', 'merchant_permit'],
        enemies: []
    },

    // LONELY MOUNTAIN - Erebor

    lonely_mountain_approach: {
        name: "Approach to the Lonely Mountain",
        description: "The Great Peak of Erebor looms ahead, its summit often hidden in clouds. The land here is scarred and blackened - the Desolation of Smaug.",
        exits: { north: 'erebor_gates', south: 'lake_town_docks', southeast: 'westfold_plains' },
        items: ['dragon_scale_fragment'],
        enemies: []
    },

    erebor_gates: {
        name: "Main Gates of Erebor",
        description: "A massive archway of stone, once ornate but now weathered and broken. The Forest River flows out from beneath the gates.",
        exits: { north: 'erebor_great_hall', south: 'lonely_mountain_approach', northeast: 'erebor_treasury', northwest: 'erebor_armory' },
        items: ['dwarven_rune_stone'],
        enemies: ['dwarven_sentry']
    },

    erebor_great_hall: {
        name: "Great Hall of Thráin",
        description: "A vast chamber of incredible size, its ceiling supported by massive pillars of carved stone. The wealth of the mountain was once stored here.",
        exits: { south: 'erebor_gates', east: 'erebor_treasury', west: 'erebor_armory' },
        items: ['gold_nugget'],
        enemies: []
    },

    erebor_treasury: {
        name: "The Treasury of Erebor",
        description: "A huge cavern once filled with piles of gold, jewels, and the Arkenstone. Most is gone, but the glint of treasure still remains in the cracks.",
        exits: { west: 'erebor_great_hall', southeast: 'snowbourn_banks', southwest: 'erebor_gates' },
        items: ['precious_gem', 'emerald'],
        enemies: ['cave_troll']
    },

    erebor_armory: {
        name: "The Mountain Armory",
        description: "Racks of axes, mail-shirts, and shields line the walls. The dwarves of the mountain were famous for their craftsmanship.",
        exits: { east: 'erebor_great_hall', southeast: 'erebor_gates' },
        items: ['fine_dwarven_axe', 'mithril_filigree'],
        enemies: []
    }
};
