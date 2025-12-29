// Game Engine - Coordinates all game systems
import { RoomSystem } from './RoomSystem.js';
import { CombatSystem } from './CombatSystem.js';
import { InventorySystem } from './InventorySystem.js';
import { PuzzleSystem } from './PuzzleSystem.js';
import { ProgressionSystem } from './ProgressionSystem.js';
import { AchievementSystem } from './AchievementSystem.js';
import { CraftingSystem } from './CraftingSystem.js';
import { findMatchingId } from '../utils/normalizeItemName.js';
import { rooms } from '../data/rooms.js';
import { items } from '../data/items.js';
import { enemies } from '../data/enemies.js';
import { puzzles } from '../data/puzzles.js';

export class GameEngine {
    constructor(gameState = null) {
        this.roomSystem = new RoomSystem(rooms);
        this.combatSystem = new CombatSystem(enemies);
        this.inventorySystem = new InventorySystem(items);
        this.puzzleSystem = new PuzzleSystem(puzzles);
        this.progressionSystem = new ProgressionSystem();
        this.achievementSystem = new AchievementSystem();
        this.craftingSystem = new CraftingSystem(items);
        this.gameState = gameState;
    }

    normalizeDirection(dir) {
        if (!dir) return null;
        const directionMap = {
            'n': 'north',
            's': 'south',
            'e': 'east',
            'w': 'west',
            'u': 'up',
            'd': 'down',
            'nw': 'northwest',
            'ne': 'northeast',
            'sw': 'southwest',
            'se': 'southeast',
            'northwest': 'northwest',
            'northeast': 'northeast',
            'southwest': 'southwest',
            'southeast': 'southeast',
            'north': 'north',
            'south': 'south',
            'east': 'east',
            'west': 'west',
            'up': 'up',
            'down': 'down'
        };
        return directionMap[dir.toLowerCase()] || null;
    }

    createNewPlayer(playerName) {
        return {
            name: playerName,
            currentRoom: 'bag_end',
            hp: 100,
            maxHp: 100,
            attack: 5,
            defense: 2,
            baseAttack: 5,
            baseDefense: 2,
            inventory: ['rusty_dagger'],
            equipment: {},
            solvedPuzzles: [],
            exp: 0,
            level: 1,
            gold: 10,
            visitedRooms: ['bag_end'], // Track all visited rooms
            recentRooms: ['bag_end'], // Track last 3-4 rooms for map display
            achievements: [], // Track unlocked achievements
            enemiesDefeated: 0, // Track combat stats
            bossesDefeated: [] // Track boss defeats
        };
    }

