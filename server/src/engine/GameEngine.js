// Game Engine - Coordinates all game systems
import { RoomSystem } from './RoomSystem.js';
import { CombatSystem } from './CombatSystem.js';
import { InventorySystem } from './InventorySystem.js';
import { PuzzleSystem } from './PuzzleSystem.js';
import { findMatchingId } from '../utils/normalizeItemName.js';
import { rooms } from '../data/rooms.js';
import { items } from '../data/items.js';
import { enemies } from '../data/enemies.js';
import { puzzles } from '../data/puzzles.js';

export class GameEngine {
    constructor() {
        this.roomSystem = new RoomSystem(rooms);
        this.combatSystem = new CombatSystem(enemies);
        this.inventorySystem = new InventorySystem(items);
        this.puzzleSystem = new PuzzleSystem(puzzles);
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
            gold: 10
        };
    }

    processCommand(playerId, command, playerState) {
        const parts = command.toLowerCase().trim().split(' ');
        const verb = parts[0];
        const args = parts.slice(1);

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
                const direction = verb === 'go' || verb === 'move' ? args[0] : verb;
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

            case 'stats':
            case 'status':
                return this.handleStats(playerState);

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
        const description = this.roomSystem.getRoomDescription(
            playerState.currentRoom,
            { playersInRoom: [] } // TODO: Add multiplayer player tracking
        );
        return { message: description };
    }

    handleMove(playerId, direction, playerState) {
        const result = this.roomSystem.move(playerState.currentRoom, direction);

        if (result.success) {
            if (this.roomSystem.canEnterRoom(result.roomId, playerState)) {
                playerState.currentRoom = result.roomId;
                const newRoomDesc = this.roomSystem.getRoomDescription(result.roomId, {});
                return {
                    message: `${result.message}\n${newRoomDesc}`,
                    roomChanged: true
                };
            } else {
                return {
                    message: "That way is blocked. You need something to proceed."
                };
            }
        }

        return { message: result.message };
    }

    handleTake(itemName, playerState) {
        const room = this.roomSystem.getRoom(playerState.currentRoom);
        const result = this.inventorySystem.takeItem(itemName, playerState, room);
        return { message: result.message };
    }

    handleDrop(itemName, playerState) {
        const room = this.roomSystem.getRoom(playerState.currentRoom);
        const result = this.inventorySystem.dropItem(itemName, playerState, room);
        return { message: result.message };
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
                playerState.exp += result.exp || 0;
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
        stats += `📈 Level: ${playerState.level} (${playerState.exp} XP)\n`;
        stats += `💰 Gold: ${playerState.gold}\n`;
        stats += `🧩 Puzzles Solved: ${playerState.solvedPuzzles.length}\n`;

        if (playerState.equipment && Object.keys(playerState.equipment).length > 0) {
            stats += `\n⚔️  Equipment:\n`;
            for (const [slot, item] of Object.entries(playerState.equipment)) {
                stats += `  ${slot}: ${item}\n`;
            }
        }

        return { message: stats };
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

📊 Character:
  stats               - Show character stats
  help                - Show this help

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
