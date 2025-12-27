// Game State - Centralized state management
export class GameState {
    constructor() {
        this.players = new Map(); // playerId -> playerState
        this.playerConnections = new Map(); // playerId -> WebSocket
        this.playerNames = new Map(); // playerId -> playerName
        this.roomStates = new Map(); // roomId -> { items: [...], enemies: [...] }
    }

    addPlayer(playerId, playerName, playerState, ws) {
        this.players.set(playerId, playerState);
        this.playerConnections.set(playerId, ws);
        this.playerNames.set(playerId, playerName);
    }

    removePlayer(playerId) {
        this.players.delete(playerId);
        this.playerConnections.delete(playerId);
        this.playerNames.delete(playerId);
    }

    getPlayer(playerId) {
        return this.players.get(playerId);
    }

    updatePlayer(playerId, playerState) {
        this.players.set(playerId, playerState);
    }

    getPlayerConnection(playerId) {
        return this.playerConnections.get(playerId);
    }

    getAllPlayers() {
        return Array.from(this.players.entries());
    }

    getPlayersInRoom(roomId) {
        const playersInRoom = [];

        for (const [playerId, playerState] of this.players.entries()) {
            if (playerState.currentRoom === roomId) {
                const playerName = this.playerNames.get(playerId);
                playersInRoom.push(playerName);
            }
        }

        return playersInRoom;
    }

    broadcastToRoom(roomId, message, excludePlayerId = null) {
        for (const [playerId, playerState] of this.players.entries()) {
            if (playerState.currentRoom === roomId && playerId !== excludePlayerId) {
                const ws = this.playerConnections.get(playerId);
                if (ws && ws.readyState === 1) { // WebSocket.OPEN
                    ws.send(JSON.stringify({
                        type: 'room_event',
                        message
                    }));
                }
            }
        }
    }

    getActivePlayers() {
        return this.players.size;
    }

    // Room state management - track items/enemies that have been removed
    getRoomState(roomId, defaultItems = [], defaultEnemies = []) {
        if (!this.roomStates.has(roomId)) {
            // Initialize room state with default items/enemies
            this.roomStates.set(roomId, {
                items: [...defaultItems],
                enemies: [...defaultEnemies]
            });
        }
        return this.roomStates.get(roomId);
    }

    removeItemFromRoom(roomId, itemId) {
        const roomState = this.getRoomState(roomId);
        const index = roomState.items.indexOf(itemId);
        if (index > -1) {
            roomState.items.splice(index, 1);
        }
    }

    addItemToRoom(roomId, itemId) {
        const roomState = this.getRoomState(roomId);
        if (!roomState.items.includes(itemId)) {
            roomState.items.push(itemId);
        }
    }

    removeEnemyFromRoom(roomId, enemyId) {
        const roomState = this.getRoomState(roomId);
        const index = roomState.enemies.indexOf(enemyId);
        if (index > -1) {
            roomState.enemies.splice(index, 1);
        }
    }
}
