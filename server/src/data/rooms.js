// Room definitions for Middle Earth
export const rooms = {
    // THE SHIRE - Starting Area
    bag_end: {
        name: "Bag End",
        description: "You stand in the cozy hobbit-hole of Bag End. Round windows let in cheerful sunlight, and the smell of pipeweed lingers in the air. A large round door leads outside to the garden.",
        exits: { south: 'hobbiton_square' },
        items: ['walking_stick', 'lembas_bread'],
        enemies: []
    },

    hobbiton_square: {
        name: "Hobbiton Square",
        description: "The heart of Hobbiton bustles with hobbits going about their business. The Green Dragon Inn stands to the east, and Bag End lies to the north. A road leads south toward the Brandywine Bridge.",
        exits: {
            north: 'bag_end',
            east: 'green_dragon',
            south: 'brandywine_bridge',
            west: 'bywater'
        },
        items: ['silver_coin'],
        enemies: []
    },

    green_dragon: {
        name: "The Green Dragon Inn",
        description: "A warm, welcoming tavern filled with the sounds of laughter and clinking mugs. The fireplace crackles merrily. The bartender eyes you with a knowing smile.",
        exits: { west: 'hobbiton_square' },
        items: ['health_potion', 'old_map'],
        enemies: []
    },

    bywater: {
        name: "Bywater",
        description: "A small village on the Water. Smoke rises from chimneys, and you hear the sound of a mill wheel turning. The road continues north to Hobbiton.",
        exits: {
            east: 'hobbiton_square',
            south: 'woody_end'
        },
        items: ['rope'],
        enemies: []
    },

    woody_end: {
        name: "Woody End",
        description: "The edge of the woodland. Trees grow thick here, and you hear strange rustlings in the undergrowth. An old path leads deeper into the forest.",
        exits: {
            north: 'bywater',
            south: 'stock_road'
        },
        items: [],
        enemies: ['wild_wolf']
    },

    brandywine_bridge: {
        name: "Brandywine Bridge",
        description: "An ancient stone bridge crossing the Brandywine River. The water flows swiftly beneath. To the south lies the Old Forest, dark and forbidding. East leads to Bree.",
        exits: {
            north: 'hobbiton_square',
            east: 'bree_gate',
            south: 'old_forest_entrance'
        },
        items: [],
        enemies: []
    },

    stock_road: {
        name: "Stock Road",
        description: "A winding country road through farmland. You can see the lights of Stock village in the distance.",
        exits: {
            north: 'woody_end',
            east: 'marish'
        },
        items: ['carrot'],
        enemies: []
    },

    marish: {
        name: "The Marish",
        description: "Marshy lowlands near the Brandywine. The ground is soft and waterlogged. Strange lights flicker in the distance.",
        exits: { west: 'stock_road' },
        items: ['mysterious_stone'],
        enemies: ['marsh_phantom']
    },

    old_forest_entrance: {
        name: "Old Forest Entrance",
        description: "The trees here are ancient and twisted, their branches reaching out like gnarled fingers. A feeling of watchfulness pervades the air. Few hobbits dare enter.",
        exits: {
            north: 'brandywine_bridge',
            south: 'old_forest_depth'
        },
        items: [],
        enemies: ['huorn']
    },

    old_forest_depth: {
        name: "Deep in the Old Forest",
        description: "The forest closes in around you. The trees seem almost alive, and you hear whispers on the wind. A clearing lies ahead with a great willow tree.",
        exits: {
            north: 'old_forest_entrance',
            south: 'withywindle'
        },
        items: ['ancient_acorn'],
        enemies: []
    },

    withywindle: {
        name: "The Withywindle",
        description: "A lazy river flows through a deep dell. An enormous willow tree stands at the water's edge, its roots reaching into the dark water. You feel an overwhelming drowsiness.",
        exits: {
            north: 'old_forest_depth',
            east: 'bombadil_house'
        },
        items: [],
        enemies: ['old_man_willow'],
        puzzle: 'willow_riddle'
    },

    bombadil_house: {
        name: "Tom Bombadil's House",
        description: "A cheerful cottage in a clearing. Flowers bloom all around, and you hear singing from within: 'Hey dol! merry dol! ring a dong dillo!' The door stands open.",
        exits: { west: 'withywindle' },
        items: ['bombadil_gift', 'health_potion'],
        enemies: []
    },

    // BREE & WEATHERTOP
    bree_gate: {
        name: "Bree Gate",
        description: "The western gate of Bree, a village of Men. The gatekeeper watches you suspiciously. The town stretches out before you, and you can see The Prancing Pony inn.",
        exits: {
            west: 'brandywine_bridge',
            east: 'bree_square',
            south: 'chetwood'
        },
        items: [],
        enemies: []
    },

    bree_square: {
        name: "Bree Square",
        description: "The center of Bree. Shops and houses line the square. The Prancing Pony inn stands prominently with its sign swinging in the breeze.",
        exits: {
            west: 'bree_gate',
            north: 'prancing_pony',
            east: 'bree_east_road'
        },
        items: ['brass_key'],
        enemies: []
    },

    prancing_pony: {
        name: "The Prancing Pony",
        description: "A busy inn filled with travelers and locals. The innkeeper, Barliman Butterbur, hurries between tables. You notice a hooded figure in the corner watching you intently.",
        exits: { south: 'bree_square' },
        items: ['ranger_cloak'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood Forest",
        description: "A wild woodland south of Bree. The trees are thick and you hear wolves howling in the distance.",
        exits: {
            north: 'bree_gate',
            east: 'midgewater_marshes'
        },
        items: [],
        enemies: ['brigand', 'wild_wolf']
    },

    bree_east_road: {
        name: "East Road from Bree",
        description: "The Great East Road stretches before you. To the south, you can see the ominous hill of Weathertop rising against the sky.",
        exits: {
            west: 'bree_square',
            south: 'weathertop_base',
            east: 'last_bridge'
        },
        items: [],
        enemies: []
    },

    weathertop_base: {
        name: "Base of Weathertop",
        description: "The ancient watchtower of Amon Sûl looms above you. Stone ruins are scattered about, and you feel a sense of ancient evil. A path winds up the hillside.",
        exits: {
            north: 'bree_east_road',
            up: 'weathertop_summit'
        },
        items: ['ancient_blade'],
        enemies: ['orc_scout']
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruined tower atop Weathertop. Ancient stones lie scattered, and burn marks scar the ground. The view stretches for miles in all directions. You feel eyes watching you from the shadows.",
        exits: { down: 'weathertop_base' },
        items: ['athelas'],
        enemies: ['ringwraith'],
        puzzle: 'tower_inscription'
    },

    midgewater_marshes: {
        name: "Midgewater Marshes",
        description: "A miserable, swampy wasteland. Clouds of midges buzz around your head, and the ground squelches beneath your feet. Will-o'-wisps dance in the distance.",
        exits: {
            west: 'chetwood',
            east: 'weatherhills'
        },
        items: [],
        enemies: ['giant_midge_swarm']
    },

    weatherhills: {
        name: "The Weather Hills",
        description: "Rolling hills covered in rough grass and stone. Ancient barrows dot the landscape, remnants of long-dead kings.",
        exits: {
            west: 'midgewater_marshes',
            east: 'last_bridge'
        },
        items: ['barrow_treasure'],
        enemies: ['barrow_wight']
    },

    last_bridge: {
        name: "The Last Bridge",
        description: "A stone bridge crossing the Hoarwell river. The river rushes below, and the road continues east toward Rivendell.",
        exits: {
            west: 'bree_east_road',
            east: 'trollshaws'
        },
        items: ['elven_berries'],
        enemies: []
    },

    // TROLLSHAWS & RIVENDELL
    trollshaws: {
        name: "The Trollshaws",
        description: "A wild, hilly region. Three large stone trolls stand frozen in a clearing, turned to stone by sunlight. Their treasure must be nearby.",
        exits: {
            west: 'last_bridge',
            east: 'ford_of_bruinen',
            north: 'troll_cave'
        },
        items: [],
        enemies: []
    },

    troll_cave: {
        name: "Troll Cave",
        description: "A dank cave reeking of troll. Bones litter the floor. In the dim light, you see a chest partially buried in the debris.",
        exits: { south: 'trollshaws' },
        items: ['sting', 'orcrist', 'gold_treasure'],
        enemies: [],
        puzzle: 'troll_chest'
    },

    ford_of_bruinen: {
        name: "Ford of Bruinen",
        description: "A shallow ford across the Loudwater river. On the far bank, you can see the hidden valley of Rivendell. The water sparkles with an otherworldly light.",
        exits: {
            west: 'trollshaws',
            east: 'rivendell_gates'
        },
        items: [],
        enemies: []
    },

    rivendell_gates: {
        name: "Gates of Rivendell",
        description: "Hidden gates lead into the Last Homely House. Waterfalls cascade around you, and elven voices sing in the distance. You feel peace wash over you.",
        exits: {
            west: 'ford_of_bruinen',
            east: 'rivendell_hall'
        },
        items: [],
        enemies: []
    },

    rivendell_hall: {
        name: "Hall of Fire - Rivendell",
        description: "A magnificent hall with a great fire burning eternally in the center. Elven lords sit in counsel, and maps and ancient books line the walls. Elrond Half-elven regards you warmly.",
        exits: {
            west: 'rivendell_gates',
            north: 'rivendell_library',
            south: 'rivendell_forge'
        },
        items: ['mithril_mail', 'miruvor'],
        enemies: []
    },

    rivendell_library: {
        name: "Library of Rivendell",
        description: "Countless scrolls and books fill this peaceful room. The knowledge of ages is stored here. You could spend years reading these tomes.",
        exits: { south: 'rivendell_hall' },
        items: ['ancient_tome', 'scroll_of_wisdom'],
        enemies: [],
        puzzle: 'elven_lore'
    },

    rivendell_forge: {
        name: "Rivendell Forge",
        description: "An elven smithy where legendary weapons were crafted. The forge still glows with magical fire.",
        exits: { north: 'rivendell_hall', south: 'hollin_gate' },
        items: ['elvish_blade'],
        enemies: []
    },

    //MORIA - The Mines of Moria
    hollin_gate: {
        name: "Hollin Gate",
        description: "The western approach to Moria. You stand before a sheer cliff face beside a dark lake. In the rock, barely visible, are the outlines of great doors.",
        exits: { north: 'rivendell_forge', south: 'doors_of_durin' },
        items: ['mithril_fragment'],
        enemies: ['watcher_in_water']
    },

    doors_of_durin: {
        name: "Doors of Durin - West Gate of Moria",
        description: "The great Doors of Durin, Lord of Moria! Under the moon they shine. Ithildin script glows faintly: 'Speak, friend, and enter.' The doors stand shut, blocking the way into darkness.",
        exits: { north: 'hollin_gate', east: 'moria_entrance' },
        items: [],
        enemies: [],
        puzzle: 'gateway_of_moria',
        requirements: [{ type: 'puzzle', puzzle: 'gateway_of_moria' }]
    },

    moria_entrance: {
        name: "First Hall of Moria",
        description: "You step into darkness. The vast hall is pitch black, your torchlight barely penetrating the gloom. Columns of stone rise into shadows above. A sense of ancient grandeur mixed with decay fills the air.",
        exits: { west: 'doors_of_durin', east: 'twenty_first_hall', down: 'mines_level1' },
        items: ['old_torch', 'dwarven_helm'],
        enemies: ['goblin', 'goblin']
    },

    twenty_first_hall: {
        name: "Twenty-First Hall",
        description: "A massive hall supported by huge pillars. The ceiling is lost in darkness high above. Three passages lead deeper into Moria. Faded dwarven runes cover the walls.",
        exits: { west: 'moria_entrance', north: 'seventh_level', east: 'balin_tomb', south: 'mines_level2' },
        items: ['ancient_hammer', 'iron_ore'],
        enemies: ['orc_warrior', 'goblin']
    },

    balin_tomb: {
        name: "Chamber of Mazarbul - Balin's Tomb",
        description: "A square chamber with a shaft of light falling through a crack in the ceiling. A great stone chest stands in the center - the tomb of Balin, Lord of Moria. A tattered book lies beside it.",
        exits: { west: 'twenty_first_hall' },
        items: ['book_of_mazarbul', 'mithril_chain', 'balin_crown'],
        enemies: [],
        puzzle: 'chamber_records'
    },

    seventh_level: {
        name: "Seventh Level",
        description: "A maze of passages and chambers. You hear the sound of drums echoing from below: 'doom, doom.' Torchlight flickers on ancient walls.",
        exits: { south: 'twenty_first_hall', east: 'endless_stair_top', down: 'sixth_level' },
        items: [],
        enemies: ['goblin', 'orc_warrior', 'orc_warrior']
    },

    sixth_level: {
        name: "Sixth Level - Goblin Territory",
        description: "The goblins have claimed this level. Crude fortifications block the passages. You hear guttural voices and the clatter of weapons.",
        exits: { up: 'seventh_level', down: 'fifth_level', east: 'goblin_warren' },
        items: [],
        enemies: ['goblin', 'goblin', 'goblin_chieftain']
    },

    goblin_warren: {
        name: "Goblin Warren",
        description: "A warren of small tunnels and chambers where the goblins nest. Bones and filth litter the floor. The smell is overwhelming.",
        exits: { west: 'sixth_level' },
        items: ['goblin_treasure', 'rusty_armor'],
        enemies: ['goblin', 'goblin', 'orc_warrior']
    },

    fifth_level: {
        name: "Fifth Level",
        description: "Ancient forges line this level. Cold and dark now, but you can imagine dwarven smiths once laboring here, crafting legendary weapons and armor.",
        exits: { up: 'sixth_level', down: 'fourth_level' },
        items: ['forge_hammer', 'coal'],
        enemies: ['goblin']
    },

    fourth_level: {
        name: "Fourth Level",
        description: "Water drips from the ceiling forming pools on the floor. The air is damp and cold. You hear distant echoes - or are they whispers?",
        exits: { up: 'fifth_level', down: 'third_level' },
        items: [],
        enemies: ['cave_troll']
    },

    third_level: {
        name: "Third Level - The Deeps",
        description: "You have descended into the deep places of the world. The stones here are ancient beyond reckoning. A faint heat rises from below.",
        exits: { up: 'fourth_level', down: 'second_level', east: 'durin_chamber' },
        items: ['deep_crystal'],
        enemies: ['orc_warrior']
    },

    durin_chamber: {
        name: "Durin's Chamber",
        description: "A sacred chamber dedicated to Durin the Deathless, eldest of the Seven Fathers of the Dwarves. His likeness is carved into the rock, crowned and bearing the tools of his craft.",
        exits: { west: 'third_level' },
        items: ['durin_axe', 'seven_stars_token'],
        enemies: []
    },

    second_level: {
        name: "Second Level - Abandoned Mines",
        description: "Vast mines stretch out in all directions. The dwarves delved greedily and deep here, seeking mithril. Something changed when they delved too deep...",
        exits: { up: 'third_level', down: 'first_level', south: 'mithril mine' },
        items: ['pickaxe'],
        enemies: ['goblin', 'orc_warrior']
    },

    mithril_mine: {
        name: "The Mithril Vein",
        description: "At last! A seam of mithril - the truest silver, more precious than gold. It gleams in your torchlight like starlight frozen in stone.",
        exits: { north: 'second_level' },
        items: ['mithril_ore', 'mithril_ore', 'mithril_nugget'],
        enemies: []
    },

    first_level: {
        name: "First Level - The Lowest Deep",
        description: "The deepest level of Moria. The heat is oppressive now. Far below, you sense something ancient and terrible stirring in darkness. This is the place they should never have delved.",
        exits: { up: 'second_level', east: 'bridge_of_khazad_dum' },
        items: [],
        enemies: ['orc_warrior', 'goblin']
    },

    bridge_of_khazad_dum: {
        name: "Bridge of Khazad-dûm",
        description: "A narrow bridge of stone, carved from the living rock, spanning a bottomless chasm. Below, fire and smoke rise from unfathomable depths. This is a place of doom.",
        exits: { west: 'first_level', east: 'east_gate_approach' },
        items: [],
        enemies: ['durin_bane']
    },

    east_gate_approach: {
        name: "Approach to the East Gate",
        description: "The halls grow lighter. Ahead you can see daylight - the East Gate! Freedom from the darkness of Moria is at hand.",
        exits: { west: 'bridge_of_khazad_dum', east: 'east_gate_moria' },
        items: ['health_potion', 'lembas_bread'],
        enemies: []
    },

    east_gate_moria: {
        name: "East Gate of Moria",
        description: "You stumble out into daylight, half-blinded after the darkness. The Dimrill Dale spreads below, and beyond rise the peaks of the Misty Mountains.",
        exits: { west: 'east_gate_approach', south: 'dimrill_dale' },
        items: [],
        enemies: []
    },

    dimrill_dale: {
        name: "Dimrill Dale",
        description: "A hidden valley on the eastern side of the Misty Mountains. The Mirrormere lake lies still and dark, reflecting the mountain peaks. This was once the heart of the Dwarven realm.",
        exits: { north: 'east_gate_moria', south: 'lothlorien_border' },
        items: ['mirrormere_water'],
        enemies: []
    },

    // Additional side chambers and passages
    mines_level1: {
        name: "Upper Mines",
        description: "Mining tunnels from the upper levels. Tools and carts lie abandoned as if the miners left in great haste.",
        exits: { up: 'moria_entrance' },
        items: ['miners_lamp', 'iron_ore'],
        enemies: ['goblin', 'goblin']
    },

    mines_level2: {
        name: "Deep Mines",
        description: "Deeper mining tunnels. The walls glitter with veins of various ores. The dwarves were master miners.",
        exits: { north: 'twenty_first_hall' },
        items: ['silver_ore', 'copper_ore'],
        enemies: ['cave_troll', 'goblin']
    },

    endless_stair_top: {
        name: "Top of the Endless Stair",
        description: "An impossibly long spiral staircase winds down into darkness, carved from a single stone pillar. The dwarves built wonders that will never be matched.",
        exits: { west: 'seventh_level', down: 'endless_stair_bottom' },
        items: [],
        enemies: []
    },

    endless_stair_bottom: {
        name: "Bottom of the Endless Stair",
        description: "After a seemingly endless descent, you reach the bottom of the stair. Ancient halls stretch in all directions.",
        exits: { up: 'endless_stair_top', north: 'first_level' },
        items: ['ancient_key'],
        enemies: ['orc_warrior']
    },

    // Connection to Lothlórien (for future expansion)
    lothlorien_border: {
        name: "Border of Lothlórien",
        description: "Golden mallorn trees rise before you, marking the borders of the elven realm of Lothlórien. You sense you are being watched.",
        exits: { north: 'dimrill_dale', south: 'cerin_amroth' },
        items: [],
        enemies: []
    },

    // LOTHLÓ RIEN - The Golden Wood
    cerin_amroth: {
        name: "Cerin Amroth",
        description: "A high hill crowned with two great trees. Their bark is silver and gold, and their leaves are golden. Between them runs a white stair. The air itself seems to shimmer.",
        exits: { north: 'lothlorien_border', south: 'caras_galadhon', east: 'silverlode_banks' },
        items: ['golden_leaf', 'silver_bark'],
        enemies: []
    },

    caras_galadhon: {
        name: "Caras Galadhon - City of the Trees",
        description: "The great city of the Galadhrim, built among the massive mallorn trees. Platforms and flets are connected by rope ladders and walkways. The largest tree holds the halls of Celeborn and Galadriel.",
        exits: { north: 'cerin_amroth', up: 'galadriel_court' },
        items: ['lembas_bread', 'miruvor'],
        enemies: []
    },

    galadriel_court: {
        name: "Court of Galadriel",
        description: "High in the tallest mallorn stands the chamber of the Lord and Lady of Lórien. Lady Galadriel regards you with eyes of timeless wisdom. A silver basin filled with water stands nearby - the Mirror of Galadriel.",
        exits: { down: 'caras_galadhon', west: 'mirror_chamber' },
        items: ['phial_of_galadriel', 'elven_rope'],
        enemies: []
    },

    mirror_chamber: {
        name: "Chamber of the Mirror",
        description: "A quiet chamber where Galadriel's Mirror stands - a silver basin on a pedestal. The water within shows visions of things that were, things that are, and some things that have not yet come to pass.",
        exits: { east: 'galadriel_court' },
        items: [],
        enemies: [],
        puzzle: 'mirror_visions'
    },

    silverlode_banks: {
        name: "Banks of the Silverlode",
        description: "The river Celebrant, called Silverlode, flows swiftly with crystalline water. Its banks are lined with golden elanor flowers and pale niphredil.",
        exits: { west: 'cerin_amroth', south: 'anduin_approach' },
        items: ['elanor_flower', 'crystal_water'],
        enemies: []
    },

    anduin_approach: {
        name: "Anduin River - Lothlórien Quays",
        description: "The Great River Anduin flows majestically southward. Elven boats are moored here, waiting to carry travelers downstream.",
        exits: { north: 'silverlode_banks', south: 'anduin_midstream', east: 'parth_galen' },
        items: ['elven_boat'],
        enemies: []
    },

    anduin_midstream: {
        name: "Anduin - Midstream",
        description: "You drift on the Great River. The current is strong. Wild forested hills rise on either bank.",
        exits: { north: 'anduin_approach', south: 'rauros_falls_approach' },
        items: [],
        enemies: []
    },

    parth_galen: {
        name: "Parth Galen",
        description: "A green lawn beside the Anduin. A hill rises nearby - Amon Hen, the Hill of Sight. This is where the Fellowship was broken.",
        exits: { west: 'anduin_approach', up: 'amon_hen' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    amon_hen: {
        name: "Amon Hen - Hill of Sight",
        description: "Ancient stone steps lead to a high seat. From here, one can see far across Middle Earth in all directions - if one dares to look.",
        exits: { down: 'parth_galen' },
        items: ['seeing_helm'],
        enemies: []
    },

    // ROHAN - Land of the Horse Lords
    rauros_falls_approach: {
        name: "Approach to Rauros Falls",
        description: "The roar of the great falls fills the air. Mist rises like smoke. This is Rauros, where Anduin plunges down from Nen Hithoel.",
        exits: { north: 'anduin_midstream', south: 'gap_of_rohan' },
        items: [],
        enemies: []
    },

    gap_of_rohan: {
        name: "Gap of Rohan",
        description: "A wide pass between the Misty Mountains and the White Mountains. The wind sweeps across endless grasslands. This is the realm of Rohan, land of the horse-lords.",
        exits: { north: 'rauros_falls_approach', east: 'rohan_plains', south: 'fangorn_border' },
        items: [],
        enemies: ['uruk_hai', 'warg_rider']
    },

    rohan_plains: {
        name: "The Plains of Rohan",
        description: "Endless grasslands stretch to the horizon. Wild horses run free across the plains. In the distance, you see smoke rising from settlements.",
        exits: { west: 'gap_of_rohan', east: 'edoras_approach', south: 'fangorn_eaves' },
        items: ['wild_horse'],
        enemies: ['wild_horse_aggressive']
    },

    edoras_approach: {
        name: "Road to Edoras",
        description: "A broad road leads up to the hill-city of Edoras. You can see the Golden Hall of Meduseld shining on the hilltop, its roof thatched with gold.",
        exits: { west: 'rohan_plains', up: 'edoras_gates' },
        items: [],
        enemies: []
    },

    edoras_gates: {
        name: "Gates of Edoras",
        description: "The gates of the capital of Rohan. Guards in mail stand watch. Beyond, the city climbs the hill toward the Golden Hall.",
        exits: { down: 'edoras_approach', north: 'meduseld' },
        items: [],
        enemies: []
    },

    meduseld: {
        name: "Meduseld - The Golden Hall",
        description: "The great hall of Théoden King. Pillars of wood support a roof thatched with gold. Long tables line the hall, and banners of the mark hang from the rafters. The throne stands on a dais.",
        exits: { south: 'edoras_gates', west: 'harrowdale' },
        items: ['rohirric_sword', 'horn_of_rohan'],
        enemies: []
    },

    harrowdale: {
        name: "Harrowdale",
        description: "A dark valley leading up into the mountains. The road continues to the Dimholt - the Door of the Dead. Few dare venture there.",
        exits: { east: 'meduseld', south: 'dunharrow' },
        items: [],
        enemies: []
    },

    dunharrow: {
        name: "Dunharrow",
        description: "An ancient fortress carved into the mountainside. Standing stones line the path - the Púkel-men, relics of an older age. The Dark Door looms at the head of the valley.",
        exits: { north: 'harrowdale', west: 'paths_of_dead' },
        items: ['ancient_stones'],
        enemies: []
    },

    paths_of_dead: {
        name: "The Paths of the Dead",
        description: "A black tunnel leads into the mountain. Cold air breathes out from the darkness. Whispers echo in languages long forgotten. Only the dead dwell here.",
        exits: { east: 'dunharrow', west: 'dead_city' },
        items: [],
        enemies: ['dead_men', 'dead_men', 'dead_king']
    },

    dead_city: {
        name: "City of the Dead",
        description: "An underground city of the dead. Countless skeletons in ancient armor line the walls, waiting... waiting for the king to return and fulfill their oath.",
        exits: { east: 'paths_of_dead' },
        items: ['oath_stone', 'dead_crown'],
        enemies: []
    },

    helms_gate: {
        name: "Helm's Gate",
        description: "The entrance to Helm's Deep, a great gorge cut into the White Mountains. Massive walls block the way - the Deeping Wall. This fortress has never fallen.",
        exits: { east: 'rohan_plains', west: 'helms_deep_interior' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai', 'uruk_hai']
    },

    helms_deep_interior: {
        name: "Helm's Deep",
        description: "A deep gorge with sheer walls. The Deeping Stream flows through. The Hornburg towers above - a great fortress. Caves delve deep into the mountain - the Glittering Caves of Aglarond.",
        exits: { east: 'helms_gate', down: 'glittering_caves' },
        items: ['helms_hammer'],
        enemies: []
    },

    glittering_caves: {
        name: "Glittering Caves of Aglarond",
        description: "Vast caverns filled with formations of crystal and stone. Columns of calcite rise like trees. The walls sparkle with a thousand gems. 'Such beauty!' Gimli would say.",
        exits: { up: 'helms_deep_interior' },
        items: ['cave_crystal', 'cave_pearl', 'star_gem'],
        enemies: []
    },

    // FANGORN FOREST - Domain of the Ents
    fangorn_border: {
        name: "Edge of Fangorn Forest",
        description: "The ancient forest of Fangorn stretches before you. The trees are impossibly old and tall. A sense of watchfulness pervades the air. You hear creaking and groaning from deep within.",
        exits: { north: 'gap_of_rohan', east: 'fangorn_eaves', south: 'fangorn_depths' },
        items: [],
        enemies: []
    },

    fangorn_eaves: {
        name: "Eaves of Fangorn",
        description: "Just within the edge of the forest. Great beech trees tower overhead. Shadows deepen quickly here. Something is moving between the trees...",
        exits: { west: 'fangorn_border', north: 'rohan_plains', south: 'wellinghall' },
        items: ['entdraught'],
        enemies: []
    },

    fangorn_depths: {
        name: "Deep in Fangorn",
        description: "The heart of the ancient forest. Trees so old their names are forgotten crowd close. Time moves differently here. You hear a sound like slow, deep laughter.",
        exits: { north: 'fangorn_border', east: 'wellinghall' },
        items: ['ancient_oak_heart'],
        enemies: []
    },

    wellinghall: {
        name: "Wellinghall - Hall of the Ents",
        description: "A great natural amphitheater among the trees. A clear stream cascades down the rocks. Treebeard the Ent dwells here - oldest of living things in Middle Earth. 'Hroom, hom!' he grumbles.",
        exits: { north: 'fangorn_eaves', west: 'fangorn_depths', south: 'entwash' },
        items: ['ent_staff'],
        enemies: []
    },

    entwash: {
        name: "The Entwash",
        description: "A river flowing from Fangorn Forest into the plains. The water is clear and cold. Great willow trees line the banks.",
        exits: { north: 'wellinghall', east: 'east_emnet' },
        items: [],
        enemies: []
    },

    east_emnet: {
        name: "East Emnet",
        description: "The eastern plains of Rohan. Grass waves in the wind like a green sea. You can see riders in the distance - the rohirrim on patrol.",
        exits: { west: 'entwash' },
        items: [],
        enemies: []
    },

    isengard_gates: {
        name: "Gates of Isengard",
        description: "The ring of Isengard - a great circular wall of stone. Within stands Orthanc, the black tower of Saruman. Smoke and flame rise from forges beneath. The gates are broken, smashed by the Ents.",
        exits: { north: 'gap_of_rohan', east: 'orthanc_base' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    orthanc_base: {
        name: "Base of Orthanc",
        description: "The tower of Orthanc rises 500 feet, black and adamantine. It has four sheer faces and four sharp corners. No ladder or stair reaches its peak. This was Saruman's fortress.",
        exits: { west: 'isengard_gates', up: 'orthanc_chamber' },
        items: ['broken_staff'],
        enemies: []
    },

    orthanc_chamber: {
        name: "Orthanc - Saruman's  Chamber",
        description: "The high chamber of Orthanc. Great windows look out in all directions. Books and diagrams are scattered about - Saruman's studies of the old lore. A palantír once stood here.",
        exits: { down: 'orthanc_base' },
        items: ['saruman_scrolls', 'palantir'],
        enemies: []
    },

    // GONDOR - The Realm of the Stewards
    osgiliath_ruins: {
        name: "Ruins of Osgiliath",
        description: "The once-great city of Osgiliath lies in ruins. The Anduin flows through the middle, and broken bridges span the water. Orcs patrol the eastern bank. The road to Minas Tirith lies west.",
        exits: { west: 'pelennor_fields', east: 'morgul_vale' },
        items: ['ancient_gondorian_coin'],
        enemies: ['orc_warrior', 'orc_scout']
    },

    pelennor_fields: {
        name: "Pelennor Fields",
        description: "The great fields before Minas Tirith. Farmland stretches to the walls of the White City. The Rammas Echor - the outer wall - has been breached in places. You can see the White Tower rising in the distance.",
        exits: { east: 'osgiliath_ruins', west: 'minas_tirith_gates', north: 'rath_dinen' },
        items: ['gondorian_banner'],
        enemies: ['orc_warrior']
    },

    minas_tirith_gates: {
        name: "Gates of Minas Tirith",
        description: "The Great Gate of Minas Tirith, the White City. Seven tiers rise above you, each level higher than the last. The White Tower of Ecthelion pierces the sky. Guards in white and silver stand watch.",
        exits: { east: 'pelennor_fields', up: 'first_level' },
        items: [],
        enemies: []
    },

    first_level: {
        name: "First Level - Minas Tirith",
        description: "The lowest level of the city. Houses and shops line the streets. The White Tree fountain stands in the center. The way up leads to the Citadel.",
        exits: { down: 'minas_tirith_gates', up: 'second_level' },
        items: ['white_tree_sapling'],
        enemies: []
    },

    second_level: {
        name: "Second Level - Minas Tirith",
        description: "Houses of stone and wood, built into the mountainside. The streets are clean and well-kept. You can see the Citadel above.",
        exits: { down: 'first_level', up: 'third_level' },
        items: ['gondorian_sword'],
        enemies: []
    },

    third_level: {
        name: "Third Level - Minas Tirith",
        description: "The level of the Houses of Healing. White buildings with gardens. The air is filled with the scent of athelas.",
        exits: { down: 'second_level', up: 'fourth_level' },
        items: ['athelas', 'healing_herbs'],
        enemies: []
    },

    fourth_level: {
        name: "Fourth Level - Minas Tirith",
        description: "Barracks and armories. The soldiers of Gondor train here. You hear the ring of steel on steel.",
        exits: { down: 'third_level', up: 'fifth_level' },
        items: ['gondorian_armor'],
        enemies: []
    },

    fifth_level: {
        name: "Fifth Level - Minas Tirith",
        description: "The level of the Great Hall. Tapestries depicting the history of Gondor line the walls.",
        exits: { down: 'fourth_level', up: 'sixth_level' },
        items: ['ancient_tapestry'],
        enemies: []
    },

    sixth_level: {
        name: "Sixth Level - Minas Tirith",
        description: "The level of the Citadel. The White Tower looms above. This is the heart of Gondor.",
        exits: { down: 'fifth_level', up: 'white_tower' },
        items: ['gondorian_crown'],
        enemies: []
    },

    white_tower: {
        name: "White Tower of Ecthelion",
        description: "The highest point of Minas Tirith. From here you can see for leagues in every direction. The throne of the Stewards stands empty, awaiting the return of the King.",
        exits: { down: 'sixth_level' },
        items: ['palantir_of_minas_tirith', 'steward_crown'],
        enemies: []
    },

    rath_dinen: {
        name: "Rath Dínen - Street of the Dead",
        description: "The silent street where the Kings and Stewards of Gondor are laid to rest. Tombs line both sides. A sense of ancient majesty and sorrow fills the air.",
        exits: { south: 'pelennor_fields', east: 'house_of_stewards' },
        items: [],
        enemies: []
    },

    house_of_stewards: {
        name: "House of the Stewards",
        description: "The tomb of the Stewards of Gondor. White marble and silver. The tombs of Denethor and his forefathers lie here.",
        exits: { west: 'rath_dinen' },
        items: ['steward_ring', 'ancient_scroll'],
        enemies: []
    },

    // MORDOR - The Land of Shadow
    morgul_vale: {
        name: "Morgul Vale",
        description: "A dark valley leading to Mordor. The air is foul and the ground is poisoned. The Tower of Cirith Ungol looms ahead. A sense of dread fills you.",
        exits: { west: 'osgiliath_ruins', east: 'cirith_ungol', south: 'morgul_pass' },
        items: [],
        enemies: ['orc_warrior', 'orc_scout', 'ringwraith']
    },

    morgul_pass: {
        name: "Morgul Pass",
        description: "A narrow pass through the mountains. The path is treacherous and watched. The very stones seem to whisper of evil.",
        exits: { north: 'morgul_vale', east: 'cirith_ungol' },
        items: ['morgul_blade'],
        enemies: ['orc_warrior', 'spider_guard']
    },

    cirith_ungol: {
        name: "Cirith Ungol - Tower of the Spider",
        description: "A great tower built into the mountainside. Shelob's lair lies below. The tower is dark and foreboding, its windows like empty eyes.",
        exits: { west: 'morgul_vale', south: 'morgul_pass', down: 'shelob_lair', east: 'mordor_plains' },
        items: ['tower_key'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    shelob_lair: {
        name: "Shelob's Lair",
        description: "A vast web-filled cave. Sticky strands cover every surface. In the darkness, you sense something huge and hungry moving. The stench is overwhelming.",
        exits: { up: 'cirith_ungol', east: 'tunnel_exit' },
        items: [],
        enemies: ['shelob']
    },

    tunnel_exit: {
        name: "Tunnel Exit",
        description: "You emerge from the tunnel into the desolation of Mordor. The land is barren and black. Mount Doom looms in the distance, belching smoke and fire.",
        exits: { west: 'shelob_lair', east: 'mordor_plains' },
        items: ['sting_glow'],
        enemies: []
    },

    mordor_plains: {
        name: "Plains of Mordor",
        description: "A wasteland of ash and rock. Nothing grows here. The sky is dark with smoke. Orc patrols march in the distance. Mount Doom dominates the horizon.",
        exits: { west: 'cirith_ungol', east: 'black_gate', south: 'mount_doom_approach' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'warg_rider']
    },

    black_gate: {
        name: "The Black Gate of Mordor",
        description: "The Morannon - the great gate of Mordor. Two massive towers flank an iron gate. The ground before it is littered with bones. This is the only way into the Dark Land.",
        exits: { west: 'mordor_plains', east: 'barad_dur_approach' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'orc_warrior', 'troll_guard']
    },

    barad_dur_approach: {
        name: "Approach to Barad-dûr",
        description: "The Dark Tower of Sauron rises impossibly high, wreathed in shadow and flame. The Eye watches from above. The very air burns with malice.",
        exits: { west: 'black_gate', east: 'barad_dur_base' },
        items: [],
        enemies: ['ringwraith', 'ringwraith', 'orc_warrior']
    },

    barad_dur_base: {
        name: "Base of Barad-dûr",
        description: "The foundation of the Dark Tower. The ground is cracked and black. Fires burn in pits. This is the heart of Sauron's power.",
        exits: { west: 'barad_dur_approach', up: 'barad_dur_chamber' },
        items: ['dark_ring_fragment'],
        enemies: ['ringwraith', 'orc_warrior']
    },

    barad_dur_chamber: {
        name: "Chamber of the Dark Lord",
        description: "The highest chamber of Barad-dûr. The Eye of Sauron burns here, seeing all. The One Ring was forged in the fires below. This is where the fate of Middle Earth will be decided.",
        exits: { down: 'barad_dur_base' },
        items: ['sauron_armor_fragment'],
        enemies: ['sauron_manifestation']
    },

    mount_doom_approach: {
        name: "Approach to Mount Doom",
        description: "Orodruin - the Mountain of Fire. Lava flows down its sides. The air is thick with ash and the stench of sulfur. The path to the summit is treacherous.",
        exits: { north: 'mordor_plains', up: 'mount_doom_summit' },
        items: [],
        enemies: ['lava_elemental']
    },

    mount_doom_summit: {
        name: "Summit of Mount Doom",
        description: "The Crack of Doom. A chasm of fire at the heart of the mountain. This is where the One Ring was forged, and where it must be destroyed. The heat is unbearable.",
        exits: { down: 'mount_doom_approach' },
        items: [],
        enemies: ['gollum_final'],
        puzzle: 'destroy_ring'
    }
};
