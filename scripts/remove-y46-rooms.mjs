import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coordFile = path.join(__dirname, 'linear-world-connections.json');
const data = JSON.parse(readFileSync(coordFile, 'utf8'));
let coordinates = data.coordinates || {};

console.log(`Loaded ${Object.keys(coordinates).length} coordinates`);

// Find all rooms at Y=-46, Z=0 that are paths, roads, or riverbanks
const toRemove = [];
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (coord.y === -46 && coord.z === 0) {
        const name = roomId.toLowerCase();
        if (name.includes('path') || name.includes('road') || name.includes('riverbank') || name.includes('river_')) {
            toRemove.push(roomId);
        }
    }
}

console.log(`\nFound ${toRemove.length} path/road/riverbank rooms at Y=-46, Z=0 to remove:`);
toRemove.slice(0, 20).forEach(id => console.log(`  - ${id}`));
if (toRemove.length > 20) console.log(`  ... and ${toRemove.length - 20} more`);

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
const remaining = Object.entries(coordinates).filter(([id, c]) => c.y === -46 && c.z === 0);
const remainingPaths = remaining.filter(([id]) => {
    const name = id.toLowerCase();
    return name.includes('path') || name.includes('road') || name.includes('riverbank') || name.includes('river_');
});

console.log(`\nRemaining path/road/riverbank rooms at Y=-46, Z=0: ${remainingPaths.length}`);
if (remainingPaths.length > 0) {
    console.log('Remaining rooms:');
    remainingPaths.forEach(([id]) => console.log(`  - ${id}`));
}