    processCommand(playerId, command, playerState) {
        const trimmedCommand = command.trim();
        const parts = trimmedCommand.split(' ');
        const verb = parts[0].toLowerCase();
        const args = parts.slice(1);

        // For chat commands, we want to preserve the original case of the message
        const rawArgs = trimmedCommand.split(/\s+/).slice(1).join(' ');

        // Commands blocked during combat
        if (this.combatSystem.isInCombat(playerId) && !['attack', 'flee', 'help'].includes(verb)) {
            return { message: "⚔️  You're in combat! Use 'attack' or 'flee'." };
        }

        switch (verb) {
            case 'look':
            case 'l':
                return this.handleLook(playerId, playerState);

            case 'go':
            case 'move':
            case 'north':
            case 'south':
            case 'east':
            case 'west':
            case 'up':
            case 'down':
            case 'northeast':
            case 'northwest':
            case 'southeast':
            case 'southwest':
            case 'n':
            case 's':
            case 'e':
            case 'w':
            case 'u':
            case 'd':
            case 'ne':
            case 'nw':
            case 'se':
            case 'sw':
                let direction;
                if (verb === 'go' || verb === 'move') {
                    direction = args[0] || '';
                } else {
                    direction = verb;
                }
                // Map shortcuts to full direction names
                direction = this.normalizeDirection(direction);
                if (!direction) {
                    return { message: "I don't understand that direction. Use north, south, east, west, northeast, northwest, southeast, southwest, up, or down (or n, s, e, w, ne, nw, se, sw, u, d)." };
                }
                return this.handleMove(playerId, direction, playerState);

            case 'take':
            case 'get':
                return this.handleTake(args.join(' '), playerState);

            case 'drop':
                return this.handleDrop(args.join(' '), playerState);

            case 'inventory':
            case 'i':
                return this.handleInventory(playerState);

            case 'use':
            case 'equip':
                return this.handleUse(args.join(' '), playerState);

            case 'examine':
            case 'x':
                return this.handleExamine(args.join(' '), playerState);

            case 'attack':
            case 'fight':
                return this.handleAttack(playerId, args.join(' '), playerState);

            case 'flee':
            case 'run':
                return this.handleFlee(playerId, playerState);

            case 'solve':
                return this.handleSolve(args[0], args.slice(1).join(' '), playerState);

            case 'puzzles':
                return { message: this.puzzleSystem.showPuzzleProgress(playerState) };

            case 'achievements':
            case 'ach':
                return this.handleAchievements(playerState);

            case 'craft':
            case 'combine':
                return this.handleCraft(args, playerState);

            case 'recipes':
                return this.handleRecipes(playerState);

            case 'stats':
            case 'status':
                return this.handleStats(playerState);

            case 'shout':
            case 'yell':
                const shoutMsg = trimmedCommand.substring(verb.length).trim();
                return this.handleShout(playerId, shoutMsg, playerState);

            case 'say':
            case 'talk':
                const sayMsg = trimmedCommand.substring(verb.length).trim();
                return this.handleSay(playerId, sayMsg, playerState);

            case 'help':
                return this.handleHelp();

            case 'save':
            case 'load':
                // Save/load commands are handled in PlayerManager
                // This shouldn't be reached, but just in case
                return { message: `Use 'save' or 'load' to manage your game progress.` };

            default:
                return { message: `I don't understand "${verb}". Type 'help' for commands.` };
        }
    }

    handleLook(playerId, playerState) {
        const playersInRoom = this.gameState ? this.gameState.getPlayersInRoom(playerState.currentRoom) : [];
        // Filter out the current player so they don't see themselves in the list
        const otherPlayers = playersInRoom.filter(name => name !== playerState.name);

        const description = this.roomSystem.getRoomDescription(
            playerState.currentRoom,
            { ...playerState, playersInRoom: otherPlayers },
            this.gameState
        );
        return { message: description };
    }

    handleMove(playerId, direction, playerState) {
        const result = this.roomSystem.move(playerState.currentRoom, direction);

        if (result.success) {
            if (this.roomSystem.canEnterRoom(result.roomId, playerState)) {
                const previousRoom = playerState.currentRoom;
                playerState.currentRoom = result.roomId;

                // Track visited rooms
                if (!playerState.visitedRooms) {
                    playerState.visitedRooms = [previousRoom];
                }
                if (!playerState.visitedRooms.includes(result.roomId)) {
                    playerState.visitedRooms.push(result.roomId);
                }

                // Track recent rooms (last 4)
                if (!playerState.recentRooms) {
                    playerState.recentRooms = [previousRoom];
                }
                playerState.recentRooms.push(result.roomId);
                // Keep only last 4 rooms
                if (playerState.recentRooms.length > 4) {
                    playerState.recentRooms.shift();
                }

                const newRoomDesc = this.roomSystem.getRoomDescription(result.roomId, {}, this.gameState);

                // Check for achievements after movement
                const newAchievements = this.achievementSystem.checkAchievements(playerState);
                let message = `${result.message}\n${newRoomDesc}`;

                // Add achievement messages if any unlocked
                for (const achievement of newAchievements) {
                    message += '\n' + this.achievementSystem.getAchievementMessage(achievement);
                }

                return {
                    message,
                    roomChanged: true
                };
            } else {
                // Get specific requirement message
                const room = this.roomSystem.getRoom(result.roomId);
                let message = "That way is blocked.";
                if (room && room.requirements) {
                    const missingReqs = [];
                    for (const req of room.requirements) {
                        if (req.type === 'item' && !playerState.inventory.includes(req.item)) {
                            const itemName = this.inventorySystem.getItem(req.item)?.name || req.item;
                            missingReqs.push(itemName);
                        }
                    }
                    if (missingReqs.length > 0) {
                        message = `You need ${missingReqs.join(' and ')} to proceed.`;
                    }
                }
                return { message };
            }
        }

        return { message: result.message };
    }

