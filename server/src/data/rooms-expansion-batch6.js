// EXPANSION BATCH 6: New Regions (Mirkwood, Erebor, Grey Havens)
// This file contains ~30 new rooms to be merged into rooms.js

export const newRegionsExpansion = {
    // GREY HAVENS - The Western Shore

    grey_havens_docks: {
        name: "Docks of Mithlond",
        description: "The white towers of the Grey Havens rise above the western sea. Elven ships, slim and white, are moored at the docks, waiting for the final journey to the West.",
        exits: { 'southeast': 'elven_craft_hall', 'northwest': 'seventh_level' },
        items: ['elven_ship_model'],
        enemies: []
    },

    havens_approach: {
        name: "Approach to Mithlond",
        description: "A wide, white road leads down to the sea. The air is salty and filled with the sound of gulls.",
        exits: { 'northeast': 'elven_craft_hall', 'southwest': 'sixth_level' },
        items: ['sea_shell'],
        enemies: []
    },

    // MIRKWOOD - The Forest of Night

    mirkwood_edge: {
        name: "Edge of Mirkwood",
        description: "The Great Forest of Mirkwood looms before you, a wall of darkness and silence that seems to absorb all light and sound. The trees are ancient and gnarled, their trunks twisted into grotesque shapes, their branches heavy with hanging moss that sways in the slightest breeze. The forest has a malevolent presence, as if it's aware of you and not entirely friendly. The canopy overhead is so thick that even at the edge, you can see how the light dims and the shadows deepen just a few steps in. A narrow path leads into the gloom, its entrance marked by two great trees whose branches have grown together to form a natural archway. The path itself is overgrown and barely visible, as if the forest is trying to reclaim it. The air at the edge carries the scent of damp earth, decaying leaves, and something else—something that makes your skin crawl. This is a place where the normal rules of the world seem to bend, where time moves strangely, and where travelers can become hopelessly lost. The forest has a reputation for swallowing those who enter and never letting them go, and standing here, you can understand why.",
        exits: { 'southeast': 'mallorn_sanctuary', 'northwest': 'goblin_warren' },
        items: ['black_mushroom'],
        enemies: []
    },

    mirkwood_path_1: {
        name: "Mirkwood Path - The Old Forest Road",
        description: "The ancient road is now overgrown and broken. The canopy overhead is so thick that constant twilight reigns below.",
        exits: { 'northeast': 'silverlode_crossing', 'southwest': 'fifth_level' },
        items: ['broken_cobweb'],
        enemies: ['giant_spider']
    },

    mirkwood_path_2: {
        name: "Mirkwood Path - The Enchanted Stream",
        description: "A dark, sluggish stream crosses the path. A bridge once stood here, but only rotten timbers remain. The water looks deep and dangerous.",
        exits: { 'southeast': 'celebrant_banks', 'northwest': 'fourth_level' },
        items: ['enchanted_water_vial'],
        enemies: []
    },

    mirkwood_depths: {
        name: "Mirkwood Depths - Spider Warrens",
        description: "The thickest part of the forest. Massive webs stretch between the trees, some containing large, struggling cocoons. Multiple pairs of eyes watch you from the dark.",
        exits: { 'northeast': 'anduin_confluence', 'southwest': 'third_level' },
        items: ['spider_silk'],
        enemies: ['giant_spider', 'giant_spider']
    },

    rhosgobel: {
        name: "Rhosgobel - Home of Radagast",
        description: "A small, thatched house built around an old tree. Birds and squirrels are everywhere, and the air is filled with the scent of wild herbs.",
        exits: { 'southeast': 'fangorn_hidden_path', 'northwest': 'durin_chamber' },
        items: ['bird_feather', 'herbal_poultice'],
        enemies: []
    },

    elf_path_entrance: {
        name: "Entrance to the Elf-path",
        description: "A narrower, more secret path that leads toward the Kingdom of Thranduil. It is marked with subtle elven runes.",
        exits: { 'northeast': 'the_silent_glade', 'southwest': 'second_level' },
        items: ['elven_marker'],
        enemies: []
    },

    thranduil_halls_gate: {
        name: "Gate of the Elven-king",
        description: "A massive stone archway carved into a hillside. Great beech trees surround the entrance, and the sound of a rushing river can be heard within.",
        exits: { 'south': 'entmoot_circle', 'north': 'mithril_mine', 'northeast': 'first_level', 'northwest': 'bridge_of_khazad_dum' },
        items: ['beech_leaf'],
        enemies: ['elven_guard']
    },

    thranduil_halls_interior: {
        name: "Thranduil's Halls",
        description: "A vast underground palace of stone pillars and winding passages. The air is fresh, and the sound of music echoes through the halls.",
        exits: { 'southwest': 'entmoot_circle', 'northeast': 'east_gate_approach' },
        items: ['elven_wine_bowl'],
        enemies: []
    },

    long_lake_path: {
        name: "Path to Long Lake",
        description: "The path leaves the forest and follows the Forest River toward the east. The sky is visible again, and the air is cooler.",
        exits: { 'southeast': 'entmoot_circle', 'northwest': 'east_gate_moria' },
        items: ['river_reed'],
        enemies: []
    },

    lake_town_docks: {
        name: "Lake-town Docks",
        description: "The city of Esgaroth, built on wooden piles above the waters of the Long Lake. Boats are moored at the docks, and merchants cry their wares.",
        exits: { 'southwest': 'entwash_headwaters', 'northeast': 'dimrill_dale' },
        items: ['fish_scale', 'merchant_permit'],
        enemies: []
    },

    // LONELY MOUNTAIN - Erebor

    lonely_mountain_approach: {
        name: "Approach to the Lonely Mountain",
        description: "The Great Peak of Erebor looms ahead, its summit often hidden in clouds. The land here is scarred and blackened - the Desolation of Smaug.",
        exits: { 'southeast': 'treebeard_cellar', 'northwest': 'mines_level1' },
        items: ['dragon_scale_fragment'],
        enemies: []
    },

    erebor_gates: {
        name: "Main Gates of Erebor",
        description: "The Main Gates of Erebor stand before you, a massive archway of stone that once served as the grand entrance to the Lonely Mountain and the greatest dwarven kingdom in the north. The gates were once ornate beyond description, covered in intricate carvings of dwarven history, runes of power, and symbols of the line of Durin. Now, they are weathered and broken, their surfaces scarred by the passage of time, the attack of the dragon Smaug, and the battles that followed. Despite the damage, you can still see traces of the former glory—fragments of carvings, the remains of decorative elements, and the sheer scale of the construction speaks to the skill and ambition of the dwarves who built it. The Forest River flows out from beneath the gates, its waters clear and cold, emerging from the depths of the mountain itself. The gates are now guarded once more, for the dwarves have reclaimed their ancestral home, and you can see the signs of recent repairs and fortifications. The air here carries the scent of stone, water, and the distant promise of the treasures that lie within the mountain. This is a place of history, loss, and renewal—a testament to the resilience of the dwarven people.",
        exits: { 'southwest': 'skinbark_grove', 'northeast': 'mines_level2' },
        items: ['dwarven_rune_stone'],
        enemies: ['dwarven_sentry']
    },

    erebor_great_hall: {
        name: "Great Hall of Thráin",
        description: "A vast chamber of incredible size, its ceiling supported by massive pillars of carved stone. The wealth of the mountain was once stored here.",
        exits: { 'southeast': 'leaflock_meadow', 'northwest': 'endless_stair_top' },
        items: ['gold_nugget'],
        enemies: []
    },

    erebor_treasury: {
        name: "The Treasury of Erebor",
        description: "A huge cavern once filled with piles of gold, jewels, and the Arkenstone. Most is gone, but the glint of treasure still remains in the cracks.",
        exits: { 'southeast': 'westfold_plains', 'northwest': 'endless_stair_bottom' },
        items: ['precious_gem', 'emerald'],
        enemies: ['cave_troll']
    },

    erebor_armory: {
        name: "The Mountain Armory",
        description: "Racks of axes, mail-shirts, and shields line the walls. The dwarves of the mountain were famous for their craftsmanship.",
        exits: { 'southwest': 'eastfold_plains', 'northeast': 'lothlorien_border' },
        items: ['fine_dwarven_axe', 'mithril_filigree'],
        enemies: []
    }
};
