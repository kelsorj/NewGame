#!/usr/bin/env node

/**
 * Rebuild World - Snake Path Layout
 * 
 * Creates a long, winding snake-like path from Bag End to Mordor
 * with Mordor rooms placed at the very end of the path.
 */

import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

console.log('Building snake-like path from Bag End to Mordor...\n');

// Find Bag End and Mordor rooms
const bagEndId = 'bag_end';
const mordorRoomIds = Object.keys(rooms).filter(r => {
    const name = (rooms[r]?.name || '').toLowerCase();
    return name.includes('mordor') || name.includes('mount doom') || name.includes('sammath') || name.includes('barad');
});

const mordorTarget = mordorRoomIds[0] || 'mount_doom_sammath_naur';

console.log(`Starting from: ${bagEndId}`);
console.log(`Target: ${mordorTarget}\n`);

// Categorize rooms by region
const roomCategories = {
    shire: [],
    old_forest: [],
    barrow_downs: [],
    bree: [],
    weathertop: [],
    rivendell: [],
    moria: [],
    lothlorien: [],
    fangorn: [],
    rohan: [],
    gondor: [],
    minas_tirith: [],
    mordor: [],
    other: []
};

const roomOrder = [];

// Categorize all rooms
for (const [roomId, room] of Object.entries(rooms)) {
    const name = (room.name || '').toLowerCase();
    let category = 'other';
    
    if (name.includes('shire') || name.includes('hobbit') || name.includes('buckland') || name.includes('took') || name.includes('brandy') || name.includes('michel') || name.includes('tuckborough')) {
        category = 'shire';
    } else if (name.includes('forest') || name.includes('bombadil') || name.includes('withywindle')) {
        category = 'old_forest';
    } else if (name.includes('barrow')) {
        category = 'barrow_downs';
    } else if (name.includes('bree') || name.includes('pony')) {
        category = 'bree';
    } else if (name.includes('weathertop') || name.includes('amon')) {
        category = 'weathertop';
    } else if (name.includes('rivendell') || name.includes('elrond')) {
        category = 'rivendell';
    } else if (name.includes('moria') || name.includes('durin')) {
        category = 'moria';
    } else if (name.includes('lothlorien') || name.includes('galadriel') || name.includes('caras')) {
        category = 'lothlorien';
    } else if (name.includes('fangorn') || name.includes('treebeard') || name.includes('ent')) {
        category = 'fangorn';
    } else if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') || name.includes('helm')) {
        category = 'rohan';
    } else if (name.includes('gondor') || name.includes('pelennor') || name.includes('osgiliath') || name.includes('ithilien')) {
        category = 'gondor';
    } else if (name.includes('minas_tirith') || name.includes('tirith') || name.includes('white_tower') || name.includes('citadel')) {
        category = 'minas_tirith';
    } else if (name.includes('mordor') || name.includes('barad') || name.includes('doom') || name.includes('cirith') || name.includes('morgul')) {
        category = 'mordor';
    }
    
    roomCategories[category].push(roomId);
}

// Build ordered list: Bag End first, then regions in order, Mordor ABSOLUTELY LAST
roomOrder.push(bagEndId);

// Add all non-Mordor rooms first
for (const category of ['shire', 'old_forest', 'barrow_downs', 'bree', 'weathertop', 'rivendell', 'moria', 'lothlorien', 'fangorn', 'rohan', 'gondor', 'minas_tirith', 'other']) {
    const roomsInCategory = roomCategories[category].filter(r => r !== bagEndId && !roomOrder.includes(r));
    roomOrder.push(...roomsInCategory);
}

// NOW add all Mordor rooms at the very end
const mordorCategoryRooms = roomCategories['mordor'].filter(r => r !== bagEndId && !roomOrder.includes(r));
roomOrder.push(...mordorCategoryRooms);

// Ensure Mordor target is the absolute last room
if (roomOrder[roomOrder.length - 1] !== mordorTarget) {
    if (roomOrder.includes(mordorTarget)) {
        roomOrder.splice(roomOrder.indexOf(mordorTarget), 1);
    }
    roomOrder.push(mordorTarget);
}

console.log(`Total rooms to place: ${roomOrder.length}`);
console.log(`Categories: ${Object.keys(roomCategories).map(c => `${c}:${roomCategories[c].length}`).join(', ')}\n`);

// Generate snake-like path coordinates
const coordinates = {};
const exits = {};
const usedPositions = new Set();

// Start at origin
let currentX = 0;
let currentY = 0;
let currentZ = 0;

// Place Bag End first
coordinates[bagEndId] = { x: currentX, y: currentY, z: currentZ };
usedPositions.add(`${currentX},${currentY},${currentZ}`);

