import { rooms } from '../server/src/data/rooms.js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coordFile = path.join(__dirname, 'linear-world-connections.json');
const data = JSON.parse(readFileSync(coordFile, 'utf8'));
let coordinates = data.coordinates || {};

console.log(`Loaded ${Object.keys(coordinates).length} existing coordinates`);

// Get all room IDs
const allRoomIds = Object.keys(rooms);
const missingRooms = allRoomIds.filter(id => !coordinates[id]);

console.log(`Total rooms: ${allRoomIds.length}`);
console.log(`Rooms with coordinates: ${Object.keys(coordinates).length}`);
console.log(`Rooms missing coordinates: ${missingRooms.length}`);

// Create a set of occupied coordinates
const occupied = new Set();
for (const [id, coord] of Object.entries(coordinates)) {
    occupied.add(`${coord.x},${coord.y},${coord.z}`);
}

// Find the bounds of existing coordinates to place new rooms outside
let minX = Infinity, maxX = -Infinity;
let minY = Infinity, maxY = -Infinity;
let minZ = Infinity, maxZ = -Infinity;

for (const coord of Object.values(coordinates)) {
    minX = Math.min(minX, coord.x);
    maxX = Math.max(maxX, coord.x);
    minY = Math.min(minY, coord.y);
    maxY = Math.max(maxY, coord.y);
    minZ = Math.min(minZ, coord.z);
    maxZ = Math.max(maxZ, coord.z);
}

console.log(`\nExisting coordinate bounds: X[${minX}, ${maxX}], Y[${minY}, ${maxY}], Z[${minZ}, ${maxZ}]`);

// Function to find nearest empty space
function findNearestEmptySpace(startX, startY, startZ, maxDistance = 50) {
    for (let dist = 1; dist <= maxDistance; dist++) {
        for (let dx = -dist; dx <= dist; dx++) {
            for (let dy = -dist; dy <= dist; dy++) {
                for (let dz = -dist; dz <= dist; dz++) {
                    const manhattanDist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
                    if (manhattanDist !== dist) continue;
                    
                    const x = startX + dx;
                    const y = startY + dy;
                    const z = startZ + dz;
                    const key = `${x},${y},${z}`;
                    
                    if (!occupied.has(key)) {
                        return { x, y, z };
                    }
                }
            }
        }
    }
    return null;
}

// Strategy: Try to place rooms near their connected rooms
let placed = 0;
let placedNearConnections = 0;
let placedInSafeArea = 0;

// First pass: Try to place near connected rooms
for (const roomId of missingRooms) {
    const room = rooms[roomId];
    if (!room || !room.exits) continue;
    
    // Find connected rooms that have coordinates
    const connectedRooms = Object.values(room.exits)
        .map(exitTarget => {
            if (typeof exitTarget === 'string') return exitTarget;
            return exitTarget.target || exitTarget.room;
        })
        .filter(Boolean)
        .filter(targetId => coordinates[targetId]);
    
    if (connectedRooms.length > 0) {
        // Use the first connected room's coordinates as a starting point
        const connectedCoord = coordinates[connectedRooms[0]];
        const newCoord = findNearestEmptySpace(connectedCoord.x, connectedCoord.y, connectedCoord.z, 20);
        
        if (newCoord) {
            coordinates[roomId] = newCoord;
            occupied.add(`${newCoord.x},${newCoord.y},${newCoord.z}`);
            placed++;
            placedNearConnections++;
            continue;
        }
    }
}

console.log(`\nFirst pass: Placed ${placedNearConnections} rooms near their connections`);

// Second pass: Place remaining rooms in a safe area (far from existing rooms)
// Place them starting at a safe distance from existing rooms
let safeStartX = maxX + 100;
let safeStartY = maxY + 100;
let safeZ = 0;
let currentX = safeStartX;
let currentY = safeStartY;

const remaining = missingRooms.filter(id => !coordinates[id]);
console.log(`\nSecond pass: Placing ${remaining.length} remaining rooms in safe area`);

for (const roomId of remaining) {
    // Try to find an empty space in the safe area
    let placed = false;
    for (let attempt = 0; attempt < 100; attempt++) {
        const key = `${currentX},${currentY},${safeZ}`;
        if (!occupied.has(key)) {
            coordinates[roomId] = { x: currentX, y: currentY, z: safeZ };
            occupied.add(key);
            placedInSafeArea++;
            placed = true;
            break;
        }
        // Move to next position in a grid pattern
        currentX++;
        if (currentX > safeStartX + 100) {
            currentX = safeStartX;
            currentY++;
        }
    }
    
    if (!placed) {
        // Fallback: use the findNearestEmptySpace function
        const newCoord = findNearestEmptySpace(safeStartX, safeStartY, safeZ, 200);
        if (newCoord) {
            coordinates[roomId] = newCoord;
            occupied.add(`${newCoord.x},${newCoord.y},${newCoord.z}`);
            placedInSafeArea++;
        } else {
            console.error(`⚠️  Could not place room: ${roomId}`);
        }
    }
}

console.log(`\nSecond pass: Placed ${placedInSafeArea} rooms in safe area`);

// Verify no overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) {
        overlapMap.set(key, []);
    }
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries())
    .filter(([_, rooms]) => rooms.length > 1);

if (overlaps.length > 0) {
    console.log(`\n⚠️  WARNING: ${overlaps.length} overlaps found after assignment!`);
    overlaps.slice(0, 10).forEach(([coord, rooms]) => {
        console.log(`  ${coord}: ${rooms.join(', ')}`);
    });
} else {
    console.log(`\n✅ No overlaps!`);
}

// Save updated coordinates
data.coordinates = coordinates;
writeFileSync(coordFile, JSON.stringify(data, null, 2), 'utf8');

console.log(`\n📊 Summary:`);
console.log(`  Total rooms: ${allRoomIds.length}`);
console.log(`  Rooms with coordinates now: ${Object.keys(coordinates).length}`);
console.log(`  Rooms placed near connections: ${placedNearConnections}`);
console.log(`  Rooms placed in safe area: ${placedInSafeArea}`);
console.log(`  Overlaps: ${overlaps.length}`);
console.log(`\n✅ Coordinates saved to ${coordFile}`);

