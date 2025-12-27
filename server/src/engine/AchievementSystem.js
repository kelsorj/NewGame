// Achievement System - Tracks player accomplishments
export class AchievementSystem {
    constructor() {
        this.achievements = this.defineAchievements();
    }

    /**
     * Define all achievements in the game
     */
    defineAchievements() {
        return {
            first_steps: {
                name: "First Steps",
                description: "Take your first item",
                condition: (playerState) => playerState.inventory.length > 1, // More than starting item
                category: "items"
            },
            explorer: {
                name: "Explorer",
                description: "Visit 10 different rooms",
                condition: (playerState) => (playerState.visitedRooms?.length || 0) >= 10,
                category: "exploration"
            },
            master_explorer: {
                name: "Master Explorer",
                description: "Visit 50 different rooms",
                condition: (playerState) => (playerState.visitedRooms?.length || 0) >= 50,
                category: "exploration"
            },
            first_blood: {
                name: "First Blood",
                description: "Defeat your first enemy",
                condition: (playerState) => (playerState.enemiesDefeated || 0) >= 1,
                category: "combat"
            },
            warrior: {
                name: "Warrior",
                description: "Defeat 10 enemies",
                condition: (playerState) => (playerState.enemiesDefeated || 0) >= 10,
                category: "combat"
            },
            slayer: {
                name: "Slayer",
                description: "Defeat 50 enemies",
                condition: (playerState) => (playerState.enemiesDefeated || 0) >= 50,
                category: "combat"
            },
            puzzle_master: {
                name: "Puzzle Master",
                description: "Solve 5 puzzles",
                condition: (playerState) => (playerState.solvedPuzzles?.length || 0) >= 5,
                category: "puzzles"
            },
            grand_puzzle_master: {
                name: "Grand Puzzle Master",
                description: "Solve all puzzles",
                condition: (playerState) => (playerState.solvedPuzzles?.length || 0) >= 10,
                category: "puzzles"
            },
            level_5: {
                name: "Rising Star",
                description: "Reach level 5",
                condition: (playerState) => (playerState.level || 1) >= 5,
                category: "progression"
            },
            level_10: {
                name: "Veteran",
                description: "Reach level 10",
                condition: (playerState) => (playerState.level || 1) >= 10,
                category: "progression"
            },
            level_20: {
                name: "Champion",
                description: "Reach level 20",
                condition: (playerState) => (playerState.level || 1) >= 20,
                category: "progression"
            },
            rich: {
                name: "Wealthy",
                description: "Accumulate 1000 gold",
                condition: (playerState) => (playerState.gold || 0) >= 1000,
                category: "wealth"
            },
            collector: {
                name: "Collector",
                description: "Collect 20 different items",
                condition: (playerState) => (playerState.inventory?.length || 0) >= 20,
                category: "items"
            },
            hoarder: {
                name: "Hoarder",
                description: "Collect 50 different items",
                condition: (playerState) => (playerState.inventory?.length || 0) >= 50,
                category: "items"
            },
            balrog_slayer: {
                name: "Balrog Slayer",
                description: "Defeat the Balrog of Moria",
                condition: (playerState) => (playerState.bossesDefeated || []).includes('balrog'),
                category: "bosses"
            },
            ring_destroyer: {
                name: "Ring Destroyer",
                description: "Destroy the One Ring",
                condition: (playerState) => (playerState.solvedPuzzles || []).includes('destroy_ring'),
                category: "bosses"
            },
            sauron_vanquished: {
                name: "Sauron Vanquished",
                description: "Defeat Sauron",
                condition: (playerState) => (playerState.bossesDefeated || []).includes('sauron'),
                category: "bosses"
            }
        };
    }

    /**
     * Check and unlock achievements for a player
     * Returns list of newly unlocked achievements
     */
    checkAchievements(playerState) {
        if (!playerState.achievements) {
            playerState.achievements = [];
        }

        const newlyUnlocked = [];

        for (const [achievementId, achievement] of Object.entries(this.achievements)) {
            // Skip if already unlocked
            if (playerState.achievements.includes(achievementId)) {
                continue;
            }

            // Check if condition is met
            if (achievement.condition(playerState)) {
                playerState.achievements.push(achievementId);
                newlyUnlocked.push({
                    id: achievementId,
                    name: achievement.name,
                    description: achievement.description,
                    category: achievement.category
                });
            }
        }

        return newlyUnlocked;
    }

    /**
     * Get achievement progress message
     */
    getAchievementMessage(achievement) {
        return `🏆 Achievement Unlocked: ${achievement.name}!\n   ${achievement.description}`;
    }

    /**
     * Get all unlocked achievements for a player
     */
    getUnlockedAchievements(playerState) {
        if (!playerState.achievements || playerState.achievements.length === 0) {
            return [];
        }

        return playerState.achievements.map(id => ({
            id,
            ...this.achievements[id]
        }));
    }

    /**
     * Get achievement progress for display
     */
    getAchievementProgress(playerState) {
        const unlocked = this.getUnlockedAchievements(playerState);
        const total = Object.keys(this.achievements).length;
        
        return {
            unlocked: unlocked.length,
            total,
            percentage: Math.floor((unlocked.length / total) * 100),
            achievements: unlocked
        };
    }
}

