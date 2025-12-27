// Player Manager - Handles player sessions and authentication
import { v4 as uuidv4 } from 'uuid';
import { SaveManager } from '../state/SaveManager.js';

export class PlayerManager {
    constructor(gameState, gameEngine) {
        this.gameState = gameState;
        this.gameEngine = gameEngine;
        this.sessionTimeouts = new Map(); // playerId -> timeout
    }

    createPlayer(playerName, ws) {
        const playerId = uuidv4();

        // If a player with this name already exists (e.g., from a previous session), clean it up first
        const existingEntry = Array.from(this.gameState.playerNames.entries()).find(([, name]) => name === playerName);
        if (existingEntry) {
            const [existingId] = existingEntry;
            // Remove old player data and any lingering connection
            this.gameState.removePlayer(existingId);
            this.gameState.playerNames.delete(existingId);
            this.gameState.playerConnections.delete(existingId);
        }

        // Attempt to load saved state (by name)
        let playerState = SaveManager.loadPlayer(playerName);
        if (!playerState) {
            // No saved state, create a fresh player
            playerState = this.gameEngine.createNewPlayer(playerName);
        } else {
            // Ensure visited rooms arrays exist for backward compatibility
            if (!playerState.visitedRooms) {
                playerState.visitedRooms = playerState.currentRoom ? [playerState.currentRoom] : ['bag_end'];
            }
            if (!playerState.recentRooms) {
                playerState.recentRooms = playerState.currentRoom ? [playerState.currentRoom] : ['bag_end'];
            }
        }

        // Add to game state (this will insert the new playerId)
        this.gameState.addPlayer(playerId, playerName, playerState, ws);

        // Set session timeout (30 minutes of inactivity)
        this.resetSessionTimeout(playerId);

        console.log(`Player created: ${playerName} (${playerId})`);

        return {
            success: true,
            playerId,
            playerState,
            message: `Welcome to Middle Earth, ${playerName}!`
        };
    }

    removePlayer(playerId) {
        const playerName = this.gameState.playerNames.get(playerId);
        const playerState = this.gameState.getPlayer(playerId);

        if (playerState) {
            // Notify other players in the same room
            this.gameState.broadcastToRoom(
                playerState.currentRoom,
                `${playerName} has left the realm.`,
                playerId
            );

            // Persist state before removing
            SaveManager.savePlayer(playerName, playerState);
        }

        // Clear session timeout
        const timeout = this.sessionTimeouts.get(playerId);
        if (timeout) {
            clearTimeout(timeout);
            this.sessionTimeouts.delete(playerId);
        }

        // Remove from game state
        this.gameState.removePlayer(playerId);

        console.log(`Player removed: ${playerName} (${playerId})`);
    }

    handlePlayerCommand(playerId, command) {
        const playerState = this.gameState.getPlayer(playerId);
        if (!playerState) {
            return { message: "Player not found. Please reconnect." };
        }

        const playerName = this.gameState.playerNames.get(playerId);
        const commandLower = command.toLowerCase().trim();

        // Handle save command
        if (commandLower === 'save' || commandLower === 'save game') {
            try {
                SaveManager.savePlayer(playerName, playerState);
                return { message: `💾 Game saved successfully! Your progress has been saved.` };
            } catch (err) {
                console.error('Save error:', err);
                return { message: `❌ Failed to save game: ${err.message}` };
            }
        }

        // Handle load command
        if (commandLower === 'load' || commandLower === 'load game') {
            try {
                const savedState = SaveManager.loadPlayer(playerName);
                if (savedState) {
                    // Merge saved state with current player state
                    Object.assign(playerState, savedState);
                    this.gameState.updatePlayer(playerId, playerState);
                    
                    // Get room description for the loaded state
                    const roomDesc = this.gameEngine.roomSystem.getRoomDescription(playerState.currentRoom, {});
                    return { message: `📂 Game loaded successfully! Welcome back, ${playerName}.\n${roomDesc}` };
                } else {
                    return { message: `❌ No saved game found. Start playing and use 'save' to save your progress.` };
                }
            } catch (err) {
                console.error('Load error:', err);
                return { message: `❌ Failed to load game: ${err.message}` };
            }
        }

        // Reset session timeout on activity
        this.resetSessionTimeout(playerId);

        // Store the previous room for movement notifications
        const previousRoom = playerState.currentRoom;

        // Process command
        const result = this.gameEngine.processCommand(playerId, command, playerState);

        // Update player state
        this.gameState.updatePlayer(playerId, playerState);

        // Handle room changes for multiplayer notifications
        if (result.roomChanged) {
            // Notify players in old room
            this.gameState.broadcastToRoom(
                previousRoom,
                `${playerName} has left.`,
                playerId
            );

            // Notify players in new room
            this.gameState.broadcastToRoom(
                playerState.currentRoom,
                `${playerName} has arrived.`,
                playerId
            );
        }

        return result;
    }

    resetSessionTimeout(playerId) {
        // Clear existing timeout
        const existingTimeout = this.sessionTimeouts.get(playerId);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
        }

        // Set new timeout (30 minutes)
        const timeout = setTimeout(() => {
            console.log(`Session timeout for player ${playerId}`);
            this.removePlayer(playerId);
        }, 30 * 60 * 1000);

        this.sessionTimeouts.set(playerId, timeout);
    }

    getOnlinePlayers() {
        const players = [];
        for (const [playerId, playerName] of this.gameState.playerNames.entries()) {
            const playerState = this.gameState.getPlayer(playerId);
            if (playerState) {
                players.push({
                    name: playerName,
                    level: playerState.level,
                    currentRoom: playerState.currentRoom
                });
            }
        }
        return players;
    }

    handlePlayerDisconnect(playerId) {
        console.log(`Player disconnected: ${playerId}`);
        // Give them a grace period to reconnect (2 minutes)
        setTimeout(() => {
            // Check if they've reconnected
            const ws = this.gameState.getPlayerConnection(playerId);
            if (!ws || ws.readyState !== 1) {
                this.removePlayer(playerId);
            }
        }, 2 * 60 * 1000);
    }
}