    handleTake(itemName, playerState) {
        const room = this.roomSystem.getRoom(playerState.currentRoom);

        // Get current room state
        if (this.gameState) {
            const roomState = this.gameState.getRoomState(
                playerState.currentRoom,
                room.items || [],
                room.enemies || []
            );
            // Use room state items instead of room.items
            const tempRoom = { ...room, items: roomState.items };
            const result = this.inventorySystem.takeItem(itemName, playerState, tempRoom);

            // Update room state if item was taken
            if (result.success) {
                // Find the matched item ID from the room state
                const matchedId = findMatchingId(itemName, roomState.items);
                if (matchedId) {
                    this.gameState.removeItemFromRoom(playerState.currentRoom, matchedId);
                }

                // Check for achievements after taking item
                const newAchievements = this.achievementSystem.checkAchievements(playerState);
                if (newAchievements.length > 0) {
                    let message = result.message;
                    for (const achievement of newAchievements) {
                        message += '\n' + this.achievementSystem.getAchievementMessage(achievement);
                    }
                    return { ...result, message };
                }
            }

            return { message: result.message };
        } else {
            // Fallback if gameState not available
            const result = this.inventorySystem.takeItem(itemName, playerState, room);
            return { message: result.message };
        }
    }

    handleDrop(itemName, playerState) {
        const room = this.roomSystem.getRoom(playerState.currentRoom);

        // Get current room state
        if (this.gameState) {
            const roomState = this.gameState.getRoomState(
                playerState.currentRoom,
                room.items || [],
                room.enemies || []
            );
            // Use room state items - pass reference so dropItem can modify it
            const tempRoom = { ...room, items: roomState.items };
            const result = this.inventorySystem.dropItem(itemName, playerState, tempRoom);

            // Room state is already updated since we passed roomState.items by reference
            // dropItem modifies room.items which is roomState.items

            return { message: result.message };
        } else {
            // Fallback if gameState not available
            const result = this.inventorySystem.dropItem(itemName, playerState, room);
            return { message: result.message };
        }
    }

    handleInventory(playerState) {
        return { message: this.inventorySystem.showInventory(playerState) };
    }

    handleUse(itemName, playerState) {
        const result = this.inventorySystem.useItem(itemName, playerState);
        return { message: result.message };
    }

    handleExamine(itemName, playerState) {
        const result = this.inventorySystem.examineItem(itemName, playerState);
        return { message: result.message };
    }

    handleAttack(playerId, targetName, playerState) {
        // If already in combat, attack
        if (this.combatSystem.isInCombat(playerId)) {
            const result = this.combatSystem.attack(playerId, playerState);

            if (result.combatOver && result.victory && result.loot) {
                playerState.inventory.push(...result.loot);

                // Track enemy defeat
                if (!playerState.enemiesDefeated) playerState.enemiesDefeated = 0;
                playerState.enemiesDefeated++;

                // Check if it was a boss (enemy with high exp or special name)
                const enemy = this.combatSystem.getEnemy(result.enemyType);
                if (enemy && (enemy.exp >= 200 || enemy.name.toLowerCase().includes('balrog') ||
                    enemy.name.toLowerCase().includes('sauron') || enemy.name.toLowerCase().includes('ringwraith'))) {
                    if (!playerState.bossesDefeated) playerState.bossesDefeated = [];
                    const bossId = enemy.name.toLowerCase().replace(/\s+/g, '_');
                    if (!playerState.bossesDefeated.includes(bossId)) {
                        playerState.bossesDefeated.push(bossId);
                    }
                }

                // Add experience and check for level ups
                const progression = this.progressionSystem.addExperience(playerState, result.exp || 0);
                let message = result.message;

                // Add level up messages if player leveled up
                if (progression.leveledUp) {
                    for (const levelUp of progression.levelUps) {
                        message += '\n' + this.progressionSystem.getLevelUpMessage(levelUp);
                    }
                }

                // Check for achievements
                const newAchievements = this.achievementSystem.checkAchievements(playerState);
                for (const achievement of newAchievements) {
                    message += '\n' + this.achievementSystem.getAchievementMessage(achievement);
                }

                return { message };
            }

            return { message: result.message };
        }

        // Start new combat
        const room = this.roomSystem.getRoom(playerState.currentRoom);
        if (!room.enemies || room.enemies.length === 0) {
            return { message: "There is nothing to attack here." };
        }

        // Find enemy - normalize the target name if provided
        let enemyType;
        if (targetName) {
            enemyType = findMatchingId(targetName, room.enemies);
            if (!enemyType) {
                return { message: `There is no ${targetName} here.` };
            }
        } else {
            enemyType = room.enemies[0];
        }

        const result = this.combatSystem.startCombat(playerId, enemyType, playerState);
        return { message: result.message };
    }

