import { rooms } from '../server/src/data/rooms.js';
import { readFileSync, writeFileSync } from 'fs';

// Read current coordinates
const content = readFileSync('./client/src/components/WorldMap.jsx', 'utf8');
const coords = {};
const lines = content.split('\n');
for (const line of lines) {
    const match = line.match(/(\w+):\s*\{\s*x:\s*(\d+),\s*y:\s*(\d+),\s*z:\s*(\d+)/);
    if (match) {
        coords[match[1]] = { x: parseInt(match[2]), y: parseInt(match[3]), z: parseInt(match[4]) };
    }
}

const directionVectors = {
    northeast: { x: 1, y: 1, z: 0 },
    northwest: { x: -1, y: 1, z: 0 },
    southeast: { x: 1, y: -1, z: 0 },
    southwest: { x: -1, y: -1, z: 0 }
};

// Find diagonal mismatches with alternative paths
const safeToRemove = [];

for (const [id, room] of Object.entries(rooms)) {
    if (!room.exits || !coords[id]) continue;
    for (const [dir, targetId] of Object.entries(room.exits)) {
        if (!coords[targetId]) continue;
        if (!['northeast', 'northwest', 'southeast', 'southwest'].includes(dir)) continue;
        
        const vector = directionVectors[dir];
        const from = coords[id];
        const to = coords[targetId];
        const expected = {
            x: from.x + vector.x,
            y: from.y + vector.y,
            z: from.z + vector.z
        };
        
        if (to.x !== expected.x || to.y !== expected.y || to.z !== expected.z) {
            // Check for alternative path using only cardinal directions
            const findCardinalPath = (start, target, maxDepth = 5) => {
                const queue = [[start, []]];
                const visited = new Set([start]);
                
                while (queue.length > 0) {
                    const [current, path] = queue.shift();
                    
                    if (current === target && path.length > 0 && path.length <= 2) {
                        return path;
                    }
                    
                    if (path.length >= maxDepth) continue;
                    
                    const r = rooms[current];
                    if (!r || !r.exits) continue;
                    
                    for (const [d, nextId] of Object.entries(r.exits)) {
                        if (!['north', 'south', 'east', 'west'].includes(d)) continue;
                        if (current === id && d === dir && nextId === targetId) continue;
                        
                        if (!visited.has(nextId)) {
                            visited.add(nextId);
                            queue.push([nextId, path.concat([d])]);
                        }
                    }
                }
                return null;
            };
            
            const altPath = findCardinalPath(id, targetId);
            if (altPath && altPath.length <= 2) {
                safeToRemove.push({ from: id, to: targetId, direction: dir });
            }
        }
    }
}

console.log(`Found ${safeToRemove.length} redundant diagonal connections to remove`);

// Load all room files
const roomFiles = [
    'server/src/data/rooms.js',
    'server/src/data/rooms-expansion-batch1.js',
    'server/src/data/rooms-expansion-batch2.js',
    'server/src/data/rooms-expansion-batch3.js',
    'server/src/data/rooms-expansion-batch4.js',
    'server/src/data/rooms-expansion-batch5.js',
    'server/src/data/rooms-expansion-batch6.js'
];

let removedCount = 0;

for (const filePath of roomFiles) {
    try {
        const fileContent = readFileSync(filePath, 'utf8');
        let modified = false;
        let newContent = fileContent;
        
        for (const removal of safeToRemove) {
            // Find the room definition in this file
            const roomPattern = new RegExp(`(\\s+)(${removal.from}:\\s*\\{[^}]*exits:\\s*\\{[^}]*)(['"]${removal.direction}['"]\\s*:\\s*['"]${removal.to}['"])([^}]*\\})`, 's');
            const match = newContent.match(roomPattern);
            
            if (match) {
                // Remove the exit
                newContent = newContent.replace(
                    new RegExp(`(,?\\s*)['"]${removal.direction}['"]\\s*:\\s*['"]${removal.to}['"]\\s*,?`, 'g'),
                    ''
                );
                // Clean up trailing commas
                newContent = newContent.replace(/,(\s*[}\]])/g, '$1');
                modified = true;
                removedCount++;
            }
        }
        
        if (modified) {
            writeFileSync(filePath, newContent);
            console.log(`Updated ${filePath}`);
        }
    } catch (err) {
        // File might not exist or have different structure
    }
}

console.log(`\nRemoved ${removedCount} redundant diagonal connections`);
console.log('✅ Room files updated!');
console.log('\nNext step: Regenerate coordinates with: node scripts/generate-3d-coordinates.mjs');

