import { rooms } from '../data/rooms.js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load current coordinates
function loadCoordinates() {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));
        return coordData.coordinates || {};
    } catch (err) {
        console.error('Error loading coordinates:', err);
        return {};
    }
}

// Load current exits
function loadExits() {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));
        // Support both 'exits' and 'newExits' for backward compatibility
        return coordData.exits || coordData.newExits || {};
    } catch (err) {
        console.error('Error loading exits:', err);
        return {};
    }
}

// Load exit configurations (locked/hidden exits with keys)
function loadExitConfigs() {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));
        return coordData.exitConfigs || {};
    } catch (err) {
        console.error('Error loading exit configs:', err);
        return {};
    }
}

// Save coordinates and exits
function loadRoomDefinitions() {
    try {
        const filePath = path.join(__dirname, '../../../scripts/linear-world-connections.json');
        const data = JSON.parse(readFileSync(filePath, 'utf-8'));
        return data.roomDefinitions || {};
    } catch (err) {
        console.error('Error loading room definitions:', err);
        return {};
    }
}

function saveRoomDefinitions(roomDefinitions) {
    try {
        const filePath = path.join(__dirname, '../../../scripts/linear-world-connections.json');
        const data = JSON.parse(readFileSync(filePath, 'utf-8'));
        data.roomDefinitions = roomDefinitions;
        writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error('Error saving room definitions:', err);
        return false;
    }
}

function saveCoordinatesAndExits(coordinates, exits, exitConfigs = null) {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));

        coordData.coordinates = coordinates;
        coordData.exits = exits; // Use 'exits' instead of 'newExits' for consistency
        if (exitConfigs !== null) {
            coordData.exitConfigs = exitConfigs;
        }

        writeFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            JSON.stringify(coordData, null, 2),
            'utf8'
        );
        return true;
    } catch (err) {
        console.error('Error saving coordinates:', err);
        return false;
    }
}

