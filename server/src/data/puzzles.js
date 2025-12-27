// Puzzle definitions for Middle Earth
export const puzzles = {
    willow_riddle: {
        name: "Old Man Willow's Riddle",
        description: "The ancient willow whispers: 'What has roots that nobody sees, is taller than trees, up, up it goes, and yet never grows?'",
        hint: "Think of the land itself...",
        solutionType: "exact",
        solution: "mountain",
        successMessage: "The willow groans and its grip loosens! You've answered correctly.",
        failMessage: "The willow's branches tighten. That's not the answer.",
        requirements: [],
        rewards: {
            items: ['willow_wand'],
            exp: 30
        }
    },

    tower_inscription: {
        name: "Tower Inscription at Weathertop",
        description: "Ancient runes are carved into a stone: 'Only those who know the name of the tower in the elven tongue may claim its treasure.' The tower was called Amon Sûl in common speech.",
        hint: "The elves have their own name for this place...",
        solutionType: "contains",
        solution: ["weathertop", "amon sul", "amonsul"],
        successMessage: "The stone shifts, revealing a hidden compartment!",
        failMessage: "Nothing happens. The runes remain dark.",
        requirements: [],
        rewards: {
            items: ['ancient_blade', 'health_potion'],
            exp: 25
        }
    },

    troll_chest: {
        name: "Troll's Locked Chest",
        description: "A heavy iron chest with a complex lock. You notice a riddle scratched into the lid: 'Voiceless it cries, wingless flutters, toothless bites, mouthless mutters.'",
        hint: "Think about the weather...",
        solutionType: "exact",
        solution: "wind",
        successMessage: "Click! The lock springs open!",
        failMessage: "The lock remains stubbornly shut.",
        requirements: [],
        rewards: {
            items: ['sting', 'orcrist', 'gold_treasure'],
            exp: 40
        }
    },

    elven_lore: {
        name: "Test of Elven Lore",
        description: "An ancient book in Rivendell's library tests your knowledge: 'How many rings were given to the Dwarf-lords in their halls of stone?'",
        hint: "Recall the Ring Verse: 'Three Rings for the Elven-kings under the sky...'",
        solutionType: "contains",
        solution: ["seven", "7"],
        successMessage: "The book glows with approval! You have proven your knowledge.",
        failMessage: "The book's pages refuse to turn. You need more knowledge.",
        requirements: [],
        rewards: {
            items: ['scroll_of_wisdom', 'miruvor'],
            exp: 50
        }
    },

    bombadil_song: {
        name: "Tom Bombadil's Song",
        description: "Tom Bombadil asks you to complete his rhyme: 'Hey dol! merry dol! ring a dong ___!'",
        hint: "Listen to his cheerful singing...",
        solutionType: "exact",
        solution: "dillo",
        successMessage: "Tom laughs joyfully! 'You've got it, my friend!'",
        failMessage: "Tom shakes his head with a smile. 'Not quite, not quite!'",
        requirements: [],
        rewards: {
            items: ['bombadil_gift'],
            exp: 20
        }
    },

    gateway_of_moria: {
        name: "Doors of Durin",
        description: "The great doors of Moria stand before you, sealed. An inscription reads: 'Speak, friend, and enter.' What is the elvish word for 'friend'?",
        hint: "The answer is simpler than you think. What does 'friend' mean in Sindarin?",
        solutionType: "exact",
        solution: "mellon",
        successMessage: "The doors swing silently open, revealing the darkness of Moria!",
        failMessage: "The doors remain shut. That is not the word.",
        requirements: [],
        rewards: {
            exp: 100
        }
    },

    bridge_riddle: {
        name: "Guardian's Riddle",
        description: "A spectral guardian blocks your path: 'Alive without breath, cold as death, never thirsty, ever drinking, all in mail never clinking. What am I?'",
        hint: "Think of creatures in water...",
        solutionType: "exact",
        solution: "fish",
        successMessage: "The guardian bows and steps aside, allowing passage.",
        failMessage: "The guardian shakes its head. You cannot pass.",
        requirements: [],
        rewards: {
            items: ['guardian_token'],
            exp: 35
        }
    },

    minas_tirith_password: {
        name: "Password of the White City",
        description: "The guards of Minas Tirith challenge you: 'What is the name of the first king of Gondor, founder of the realm?'",
        hint: "Brother of Anárion, who fled the fall of Númenor...",
        solutionType: "contains",
        solution: ["isildur", "elendil"],
        successMessage: "The guards salute and allow you to pass!",
        failMessage: "You do not have the knowledge to enter the White City.",
        requirements: [],
        rewards: {
            items: ['white_tree_token'],
            exp: 60
        }
    },

    palantir_vision: {
        name: "The Seeing Stone",
        description: "You gaze into a Palantír. Visions swirl before you. To control the vision, you must focus on what you seek. What do you wish to see? (Hint: ancient evils, far lands, or hidden truths)",
        hint: "Some knowledge is dangerous...",
        solutionType: "contains",
        solution: ["barad-dur", "sauron", "mordor", "mount doom"],
        successMessage: "The vision clears! You see the Dark Tower and understand the danger ahead. Your will is strong enough to control the stone.",
        failMessage: "The visions overwhelm you. The Palantír clouds over.",
        requirements: [{ type: 'item', item: 'palantir' }],
        rewards: {
            exp: 80
        }
    },

    ring_inscription: {
        name: "The Ring Inscription",
        description: "You examine a golden ring. When heated, fiery letters appear in the Black Speech. To identify this ring, speak aloud the One Ring's inscription (in English).",
        hint: "The full Ring Verse tells of its power...",
        solutionType: "contains",
        solution: ["one ring to rule them all", "one ring", "rule them all"],
        successMessage: "You have identified the One Ring! The weight of its power is terrible to behold.",
        failMessage: "The inscription fades. This knowledge eludes you.",
        requirements: [],
        rewards: {
            exp: 150
        }
    },

    // MORIA PUZZLES
    chamber_records: {
        name: "The Book of Mazarbul",
        description: "You open the tattered book beside Balin's tomb. The final entry reads: 'We cannot get out. They are coming. Drums, drums in the deep. We cannot get out. They are coming.' What was the fate that befell Balin's colony?",
        hint: "Think of what dwells in the darkness of Moria...",
        solutionType: "contains",
        solution: ["goblins", "orcs", "drums", "moria", "shadow", "deep"],
        successMessage: "Understanding dawns. The colony was overrun by the creatures of the dark. You honor their memory.",
        failMessage: "The mystery remains unclear.",
        requirements: [],
        rewards: {
            items: ['mithril_chain'],
            exp: 75
        }
    }
};

// Quest items that might be needed
export const puzzleItems = {
    guardian_token: {
        name: "Guardian Token",
        type: "quest",
        description: "A silver token given by the spectral guardian. It marks you as worthy.",
        value: 50
    },

    white_tree_token: {
        name: "White Tree Token",
        type: "quest",
        description: "A medallion bearing the White Tree of Gondor.",
        value: 100
    },

    palantir: {
        name: "Palantír",
        type: "quest",
        description: "A Seeing Stone, one of seven created in ancient Númenor. Gazing into it is dangerous.",
        value: 5000
    }
};
