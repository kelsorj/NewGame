// Server Entry Point
import express from 'express';
import { createServer } from 'http';
import { GameEngine } from './engine/GameEngine.js';
import { GameState } from './state/GameState.js';
import { GameWebSocketServer } from './websocket/WebSocketServer.js';
import { SaveManager } from './state/SaveManager.js';
import * as mapEditor from './api/mapEditor.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        players: gameState.getActivePlayers()
    });
});

// Save player state endpoint (by name)
app.post('/save/:playerName', (req, res) => {
    const { playerName } = req.params;
    const state = req.body;
    try {
        SaveManager.savePlayer(playerName, state);
        res.json({ status: 'saved', playerName });
    } catch (err) {
        console.error('Save error:', err);
        res.status(500).json({ error: 'Failed to save' });
    }
});

// Load player state endpoint (by name)
app.get('/load/:playerName', (req, res) => {
    const { playerName } = req.params;
    try {
        const state = SaveManager.loadPlayer(playerName);
        if (state) {
            res.json({ status: 'loaded', playerName, state });
        } else {
            res.status(404).json({ error: 'No saved state' });
        }
    } catch (err) {
        console.error('Load error:', err);
        res.status(500).json({ error: 'Failed to load' });
    }
});

// Stats endpoint
app.get('/stats', (req, res) => {
    res.json({
        activePlayers: gameState.getActivePlayers(),
        ...wsServer.getStats()
    });
});

// Map Editor API endpoints
app.get('/api/map/data', mapEditor.getMapData);
app.post('/api/map/coordinates', mapEditor.updateRoomCoordinates);
app.post('/api/map/exits', mapEditor.updateRoomExits);
app.get('/api/map/overlaps', mapEditor.getOverlaps);
app.post('/api/map/cleanup', mapEditor.cleanupExits);
app.post('/api/map/apply', mapEditor.applyChanges);

// Initialize game systems
console.log('Initializing Middle Earth Adventure Server...');
const gameState = new GameState();
const gameEngine = new GameEngine(gameState);
const wsServer = new GameWebSocketServer(server, gameState, gameEngine);

console.log('✓ Game Engine initialized');
console.log('✓ Game State initialized');
console.log('✓ WebSocket Server initialized');

// Start server
server.listen(PORT, () => {
    console.log(`\n🏔️  MIDDLE EARTH ADVENTURE SERVER 🏔️`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`🌐 Server running on port ${PORT}`);
    console.log(`🔌 WebSocket ready for connections at ws://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`📈 Stats: http://localhost:${PORT}/stats`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
