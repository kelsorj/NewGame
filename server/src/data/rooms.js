import { shireExpansion } from './rooms-expansion-batch1.js';
import { moriaRivendellExpansion } from './rooms-expansion-batch2.js';
import { lothlorienFangornExpansion } from './rooms-expansion-batch3.js';
import { rohanExpansion } from './rooms-expansion-batch4.js';
import { gondorMordorExpansion } from './rooms-expansion-batch5.js';
import { newRegionsExpansion } from './rooms-expansion-batch6.js';

export const rooms = {
    ...shireExpansion,
    ...moriaRivendellExpansion,
    ...lothlorienFangornExpansion,
    ...rohanExpansion,
    ...gondorMordorExpansion,
    ...newRegionsExpansion,
    // THE SHIRE - Starting Area
    bag_end: {
        name: "Bag End",
        description: "You stand in the cozy hobbit-hole of Bag End. Round windows let in cheerful sunlight, and the smell of pipeweed lingers in the air. A large round door leads outside to the garden.",
        exits: { south: 'woody_end', east: 'sackville_manor' },
        items: ['walking_stick', 'lembas_bread'],
        enemies: []
    },

    hobbiton_square: {
        name: "Hobbiton Square",
        description: "The heart of Hobbiton bustles with hobbits going about their business. The Green Dragon Inn stands to the east, and Bag End lies to the north. A road leads south toward the Brandywine Bridge.",
        exits: { south: 'staddle', east: 'green_dragon' },
        items: ['silver_coin'],
        enemies: []
    },

    green_dragon: {
        name: "The Green Dragon Inn",
        description: "A warm, welcoming tavern filled with the sounds of laughter and clinking mugs. The fireplace crackles merrily. The bartender eyes you with a knowing smile.",
        exits: { west: 'hobbiton_square', southwest: 'staddle' },
        items: ['health_potion', 'old_map'],
        enemies: []
    },

    bywater: {
        name: "Bywater",
        description: "A small village on the Water. Smoke rises from chimneys, and you hear the sound of a mill wheel turning. The road continues north to Hobbiton.",
        exits: { south: 'mayor_office', east: 'green_hill_country', northeast: 'tuckborough', southeast: 'michel_delving' },
        items: ['rope'],
        enemies: []
    },

    woody_end: {
        name: "Woody End",
        description: "The edge of the woodland. Trees grow thick here, and you hear strange rustlings in the undergrowth. An old path leads deeper into the forest.",
        exits: { north: 'bag_end', northeast: 'sackville_manor' },
        items: [],
        enemies: ['wild_wolf']
    },

    brandywine_bridge: {
        name: "Brandywine Bridge",
        description: "An ancient stone bridge crossing the Brandywine River. The water flows swiftly beneath. To the south lies the Old Forest, dark and forbidding. East leads to Bree.",
        exits: { north: 'scary', south: 'old_forest_entrance', east: 'combe', west: 'michel_delving', northeast: 'rushock_bog', northwest: 'green_hill_country', southeast: 'fornost_approach', southwest: 'marish' },
        items: [],
        enemies: []
    },

    stock_road: {
        name: "Stock Road",
        description: "A winding country road through farmland. You can see the lights of Stock village in the distance.",
        exits: { south: 'overhill', east: 'archet', west: 'longbottom', southwest: 'waymeet' },
        items: ['carrot'],
        enemies: []
    },

    marish: {
        name: "The Marish",
        description: "Marshy lowlands near the Brandywine. The ground is soft and waterlogged. Strange lights flicker in the distance.",
        exits: { north: 'michel_delving', south: 'old_forest_depth', east: 'old_forest_entrance', northeast: 'brandywine_bridge', northwest: 'mayor_office', southeast: 'bree_east_road', southwest: 'archet' },
        items: ['mysterious_stone'],
        enemies: ['marsh_phantom']
    },

    old_forest_entrance: {
        name: "Old Forest Entrance",
        description: "The trees here are ancient and twisted, their branches reaching out like gnarled fingers. A feeling of watchfulness pervades the air. Few hobbits dare enter.",
        exits: { north: 'brandywine_bridge', south: 'bree_east_road', east: 'fornost_approach', west: 'marish', northeast: 'combe', northwest: 'michel_delving', southeast: 'barrow_downs_approach', southwest: 'old_forest_depth' },
        items: [],
        enemies: ['huorn']
    },

    old_forest_depth: {
        name: "Deep in the Old Forest",
        description: "The forest closes in around you. The trees seem almost alive, and you hear whispers on the wind. A clearing lies ahead with a great willow tree.",
        exits: { north: 'marish', south: 'crickhollow', east: 'bree_east_road', west: 'archet', northeast: 'old_forest_entrance', southeast: 'bucklebury' },
        items: ['ancient_acorn'],
        enemies: []
    },

    withywindle: {
        name: "The Withywindle",
        description: "A lazy river flows through a deep dell. An enormous willow tree stands at the water's edge, its roots reaching into the dark water. You feel an overwhelming drowsiness.",
        exits: { south: 'needlehole', east: 'bombadil_house', northeast: 'crickhollow', northwest: 'overhill' },
        items: [],
        enemies: ['old_man_willow'],
        puzzle: 'willow_riddle'
    },

    bombadil_house: {
        name: "Tom Bombadil's House",
        description: "A cheerful cottage in a clearing. Flowers bloom all around, and you hear singing from within: 'Hey dol! merry dol! ring a dong dillo!' The door stands open.",
        exits: { north: 'crickhollow', west: 'withywindle', northeast: 'bucklebury', southeast: 'weathertop_base', southwest: 'needlehole' },
        items: ['bombadil_gift', 'health_potion'],
        enemies: []
    },

    // BREE & WEATHERTOP
    bree_gate: {
        name: "Bree Gate",
        description: "The western gate of Bree, a village of Men. The gatekeeper watches you suspiciously. Town stretches out before you, and you can see The Prancing Pony inn.",
        exits: {  },
        items: [],
        enemies: []
    },

    bree_square: {
        name: "Bree Square",
        description: "The center of Bree. Shops and houses line the square. The Prancing Pony inn stands prominently with its sign swinging in the breeze.",
        exits: { north: 'prancing_pony', south: 'bombadil_garden', west: 'combe', northwest: 'rushock_bog', southwest: 'fornost_approach' },
        items: ['brass_key'],
        enemies: []
    },

    prancing_pony: {
        name: "The Prancing Pony",
        description: "A busy inn filled with travelers and locals. The innkeeper, Barliman Butterbur, hurries between tables. You notice a hooded figure in the corner watching you intently.",
        exits: { south: 'bree_square', west: 'rushock_bog', northwest: 'staddle', southwest: 'combe' },
        items: ['ranger_cloak'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood Forest",
        description: "A wild woodland surrounding Bree. The trees are thick and you hear wolves howling in the distance. Bandits are known to hide here.",
        exits: { north: 'barrow_chamber_2', east: 'barrow_downs', west: 'buckland_kitchen', northwest: 'weathertop_summit' },
        items: ['forest_berry'],
        enemies: ['brigand', 'wild_wolf']
    },

    bree_east_road: {
        name: "East Road from Bree",
        description: "The Great East Road stretches before you. To the south, you can see the ominous hill of Weathertop rising against the sky.",
        exits: { north: 'old_forest_entrance', south: 'bucklebury', east: 'barrow_downs_approach', west: 'old_forest_depth', northeast: 'fornost_approach', northwest: 'marish', southeast: 'old_forest_exit', southwest: 'crickhollow' },
        items: [],
        enemies: []
    },

    weathertop_base: {
        name: "Base of Weathertop",
        description: "The ancient watchtower of Amon Sûl looms above you. Stone ruins are scattered about, and you feel a sense of ancient evil. A path winds up the hillside.",
        exits: { east: 'buckland_kitchen', northeast: 'weathertop_summit', northwest: 'bombadil_house' },
        items: ['ancient_blade'],
        enemies: ['orc_scout']
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruined tower atop Weathertop. Ancient stones lie scattered, and burn marks scar the ground. The view stretches for miles in all directions. You feel eyes watching you from the shadows. A fire pit shows recent use.",
        exits: { north: 'old_forest_exit', south: 'buckland_kitchen', east: 'barrow_chamber_2', northeast: 'last_bridge', northwest: 'bucklebury', southeast: 'chetwood', southwest: 'weathertop_base' },
        items: ['athelas', 'watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith'],
        puzzle: 'tower_inscription'
    },

    midgewater_marshes: {
        name: "Midgewater Marshes",
        description: "A miserable, swampy wasteland. Clouds of midges buzz around your head, and the ground squelches beneath your feet. Will-o'-wisps dance in the distance.",
        exits: { south: 'barrow_chamber_1', northeast: 'buckland_cellar' },
        items: [],
        enemies: ['giant_midge_swarm']
    },

    weatherhills: {
        name: "The Weather Hills",
        description: "Rolling hills covered in rough grass and stone. Ancient barrows dot the landscape, remnants of long-dead kings.",
        exits: { south: 'buckland_cellar', west: 'fornost_gates', southeast: 'barrow_chamber_3' },
        items: ['barrow_treasure'],
        enemies: ['barrow_wight']
    },

    last_bridge: {
        name: "The Last Bridge",
        description: "A stone bridge crossing the Hoarwell river. The river rushes below, and the road continues east toward Rivendell.",
        exits: { south: 'barrow_chamber_2', west: 'old_forest_exit', northwest: 'barrow_downs_approach', southwest: 'weathertop_summit' },
        items: ['elven_berries'],
        enemies: []
    },

    // TROLLSHAWS & RIVENDELL
    trollshaws: {
        name: "The Trollshaws",
        description: "A wild, hilly region. Three large stone trolls stand frozen in a clearing, turned to stone by sunlight. Their treasure must be nearby.",
        exits: { east: 'ford_of_bruinen', west: 'troll_cave', northeast: 'annuminas_ruins', southwest: 'fornost_temple' },
        items: [],
        enemies: []
    },

    troll_cave: {
        name: "Troll Cave",
        description: "A dank cave reeking of troll. Bones litter the floor. In the dim light, you see a chest partially buried in the debris.",
        exits: { south: 'fornost_temple', east: 'trollshaws' },
        items: ['sting', 'orcrist', 'gold_treasure'],
        enemies: [],
        puzzle: 'troll_chest'
    },

    ford_of_bruinen: {
        name: "Ford of Bruinen",
        description: "A shallow ford across the Loudwater river. On the far bank, you can see the hidden valley of Rivendell. The water sparkles with an otherworldly light.",
        exits: { north: 'annuminas_ruins', east: 'rivendell_gates', west: 'trollshaws', northeast: 'annuminas_tower', southeast: 'elrond_study' },
        items: [],
        enemies: []
    },

    rivendell_gates: {
        name: "Gates of Rivendell",
        description: "Hidden gates lead into the Last Homely House. Waterfalls cascade around you, and elven voices sing in the distance. You feel peace wash over you.",
        exits: { north: 'annuminas_tower', south: 'elrond_study', west: 'ford_of_bruinen', northwest: 'annuminas_ruins', southeast: 'rivendell_guest_house' },
        items: [],
        enemies: []
    },

    rivendell_hall: {
        name: "Hall of Fire - Rivendell",
        description: "A magnificent hall with a great fire burning eternally in the center. Elven lords sit in counsel, and maps and ancient books line the walls. Elrond Half-elven regards you warmly.",
        exits: { north: 'elrond_study', east: 'rivendell_forge', west: 'rivendell_library', northeast: 'rivendell_guest_house', southwest: 'hall_of_fire_guest' },
        items: ['mithril_mail', 'miruvor'],
        enemies: []
    },

    rivendell_library: {
        name: "Library of Rivendell",
        description: "Countless scrolls and books fill this peaceful room. The knowledge of ages is stored here. You could spend years reading these tomes.",
        exits: { south: 'hall_of_fire_guest', east: 'rivendell_hall', northeast: 'elrond_study' },
        items: ['ancient_tome', 'scroll_of_wisdom'],
        enemies: [],
        puzzle: 'elven_lore'
    },

    rivendell_forge: {
        name: "Rivendell Forge",
        description: "An elven smithy where legendary weapons were crafted. The forge still glows with magical fire.",
        exits: { north: 'rivendell_guest_house', west: 'rivendell_hall', northwest: 'elrond_study' },
        items: ['elvish_blade'],
        enemies: []
    },

    //MORIA - The Mines of Moria
    hollin_gate: {
        name: "Hollin Gate",
        description: "The western approach to Moria. You stand before a sheer cliff face beside a dark lake. In the rock, barely visible, are the outlines of great doors.",
        exits: { south: 'waterfall_walkway' },
        items: ['mithril_fragment'],
        enemies: ['watcher_in_water']
    },

    doors_of_durin: {
        name: "Doors of Durin - West Gate of Moria",
        description: "The great Doors of Durin, Lord of Moria! Under the moon they shine. Ithildin script glows faintly: 'Speak, friend, and enter.' The doors stand shut, blocking the way into darkness.",
        exits: { south: 'seventh_level', east: 'moria_entrance', southeast: 'balin_tomb' },
        items: [],
        enemies: [],
        puzzle: 'gateway_of_moria',
        requirements: [{ type: 'puzzle', puzzle: 'gateway_of_moria' }]
    },

    moria_entrance: {
        name: "First Hall of Moria",
        description: "You step into darkness. The vast hall is pitch black, your torchlight barely penetrating the gloom. Columns of stone rise into shadows above. A sense of ancient grandeur mixed with decay fills the air.",
        exits: { south: 'balin_tomb', west: 'doors_of_durin', northeast: 'goblin_ward', southeast: 'royal_tombs', southwest: 'seventh_level' },
        items: ['old_torch', 'dwarven_helm'],
        enemies: ['goblin', 'goblin']
    },

    twenty_first_hall: {
        name: "Twenty-First Hall",
        description: "A massive hall supported by huge pillars. The ceiling is lost in darkness high above. Three passages lead deeper into Moria. Faded dwarven runes cover the walls.",
        exits: { north: 'seventh_level', east: 'mines_level2', northeast: 'balin_tomb', southeast: 'durin_throne_hall' },
        items: ['ancient_hammer', 'iron_ore'],
        enemies: ['orc_warrior', 'goblin']
    },

    balin_tomb: {
        name: "Chamber of Mazarbul - Balin's Tomb",
        description: "A square chamber with a shaft of light falling through a crack in the ceiling. A great stone chest stands in the center - the tomb of Balin, Lord of Moria. A tattered book lies beside it.",
        exits: { north: 'moria_entrance', south: 'mines_level2', east: 'royal_tombs', west: 'seventh_level', northwest: 'doors_of_durin', southeast: 'endless_stair_top', southwest: 'twenty_first_hall' },
        items: ['book_of_mazarbul', 'mithril_chain', 'balin_crown'],
        enemies: [],
        puzzle: 'chamber_records'
    },

    seventh_level: {
        name: "Seventh Level",
        description: "A maze of passages and chambers. You hear the sound of drums echoing from below: 'doom, doom.' Torchlight flickers on ancient walls.",
        exits: { north: 'doors_of_durin', south: 'twenty_first_hall', east: 'balin_tomb', northeast: 'moria_entrance', southeast: 'mines_level2' },
        items: [],
        enemies: ['goblin', 'orc_warrior', 'orc_warrior']
    },

    sixth_level: {
        name: "Sixth Level - Goblin Territory",
        description: "The goblins have claimed this level. Crude fortifications block the passages. You hear guttural voices and the clatter of weapons.",
        exits: { north: 'fourth_level', south: 'citadel_guards_hall', west: 'third_level', northwest: 'second_level', southeast: 'mithril_depths_2', southwest: 'minas_tirith_houses_of_healing', up: 'white_tower', down: 'fifth_level' },
        items: [],
        enemies: ['goblin', 'goblin', 'goblin_chieftain']
    },

    goblin_warren: {
        name: "Goblin Warren",
        description: "A warren of small tunnels and chambers where the goblins nest. Bones and filth litter the floor. The smell is overwhelming.",
        exits: { north: 'iron_mines_2', south: 'hall_of_kings', east: 'third_level', west: 'royal_tombs', northeast: 'second_level', southeast: 'minas_tirith_houses_of_healing', southwest: 'endless_stair_top' },
        items: ['goblin_treasure', 'rusty_armor'],
        enemies: ['goblin', 'goblin', 'orc_warrior']
    },

    fifth_level: {
        name: "Fifth Level",
        description: "Ancient forges line this level. Cold and dark now, but you can imagine dwarven smiths once laboring here, crafting legendary weapons and armor.",
        exits: { north: 'nameless_tunnels', west: 'mithril_mine', northwest: 'the_dark_lake', southeast: 'lossarnach_valleys', southwest: 'fourth_level', up: 'sixth_level', down: 'fourth_level' },
        items: ['forge_hammer', 'coal'],
        enemies: ['goblin']
    },

    fourth_level: {
        name: "Fourth Level",
        description: "Water drips from the ceiling forming pools on the floor. The air is damp and cold. You hear distant echoes - or are they whispers?",
        exits: { north: 'mithril_mine', south: 'sixth_level', west: 'second_level', northeast: 'fifth_level', northwest: 'deep_mines_hub', southwest: 'third_level', up: 'fifth_level', down: 'third_level' },
        items: [],
        enemies: ['cave_troll']
    },

    third_level: {
        name: "Third Level - The Deeps",
        description: "You have descended into the deep places of the world. The stones here are ancient beyond reckoning. A faint heat rises from below.",
        exits: { north: 'second_level', south: 'minas_tirith_houses_of_healing', east: 'sixth_level', west: 'goblin_warren', northeast: 'fourth_level', northwest: 'iron_mines_2', southeast: 'citadel_guards_hall', southwest: 'hall_of_kings', up: 'fourth_level', down: 'second_level' },
        items: ['deep_crystal'],
        enemies: ['orc_warrior']
    },

    durin_chamber: {
        name: "Durin's Chamber",
        description: "A sacred chamber dedicated to Durin the Deathless, eldest of the Seven Fathers of the Dwarves. His likeness is carved into the rock, crowned and bearing the tools of his craft.",
        exits: {  },
        items: ['durin_axe', 'seven_stars_token'],
        enemies: []
    },

    second_level: {
        name: "Second Level - Abandoned Mines",
        description: "Vast mines stretch out in all directions. The dwarves delved greedily and deep here, seeking mithril. Something changed when they delved too deep...",
        exits: { north: 'deep_mines_hub', south: 'third_level', east: 'fourth_level', west: 'iron_mines_2', northeast: 'mithril_mine', southeast: 'sixth_level', southwest: 'goblin_warren', up: 'third_level', down: 'first_level' },
        items: ['pickaxe'],
        enemies: ['goblin', 'orc_warrior']
    },

    mithril_mine: {
        name: "The Mithril Vein",
        description: "At last! A seam of mithril - the truest silver, more precious than gold. It gleams in your torchlight like starlight frozen in stone.",
        exits: { north: 'the_dark_lake', south: 'fourth_level', east: 'fifth_level', west: 'deep_mines_hub', northeast: 'nameless_tunnels', southwest: 'second_level' },
        items: ['mithril_ore', 'mithril_ore', 'mithril_nugget'],
        enemies: []
    },

    first_level: {
        name: "First Level - The Lowest Deep",
        description: "The deepest level of Moria. The heat is oppressive now. Far below, you sense something ancient and terrible stirring in darkness. This is the place they should never have delved.",
        exits: { north: 'minas_tirith_stables', up: 'second_level', down: 'minas_tirith_gates' },
        items: [],
        enemies: ['orc_warrior', 'goblin']
    },

    bridge_of_khazad_dum: {
        name: "Bridge of Khazad-dûm",
        description: "A narrow bridge of stone, carved from the living rock, spanning a bottomless chasm. Below, fire and smoke rise from unfathomable depths. This is a place of doom.",
        exits: { north: 'minas_tirith_houses_of_healing', south: 'minas_tirith_gates', east: 'mithril_depths_1', west: 'the_unending_stair_middle', northeast: 'citadel_guards_hall', northwest: 'hall_of_kings', southeast: 'white_tower' },
        items: [],
        enemies: ['durin_bane']
    },

    east_gate_approach: {
        name: "Approach to the East Gate",
        description: "The halls grow lighter. Ahead you can see daylight - the East Gate! Freedom from the darkness of Moria is at hand.",
        exits: {  },
        items: ['health_potion', 'lembas_bread'],
        enemies: []
    },

    east_gate_moria: {
        name: "East Gate of Moria",
        description: "You stumble out into daylight, half-blinded after the darkness. The Dimrill Dale spreads below, and beyond rise the peaks of the Misty Mountains.",
        exits: { north: 'rath_dinen', south: 'osgiliath_ruins', east: 'minas_morgul_interior', west: 'pelennor_fields', northwest: 'mithril_depths_2', southeast: 'durthang_fortress', southwest: 'tunnel_exit' },
        items: [],
        enemies: []
    },

    dimrill_dale: {
        name: "Dimrill Dale",
        description: "A hidden valley on the eastern side of the Misty Mountains. The Mirrormere lake lies still and dark, reflecting the mountain peaks. This was once the heart of the Dwarven realm.",
        exits: { north: 'pelargir_port', south: 'henneth_annun', east: 'morgul_vale', northeast: 'ithilien_woods' },
        items: ['mirrormere_water'],
        enemies: []
    },

    // Additional side chambers and passages
    mines_level1: {
        name: "Upper Mines",
        description: "Mining tunnels from the upper levels. Tools and carts lie abandoned as if the miners left in great haste.",
        exits: {  },
        items: ['miners_lamp', 'iron_ore'],
        enemies: ['goblin', 'goblin']
    },

    mines_level2: {
        name: "Deep Mines",
        description: "Deeper mining tunnels. The walls glitter with veins of various ores. The dwarves were master miners.",
        exits: { north: 'balin_tomb', south: 'durin_throne_hall', east: 'endless_stair_top', west: 'twenty_first_hall', northeast: 'royal_tombs', northwest: 'seventh_level', southeast: 'royal_armory' },
        items: ['silver_ore', 'copper_ore'],
        enemies: ['cave_troll', 'goblin']
    },

    endless_stair_top: {
        name: "Top of the Endless Stair",
        description: "An impossibly long spiral staircase winds down into darkness, carved from a single stone pillar. The dwarves built wonders that will never be matched.",
        exits: { north: 'royal_tombs', south: 'royal_armory', east: 'hall_of_kings', west: 'mines_level2', northeast: 'goblin_warren', northwest: 'balin_tomb', southeast: 'the_unending_stair_middle', southwest: 'durin_throne_hall' },
        items: [],
        enemies: []
    },

    endless_stair_bottom: {
        name: "Bottom of the Endless Stair",
        description: "After a seemingly endless descent, you reach the bottom of the stair. Ancient halls stretch in all directions.",
        exits: { north: 'royal_armory', west: 'smelting_chambers', northeast: 'the_unending_stair_middle', northwest: 'durin_throne_hall' },
        items: ['ancient_key'],
        enemies: ['orc_warrior']
    },

    // Connection to Lothlórien (for future expansion)
    lothlorien_border: {
        name: "Border of Lothlórien",
        description: "Golden mallorn trees rise before you, marking the borders of the elven realm of Lothlórien. You sense you are being watched.",
        exits: { south: 'cerin_amroth', northeast: 'henneth_annun', southeast: 'silverlode_banks' },
        items: [],
        enemies: []
    },

    // LOTHLÓ RIEN - The Golden Wood
    cerin_amroth: {
        name: "Cerin Amroth",
        description: "A high hill crowned with two great trees. Their bark is silver and gold, and their leaves are golden. Between them runs a white stair. The air itself seems to shimmer.",
        exits: { north: 'lothlorien_border', south: 'caras_galadhon', east: 'silverlode_banks', southeast: 'anduin_approach', southwest: 'mirror_chamber' },
        items: ['golden_leaf', 'silver_bark'],
        enemies: []
    },

    caras_galadhon: {
        name: "Caras Galadhon - City of the Trees",
        description: "The great city of the Galadhrim, built among the massive mallorn trees. Platforms and flets are connected by rope ladders and walkways. The largest tree holds the halls of Celeborn and Galadriel.",
        exits: { north: 'cerin_amroth', east: 'anduin_approach', west: 'mirror_chamber', northeast: 'silverlode_banks', southeast: 'anduin_midstream', southwest: 'galadriel_court' },
        items: ['lembas_bread', 'miruvor'],
        enemies: []
    },

    galadriel_court: {
        name: "Court of Galadriel",
        description: "High in the tallest mallorn stands the chamber of the Lord and Lady of Lórien. Lady Galadriel regards you with eyes of timeless wisdom. A silver basin filled with water stands nearby - the Mirror of Galadriel.",
        exits: { north: 'mirror_chamber', northeast: 'caras_galadhon' },
        items: ['phial_of_galadriel', 'elven_rope'],
        enemies: []
    },

    mirror_chamber: {
        name: "Chamber of the Mirror",
        description: "A quiet chamber where Galadriel's Mirror stands - a silver basin on a pedestal. The water within shows visions of things that were, things that are, and some things that have not yet come to pass.",
        exits: { south: 'galadriel_court', east: 'caras_galadhon', northeast: 'cerin_amroth' },
        items: [],
        enemies: [],
        puzzle: 'mirror_visions'
    },

    silverlode_banks: {
        name: "Banks of the Silverlode",
        description: "The river Celebrant, called Silverlode, flows swiftly with crystalline water. Its banks are lined with golden elanor flowers and pale niphredil.",
        exits: { south: 'anduin_approach', west: 'cerin_amroth', northeast: 'morgul_pass', northwest: 'lothlorien_border', southeast: 'parth_galen', southwest: 'caras_galadhon' },
        items: ['elanor_flower', 'crystal_water'],
        enemies: []
    },

    anduin_approach: {
        name: "Anduin River - Lothlórien Quays",
        description: "The Great River Anduin flows majestically southward. Elven boats are moored here, waiting to carry travelers downstream.",
        exits: { north: 'silverlode_banks', south: 'anduin_midstream', east: 'parth_galen', west: 'caras_galadhon', northwest: 'cerin_amroth', southeast: 'amon_hen' },
        items: ['elven_boat'],
        enemies: []
    },

    anduin_midstream: {
        name: "Anduin - Midstream",
        description: "You drift on the Great River. The current is strong. Wild forested hills rise on either bank, and to the east, the dark eaves of Mirkwood loom.",
        exits: { north: 'anduin_approach', south: 'rauros_falls_approach', east: 'amon_hen', northeast: 'parth_galen', northwest: 'caras_galadhon', southeast: 'harrowdale' },
        items: [],
        enemies: []
    },

    parth_galen: {
        name: "Parth Galen",
        description: "A green lawn beside the Anduin. A hill rises nearby - Amon Hen, the Hill of Sight. This is where the Fellowship was broken.",
        exits: { south: 'amon_hen', west: 'anduin_approach', northwest: 'silverlode_banks', southwest: 'anduin_midstream' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    amon_hen: {
        name: "Amon Hen - Hill of Sight",
        description: "Ancient stone steps lead to a high seat. From here, one can see far across Middle Earth in all directions - if one dares to look.",
        exits: { north: 'parth_galen', south: 'harrowdale', west: 'anduin_midstream', northwest: 'anduin_approach', southeast: 'meduseld', southwest: 'rauros_falls_approach' },
        items: ['seeing_helm'],
        enemies: []
    },

    // ROHAN - Land of the Horse Lords
    rauros_falls_approach: {
        name: "Approach to Rauros Falls",
        description: "The roar of the great falls fills the air. Mist rises like smoke. This is Rauros, where Anduin plunges down from Nen Hithoel.",
        exits: { north: 'anduin_midstream', south: 'gap_of_rohan', east: 'harrowdale', northeast: 'amon_hen', southeast: 'rohan_plains' },
        items: [],
        enemies: []
    },

    gap_of_rohan: {
        name: "Gap of Rohan",
        description: "A wide pass between the Misty Mountains and the White Mountains. The wind sweeps across endless grasslands. This is the realm of Rohan, land of the horse-lords.",
        exits: { north: 'rauros_falls_approach', south: 'isengard_gates', east: 'rohan_plains', northeast: 'harrowdale', southeast: 'orthanc_base' },
        items: [],
        enemies: ['uruk_hai', 'warg_rider']
    },

    rohan_plains: {
        name: "The Plains of Rohan",
        description: "Endless grasslands stretch to the horizon. Wild horses run free across the plains. In the distance, you see smoke rising from settlements.",
        exits: { north: 'harrowdale', south: 'orthanc_base', east: 'edoras_approach', west: 'gap_of_rohan', northeast: 'meduseld', northwest: 'rauros_falls_approach', southeast: 'edoras_gates', southwest: 'isengard_gates' },
        items: ['wild_horse'],
        enemies: ['wild_horse_aggressive']
    },

    edoras_approach: {
        name: "Road to Edoras",
        description: "A broad road leads up to the hill-city of Edoras. You can see the Golden Hall of Meduseld shining on the hilltop, its roof thatched with gold.",
        exits: { north: 'meduseld', south: 'edoras_gates', west: 'rohan_plains', northwest: 'harrowdale', southwest: 'orthanc_base' },
        items: [],
        enemies: []
    },

    edoras_gates: {
        name: "Gates of Edoras",
        description: "The gates of the capital of Rohan. Guards in mail stand watch. Beyond, the city climbs the hill toward the Golden Hall.",
        exits: { north: 'edoras_approach', west: 'orthanc_base', northwest: 'rohan_plains' },
        items: [],
        enemies: []
    },

    meduseld: {
        name: "Meduseld - The Golden Hall",
        description: "The great hall of Théoden King. Pillars of wood support a roof thatched with gold. Long tables line the hall, and banners of the mark hang from the rafters. The throne stands on a dais.",
        exits: { south: 'edoras_approach', west: 'harrowdale', northwest: 'amon_hen', southwest: 'rohan_plains' },
        items: ['rohirric_sword', 'horn_of_rohan'],
        enemies: []
    },

    harrowdale: {
        name: "Harrowdale",
        description: "A dark valley leading up into the mountains. The road continues to the Dimholt - the Door of the Dead. Few dare venture there.",
        exits: { north: 'amon_hen', south: 'rohan_plains', east: 'meduseld', west: 'rauros_falls_approach', northwest: 'anduin_midstream', southeast: 'edoras_approach', southwest: 'gap_of_rohan' },
        items: [],
        enemies: []
    },

    dunharrow: {
        name: "Dunharrow",
        description: "An ancient fortress carved into the mountainside. Standing stones line the path - the Púkel-men, relics of an older age. The Dark Door looms at the head of the valley.",
        exits: { north: 'aldburg', northeast: 'starkhorn_foothills' },
        items: ['ancient_stones'],
        enemies: []
    },

    paths_of_dead: {
        name: "The Paths of the Dead",
        description: "A black tunnel leads into the mountain. Cold air breathes out from the darkness. Whispers echo in languages long forgotten. Only the dead dwell here.",
        exits: { north: 'elven_craft_hall', south: 'khazad_dum_chasm_view', east: 'singing_groves', west: 'dead_city', northeast: 'fangorn_hidden_path', northwest: 'eastfold_plains', southeast: 'leaflock_meadow' },
        items: [],
        enemies: ['dead_men', 'dead_men', 'dead_king']
    },

    dead_city: {
        name: "City of the Dead",
        description: "An underground city of the dead. Countless skeletons in ancient armor line the walls, waiting... waiting for the king to return and fulfill their oath.",
        exits: { north: 'eastfold_plains', east: 'paths_of_dead', west: 'thranduil_halls_gate', northeast: 'elven_craft_hall', northwest: 'westfold_plains', southeast: 'khazad_dum_chasm_view', southwest: 'skinbark_grove' },
        items: ['oath_stone', 'dead_crown'],
        enemies: []
    },

    helms_gate: {
        name: "Helm's Gate",
        description: "The entrance to Helm's Deep, a great gorge cut into the White Mountains. Massive walls block the way - the Deeping Wall. This fortress has never fallen.",
        exits: { south: 'dimholt_road', east: 'glittering_caves', southeast: 'hidden_valley_white_mountains', southwest: 'snowbourn_banks' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai', 'uruk_hai']
    },

    helms_deep_interior: {
        name: "Helm's Deep",
        description: "A deep gorge with sheer walls. The Deeping Stream flows through. The Hornburg towers above - a great fortress. Caves delve deep into the mountain - the Glittering Caves of Aglarond.",
        exits: { north: 'dunharrow_firtree_grove', northeast: 'deeping_stream_upper', northwest: 'starkhorn_foothills' },
        items: ['helms_hammer'],
        enemies: []
    },

    glittering_caves: {
        name: "Glittering Caves of Aglarond",
        description: "Vast caverns filled with formations of crystal and stone. Columns of calcite rise like trees. The walls sparkle with a thousand gems. 'Such beauty!' Gimli would say.",
        exits: { south: 'hidden_valley_white_mountains', east: 'fangorn_depths', west: 'helms_gate', southeast: 'hornburg_armory', southwest: 'dimholt_road' },
        items: ['cave_crystal', 'cave_pearl', 'star_gem'],
        enemies: []
    },

    // FANGORN FOREST - Domain of the Ents
    fangorn_border: {
        name: "Edge of Fangorn Forest",
        description: "The ancient forest of Fangorn stretches before you. The trees are impossibly old and tall. A sense of watchfulness pervades the air. You hear creaking and groaning from deep within.",
        exits: { east: 'orthanc_chamber', northeast: 'isengard_gates' },
        items: [],
        enemies: []
    },

    fangorn_eaves: {
        name: "Eaves of Fangorn",
        description: "Just within the edge of the forest. Great beech trees tower overhead. Shadows deepen quickly here. Something is moving between the trees...",
        exits: { north: 'the_silent_glade', south: 'anduin_confluence', east: 'mirkwood_edge', west: 'entwash_delta', northeast: 'mirkwood_path_1', northwest: 'elf_path_entrance', southeast: 'grey_havens_docks', southwest: 'wellinghall' },
        items: ['entdraught'],
        enemies: []
    },

    fangorn_depths: {
        name: "Deep in Fangorn",
        description: "The heart of the ancient forest. Trees so old their names are forgotten crowd close. Time moves differently here. You hear a sound like slow, deep laughter.",
        exits: { south: 'hornburg_armory', east: 'entwash', west: 'glittering_caves', southeast: 'west_emnet', southwest: 'hidden_valley_white_mountains' },
        items: ['ancient_oak_heart'],
        enemies: []
    },

    wellinghall: {
        name: "Wellinghall - Hall of the Ents",
        description: "A great natural amphitheater among the trees. A clear stream cascades down the rocks. Treebeard the Ent dwells here - oldest of living things in Middle Earth. 'Hroom, hom!' he grumbles.",
        exits: { north: 'entwash_delta', south: 'mallorn_sanctuary', east: 'anduin_confluence', west: 'leaflock_meadow', northeast: 'fangorn_eaves', northwest: 'singing_groves', southeast: 'celebrant_banks' },
        items: ['ent_staff'],
        enemies: []
    },

    entwash: {
        name: "The Entwash",
        description: "A river flowing from Fangorn Forest into the plains. The water is clear and cold. Great willow trees line the banks.",
        exits: { south: 'west_emnet', west: 'fangorn_depths', southwest: 'hornburg_armory' },
        items: [],
        enemies: []
    },

    east_emnet: {
        name: "East Emnet",
        description: "The eastern plains of Rohan. Grass waves in the wind like a green sea. You can see riders in the distance - the rohirrim on patrol.",
        exits: { north: 'wold_of_rohan', northwest: 'deep_coomb' },
        items: [],
        enemies: []
    },

    isengard_gates: {
        name: "Gates of Isengard",
        description: "The ring of Isengard - a great circular wall of stone. Within stands Orthanc, the black tower of Saruman. Smoke and flame rise from forges beneath. The gates are broken, smashed by the Ents.",
        exits: { north: 'gap_of_rohan', south: 'orthanc_chamber', east: 'orthanc_base', northeast: 'rohan_plains', southwest: 'fangorn_border' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    orthanc_base: {
        name: "Base of Orthanc",
        description: "The tower of Orthanc rises 500 feet, black and adamantine. It has four sheer faces and four sharp corners. No ladder or stair reaches its peak. This was Saruman's fortress.",
        exits: { north: 'rohan_plains', east: 'edoras_gates', west: 'isengard_gates', northeast: 'edoras_approach', northwest: 'gap_of_rohan', southwest: 'orthanc_chamber' },
        items: ['broken_staff'],
        enemies: []
    },

    orthanc_chamber: {
        name: "Orthanc - Saruman's  Chamber",
        description: "The high chamber of Orthanc. Great windows look out in all directions. Books and diagrams are scattered about - Saruman's studies of the old lore. A palantír once stood here.",
        exits: { north: 'isengard_gates', west: 'fangorn_border', northeast: 'orthanc_base' },
        items: ['saruman_scrolls', 'palantir'],
        enemies: []
    },

    // GONDOR - The Realm of the Stewards
    osgiliath_ruins: {
        name: "Ruins of Osgiliath",
        description: "The once-great city of Osgiliath lies in ruins. The Anduin flows through the middle, and broken bridges span the water. Orcs patrol the eastern bank. The road to Minas Tirith lies west.",
        exits: { north: 'east_gate_moria', south: 'minas_morgul_gates', east: 'durthang_fortress', west: 'tunnel_exit', northeast: 'minas_morgul_interior', northwest: 'pelennor_fields', southwest: 'ithilien_woods' },
        items: ['ancient_gondorian_coin'],
        enemies: ['orc_warrior', 'orc_scout']
    },

    pelennor_fields: {
        name: "Pelennor Fields",
        description: "The great fields before Minas Tirith. Farmland stretches to the walls of the White City. The Rammas Echor - the outer wall - has been breached in places. You can see the White Tower rising in the distance.",
        exits: { north: 'mithril_depths_2', south: 'tunnel_exit', east: 'east_gate_moria', west: 'mithril_depths_1', northeast: 'rath_dinen', northwest: 'citadel_guards_hall', southeast: 'osgiliath_ruins', southwest: 'white_tower' },
        items: ['gondorian_banner'],
        enemies: ['orc_warrior']
    },

    minas_tirith_gates: {
        name: "Gates of Minas Tirith",
        description: "The Great Gate of Minas Tirith, the White City. Seven tiers rise above you, each level higher than the last. The White Tower of Ecthelion pierces the sky. Guards in white and silver stand watch.",
        exits: { north: 'bridge_of_khazad_dum', east: 'white_tower', northeast: 'mithril_depths_1', northwest: 'the_unending_stair_middle', southeast: 'pelargir_port' },
        items: [],
        enemies: []
    },

    first_level: {
        name: "First Level - Minas Tirith",
        description: "The lowest level of the city. Houses and shops line the streets. The White Tree fountain stands in the center. The way up leads to the Citadel.",
        exits: { north: 'minas_tirith_stables', up: 'second_level', down: 'minas_tirith_gates' },
        items: ['white_tree_sapling'],
        enemies: []
    },

    second_level: {
        name: "Second Level - Minas Tirith",
        description: "Houses of stone and wood, built into the mountainside. The streets are clean and well-kept. You can see the Citadel above.",
        exits: { north: 'deep_mines_hub', south: 'third_level', east: 'fourth_level', west: 'iron_mines_2', northeast: 'mithril_mine', southeast: 'sixth_level', southwest: 'goblin_warren', up: 'third_level', down: 'first_level' },
        items: ['gondorian_sword'],
        enemies: []
    },

    third_level: {
        name: "Third Level - Minas Tirith",
        description: "The level of the Houses of Healing. White buildings with gardens. The air is filled with the scent of athelas.",
        exits: { north: 'second_level', south: 'minas_tirith_houses_of_healing', east: 'sixth_level', west: 'goblin_warren', northeast: 'fourth_level', northwest: 'iron_mines_2', southeast: 'citadel_guards_hall', southwest: 'hall_of_kings', up: 'fourth_level', down: 'second_level' },
        items: ['athelas', 'healing_herbs'],
        enemies: []
    },

    fourth_level: {
        name: "Fourth Level - Minas Tirith",
        description: "Barracks and armories. The soldiers of Gondor train here. You hear the ring of steel on steel.",
        exits: { north: 'mithril_mine', south: 'sixth_level', west: 'second_level', northeast: 'fifth_level', northwest: 'deep_mines_hub', southwest: 'third_level', up: 'fifth_level', down: 'third_level' },
        items: ['gondorian_armor'],
        enemies: []
    },

    fifth_level: {
        name: "Fifth Level - Minas Tirith",
        description: "The level of the Great Hall. Tapestries depicting the history of Gondor line the walls.",
        exits: { north: 'nameless_tunnels', west: 'mithril_mine', northwest: 'the_dark_lake', southeast: 'lossarnach_valleys', southwest: 'fourth_level', up: 'sixth_level', down: 'fourth_level' },
        items: ['ancient_tapestry'],
        enemies: []
    },

    sixth_level: {
        name: "Sixth Level - Minas Tirith",
        description: "The level of the Citadel. The White Tower looms above. This is the heart of Gondor.",
        exits: { north: 'fourth_level', south: 'citadel_guards_hall', west: 'third_level', northwest: 'second_level', southeast: 'mithril_depths_2', southwest: 'minas_tirith_houses_of_healing', up: 'white_tower', down: 'fifth_level' },
        items: ['gondorian_crown'],
        enemies: []
    },

    white_tower: {
        name: "White Tower of Ecthelion",
        description: "The highest point of Minas Tirith. From here you can see for leagues in every direction. The throne of the Stewards stands empty, awaiting the return of the King.",
        exits: { north: 'mithril_depths_1', south: 'pelargir_port', east: 'tunnel_exit', west: 'minas_tirith_gates', northeast: 'pelennor_fields', northwest: 'bridge_of_khazad_dum', southeast: 'ithilien_woods' },
        items: ['palantir_of_minas_tirith', 'steward_crown'],
        enemies: []
    },

    rath_dinen: {
        name: "Rath Dínen - Street of the Dead",
        description: "The silent street where the Kings and Stewards of Gondor are laid to rest. Tombs line both sides. A sense of ancient majesty and sorrow fills the air.",
        exits: { north: 'iron_mines_1', south: 'east_gate_moria', west: 'mithril_depths_2', southeast: 'minas_morgul_interior', southwest: 'pelennor_fields' },
        items: [],
        enemies: []
    },

    house_of_stewards: {
        name: "House of the Stewards",
        description: "The tomb of the Stewards of Gondor. White marble and silver. The tombs of Denethor and his forefathers lie here.",
        exits: {  },
        items: ['steward_ring', 'ancient_scroll'],
        enemies: []
    },

    // MORDOR - The Land of Shadow
    morgul_vale: {
        name: "Morgul Vale",
        description: "A dark valley leading to Mordor. The air is foul and the ground is poisoned. The Tower of Cirith Ungol looms ahead. A sense of dread fills you.",
        exits: { north: 'ithilien_woods', east: 'cirith_ungol', west: 'dimrill_dale', northeast: 'minas_morgul_gates', northwest: 'pelargir_port', southeast: 'shelob_lair', southwest: 'henneth_annun' },
        items: [],
        enemies: ['orc_warrior', 'orc_scout', 'ringwraith']
    },

    morgul_pass: {
        name: "Morgul Pass",
        description: "A narrow pass through the mountains. The path is treacherous and watched. The very stones seem to whisper of evil.",
        exits: { northeast: 'shelob_lair', northwest: 'henneth_annun', southwest: 'silverlode_banks' },
        items: ['morgul_blade'],
        enemies: ['orc_warrior', 'spider_guard']
    },

    cirith_ungol: {
        name: "Cirith Ungol - Tower of the Spider",
        description: "A great tower built into the mountainside. Shelob's lair lies below. The tower is dark and foreboding, its windows like empty eyes.",
        exits: { north: 'minas_morgul_gates', south: 'shelob_lair', east: 'mordor_plains', west: 'morgul_vale', northwest: 'ithilien_woods', southeast: 'gorgoroth_plateau' },
        items: ['tower_key'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    shelob_lair: {
        name: "Shelob's Lair",
        description: "A vast web-filled cave. Sticky strands cover every surface. In the darkness, you sense something huge and hungry moving. The stench is overwhelming.",
        exits: { north: 'cirith_ungol', east: 'gorgoroth_plateau', northeast: 'mordor_plains', northwest: 'morgul_vale', southeast: 'mount_doom_approach', southwest: 'morgul_pass' },
        items: [],
        enemies: ['shelob']
    },

    tunnel_exit: {
        name: "Tunnel Exit",
        description: "You emerge from the tunnel into the desolation of Mordor. The land is barren and black. Mount Doom looms in the distance, belching smoke and fire.",
        exits: { north: 'pelennor_fields', south: 'ithilien_woods', east: 'osgiliath_ruins', west: 'white_tower', northeast: 'east_gate_moria', northwest: 'mithril_depths_1', southeast: 'minas_morgul_gates', southwest: 'pelargir_port' },
        items: ['sting_glow'],
        enemies: []
    },

    mordor_plains: {
        name: "Plains of Mordor",
        description: "A wasteland of ash and rock. Nothing grows here. The sky is dark with smoke. Orc patrols march in the distance. Mount Doom dominates the horizon.",
        exits: { south: 'gorgoroth_plateau', west: 'cirith_ungol', northwest: 'minas_morgul_gates', southwest: 'shelob_lair' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'warg_rider']
    },

    black_gate: {
        name: "The Black Gate of Mordor",
        description: "The Morannon - the great gate of Mordor. Two massive towers flank an iron gate. The ground before it is littered with bones. This is the only way into the Dark Land.",
        exits: {  },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'orc_warrior', 'troll_guard']
    },

    barad_dur_approach: {
        name: "Approach to Barad-dûr",
        description: "The Dark Tower of Sauron rises impossibly high, wreathed in shadow and flame. The Eye watches from above. The very air burns with malice.",
        exits: {  },
        items: [],
        enemies: ['ringwraith', 'ringwraith', 'orc_warrior']
    },

    barad_dur_base: {
        name: "Base of Barad-dûr",
        description: "The foundation of the Dark Tower. The ground is cracked and black. Fires burn in pits. This is the heart of Sauron's power.",
        exits: { west: 'barad_dur_chamber', southwest: 'barad_dur_throne_room' },
        items: ['dark_ring_fragment'],
        enemies: ['ringwraith', 'orc_warrior']
    },

    barad_dur_chamber: {
        name: "Chamber of the Dark Lord",
        description: "The highest chamber of Barad-dûr. The Eye of Sauron burns here, seeing all. The One Ring was forged in the fires below. This is where the fate of Middle Earth will be decided.",
        exits: { south: 'barad_dur_throne_room', east: 'barad_dur_base' },
        items: ['sauron_armor_fragment'],
        enemies: ['sauron_manifestation']
    },

    mount_doom_approach: {
        name: "Approach to Mount Doom",
        description: "Orodruin - the Mountain of Fire. Lava flows down its sides. The air is thick with ash and the stench of sulfur. The path to the summit is treacherous.",
        exits: { north: 'gorgoroth_plateau', south: 'mount_doom_summit', northwest: 'shelob_lair' },
        items: [],
        enemies: ['lava_elemental']
    },

    mount_doom_summit: {
        name: "Summit of Mount Doom",
        description: "The Crack of Doom. A chasm of fire at the heart of the mountain. This is where the One Ring was forged, and where it must be destroyed. The heat is unbearable.",
        exits: { north: 'mount_doom_approach', south: 'mount_doom_sammath_naur' },
        items: [],
        enemies: ['gollum_final'],
        puzzle: 'destroy_ring'
    }
};
