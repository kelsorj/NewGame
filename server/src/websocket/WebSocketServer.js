// WebSocket Server - Real-time communication
import { WebSocketServer } from 'ws';
import { PlayerManager } from './PlayerManager.js';

export class GameWebSocketServer {
    constructor(server, gameState, gameEngine) {
        this.wss = new WebSocketServer({ server });
        this.gameState = gameState;
        this.playerManager = new PlayerManager(gameState, gameEngine);
        this.connectionToPlayer = new Map(); // ws -> playerId

        this.setupWebSocket();
    }

    setupWebSocket() {
        this.wss.on('connection', (ws) => {
            console.log('New WebSocket connection');

            ws.on('message', (data) => {
                this.handleMessage(ws, data);
            });

            ws.on('close', () => {
                this.handleDisconnect(ws);
            });

            ws.on('error', (error) => {
                console.error('WebSocket error:', error);
            });

            // Send welcome message
            this.sendToClient(ws, {
                type: 'connected',
                message: 'Connected to Middle Earth Adventure Server'
            });
        });

        console.log('WebSocket server initialized');
    }

    handleMessage(ws, data) {
        try {
            const message = JSON.parse(data.toString());

            switch (message.type) {
                case 'join':
                    this.handleJoin(ws, message.playerName);
                    break;

                case 'command':
                    this.handleCommand(ws, message.command);
                    break;

                case 'ping':
                    this.sendToClient(ws, { type: 'pong' });
                    break;

                default:
                    this.sendToClient(ws, {
                        type: 'error',
                        message: `Unknown message type: ${message.type}`
                    });
            }
        } catch (error) {
            console.error('Error handling message:', error);
            this.sendToClient(ws, {
                type: 'error',
                message: 'Invalid message format'
            });
        }
    }

    handleJoin(ws, playerName) {
        if (!playerName || playerName.trim().length === 0) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'Please provide a valid player name'
            });
            return;
        }

        // Create player
        const result = this.playerManager.createPlayer(playerName.trim(), ws);

        if (result.success) {
            // Store connection mapping
            this.connectionToPlayer.set(ws, result.playerId);

            // Send success response
            this.sendToClient(ws, {
                type: 'joined',
                playerId: result.playerId,
                playerState: result.playerState,
                message: result.message
            });

            // Send initial look
            const lookResult = this.playerManager.handlePlayerCommand(
                result.playerId,
                'look'
            );

            this.sendToClient(ws, {
                type: 'game_output',
                message: lookResult.message,
                playerState: result.playerState
            });

            // Notify other players
            this.gameState.broadcastToRoom(
                result.playerState.currentRoom,
                `${playerName} has entered the realm!`,
                result.playerId
            );

            console.log(`Player joined: ${playerName} (${result.playerId})`);
        } else {
            this.sendToClient(ws, {
                type: 'error',
                message: result.message
            });
        }
    }

    handleCommand(ws, command) {
        const playerId = this.connectionToPlayer.get(ws);

        if (!playerId) {
            this.sendToClient(ws, {
                type: 'error',
                message: 'You must join the game first'
            });
            return;
        }

        // Process command
        const result = this.playerManager.handlePlayerCommand(playerId, command);
        const playerState = this.gameState.getPlayer(playerId);

        // Send result to player
        this.sendToClient(ws, {
            type: 'game_output',
            message: result.message,
            playerState
        });
    }

    handleDisconnect(ws) {
        const playerId = this.connectionToPlayer.get(ws);

        if (playerId) {
            console.log(`Player disconnecting: ${playerId}`);
            // Immediately remove player and persist state
            this.playerManager.removePlayer(playerId);
            this.connectionToPlayer.delete(ws);
        }

        console.log('WebSocket connection closed');
    }

    sendToClient(ws, data) {
        if (ws.readyState === 1) { // WebSocket.OPEN
            ws.send(JSON.stringify(data));
        }
    }

    broadcast(data) {
        this.wss.clients.forEach((client) => {
            this.sendToClient(client, data);
        });
    }

    getStats() {
        return {
            connectedClients: this.wss.clients.size,
            activePlayers: this.gameState.getActivePlayers()
        };
    }
}
