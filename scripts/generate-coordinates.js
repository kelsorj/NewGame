#!/usr/bin/env node

/**
 * Generate Coordinates from Room Connections
 * 
 * This script analyzes all room connections and generates a consistent
 * coordinate system starting from bag_end and working outward.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load all rooms
const roomsModule = await import('../server/src/data/rooms.js');
const rooms = roomsModule.rooms;

// Direction to coordinate delta
const directionDeltas = {
    'north': { x: 0, y: 1 },
    'south': { x: 0, y: -1 },
    'east': { x: 1, y: 0 },
    'west': { x: -1, y: 0 },
    'northeast': { x: 1, y: 1 },
    'northwest': { x: -1, y: 1 },
    'southeast': { x: 1, y: -1 },
    'southwest': { x: -1, y: -1 },
    'up': { x: 0, y: 0 }, // Same coordinates
    'down': { x: 0, y: 0 } // Same coordinates
};

// Start with bag_end at (50, 50)
const coordinates = new Map();
const queue = [];
const processed = new Set();

// Initialize with starting room
coordinates.set('bag_end', { x: 50, y: 50 });
queue.push('bag_end');

// Process queue
while (queue.length > 0) {
    const currentId = queue.shift();
    if (processed.has(currentId)) continue;
    processed.add(currentId);
    
    const currentRoom = rooms[currentId];
    if (!currentRoom || !currentRoom.exits) continue;
    
    const currentCoord = coordinates.get(currentId);
    if (!currentCoord) continue;
    
    // Process all exits
    for (const [direction, targetId] of Object.entries(currentRoom.exits)) {
        if (!targetId || processed.has(targetId)) continue;
        
        const delta = directionDeltas[direction];
        if (!delta) {
            console.warn(`Unknown direction: ${direction} from ${currentId}`);
            continue;
        }
        
        const targetCoord = {
            x: currentCoord.x + delta.x,
            y: currentCoord.y + delta.y
        };
        
        // Check if target already has coordinates
        if (coordinates.has(targetId)) {
            const existing = coordinates.get(targetId);
            // If coordinates don't match, we have a conflict
            if (existing.x !== targetCoord.x || existing.y !== targetCoord.y) {
                // For now, prefer the first assignment (can be improved)
                console.warn(`Coordinate conflict for ${targetId}: existing (${existing.x},${existing.y}) vs new (${targetCoord.x},${targetCoord.y}) from ${currentId} via ${direction}`);
            }
        } else {
            coordinates.set(targetId, targetCoord);
            queue.push(targetId);
        }
    }
}

// Handle rooms not reachable from bag_end (orphans)
for (const [roomId, room] of Object.entries(rooms)) {
    if (!coordinates.has(roomId)) {
        // Try to find a connected room that has coordinates
        let foundConnection = false;
        if (room.exits) {
            for (const [direction, targetId] of Object.entries(room.exits)) {
                if (coordinates.has(targetId)) {
                    const targetCoord = coordinates.get(targetId);
                    const delta = directionDeltas[direction];
                    if (delta) {
                        // Reverse the direction to get this room's position
                        const reverseDelta = { x: -delta.x, y: -delta.y };
                        const coord = {
                            x: targetCoord.x + reverseDelta.x,
                            y: targetCoord.y + reverseDelta.y
                        };
                        coordinates.set(roomId, coord);
                        foundConnection = true;
                        break;
                    }
                }
            }
        }
        
        if (!foundConnection) {
            // Assign a default coordinate (will need manual adjustment)
            console.warn(`No coordinates for ${roomId}, assigning default`);
            coordinates.set(roomId, { x: 100, y: 100 }); // Far away default
        }
    }
}

// Generate output
let output = '// Room coordinates for map display - generated from room connections\n';
output += '// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X\n';
output += 'const roomCoordinates = {\n';

// Sort by coordinates for readability
const sorted = Array.from(coordinates.entries()).sort((a, b) => {
    if (a[1].y !== b[1].y) return b[1].y - a[1].y; // Higher Y first
    return a[1].x - b[1].x; // Then by X
});

for (const [roomId, coord] of sorted) {
    const room = rooms[roomId];
    const name = room ? room.name : roomId;
    output += `    ${roomId}: { x: ${coord.x}, y: ${coord.y}, name: '${name.replace(/'/g, "\\'")}' },\n`;
}

output += '};\n';

// Write to file
const outputPath = join(__dirname, '../client/src/components/WorldMap-coordinates-generated.js');
writeFileSync(outputPath, output, 'utf-8');

console.log(`✅ Generated coordinates for ${coordinates.size} rooms`);
console.log(`   Output: ${outputPath}`);
console.log(`\n⚠️  Review the generated file and merge into WorldMap.jsx`);

// Also generate a verification report
let report = 'COORDINATE GENERATION REPORT\n';
report += '='.repeat(80) + '\n\n';
report += `Total rooms: ${Object.keys(rooms).length}\n`;
report += `Rooms with coordinates: ${coordinates.size}\n\n`;

// Check for conflicts
const coordMap = new Map();
for (const [roomId, coord] of coordinates.entries()) {
    const key = `${coord.x},${coord.y}`;
    if (!coordMap.has(key)) coordMap.set(key, []);
    coordMap.get(key).push(roomId);
}

const conflicts = Array.from(coordMap.entries()).filter(([_, ids]) => ids.length > 1);
if (conflicts.length > 0) {
    report += `⚠️  COORDINATE CONFLICTS (${conflicts.length}):\n`;
    for (const [coord, ids] of conflicts) {
        report += `  (${coord}): ${ids.join(', ')}\n`;
    }
    report += '\n';
}

// Check exit verification
let verified = 0;
let failed = 0;
for (const [roomId, room] of Object.entries(rooms)) {
    if (!room.exits || !coordinates.has(roomId)) continue;
    const coord = coordinates.get(roomId);
    
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (!coordinates.has(targetId)) continue;
        const targetCoord = coordinates.get(targetId);
        const delta = directionDeltas[direction];
        if (!delta) continue;
        
        const expected = {
            x: coord.x + delta.x,
            y: coord.y + delta.y
        };
        
        if (targetCoord.x === expected.x && targetCoord.y === expected.y) {
            verified++;
        } else {
            failed++;
            if (failed <= 20) { // Limit output
                report += `❌ ${roomId} ${direction} → ${targetId}: expected (${expected.x},${expected.y}), got (${targetCoord.x},${targetCoord.y})\n`;
            }
        }
    }
}

report += `\nExit verification: ${verified} correct, ${failed} incorrect\n`;

const reportPath = join(__dirname, '../COORDINATE_GENERATION_REPORT.txt');
writeFileSync(reportPath, report, 'utf-8');
console.log(`   Report: ${reportPath}`);

