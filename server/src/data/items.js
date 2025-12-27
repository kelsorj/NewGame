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
    }
};