    handleFlee(playerId, playerState) {
        const result = this.combatSystem.flee(playerId, playerState);
        return { message: result.message };
    }

    handleSolve(puzzleId, solution, playerState) {
        const result = this.puzzleSystem.attemptPuzzle(puzzleId, solution, playerState);

        if (result.solved && result.success) {
            // Get exp reward from puzzle
            const puzzle = this.puzzleSystem.getPuzzle(puzzleId);
            const expGain = puzzle?.rewards?.exp || 0;

            // Add experience and check for level ups
            if (expGain > 0) {
                const progression = this.progressionSystem.addExperience(playerState, expGain);
                let message = result.message;

                // Add level up messages if player leveled up
                if (progression.leveledUp) {
                    for (const levelUp of progression.levelUps) {
                        message += '\n' + this.progressionSystem.getLevelUpMessage(levelUp);
                    }
                }

                // Check for achievements after solving puzzle
                const newAchievements = this.achievementSystem.checkAchievements(playerState);
                for (const achievement of newAchievements) {
                    message += '\n' + this.achievementSystem.getAchievementMessage(achievement);
                }

                return { message, puzzleSolved: true };
            }

            // Check if this unlocks anything
            return { message: result.message, puzzleSolved: true };
        }

        return { message: result.message };
    }

    handleStats(playerState) {
        let stats = `\n👤 ${playerState.name}\n`;
        stats += `━━━━━━━━━━━━━━━━━━━━\n`;
        stats += `❤️  HP: ${playerState.hp}/${playerState.maxHp}\n`;
        stats += `⚔️  Attack: ${playerState.attack}\n`;
        stats += `🛡️  Defense: ${playerState.defense}\n`;

        // Show level and exp progress
        const currentLevel = playerState.level || 1;
        const currentExp = playerState.exp || 0;
        const expNeeded = this.progressionSystem.getExpForNextLevel(currentLevel);
        stats += `📈 Level: ${currentLevel} (${currentExp} XP)\n`;
        stats += `   Next Level: ${expNeeded - currentExp} XP needed\n`;

        stats += `💰 Gold: ${playerState.gold || 0}\n`;
        stats += `🎒 Inventory: ${playerState.inventory.length} items\n`;
        stats += `🧩 Puzzles Solved: ${playerState.solvedPuzzles?.length || 0}\n`;
        stats += `🗺️  Rooms Visited: ${playerState.visitedRooms?.length || 0}\n`;

        return { message: stats };
    }

    handleRecipes(playerState) {
        const recipes = this.craftingSystem.getAvailableRecipes(playerState);
        let message = `\n📜 Available Crafting Recipes\n`;
        message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

        if (recipes.length === 0) {
            message += `No recipes available yet. Level up to unlock more recipes!\n`;
        } else {
            for (const recipe of recipes) {
                const status = recipe.canCraft ? '✅' : '❌';
                message += `${status} ${recipe.description}\n`;
                message += `   Ingredients: ${recipe.ingredients.join(', ')}\n`;
                message += `   Level Required: ${recipe.level}\n`;
                message += `   Result: ${recipe.result}\n\n`;
            }
        }

        return { message };
    }

