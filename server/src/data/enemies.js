// Enemy definitions for Middle Earth
export const enemies = {
    // Shire & Early Game
    wild_wolf: {
        name: "Wild Wolf",
        description: "A snarling wolf with matted fur and hungry eyes.",
        hp: 20,
        attack: 6,
        defense: 2,
        exp: 15,
        loot: ['wolf_pelt']
    },

    marsh_phantom: {
        name: "Marsh Phantom",
        description: "A ghostly figure hovering over the marsh, its face twisted in eternal anguish.",
        hp: 25,
        attack: 7,
        defense: 1,
        exp: 20,
        loot: ['mysterious_stone']
    },

    giant_midge_swarm: {
        name: "Giant Midge Swarm",
        description: "An enormous cloud of biting midges. They're everywhere!",
        hp: 15,
        attack: 5,
        defense: 0,
        exp: 10,
        loot: []
    },

    // Old Forest
    huorn: {
        name: "Huorn",
        description: "An animate tree, ancient and hostile. Its branches reach out menacingly.",
        hp: 40,
        attack: 10,
        defense: 8,
        exp: 35,
        loot: ['ancient_acorn', 'oak_bark']
    },

    old_man_willow: {
        name: "Old Man Willow",
        description: "The malevolent willow tree of the Withywindle. Its drowsy power is overwhelming.",
        hp: 60,
        attack: 12,
        defense: 10,
        exp: 50,
        loot: ['willow_wand', 'health_potion']
    },

    // Bree & Wilderness
    brigand: {
        name: "Brigand",
        description: "A rough-looking bandit armed with a club and ill intent.",
        hp: 30,
        attack: 8,
        defense: 3,
        exp: 25,
        loot: ['silver_coin', 'rusty_dagger']
    },

    orc_scout: {
        name: "Orc Scout",
        description: "A foul orc with blackened armor and a cruel curved blade. It hisses at you in the black speech.",
        hp: 35,
        attack: 10,
        defense: 5,
        exp: 30,
        loot: ['orc_blade', 'silver_coin']
    },

    // Barrow Downs & Ancient Sites
    barrow_wight: {
        name: "Barrow-wight",
        description: "An undead horror from the barrows, its eyes glowing with cold malice. A chill emanates from its ancient bones.",
        hp: 45,
        attack: 11,
        defense: 4,
        exp: 40,
        loot: ['barrow_blade', 'barrow_treasure']
    },

    // Weathertop
    ringwraith: {
        name: "Ringwraith",
        description: "A Nazgûl! One of the Nine, servant of the Dark Lord. Black robes billow around an empty void. Its very presence fills you with terror.",
        hp: 80,
        attack: 15,
        defense: 8,
        exp: 100,
        loot: ['morgul_blade', 'black_cloak', 'health_potion']
    },

    // Orcs & Goblins (Various)
    goblin: {
        name: "Goblin",
        description: "A small, wicked creature with sharp teeth and a cruel cackle.",
        hp: 20,
        attack: 6,
        defense: 2,
        exp: 15,
        loot: ['goblin_trinket']
    },

    orc_warrior: {
        name: "Orc Warrior",
        description: "A large orc in heavy armor, wielding a wicked scimitar.",
        hp: 50,
        attack: 12,
        defense: 7,
        exp: 45,
        loot: ['orc_blade', 'leather_armor', 'silver_coin']
    },

    uruk_hai: {
        name: "Uruk-hai",
        description: "A massive fighting Uruk, bred for war. It stands taller than a man and fears no sunlight.",
        hp: 70,
        attack: 14,
        defense: 10,
        exp: 75,
        loot: ['uruk_sword', 'heavy_armor', 'gold_treasure']
    },

    // Trolls
    cave_troll: {
        name: "Cave Troll",
        description: "An enormous troll with thick, scaly hide. It roars and swings a massive club.",
        hp: 100,
        attack: 18,
        defense: 12,
        exp: 120,
        loot: ['troll_hide', 'gold_treasure', 'health_potion']
    },

    // Spiders
    giant_spider: {
        name: "Giant Spider",
        description: "A monstrous spider with eight gleaming eyes and dripping fangs.",
        hp: 40,
        attack: 11,
        defense: 5,
        exp: 35,
        loot: ['spider_silk', 'silver_coin']
    },

    // Wargs
    warg: {
        name: "Warg",
        description: "A huge, evil wolf ridden by orcs. It snarls and shows fangs the size of daggers.",
        hp: 45,
        attack: 12,
        defense: 6,
        exp: 40,
        loot: ['warg_pelt', 'silver_coin']
    },

    // Dragons (Boss)
    dragon_hatchling: {
        name: "Dragon Hatchling",
        description: "Even young, this dragon is fearsome. Smoke curls from its nostrils and its scales gleam red-gold.",
        hp: 150,
        attack: 20,
        defense: 15,
        exp: 200,
        loot: ['dragon_scale', 'gold_treasure', 'ancient_tome']
    },

    // Balrog (Ultimate Boss - for later)
    durin_bane: {
        name: "Durin's Bane",
        description: "A Balrog of Morgoth! A demon of shadow and flame, wreathed in fire and darkness. Its whip cracks like thunder.",
        hp: 300,
        attack: 30,
        defense: 20,
        exp: 500,
        loot: ['flame_whip', 'balrog_heart', 'mithril_treasure']
    },

    // MORIA ENEMIES
    goblin_chieftain: {
        name: "Goblin Chieftain",
        description: "A large goblin with a crude crown and a wicked curved blade. It commands the lesser goblins with snarled orders.",
        hp: 60,
        attack: 13,
        defense: 8,
        exp: 65,
        loot: ['goblin_treasure', 'goblin_crown', 'health_potion']
    },

    watcher_in_water: {
        name: "The Watcher in the Water",
        description: "A nameless horror from beneath the lake. Tentacles rise from the dark water, each lined with suckers and reaching hungrily toward you.",
        hp: 120,
        attack: 16,
        defense: 10,
        exp: 150,
        loot: ['ancient_pearl', 'water_stone']
    },

    // PATHS OF THE DEAD
    dead_men: {
        name: "Dead Man of Dunharrow",
        description: "A spectral warrior, bound by an ancient oath. Its eyes burn with green fire, and its blade is cold as death.",
        hp: 60,
        attack: 12,
        defense: 5,
        exp: 50,
        loot: ['ancient_sword', 'oath_stone']
    },

    dead_king: {
        name: "King of the Dead",
        description: "The spectral king of the Oathbreakers. Crowned in shadow, he wields a blade that cuts the living. His oath binds him to this place until it is fulfilled.",
        hp: 100,
        attack: 18,
        defense: 8,
        exp: 150,
        loot: ['dead_crown', 'kings_blade']
    },

    // MORDOR ENEMIES
    warg_rider: {
        name: "Warg Rider",
        description: "An orc mounted on a massive warg. They move as one, a deadly combination of orcish cunning and warg ferocity.",
        hp: 65,
        attack: 15,
        defense: 8,
        exp: 70,
        loot: ['warg_pelt', 'orc_spear', 'silver_coin']
    },

    troll_guard: {
        name: "Troll Guard",
        description: "A massive troll in crude armor, standing guard at the Black Gate. It wields a hammer the size of a man.",
        hp: 150,
        attack: 20,
        defense: 15,
        exp: 180,
        loot: ['troll_hide', 'troll_hammer', 'gold_treasure']
    },

    spider_guard: {
        name: "Giant Spider Guard",
        description: "A massive spider, larger than a horse. Its many eyes gleam with malice, and venom drips from its fangs.",
        hp: 80,
        attack: 16,
        defense: 9,
        exp: 90,
        loot: ['spider_silk', 'spider_venom', 'health_potion']
    },

    shelob: {
        name: "Shelob",
        description: "The Great Spider, last child of Ungoliant! A horror of the First Age, she has grown fat on the flesh of orcs and men. Her webs are everywhere, and her stinger drips with poison.",
        hp: 200,
        attack: 22,
        defense: 12,
        exp: 300,
        loot: ['shelob_fang', 'ancient_web', 'spider_venom', 'health_potion']
    },

    lava_elemental: {
        name: "Lava Elemental",
        description: "A creature of living fire and molten rock. It moves like liquid flame, leaving scorched ground in its wake.",
        hp: 90,
        attack: 18,
        defense: 7,
        exp: 100,
        loot: ['fire_crystal', 'lava_stone']
    },

    gollum_final: {
        name: "Gollum",
        description: "The wretched creature, consumed by the Ring. His eyes burn with madness and desire. 'My precious...' he hisses.",
        hp: 40,
        attack: 8,
        defense: 3,
        exp: 60,
        loot: ['fish_bone', 'precious_ring']
    },

    sauron_manifestation: {
        name: "Sauron's Manifestation",
        description: "A fragment of the Dark Lord's power made manifest. Dark flames wreathe a form of shadow and malice. The Eye watches through it.",
        hp: 250,
        attack: 28,
        defense: 18,
        exp: 500,
        loot: ['dark_ring_fragment', 'sauron_armor_fragment', 'shadow_crystal']
    }
};

