import { shireExpansion } from './rooms-expansion-batch1.js';
import { moriaRivendellExpansion } from './rooms-expansion-batch2.js';
import { lothlorienFangornExpansion } from './rooms-expansion-batch3.js';
import { rohanExpansion } from './rooms-expansion-batch4.js';
import { gondorMordorExpansion } from './rooms-expansion-batch5.js';
import { newRegionsExpansion } from './rooms-expansion-batch6.js';
import { pathRooms } from './path-rooms.js';

export const rooms = {
    ...shireExpansion,
    ...moriaRivendellExpansion,
    ...lothlorienFangornExpansion,
    ...rohanExpansion,
    ...gondorMordorExpansion,
    ...newRegionsExpansion,
    ...pathRooms,
    // THE SHIRE - Starting Area
    bag_end: {
        name: "Bag End",
        description: "You stand in the cozy hobbit-hole of Bag End, the most comfortable dwelling in all the Shire. Round windows set deep in the hillside let in cheerful sunlight that dances across polished wooden floors. The smell of fine pipeweed lingers in the air, mingling with the scent of fresh bread from the kitchen. Shelves line the walls, filled with books, maps, and curiosities from distant lands. A large round green door, painted a cheerful yellow, leads outside to the well-tended garden where flowers bloom in riotous colors. This is a place of peace and contentment, where one could easily lose track of time reading, eating, and enjoying the simple pleasures of life.",
        exits: { 'east': 'tuckborough', 'north': 'old_forest_depth', 'southeast': 'bombadil_house' },
        items: ['walking_stick', 'lembas_bread'],
        enemies: []
    },

    hobbiton_square: {
        name: "Hobbiton Square",
        description: "The heart of Hobbiton bustles with cheerful activity as hobbits go about their daily business. Market stalls line the square, displaying fresh produce, handcrafted goods, and the finest pipeweed in the Shire. Children play near the central fountain, their laughter mixing with the chatter of neighbors exchanging news and pleasantries. The Green Dragon Inn stands prominently to the east, its sign creaking gently in the breeze, while the famous Bag End lies nestled in the hill to the north. A well-maintained road leads south toward the Brandywine Bridge, and the air is filled with the comforting smells of baking bread, blooming flowers, and the rich earth of the Shire.",
        exits: { 'east': 'old_forest_buckland_entrance', 'west': 'bywater', 'southeast': 'midgewater_marshes' },
        items: ['silver_coin'],
        enemies: []
    },

    green_dragon: {
        name: "The Green Dragon Inn",
        description: "A warm, welcoming tavern that serves as the social heart of Hobbiton. The interior is cozy and inviting, with low-beamed ceilings and walls lined with portraits of famous hobbits. A great fireplace crackles merrily in the corner, casting dancing shadows across the worn wooden tables. The sounds of laughter, clinking mugs, and animated conversation fill the air. Patrons sit in comfortable chairs, sharing stories and enjoying pints of the finest ale in the Shire. The bartender, a portly hobbit with a well-groomed mustache, eyes you with a knowing smile as he polishes a glass. The scent of roasted meat, fresh bread, and pipeweed creates an atmosphere of perfect contentment.",
        exits: { 'east': 'erebor_great_hall', 'west': 'woody_end', 'northeast': 'isengard_gates' },
        items: ['health_potion', 'old_map'],
        enemies: []
    },

    bywater: {
        name: "Bywater",
        description: "A charming small village nestled along the banks of the Water, a gentle stream that flows through the heart of the Shire. Smoke rises lazily from numerous chimneys, each marking a cozy hobbit-hole where families gather for their evening meals. The rhythmic sound of a mill wheel turning provides a steady, comforting backdrop to village life. Hobbits tend their gardens, children play by the water's edge, and the air carries the mingled scents of wildflowers, fresh hay, and baking bread. The road, well-trodden and friendly, continues north toward Hobbiton, while the village itself exudes an atmosphere of peaceful, unhurried contentment that seems to slow time itself.",
        exits: { 'east': 'hobbiton_square', 'west': 'old_forest_exit', 'southeast': 'weatherhills', 'south': 'trollshaws' },
        items: ['rope'],
        enemies: []
    },

    woody_end: {
        name: "Woody End",
        description: "The edge of the woodland marks a transition from the safe, cultivated lands of the Shire to something wilder and more mysterious. Ancient trees grow thick here, their gnarled branches creating a canopy that filters the sunlight into dappled patterns on the forest floor. Strange rustlings echo from the undergrowth—whether from small creatures, the wind, or something more sinister, it's impossible to tell. The air grows cooler and carries the earthy scent of damp leaves and decaying wood. An old, barely visible path winds deeper into the forest, its stones worn smooth by countless years. There's a sense of watchfulness here, as if the very trees are aware of your presence and not entirely welcoming.",
        exits: { 'east': 'green_dragon', 'west': 'brandywine_bridge', 'north': 'orthanc_chamber', 'northwest': 'rath_dinen', 'northeast': 'orthanc_base', 'southwest': 'tunnel_exit' },
        items: [],
        enemies: ['wild_wolf']
    },

    brandywine_bridge: {
        name: "Brandywine Bridge",
        description: "An ancient stone bridge arches gracefully over the Brandywine River, its weathered stones bearing the marks of countless seasons and travelers. The water flows swiftly beneath, clear and cold, carrying leaves and the occasional fallen branch downstream. The bridge itself is wide enough for carts and has stood for generations, a testament to hobbit craftsmanship and the peaceful nature of the Shire. To the south, the Old Forest looms dark and forbidding, its ancient trees seeming to watch with malevolent intent. To the east, the road leads toward Bree and the wider world beyond. The air here carries the fresh scent of running water and the distant, unsettling murmur of the forest. This is a place of transition, where the safety of the Shire gives way to the unknown.",
        exits: { 'east': 'woody_end', 'west': 'stock_road', 'northeast': 'orthanc_chamber' },
        items: [],
        enemies: []
    },

    stock_road: {
        name: "Stock Road",
        description: "A winding country road meanders through some of the most fertile farmland in the Shire. Fields of golden wheat sway gently in the breeze, while vegetable gardens burst with the colors of ripening produce. The road itself is well-maintained, its surface packed earth and gravel that has been trodden smooth by generations of hobbit feet, cart wheels, and the occasional pony. In the distance, the warm lights of Stock village twinkle like stars, promising hospitality and good cheer. The air is rich with the scent of earth, growing things, and the distant aroma of cooking fires. Rolling hills stretch to the horizon, dotted with the round doors of hobbit-holes, each with its own garden and smoke rising from its chimney.",
        exits: { 'east': 'brandywine_bridge', 'south': 'marish', 'northeast': 'rath_dinen' },
        items: ['carrot'],
        enemies: []
    },

    marish: {
        name: "The Marish",
        description: "The marshy lowlands near the Brandywine create a landscape unlike any other in the Shire. The ground is soft and waterlogged, squelching unpleasantly beneath your feet with each step. Thick reeds and cattails sway in the breeze, their rustling creating an eerie, whispering sound. Strange, phosphorescent lights flicker in the distance—will-o'-the-wisps that dance and vanish, leading unwary travelers astray. The air is heavy with moisture and carries the distinct smell of stagnant water, decaying vegetation, and something else, something ancient and unsettling. Mist clings to the ground even in daylight, and the few trees that grow here are twisted and gnarled, their roots exposed like skeletal fingers. This is a place where the normal rules of the Shire seem to bend, where shadows linger longer and sounds carry strangely across the water.",
        exits: { 'north': 'stock_road', 'south': 'prancing_pony', 'southeast': 'barad_dur_chamber' },
        items: ['mysterious_stone'],
        enemies: ['marsh_phantom']
    },

    old_forest_entrance: {
        name: "Old Forest Entrance",
        description: "The threshold of the Old Forest marks a boundary between the known world and something far older and more dangerous. The trees here are ancient beyond reckoning, their trunks twisted into grotesque shapes and their branches reaching out like gnarled, grasping fingers. The canopy overhead is so thick that even at midday, only dim, green-tinged light filters through, creating an atmosphere of perpetual twilight. A feeling of watchfulness pervades the air—not the friendly awareness of the Shire, but something malevolent and patient. The very ground seems to shift, paths appearing and disappearing as if the forest itself is alive and aware. Few hobbits dare enter this place, and those who do often return changed, speaking of trees that move and whispers on the wind. The silence here is heavy, broken only by the creaking of branches and the rustle of unseen things moving in the shadows.",
        exits: { 'north': 'mirkwood_path_1', 'south': 'old_forest_depth', 'down': 'mithril_mine' },
        items: [],
        enemies: ['huorn']
    },

    old_forest_depth: {
        name: "Deep in the Old Forest",
        description: "Deep within the Old Forest, the world outside seems like a distant memory. The trees close in around you, their trunks so thick and close together that you must weave between them. The canopy overhead is so dense that you lose all sense of direction, and the light that filters through is dim and sickly green. The trees themselves seem almost alive—you catch glimpses of movement in your peripheral vision, branches shifting when you're not looking directly at them. Whispers drift on the wind, words in languages long forgotten, speaking of ancient grudges and the slow, patient anger of growing things. The air is heavy and still, thick with the scent of decay and something else, something that makes your skin crawl. In the distance, a clearing opens up, dominated by a great willow tree whose branches trail in dark, still water. The tree seems to watch you, and you have the distinct impression that it is not friendly.",
        exits: { 'north': 'old_forest_entrance', 'south': 'withywindle', 'down': 'durin_chamber' },
        items: ['ancient_acorn'],
        enemies: []
    },

    withywindle: {
        name: "The Withywindle",
        description: "The Withywindle flows lazily through a deep, shadowed dell, its waters dark and slow-moving. An enormous willow tree, ancient beyond measure, stands at the water's edge like a sentinel of the Old Forest. Its massive trunk is gnarled and twisted, and its long, trailing branches dip into the dark water, creating ripples that seem to move against the current. The tree's roots, thick as a hobbit's arm, reach into the water like grasping fingers. As you stand here, an overwhelming drowsiness begins to creep over you—not the pleasant tiredness of a long day's work, but something deeper, more insidious. The air itself seems heavy with sleep, and the gentle murmur of the water sounds like a lullaby. The willow's leaves rustle softly, and you have the distinct, unsettling feeling that the tree is aware of you, watching, waiting. This is Old Man Willow, and he is not to be trusted.",
        exits: { 'north': 'old_forest_depth', 'east': 'bombadil_house', 'west': 'rivendell_gates', 'down': 'endless_stair_top' },
        items: [],
        enemies: ['old_man_willow'],
        puzzle: 'willow_riddle'
    },

    bombadil_house: {
        name: "Tom Bombadil's House",
        description: "A cheerful cottage stands in a sunlit clearing, an island of light and warmth in the shadowed depths of the Old Forest. The building itself seems to have grown from the earth, its walls covered in flowering vines and its roof thatched with living grass. Flowers bloom in riotous profusion all around—elanor, niphredil, and many others whose names you don't know, creating a carpet of color and scent. From within, you hear a merry voice singing: 'Hey dol! merry dol! ring a dong dillo!' The song is infectious, filling you with a sense of joy and safety you haven't felt since leaving the Shire. The round door stands open, inviting you in, and through it you can see a cozy interior filled with comfortable furniture, a crackling fire, and the warm presence of Tom Bombadil himself. This is a place of refuge, where the dark things of the forest dare not come.",
        exits: { 'west': 'withywindle', 'east': 'weathertop_approach', 'northwest': 'bag_end', 'north': 'tuckborough', 'northeast': 'tookbank', 'southeast': 'rivendell_forge' },
        items: ['bombadil_gift', 'health_potion'],
        enemies: []
    },

    // BREE & WEATHERTOP
    bree_gate: {
        name: "Bree Gate",
        description: "The western gate of Bree rises before you like a sentinel between two worlds—the wild, untamed lands behind you and the last bastion of civilization ahead. The gate itself is a masterpiece of practical craftsmanship, constructed from thick oak timbers that have weathered countless seasons, their grain showing the rich patina of age. Heavy iron bands, blackened by time and weather, reinforce the structure, and the massive hinges groan with the weight of history. A weathered stone arch frames the gate, carved with ancient symbols that speak of protection and vigilance. The gatekeeper, a grizzled man named Harry Goatleaf, stands watch with eyes that have seen too much—eyes that scan the horizon for threats both mundane and otherworldly. His hand rests casually on the hilt of his sword, and his weather-beaten face bears the scars of a life lived on the edge of danger. Beyond the gate, Bree unfolds like a patchwork quilt of civilization: houses of stone and timber built directly into the hillside, their windows glowing with warm, golden light that promises safety and rest. Smoke curls from dozens of chimneys, painting the sky with soft grey tendrils. The narrow, winding streets are paved with cobblestones worn smooth by generations of feet—both hobbit and human—and the air is alive with the symphony of borderland life: the distant clatter of a blacksmith's hammer, the whinny of horses, the laughter of children playing in the alleys, and the rich, earthy scent of woodsmoke mingling with the aroma of fresh bread and roasting meat. The Prancing Pony inn dominates the skyline, its sign—a magnificent white horse rearing on its hind legs—swinging gently in the breeze, each creak of its chain a welcome sound that speaks of home and hearth. This is more than a gate; it is a threshold between safety and peril, between the known and the unknown, and you can feel the weight of that transition in the very air you breathe.",
        exits: { 'southwest': 'chetwood', 'north': 'bree_square', 'northwest': 'overhill', 'northeast': 'fangorn_hidden_path' },
        items: [],
        enemies: []
    },

    bree_square: {
        name: "Bree Square",
        description: "The heart of Bree pulses with the vibrant energy of a border town that has stood for centuries as a crossroads of civilization. The square itself is a wide, open space paved with ancient cobblestones, each stone worn smooth and polished by the passage of countless feet—hobbit feet in their leathery soles, human boots heavy with travel, and the occasional clatter of hooves from ponies and horses. The architecture here is a fascinating blend of two cultures: tall, narrow buildings of stone and timber where the Big Folk dwell, their upper stories leaning slightly with age, their windows filled with the warm glow of oil lamps; and low, round hobbit-holes carved into the hillside, their round green doors painted in cheerful colors, their gardens spilling over with flowers and vegetables. Merchants have set up their stalls in a colorful array around the square's perimeter, their voices rising in a cacophony of commerce. A fruit seller calls out the freshness of his apples, their red and gold skins gleaming in the sunlight. A weaponsmith displays his wares—swords, daggers, and axes that catch the light with deadly beauty. A cloth merchant unfurls bolts of fabric in rich purples, deep blues, and earthy browns, while a baker's stall fills the air with the intoxicating aroma of fresh bread, still warm from the oven. Children dart between the stalls, their laughter mingling with the sounds of haggling and the distant, rhythmic clang of a blacksmith's hammer striking hot iron. The Prancing Pony inn dominates the northern end of the square, its three-story structure built of dark timber and pale stone, its windows glowing with inviting light even in the daytime. The inn's sign, a magnificent white horse captured mid-rear, swings on its iron chain, casting dancing shadows across the cobblestones. Beneath the sign, the inn's door stands open, and you can hear the murmur of voices, the clink of mugs, and the occasional burst of laughter spilling out into the square. A stone well sits at the center of the square, its rim worn smooth by generations of hands, and around it, travelers and locals gather to exchange news, share stories, and catch glimpses of the wider world. The air is thick with the mingled scents of woodsmoke, roasting meat, fresh bread, pipeweed, horses, and the earthy smell of the cobblestones after a recent rain. This is a place where the threads of many stories converge—where a ranger might share a tale of distant lands, where a merchant might speak of the roads to Gondor, and where a hobbit might gossip about the latest news from the Shire. It is a place of transition, of gathering strength before the journey ahead, and of finding community in the vast, wild expanse of Middle-earth.",
        exits: { 'south': 'bree_gate', 'north': 'bree_east_road' },
        items: ['brass_key'],
        enemies: []
    },

    prancing_pony: {
        name: "The Prancing Pony",
        description: "Step through the heavy oak door of The Prancing Pony, and you enter a world of warmth, light, and the rich tapestry of Middle-earth's travelers. The common room is a vast, welcoming space that seems to expand beyond its physical boundaries, filled with the golden glow of dozens of oil lamps and candles that cast flickering, dancing shadows across the walls. The ceiling is low and beamed with dark, age-blackened timbers that seem to hold up not just the roof, but the very weight of history itself. The walls are a gallery of the inn's storied past: maps of distant lands, their edges curled and yellowed, showing routes to places both real and legendary; mounted trophies from hunts long past—antlers of great stags, the pelt of a warg, and the tattered banner of some forgotten battle; and weapons left behind by travelers—a rusted sword, a notched axe, a bow with a broken string—each one a silent testament to a story untold. A massive fireplace dominates the western wall, its hearth large enough to roast an entire boar, and the flames within crackle and dance, casting a warm, orange light that chases away the shadows and fills the room with the comforting scent of burning wood. The fire's heat radiates outward, creating a circle of warmth that draws travelers like moths to a flame. The floor is made of wide, polished planks of oak, worn smooth by countless feet and scrubbed clean each morning, their surface reflecting the firelight like dark mirrors. Tables of various sizes are scattered throughout the room, some large enough to seat a dozen, others small and intimate, perfect for quiet conversations. The chairs are heavy and well-made, their cushions stuffed with straw and covered in faded but still-colorful fabric. The inn is alive with the sounds of life: the clatter of wooden mugs being set down on tables, the scrape of chairs being pulled back, the murmur of a dozen conversations happening at once, the occasional burst of laughter that seems to bubble up from the very heart of the room, and the soft strains of a minstrel's lute from a corner where a bard entertains a small crowd. The air is thick and rich with a symphony of scents: the savory aroma of roasting meat—beef, mutton, and pork—turning on spits in the kitchen; the yeasty, comforting smell of fresh bread, still warm from the oven; the sweet, earthy scent of pipeweed being smoked by hobbits and men alike, their pipes sending up delicate tendrils of smoke that curl toward the ceiling; and the sharp, bitter tang of ale, both fresh and spilled, that seems to permeate every surface. Barliman Butterbur, the innkeeper, is a portly man whose round, red face is perpetually flushed with the heat of the kitchen and the effort of his work. His apron, once white but now stained with the evidence of countless meals, is tied tightly around his ample waist, and he moves through the room with a surprising grace, balancing trays laden with food and mugs of ale, his eyes constantly scanning the room for empty mugs, hungry faces, and any sign of trouble. His voice, when he speaks, is warm and welcoming, but there's a note of weariness in it, the weariness of a man who has seen too many travelers come and go, too many stories begin and end within these walls. The inn is filled with a diverse cast of characters: hobbits from the Shire, their round faces beaming with good cheer as they share news from home; merchants in fine clothes, their fingers heavy with rings, discussing trade routes and prices in hushed tones; rangers in their travel-stained cloaks, keeping to the shadows, their eyes watchful and their presence almost unnoticed until you look directly at them; and locals from Bree itself, farmers and craftsmen who come here to escape the day's toil and share in the community of the inn. In a dark corner, partially hidden by shadow, sits a hooded figure whose presence seems to draw the light away from them. Their face is hidden beneath the deep cowl of their cloak, but you can feel their eyes on you, watching with an intensity that makes the hairs on the back of your neck stand up. There's something about them—something that speaks of danger, of secrets, of the darker currents that flow beneath the surface of this seemingly peaceful place. This is The Prancing Pony, and it is more than just an inn. It is a crossroads of the world, a place where the threads of many stories converge, where news from distant lands is exchanged, where alliances are formed and broken, where travelers find rest and locals find community. It is a place where the fate of Middle-earth might be decided not in grand halls or on battlefields, but over a pint of ale and a warm meal, in the quiet conversations that happen in the corners and shadows of this most welcoming of inns.",
        exits: { 'north': 'marish', 'south': 'goblin_warren', 'northeast': 'tunnel_exit' },
        items: ['ranger_cloak'],
        enemies: []
    },

    chetwood: {
        name: "Chetwood Forest",
        description: "Chetwood Forest stretches before you like a living wall of green, a wild and untamed realm where the carefully ordered world of Bree gives way to the ancient, primal power of nature. The moment you step beneath the canopy, the world changes. The trees here are ancient, their trunks thick as houses, their bark gnarled and scarred by countless seasons. Oaks and beeches tower overhead, their branches interlocking in a complex web that creates a ceiling of living green, filtering the sunlight into a dim, dappled twilight that shifts and moves with the breeze. The light that does penetrate is transformed, taking on a greenish, underwater quality that makes everything seem slightly unreal, as if you've stepped into a different world entirely. The forest floor is a carpet of moss, fallen leaves, and decaying wood, soft and springy beneath your feet, but treacherous—hidden roots snake across the ground like the fingers of buried giants, ready to trip the unwary. The undergrowth is a dense, tangled thicket of brambles, ferns, and young saplings fighting for light, creating a maze that seems to shift and change as you move through it. Vines hang from the branches like curtains, some thick as your arm, others delicate as threads, and they seem to reach for you as you pass, their touch cold and slightly damp. The air is heavy and still, thick with moisture that clings to your skin and clothes. It carries a complex symphony of scents: the rich, earthy smell of damp soil and decaying leaves; the sharp, green scent of growing things; the faint, sweet perfume of wildflowers that bloom in hidden clearings; and something else, something that makes your instincts prickle—the faint, acrid smell of woodsmoke that might indicate a hidden camp, or the musky scent of animals that have passed this way recently. The sounds of the forest are a constant, layered symphony: the rustle of leaves overhead as the wind moves through the branches; the creak and groan of ancient trees settling into their positions; the distant, haunting howl of wolves that raises the hair on the back of your neck and sends a chill down your spine; the scurry of small creatures in the undergrowth—squirrels, rabbits, and things you can't identify; and the occasional, unsettling silence that seems to press down on you like a physical weight. Every sound is magnified in the stillness, and every rustle of leaves, every snap of a twig, makes you wonder if you're being watched. The shadows here are deep and dark, and they seem to move with a life of their own, creating shapes that might be trees or might be something else entirely. The forest has a watchful quality, as if the very trees are aware of your presence and are judging whether you belong here. This is a place where bandits and outlaws are known to hide, preying on unwary travelers who venture too far from the protection of Bree's walls. The paths through the forest are narrow and winding, often disappearing entirely, leaving you to navigate by instinct and the occasional glimpse of the sun through the canopy. Fallen logs, covered in moss and mushrooms, create natural bridges over streams and gullies, but they're treacherous, their surfaces slick with moisture and decay. In the distance, you can see the occasional clearing where sunlight breaks through, creating pools of golden light that seem almost magical in contrast to the dim green twilight of the forest. But even these clearings feel watched, as if something is waiting just beyond the edge of the trees, something patient and hungry. This is Chetwood, and it is a place of beauty and danger, of life and death, where the wild things of Middle-earth still hold sway, and where the thin veneer of civilization is stripped away to reveal the ancient, untamed heart of the world.",
        exits: { 'west': 'weathertop_summit', 'northeast': 'bree_gate', 'south': 'mirror_chamber' },
        items: ['forest_berry'],
        enemies: ['brigand', 'wild_wolf']
    },

    bree_east_road: {
        name: "East Road from Bree",
        description: "The Great East Road unfurls before you like a ribbon of history, a path that has been trodden by countless feet over countless years, connecting the peaceful Shire in the west to the distant, mysterious lands of the east. This is one of the oldest and most storied roads in all of Middle-earth, and you can feel the weight of that history in every stone, every rut, every worn patch of earth. The road itself is wide enough for two carts to pass comfortably, its surface a mix of packed earth, gravel, and ancient paving stones that have been worn smooth by the passage of time and travelers. The stones, where they still exist, are fitted together with the skill of master craftsmen, their edges rounded and polished by countless wheels and hooves. Deep ruts run along the road's length, carved by the wheels of countless carts and wagons, and they fill with water when it rains, creating muddy channels that slow travel and test the patience of even the most experienced road-weary traveler. The road shows the signs of heavy use: discarded items litter the edges—a broken wheel, a torn piece of cloth, a lost horseshoe rusting in the grass—each one a silent testament to someone's journey, someone's story. The grass along the road's edges is trampled and sparse, giving way to wildflowers that bloom in profusion: bluebells, buttercups, and the occasional red poppy that seems to glow like a drop of blood against the green. To the south, the ominous silhouette of Weathertop dominates the horizon, rising against the sky like a broken, jagged tooth. The ancient hill seems to watch over the road with a brooding presence, its summit crowned with the ruins of an ancient watchtower that stands as a stark reminder of the dangers that lurk in these lands. The tower's broken walls catch the light in strange ways, and at certain times of day, they seem to glow with an inner fire, or fade into shadow like a ghost. The hill itself is steep and rocky, covered in rough grass and scattered boulders, and it seems to radiate a sense of ancient power and watchfulness. The landscape around you is a patchwork of Middle-earth's varied terrain: rolling hills that rise and fall like gentle waves, their slopes covered in heather and gorse; patches of forest that crowd close to the road, their dark trees seeming to lean inward as if trying to reclaim the cleared space; and open grasslands that stretch to the horizon, their green expanse broken only by the occasional stand of trees or the distant shape of a farmhouse with its plume of smoke. The air here is alive with movement and sound: the whisper of the wind through the grass; the distant call of birds—crows, hawks, and the occasional eagle soaring high overhead; the creak of a cart in the distance, its wheels complaining as it makes its slow way along the road; and the sound of your own footsteps, each one a small echo in the vast silence of the landscape. The scents that fill the air are a complex mix: the sweet perfume of wildflowers; the dry, dusty smell of the road itself; the rich, earthy scent of the grasslands; and something else, something that speaks of distance and adventure—the faint, tantalizing promise of lands unknown, of stories waiting to be told, of dangers to be faced and victories to be won. This is the East Road, and it is more than just a path—it is a journey, a promise, a thread that connects the known world to the unknown, the safe to the dangerous, the past to the future. As you stand here, you can almost feel the presence of all those who have traveled this road before you: merchants with their goods, rangers on their secret missions, hobbits on their rare adventures, and heroes on their quests. The road stretches ahead, disappearing into the distance, and you know that whatever lies at its end, the journey itself will be filled with wonder, danger, and the rich tapestry of life that makes Middle-earth a place of endless possibility.",
        exits: { 'south': 'bree_square', 'north': 'weathertop_base', 'west': 'buckland_kitchen' },
        items: [],
        enemies: []
    },

    weathertop_base: {
        name: "Base of Weathertop",
        description: "At the base of Weathertop, the ancient watchtower of Amon Sûl looms above you like a broken crown against the sky. The hill itself is steep and rocky, covered in rough grass and scattered boulders. Stone ruins are scattered about the base—broken walls, tumbled pillars, and fragments of what was once a great fortress. These ruins speak of a time when this was a place of power and importance, a watchtower that guarded the borders of the North Kingdom. Now, it stands as a monument to fallen glory, its stones weathered by countless seasons and scarred by ancient battles. You feel a sense of ancient evil here, a lingering presence that makes the air feel heavy and cold. The very ground seems to remember the darkness that once passed this way. A narrow, winding path leads up the hillside toward the summit, and you can't shake the feeling that you're being watched from above.",
        exits: { 'south': 'bree_east_road', 'west': 'midgewater_marshes', 'east': 'entmoot_circle', 'north': 'entwash_headwaters', 'northeast': 'treebeard_cellar', 'northwest': 'crickhollow' },
        items: ['ancient_blade'],
        enemies: ['orc_scout']
    },

    weathertop_summit: {
        name: "Weathertop Summit",
        description: "The ruined tower atop Weathertop stands as a broken monument to a lost age. Ancient stones lie scattered across the summit, their edges worn smooth by wind and rain, their surfaces covered in moss and lichen. Burn marks scar the ground in several places, dark patches where fires once burned—some ancient, some disturbingly recent. The view from here is breathtaking, stretching for miles in all directions: to the west, the green lands of the Shire; to the east, the dark forests and hills of the wild lands; to the north and south, rolling countryside that seems to go on forever. But despite the beauty of the view, you feel eyes watching you from the shadows. There's a presence here, something cold and malevolent that makes your skin crawl. A fire pit shows recent use, its ashes still warm, and you can't help but wonder who—or what—was here before you. This is a place of power, and power draws both good and evil.",
        exits: { 'west': 'weathertop_approach', 'east': 'chetwood', 'northwest': 'tookbank', 'northeast': 'waymeet', 'southeast': 'mirror_chamber', 'southwest': 'rivendell_forge' },
        items: ['athelas', 'watchtower_lens', 'ancient_rune'],
        enemies: ['ringwraith'],
        puzzle: 'tower_inscription'
    },

    midgewater_marshes: {
        name: "Midgewater Marshes",
        description: "The Midgewater Marshes are a miserable, swampy wasteland that stretches for miles, a place where the very ground seems to conspire against travelers. The marsh is a maze of stagnant pools, quaking bogs, and patches of treacherous ground that look solid but will swallow you up to your knees. Clouds of midges buzz incessantly around your head, their tiny wings creating a maddening drone that makes it impossible to think clearly. The ground squelches unpleasantly beneath your feet with every step, and the air is thick with the stench of decay, stagnant water, and something else—something that makes your stomach turn. Will-o'-the-wisps dance in the distance, their pale, flickering lights leading unwary travelers deeper into the marsh, where they become hopelessly lost. The sky overhead is often overcast, and even when the sun shines, it seems weak and distant. This is a place to be crossed quickly, if at all, and you can't help but feel that something ancient and hungry lurks beneath the murky waters.",
        exits: { 'east': 'weathertop_base', 'west': 'weatherhills', 'north': 'old_forest_buckland_entrance', 'northwest': 'hobbiton_square' },
        items: [],
        enemies: ['giant_midge_swarm']
    },

    weatherhills: {
        name: "The Weather Hills",
        description: "The Weather Hills are a range of rolling hills covered in rough grass and scattered stones, a landscape that seems both beautiful and forbidding. The hills rise and fall like waves frozen in time, their slopes covered in heather and gorse that bloom in shades of purple and gold during the warmer months. Ancient barrows dot the landscape like great, grass-covered mounds, each one the final resting place of a long-dead king or warrior from ages past. These barrows are old beyond reckoning, their stones weathered smooth and covered in moss and lichen. Standing stones, some still upright and others fallen, mark the boundaries of these ancient graves, and the air here carries a sense of age and memory. The wind that sweeps across these hills seems to whisper of ancient battles, forgotten kingdoms, and the restless spirits of those who sleep beneath the earth. This is a place where the past feels very close, and you can't shake the feeling that you're being watched by eyes that closed long ago.",
        exits: { 'east': 'midgewater_marshes', 'west': 'trollshaws', 'northwest': 'bywater' },
        items: ['barrow_treasure'],
        enemies: ['barrow_wight']
    },

    last_bridge: {
        name: "The Last Bridge",
        description: "The Last Bridge spans the Hoarwell River, a graceful arch of stone that has stood for centuries, connecting the lands of the North to the hidden valley of Rivendell. The bridge itself is a work of art, its stones fitted together with such precision that it seems to have grown from the earth rather than been built by hands. The river rushes below, its waters clear and cold, tumbling over rocks and creating a constant, soothing roar. The sound of the water, combined with the fresh, clean air, creates a sense of peace and renewal. On the far side of the bridge, the road continues east toward Rivendell, winding through hills and forests that grow more beautiful and more wild with each passing mile. The bridge marks a transition point—behind you, the dangers of the wild lands; ahead, the promise of sanctuary in the Last Homely House. Elven berries grow along the riverbank, their sweet scent carried on the breeze, a sign that you're drawing closer to elven lands.",
        exits: { 'north': 'rivendell_gardens', 'south': 'ford_of_bruinen' },
        items: ['elven_berries'],
        enemies: []
    },

    // TROLLSHAWS & RIVENDELL
    trollshaws: {
        name: "The Trollshaws",
        description: "The Trollshaws are a wild, hilly region where the land rises and falls in great swells, covered in thick forests and rocky outcroppings. The trees here are ancient and gnarled, their branches twisted into strange shapes by wind and weather. In a clearing ahead, three enormous stone figures stand frozen in grotesque poses—trolls, turned to stone by the light of the rising sun. Their faces are contorted in expressions of surprise and anger, their massive forms looming over the landscape like monuments to a moment of hubris. The stone itself is weathered and covered in moss, but the detail is still clear enough to see the crude features and the rough clothing they wore. Their treasure must be nearby, hidden in some cave or hollow, waiting for a brave soul to claim it. The air here carries the scent of pine, damp earth, and something else—the faint, lingering smell of troll that makes your stomach turn.",
        exits: { 'east': 'weatherhills', 'west': 'troll_cave', 'north': 'bywater' },
        items: [],
        enemies: []
    },

    troll_cave: {
        name: "Troll Cave",
        description: "The troll cave is a dank, foul-smelling hollow that reeks of troll—a stench so powerful it makes your eyes water and your stomach churn. The cave is large, its ceiling lost in shadow, and the walls are rough stone covered in slime and filth. Bones litter the floor, some large enough to be from horses or cattle, others disturbingly small. The remains of crude furniture—a table made from a split log, a chair that's little more than a boulder—stand abandoned in the gloom. In the dim light filtering from the cave entrance, you can see a chest partially buried in the debris, its surface scratched and dented but still clearly valuable. The chest is locked, and you can't help but wonder what treasures the trolls hoarded before meeting their stony fate. The air is thick and heavy, and every sound echoes strangely in the confined space.",
        exits: { 'east': 'trollshaws', 'south': 'rivendell_gardens', 'northeast': 'old_forest_exit' },
        items: ['sting', 'orcrist', 'gold_treasure'],
        enemies: [],
        puzzle: 'troll_chest'
    },

    ford_of_bruinen: {
        name: "Ford of Bruinen",
        description: "The Ford of Bruinen spans the Loudwater River, a place where the water runs shallow over smooth stones, creating a natural crossing point. The river itself is wide and swift, its waters clear and cold, tumbling over rocks and creating a constant, soothing roar. The ford is marked by ancient stepping stones that have been worn smooth by countless feet, and the water sparkles with an otherworldly light that seems to come from within the river itself. On the far bank, you can see the hidden valley of Rivendell—Imladris, the Last Homely House—nestled among the mountains like a jewel. The valley is filled with golden light even when the sun is hidden, and you can hear the distant sound of waterfalls and elven voices raised in song. The air here is fresh and clean, carrying the scent of pine, wildflowers, and something else—something that speaks of peace and sanctuary. This is a place of transition, where the dangers of the wild lands give way to the safety of elven protection.",
        exits: { 'north': 'last_bridge', 'south': 'rivendell_gates' },
        items: [],
        enemies: []
    },

    rivendell_gates: {
        name: "Gates of Rivendell",
        description: "The hidden gates of Rivendell are not gates in the traditional sense, but rather a natural archway formed by two great trees whose branches have grown together over centuries. The entrance is marked by subtle elven runes carved into the living wood, visible only to those who know where to look. Waterfalls cascade around you on all sides, their mist creating rainbows in the air and filling the valley with a constant, musical roar. The water flows in streams and rivulets, creating a network of small bridges and walkways that connect the various buildings. Elven voices sing in the distance, their songs carrying on the breeze like something from a dream—melodies that speak of ancient wisdom, eternal beauty, and the sorrow of a people who have seen too much. As you stand here, a profound sense of peace washes over you, as if all the cares and dangers of the world outside have been left behind. This is Imladris, the Last Homely House, and it lives up to its name.",
        exits: { 'north': 'ford_of_bruinen', 'east': 'rivendell_hall', 'down': 'endless_stair_top' },
        items: [],
        enemies: []
    },

    rivendell_hall: {
        name: "Hall of Fire - Rivendell",
        description: "The Hall of Fire is a magnificent chamber that serves as the heart of Rivendell. A great fire burns eternally in the center of the hall, its flames never dying, casting warm, golden light across the room. The fire is magical, fed by no visible fuel, and its light seems to have a quality that soothes the soul and sharpens the mind. Elven lords sit in counsel around the fire, their faces ageless and wise, discussing matters of great importance with voices that carry the weight of millennia. Maps and ancient books line the walls, their pages filled with knowledge gathered over countless ages. Tapestries depicting the history of Middle-earth hang between the bookshelves, their threads still vibrant after centuries. Elrond Half-elven, Lord of Rivendell, regards you warmly from his seat, his eyes holding the wisdom of both elves and men, and the sorrow of one who has seen the rise and fall of kingdoms. The air is filled with the scent of pine, old books, and something else—the very essence of elven magic that makes this place feel outside of time itself.",
        exits: { 'west': 'rivendell_gates', 'southeast': 'rivendell_library', 'southwest': 'silverlode_crossing' },
        items: ['mithril_mail', 'miruvor'],
        enemies: []
    },

    rivendell_library: {
        name: "Library of Rivendell",
        description: "The Library of Rivendell is a peaceful sanctuary of knowledge, a room that seems to stretch beyond the physical boundaries of the building itself. Countless scrolls and books fill the space, arranged on shelves that reach toward a ceiling lost in shadow. The books are bound in leather and cloth, their pages filled with elegant elven script, maps of forgotten lands, and illustrations that seem to move in the flickering candlelight. The knowledge of ages is stored here—histories of kingdoms long fallen, accounts of battles won and lost, treatises on magic and lore, and stories that have been passed down through countless generations. The air is thick with the scent of old paper, leather bindings, and the faint smell of preservation spells. You could spend years reading these tomes and still not exhaust their wisdom. Soft light filters through windows that look out over the valley, and comfortable chairs are placed throughout the room, inviting you to sit and lose yourself in the accumulated knowledge of the elves. This is a place where time seems to stand still, where the past and present merge into a single, eternal moment.",
        exits: { 'northwest': 'rivendell_hall', 'east': 'rivendell_forge', 'south': 'cerin_amroth', 'southeast': 'caras_galadhon' },
        items: ['ancient_tome', 'scroll_of_wisdom'],
        enemies: [],
        puzzle: 'elven_lore'
    },

    rivendell_forge: {
        name: "Rivendell Forge",
        description: "The Rivendell Forge is an elven smithy where legendary weapons and armor were crafted by master smiths whose skill has never been matched. The forge itself is a work of art, its structure built to channel both natural fire and elven magic. The forge still glows with magical fire that burns with an otherworldly blue-white light, its flames never consuming fuel but drawing power from the very essence of the valley. Anvils of mithril and steel stand ready, their surfaces marked by countless hammer blows. Tools hang on the walls—hammers, tongs, files, and other implements—each one perfectly crafted and maintained. The air is warm and carries the scent of hot metal, coal, and something else—the faint, sweet smell of elven magic that infuses everything crafted here. Shelves display examples of the smiths' work: blades that seem to glow with inner light, armor that appears to be woven from starlight, and jewelry of such delicate beauty that it seems impossible to have been made by mortal hands. This is where Andúril was reforged, where the weapons of heroes were crafted, and where the art of elven smithing reached its highest form.",
        exits: { 'west': 'rivendell_library', 'east': 'hollin_gate', 'north': 'weathertop_approach', 'northeast': 'weathertop_summit', 'northwest': 'bombadil_house', 'south': 'caras_galadhon', 'southwest': 'cerin_amroth' },
        items: ['elvish_blade'],
        enemies: []
    },

    //MORIA - The Mines of Moria
    hollin_gate: {
        name: "Hollin Gate",
        description: "The western approach to Moria is a place of stark, forbidding beauty. You stand before a sheer cliff face that rises hundreds of feet into the air, its surface of dark, weathered stone. Beside you, a dark lake stretches out, its waters so still and black that they seem to absorb all light, reflecting nothing. The lake is surrounded by ancient, gnarled trees that seem to lean away from the water as if in fear. In the rock face, barely visible at first glance, are the outlines of great doors—the West-gate of Moria, the Doors of Durin. The doors are massive, carved from the living rock, and covered in intricate designs that glow faintly with an inner light when the moon shines upon them. The air here is heavy and still, and there's a sense of watchfulness—not just from the doors themselves, but from something in the dark water. The Watcher in the Water lurks beneath the surface, its presence felt rather than seen, a guardian of the gate that has claimed many unwary travelers.",
        exits: { 'west': 'rivendell_forge', 'down': 'durin_throne_hall', 'northwest': 'weathertop_approach', 'southwest': 'caras_galadhon', 'east': 'mirror_chamber' },
        items: ['mithril_fragment'],
        enemies: ['watcher_in_water']
    },

    doors_of_durin: {
        name: "Doors of Durin - West Gate of Moria",
        description: "The great Doors of Durin, Lord of Moria, stand before you in all their ancient glory. Carved from a single piece of mithril-adorned stone, the doors are a masterpiece of dwarven craftsmanship, their surfaces covered in intricate designs of stars, hammers, anvils, and the tree of the High Elves. Under the light of the moon, the doors shine with an ethereal silver glow, for they are inscribed with ithildin—a substance that only reveals itself in starlight and moonlight. The script glows faintly, forming words in both elvish and dwarvish: 'Speak, friend, and enter.' The doors stand shut, massive and immovable, blocking the way into the darkness of Moria. They have not been opened in many years, and the riddle they present must be solved before entry is granted. The air around the doors carries the weight of ages, and you can feel the presence of the great kingdom that once lay beyond—Khazad-dûm, the greatest of all dwarven realms, now fallen to darkness and shadow.",
        exits: { 'south': 'royal_tombs', 'north': 'moria_entrance', 'up': 'michel_delving' },
        items: [],
        enemies: [],
        puzzle: 'gateway_of_moria',
        requirements: [{ type: 'puzzle', puzzle: 'gateway_of_moria' }]
    },

    moria_entrance: {
        name: "First Hall of Moria",
        description: "You step into darkness, and the world outside seems to vanish behind you. The vast hall of the First Hall of Moria stretches before you, so large that your torchlight barely penetrates the gloom, creating a small island of light in an ocean of shadow. The hall is pitch black, its ceiling lost in darkness high above. Massive columns of stone rise like the trunks of petrified trees, their surfaces carved with intricate dwarven runes and designs that speak of a time when this was a place of light and life. The columns support a ceiling you cannot see, but you can feel the weight of the mountain above pressing down. A sense of ancient grandeur mixed with decay fills the air—the smell of stone, dust, and something else, something that speaks of things long dead. The floor is paved with great stone blocks, worn smooth by countless feet, and you can see the remains of what once were magnificent decorations: broken statues, tattered banners, and the scattered remnants of a civilization that reached heights few have ever achieved. This is Khazad-dûm, the Dwarrowdelf, and you have entered a tomb.",
        exits: { 'south': 'doors_of_durin', 'northwest': 'twenty_first_hall', 'up': 'overhill' },
        items: ['old_torch', 'dwarven_helm'],
        enemies: ['goblin', 'goblin']
    },

    twenty_first_hall: {
        name: "Twenty-First Hall",
        description: "You stand in the Twenty-First Hall, a vast chamber that serves as a testament to the lost grandeur of Khazad-dûm. Massive pillars of hewn stone rise like a petrified forest into the crushing darkness above, their heights lost to shadow. The air is cold and still, heavy with the dust of ages and the silence of a tomb. Faded runes on the walls tell stories of kings long dead, and the debris of ancient battles litters the floor—broken blades, shattered helms, and the bones of dwarves and orcs alike. Three dark archways yawn in the gloom, mocking mouths leading deeper into the mountain's perilous heart. The weight of history here is crushing, a silent vigil kept by stone and shadow.",
        exits: { 'southeast': 'moria_entrance', 'west': 'balin_tomb' },
        items: ['ancient_hammer', 'iron_ore'],
        enemies: ['orc_warrior', 'goblin']
    },

    balin_tomb: {
        name: "Chamber of Mazarbul - Balin's Tomb",
        description: "A square chamber bathed in a single, brilliantly white shaft of light that pierces the darkness from a high fissure in the ceiling. In the center of this illumination stands a simple block of white stone, stern and solemn: the Tomb of Balin, Lord of Moria. Runes are carved into the top, declaring his title and lordship. Dust motes dance in the light, the only movement in this silent crypt. All around, the walls are scarred with the marks of weapons and fire, bearing witness to a desperate last stand. Near the tomb, a tattered, leather-bound book lies in the dust, its pages seemingly frozen in time, waiting for a hand to turn them and read the final, tragic entries: 'We cannot get out... drums, drums in the deep.'",
        exits: { 'east': 'twenty_first_hall', 'west': 'durin_chamber' },
        items: ['book_of_mazarbul', 'mithril_chain', 'balin_crown'],
        enemies: [],
        puzzle: 'chamber_records'
    },

    seventh_level: {
        name: "Seventh Level",
        description: "You are on the Seventh Level of Moria, a dizzying maze of interlocking passages and carved chambers that seem to twist back upon themselves. The air here vibrates with a low, rhythmic thrumming—the sound of drums in the deep. 'Doom, doom,' they echo, a heartbeat of malice from the abyss below. Torchlight catches the edges of sharp stone and dark pits, casting long, dancing shadows that seem to reach for you. The walls are rougher here, the mining more frantic, as if the dwarves were searching for something they ultimately regretted finding.",
        exits: { 'north': 'elf_path_entrance', 'east': 'fangorn_border', 'northwest': 'the_silent_glade', 'west': 'fangorn_hidden_path', 'southwest': 'anduin_approach' },
        items: [],
        enemies: ['goblin', 'orc_warrior', 'orc_warrior']
    },

    sixth_level: {
        name: "Sixth Level - Goblin Territory",
        description: "The Sixth Level has been utterly overrun by the dark denizens of the mountain. Crude, jagged barricades of scrap metal and bone block different corridors, marking the boundaries of goblin territory. The walls are smeared with filth and crude graffiti depicting the Eye. Guttural voices and the clatter of poorly forged steel echo from the darkness ahead, and the smell of unwashed bodies and roasting questionable meat is overpowering. This places evokes a primal fear, a descent into a chaotic underworld.",
        exits: { 'east': 'lossarnach_valleys', 'northwest': 'fifth_level', 'southwest': 'entwash_delta', 'northeast': 'aldburg', 'north': 'snowbourn_banks', 'west': 'west_emnet' },
        items: [],
        enemies: ['goblin', 'goblin', 'goblin_chieftain']
    },

    goblin_warren: {
        name: "Goblin Warren",
        description: "A warren of small tunnels and chambers where the goblins nest. Bones and filth litter the floor. The smell is overwhelming.",
        exits: { 'north': 'prancing_pony', 'south': 'east_gate_approach' },
        items: ['goblin_treasure', 'rusty_armor'],
        enemies: ['goblin', 'goblin', 'orc_warrior']
    },

    fifth_level: {
        name: "Fifth Level",
        description: "This level once housed the great forges of Khazad-dûm. Rows of massive, cold furnaces line the walls like silent sentinels. Though the fires have long gone out, you can almost hear the phantom ringing of hammers on anvils and see the ghostly glow of molten metal. It is a place of lost industry and silenced craft, now home only to the scratching of scavengers.",
        exits: { 'southeast': 'sixth_level', 'south': 'fourth_level' },
        items: ['forge_hammer', 'coal'],
        enemies: ['goblin']
    },

    fourth_level: {
        name: "Fourth Level",
        description: "The air on the Fourth Level is damp and chill. Water drips incessantly from the high ceiling, forming stagnant black pools on the uneven floor. The sound of the dripping water echoes maddeningly in the silence. Occasionally, you hear other sounds—slithering, wet footsteps, or distant whispers that might just be the wind playing tricks on your mind in the dark.",
        exits: { 'north': 'fifth_level', 'south': 'third_level', 'southwest': 'entwash_headwaters', 'northeast': 'osgiliath_ruins' },
        items: [],
        enemies: ['cave_troll']
    },

    third_level: {
        name: "Third Level - The Deeps",
        description: "You have descended into the deep foundations of the mountain, far below the light of day. The stonework here is massive and primitive, hewn from the living rock in ages past by the first of Durin's folk. The air is thick and heavy, and a faint, unsettling heat radiates from the floor, hinting at the volcanic fires that burn far, far below. The weight of the mountain above feels crushing here, a physical pressure on your chest. Shadows seem darker and more solid in these depths, hiding things that have not seen light for eons.",
        exits: { 'north': 'fourth_level', 'south': 'second_level', 'east': 'dunharrow_firtree_grove', 'northeast': 'osgiliath_ruins' },
        items: ['deep_crystal'],
        enemies: ['orc_warrior']
    },

    durin_chamber: {
        name: "Durin's Chamber",
        description: "A small, sacred chamber dedicated to Durin the Deathless, the first father of the Dwarves. A magnificent relief carving of the King covers the far wall, his eyes set with gems that glint in the darkness. He is depicted crowned and holding the tools of his craft, looking out over his kingdom with a stern, protecting gaze. The room feels untouched by the filth of the goblins, protected perhaps by some ancient ward or reverence.",
        exits: { 'east': 'balin_tomb', 'west': 'mithril_mine', 'up': 'old_forest_depth' },
        items: ['durin_axe', 'seven_stars_token'],
        enemies: []
    },

    second_level: {
        name: "Second Level - Abandoned Mines",
        description: "The Second Level opens into a series of vast, echoing mines that stretch endlessly into the dark. Here, the dwarves delved with a hunger that bordered on madness, seeking the precious mithril. The supports look strained, old timber groaning under the weight of the rock, and the rock face is scarred with frantic pick-marks. Abandoned tools and carts lie rusting where they were dropped. The silence here is unnatural, heavy with the memory of the calamity that befell the miners when they dug too greedily and too deep, waking the terror in the dark.",
        exits: { 'north': 'third_level', 'south': 'first_level', 'southeast': 'west_emnet', 'northeast': 'osgiliath_ruins' },
        items: ['pickaxe'],
        enemies: ['goblin', 'orc_warrior']
    },

    mithril_mine: {
        name: "The Mithril Vein",
        description: "Your light reflects off a sight that would make a dwarf king weep with joy. Running through the rough grey stone is a broad vein of mithril—true-silver, the most precious metal in Middle-earth. It shines with its own inner light, like a river of captured starlight frozen in the rock. The beauty of it is mesmerizing, almost blinding in the surrounding gloom, promising wealth and power beyond measure.",
        exits: { 'east': 'durin_chamber', 'south': 'bridge_of_khazad_dum', 'up': 'old_forest_entrance' },
        items: ['mithril_ore', 'mithril_ore', 'mithril_nugget'],
        enemies: []
    },

    first_level: {
        name: "First Level - The Lowest Deep",
        description: "This is the First Level, the very roots of the mountain. The heat here is oppressive, a stifling blanket that makes it hard to breathe. The darkness feels tangible, pressing against your eyes. Far, far below in the black abyss, you can sense something ancient and terrible stirring, a malice that has slept for eons and is now waking. This is a place where no mortal beat should tread.",
        exits: { 'north': 'second_level', 'northeast': 'osgiliath_ruins' },
        items: [],
        enemies: ['orc_warrior', 'goblin']
    },

    bridge_of_khazad_dum: {
        name: "Bridge of Khazad-dûm",
        description: "The Bridge of Khazad-dûm is a narrow span of stone, carved from the living rock itself, that stretches across a bottomless chasm. The bridge is wide enough for only one person to cross at a time, and there are no railings—one misstep means a fall into the abyss below. The chasm itself is a void of darkness, so deep that light cannot reach its bottom. From the depths, fire and smoke rise in great plumes, their heat making the air shimmer and carrying the stench of sulfur and ancient evil. The flames cast an eerie, flickering light across the bridge and the surrounding stone, creating dancing shadows that seem to move with a life of their own. The sound of the fire is a constant roar, like the breath of some great beast, and you can feel the heat even from the bridge. This is a place of doom, where many have met their end, and where the greatest of all dangers in Moria waits. The bridge itself is ancient, its surface worn smooth by countless feet, and you can see where it has been repaired over the centuries. This is where Durin's Bane was encountered, where the Fellowship was tested, and where the fate of many has been decided.",
        exits: { 'north': 'mithril_mine', 'south': 'east_gate_moria' },
        items: [],
        enemies: ['durin_bane']
    },

    east_gate_approach: {
        name: "Approach to the East Gate",
        description: "The suffocating darkness of the mines begins to lift, replaced by a grey, filtered light drifting from ahead. The air grows cooler and fresher, carrying the scent of snow and pine. The rough-hewn tunnel widens, and you can see the outline of a massive archway against the brightness. The promise of the outside world beckons, a stark contrast to the oppressive weight of stone behind you.",
        exits: { 'north': 'goblin_warren', 'northeast': 'mines_level1', 'southwest': 'annuminas_tower' },
        items: ['health_potion', 'lembas_bread'],
        enemies: []
    },

    east_gate_moria: {
        name: "East Gate of Moria",
        description: "You step out from the shadows of the mountain into the blinding light of day. The Great Gates of Moria loom behind you, shattered and broken, a testament to the evil that drove the dwarves from their home. Before you lies the Dimrill Dale, a valley of wild beauty beneath the peaks of the Misty Mountains. To the east, the land falls away toward the Anduin, and the air is filled with the sound of wind rushing through the high passes.",
        exits: { 'north': 'bridge_of_khazad_dum', 'south': 'endless_stair_top', 'up': 'rivendell_gates' },
        items: [],
        enemies: []
    },

    dimrill_dale: {
        name: "Dimrill Dale",
        description: "The valley of Nanduhirion, known as the Dimrill Dale, cradles a dark, still lake—the Mirrormere. Even in the brightness of day, the water reflects only the stars, and standing stone markers of the old dwarven road line the path. It was here that Azog was slain, and the ground remembers the blood of the War of the Dwarves and Orcs. The peaks of Caradhras, Celebdil, and Fanuidhol watch silently from above.",
        exits: { 'east': 'erebor_armory', 'down': 'mayor_office' },
        items: ['mirrormere_water'],
        enemies: []
    },

    // Additional side chambers and passages
    mines_level1: {
        name: "Upper Mines",
        description: "You are in the upper mining levels, where the dwarves first began their delvings. Discarded tools, overturned carts, and piles of rubble litter the tunnels, signs of a hasty retreat. The walls are pockmarked with holes where gems were pried from the rock. The air is dry and dusty, and the silence is absolute.",
        exits: { 'southwest': 'east_gate_approach', 'east': 'mines_level2', 'north': 'barad_dur_chamber' },
        items: ['miners_lamp', 'iron_ore'],
        enemies: ['goblin', 'goblin']
    },

    mines_level2: {
        name: "Deep Mines",
        description: "The tunnels here go deeper, winding into the very heart of the Silvertine. Veins of quartz and traces of gold glitter in the walls, hinting at the wealth that was extracted here. The craftsmanship of the supports is masterful, yet they strain under the weight of the mountain. Shadowy side-passages lead off into the unknown.",
        exits: { 'west': 'mines_level1', 'east': 'anduin_midstream', 'northwest': 'barad_dur_chamber' },
        items: ['silver_ore', 'copper_ore'],
        enemies: ['cave_troll', 'goblin']
    },

    endless_stair_top: {
        name: "Top of the Endless Stair",
        description: "You stand at the dizzying height of the Endless Stair, looking down into a spiral of darkness that seems to go on forever. Carved from the central pillar of the mountain summit, the steps are narrow and worn smooth by the passage of Durin's Folk. The wind howls here at the top of the world, and a sense of vertigo pulls at you.",
        exits: { 'north': 'east_gate_moria', 'south': 'endless_stair_bottom', 'up': 'withywindle' },
        items: [],
        enemies: []
    },

    endless_stair_bottom: {
        name: "Bottom of the Endless Stair",
        description: "At the roots of the mountain lies the foundation of the Endless Stair. The air is stale and ancient. From here, the steps wind upwards thousands of feet to the peak of Zirakzigil. The darkness around you is absolute, and the weight of the mountain above is palpable.",
        exits: { 'north': 'endless_stair_top', 'up': 'silverlode_crossing' },
        items: ['ancient_key'],
        enemies: ['orc_warrior']
    },

    // Connection to Lothlórien (for future expansion)
    lothlorien_border: {
        name: "Border of Lothlórien",
        description: "The trees change as you cross the Nimbus, the border stream. The familiar oaks and beeches give way to taller, silver-barked trees with leaves of gold that do not fall in winter—the Mallorn trees. This is the Golden Wood, a realm of timeless magic where the power of the Elves is still strong. The air shimmers with a faint, golden haze, and a sense of watching eyes surrounds you—not hostile, but wary, ancient, and seeing deep into your heart. You have entered a land that belongs to an older age, preserved against the slow decay of the world.",
        exits: { 'northwest': 'silverlode_crossing', 'east': 'cerin_amroth' },
        items: [],
        enemies: []
    },

    // LOTHLÓ RIEN - The Golden Wood
    cerin_amroth: {
        name: "Cerin Amroth",
        description: "You stand upon the mound of Cerin Amroth, the heart of the ancient forest and the high place where Aragorn and Arwen trothplighted in days gone by. Two great circles of trees surround the hill, their golden leaves whispering in the breeze. The grass is studded with white niphredil and golden elanor, flowers that bloom forever in this preservéd land. It is a place of unmarred beauty and poignant memory, where time seems to hold its breath and the shadow of the enemy feels like a distant, impossible nightmare.",
        exits: { 'west': 'lothlorien_border', 'east': 'caras_galadhon', 'north': 'rivendell_library', 'northeast': 'rivendell_forge' },
        items: ['golden_leaf', 'silver_bark'],
        enemies: []
    },

    caras_galadhon: {
        name: "Caras Galadhon - City of the Trees",
        description: "The city of the Galadhrim rises into the canopy of the massive mallorn trees, a marvel of elven architecture grown rather than built. It is a city of light and song, with no walls of stone but defended by the power of the Lady of the Wood. Winding stairs and rope bridges of grey hithlain connect the wooden platforms, or 'flets', high above the ground. Lanterns of silver and gold and elf-glass shine like trapped stars among the branches, turning the night into a soft, shimmering twilight.",
        exits: { 'west': 'cerin_amroth', 'east': 'galadriel_court', 'northwest': 'rivendell_library', 'north': 'rivendell_forge', 'northeast': 'hollin_gate' },
        items: ['lembas_bread', 'miruvor'],
        enemies: []
    },

    galadriel_court: {
        name: "Court of Galadriel",
        description: "High in the crown of the greatest mallorn tree, you stand before the Lord and Lady of Lothlórien. The platform is wide and open to the stars, which seem brighter and closer here than anywhere else. Lady Galadriel, tall and white-robed, regards you with eyes that have seen the light of the Two Trees of Valinor mere ages after the world's shaping. Her presence is at once terrifying and beautiful, laying bare your mind and heart. Nearby, on a low pedestal, sits a shallow silver basin filled with water—the Mirror.",
        exits: { 'west': 'caras_galadhon', 'northeast': 'mirror_chamber' },
        items: ['phial_of_galadriel', 'elven_rope'],
        enemies: []
    },

    mirror_chamber: {
        name: "Chamber of the Mirror",
        description: "A secluded glade within the city, sheltered by ancient roots and filled with a soft, silvery light. Here stands the Mirror of Galadriel, a basin of silver on a branching pedestal. The water is dark and still, yet if you gaze into it, it may show things that were, things that are, and things that yet may be. The air is heavy with prophecy and the weight of choices yet to be made.",
        exits: { 'southwest': 'galadriel_court', 'northeast': 'silverlode_banks', 'northwest': 'weathertop_summit', 'north': 'chetwood', 'west': 'hollin_gate', 'down': 'durin_throne_hall' },
        items: [],
        enemies: [],
        puzzle: 'mirror_visions'
    },

    silverlode_banks: {
        name: "Banks of the Silverlode",
        description: "The fast-flowing waters of the Celebrant, the Silverlode, rush past you, cold and clear from the mountains. The banks are carpeted with soft grass and golden flowers. The river sings as it flows, a merry, bubbling song that eases the heart. To the east, the river joins the Great Anduin, marking the end of the Golden Wood.",
        exits: { 'southwest': 'mirror_chamber', 'northeast': 'anduin_approach' },
        items: ['elanor_flower', 'crystal_water'],
        enemies: []
    },

    anduin_approach: {
        name: "Anduin River - Lothlórien Quays",
        description: "Here at the confluence of the Silverlode and the Anduin, elven swan-boats bob gently at wooden quays. The Great River is wide and powerful here, a road of water leading south to Gondor and the Sea. The trees of Lothlórien lean out over the water, as if reluctant to let travelers depart from their protection into the wilder lands downstream.",
        exits: { 'southwest': 'silverlode_banks', 'north': 'fangorn_hidden_path', 'northeast': 'seventh_level' },
        items: ['elven_boat'],
        enemies: []
    },

    anduin_midstream: {
        name: "Anduin - Midstream",
        description: "The current of the Anduin is strong and deep, carrying you swiftly between high banks. To the West, the green hills of Rohan roll by; to the East, the rocky, barren lands bordering the Emyn Muil. The river is a grey highway, lonely and vast. Occasionally, strange birds fly overhead, their calls echoing over the water.",
        exits: { 'west': 'mines_level2', 'east': 'parth_galen', 'northeast': 'long_lake_path' },
        items: [],
        enemies: []
    },

    parth_galen: {
        name: "Parth Galen",
        description: "A wide green sward runs down to the water's edge at the foot of Amon Hen. This is Parth Galen, a place of decisions and breaking. The lawn is fair and smooth, but the shadow of the hill lies over it. Abandoned campfires and the trampled grass speak of a company that rested here before fracturing.",
        exits: { 'west': 'anduin_midstream', 'north': 'amon_hen' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    amon_hen: {
        name: "Amon Hen - Hill of Sight",
        description: "You have climbed the ancient stairs to the Seat of Seeing upon Amon Hen. The stone chair is cracked and weathered, but the magic of the high place remains. From here, your gaze can travel unfettered across the continent—to the smoking mountain in the East, the white city in the South, and the dark forests of the North. It is a place of clarity, but also of vulnerability.",
        exits: { 'south': 'parth_galen', 'north': 'rauros_falls_approach', 'west': 'long_lake_path', 'northwest': 'lake_town_docks' },
        items: ['seeing_helm'],
        enemies: []
    },

    // ROHAN - Land of the Horse Lords
    rauros_falls_approach: {
        name: "Approach to Rauros Falls",
        description: "The thunder of the Falls of Rauros effectively drowns out all other sound. The Great River, squeezed between the hills of Emyn Muil, plunges over a sheer precipice into the wet mists below. The spray rises like a permanent cloud, soaking everything for miles. It is a majestic and terrifying display of nature's power, marking the end of the navigable river.",
        exits: { 'south': 'amon_hen', 'north': 'dead_city', 'northwest': 'erebor_great_hall' },
        items: [],
        enemies: []
    },

    gap_of_rohan: {
        name: "Gap of Rohan",
        description: "A strategic pass between the southern end of the Misty Mountains and the northern tip of the White Mountains. The Adorn and Isen rivers flow through this gap, and the wind whips constantly across the open plains, singing a lonely song in the tall grass. To the north, the wizard's tower of Orthanc rises like a warning finger against the sky, while to the south, the mountains of Gondor loom purple and distant. This land is a gateway between the civilized lands of the south and the wilder north, often contested by the Dunlendings and the Rohirrim.",
        exits: { 'northwest': 'west_emnet', 'south': 'rohan_plains', 'northeast': 'lossarnach_valleys' },
        items: [],
        enemies: ['uruk_hai', 'warg_rider']
    },

    rohan_plains: {
        name: "The Plains of Rohan",
        description: "Endless grasslands stretch to the horizon, a sea of green that ripples under the caress of the wind. This is the Riddermark, the land of the Horse-lords. The ground is firm and good for riding, and the scent of wild hay and clover fills the air. In the distance, you see herds of wild horses running free, their manes streaming like banners. Far to the south, the white mountains rise like a wall, their peaks capped with eternal snow, guarding the realm.",
        exits: { 'north': 'gap_of_rohan', 'south': 'edoras_approach', 'northwest': 'entwash_delta' },
        items: ['wild_horse'],
        enemies: ['wild_horse_aggressive']
    },

    edoras_approach: {
        name: "Road to Edoras",
        description: "The road winds through the green mounds of the barrows of the Kings of Rohan. Simbelmynë flowers grow thick and white upon the graves, like snow that never melts. Ahead, the fortified hill of Edoras rises sharply from the plains, crowned by the Golden Hall of Meduseld, which shines like a star in the daylight. The sound of a horn blows on the wind, clear and challenging.",
        exits: { 'north': 'rohan_plains', 'east': 'edoras_gates', 'northeast': 'fangorn_eaves' },
        items: [],
        enemies: []
    },

    edoras_gates: {
        name: "Gates of Edoras",
        description: "The heavy wooden gates of Edoras are reinforced with iron bands and guarded by the Royal Guard of Rohan. These men are tall and stern, clad in mail that gleams like silver, with green shields bearing the white sun emblem. A paved road climbs steeply upward through the wooden houses of the town, leading to the summit where the Golden Hall waits.",
        exits: { 'west': 'edoras_approach', 'east': 'meduseld', 'northeast': 'fangorn_depths' },
        items: [],
        enemies: []
    },

    meduseld: {
        name: "Meduseld - The Golden Hall",
        description: "The Golden Hall of Meduseld stands as a beacon of light atop the hill of Edoras. Massive wooden pillars, carved with the intricate forms of galloping horses, support a soaring roof that gleams with gold even in the dimmest light. Inside, the air is thick with the scent of woodsmoke and roasted meat. Rich tapestries depicting the legends of the Mark hang from the walls, stirring gently in the draft. At the far end, upon a raised dais, stands the throne of Théoden King, commanding the long tables where the Riders of Rohan gather to feast and sing of deeds of valor.",
        exits: { 'west': 'edoras_gates', 'east': 'harrowdale', 'northwest': 'fangorn_eaves', 'northeast': 'wellinghall' },
        items: ['rohirric_sword', 'horn_of_rohan'],
        enemies: []
    },

    harrowdale: {
        name: "Harrowdale",
        description: "A deep, shadowed valley cleft into the mountains, protecting the approach to Dunharrow. The Snowbourn river rushes down from the heights, cold and clear. The road winds upwards, flanked by steep walls of rock that shut out the sun for much of the day. It is a place of refuge for the people of Rohan in times of war, but the air carries a chill that is not entirely from the snows above—the shadow of the Dwimorberg lies heavy here.",
        exits: { 'west': 'meduseld', 'east': 'dunharrow' },
        items: [],
        enemies: []
    },

    dunharrow: {
        name: "Dunharrow",
        description: "A natural fortress formed by a tiered cliff, Dunharrow is a place of refuge for the people of Rohan. The path upward zigzags across the cliff face, marked at every turn by the Púkel-men—ancient, weather-worn statues of squat, brooding figures left by a forgotten people. At the top lies the Firienfeld, a wide green upland, and beyond it, under the shadow of the Dwimorberg, stands the dark, forbidding entrance to the Paths of the Dead.",
        exits: { 'west': 'harrowdale', 'north': 'paths_of_dead', 'northwest': 'wellinghall' },
        items: ['ancient_stones'],
        enemies: []
    },

    paths_of_dead: {
        name: "The Paths of the Dead",
        description: "You stand before the Dark Door, the entrance to the forbidden mountain paths. A chill wind issues from the opening, carrying with it the scent of dust and ancient decay. Fear grips your heart, an instinctual warning that the living are not welcome here. The tunnel beyond is absolute blackness, where whispers seem to echo just on the edge of hearing—the voices of Oathbreakers who failed their king and were cursed to linger until their debt is paid.",
        exits: { 'south': 'dunharrow', 'north': 'helms_gate', 'northwest': 'entwash', 'west': 'wellinghall' },
        items: [],
        enemies: ['dead_men', 'dead_men', 'dead_king']
    },

    dead_city: {
        name: "City of the Dead",
        description: "Deep within the mountain lies a macabre city, its buildings carved from the cold stone of the cavern. But the inhabitants are long gone—at least, their living forms are. Skeletal remains clad in rusted mail line the walls and fill the doorways, standing guard over empty halls. The darkness here is alive with the presence of the Sleepless Dead, a spectral army waiting in the gloom. The weight of their broken oath hangs heavy in the air, a suffocating pressure that primal fear into the hearts of the living.",
        exits: { 'south': 'rauros_falls_approach', 'north': 'glittering_caves', 'southwest': 'lake_town_docks', 'west': 'erebor_great_hall' },
        items: ['oath_stone', 'dead_crown'],
        enemies: []
    },

    helms_gate: {
        name: "Helm's Gate",
        description: "The entrance to the Hornburg is guarded by the Deeping Wall, a massive fortification of stone that spans the mouth of the gorge. It is said that no enemy has ever breached the Deeping Wall while men defended it. The fortress looms above on a spur of rock, a masterpiece of defensive architecture. The Deeping Stream flows through a culvert in the wall, providing water to the defenders. The air is tense, as if the stones themselves remember the great battles fought here.",
        exits: { 'south': 'paths_of_dead', 'north': 'helms_deep_interior', 'northwest': 'mirkwood_edge', 'southwest': 'wellinghall', 'west': 'entwash' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai', 'uruk_hai']
    },

    helms_deep_interior: {
        name: "Helm's Deep",
        description: "You stand within the deep gorge of Helm's Deep, shielded by the sheer cliffs of the Thrihyrne. The Deeping Stream flows through the culvert in the great wall, providing fresh water to the fortress even in siege. The Hornburg towers above on its spur of rock, a masterpiece of ancient gondorian stonecraft that has never fallen while defended by men. The air is filled with the sound of the wind rushing through the gorge and the distant call of a sentry's horn.",
        exits: { 'south': 'helms_gate', 'north': 'east_emnet', 'northwest': 'mirkwood_path_2' },
        items: ['helms_hammer'],
        enemies: []
    },

    glittering_caves: {
        name: "Glittering Caves of Aglarond",
        description: "Words fail to capture the breathtaking beauty of Aglarond. Vast caverns open up before you, filled with forests of calcite columns that rise from the floor and hang from the ceiling. When your light strikes them, the walls explode into a kaleidoscope of glittering colors—gems, crystals, and veins of precious ore sparkle like a starry night. The sound of water dripping into clear pools creates a musical chiming that echoes through the halls. It is a wonder of the world, hidden deep beneath the roots of the mountain.",
        exits: { 'south': 'dead_city', 'west': 'isengard_gates' },
        items: ['cave_crystal', 'cave_pearl', 'star_gem'],
        enemies: []
    },

    // FANGORN FOREST - Domain of the Ents
    fangorn_border: {
        name: "Edge of Fangorn Forest",
        description: "The ancient forest of Fangorn looms before you, a wall of dark green that seems to swallow the light. The trees here are colossal, their trunks gnarled and moss-covered, their branches twisted like old limbs. A sense of immense age and watchful patience pervades the air. You hear the deep groaning of wood settling and the rustle of leaves, though there is no wind. To enter here is to step into a world that remembers the days before the sun and moon.",
        exits: { 'west': 'seventh_level', 'east': 'fangorn_eaves', 'northwest': 'elf_path_entrance' },
        items: [],
        enemies: []
    },

    fangorn_eaves: {
        name: "Eaves of Fangorn",
        description: "You stand just within the eaves of the forest, where the light of the outside world struggles to penetrate the dense canopy of beech/oak leaves. Shadows lengthen and deepen here, playing tricks on your eyes. Was that a tree moving in the distance, or just a trick of the light? The air is cool and smells of loam and ancient sap. The silence is profound, broken only by the occasional snap of a twig that sounds like a thunderclap.",
        exits: { 'west': 'fangorn_border', 'east': 'fangorn_depths', 'southeast': 'meduseld', 'southwest': 'edoras_approach' },
        items: ['entdraught'],
        enemies: []
    },

    fangorn_depths: {
        name: "Deep in Fangorn",
        description: "You are deep within the heart of Fangorn, where the trees are so old they have forgotten the names of the first elves. This is a place where time moves at the pace of growing roots. The trees crowd close, their bark like rough skin, their roots raised like knees, and their branches gnarled like old hands. A low, humming vibration fills the air—the song of the forest itself, slow and deep and resonant. You feel like an intruder in a convocation of giants, watched by thousands of eyes.",
        exits: { 'west': 'fangorn_eaves', 'east': 'wellinghall', 'southwest': 'edoras_gates', 'northeast': 'entwash' },
        items: ['ancient_oak_heart'],
        enemies: []
    },

    wellinghall: {
        name: "Wellinghall - Hall of the Ents",
        description: "You have found Wellinghall, the home of Treebeard. It is a great natural bay in the mountainside, floored with soft grass and roofed by the interlacing branches of living trees. A clear stream flows from the rock, splashing into a stone basin before winding away through the roots. The air is fresh and filled with a sense of slow, deliberate peace. It is here that the Ents gather to drink the Ent-draught and speak in their long, rumbling language.",
        exits: { 'west': 'fangorn_depths', 'north': 'entwash', 'southeast': 'dunharrow', 'northeast': 'helms_gate', 'southwest': 'meduseld', 'east': 'paths_of_dead' },
        items: ['ent_staff'],
        enemies: []
    },

    entwash: {
        name: "The Entwash",
        description: "The Entwash flows swiftly from the roots of the Misty Mountains, its water clear, cold, and invigorated with the magic of Fangorn. Great willow trees line the banks, their branches trailing in the current like hair in the water. The land here is marshy and fens stretch out towards the Anduin, often shrouded in mist. It is a place of transition between the ancient, brooding forest and the open, wind-swept plains of Rohan—a borderland where the wildness of the wood leaks into the world of men.",
        exits: { 'south': 'wellinghall', 'north': 'mirkwood_edge', 'southeast': 'paths_of_dead', 'east': 'helms_gate', 'southwest': 'fangorn_depths' },
        items: [],
        enemies: []
    },

    east_emnet: {
        name: "East Emnet",
        description: "The expansive grasslands of the East Emnet roll away to the horizon, a sea of green under a wide, pale sky. The wind ripples through the tall grass, creating waves that race across the landscape like an invisible tide. Herds of wild horses can be seen grazing in the distance, dark specks against the green. The land is rugged and wild, patrolled by the Riders of Rohan who keep watch against the dark things that creep from the East. It is a land of freedom, open air, and the thunder of hooves.",
        exits: { 'south': 'helms_deep_interior', 'west': 'minas_tirith_stables' },
        items: [],
        enemies: []
    },

    isengard_gates: {
        name: "Gates of Isengard",
        description: "What were once the impregnable Gates of Isengard now lie in twisted ruins. The massive stone archway has been shattered, and the great iron doors lie crumpled on the ground, warped by the strength of the Ents. The Ring of Isengard, the great circular wall, is breached and flooded. Inside, rubble and filth litter the ground, but rising above the devastation is the black spike of Orthanc, untouched and terrifying, a monument to Saruman's hubris.",
        exits: { 'east': 'glittering_caves', 'west': 'orthanc_base', 'south': 'erebor_great_hall', 'southwest': 'green_dragon' },
        items: [],
        enemies: ['uruk_hai', 'uruk_hai']
    },

    orthanc_base: {
        name: "Base of Orthanc",
        description: "You stand at the foot of Orthanc, and your neck cranes back to see its summit. The tower is a seamless pinnacle of black adamantine stone, rising five hundred feet into the air. It splits into four sharp horns at the top, like the prongs of a cruel crown. The stone is cold to the touch and seemingly indestructible, ancient and alien. There is no door or window at ground level, only a single stair leading to a high door. The power of Saruman still clings to this place like a shroud, and the memory of the Ents' wrath is written in the debris field around you.",
        exits: { 'east': 'isengard_gates', 'west': 'orthanc_chamber', 'southwest': 'woody_end' },
        items: ['broken_staff'],
        enemies: []
    },

    orthanc_chamber: {
        name: "Orthanc - Saruman's Chamber",
        description: "The high brooding chamber of Saruman offers a commanding view of the devastation below. Tall, narrow windows look out to the four points of the compass. The room is filled with the remnants of his dark studies—shelves of dusty tomes, charts of the heavens, and strange mechanical devices. In the center stands a plinth of black stone where the Palantír once rested. The air is stale and carries the metallic tang of magic used for dark purposes.",
        exits: { 'east': 'orthanc_base', 'west': 'rath_dinen', 'south': 'woody_end', 'southwest': 'brandywine_bridge' },
        items: ['saruman_scrolls', 'palantir'],
        enemies: []
    },

    // GONDOR - The Realm of the Stewards
    osgiliath_ruins: {
        name: "Ruins of Osgiliath",
        description: "The once-great capital of Gondor lies broken before you, its white stone shattered and blackened by war. The great bridge has been thrown down, leaving only jagged spans of masonry reaching out over the wide, dark waters of the Anduin. Weeds force their way through the cracked paving stones of the royal road. The silence is heavy and watchful, broken only by the distant screech of a Nazgûl or the harsh guttural speech of checking orc patrols. Shadows stretch long here, and every ruined archway feels like a potential ambush.",
        exits: { 'southwest': 'mt_level_1', 'east': 'pelennor_fields', 'southeast': 'snowbourn_banks', 'northwest': 'shelob_lair', 'west': 'mordor_plains' },
        items: ['ancient_gondorian_coin'],
        enemies: ['orc_warrior', 'orc_scout']
    },

    pelennor_fields: {
        name: "Pelennor Fields",
        description: "The fertile plains of the Pelennor stretch out between the river and the white walls of Minas Tirith. Once a quilt of rich farmland and orchards, the fields are now scarred by the machinery of war. The Rammas Echor, the great encircling wall, lies in breached ruin to the north. In the distance, the White City rises in majestic tiers against the dark flank of Mount Mindolluin, a beacon of hope amidst the gathering storm.",
        exits: { 'west': 'osgiliath_ruins', 'east': 'minas_tirith_gates', 'southeast': 'aldburg', 'north': 'barad_dur_approach' },
        items: ['gondorian_banner'],
        enemies: ['orc_warrior']
    },

    minas_tirith_gates: {
        name: "Gates of Minas Tirith",
        description: "You stand before the Great Gate of the City of Kings. Constructed of iron and mithril, it is a formidable barrier against the darkness of the East. Guards in the livery of the White Tree—black surcoats embroidered with silver—stand vigilant with tall spears. Beyond the gate, the city rises steeply in seven concentric circles, each more fortified than the last, culminating in the white needle of the Tower of Ecthelion piercing the sky.",
        exits: { 'west': 'pelennor_fields', 'east': 'white_tower', 'south': 'aldburg', 'southwest': 'snowbourn_banks', 'north': 'barad_dur_base', 'up': 'mt_level_1' },
        items: [],
        enemies: []
    },

    mt_level_1: {
        name: "First Level - Minas Tirith",
        description: "The lowest circle of the White City bustles with the daily life of Gondor's common folk. Sturdy stone houses and busy shops line the wide, paved streets, their facades bleached white by the sun. In the center of a small square stands a fountain, its water clear and cool, though the stone is worn by centuries of use. The massive outer wall, the Othram, looms protective and reassuring, while the distinct incline of the city leads your eye upward toward the Citadel. The air here smells of baking bread, roasting meat, and the stone dust of constant repairs.",
        exits: { north: 'minas_tirith_stables', up: 'mt_level_2', down: 'minas_tirith_gates' },
        items: ['white_tree_sapling'],
        enemies: []
    },

    mt_level_2: {
        name: "Second Level - Minas Tirith",
        description: "Rising above the noise of the lower city, the Second Level is a place of quiet dignity. Graceful houses of pale stone are built directly into the mountainside, their windows commanding sweeping views of the Pelennor Fields below. The streets are impeccably clean, lined with statues of minor heroes and well-tended planters where white flowers bloom. Soldiers patrol in pairs, their silver armor gleaming, ensuring the peace of the realm. Looking up, the towering prow of the Citadel cuts the sky like the hull of a great stone ship, imposing and eternal.",
        exits: { north: 'deep_mines_hub', south: 'mt_level_3', east: 'mt_level_4', west: 'iron_mines_2', northeast: 'mithril_mine', southeast: 'mt_level_6', southwest: 'goblin_warren', up: 'mt_level_3', down: 'mt_level_1' },
        items: ['gondorian_sword'],
        enemies: []
    },

    mt_level_3: {
        name: "Third Level - Minas Tirith",
        description: "The Third Level is a sanctuary of peace and healing, dominated by the Houses of Healing. Gardens of herbs and flowers fill the air with fragrant scents—athelas, sage, and lavender—masking the harsh smells of war that sometimes drift from below. White buildings with arched colonnades offer shade and rest for the weary. Healers in grey robes move silently between the halls, tending to the sick and wounded. It is a place of respite, where the clamor of battle seems distant and the preservation of life is the only law respected by all.",
        exits: { north: 'mt_level_2', south: 'minas_tirith_houses_of_healing', east: 'mt_level_6', west: 'goblin_warren', northeast: 'mt_level_4', northwest: 'iron_mines_2', southeast: 'citadel_guards_hall', southwest: 'hall_of_kings', up: 'mt_level_4', down: 'mt_level_2' },
        items: ['athelas', 'healing_herbs'],
        enemies: []
    },

    mt_level_4: {
        name: "Fourth Level - Minas Tirith",
        description: "This level echoes with the martial spirit of Gondor. Large barracks and extensive armories dominate the streetscape, built of thick, defensible stone. The ringing of steel on steel is constant as soldiers drill in the courtyards, preparing for the defense of the realm. Racks of spears, stacks of shields, and rows of polished helms are visible through open doors. The men here are grim and focused, the elite defenders of the White City, ever watchful towards the East, knowing that they stand between the West and the Shadow.",
        exits: { north: 'mithril_mine', south: 'mt_level_6', west: 'mt_level_2', northeast: 'mt_level_5', northwest: 'deep_mines_hub', southwest: 'mt_level_3', up: 'mt_level_5', down: 'mt_level_3' },
        items: ['gondorian_armor'],
        enemies: []
    },

    mt_level_5: {
        name: "Fifth Level - Minas Tirith",
        description: "The Fifth Level is known for its grand libraries and the Great Hall of Records. Magnificent tapestries depicting the long history of Gondor—from the fall of Númenor to the wars against Angmar—line the walls of the public spaces. Scholars and scribes hurry between buildings, clutching scrolls and books, their faces pale with study. It is a place of memory, where the glory of the past is preserved against the fading of the world, and where the lineage of kings is traced back to the stars.",
        exits: { north: 'nameless_tunnels', west: 'mithril_mine', northwest: 'the_dark_lake', southeast: 'lossarnach_valleys', southwest: 'mt_level_4', up: 'mt_level_6', down: 'mt_level_4' },
        items: ['ancient_tapestry'],
        enemies: []
    },

    mt_level_6: {
        name: "Sixth Level - Minas Tirith",
        description: "The uppermost circle of the city, save for the Citadel itself. This is the Circle of the Citadel, a place of high nobility and ancient reinforcement. The walls here are immaculately white, and the pavement is of white stone, reflecting the sun. From the parapets, one can see the vast shadow of Mordor on the eastern horizon, a constant reminder of the vigilance required of those who dwell here. The Air is cleaner here, thinner, and the noise of the city below is but a murmur.",
        exits: { north: 'mt_level_4', south: 'citadel_guards_hall', west: 'mt_level_3', northwest: 'mt_level_2', southeast: 'mithril_depths_2', southwest: 'minas_tirith_houses_of_healing', up: 'white_tower', down: 'mt_level_5' },
        items: ['gondorian_crown'],
        enemies: []
    },

    white_tower: {
        name: "White Tower of Ecthelion",
        description: "The White Tower stands as the crowning jewel of Minas Tirith, visible for leagues in every direction. The polished white stone gleams in the sun, a defiant symbol of light. Inside, the Hall of Kings is vast and silent, rows of black marble pillars leading to the empty throne. The Steward's Chair sits at the foot of the dais, waiting. From the high windows, you can see the shadow of Mordor gathering in the east, a dark stain on the horizon.",
        exits: { 'west': 'minas_tirith_gates', 'north': 'house_of_stewards', 'southwest': 'aldburg', 'southeast': 'mirkwood_depths', 'south': 'thranduil_halls_interior', 'northeast': 'mount_doom_approach', 'down': 'mt_level_6' },
        items: ['palantir_of_minas_tirith', 'steward_crown'],
        enemies: []
    },

    rath_dinen: {
        name: "Rath Dínen - Street of the Dead",
        description: "A silent road winds between crumbling stone mausoleums and overgrown gardens. This is Rath Dínen, the Silent Street, where the nobles of Gondor bury their dead. The air is cold and still, disturbed only by the rustle of dead leaves and the caw of a crow. Shadows seem to detach themselves from the tombs, watching your passage with cold resentment. The doors of the vaults are sealed with heavy stone, but one wonders what lies restless within.",
        exits: { 'east': 'orthanc_chamber', 'south': 'tunnel_exit', 'southeast': 'woody_end', 'southwest': 'stock_road' },
        items: [],
        enemies: []
    },

    house_of_stewards: {
        name: "House of the Stewards",
        description: "A domed grand mausoleum of white marble, housing the remains of the Stewards who have ruled Gondor in the King's absence. Inside, the air is musty and sweet with the smell of preservatives. Stone effigies of the Stewards lie in repose, their hands folded over their swords. It is a sombre place, weighted with the history of the realm and the burden of rule, where duty extends even beyond death.",
        exits: { 'south': 'white_tower', 'north': 'minas_morgul_gates', 'northwest': 'whitwell' },
        items: ['steward_ring', 'ancient_scroll'],
        enemies: []
    },

    // MORDOR - The Land of Shadow
    morgul_vale: {
        name: "Morgul Vale",
        description: "A dying valley that leads into the mountains of Shadow. The air here is foul and cold, smelling of decay and a sweetness that makes you gag. White flowers glow with a pale, necrotic light in the darkness, beautiful but perilous. The stream that runs through the valley is silent and vaporous. Looming ahead is the fortress of the Ringwraiths, Minas Morgul, its walls glowing with a corpse-light that promises only madness and death.",
        exits: { 'east': 'durthang_fortress', 'south': 'morgul_pass', 'northeast': 'scary', 'southeast': 'needlehole' },
        items: [],
        enemies: ['orc_warrior', 'orc_scout', 'ringwraith']
    },

    morgul_pass: {
        name: "Morgul Pass",
        description: "A narrow, winding stair cut into the sheer cliff face. This is the Straight Stair and the Winding Stair, leading up to the Tower of Cirith Ungol. The air is thin and bitter. To your left, the sheer drop into the Morgul Vale is a dizzying abyss of shadow. Above, the stone gargoyles of the tower watch with stony malice. The silence is absolute, broken only by the sound of your own labored breathing and the pounding of your heart.",
        exits: { 'north': 'morgul_vale', 'south': 'cirith_ungol', 'southeast': 'longbottom', 'northeast': 'durthang_fortress' },
        items: ['morgul_blade'],
        enemies: ['orc_warrior', 'spider_guard']
    },

    cirith_ungol: {
        name: "Cirith Ungol - Tower of the Spider",
        description: "A fortress built high in the Ephel Dúath to block the pass, though it seems its true purpose is to keep things in Mordor from escaping. The tower acts as a watch-post, its varying tiers jagged and sharp like broken teeth against the dark sky. The masonry is black and slick. From deep beneath the tower, a foul stench rises—the lair of something ancient and hungry that was here before the first stone was laid.",
        exits: { 'north': 'morgul_pass', 'south': 'shelob_lair', 'east': 'longbottom' },
        items: ['tower_key'],
        enemies: ['orc_warrior', 'orc_warrior']
    },

    shelob_lair: {
        name: "Shelob's Lair",
        description: "You are in a maze of tunnels where the darkness is thick, sticky, and impenetrable to all but the strongest light. The air reeks of old death and decay. Thick cobwebs, strong as steel cables, block the way and carpet the floor. You sense a malevolent intelligence watching you from the gloom, a hunger that spans ages. The sound of soft, wet clicking echoes from the darkness—Shelob the Great is hunting.",
        exits: { 'north': 'cirith_ungol', 'south': 'mordor_plains', 'southeast': 'osgiliath_ruins' },
        items: [],
        enemies: ['shelob']
    },

    tunnel_exit: {
        name: "Tunnel Exit",
        description: "You emerge from the tunnel into the desolation of Mordor. The land is barren and black. Mount Doom looms in the distance, belching smoke and fire.",
        exits: { 'north': 'rath_dinen', 'south': 'barad_dur_chamber', 'northeast': 'woody_end', 'southwest': 'prancing_pony' },
        items: ['sting_glow'],
        enemies: []
    },

    mordor_plains: {
        name: "Plains of Mordor - Gorgoroth",
        description: "The Plateau of Gorgoroth stretches out before you, a vast, ash-covered wasteland under the shadow of Orodruin. The air is choked with sulfurous fumes and the dust of millennia of volcanic eruptions. Jagged rocks poke through the grey dust like the broken bones of the earth. There is no water here, no green thing, only slag and rock and the endless tramping of Orc armies. In the distance, the lidless Red Eye of Sauron watches ceaselessly from the pinnacle of Barad-dûr.",
        exits: { 'north': 'shelob_lair', 'northeast': 'black_gate', 'southeast': 'dunharrow_firtree_grove', 'south': 'mt_level_2', 'east': 'osgiliath_ruins' },
        items: ['broken_orc_blade'],
        enemies: ['orc_warrior', 'orc_warrior', 'warg_rider']
    },

    black_gate: {
        name: "The Black Gate of Mordor",
        description: "The Morannon, the Black Gate, bars the northern entrance to the Land of Shadow. Two vast towers of black stone, the Towers of the Teeth, flank the giant iron gates. The cliff walls rise sheer on either side, insurmountable. The ground before the gate is slag-hewn and desolate, a killing field waiting for the enemies of the Dark Lord. The sheer scale of the fortification is crushing to the spirit.",
        exits: { 'southwest': 'mordor_plains', 'east': 'barad_dur_approach' },
        items: [],
        enemies: ['orc_warrior', 'orc_warrior', 'orc_warrior', 'troll_guard']
    },

    barad_dur_approach: {
        name: "Approach to Barad-dûr",
        description: "The road to the Dark Tower is paved with the suffering of countless slaves. Looming ahead, Barad-dûr rises impossibly high, a mountain of iron and adamant wreathed in shadow and flame. It is the greatest fortress ever built since the fall of Angband, a monument to tyranny and order imposed by force. The Eye watches from the highest pinnacle, its gaze piercing clouds and flesh alike. The very air here burns with malice.",
        exits: { 'west': 'black_gate', 'east': 'barad_dur_base', 'north': 'sackville_manor', 'south': 'pelennor_fields' },
        items: [],
        enemies: ['ringwraith', 'ringwraith', 'orc_warrior']
    },

    barad_dur_base: {
        name: "Base of Barad-dûr",
        description: "You stand at the foundation of the Dark Tower. The sheer size of it is incomprehensible; the walls stretch up until they vanish into the eternal cloud that shrouds the peak. The ground is cracked and black, hot to the touch. Great pits of fire burn nearby, illuminating the cruel architecture. This is the heart of Sauron's power, the center of his web of domination. To be here is to stand in the mouth of madness.",
        exits: { 'west': 'barad_dur_approach', 'east': 'mount_doom_approach', 'south': 'minas_tirith_gates' },
        items: ['dark_ring_fragment'],
        enemies: ['ringwraith', 'orc_warrior']
    },

    barad_dur_chamber: {
        name: "Chamber of the Dark Lord",
        description: "The highest chamber of Barad-dûr is a place of terror and power. From here, the Eye of Sauron sees all. The room is vast and sparse, dominated by the windowless balconies that face the four corners of the world. In the abyss below, the fires of industry burn, forging weapons for the conquest of Middle-earth. The will of the Dark Lord is a tangible pressure here, crushing all hope.",
        exits: { 'north': 'tunnel_exit', 'northwest': 'marish', 'south': 'mines_level1', 'southeast': 'mines_level2' },
        items: ['sauron_armor_fragment'],
        enemies: ['sauron_manifestation']
    },

    mount_doom_approach: {
        name: "Approach to Mount Doom",
        description: "The path to Orodruin, the Mountain of Fire, is a treacherous climb over sharp slag and cooling lava flows. The mountain rises before you, a cone of ash and fire, belching smoke that darkens the sky. The heat is intense, baking the moisture from your skin. The air is thick with ash and the stench of sulfur, making every breath a struggle. This is the forge of the Enemy, where the land itself seems to hate you.",
        exits: { 'west': 'barad_dur_base', 'north': 'mount_doom_summit', 'southwest': 'white_tower' },
        items: [],
        enemies: ['lava_elemental']
    },

    mount_doom_summit: {
        name: "Summit of Mount Doom - Sammath Naur",
        description: "You stand before the Sammath Naur, the Chambers of Fire. A great door in the mountainside leads into the heart of the volcano. Inside, a walkway spans a chasm filled with roaring fire—the Crack of Doom. This is the only fire in Middle-earth hot enough to destroy the One Ring, and the place where it was forged. The heat is unbearable, a physical weight that threatens to crush you. The power of the Ring is at its zenith here, screaming to be claimed.",
        exits: { 'south': 'mount_doom_approach', 'up': 'hidden_valley_white_mountains', 'northwest': 'minas_morgul_interior' },
        items: [],
        enemies: ['gollum_final'],
        puzzle: 'destroy_ring'
    }
};