// Get all rooms with their data
export function getMapData(req, res) {
    try {
        const coordinates = loadCoordinates();
        const exits = loadExits();
        const exitConfigs = loadExitConfigs();
        const roomDefinitions = loadRoomDefinitions();

        const mapData = Object.keys(rooms).map(roomId => {
            const room = rooms[roomId];
            const coord = coordinates[roomId] || { x: 0, y: 0, z: 0 };
            const roomExits = exits[roomId] || {};
            // Merge exitConfig from JSON file with room data (room data takes precedence)
            const roomExitConfig = { ...exitConfigs[roomId], ...(room.exitConfig || {}) };

            // Apply naming/desc/item overrides from DB
            const overrides = roomDefinitions[roomId] || {};
            const finalName = overrides.name !== undefined ? overrides.name : room.name;
            const finalDesc = overrides.description !== undefined ? overrides.description : room.description;
            const finalItems = overrides.items !== undefined ? overrides.items : (room.items || []);

            // Also update in-memory room object to match (so game logic sees it if it uses this reference)
            if (overrides.name) room.name = overrides.name;
            if (overrides.description) room.description = overrides.description;
            if (overrides.items) room.items = overrides.items;

            return {
                id: roomId,
                name: finalName,
                description: finalDesc,
                x: coord.x,
                y: coord.y,
                z: coord.z,
                exits: roomExits,
                exitConfig: roomExitConfig,
                items: finalItems,
                enemies: room.enemies || []
            };
        });

        res.json({
            success: true,
            rooms: mapData,
            totalRooms: mapData.length
        });
    } catch (err) {
        console.error('Error getting map data:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Calculate direction from one coordinate to another
function calculateDirection(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dz = to.z - from.z;

    // Vertical movement
    if (dz > 0) return 'up';
    if (dz < 0) return 'down';

    // Horizontal movement
    if (dx === 0 && dy === 0) return null; // Same position

    // Cardinal directions
    if (dx === 0 && dy > 0) return 'north';
    if (dx === 0 && dy < 0) return 'south';
    if (dx > 0 && dy === 0) return 'east';
    if (dx < 0 && dy === 0) return 'west';

    // Diagonal directions
    if (dx > 0 && dy > 0) return 'northeast';
    if (dx < 0 && dy > 0) return 'northwest';
    if (dx > 0 && dy < 0) return 'southeast';
    if (dx < 0 && dy < 0) return 'southwest';

    return null; // Too far or invalid
}

// Get opposite direction
function getOppositeDirection(dir) {
    const opposites = {
        north: 'south',
        south: 'north',
        east: 'west',
        west: 'east',
        northeast: 'southwest',
        southwest: 'northeast',
        northwest: 'southeast',
        southeast: 'northwest',
        up: 'down',
        down: 'up'
    };
    return opposites[dir] || null;
}

// Update room coordinates and adjust exits
export function updateRoomCoordinates(req, res) {
    try {
        const { roomId, x, y, z } = req.body;

        if (!roomId || typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
            return res.status(400).json({ success: false, error: 'Invalid parameters' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const coordinates = loadCoordinates();
        const exits = loadExits();
        const oldCoord = coordinates[roomId];

        // Check for overlaps
        const overlaps = [];
        for (const [id, coord] of Object.entries(coordinates)) {
            if (id !== roomId && coord.x === x && coord.y === y && coord.z === z) {
                overlaps.push(id);
            }
        }

        if (overlaps.length > 0) {
            return res.status(400).json({
                success: false,
                error: `Overlap detected with: ${overlaps.join(', ')}`,
                overlaps
            });
        }

        // Update coordinates
        coordinates[roomId] = { x, y, z };
        const newCoord = { x, y, z };

        // Update exits FROM this room to others
        if (exits[roomId]) {
            const updatedExits = {};
            for (const [dir, targetId] of Object.entries(exits[roomId])) {
                if (coordinates[targetId]) {
                    const targetCoord = coordinates[targetId];

                    // Calculate distance
                    const dx = Math.abs(targetCoord.x - newCoord.x);
                    const dy = Math.abs(targetCoord.y - newCoord.y);
                    const dz = Math.abs(targetCoord.z - newCoord.z);

                    // Only keep connections to adjacent rooms (1 unit away, or 1 unit diagonally)
                    // For same level: max 1 unit in x and y
                    // For different levels: must be exactly 1 unit in z and same x,y
                    const isAdjacent =
                        (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) || // Same level, adjacent
                        (dz === 1 && dx === 0 && dy === 0); // Different level, directly above/below

                    if (isAdjacent) {
                        const newDir = calculateDirection(newCoord, targetCoord);

                        if (newDir) {
                            // Update the direction
                            updatedExits[newDir] = targetId;

                            // Update reverse connection
                            if (!exits[targetId]) exits[targetId] = {};
                            // Remove old reverse connection
                            for (const [targetDir, targetTargetId] of Object.entries(exits[targetId])) {
                                if (targetTargetId === roomId) {
                                    delete exits[targetId][targetDir];
                                }
                            }
                            // Add new reverse connection
                            const oppositeDir = getOppositeDirection(newDir);
                            if (oppositeDir) {
                                exits[targetId][oppositeDir] = roomId;
                            }
                        }
                    }
                    // If not adjacent, remove the connection
                }
            }
            exits[roomId] = updatedExits;
        } else {
            exits[roomId] = {};
        }

        // Auto-create exits to adjacent rooms that don't have connections yet
        // Connections are enabled by default, but can be manually disabled via the UI
        for (const [otherRoomId, otherCoord] of Object.entries(coordinates)) {
            if (otherRoomId === roomId) continue;

            const dx = Math.abs(otherCoord.x - newCoord.x);
            const dy = Math.abs(otherCoord.y - newCoord.y);
            const dz = Math.abs(otherCoord.z - newCoord.z);

            // Check if adjacent
            const isAdjacent =
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                (dz === 1 && dx === 0 && dy === 0);

            if (isAdjacent) {
                // Check if we already have an exit to this room
                const hasExit = Object.values(exits[roomId] || {}).includes(otherRoomId);

                if (!hasExit) {
                    // Create bidirectional connection
                    const dir = calculateDirection(newCoord, otherCoord);
                    if (dir) {
                        if (!exits[roomId]) exits[roomId] = {};
                        exits[roomId][dir] = otherRoomId;

                        // Create reverse connection
                        if (!exits[otherRoomId]) exits[otherRoomId] = {};
                        const oppositeDir = getOppositeDirection(dir);
                        if (oppositeDir) {
                            // Remove any existing connection from otherRoomId to roomId
                            for (const [existingDir, existingTarget] of Object.entries(exits[otherRoomId])) {
                                if (existingTarget === roomId) {
                                    delete exits[otherRoomId][existingDir];
                                }
                            }
                            exits[otherRoomId][oppositeDir] = roomId;
                        }
                    }
                }
            }
        }

        // Collect all rooms that were connected to the moved room (for local recalculation)
        const connectedRoomIds = new Set();

        // Update exits TO this room from others
        for (const [otherRoomId, otherExits] of Object.entries(exits)) {
            if (otherRoomId === roomId) continue;

            for (const [dir, targetId] of Object.entries(otherExits)) {
                if (targetId === roomId && coordinates[otherRoomId]) {
                    connectedRoomIds.add(otherRoomId);
                    const otherCoord = coordinates[otherRoomId];

                    // Calculate distance
                    const dx = Math.abs(newCoord.x - otherCoord.x);
                    const dy = Math.abs(newCoord.y - otherCoord.y);
                    const dz = Math.abs(newCoord.z - otherCoord.z);

                    // Only keep connections to adjacent rooms
                    const isAdjacent =
                        (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) || // Same level, adjacent
                        (dz === 1 && dx === 0 && dy === 0); // Different level, directly above/below

                    if (isAdjacent) {
                        const newDir = calculateDirection(otherCoord, newCoord);

                        if (newDir) {
                            // Update the direction
                            delete exits[otherRoomId][dir];
                            exits[otherRoomId][newDir] = roomId;
                        } else {
                            // Connection is invalid, remove it
                            delete exits[otherRoomId][dir];
                        }
                    } else {
                        // Room is no longer adjacent, remove connection
                        delete exits[otherRoomId][dir];
                    }
                }
            }
        }

        // Also collect rooms that the moved room connects TO
        if (exits[roomId]) {
            for (const targetId of Object.values(exits[roomId])) {
                if (targetId && coordinates[targetId]) {
                    connectedRoomIds.add(targetId);
                }
            }
        }

        // Recalculate all exits for connected rooms (local recalculation)
        for (const connectedRoomId of connectedRoomIds) {
            if (!coordinates[connectedRoomId]) continue;

            const connectedCoord = coordinates[connectedRoomId];
            const updatedConnectedExits = {};

            // Recalculate exits FROM this connected room
            if (exits[connectedRoomId]) {
                for (const [dir, targetId] of Object.entries(exits[connectedRoomId])) {
                    if (!coordinates[targetId]) continue;

                    const targetCoord = coordinates[targetId];
                    const dx = Math.abs(targetCoord.x - connectedCoord.x);
                    const dy = Math.abs(targetCoord.y - connectedCoord.y);
                    const dz = Math.abs(targetCoord.z - connectedCoord.z);

                    const isAdjacent =
                        (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                        (dz === 1 && dx === 0 && dy === 0);

                    if (isAdjacent) {
                        const correctDir = calculateDirection(connectedCoord, targetCoord);
                        if (correctDir) {
                            updatedConnectedExits[correctDir] = targetId;

                            // Update reverse connection
                            if (!exits[targetId]) exits[targetId] = {};
                            // Remove old reverse
                            for (const [targetDir, targetTargetId] of Object.entries(exits[targetId])) {
                                if (targetTargetId === connectedRoomId) {
                                    delete exits[targetId][targetDir];
                                }
                            }
                            // Add new reverse
                            const oppositeDir = getOppositeDirection(correctDir);
                            if (oppositeDir) {
                                exits[targetId][oppositeDir] = connectedRoomId;
                            }
                        }
                    }
                }
            }

            // Auto-create missing adjacent connections for this connected room
            // Connections are enabled by default, but can be manually disabled via the UI
            for (const [otherRoomId, otherCoord] of Object.entries(coordinates)) {
                if (otherRoomId === connectedRoomId) continue;

                const dx = Math.abs(otherCoord.x - connectedCoord.x);
                const dy = Math.abs(otherCoord.y - connectedCoord.y);
                const dz = Math.abs(otherCoord.z - connectedCoord.z);

                const isAdjacent =
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0);

                if (isAdjacent) {
                    const hasExit = Object.values(updatedConnectedExits).includes(otherRoomId);
                    if (!hasExit) {
                        const dir = calculateDirection(connectedCoord, otherCoord);
                        if (dir) {
                            updatedConnectedExits[dir] = otherRoomId;

                            // Create reverse connection
                            if (!exits[otherRoomId]) exits[otherRoomId] = {};
                            const oppositeDir = getOppositeDirection(dir);
                            if (oppositeDir) {
                                // Remove any existing connection from otherRoomId to connectedRoomId
                                for (const [existingDir, existingTarget] of Object.entries(exits[otherRoomId])) {
                                    if (existingTarget === connectedRoomId) {
                                        delete exits[otherRoomId][existingDir];
                                    }
                                }
                                exits[otherRoomId][oppositeDir] = connectedRoomId;
                            }
                        }
                    }
                }
            }

            exits[connectedRoomId] = updatedConnectedExits;
        }

        if (saveCoordinatesAndExits(coordinates, exits)) {
            // Trigger hot reload
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }

            res.json({
                success: true,
                roomId,
                coordinates: { x, y, z },
                exits: exits[roomId] || {},
                message: 'Coordinates and exits updated'
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error updating coordinates:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Update room exits
export function updateRoomExits(req, res) {
    try {
        const { roomId, exits } = req.body;

        if (!roomId || !exits || typeof exits !== 'object') {
            return res.status(400).json({ success: false, error: 'Invalid parameters' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const currentExits = loadExits();
        currentExits[roomId] = exits;

        if (saveCoordinatesAndExits(loadCoordinates(), currentExits)) {
            // Trigger hot reload
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }
            res.json({ success: true, roomId, exits });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error updating exits:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Update exit configuration (locked/hidden exits with keys)
export function updateExitConfig(req, res) {
    try {
        const { roomId, direction, config } = req.body;

        if (!roomId || !direction) {
            return res.status(400).json({ success: false, error: 'Room ID and direction required' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const exitConfigs = loadExitConfigs();
        if (!exitConfigs[roomId]) {
            exitConfigs[roomId] = {};
        }

        if (config === null || (config && Object.keys(config).length === 0)) {
            // Remove config if null or empty
            delete exitConfigs[roomId][direction];
            if (Object.keys(exitConfigs[roomId]).length === 0) {
                delete exitConfigs[roomId];
            }
        } else {
            exitConfigs[roomId][direction] = config;
        }

        if (saveCoordinatesAndExits(loadCoordinates(), loadExits(), exitConfigs)) {
            // Trigger hot reload
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }
            res.json({ success: true, roomId, direction, config: exitConfigs[roomId]?.[direction] || null });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error updating exit config:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Update room description and items
export function updateRoomData(req, res) {
    try {
        const { roomId, name, description, items } = req.body;

        if (!roomId) {
            return res.status(400).json({ success: false, error: 'Room ID required' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        // Load existing definitions
        const roomDefinitions = loadRoomDefinitions();
        if (!roomDefinitions[roomId]) {
            roomDefinitions[roomId] = {};
        }

        // Update room data in memory and in definitions object
        if (name !== undefined) {
            rooms[roomId].name = name;
            roomDefinitions[roomId].name = name;
        }

        if (description !== undefined) {
            rooms[roomId].description = description;
            roomDefinitions[roomId].description = description;
        }

        if (items !== undefined) {
            const itemsArray = Array.isArray(items) ? items : [];
            rooms[roomId].items = itemsArray;
            roomDefinitions[roomId].items = itemsArray;
        }

        // Save to file
        if (saveRoomDefinitions(roomDefinitions)) {
            // Trigger hot reload if available
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }

            res.json({
                success: true,
                roomId,
                name: rooms[roomId].name,
                description: rooms[roomId].description,
                items: rooms[roomId].items
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save room definitions' });
        }
    } catch (err) {
        console.error('Error updating room data:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Toggle vertical connection between rooms
export function toggleVerticalConnection(req, res) {
    try {
        const { roomId, direction, targetRoomId, enabled } = req.body;

        if (!roomId || !direction || (direction !== 'up' && direction !== 'down')) {
            return res.status(400).json({ success: false, error: 'Invalid parameters' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const coordinates = loadCoordinates();
        const exits = loadExits();

        if (!exits[roomId]) {
            exits[roomId] = {};
        }

        if (enabled) {
            // Enable connection
            if (targetRoomId && rooms[targetRoomId]) {
                exits[roomId][direction] = targetRoomId;

                // Create reverse connection
                const oppositeDir = direction === 'up' ? 'down' : 'up';
                if (!exits[targetRoomId]) {
                    exits[targetRoomId] = {};
                }
                // Remove any existing connection in opposite direction
                for (const [dir, targetId] of Object.entries(exits[targetRoomId])) {
                    if (targetId === roomId && (dir === 'up' || dir === 'down')) {
                        delete exits[targetRoomId][dir];
                    }
                }
                exits[targetRoomId][oppositeDir] = roomId;
            }
        } else {
            // Disable connection
            const oldTargetId = exits[roomId][direction];
            delete exits[roomId][direction];

            // Remove reverse connection
            if (oldTargetId && exits[oldTargetId]) {
                const oppositeDir = direction === 'up' ? 'down' : 'up';
                if (exits[oldTargetId][oppositeDir] === roomId) {
                    delete exits[oldTargetId][oppositeDir];
                }
            }
        }

        if (saveCoordinatesAndExits(coordinates, exits)) {
            // Trigger hot reload
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }

            res.json({
                success: true,
                roomId,
                direction,
                enabled,
                exits: exits[roomId] || {}
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error toggling vertical connection:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Get rooms at same x,y coordinates on different z levels
export function getVerticalNeighbors(req, res) {
    try {
        const { roomId } = req.params;

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const coordinates = loadCoordinates();
        const roomCoord = coordinates[roomId];

        if (!roomCoord) {
            return res.json({ success: true, neighbors: [] });
        }

        // Find all rooms at the same x,y but different z
        const neighbors = [];
        for (const [otherRoomId, otherCoord] of Object.entries(coordinates)) {
            if (otherRoomId !== roomId &&
                otherCoord.x === roomCoord.x &&
                otherCoord.y === roomCoord.y &&
                otherCoord.z !== roomCoord.z) {
                neighbors.push({
                    id: otherRoomId,
                    name: rooms[otherRoomId]?.name || otherRoomId,
                    x: otherCoord.x,
                    y: otherCoord.y,
                    z: otherCoord.z,
                    direction: otherCoord.z > roomCoord.z ? 'up' : 'down'
                });
            }
        }

        // Sort by Z level (ascending)
        neighbors.sort((a, b) => a.z - b.z);

        console.log(`Found ${neighbors.length} vertical neighbors for ${roomId} at (${roomCoord.x}, ${roomCoord.y}, ${roomCoord.z})`);

        res.json({ success: true, neighbors });
    } catch (err) {
        console.error('Error getting vertical neighbors:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Get overlaps
export function getOverlaps(req, res) {
    try {
        const coordinates = loadCoordinates();
        const overlapMap = new Map();

        for (const [roomId, coord] of Object.entries(coordinates)) {
            const key = `${coord.x},${coord.y},${coord.z}`;
            if (!overlapMap.has(key)) {
                overlapMap.set(key, []);
            }
            overlapMap.get(key).push(roomId);
        }

        const overlaps = Array.from(overlapMap.entries())
            .filter(([_, roomList]) => roomList.length > 1)
            .map(([coord, roomList]) => ({
                coordinate: coord,
                rooms: roomList.map(id => ({
                    id,
                    name: rooms[id]?.name || id,
                    ...coordinates[id]
                }))
            }));

        res.json({ success: true, overlaps });
    } catch (err) {
        console.error('Error getting overlaps:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Clean up all non-adjacent exits and create missing adjacent connections
export function cleanupExits(req, res) {
    try {
        const coordinates = loadCoordinates();
        const exits = loadExits();
        let removedCount = 0;
        let addedCount = 0;

        // First pass: remove non-adjacent exits
        for (const [roomId, roomExits] of Object.entries(exits)) {
            if (!coordinates[roomId]) continue;
            const roomCoord = coordinates[roomId];
            const updatedExits = {};

            for (const [dir, targetId] of Object.entries(roomExits)) {
                if (!coordinates[targetId]) {
                    removedCount++;
                    continue; // Target doesn't exist
                }

                const targetCoord = coordinates[targetId];
                const dx = Math.abs(targetCoord.x - roomCoord.x);
                const dy = Math.abs(targetCoord.y - roomCoord.y);
                const dz = Math.abs(targetCoord.z - roomCoord.z);

                // Only keep adjacent connections
                const isAdjacent =
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0);

                if (isAdjacent) {
                    // Verify direction is correct
                    const expectedDir = calculateDirection(roomCoord, targetCoord);
                    if (expectedDir === dir) {
                        updatedExits[dir] = targetId;
                    } else {
                        // Direction changed, update it
                        updatedExits[expectedDir] = targetId;
                        removedCount++;

                        // Update reverse connection
                        if (!exits[targetId]) exits[targetId] = {};
                        // Remove old reverse
                        for (const [targetDir, targetTargetId] of Object.entries(exits[targetId])) {
                            if (targetTargetId === roomId) {
                                delete exits[targetId][targetDir];
                            }
                        }
                        // Add new reverse
                        const oppositeDir = getOppositeDirection(expectedDir);
                        if (oppositeDir) {
                            exits[targetId][oppositeDir] = roomId;
                        }
                    }
                } else {
                    // Too far, remove connection
                    removedCount++;

                    // Remove reverse connection
                    if (exits[targetId]) {
                        for (const [targetDir, targetTargetId] of Object.entries(exits[targetId])) {
                            if (targetTargetId === roomId) {
                                delete exits[targetId][targetDir];
                            }
                        }
                    }
                }
            }

            exits[roomId] = updatedExits;
        }

        // Second pass: AUTO-CONNECTION DISABLED - connections must be manually created
        // This allows for dead-end rooms and manual control over connections
        // The cleanup function now only removes non-adjacent exits, it does not create new connections

        if (saveCoordinatesAndExits(coordinates, exits)) {
            // Trigger hot reload
            if (req.gameEngine) {
                req.gameEngine.reloadMap();
            }
            res.json({
                success: true,
                message: `Cleaned up ${removedCount} non-adjacent exits`,
                removedCount,
                addedCount: 0 // No longer auto-creating connections
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error cleaning up exits:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Apply changes to room files
export function applyChanges(req, res) {
    try {
        // This will trigger the apply-linear-world.mjs script
        // For now, just return success - the actual application happens via the script
        res.json({
            success: true,
            message: 'Changes saved. Run: node scripts/apply-linear-world.mjs to apply to room files.'
        });
    } catch (err) {
        console.error('Error applying changes:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Change room Z level (move up or down)
export function changeRoomZLevel(req, res) {
    try {
        const { roomId, deltaZ } = req.body;

        if (!roomId || typeof deltaZ !== 'number') {
            return res.status(400).json({ success: false, error: 'Invalid parameters' });
        }

        const coordinates = loadCoordinates();
        if (!coordinates[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        const currentCoord = coordinates[roomId];
        const newZ = currentCoord.z + deltaZ;

        // Check for overlaps at new Z level
        for (const [id, coord] of Object.entries(coordinates)) {
            if (id !== roomId && coord.x === currentCoord.x && coord.y === currentCoord.y && coord.z === newZ) {
                return res.status(400).json({
                    success: false,
                    error: `Overlap detected with room: ${id} at Z=${newZ}`
                });
            }
        }

        // Update Z coordinate
        coordinates[roomId] = { ...currentCoord, z: newZ };

        // Clean up exits that are no longer adjacent (vertical connections are preserved)
        const exits = loadExits();
        const roomExits = exits[roomId] || {};
        const updatedExits = {};

        for (const [dir, targetId] of Object.entries(roomExits)) {
            if (!coordinates[targetId]) continue;

            const targetCoord = coordinates[targetId];
            const dx = Math.abs(targetCoord.x - currentCoord.x);
            const dy = Math.abs(targetCoord.y - currentCoord.y);
            const dz = Math.abs(targetCoord.z - newZ);

            // Keep if still adjacent (horizontal or vertical)
            const isAdjacent =
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                (dz === 1 && dx === 0 && dy === 0);

            if (isAdjacent) {
                updatedExits[dir] = targetId;
            } else {
                // Remove connection from other room too
                if (exits[targetId]) {
                    for (const [targetDir, targetTargetId] of Object.entries(exits[targetId])) {
                        if (targetTargetId === roomId) {
                            delete exits[targetId][targetDir];
                        }
                    }
                }
            }
        }

        exits[roomId] = updatedExits;

        if (saveCoordinatesAndExits(coordinates, exits)) {
            res.json({
                success: true,
                roomId,
                coordinates: coordinates[roomId],
                exits: exits[roomId]
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error changing Z level:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Create a new room
export function createRoom(req, res) {
    try {
        const { roomId, name, description, x, y, z, items, enemies } = req.body;

        console.log('createRoom called with:', { roomId, name, x, y, z });

        if (!roomId) {
            return res.status(400).json({ success: false, error: 'Room ID is required' });
        }

        if (!name || name.trim() === '') {
            return res.status(400).json({ success: false, error: 'Room name is required' });
        }

        // Check if room already exists
        if (rooms[roomId]) {
            return res.status(400).json({ success: false, error: `Room with ID "${roomId}" already exists` });
        }

        const coordinates = loadCoordinates();

        // Check for overlaps
        const coordX = x !== undefined ? x : 0;
        const coordY = y !== undefined ? y : 0;
        const coordZ = z !== undefined ? z : 0;

        for (const [id, coord] of Object.entries(coordinates)) {
            if (coord.x === coordX && coord.y === coordY && coord.z === coordZ) {
                return res.status(400).json({
                    success: false,
                    error: `Overlap detected with room: ${id} at (${coordX}, ${coordY}, ${coordZ})`
                });
            }
        }

        // Create room in rooms object (in-memory)
        const newRoom = {
            name: name,
            description: description || `You are in ${name}.`,
            exits: {},
            items: items || [],
            enemies: enemies || []
        };
        rooms[roomId] = newRoom;

        // Save room definition to JSON file
        try {
            const roomDefinitions = loadRoomDefinitions();
            roomDefinitions[roomId] = newRoom;
            if (!saveRoomDefinitions(roomDefinitions)) {
                delete rooms[roomId];
                return res.status(500).json({ success: false, error: 'Failed to save room definition to JSON file' });
            }
        } catch (err) {
            console.error('Error saving room definition:', err);
            delete rooms[roomId];
            return res.status(500).json({ success: false, error: `Failed to save room definition: ${err.message}` });
        }

        // Add coordinates
        coordinates[roomId] = { x: coordX, y: coordY, z: coordZ };

        // Initialize exits
        const exits = loadExits();
        exits[roomId] = {};

        if (saveCoordinatesAndExits(coordinates, exits)) {
            res.json({
                success: true,
                roomId,
                room: rooms[roomId],
                coordinates: coordinates[roomId]
            });
        } else {
            // Rollback
            delete rooms[roomId];
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error creating room:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Delete a room
export function deleteRoom(req, res) {
    try {
        const { roomId } = req.body;

        if (!roomId) {
            return res.status(400).json({ success: false, error: 'Room ID required' });
        }

        if (!rooms[roomId]) {
            return res.status(404).json({ success: false, error: 'Room not found' });
        }

        // Prevent deletion of starting room
        if (roomId === 'bag_end') {
            return res.status(400).json({ success: false, error: 'Cannot delete the starting room (bag_end)' });
        }

        const coordinates = loadCoordinates();
        const exits = loadExits();
        const exitConfigs = loadExitConfigs();

        // Remove from coordinates
        delete coordinates[roomId];

        // Remove all exits pointing to this room
        for (const [otherRoomId, otherExits] of Object.entries(exits)) {
            if (otherRoomId === roomId) {
                delete exits[otherRoomId];
            } else {
                const updatedExits = {};
                for (const [dir, targetId] of Object.entries(otherExits)) {
                    if (targetId !== roomId) {
                        updatedExits[dir] = targetId;
                    }
                }
                exits[otherRoomId] = updatedExits;
            }
        }

        // Remove exit configs
        delete exitConfigs[roomId];
        for (const [otherRoomId, configs] of Object.entries(exitConfigs)) {
            const updatedConfigs = {};
            for (const [dir, config] of Object.entries(configs)) {
                // Check if this exit points to the deleted room
                const targetId = exits[otherRoomId]?.[dir];
                if (targetId !== roomId) {
                    updatedConfigs[dir] = config;
                }
            }
            if (Object.keys(updatedConfigs).length === 0) {
                delete exitConfigs[otherRoomId];
            } else {
                exitConfigs[otherRoomId] = updatedConfigs;
            }
        }

        // Remove from rooms (in-memory)
        delete rooms[roomId];

        // Remove from room definitions in JSON
        const roomDefinitions = loadRoomDefinitions();
        delete roomDefinitions[roomId];
        saveRoomDefinitions(roomDefinitions);

        if (saveCoordinatesAndExits(coordinates, exits, exitConfigs)) {
            res.json({
                success: true,
                roomId,
                message: 'Room deleted successfully'
            });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error deleting room:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Cleanup overlapping rooms
export function cleanupOverlaps(req, res) {
    try {
        const worldDataPath = path.join(__dirname, '../../../scripts/linear-world-connections.json');
        const worldData = JSON.parse(readFileSync(worldDataPath, 'utf-8'));

        const coordinates = worldData.coordinates || {};
        const exits = worldData.exits || {};

        function isConnectionRoom(roomId) {
            const id = roomId.toLowerCase();
            return id.includes('path_') || id.includes('road_') || id.includes('river_') ||
                id.includes('riverbank_') || id.includes('branch_') || id.includes('quest_path_') ||
                id.includes('hobbit_path_');
        }

        function isKeyRoom(roomId) {
            const id = roomId.toLowerCase();
            return id === 'bag_end' || id.includes('mount_doom') || id.includes('minas_tirith') ||
                id.includes('barad_dur') || id.includes('rivendell') || id.includes('moria') ||
                id.includes('lorien') || id.includes('edoras') || id.includes('helms_deep') ||
                id.includes('isengard') || id.includes('bree');
        }

        // Build coordinate map
        const coordMap = new Map();
        for (const [roomId, coord] of Object.entries(coordinates)) {
            const key = `${coord.x},${coord.y},${coord.z || 0}`;
            if (!coordMap.has(key)) {
                coordMap.set(key, []);
            }
            coordMap.get(key).push({ roomId, isConnection: isConnectionRoom(roomId), isKey: isKeyRoom(roomId) });
        }

        // Find overlaps and decide what to keep
        const roomsToRemove = new Set();

        for (const [key, roomList] of coordMap.entries()) {
            if (roomList.length > 1) {
                // Sort: key rooms first, then real rooms, then connection rooms
                roomList.sort((a, b) => {
                    if (a.isKey && !b.isKey) return -1;
                    if (!a.isKey && b.isKey) return 1;
                    if (!a.isConnection && b.isConnection) return -1;
                    if (a.isConnection && !b.isConnection) return 1;
                    return 0;
                });

                // Keep the first one, remove all others
                for (let i = 1; i < roomList.length; i++) {
                    roomsToRemove.add(roomList[i].roomId);
                }
            }
        }

        // Remove overlapping rooms
        for (const roomId of roomsToRemove) {
            delete coordinates[roomId];
            delete exits[roomId];

            // Remove references from other rooms
            for (const [otherRoomId, otherExits] of Object.entries(exits)) {
                if (!otherExits) continue;
                for (const [direction, targetId] of Object.entries(otherExits)) {
                    if (targetId === roomId) {
                        delete otherExits[direction];
                    }
                }
            }
        }

        // Save
        worldData.coordinates = coordinates;
        worldData.exits = exits;
        writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

        res.json({
            success: true,
            removedCount: roomsToRemove.size,
            remainingRooms: Object.keys(coordinates).length
        });
    } catch (err) {
        console.error('Error cleaning up overlaps:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

// Get terrain map for visualization
export function getTerrainMap(req, res) {
    try {
        const terrainMapPath = path.join(__dirname, '../../../scripts/terrain-map.txt');
        const terrainMapContent = readFileSync(terrainMapPath, 'utf-8');

        // Parse terrain map
        const lines = terrainMapContent.split('\n').filter(l => l !== '');
        const terrain = [];
        const labels = []; // Array of {x, y, text} for labels
        const width = Math.max(...lines.map(l => l.length));
        const height = lines.length;

        for (let y = 0; y < height; y++) {
            const line = lines[y];
            terrain[y] = [];

            let x = 0;
            while (x < width) {
                const char = x < line.length ? line[x] : ' ';

                // Check for labels in parentheses
                if (char === '(') {
                    let labelEnd = line.indexOf(')', x);
                    if (labelEnd > 0) {
                        const labelText = line.substring(x + 1, labelEnd);
                        // Convert ASCII coordinates to game coordinates
                        const SCALE_X = 1.0;
                        const SCALE_Y = 1.0;
                        const OFFSET_X = -width / 2;
                        const OFFSET_Y = height / 2;
                        const gameX = Math.round((x + OFFSET_X) * SCALE_X);
                        const gameY = Math.round((OFFSET_Y - y) * SCALE_Y);

                        labels.push({
                            x: gameX,
                            y: gameY,
                            text: labelText
                        });

                        // Fill label area with plains
                        for (let i = x; i <= labelEnd && i < width; i++) {
                            terrain[y][i] = 'plains';
                        }
                        x = labelEnd + 1;
                        continue;
                    }
                }

                // Map characters to terrain types (corrected per user definitions)
                if (char === '^') terrain[y][x] = 'mountain';
                else if (char === 'M') terrain[y][x] = 'mount_doom';  // Mount Doom
                else if (char === 'f' || char === '&') terrain[y][x] = 'forest';
                else if (char === 'h') terrain[y][x] = 'hill';
                else if (char === '|') terrain[y][x] = 'river';
                else if (char === '*') terrain[y][x] = 'hobbit_route';  // Route they took in the hobbit
                else if (char === 'p') terrain[y][x] = 'path';  // Path
                else if (char === 'R') terrain[y][x] = 'road';  // Road
                else if (char === 'G') terrain[y][x] = 'gulf';  // Gulf of water
                else if (char === 'm') terrain[y][x] = 'marsh';  // Marshes
                else if (char === 'C') terrain[y][x] = 'coast';  // Coast
                else if (char === 'O') terrain[y][x] = 'ocean';  // Ocean (deep)
                else if (char === 'S') terrain[y][x] = 'sea';  // Sea (not as deep as ocean)
                else if (char === 'L' || char === '~') terrain[y][x] = 'lake';  // Lake/water
                else if (char === '=' || char === '/' || char === '\\') terrain[y][x] = 'road';  // Road markers
                else if (char === ':') terrain[y][x] = 'shire';  // Shire area
                else terrain[y][x] = 'plains';

                x++;
            }
        }

        // Convert ASCII coordinates to game coordinates (same as reorganization script)
        const SCALE_X = 1.0;
        const SCALE_Y = 1.0;
        const OFFSET_X = -width / 2;
        const OFFSET_Y = height / 2;

        const terrainData = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const gameX = Math.round((x + OFFSET_X) * SCALE_X);
                const gameY = Math.round((OFFSET_Y - y) * SCALE_Y);
                terrainData.push({
                    x: gameX,
                    y: gameY,
                    type: terrain[y][x]
                });
            }
        }

        res.json({
            success: true,
            terrain: terrainData,
            labels: labels, // Include labels in response
            width,
            height,
            scaleX: SCALE_X,
            scaleY: SCALE_Y,
            offsetX: OFFSET_X,
            offsetY: OFFSET_Y
        });
    } catch (err) {
        console.error('Error loading terrain map:', err);
        res.status(500).json({ success: false, error: err.message });
    }
}