// Additional loot items that can drop
export const additionalLoot = {
    wolf_pelt: {
        name: "Wolf Pelt",
        type: "material",
        description: "A thick wolf pelt, useful for crafting.",
        value: 15
    },

    oak_bark: {
        name: "Oak Bark",
        type: "material",
        description: "Ancient oak bark with magical properties.",
        value: 20
    },

    willow_wand: {
        name: "Willow Wand",
        type: "quest",
        description: "A wand cut from Old Man Willow. It hums with drowsy power.",
        value: 100
    },

    orc_blade: {
        name: "Orc Blade",
        type: "weapon",
        description: "A crude but effective orcish weapon.",
        bonus: 4,
        value: 25
    },

    barrow_blade: {
        name: "Barrow Blade",
        type: "weapon",
        description: "An ancient blade from the barrows, inscribed with runes of power.",
        bonus: 7,
        value: 150
    },

    morgul_blade: {
        name: "Morgul Blade",
        type: "weapon",
        description: "A cursed blade of the Nazgûl. It fills you with dread, but is devastatingly powerful.",
        bonus: 13,
        value: 600
    },

    black_cloak: {
        name: "Black Cloak",
        type: "armor",
        description: "A tattered black cloak from a Ringwraith. It seems to drink in the light.",
        bonus: 8,
        value: 300
    },

    goblin_trinket: {
        name: "Goblin Trinket",
        type: "treasure",
        description: "A worthless-looking bauble... unless you know a collector.",
        value: 5
    },

    uruk_sword: {
        name: "Uruk Sword",
        type: "weapon",
        description: "A well-forged weapon from the furnaces of Isengard.",
        bonus: 9,
        value: 200
    },

    heavy_armor: {
        name: "Heavy Armor",
        type: "armor",
        description: "Thick iron plates, heavy but protective.",
        bonus: 10,
        value: 250
    },

    troll_hide: {
        name: "Troll Hide",
        type: "armor",
        description: "Thick troll skin, nearly impervious to weapons.",
        bonus: 12,
        value: 400
    },

    spider_silk: {
        name: "Spider Silk",
        type: "material",
        description: "Strong as steel, light as air. Perfect for crafting.",
        value: 50
    },

    warg_pelt: {
        name: "Warg Pelt",
        type: "material",
        description: "A fearsome trophy and useful material.",
        value: 60
    },

    dragon_scale: {
        name: "Dragon Scale",
        type: "armor",
        description: "A single scale from a dragon. Nearly indestructible.",
        bonus: 20,
        value: 2000
    },

    flame_whip: {
        name: "Flame Whip",
        type: "weapon",
        description: "The weapon of a Balrog. It burns with eternal fire.",
        bonus: 25,
        value: 5000
    },

    balrog_heart: {
        name: "Balrog Heart",
        type: "quest",
        description: "The still-burning heart of a Balrog. An artifact of immense power.",
        value: 10000
    },

    mithril_treasure: {
        name: "Mithril Treasure",
        type: "treasure",
        description: "A small fortune in mithril and gems.",
        value: 3000
    },

    goblin_crown: {
        name: "Goblin Crown",
        type: "treasure",
        description: "A crude iron crown worn by the goblin chieftain. Worth something to a collector.",
        value: 150
    },

    ancient_pearl: {
        name: "Ancient Pearl",
        type: "treasure",
        description: "A massive black pearl from the depths. It gleams with an eerie light.",
        value: 800
    },

    water_stone: {
        name: "Water Stone",
        type: "quest",
        description: "A smooth stone from the lake. It is always cold and slightly damp.",
        value: 100
    }
};

// Merge additional loot into items for InventorySystem
import { items as baseItems } from './items.js';
export const allItems = { ...baseItems, ...additionalLoot };
