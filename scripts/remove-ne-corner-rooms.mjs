import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coordFile = path.join(__dirname, 'linear-world-connections.json');
const data = JSON.parse(readFileSync(coordFile, 'utf8'));
let coordinates = data.coordinates || {};

console.log(`Loaded ${Object.keys(coordinates).length} coordinates`);

// Define the region: X: 240-340, Y: 186-211, Z: 0
const minX = 240, maxX = 340;
const minY = 186, maxY = 211;
const z = 0;

// Find all rooms in that region
const toRemove = [];
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (coord.x >= minX && coord.x <= maxX && 
        coord.y >= minY && coord.y <= maxY && 
        coord.z === z) {
        toRemove.push(roomId);
    }
}

console.log(`\nFound ${toRemove.length} rooms in region (${minX},${maxY},${z}) to (${maxX},${minY},${z})`);
console.log(`\nFirst 30 rooms to remove:`);
toRemove.slice(0, 30).forEach(id => console.log(`  - ${id}`));
if (toRemove.length > 30) console.log(`  ... and ${toRemove.length - 30} more`);

// Remove them from coordinates
let removed = 0;
for (const roomId of toRemove) {
    if (coordinates[roomId]) {
        delete coordinates[roomId];
        removed++;
    }
}

// Also check if there are exits that reference these rooms and remove them
if (data.exits) {
    let exitRemovals = 0;
    for (const [roomId, exits] of Object.entries(data.exits)) {
        if (!exits) continue;
        for (const [direction, target] of Object.entries(exits)) {
            if (typeof target === 'string' && toRemove.includes(target)) {
                delete exits[direction];
                exitRemovals++;
            } else if (target && typeof target === 'object' && target.target && toRemove.includes(target.target)) {
                delete exits[direction];
                exitRemovals++;
            }
        }
    }
    console.log(`\nRemoved ${exitRemovals} exit references to deleted rooms`);
}

// Save updated coordinates
data.coordinates = coordinates;
writeFileSync(coordFile, JSON.stringify(data, null, 2), 'utf8');

console.log(`\n✅ Removed ${removed} rooms from coordinates`);
console.log(`✅ Coordinates saved to ${coordFile}`);

// Verify removal
const remaining = Object.entries(coordinates).filter(([id, c]) => 
    c.x >= minX && c.x <= maxX && 
    c.y >= minY && c.y <= maxY && 
    c.z === z
);

console.log(`\nRemaining rooms in region: ${remaining.length}`);
if (remaining.length > 0) {
    console.log('Remaining rooms:');
    remaining.forEach(([id, c]) => console.log(`  - ${id} at (${c.x},${c.y},${c.z})`));
}

