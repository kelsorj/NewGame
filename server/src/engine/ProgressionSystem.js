// Progression System - Handles character leveling and stat growth
export class ProgressionSystem {
    constructor() {
        // Experience required per level (exponential growth)
        this.expTable = this.generateExpTable();
    }

    /**
     * Generate experience table for levels 1-50
     * Formula: baseExp * (level^1.5)
     */
    generateExpTable() {
        const table = {};
        for (let level = 1; level <= 50; level++) {
            table[level] = Math.floor(100 * Math.pow(level, 1.5));
        }
        return table;
    }

    /**
     * Get experience required for next level
     */
    getExpForNextLevel(currentLevel) {
        return this.expTable[currentLevel + 1] || 999999;
    }

    /**
     * Add experience and check for level up
     * Returns level up information if player leveled up
     */
    addExperience(playerState, expGain) {
        if (!playerState.exp) playerState.exp = 0;
        if (!playerState.level) playerState.level = 1;

        const oldLevel = playerState.level;
        playerState.exp += expGain;

        // Check for level ups (can level multiple times if enough exp)
        let levelUps = [];
        while (this.shouldLevelUp(playerState)) {
            const levelUpInfo = this.levelUp(playerState);
            levelUps.push(levelUpInfo);
        }

        return {
            expGain,
            newExp: playerState.exp,
            levelUps,
            leveledUp: levelUps.length > 0
        };
    }

    /**
     * Check if player should level up
     */
    shouldLevelUp(playerState) {
        const expNeeded = this.getExpForNextLevel(playerState.level);
        return playerState.exp >= expNeeded;
    }

    /**
     * Level up the player and increase stats
     */
    levelUp(playerState) {
        const oldLevel = playerState.level;
        playerState.level += 1;

        // Stat increases per level
        const hpIncrease = 10 + Math.floor(playerState.level / 2);
        const attackIncrease = 1 + Math.floor(playerState.level / 5);
        const defenseIncrease = 1 + Math.floor(playerState.level / 7);

        // Update max HP and restore HP on level up
        playerState.maxHp = (playerState.maxHp || 100) + hpIncrease;
        playerState.hp = playerState.maxHp; // Full heal on level up

        // Update base stats
        playerState.baseAttack = (playerState.baseAttack || 5) + attackIncrease;
        playerState.baseDefense = (playerState.baseDefense || 2) + defenseIncrease;

        // Recalculate current attack/defense (accounting for equipment)
        this.recalculateStats(playerState);

        return {
            oldLevel,
            newLevel: playerState.level,
            hpIncrease,
            attackIncrease,
            defenseIncrease,
            expNeeded: this.getExpForNextLevel(playerState.level)
        };
    }

    /**
     * Recalculate stats based on base stats and equipment
     */
    recalculateStats(playerState) {
        // This will be called after equipment changes
        // For now, just ensure base stats are used
        if (!playerState.equipment) return;

        // Attack is recalculated when equipment changes
        // Defense is recalculated when equipment changes
        // This is handled in InventorySystem.equipItem
    }

    /**
     * Get level up message
     */
    getLevelUpMessage(levelUpInfo) {
        return `\n🎉 LEVEL UP! 🎉\n` +
               `You are now Level ${levelUpInfo.newLevel}!\n` +
               `❤️  Max HP: +${levelUpInfo.hpIncrease} (now ${levelUpInfo.newLevel === 1 ? 100 : 'full'})\n` +
               `⚔️  Attack: +${levelUpInfo.attackIncrease}\n` +
               `🛡️  Defense: +${levelUpInfo.defenseIncrease}\n` +
               `📈 Next level: ${levelUpInfo.expNeeded} XP needed`;
    }
}

