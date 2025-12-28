#!/usr/bin/env node

/**
 * Rebuild Complete Coordinate System
 * 
 * Systematically builds coordinates from room connections starting at bag_end
 */

const roomsModule = await import('../server/src/data/rooms.js');
const rooms = roomsModule.rooms;

const directionDeltas = {
    'north': { x: 0, y: 1 },
    'south': { x: 0, y: -1 },
    'east': { x: 1, y: 0 },
    'west': { x: -1, y: 0 },
    'northeast': { x: 1, y: 1 },
    'northwest': { x: -1, y: 1 },
    'southeast': { x: 1, y: -1 },
    'southwest': { x: -1, y: -1 },
    'up': { x: 0, y: 0 },
    'down': { x: 0, y: 0 }
};

const coordinates = new Map();
const queue = [{ id: 'bag_end', x: 50, y: 50 }];
const processed = new Set(['bag_end']);

coordinates.set('bag_end', { x: 50, y: 50 });

// Process queue
while (queue.length > 0) {
    const current = queue.shift();
    const room = rooms[current.id];
    if (!room || !room.exits) continue;
    
    // Process exits
    for (const [direction, targetId] of Object.entries(room.exits)) {
        if (!targetId || processed.has(targetId)) continue;
        
        const delta = directionDeltas[direction];
        if (!delta) continue;
        
        const newCoord = {
            x: current.x + delta.x,
            y: current.y + delta.y
        };
        
        // Check for conflicts
        if (coordinates.has(targetId)) {
            const existing = coordinates.get(targetId);
            // If coordinates match, good; if not, prefer first assignment
            if (existing.x !== newCoord.x || existing.y !== newCoord.y) {
                // Keep existing, but log conflict
                console.warn(`Conflict: ${targetId} already at (${existing.x},${existing.y}), wanted (${newCoord.x},${newCoord.y}) from ${current.id}`);
            }
        } else {
            coordinates.set(targetId, newCoord);
            queue.push({ id: targetId, ...newCoord });
            processed.add(targetId);
        }
    }
}

// Handle orphaned rooms (connect backwards)
for (const [roomId, room] of Object.entries(rooms)) {
    if (!coordinates.has(roomId) && room.exits) {
        for (const [direction, targetId] of Object.entries(room.exits)) {
            if (coordinates.has(targetId)) {
                const targetCoord = coordinates.get(targetId);
                const delta = directionDeltas[direction];
                if (delta) {
                    const reverseDelta = { x: -delta.x, y: -delta.y };
                    const coord = {
                        x: targetCoord.x + reverseDelta.x,
                        y: targetCoord.y + reverseDelta.y
                    };
                    coordinates.set(roomId, coord);
                    break;
                }
            }
        }
    }
}

// Generate output
let output = '// Room coordinates for map display - AUTO-GENERATED from room connections\n';
output += '// Coordinates follow N/S/E/W grid: North = +Y, South = -Y, East = +X, West = -X\n';
output += '// Generated: ' + new Date().toISOString() + '\n';
output += 'const roomCoordinates = {\n';

const sorted = Array.from(coordinates.entries()).sort((a, b) => {
    if (a[1].y !== b[1].y) return b[1].y - a[1].y;
    return a[1].x - b[1].x;
});

for (const [roomId, coord] of sorted) {
    const room = rooms[roomId];
    const name = room ? room.name.replace(/'/g, "\\'") : roomId;
    output += `    ${roomId}: { x: ${coord.x}, y: ${coord.y}, name: '${name}' },\n`;
}

output += '};\n';

// Write to temp file
const fs = await import('fs');
const path = await import('path');
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outputPath = path.join(__dirname, '../client/src/components/WorldMap-coordinates-new.js');
fs.writeFileSync(outputPath, output, 'utf-8');

console.log(`✅ Generated coordinates for ${coordinates.size} rooms`);
console.log(`   Output: ${outputPath}`);

// Check conflicts
const coordMap = new Map();
for (const [roomId, coord] of coordinates.entries()) {
    const key = `${coord.x},${coord.y}`;
    if (!coordMap.has(key)) coordMap.set(key, []);
    coordMap.get(key).push(roomId);
}

const conflicts = Array.from(coordMap.entries()).filter(([_, ids]) => ids.length > 1);
if (conflicts.length > 0) {
    console.log(`\n⚠️  ${conflicts.length} coordinate conflicts found:`);
    conflicts.slice(0, 10).forEach(([coord, ids]) => {
        console.log(`   (${coord}): ${ids.join(', ')}`);
    });
} else {
    console.log(`\n✅ No coordinate conflicts!`);
}