// Track Minas Tirith levels
const minasTirithLevels = {
    'minas_tirith_gates': 0,
    'first_level': 1,
    'second_level': 2,
    'third_level': 3,
    'fourth_level': 4,
    'fifth_level': 5,
    'sixth_level': 6,
    'white_tower': 7,
    'citadel_guards_hall': 7,
    'hall_of_kings': 6,
    'minas_tirith_stables': 0,
    'minas_tirith_houses_of_healing': 0
};

// Place rooms in snake-like path - make it LONG and WINDING
let direction = 0; // 0=east, 1=south, 2=west, 3=north
let stepSize = 1;
let stepsInDirection = 0;
let maxStepsInDirection = 8 + Math.floor(Math.random() * 12); // 8-20 steps before turning (longer segments)
let turnCount = 0;
let totalSteps = 0; // Track total path length

// Direction vectors
const dirVectors = {
    0: { x: 1, y: 0 },   // east
    1: { x: 0, y: -1 },  // south
    2: { x: -1, y: 0 },  // west
    3: { x: 0, y: 1 }    // north
};

for (let i = 1; i < roomOrder.length; i++) {
    const roomId = roomOrder[i];
    const room = rooms[roomId];
    if (!room) continue;
    
    const name = (room.name || '').toLowerCase();
    
    // Special handling for Minas Tirith - stack vertically
    let zLevel = currentZ;
    if (name.includes('minas_tirith') || name.includes('tirith') || name.includes('white_tower') || name.includes('citadel')) {
        for (const [mtRoom, z] of Object.entries(minasTirithLevels)) {
            if (name.includes(mtRoom.replace(/_/g, ' ')) || roomId === mtRoom) {
                zLevel = z;
                // Keep same X/Y for vertical stacking
                break;
            }
        }
    } else if (name.includes('underground') || name.includes('mine') || name.includes('cave') || name.includes('tunnel') || name.includes('depth') || name.includes('chamber')) {
        zLevel = -1;
    } else {
        zLevel = 0;
    }
    
    // Move in current direction
    let newX = currentX;
    let newY = currentY;
    
    // Snake movement: turn periodically - make it more winding
    if (stepsInDirection >= maxStepsInDirection) {
        // Turn (snake-like: alternate between right and left turns)
        direction = (direction + (turnCount % 2 === 0 ? 1 : -1)) % 4;
        if (direction < 0) direction = 3;
        stepsInDirection = 0;
        maxStepsInDirection = 8 + Math.floor(Math.random() * 12); // Longer segments
        turnCount++;
        
        // More frequent curves/wiggles for organic feel
        if (Math.random() < 0.4) {
            direction = (direction + (Math.random() < 0.5 ? 1 : -1)) % 4;
            if (direction < 0) direction = 3;
        }
        
        // Occasionally make a bigger turn (90 degrees)
        if (Math.random() < 0.2) {
            direction = (direction + 2) % 4; // 180 degree turn
        }
    }
    
    totalSteps++;
    
    // Move forward
    const vec = dirVectors[direction];
    newX = currentX + vec.x;
    newY = currentY + vec.y;
    stepsInDirection++;
    
    // Check if position is available, if not find adjacent
    let coordKey = `${newX},${newY},${zLevel}`;
    let attempts = 0;
    const maxAttempts = 20; // Increased attempts to find free space
    while (usedPositions.has(coordKey) && attempts < maxAttempts) {
        // Try adjacent positions in a spiral pattern
        const adjDirs = [
            { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 },
            { x: 1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }, { x: -1, y: 1 },
            { x: 2, y: 0 }, { x: -2, y: 0 }, { x: 0, y: 2 }, { x: 0, y: -2 },
            { x: 2, y: 1 }, { x: -2, y: 1 }, { x: 1, y: 2 }, { x: -1, y: 2 },
            { x: 2, y: -1 }, { x: -2, y: -1 }, { x: 1, y: -2 }, { x: -1, y: -2 }
        ];
        const adj = adjDirs[attempts % adjDirs.length];
        newX = currentX + adj.x;
        newY = currentY + adj.y;
        coordKey = `${newX},${newY},${zLevel}`;
        attempts++;
    }
    
    // If still overlapping after all attempts, find the nearest free position
    if (usedPositions.has(coordKey)) {
        let searchRadius = 1;
        let found = false;
        while (!found && searchRadius < 10) {
            for (let dx = -searchRadius; dx <= searchRadius && !found; dx++) {
                for (let dy = -searchRadius; dy <= searchRadius && !found; dy++) {
                    if (dx === 0 && dy === 0) continue;
                    const testX = currentX + dx;
                    const testY = currentY + dy;
                    const testKey = `${testX},${testY},${zLevel}`;
                    if (!usedPositions.has(testKey)) {
                        newX = testX;
                        newY = testY;
                        coordKey = testKey;
                        found = true;
                    }
                }
            }
            searchRadius++;
        }
    }
    
    // Assign coordinate (only if we found a free position)
    if (!usedPositions.has(coordKey)) {
        coordinates[roomId] = { x: newX, y: newY, z: zLevel };
        usedPositions.add(coordKey);
    } else {
        // Last resort: place at a completely new location
        let fallbackX = currentX + 100 + i;
        let fallbackY = currentY + 100 + i;
        const fallbackKey = `${fallbackX},${fallbackY},${zLevel}`;
        coordinates[roomId] = { x: fallbackX, y: fallbackY, z: zLevel };
        usedPositions.add(fallbackKey);
        console.warn(`⚠️  Room ${roomId} placed at fallback position due to overlap`);
    }
    
    // Create connection from previous room
    const prevRoomId = roomOrder[i - 1];
    if (prevRoomId && coordinates[prevRoomId]) {
        const prevCoord = coordinates[prevRoomId];
        const dx = newX - prevCoord.x;
        const dy = newY - prevCoord.y;
        const dz = zLevel - prevCoord.z;
        
        // Determine direction
        let dir = null;
        if (dz === 1) dir = 'up';
        else if (dz === -1) dir = 'down';
        else if (dx === 1 && dy === 0) dir = 'east';
        else if (dx === -1 && dy === 0) dir = 'west';
        else if (dx === 0 && dy === 1) dir = 'north';
        else if (dx === 0 && dy === -1) dir = 'south';
        else if (dx === 1 && dy === 1) dir = 'northeast';
        else if (dx === -1 && dy === 1) dir = 'northwest';
        else if (dx === 1 && dy === -1) dir = 'southeast';
        else if (dx === -1 && dy === -1) dir = 'southwest';
        
        if (dir) {
            if (!exits[prevRoomId]) exits[prevRoomId] = {};
            exits[prevRoomId][dir] = roomId;
            
            // Reverse direction
            const reverseDirs = {
                'north': 'south', 'south': 'north',
                'east': 'west', 'west': 'east',
                'northeast': 'southwest', 'southwest': 'northeast',
                'northwest': 'southeast', 'southeast': 'northwest',
                'up': 'down', 'down': 'up'
            };
            const revDir = reverseDirs[dir];
            if (revDir) {
                if (!exits[roomId]) exits[roomId] = {};
                exits[roomId][revDir] = prevRoomId;
            }
        }
    }
    
    // Update current position (for horizontal movement only)
    if (zLevel === currentZ) {
        currentX = newX;
        currentY = newY;
    }
}