    handleAchievements(playerState) {
        const progress = this.achievementSystem.getAchievementProgress(playerState);
        let message = `\n🏆 Achievements\n`;
        message += `━━━━━━━━━━━━━━━━━━━━\n`;
        message += `Unlocked: ${progress.unlocked}/${progress.total} (${progress.percentage}%)\n\n`;

        if (progress.achievements.length === 0) {
            message += `No achievements unlocked yet. Keep playing to unlock them!\n`;
        } else {
            message += `Unlocked Achievements:\n`;
            for (const achievement of progress.achievements) {
                message += `  🏆 ${achievement.name}\n`;
                message += `     ${achievement.description}\n`;
            }
        }

        return { message };
    }

    handleCraft(ingredients, playerState) {
        if (ingredients.length < 2) {
            return { message: "Crafting requires at least 2 items. Usage: craft <item1> <item2> [item3...]" };
        }

        // Normalize ingredient names
        const normalizedIngredients = ingredients.map(ing => {
            // Try to find matching item in inventory
            const matched = findMatchingId(ing, playerState.inventory || []);
            return matched || ing;
        });

        const result = this.craftingSystem.craft(normalizedIngredients, playerState);

        // Check for achievements after crafting
        if (result.success) {
            const newAchievements = this.achievementSystem.checkAchievements(playerState);
            if (newAchievements.length > 0) {
                let message = result.message;
                for (const achievement of newAchievements) {
                    message += '\n' + this.achievementSystem.getAchievementMessage(achievement);
                }
                return { ...result, message };
            }
        }

        return result;
    }


    handleSay(playerId, message, playerState) {
        if (!message) {
            return { message: "What do you want to say?" };
        }

        if (this.gameState) {
            this.gameState.broadcastToRoom(
                playerState.currentRoom,
                `${playerState.name} says: "${message}"`,
                playerId
            );
        }

        return { message: `You say: "${message}"` };
    }

    handleShout(playerId, message, playerState) {
        if (!message) {
            return { message: "What do you want to shout?" };
        }

        if (this.gameState) {
            // Global broadcast
            for (const [pid, ps] of this.gameState.players.entries()) {
                if (pid !== playerId) {
                    const ws = this.gameState.playerConnections.get(pid);
                    if (ws && ws.readyState === 1) {
                        ws.send(JSON.stringify({
                            type: 'room_event',
                            message: `📣 ${playerState.name} shouts: "${message}"`
                        }));
                    }
                }
            }
        }

        return { message: `You shout: "${message}"` };
    }

    handleHelp() {
        const help = `
🗺️  MIDDLE EARTH ADVENTURE - Commands

📍 Navigation:
  look, l              - Look around
  go <direction>       - Move in direction (north/south/east/west/up/down)
  n, s, e, w          - Shortcuts for directions

🎒 Inventory:
  inventory, i         - Show inventory
  take <item>         - Pick up item
  drop <item>         - Drop item
  use <item>          - Use/equip item
  examine <item>      - Examine item details

⚔️  Combat:
  attack <enemy>      - Start combat or attack
  flee                - Try to escape combat

🧩 Puzzles:
  solve <puzzle> <answer> - Attempt puzzle solution
  puzzles             - Show puzzle progress

🔨 Crafting:
  craft <item1> <item2> - Combine items to create new items
  recipes             - Show available crafting recipes

🏆 Progression:
  achievements, ach   - Show unlocked achievements

📊 Character:
  stats               - Show character stats
  help                - Show this help

💬 Social:
  say <message>       - Chat with players in your room
  shout <message>     - Broadcast a message to the world

💾 Save & Load:
  save                - Save your current progress
  load                - Load your saved game

Examples:
  go north
  take walking stick
  attack wild wolf
  solve riddle the answer
  save
`;
        return { message: help };
    }
}
