#!/usr/bin/env node
/**
 * Rebuild World - Start TIGHT and CONNECTED, then morph to Middle Earth
 * 
 * Phase 1: Place all rooms in a tight connected network
 * Phase 2: Gradually adjust positions to match Middle Earth geography
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import rooms
const roomsPath = path.join(__dirname, '../server/src/data/rooms.js');
const roomsModule = await import(`file://${roomsPath}`);
const { rooms } = roomsModule;

console.log(`Loaded ${Object.keys(rooms).length} rooms from data files`);

// Assign coordinates - START TIGHT
function assignCoordinates() {
    const coordinates = {};
    const usedPositions = new Set();
    
    // Group rooms by Z level
    const roomsByLevel = {};
    const undergroundKeywords = ['mine', 'mines', 'underground', 'cave', 'tunnel', 'depth', 'chamber', 'stair', 'moria'];
    
    for (const [roomId, room] of Object.entries(rooms)) {
        const name = (room.name || '').toLowerCase();
        const desc = (room.description || '').toLowerCase();
        const isUnderground = undergroundKeywords.some(kw => name.includes(kw) || desc.includes(kw));
        
        // Determine Z level
        let z = 0;
        if (isUnderground) {
            z = -1;
        } else if (roomId.includes('minas_tirith') || roomId === 'first_level' || roomId === 'second_level' || 
                   roomId === 'third_level' || roomId === 'fourth_level' || roomId === 'fifth_level' || 
                   roomId === 'sixth_level' || roomId === 'white_tower') {
            // Minas Tirith levels
            if (roomId === 'minas_tirith_gates') z = 0;
            else if (roomId === 'first_level') z = 1;
            else if (roomId === 'second_level') z = 2;
            else if (roomId === 'third_level') z = 3;
            else if (roomId === 'fourth_level') z = 4;
            else if (roomId === 'fifth_level') z = 5;
            else if (roomId === 'sixth_level') z = 6;
            else if (roomId === 'white_tower') z = 7;
            else if (roomId.includes('stables')) z = 1;
            else if (roomId.includes('houses_of_healing') || roomId.includes('citadel') || roomId.includes('hall_of_kings')) z = 6;
            else z = 0;
        }
        
        if (!roomsByLevel[z]) roomsByLevel[z] = [];
        roomsByLevel[z].push(roomId);
    }
    
    console.log('Rooms by level:');
    for (const [z, roomList] of Object.entries(roomsByLevel).sort((a, b) => Number(a[0]) - Number(b[0]))) {
        console.log(`  Z=${z}: ${roomList.length} rooms`);
    }
    
    // Place rooms in a tight connected grid for each level
    // Start at origin (0,0) and spiral outward
    const startX = 0;
    const startY = 0;
    
    for (const [z, roomList] of Object.entries(roomsByLevel).sort((a, b) => Number(a[0]) - Number(b[0]))) {
        const zLevel = Number(z);
        let x = startX;
        let y = startY;
        let placed = 0;
        
        // Place rooms in a snake pattern to ensure connectivity
        for (const roomId of roomList) {
            // Try to place adjacent to previous room
            let placedPos = null;
            
            // First room at origin
            if (placed === 0) {
                const key = `${x},${y},${zLevel}`;
                if (!usedPositions.has(key)) {
                    usedPositions.add(key);
                    placedPos = { x, y, z: zLevel };
                }
            } else {
                // Find adjacent position to last placed room
                const lastRoom = roomList[placed - 1];
                const lastCoord = coordinates[lastRoom];
                if (lastCoord) {
                    // Try positions around last room: N, E, S, W, NE, SE, SW, NW
                    const directions = [
                        { dx: 0, dy: 1 },   // N
                        { dx: 1, dy: 0 },   // E
                        { dx: 0, dy: -1 },  // S
                        { dx: -1, dy: 0 }, // W
                        { dx: 1, dy: 1 },   // NE
                        { dx: 1, dy: -1 },  // SE
                        { dx: -1, dy: -1 }, // SW
                        { dx: -1, dy: 1 }   // NW
                    ];
                    
                    for (const dir of directions) {
                        const newX = lastCoord.x + dir.dx;
                        const newY = lastCoord.y + dir.dy;
                        const key = `${newX},${newY},${zLevel}`;
                        
                        if (!usedPositions.has(key)) {
                            usedPositions.add(key);
                            placedPos = { x: newX, y: newY, z: zLevel };
                            break;
                        }
                    }
                }
            }
            
            // If couldn't place adjacent, find any available position
            if (!placedPos) {
                // Spiral search
                for (let radius = 1; radius <= 50; radius++) {
                    let found = false;
                    for (let dx = -radius; dx <= radius && !found; dx++) {
                        for (let dy = -radius; dy <= radius && !found; dy++) {
                            if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                                const newX = startX + dx;
                                const newY = startY + dy;
                                const key = `${newX},${newY},${zLevel}`;
                                if (!usedPositions.has(key)) {
                                    usedPositions.add(key);
                                    placedPos = { x: newX, y: newY, z: zLevel };
                                    found = true;
                                }
                            }
                        }
                    }
                    if (found) break;
                }
            }
            
            if (placedPos) {
                coordinates[roomId] = placedPos;
            } else {
                // Fallback
                coordinates[roomId] = { x: startX + placed, y: startY, z: zLevel };
            }
            
            placed++;
        }
    }
    
    return coordinates;
}

// Create connections - ONLY ADJACENT
function createConnections(coordinates) {
    const exits = {};
    
    // Initialize
    for (const roomId of Object.keys(rooms)) {
        exits[roomId] = {};
    }
    
    function getDirection(room1, room2) {
        const c1 = coordinates[room1];
        const c2 = coordinates[room2];
        if (!c1 || !c2) return null;
        
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const dz = c2.z - c1.z;
        
        // Vertical (same x,y)
        if (dx === 0 && dy === 0) {
            if (dz === 1) return 'up';
            if (dz === -1) return 'down';
        }
        
        // Horizontal (same z, adjacent)
        if (dz === 0) {
            if (dx === 0 && dy === 1) return 'north';
            if (dx === 0 && dy === -1) return 'south';
            if (dx === 1 && dy === 0) return 'east';
            if (dx === -1 && dy === 0) return 'west';
            if (dx === 1 && dy === 1) return 'northeast';
            if (dx === 1 && dy === -1) return 'southeast';
            if (dx === -1 && dy === -1) return 'southwest';
            if (dx === -1 && dy === 1) return 'northwest';
        }
        
        return null;
    }
    
    // Connect all adjacent rooms
    for (const room1 of Object.keys(rooms)) {
        for (const room2 of Object.keys(rooms)) {
            if (room1 === room2) continue;
            
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) continue;
            
            const dx = Math.abs(c2.x - c1.x);
            const dy = Math.abs(c2.y - c1.y);
            const dz = Math.abs(c2.z - c1.z);
            
            // Only connect adjacent (1 unit away)
            const isAdjacent = 
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                (dz === 1 && dx === 0 && dy === 0) ||
                (dz === -1 && dx === 0 && dy === 0);
            
            if (isAdjacent) {
                const dir = getDirection(room1, room2);
                if (dir && !exits[room1][dir]) {
                    exits[room1][dir] = room2;
                    // Create reverse connection
                    const reverseDir = {
                        'north': 'south', 'south': 'north',
                        'east': 'west', 'west': 'east',
                        'northeast': 'southwest', 'southwest': 'northeast',
                        'northwest': 'southeast', 'southeast': 'northwest',
                        'up': 'down', 'down': 'up'
                    }[dir];
                    if (reverseDir && !exits[room2][reverseDir]) {
                        exits[room2][reverseDir] = room1;
                    }
                }
            }
        }
    }
    
    return exits;
}

// Verify connectivity
function verifyConnectivity(exits) {
    const visited = new Set();
    const queue = [Object.keys(rooms)[0]]; // Start from first room
    visited.add(queue[0]);
    
    while (queue.length > 0) {
        const current = queue.shift();
        const currentExits = exits[current] || {};
        for (const targetId of Object.values(currentExits)) {
            if (!visited.has(targetId)) {
                visited.add(targetId);
                queue.push(targetId);
            }
        }
    }
    
    const totalRooms = Object.keys(rooms).length;
    const reachable = visited.size;
    
    return { totalRooms, reachable, isConnected: reachable === totalRooms };
}

// Main
console.log('Rebuilding world - TIGHT and CONNECTED...');
const coordinates = assignCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms`);

// Check for overlaps
const positionCounts = {};
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!positionCounts[key]) positionCounts[key] = [];
    positionCounts[key].push(roomId);
}

const overlaps = Object.entries(positionCounts).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`⚠️  Found ${overlaps.length} overlaps (should only be vertical):`);
    overlaps.forEach(([pos, roomList]) => {
        const [x, y, z] = pos.split(',').map(Number);
        const zLevels = new Set(roomList.map(r => coordinates[r].z));
        if (zLevels.size === 1) {
            console.log(`   ${pos}: ${roomList.join(', ')}`);
        }
    });
} else {
    console.log('✅ No overlaps found!');
}

const exits = createConnections(coordinates);
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

const connectivity = verifyConnectivity(exits);
console.log(`\nConnectivity check:`);
console.log(`   Total rooms: ${connectivity.totalRooms}`);
console.log(`   Reachable: ${connectivity.reachable}`);
console.log(`   Percentage: ${(connectivity.reachable / connectivity.totalRooms * 100).toFixed(1)}%`);

if (connectivity.isConnected) {
    console.log('✅ World is FULLY CONNECTED!');
} else {
    console.log(`⚠️  ${connectivity.totalRooms - connectivity.reachable} rooms are unreachable`);
}

const outputPath = path.join(__dirname, 'linear-world-connections.json');
const outputData = {
    coordinates,
    newExits: exits,
    metadata: {
        generated: new Date().toISOString(),
        totalRooms: connectivity.totalRooms,
        totalConnections: totalConnections,
        isFullyConnected: connectivity.isConnected,
        overlaps: overlaps.length,
        phase: 'tight'
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt!`);
console.log(`   Output: ${outputPath}`);
console.log(`   Fully connected: ${connectivity.isConnected ? 'YES' : 'NO'}`);
console.log(`   Overlaps: ${overlaps.length} (should be 0 or only vertical)`);