// Check for overlaps
function checkOverlaps() {
    const overlapMap = new Map();
    for (const [roomId, coord] of Object.entries(coordinates)) {
        const key = `${coord.x},${coord.y},${coord.z}`;
        if (!overlapMap.has(key)) {
            overlapMap.set(key, []);
        }
        overlapMap.get(key).push(roomId);
    }
    
    const overlaps = Array.from(overlapMap.entries())
        .filter(([_, roomList]) => roomList.length > 1);
    
    return overlaps;
}

// Verify connectivity
function verifyConnectivity(startRoom) {
    const visited = new Set();
    const queue = [startRoom];
    visited.add(startRoom);
    
    while (queue.length > 0) {
        const current = queue.shift();
        const currentExits = exits[current] || {};
        
        for (const nextRoom of Object.values(currentExits)) {
            if (!visited.has(nextRoom)) {
                visited.add(nextRoom);
                queue.push(nextRoom);
            }
        }
    }
    
    return visited;
}

// Check for overlaps
const overlaps = checkOverlaps();
if (overlaps.length > 0) {
    console.log(`\n⚠️  Overlaps detected: ${overlaps.length}`);
    overlaps.slice(0, 10).forEach(([coord, rooms]) => {
        console.log(`   ${coord}: ${rooms.join(', ')}`);
    });
    if (overlaps.length > 10) {
        console.log(`   ... and ${overlaps.length - 10} more`);
    }
} else {
    console.log(`\n✅ No overlaps detected!`);
}

const reachable = verifyConnectivity(bagEndId);
const totalRooms = Object.keys(coordinates).length;
const reachableCount = reachable.size;

console.log(`\nConnectivity check (from ${bagEndId}):`);
console.log(`   Total rooms: ${totalRooms}`);
console.log(`   Reachable: ${reachableCount}`);
console.log(`   Percentage: ${((reachableCount / totalRooms) * 100).toFixed(1)}%`);

if (reachableCount === totalRooms) {
    console.log('✅ World is FULLY CONNECTED!');
} else {
    console.log(`⚠️  ${totalRooms - reachableCount} rooms are unreachable`);
}

// Save to file
const output = {
    coordinates,
    exits
};

writeFileSync('scripts/linear-world-connections.json', JSON.stringify(output, null, 2));

console.log(`\n✅ Snake path world built!`);
console.log(`   Output: scripts/linear-world-connections.json`);
console.log(`   Total rooms: ${totalRooms}`);
console.log(`   Fully connected: ${reachableCount === totalRooms ? 'YES' : 'NO'}`);

