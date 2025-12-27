// Combat System - Turn-based combat mechanics
export class CombatSystem {
    constructor(enemies) {
        this.enemies = enemies;
        this.activeCombats = new Map(); // playerId -> combat state
    }

    startCombat(playerId, enemyType, playerState) {
        const enemyTemplate = this.enemies[enemyType];
        if (!enemyTemplate) {
            return { success: false, message: `Unknown enemy: ${enemyType}` };
        }

        // Create enemy instance with full HP
        const enemy = {
            ...enemyTemplate,
            currentHp: enemyTemplate.hp,
            type: enemyType
        };

        this.activeCombats.set(playerId, {
            enemy,
            turn: 'player',
            log: []
        });

        return {
            success: true,
            message: `⚔️  Combat initiated with ${enemy.name}!\n${enemy.description}\nHP: ${enemy.currentHp}/${enemy.hp} | ATK: ${enemy.attack} | DEF: ${enemy.defense}`
        };
    }

    attack(playerId, playerState) {
        const combat = this.activeCombats.get(playerId);
        if (!combat) {
            return { success: false, message: "You are not in combat!" };
        }

        if (combat.turn !== 'player') {
            return { success: false, message: "It's not your turn!" };
        }

        const { enemy } = combat;
        let messages = [];

        // Player attacks
        const playerWeapon = this.getEquippedWeapon(playerState);
        const playerAttack = (playerState.attack || 5) + (playerWeapon?.bonus || 0);
        
        // Special abilities: Critical hit chance (10% base, increases with level)
        const critChance = 0.1 + ((playerState.level || 1) - 1) * 0.01;
        const isCritical = Math.random() < critChance;
        
        let playerDamage = Math.max(1, playerAttack - (enemy.defense || 0));
        
        if (isCritical) {
            playerDamage = Math.floor(playerDamage * 2);
            messages.push(`💥 CRITICAL HIT! You strike ${enemy.name} for ${playerDamage} damage!`);
        } else {
            messages.push(`🗡️  You strike ${enemy.name} for ${playerDamage} damage!`);
        }

        enemy.currentHp -= playerDamage;

        // Check if enemy defeated
        if (enemy.currentHp <= 0) {
            const loot = enemy.loot || [];
            const expGain = enemy.exp || 10;

            this.activeCombats.delete(playerId);

            messages.push(`\n✅ Victory! ${enemy.name} has been defeated!`);
            messages.push(`📈 You gain ${expGain} experience!`);

            if (loot.length > 0) {
                messages.push(`💰 Loot: ${loot.join(', ')}`);
            }

            return {
                success: true,
                combatOver: true,
                victory: true,
                loot,
                exp: expGain,
                enemyType: enemy.type, // Include enemy type for tracking
                message: messages.join('\n')
            };
        }

        // Enemy attacks back
        const enemyDamage = Math.max(1, (enemy.attack || 3) - (playerState.defense || 0));
        playerState.hp -= enemyDamage;
        messages.push(`💥 ${enemy.name} hits you for ${enemyDamage} damage!`);
        messages.push(`\n❤️  Your HP: ${playerState.hp}/${playerState.maxHp}`);
        messages.push(`🎯 ${enemy.name} HP: ${enemy.currentHp}/${enemy.hp}`);

        // Check if player defeated
        if (playerState.hp <= 0) {
            this.activeCombats.delete(playerId);
            messages.push(`\n💀 You have been defeated!`);

            return {
                success: true,
                combatOver: true,
                victory: false,
                message: messages.join('\n')
            };
        }

        combat.turn = 'player';

        return {
            success: true,
            combatOver: false,
            message: messages.join('\n')
        };
    }

    flee(playerId, playerState) {
        const combat = this.activeCombats.get(playerId);
        if (!combat) {
            return { success: false, message: "You are not in combat!" };
        }

        // 50% chance to flee
        if (Math.random() < 0.5) {
            this.activeCombats.delete(playerId);
            return {
                success: true,
                combatOver: true,
                message: "🏃 You successfully flee from combat!"
            };
        } else {
            // Enemy gets a free attack
            const enemyDamage = Math.max(1, (combat.enemy.attack || 3) - (playerState.defense || 0));
            playerState.hp -= enemyDamage;

            return {
                success: false,
                combatOver: false,
                message: `❌ Failed to flee! ${combat.enemy.name} strikes you for ${enemyDamage} damage!\n❤️  Your HP: ${playerState.hp}/${playerState.maxHp}`
            };
        }
    }

    isInCombat(playerId) {
        return this.activeCombats.has(playerId);
    }

    getCombatState(playerId) {
        return this.activeCombats.get(playerId);
    }

    getEquippedWeapon(playerState) {
        // Find equipped weapon in inventory
        return playerState.equipment?.weapon || null;
    }

    getEnemy(enemyType) {
        return this.enemies[enemyType];
    }
}
