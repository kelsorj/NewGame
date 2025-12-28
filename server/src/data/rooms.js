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
        description: "You stand in the cozy hobbit-hole of Bag End, the most comfortable dwelling in all the Shire. Round windows set deep in the hillside let in cheerful sunlight that dances across polished wooden floors. The smell of fine pipeweed lingers in the air, mingling with the scent of fresh bread from the kitchen. Shelves line the walls, filled with books, maps, and curiosities from distant lands. A large round green door, painted a cheerful yellow, leads outside to the well-tended garden where flowers bloom in riotous colors. This is a place of peace and contentment, where one could easily lose track of time reading, eating, and enjoying the simple pleasures of life.",
        exits: { south: 'woody_end', east: 'sackville_manor' },
        items: ['walking_stick', 'lembas_bread'],
        enemies: []
    },

    hobbiton_square: {
        name: "Hobbiton Square",
        description: "The heart of Hobbiton bustles with cheerful activity as hobbits go about their daily business. Market stalls line the square, displaying fresh produce, handcrafted goods, and the finest pipeweed in the Shire. Children play near the central fountain, their laughter mixing with the chatter of neighbors exchanging news and pleasantries. The Green Dragon Inn stands prominently to the east, its sign creaking gently in the breeze, while the famous Bag End lies nestled in the hill to the north. A well-maintained road leads south toward the Brandywine Bridge, and the air is filled with the comforting smells of baking bread, blooming flowers, and the rich earth of the Shire.",
        exits: { south: 'staddle', east: 'green_dragon' },
        items: ['silver_coin'],
        enemies: []
    },

    green_dragon: {
        name: "The Green Dragon Inn",
        description: "A warm, welcoming tavern that serves as the social heart of Hobbiton. The interior is cozy and inviting, with low-beamed ceilings and walls lined with portraits of famous hobbits. A great fireplace crackles merrily in the corner, casting dancing shadows across the worn wooden tables. The sounds of laughter, clinking mugs, and animated conversation fill the air. Patrons sit in comfortable chairs, sharing stories and enjoying pints of the finest ale in the Shire. The bartender, a portly hobbit with a well-groomed mustache, eyes you with a knowing smile as he polishes a glass. The scent of roasted meat, fresh bread, and pipeweed creates an atmosphere of perfect contentment.",
        exits: { west: 'hobbiton_square', southwest: 'staddle' },
        items: ['health_potion', 'old_map'],
        enemies: []
    },

    bywater: {
        name: "Bywater",
        description: "A charming small village nestled along the banks of the Water, a gentle stream that flows through the heart of the Shire. Smoke rises lazily from numerous chimneys, each marking a cozy hobbit-hole where families gather for their evening meals. The rhythmic sound of a mill wheel turning provides a steady, comforting backdrop to village life. Hobbits tend their gardens, children play by the water's edge, and the air carries the mingled scents of wildflowers, fresh hay, and baking bread. The road, well-trodden and friendly, continues north toward Hobbiton, while the village itself exudes an atmosphere of peaceful, unhurried contentment that seems to slow time itself.",
        exits: { south: 'mayor_office', east: 'green_hill_country', northeast: 'tuckborough', southeast: 'michel_delving' },
        items: ['rope'],
        enemies: []
    },

    woody_end: {
        name: "Woody End",
        description: "The edge of the woodland marks a transition from the safe, cultivated lands of the Shire to something wilder and more mysterious. Ancient trees grow thick here, their gnarled branches creating a canopy that filters the sunlight into dappled patterns on the forest floor. Strange rustlings echo from the undergrowth—whether from small creatures, the wind, or something more sinister, it's impossible to tell. The air grows cooler and carries the earthy scent of damp leaves and decaying wood. An old, barely visible path winds deeper into the forest, its stones worn smooth by countless years. There's a sense of watchfulness here, as if the very trees are aware of your presence and not entirely welcoming.",
        exits: { north: 'bag_end', northeast: 'sackville_manor' },
        items: [],
        enemies: ['wild_wolf']
    },

    brandywine_bridge: {
        name: "Brandywine Bridge",
        description: "An ancient stone bridge arches gracefully over the Brandywine River, its weathered stones bearing the marks of countless seasons and travelers. The water flows swiftly beneath, clear and cold, carrying leaves and the occasional fallen branch downstream. The bridge itself is wide enough for carts and has stood for generations, a testament to hobbit craftsmanship and the peaceful nature of the Shire. To the south, the Old Forest looms dark and forbidding, its ancient trees seeming to watch with malevolent intent. To the east, the road leads toward Bree and the wider world beyond. The air here carries the fresh scent of running water and the distant, unsettling murmur of the forest. This is a place of transition, where the safety of the Shire gives way to the unknown.",
        exits: { north: 'scary', south: 'old_forest_entrance', east: 'combe', west: 'michel_delving', northeast: 'rushock_bog', northwest: 'green_hill_country', southeast: 'fornost_approach', southwest: 'marish' },
        items: [],
        enemies: []
    },

    stock_road: {
        name: "Stock Road",
        description: "A winding country road meanders through some of the most fertile farmland in the Shire. Fields of golden wheat sway gently in the breeze, while vegetable gardens burst with the colors of ripening produce. The road itself is well-maintained, its surface packed earth and gravel that has been trodden smooth by generations of hobbit feet, cart wheels, and the occasional pony. In the distance, the warm lights of Stock village twinkle like stars, promising hospitality and good cheer. The air is rich with the scent of earth, growing things, and the distant aroma of cooking fires. Rolling hills stretch to the horizon, dotted with the round doors of hobbit-holes, each with its own garden and smoke rising from its chimney.",
        exits: { south: 'overhill', east: 'archet', west: 'longbottom', southwest: 'waymeet' },
        items: ['carrot'],
        enemies: []
    },

    marish: {
        name: "The Marish",
        description: "The marshy lowlands near the Brandywine create a landscape unlike any other in the Shire. The ground is soft and waterlogged, squelching unpleasantly beneath your feet with each step. Thick reeds and cattails sway in the breeze, their rustling creating an eerie, whispering sound. Strange, phosphorescent lights flicker in the distance—will-o'-the-wisps that dance and vanish, leading unwary travelers astray. The air is heavy with moisture and carries the distinct smell of stagnant water, decaying vegetation, and something else, something ancient and unsettling. Mist clings to the ground even in daylight, and the few trees that grow here are twisted and gnarled, their roots exposed like skeletal fingers. This is a place where the normal rules of the Shire seem to bend, where shadows linger longer and sounds carry strangely across the water.",
        exits: { north: 'michel_delving', south: 'old_forest_depth', east: 'old_forest_entrance', northeast: 'brandywine_bridge', northwest: 'mayor_office', southeast: 'bree_east_road', southwest: 'archet' },
        items: ['mysterious_stone'],
        enemies: ['marsh_phantom']
    },

    old_forest_entrance: {
        name: "Old Forest Entrance",
        description: "The threshold of the Old Forest marks a boundary between the known world and something far older and more dangerous. The trees here are ancient beyond reckoning, their trunks twisted into grotesque shapes and their branches reaching out like gnarled, grasping fingers. The canopy overhead is so thick that even at midday, only dim, green-tinged light filters through, creating an atmosphere of perpetual twilight. A feeling of watchfulness pervades the air—not the friendly awareness of the Shire, but something malevolent and patient. The very ground seems to shift, paths appearing and disappearing as if the forest itself is alive and aware. Few hobbits dare enter this place, and those who do often return changed, speaking of trees that move and whispers on the wind. The silence here is heavy, broken only by the creaking of branches and the rustle of unseen things moving in the shadows.",
        exits: { north: 'brandywine_bridge', south: 'bree_east_road', east: 'fornost_approach', west: 'marish', northeast: 'combe', northwest: 'michel_delving', southeast: 'barrow_downs_approach', southwest: 'old_forest_depth' },
        items: [],
        enemies: ['huorn']
    },

    old_forest_depth: {
        name: "Deep in the Old Forest",
        description: "Deep within the Old Forest, the world outside seems like a distant memory. The trees close in around you, their trunks so thick and close together that you must weave between them. The canopy overhead is so dense that you lose all sense of direction, and the light that filters through is dim and sickly green. The trees themselves seem almost alive—you catch glimpses of movement in your peripheral vision, branches shifting when you're not looking directly at them. Whispers drift on the wind, words in languages long forgotten, speaking of ancient grudges and the slow, patient anger of growing things. The air is heavy and still, thick with the scent of decay and something else, something that makes your skin crawl. In the distance, a clearing opens up, dominated by a great willow tree whose branches trail in dark, still water. The tree seems to watch you, and you have the distinct impression that it is not friendly.",
        exits: { north: 'marish', south: 'crickhollow', east: 'bree_east_road', west: 'archet', northeast: 'old_forest_entrance', southeast: 'bucklebury' },
        items: ['ancient_acorn'],
        enemies: []
    },

    withywindle: {
        name: "The Withywindle",
        description: "The Withywindle flows lazily through a deep, shadowed dell, its waters dark and slow-moving. An enormous willow tree, ancient beyond measure, stands at the water's edge like a sentinel of the Old Forest. Its massive trunk is gnarled and twisted, and its long, trailing branches dip into the dark water, creating ripples that seem to move against the current. The tree's roots, thick as a hobbit's arm, reach into the water like grasping fingers. As you stand here, an overwhelming drowsiness begins to creep over you—not the pleasant tiredness of a long day's work, but something deeper, more insidious. The air itself seems heavy with sleep, and the gentle murmur of the water sounds like a lullaby. The willow's leaves rustle softly, and you have the distinct, unsettling feeling that the tree is aware of you, watching, waiting. This is Old Man Willow, and he is not to be trusted.",
        exits: { south: 'needlehole', east: 'bombadil_house', northeast: 'crickhollow', northwest: 'overhill' },
        items: [],
        enemies: ['old_man_willow'],
        puzzle: 'willow_riddle'
    },

    bombadil_house: {
        name: "Tom Bombadil's House",
        description: "A cheerful cottage stands in a sunlit clearing, an island of light and warmth in the shadowed depths of the Old Forest. The building itself seems to have grown from the earth, its walls covered in flowering vines and its roof thatched with living grass. Flowers bloom in riotous profusion all around—elanor, niphredil, and many others whose names you don't know, creating a carpet of color and scent. From within, you hear a merry voice singing: 'Hey dol! merry dol! ring a dong dillo!' The song is infectious, filling you with a sense of joy and safety you haven't felt since leaving the Shire. The round door stands open, inviting you in, and through it you can see a cozy interior filled with comfortable furniture, a crackling fire, and the warm presence of Tom Bombadil himself. This is a place of refuge, where the dark things of the forest dare not come.",
        exits: { north: 'crickhollow', west: 'withywindle', northeast: 'bucklebury', southeast: 'weathertop_base', southwest: 'needlehole' },
        items: ['bombadil_gift', 'health_potion'],
        enemies: []
    },

    // BREE & WEATHERTOP
    bree_gate: {
        name: "Bree Gate",
        description: "The western gate of Bree stands as a threshold between the wild lands and the last outpost of civilization before the Shire. The gate itself is sturdy, built of weathered wood and iron bands, and bears the marks of many seasons. A gatekeeper, a grizzled man with watchful eyes, stands guard, eyeing you with the suspicious wariness that comes from living on the edge of dangerous lands. Beyond the gate, the village of Bree stretches out before you—a place where Men and hobbits live side by side, their houses built into the hillside. The streets are narrow and winding, and the air carries the mingled scents of cooking fires, horses, and the distant promise of ale. The Prancing Pony inn stands prominently at the center of town, its sign creaking in the breeze, a beacon of warmth and hospitality in this borderland settlement.",
        exits: { east: 'bree_square' },
        items: [],
        enemies: []
    },

    bree_square: {
        name: "Bree Square",
        description: "The center of Bree bustles with the activity of a border town where travelers from all corners of Middle-earth pass through. Shops and houses line the square, their architecture a mix of human and hobbit styles—some buildings tall and narrow, others low and round. Merchants call out their wares, offering everything from fresh produce to weapons and supplies for the road ahead. The cobblestones underfoot are worn smooth by countless feet, and the air is filled with the sounds of conversation, the clatter of hooves, and the distant ringing of a blacksmith's hammer. The Prancing Pony inn stands prominently at one end of the square, its sign swinging in the breeze and depicting a white horse rearing on its hind legs. This is a place of commerce and community, where news from distant lands is exchanged and travelers find rest before continuing their journeys into the wild lands beyond.",
        exits: { north: 'prancing_pony', south: 'bombadil_garden', west: 'combe', northwest: 'rushock_bog', southwest: 'fornost_approach', west: 'bree_gate' },
        items: ['brass_key'],
        enemies: []
    },

    prancing_pony: {
        name: "The Prancing Pony",
        description: "The Prancing Pony is a busy, welcoming inn that serves as the social heart of Bree. The interior is warm and inviting, with low-beamed ceilings and walls lined with maps, trophies, and the occasional weapon left behind by travelers. A great fireplace dominates one wall, its flames casting dancing shadows across the worn wooden tables. The inn is filled with a mix of travelers and locals—hobbits sharing news from the Shire, merchants discussing trade routes, and rangers keeping to the shadows. The innkeeper, Barliman Butterbur, a portly man with a harried expression, hurries between tables, balancing trays of food and mugs of ale, his apron stained with the evidence of a busy day. The air is thick with the smells of roasting meat, fresh bread, pipeweed, and ale. In a dark corner, you notice a hooded figure watching you intently, their face hidden in shadow but their attention unmistakable. This is a place where secrets are shared and alliances are formed, where the fate of Middle-earth might be decided over a pint of ale.",
        exits: { south: 'bree_square', west: 'rushock_bog', northwest: 'staddle', southwest: 'combe' },
        items: ['ranger_cloak'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood Forest",
        description: "Chetwood is a wild woodland that surrounds Bree, a place where civilization gives way to the untamed wilderness. The trees grow thick and close together, their branches interlocking overhead to create a canopy that filters the sunlight into dim, shifting patterns. The undergrowth is dense and tangled, making travel difficult and providing perfect cover for those who wish to remain unseen. In the distance, you hear the haunting howl of wolves, a sound that raises the hair on the back of your neck and reminds you that you are far from the safety of the Shire. The air carries the scent of damp earth, decaying leaves, and something else—the faint smell of woodsmoke that might indicate a hidden camp. Bandits are known to hide in these woods, preying on unwary travelers who venture too far from the protection of Bree. Every rustle of leaves, every snap of a twig, makes you wonder if you're being watched.",
        exits: { north: 'barrow_chamber_2', east: 'barrow_downs', west: 'buckland_kitchen', northwest: 'weathertop_summit' },
        items: ['forest_berry'],
        enemies: ['brigand', 'wild_wolf']
    },

    bree_east_road: {
        name: "East Road from Bree",
        description: "The Great East Road stretches before you, a ribbon of packed earth and stone that has carried travelers for countless generations. This is one of the oldest and most important roads in Middle-earth, connecting the Shire in the west to lands far to the east. The road itself is wide and well-maintained, though it shows signs of heavy use—ruts from cart wheels, the occasional discarded item, and the marks of many feet. To the south, the ominous hill of Weathertop rises against the sky like a broken tooth, its summit crowned with the ruins of an ancient watchtower. The hill seems to watch over the road, a silent sentinel that has witnessed both the passage of peaceful travelers and the movements of dark forces. The landscape around you is a mix of rolling hills, patches of forest, and open grassland, and the air carries the scent of wildflowers, dust, and the distant promise of adventure—or danger.",
        exits: { north: 'old_forest_entrance', south: 'bucklebury', east: 'barrow_downs_approach', west: 'old_forest_depth', northeast: 'fornost_approach', northwest: 'marish', southeast: 'old_forest_exit', southwest: 'crickhollow' },
        items: [],
        enemies: []
    },

    weathertop_base: {
        name: "Base of Weathertop",
        description: "At the base of Weathertop, the ancient watchtower of Amon Sûl looms above you like a broken crown against the sky. The hill itself is steep and rocky, covered in rough grass and scattered boulders. Stone ruins are scattered about the base—broken walls, tumbled pillars, and fragments of what was once a great fortress. These ruins speak of a time when this was a place of power and importance, a watchtower that guarded the borders of the North Kingdom. Now, it stands as a monument to fallen glory, its stones weathered by countless seasons and scarred by ancient battles. You feel a sense of ancient evil here, a lingering presence that makes the air feel heavy and cold. The very ground seems to remember the darkness that once passed this way. A narrow, winding path leads up the hillside toward the summit, and you can't shake the feeling that you're being watched from above.",
        exits: { east: 'buckland_kitchen', northeast: 'weathertop_summit', northwest: 'bombadil_house', south: 'weathertop_approach' },
        items: ['ancient_blade'],
        enemies: ['orc_scout']
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruined tower atop Weathertop stands as a broken monument to a lost age. Ancient stones lie scattered across the summit, their edges worn smooth by wind and rain, their surfaces covered in moss and lichen. Burn marks scar the ground in several places, dark patches where fires once burned—some ancient, some disturbingly recent. The view from here is breathtaking, stretching for miles in all directions: to the west, the green lands of the Shire; to the east, the dark forests and hills of the wild lands; to the north and south, rolling countryside that seems to go on forever. But despite the beauty of the view, you feel eyes watching you from the shadows. There's a presence here, something cold and malevolent that makes your skin crawl. A fire pit shows recent use, its ashes still warm, and you can't help but wonder who—or what—was here before you. This is a place of power, and power draws both good and evil.",
        exits: { north: 'old_forest_exit', south: 'buckland_kitchen', east: 'barrow_chamber_2', northeast: 'last_bridge', northwest: 'bucklebury', southeast: 'chetwood', southwest: 'weathertop_base' },
        items: ['athelas', 'watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith'],
        puzzle: 'tower_inscription'
    },

    midgewater_marshes: {
        name: "Midgewater Marshes",
        description: "The Midgewater Marshes are a miserable, swampy wasteland that stretches for miles, a place where the very ground seems to conspire against travelers. The marsh is a maze of stagnant pools, quaking bogs, and patches of treacherous ground that look solid but will swallow you up to your knees. Clouds of midges buzz incessantly around your head, their tiny wings creating a maddening drone that makes it impossible to think clearly. The ground squelches unpleasantly beneath your feet with every step, and the air is thick with the stench of decay, stagnant water, and something else—something that makes your stomach turn. Will-o'-the-wisps dance in the distance, their pale, flickering lights leading unwary travelers deeper into the marsh, where they become hopelessly lost. The sky overhead is often overcast, and even when the sun shines, it seems weak and distant. This is a place to be crossed quickly, if at all, and you can't help but feel that something ancient and hungry lurks beneath the murky waters.",
        exits: { south: 'barrow_chamber_1', northeast: 'buckland_cellar' },
        items: [],
        enemies: ['giant_midge_swarm']
    },

    weatherhills: {
        name: "The Weather Hills",
        description: "The Weather Hills are a range of rolling hills covered in rough grass and scattered stones, a landscape that seems both beautiful and forbidding. The hills rise and fall like waves frozen in time, their slopes covered in heather and gorse that bloom in shades of purple and gold during the warmer months. Ancient barrows dot the landscape like great, grass-covered mounds, each one the final resting place of a long-dead king or warrior from ages past. These barrows are old beyond reckoning, their stones weathered smooth and covered in moss and lichen. Standing stones, some still upright and others fallen, mark the boundaries of these ancient graves, and the air here carries a sense of age and memory. The wind that sweeps across these hills seems to whisper of ancient battles, forgotten kingdoms, and the restless spirits of those who sleep beneath the earth. This is a place where the past feels very close, and you can't shake the feeling that you're being watched by eyes that closed long ago.",
        exits: { south: 'buckland_cellar', west: 'fornost_gates', southeast: 'barrow_chamber_3' },
        items: ['barrow_treasure'],
        enemies: ['barrow_wight']
    },

    last_bridge: {
        name: "The Last Bridge",
        description: "The Last Bridge spans the Hoarwell River, a graceful arch of stone that has stood for centuries, connecting the lands of the North to the hidden valley of Rivendell. The bridge itself is a work of art, its stones fitted together with such precision that it seems to have grown from the earth rather than been built by hands. The river rushes below, its waters clear and cold, tumbling over rocks and creating a constant, soothing roar. The sound of the water, combined with the fresh, clean air, creates a sense of peace and renewal. On the far side of the bridge, the road continues east toward Rivendell, winding through hills and forests that grow more beautiful and more wild with each passing mile. The bridge marks a transition point—behind you, the dangers of the wild lands; ahead, the promise of sanctuary in the Last Homely House. Elven berries grow along the riverbank, their sweet scent carried on the breeze, a sign that you're drawing closer to elven lands.",
        exits: { south: 'barrow_chamber_2', east: 'trollshaws', west: 'old_forest_exit', northwest: 'barrow_downs_approach', southwest: 'weathertop_summit' },
        items: ['elven_berries'],
        enemies: []
    },

    // TROLLSHAWS & RIVENDELL
    trollshaws: {
        name: "The Trollshaws",
        description: "The Trollshaws are a wild, hilly region where the land rises and falls in great swells, covered in thick forests and rocky outcroppings. The trees here are ancient and gnarled, their branches twisted into strange shapes by wind and weather. In a clearing ahead, three enormous stone figures stand frozen in grotesque poses—trolls, turned to stone by the light of the rising sun. Their faces are contorted in expressions of surprise and anger, their massive forms looming over the landscape like monuments to a moment of hubris. The stone itself is weathered and covered in moss, but the detail is still clear enough to see the crude features and the rough clothing they wore. Their treasure must be nearby, hidden in some cave or hollow, waiting for a brave soul to claim it. The air here carries the scent of pine, damp earth, and something else—the faint, lingering smell of troll that makes your stomach turn.",
        exits: { east: 'ford_of_bruinen', west: 'troll_cave', northeast: 'annuminas_ruins', southwest: 'fornost_temple' },
        items: [],
        enemies: []
    },

    troll_cave: {
        name: "Troll Cave",
        description: "The troll cave is a dank, foul-smelling hollow that reeks of troll—a stench so powerful it makes your eyes water and your stomach churn. The cave is large, its ceiling lost in shadow, and the walls are rough stone covered in slime and filth. Bones litter the floor, some large enough to be from horses or cattle, others disturbingly small. The remains of crude furniture—a table made from a split log, a chair that's little more than a boulder—stand abandoned in the gloom. In the dim light filtering from the cave entrance, you can see a chest partially buried in the debris, its surface scratched and dented but still clearly valuable. The chest is locked, and you can't help but wonder what treasures the trolls hoarded before meeting their stony fate. The air is thick and heavy, and every sound echoes strangely in the confined space.",
        exits: { south: 'fornost_temple', east: 'trollshaws' },
        items: ['sting', 'orcrist', 'gold_treasure'],
        enemies: [],
        puzzle: 'troll_chest'
    },

    ford_of_bruinen: {
        name: "Ford of Bruinen",
        description: "The Ford of Bruinen spans the Loudwater River, a place where the water runs shallow over smooth stones, creating a natural crossing point. The river itself is wide and swift, its waters clear and cold, tumbling over rocks and creating a constant, soothing roar. The ford is marked by ancient stepping stones that have been worn smooth by countless feet, and the water sparkles with an otherworldly light that seems to come from within the river itself. On the far bank, you can see the hidden valley of Rivendell—Imladris, the Last Homely House—nestled among the mountains like a jewel. The valley is filled with golden light even when the sun is hidden, and you can hear the distant sound of waterfalls and elven voices raised in song. The air here is fresh and clean, carrying the scent of pine, wildflowers, and something else—something that speaks of peace and sanctuary. This is a place of transition, where the dangers of the wild lands give way to the safety of elven protection.",
        exits: { north: 'annuminas_ruins', east: 'rivendell_gates', west: 'trollshaws', northeast: 'annuminas_tower', southeast: 'elrond_study' },
        items: [],
        enemies: []
    },

    rivendell_gates: {
        name: "Gates of Rivendell",
        description: "The hidden gates of Rivendell are not gates in the traditional sense, but rather a natural archway formed by two great trees whose branches have grown together over centuries. The entrance is marked by subtle elven runes carved into the living wood, visible only to those who know where to look. Waterfalls cascade around you on all sides, their mist creating rainbows in the air and filling the valley with a constant, musical roar. The water flows in streams and rivulets, creating a network of small bridges and walkways that connect the various buildings. Elven voices sing in the distance, their songs carrying on the breeze like something from a dream—melodies that speak of ancient wisdom, eternal beauty, and the sorrow of a people who have seen too much. As you stand here, a profound sense of peace washes over you, as if all the cares and dangers of the world outside have been left behind. This is Imladris, the Last Homely House, and it lives up to its name.",
        exits: { north: 'annuminas_tower', south: 'elrond_study', west: 'ford_of_bruinen', northwest: 'annuminas_ruins', southeast: 'rivendell_guest_house', northeast: 'waterfall_walkway' },
        items: [],
        enemies: []
    },

    rivendell_hall: {
        name: "Hall of Fire - Rivendell",
        description: "The Hall of Fire is a magnificent chamber that serves as the heart of Rivendell. A great fire burns eternally in the center of the hall, its flames never dying, casting warm, golden light across the room. The fire is magical, fed by no visible fuel, and its light seems to have a quality that soothes the soul and sharpens the mind. Elven lords sit in counsel around the fire, their faces ageless and wise, discussing matters of great importance with voices that carry the weight of millennia. Maps and ancient books line the walls, their pages filled with knowledge gathered over countless ages. Tapestries depicting the history of Middle-earth hang between the bookshelves, their threads still vibrant after centuries. Elrond Half-elven, Lord of Rivendell, regards you warmly from his seat, his eyes holding the wisdom of both elves and men, and the sorrow of one who has seen the rise and fall of kingdoms. The air is filled with the scent of pine, old books, and something else—the very essence of elven magic that makes this place feel outside of time itself.",
        exits: { north: 'elrond_study', east: 'rivendell_forge', west: 'rivendell_library', northeast: 'rivendell_guest_house', southwest: 'hall_of_fire_guest' },
        items: ['mithril_mail', 'miruvor'],
        enemies: []
    },

    rivendell_library: {
        name: "Library of Rivendell",
        description: "The Library of Rivendell is a peaceful sanctuary of knowledge, a room that seems to stretch beyond the physical boundaries of the building itself. Countless scrolls and books fill the space, arranged on shelves that reach toward a ceiling lost in shadow. The books are bound in leather and cloth, their pages filled with elegant elven script, maps of forgotten lands, and illustrations that seem to move in the flickering candlelight. The knowledge of ages is stored here—histories of kingdoms long fallen, accounts of battles won and lost, treatises on magic and lore, and stories that have been passed down through countless generations. The air is thick with the scent of old paper, leather bindings, and the faint smell of preservation spells. You could spend years reading these tomes and still not exhaust their wisdom. Soft light filters through windows that look out over the valley, and comfortable chairs are placed throughout the room, inviting you to sit and lose yourself in the accumulated knowledge of the elves. This is a place where time seems to stand still, where the past and present merge into a single, eternal moment.",
        exits: { south: 'hall_of_fire_guest', east: 'rivendell_hall', northeast: 'elrond_study' },
        items: ['ancient_tome', 'scroll_of_wisdom'],
        enemies: [],
        puzzle: 'elven_lore'
    },

    rivendell_forge: {
        name: "Rivendell Forge",
        description: "The Rivendell Forge is an elven smithy where legendary weapons and armor were crafted by master smiths whose skill has never been matched. The forge itself is a work of art, its structure built to channel both natural fire and elven magic. The forge still glows with magical fire that burns with an otherworldly blue-white light, its flames never consuming fuel but drawing power from the very essence of the valley. Anvils of mithril and steel stand ready, their surfaces marked by countless hammer blows. Tools hang on the walls—hammers, tongs, files, and other implements—each one perfectly crafted and maintained. The air is warm and carries the scent of hot metal, coal, and something else—the faint, sweet smell of elven magic that infuses everything crafted here. Shelves display examples of the smiths' work: blades that seem to glow with inner light, armor that appears to be woven from starlight, and jewelry of such delicate beauty that it seems impossible to have been made by mortal hands. This is where Andúril was reforged, where the weapons of heroes were crafted, and where the art of elven smithing reached its highest form.",
        exits: { north: 'rivendell_guest_house', west: 'rivendell_hall', northwest: 'elrond_study' },
        items: ['elvish_blade'],
        enemies: []
    },

    //MORIA - The Mines of Moria
    hollin_gate: {
        name: "Hollin Gate",
        description: "The western approach to Moria is a place of stark, forbidding beauty. You stand before a sheer cliff face that rises hundreds of feet into the air, its surface of dark, weathered stone. Beside you, a dark lake stretches out, its waters so still and black that they seem to absorb all light, reflecting nothing. The lake is surrounded by ancient, gnarled trees that seem to lean away from the water as if in fear. In the rock face, barely visible at first glance, are the outlines of great doors—the West-gate of Moria, the Doors of Durin. The doors are massive, carved from the living rock, and covered in intricate designs that glow faintly with an inner light when the moon shines upon them. The air here is heavy and still, and there's a sense of watchfulness—not just from the doors themselves, but from something in the dark water. The Watcher in the Water lurks beneath the surface, its presence felt rather than seen, a guardian of the gate that has claimed many unwary travelers.",
        exits: { south: 'waterfall_walkway', east: 'doors_of_durin' },
        items: ['mithril_fragment'],
        enemies: ['watcher_in_water']
    },

    doors_of_durin: {
        name: "Doors of Durin - West Gate of Moria",
        description: "The great Doors of Durin, Lord of Moria, stand before you in all their ancient glory. Carved from a single piece of mithril-adorned stone, the doors are a masterpiece of dwarven craftsmanship, their surfaces covered in intricate designs of stars, hammers, anvils, and the tree of the High Elves. Under the light of the moon, the doors shine with an ethereal silver glow, for they are inscribed with ithildin—a substance that only reveals itself in starlight and moonlight. The script glows faintly, forming words in both elvish and dwarvish: 'Speak, friend, and enter.' The doors stand shut, massive and immovable, blocking the way into the darkness of Moria. They have not been opened in many years, and the riddle they present must be solved before entry is granted. The air around the doors carries the weight of ages, and you can feel the presence of the great kingdom that once lay beyond—Khazad-dûm, the greatest of all dwarven realms, now fallen to darkness and shadow.",
        exits: { south: 'seventh_level', east: 'moria_entrance', west: 'hollin_gate', southeast: 'balin_tomb' },
        items: [],
        enemies: [],
        puzzle: 'gateway_of_moria',
        requirements: [{ type: 'puzzle', puzzle: 'gateway_of_moria' }]
    },

    moria_entrance: {
        name: "First Hall of Moria",
        description: "You step into darkness, and the world outside seems to vanish behind you. The vast hall of the First Hall of Moria stretches before you, so large that your torchlight barely penetrates the gloom, creating a small island of light in an ocean of shadow. The hall is pitch black, its ceiling lost in darkness high above. Massive columns of stone rise like the trunks of petrified trees, their surfaces carved with intricate dwarven runes and designs that speak of a time when this was a place of light and life. The columns support a ceiling you cannot see, but you can feel the weight of the mountain above pressing down. A sense of ancient grandeur mixed with decay fills the air—the smell of stone, dust, and something else, something that speaks of things long dead. The floor is paved with great stone blocks, worn smooth by countless feet, and you can see the remains of what once were magnificent decorations: broken statues, tattered banners, and the scattered remnants of a civilization that reached heights few have ever achieved. This is Khazad-dûm, the Dwarrowdelf, and you have entered a tomb.",
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
        exits: { north: 'royal_tombs', east: 'durin_throne_hall' },
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
        description: "The Bridge of Khazad-dûm is a narrow span of stone, carved from the living rock itself, that stretches across a bottomless chasm. The bridge is wide enough for only one person to cross at a time, and there are no railings—one misstep means a fall into the abyss below. The chasm itself is a void of darkness, so deep that light cannot reach its bottom. From the depths, fire and smoke rise in great plumes, their heat making the air shimmer and carrying the stench of sulfur and ancient evil. The flames cast an eerie, flickering light across the bridge and the surrounding stone, creating dancing shadows that seem to move with a life of their own. The sound of the fire is a constant roar, like the breath of some great beast, and you can feel the heat even from the bridge. This is a place of doom, where many have met their end, and where the greatest of all dangers in Moria waits. The bridge itself is ancient, its surface worn smooth by countless feet, and you can see where it has been repaired over the centuries. This is where Durin's Bane was encountered, where the Fellowship was tested, and where the fate of many has been decided.",
        exits: { north: 'minas_tirith_houses_of_healing', south: 'minas_tirith_gates', east: 'mithril_depths_1', west: 'the_unending_stair_middle', northeast: 'citadel_guards_hall', northwest: 'hall_of_kings', southeast: 'white_tower' },
        items: [],
        enemies: ['durin_bane']
    },

    east_gate_approach: {
        name: "Approach to the East Gate",
        description: "The halls grow lighter. Ahead you can see daylight - the East Gate! Freedom from the darkness of Moria is at hand.",
        exits: { east: 'east_gate_moria' },
        items: ['health_potion', 'lembas_bread'],
        enemies: []
    },

    east_gate_moria: {
        name: "East Gate of Moria",
        description: "You stumble out into daylight, half-blinded after the darkness. The Dimrill Dale spreads below, and beyond rise the peaks of the Misty Mountains.",
        exits: { north: 'rath_dinen', south: 'osgiliath_ruins', east: 'minas_morgul_interior', west: 'pelennor_fields', northwest: 'mithril_depths_2', southeast: 'durthang_fortress', southwest: 'tunnel_exit', west: 'east_gate_approach' },
        items: [],
        enemies: []
    },

    dimrill_dale: {
        name: "Dimrill Dale",
        description: "A hidden valley on the eastern side of the Misty Mountains. The Mirrormere lake lies still and dark, reflecting the mountain peaks. This was once the heart of the Dwarven realm.",
        exits: { north: 'pelargir_port', south: 'henneth_annun', east: 'morgul_vale', northeast: 'ithilien_woods', northwest: 'lothlorien_border' },
        items: ['mirrormere_water'],
        enemies: []
    },

    // Additional side chambers and passages
    mines_level1: {
        name: "Upper Mines",
        description: "Mining tunnels from the upper levels. Tools and carts lie abandoned as if the miners left in great haste.",
        exits: { south: 'mines_level2', east: 'twenty_first_hall' },
        items: ['miners_lamp', 'iron_ore'],
        enemies: ['goblin', 'goblin']
    },

    mines_level2: {
        name: "Deep Mines",
        description: "Deeper mining tunnels. The walls glitter with veins of various ores. The dwarves were master miners.",
        exits: { north: 'balin_tomb', south: 'durin_throne_hall', east: 'endless_stair_top', west: 'twenty_first_hall', northeast: 'royal_tombs', northwest: 'seventh_level', southeast: 'royal_armory', north: 'mines_level1' },
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
        exits: { south: 'cerin_amroth', northeast: 'henneth_annun', southeast: 'silverlode_banks', southwest: 'dimrill_dale' },
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
        exits: { north: 'anduin_approach', south: 'rauros_falls_approach', east: 'amon_hen', northeast: 'parth_galen', northwest: 'caras_galadhon', southeast: 'harrowdale', southeast: 'anduin_confluence' },
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
        exits: { north: 'harrowdale', south: 'orthanc_base', east: 'edoras_approach', west: 'gap_of_rohan', northeast: 'meduseld', northwest: 'rauros_falls_approach', southeast: 'edoras_gates', southwest: 'isengard_gates', northwest: 'westfold_plains', northeast: 'eastfold_plains' },
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
        exits: { north: 'aldburg', northeast: 'starkhorn_foothills', south: 'helms_gate' },
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
        exits: { north: 'dunharrow', south: 'dimholt_road', east: 'glittering_caves', southeast: 'hidden_valley_white_mountains', southwest: 'snowbourn_banks' },
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
        exits: { east: 'orthanc_chamber', northeast: 'isengard_gates', west: 'fangorn_eaves' },
        items: [],
        enemies: []
    },

    fangorn_eaves: {
        name: "Eaves of Fangorn",
        description: "Just within the edge of the forest. Great beech trees tower overhead. Shadows deepen quickly here. Something is moving between the trees...",
        exits: { north: 'the_silent_glade', south: 'anduin_confluence', east: 'mirkwood_edge', west: 'entwash_delta', northeast: 'mirkwood_path_1', northwest: 'elf_path_entrance', southeast: 'grey_havens_docks', southwest: 'wellinghall', southwest: 'fangorn_border' },
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
        exits: { north: 'iron_mines_1', south: 'east_gate_moria', west: 'mithril_depths_2', southeast: 'minas_morgul_interior', southwest: 'pelennor_fields', east: 'house_of_stewards' },
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
        exits: { south: 'gorgoroth_plateau', west: 'cirith_ungol', northwest: 'minas_morgul_gates', southwest: 'shelob_lair', north: 'black_gate' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'warg_rider']
    },

    black_gate: {
        name: "The Black Gate of Mordor",
        description: "The Morannon - the great gate of Mordor. Two massive towers flank an iron gate. The ground before it is littered with bones. This is the only way into the Dark Land.",
        exits: { south: 'mordor_plains', east: 'gorgoroth_plateau' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'orc_warrior', 'troll_guard']
    },

    barad_dur_approach: {
        name: "Approach to Barad-dûr",
        description: "The Dark Tower of Sauron rises impossibly high, wreathed in shadow and flame. The Eye watches from above. The very air burns with malice.",
        exits: { west: 'gorgoroth_plateau', east: 'barad_dur_base' },
        items: [],
        enemies: ['ringwraith', 'ringwraith', 'orc_warrior']
    },

    barad_dur_base: {
        name: "Base of Barad-dûr",
        description: "The foundation of the Dark Tower. The ground is cracked and black. Fires burn in pits. This is the heart of Sauron's power.",
        exits: { west: 'barad_dur_chamber', southwest: 'barad_dur_throne_room', east: 'barad_dur_approach' },
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
