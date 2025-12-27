// Item definitions for Middle Earth
export const items = {
    // Starting Items
    rusty_dagger: {
        name: "Rusty Dagger",
        type: "weapon",
        description: "An old, rusty dagger. Not much, but better than bare hands.",
        bonus: 2,
        value: 5
    },

    walking_stick: {
        name: "Walking Stick",
        type: "weapon",
        description: "A sturdy wooden walking stick. Good for hiking and bashing heads.",
        bonus: 3,
        value: 10
    },

    // Food & Potions
    lembas_bread: {
        name: "Lembas Bread",
        type: "potion",
        description: "Elven waybread. One bite fills the stomach of a grown man.",
        effect: "heal",
        power: 30,
        value: 20
    },

    health_potion: {
        name: "Health Potion",
        type: "potion",
        description: "A red potion that restores vitality.",
        effect: "heal",
        power: 20,
        value: 15
    },

    miruvor: {
        name: "Miruvor",
        type: "potion",
        description: "The cordial of Rivendell, given by Elrond. Restores strength to weary travelers.",
        effect: "heal",
        power: 50,
        value: 100
    },

    athelas: {
        name: "Athelas",
        type: "potion",
        description: "Kingsfoil, a healing herb. 'The hands of the king are the hands of a healer.'",
        effect: "heal",
        power: 40,
        value: 50
    },

    elven_berries: {
        name: "Elven Berries",
        type: "potion",
        description: "Magical berries that restore a small amount of health.",
        effect: "heal",
        power: 15,
        value: 10
    },

    // Weapons
    sting: {
        name: "Sting",
        type: "weapon",
        description: "An elven-blade, glowing blue when orcs are near. Once wielded by Bilbo Baggins. Particularly effective against spiders and orcs.",
        bonus: 10,
        value: 500
    },

    orcrist: {
        name: "Orcrist",
        type: "weapon",
        description: "The Goblin-cleaver! A legendary elven sword from Gondolin. It glows with a fierce blue light.",
        bonus: 12,
        value: 800
    },

    elvish_blade: {
        name: "Elvish Blade",
        type: "weapon",
        description: "A finely crafted elven sword, light as a feather but sharp as broken glass.",
        bonus: 8,
        value: 300
    },

    ancient_blade: {
        name: "Ancient Blade",
        type: "weapon",
        description: "A weathered but still serviceable blade from a bygone age.",
        bonus: 5,
        value: 50
    },

    // Armor
    mithril_mail: {
        name: "Mithril Mail",
        type: "armor",
        description: "A shirt of mithril rings, worth more than the whole Shire! Light as silk, hard as dragon-scales.",
        bonus: 15,
        value: 10000
    },

    ranger_cloak: {
        name: "Ranger Cloak",
        type: "armor",
        description: "A grey-green cloak of the Rangers, providing camouflage and protection.",
        bonus: 5,
        value: 100
    },

    leather_armor: {
        name: "Leather Armor",
        type: "armor",
        description: "Tough leather armor, good for light protection.",
        bonus: 3,
        value: 40
    },

    // Quest Items & Keys
    brass_key: {
        name: "Brass Key",
        type: "key",
        description: "An old brass key. It must unlock something...",
        value: 0
    },

    old_map: {
        name: "Old Map",
        type: "quest",
        description: "A weathered map showing strange symbols and a marked location in the mountains.",
        value: 0
    },

    ancient_tome: {
        name: "Ancient Tome",
        type: "quest",
        description: "A heavy book written in elvish script. It speaks of the rings of power and ancient evils.",
        value: 200
    },

    scroll_of_wisdom: {
        name: "Scroll of Wisdom",
        type: "quest",
        description: "An elven scroll containing ancient knowledge.",
        value: 150
    },

    mysterious_stone: {
        name: "Mysterious Stone",
        type: "quest",
        description: "A smooth stone that pulses with a faint inner light. You sense it has power.",
        value: 100
    },

    ancient_acorn: {
        name: "Ancient Acorn",
        type: "quest",
        description: "An acorn from the Old Forest. It thrums with ancient tree-magic.",
        value: 50
    },

    bombadil_gift: {
        name: "Tom Bombadil's Gift",
        type: "quest",
        description: "A strange trinket given by Tom Bombadil. 'This may help you in dark places,' he said with a wink.",
        value: 0
    },

    // Treasures
    gold_treasure: {
        name: "Gold Treasure",
        type: "treasure",
        description: "A heavy pouch of gold coins, likely from the trolls' hoard.",
        value: 200
    },

    silver_coin: {
        name: "Silver Coin",
        type: "treasure",
        description: "An ancient silver coin with strange markings.",
        value: 10
    },

    barrow_treasure: {
        name: "Barrow Treasure",
        type: "treasure",
        description: "Precious items from an ancient barrow - golden rings and jeweled daggers.",
        value: 300
    },

    // Utility Items
    rope: {
        name: "Rope",
        type: "utility",
        description: "50 feet of good, stout rope. Never leave home without it!",
        value: 5
    },

    carrot: {
        name: "Carrot",
        type: "food",
        description: "A fresh carrot from a hobbit garden.",
        value: 1
    },

    // MORIA ITEMS
    // Dwarven Weapons
    dur_axe: {
        name: "Durin's Axe",
        type: "weapon",
        description: "The legendary axe of Durin the Deathless. Runes of power glow along its blade. 'Baruk Khazâd!'",
        bonus: 14,
        value: 1200
    },

    ancient_hammer: {
        name: "Ancient Dwarven Hammer",
        type: "weapon",
        description: "A masterwork dwarven war hammer, perfectly balanced despite its great age.",
        bonus: 9,
        value: 250
    },

    forge_hammer: {
        name: "Forge Hammer",
        type: "weapon",
        description: "A smithing hammer that doubles as a formidable weapon.",
        bonus: 6,
        value: 80
    },

    // Dwarven Armor
    dwarven_helm: {
        name: "Dwarven Helm",
        type: "armor",
        description: "A sturdy dwarven helmet adorned with runes. Forged in the fires of Erebor.",
        bonus: 6,
        value: 150
    },

    mithril_chain: {
        name: "Mithril Chain",
        type: "armor",
        description: "A fine chain made of pure mithril. Light but incredibly strong.",
        bonus: 12,
        value: 5000
    },

    rusty_armor: {
        name: "Rusty Dwarven Armor",
        type: "armor",
        description: "Old dwarven plate armor, rusted but still protective.",
        bonus: 4,
        value: 60
    },

    // Mithril Items
    mithril_fragment: {
        name: "Mithril Fragment",
        type: "material",
        description: "A small fragment of mithril, the most precious metal in Middle Earth.",
        value: 500
    },

    mithril_ore: {
        name: "Mithril Ore",
        type: "material",
        description: "Raw mithril ore, unrefined but priceless. It gleams with inner light.",
        value: 800
    },

    mithril_nugget: {
        name: "Mithril Nugget",
        type: "material",
        description: "A pure nugget of refined mithril. Worth a king's ransom.",
        value: 1500
    },

    // Mining & Tools
    old_torch: {
        name: "Old Torch",
        type: "utility",
        description: "A guttering torch that still provides some light in the darkness.",
        value: 2
    },

    miners_lamp: {
        name: "Miner's Lamp",
        type: "utility",
        description: "A dwarven mining lamp that burns with a steady, bright flame.",
        value: 25
    },

    pickaxe: {
        name: "Pickaxe",
        type: "utility",
        description: "A sturdy mining pickaxe. Well-worn but serviceable.",
        value: 15
    },

    // Ores & Materials
    iron_ore: {
        name: "Iron Ore",
        type: "material",
        description: "A chunk of iron ore, useful for smithing.",
        value: 10
    },

    silver_ore: {
        name: "Silver Ore",
        type: "material",
        description: "Rich silver ore from the deep mines.",
        value: 50
    },

    copper_ore: {
        name: "Copper Ore",
        type: "material",
        description: "Copper ore with a reddish gleam.",
        value: 15
    },

    coal: {
        name: "Coal",
        type: "material",
        description: "Black coal, fuel for the forges of old.",
        value: 5
    },

    deep_crystal: {
        name: "Deep Crystal",
        type: "material",
        description: "A strange crystalline formation from the deepest levels of Moria. It pulses with faint light.",
        value: 200
    },

    // Quest Items
    book_of_mazarbul: {
        name: "Book of Mazarbul",
        type: "quest",
        description: "The last record of Balin's colony in Moria. The final entries are ominous: 'They are coming...'",
        value: 0
    },

    balin_crown: {
        name: "Balin's Crown",
        type: "quest",
        description: "The simple iron crown of Balin, Lord of Moria. A symbol of doomed ambition.",
        value: 300
    },

    ancient_key: {
        name: "Ancient Dwarven Key",
        type: "key",
        description: "A key wrought by dwarven smiths long ago. What door does it open?",
        value: 0
    },

    seven_stars_token: {
        name: "Seven Stars Token",
        type: "quest",
        description: "A medallion bearing the crown of Durin and seven stars - the emblem of the Longbeards.",
        value: 100
    },

    mirrormere_water: {
        name: "Mirrormere Water",
        type: "quest",
        description: "Water from the sacred lake of Mirrormere. It is said to hold visions of the future.",
        value: 0
    },

    // Treasures
    goblin_treasure: {
        name: "Goblin Treasure",
        type: "treasure",
        description: "A bag of stolen coins and trinkets hoarded by goblins.",
        value: 100
    },

    // GONDOR ITEMS
    ancient_gondorian_coin: {
        name: "Ancient Gondorian Coin",
        type: "treasure",
        description: "A coin from the days when Osgiliath was great. The White Tree is still visible.",
        value: 50
    },

    gondorian_banner: {
        name: "Gondorian Banner",
        type: "quest",
        description: "A banner bearing the White Tree of Gondor. A symbol of hope.",
        value: 100
    },

    white_tree_sapling: {
        name: "White Tree Sapling",
        type: "quest",
        description: "A young sapling of the White Tree of Gondor. It must be planted in the Citadel.",
        value: 0
    },

    gondorian_sword: {
        name: "Gondorian Sword",
        type: "weapon",
        description: "A well-forged blade of Gondor. The White Tree is etched into the hilt.",
        bonus: 10,
        value: 300
    },

    healing_herbs: {
        name: "Healing Herbs",
        type: "potion",
        description: "Herbs from the Houses of Healing. They restore vitality.",
        effect: "heal",
        power: 25,
        value: 20
    },

    gondorian_armor: {
        name: "Gondorian Armor",
        type: "armor",
        description: "Fine plate armor of Gondor, white and silver. The White Tree is embossed on the breastplate.",
        bonus: 11,
        value: 400
    },

    ancient_tapestry: {
        name: "Ancient Tapestry",
        type: "treasure",
        description: "A tapestry depicting the history of Gondor. Priceless to collectors.",
        value: 500
    },

    gondorian_crown: {
        name: "Gondorian Crown",
        type: "treasure",
        description: "A crown of the Stewards of Gondor. Simple but elegant.",
        value: 800
    },

    palantir_of_minas_tirith: {
        name: "Palantír of Minas Tirith",
        type: "quest",
        description: "A seeing-stone. It shows distant places, but beware - the Dark Lord may be watching.",
        value: 0
    },

    steward_crown: {
        name: "Steward's Crown",
        type: "treasure",
        description: "The crown of the Stewards of Gondor. A symbol of their long rule.",
        value: 1000
    },

    steward_ring: {
        name: "Steward's Ring",
        type: "quest",
        description: "The ring of the Stewards, passed down through generations.",
        value: 500
    },

    ancient_scroll: {
        name: "Ancient Scroll",
        type: "quest",
        description: "A scroll containing the history of Gondor and the line of the Stewards.",
        value: 0
    },

    // MORDOR ITEMS
    tower_key: {
        name: "Tower Key",
        type: "key",
        description: "A key to the Tower of Cirith Ungol. It glows faintly with dark magic.",
        value: 0
    },

    sting_glow: {
        name: "Sting's Glow",
        type: "quest",
        description: "The glow of Sting, the elven blade. It glows blue when orcs are near.",
        value: 0
    },

    dark_ring_fragment: {
        name: "Dark Ring Fragment",
        type: "quest",
        description: "A fragment of dark power from Barad-dûr. It pulses with evil.",
        value: 0
    },

    sauron_armor_fragment: {
        name: "Sauron's Armor Fragment",
        type: "treasure",
        description: "A fragment of the Dark Lord's armor. It still radiates malice.",
        value: 2000
    },

    fire_crystal: {
        name: "Fire Crystal",
        type: "material",
        description: "A crystal of pure fire from Mount Doom. It burns without consuming itself.",
        value: 300
    },

    lava_stone: {
        name: "Lava Stone",
        type: "material",
        description: "A stone hardened from the lava of Mount Doom. It retains heat.",
        value: 150
    },

    fish_bone: {
        name: "Fish Bone",
        type: "treasure",
        description: "A fish bone, left behind by Gollum. Not very valuable, but it tells a story.",
        value: 1
    },

    precious_ring: {
        name: "Precious Ring",
        type: "quest",
        description: "A ring that Gollum called 'precious'. It's not the One Ring, but it has power.",
        value: 0
    },

    shadow_crystal: {
        name: "Shadow Crystal",
        type: "material",
        description: "A crystal of pure shadow from Sauron's power. It seems to drink the light.",
        value: 1000
    },

    // PATHS OF THE DEAD ITEMS
    oath_stone: {
        name: "Oath Stone",
        type: "quest",
        description: "A stone bearing an ancient oath. The dead are bound by it.",
        value: 0
    },

    dead_crown: {
        name: "Crown of the Dead King",
        type: "treasure",
        description: "The crown of the King of the Dead. It glows with spectral light.",
        value: 600
    },

    ancient_sword: {
        name: "Ancient Sword",
        type: "weapon",
        description: "A sword from the Army of the Dead. It is cold to the touch.",
        bonus: 8,
        value: 200
    },

    kings_blade: {
        name: "King's Blade",
        type: "weapon",
        description: "The blade of the King of the Dead. It cuts through shadow and flesh alike.",
        bonus: 15,
        value: 800
    },

    // SHELOB ITEMS
    shelob_fang: {
        name: "Shelob's Fang",
        type: "weapon",
        description: "One of Shelob's massive fangs, still dripping with venom. A deadly weapon.",
        bonus: 12,
        value: 600
    },

    ancient_web: {
        name: "Ancient Web",
        type: "material",
        description: "Web from Shelob's lair. Stronger than steel, it never rots.",
        value: 400
    },

    spider_venom: {
        name: "Spider Venom",
        type: "potion",
        description: "Deadly venom from a giant spider. Can be used as a weapon or antidote.",
        effect: "poison",
        power: 30,
        value: 150
    },

    orc_spear: {
        name: "Orc Spear",
        type: "weapon",
        description: "A long spear used by warg riders. Crude but effective.",
        bonus: 7,
        value: 80
    },

    troll_hammer: {
        name: "Troll Hammer",
        type: "weapon",
        description: "A massive hammer wielded by a troll. Too heavy for most, but devastating.",
        bonus: 16,
        value: 500
    },

    // ROHAN ITEMS
    rohirric_sword: {
        name: "Rohirric Sword",
        type: "weapon",
        description: "A fine blade of Rohan, curved and deadly. The horse-lords know their craft.",
        bonus: 11,
        value: 350
    },

    horn_of_rohan: {
        name: "Horn of Rohan",
        type: "quest",
        description: "A great horn of Rohan. When blown, it can be heard for leagues. 'Where now the horse and the rider?'",
        value: 400
    },

    helms_hammer: {
        name: "Helm's Hammer",
        type: "weapon",
        description: "The legendary hammer of Helm Hammerhand. It has never failed in battle.",
        bonus: 13,
        value: 600
    },

    // GLITTERING CAVES ITEMS
    cave_crystal: {
        name: "Cave Crystal",
        type: "material",
        description: "A beautiful crystal from the Glittering Caves. It sparkles with inner light.",
        value: 200
    },

    cave_pearl: {
        name: "Cave Pearl",
        type: "treasure",
        description: "A perfect pearl formed in the Glittering Caves. It glows softly.",
        value: 500
    },

    star_gem: {
        name: "Star Gem",
        type: "treasure",
        description: "A gem that seems to contain a star. It is priceless.",
        value: 2000
    },

    // FANGORN ITEMS
    entdraught: {
        name: "Entdraught",
        type: "potion",
        description: "The drink of the Ents. It makes you feel taller and stronger, and you can understand the speech of trees.",
        effect: "heal",
        power: 40,
        value: 300
    },

    ent_staff: {
        name: "Ent Staff",
        type: "weapon",
        description: "A staff carved from an ancient tree by the Ents. It is alive and grows leaves.",
        bonus: 10,
        value: 400
    },

    ancient_oak_heart: {
        name: "Ancient Oak Heart",
        type: "quest",
        description: "The heartwood of an ancient oak from Fangorn. It pulses with slow, deep life.",
        value: 500
    },

    // ISENGARD ITEMS
    broken_staff: {
        name: "Broken Staff",
        type: "quest",
        description: "The broken staff of Saruman. Its power is gone, but it tells a story of betrayal.",
        value: 0
    },

    saruman_scrolls: {
        name: "Saruman's Scrolls",
        type: "quest",
        description: "Scrolls containing Saruman's studies of the Rings of Power and the lore of Middle Earth.",
        value: 1000
    },

    palantir: {
        name: "Palantír",
        type: "quest",
        description: "A Seeing Stone, one of seven created in ancient Númenor. Gazing into it is dangerous - Sauron may be watching.",
        value: 5000
    },

    // RING ITEMS
    one_ring: {
        name: "The One Ring",
        type: "quest",
        description: "The One Ring to rule them all. It whispers to you, promising power. But it must be destroyed.",
        value: 0
    },

    ring_of_power_fragment: {
        name: "Ring of Power Fragment",
        type: "quest",
        description: "A fragment of the One Ring, destroyed in the fires of Mount Doom. It no longer has power, but it is a reminder of what was accomplished.",
        value: 0
    }
};
