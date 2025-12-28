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
        return coordData.newExits || {};
    } catch (err) {
        console.error('Error loading exits:', err);
        return {};
    }
}

// Save coordinates and exits
function saveCoordinatesAndExits(coordinates, exits) {
    try {
        const coordData = JSON.parse(readFileSync(
            path.join(__dirname, '../../../scripts/linear-world-connections.json'),
            'utf8'
        ));
        
        coordData.coordinates = coordinates;
        coordData.newExits = exits;
        
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
        
        const mapData = Object.keys(rooms).map(roomId => {
            const room = rooms[roomId];
            const coord = coordinates[roomId] || { x: 0, y: 0, z: 0 };
            const roomExits = exits[roomId] || {};
            
            return {
                id: roomId,
                name: room.name,
                description: room.description,
                x: coord.x,
                y: coord.y,
                z: coord.z,
                exits: roomExits,
                items: room.items || [],
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
        
        // Update exits TO this room from others
        for (const [otherRoomId, otherExits] of Object.entries(exits)) {
            if (otherRoomId === roomId) continue;
            
            for (const [dir, targetId] of Object.entries(otherExits)) {
                if (targetId === roomId && coordinates[otherRoomId]) {
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
        
        if (saveCoordinatesAndExits(coordinates, exits)) {
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
            res.json({ success: true, roomId, exits });
        } else {
            res.status(500).json({ success: false, error: 'Failed to save' });
        }
    } catch (err) {
        console.error('Error updating exits:', err);
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
        
        // Second pass: create missing connections between adjacent rooms
        for (const [roomId, roomCoord] of Object.entries(coordinates)) {
            if (!exits[roomId]) exits[roomId] = {};
            
            for (const [otherRoomId, otherCoord] of Object.entries(coordinates)) {
                if (otherRoomId === roomId) continue;
                
                const dx = Math.abs(otherCoord.x - roomCoord.x);
                const dy = Math.abs(otherCoord.y - roomCoord.y);
                const dz = Math.abs(otherCoord.z - roomCoord.z);
                
                // Check if adjacent
                const isAdjacent = 
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0);
                
                if (isAdjacent) {
                    // Check if connection already exists
                    const hasConnection = Object.values(exits[roomId]).includes(otherRoomId);
                    
                    if (!hasConnection) {
                        // Create bidirectional connection
                        const dir = calculateDirection(roomCoord, otherCoord);
                        if (dir) {
                            exits[roomId][dir] = otherRoomId;
                            addedCount++;
                            
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
        }
        
        if (saveCoordinatesAndExits(coordinates, exits)) {
            res.json({
                success: true,
                message: `Cleaned up ${removedCount} non-adjacent exits, added ${addedCount} missing adjacent connections`,
                removedCount,
                addedCount
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

