import { rooms } from '../server/src/data/rooms.js';
import { readFileSync } from 'fs';

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
    north: { x: 0, y: 1, z: 0 },
    south: { x: 0, y: -1, z: 0 },
    east: { x: 1, y: 0, z: 0 },
    west: { x: -1, y: 0, z: 0 },
    northeast: { x: 1, y: 1, z: 0 },
    northwest: { x: -1, y: 1, z: 0 },
    southeast: { x: 1, y: -1, z: 0 },
    southwest: { x: -1, y: -1, z: 0 },
    up: { x: 0, y: 0, z: 1 },
    down: { x: 0, y: 0, z: -1 }
};

// Find mismatches
const mismatches = [];
for (const [id, room] of Object.entries(rooms)) {
    if (!room.exits || !coords[id]) continue;
    for (const [dir, targetId] of Object.entries(room.exits)) {
        if (!coords[targetId]) continue;
        const vector = directionVectors[dir];
        if (!vector) continue;
        
        const from = coords[id];
        const to = coords[targetId];
        const expected = {
            x: from.x + vector.x,
            y: from.y + vector.y,
            z: from.z + vector.z
        };
        
        if (to.x !== expected.x || to.y !== expected.y || to.z !== expected.z) {
            mismatches.push({
                from: id,
                to: targetId,
                direction: dir,
                priority: dir.match(/^(north|south|east|west)$/) ? 1 : 2
            });
        }
    }
}

console.log(`Found ${mismatches.length} mismatched connections`);

// For each mismatch, check if there's an alternative path
const redundant = [];
const necessary = [];

for (const mismatch of mismatches) {
    // BFS to find alternative path
    const findAlternativePath = (start, target, maxDepth = 10) => {
        const queue = [[start, []]];
        const visited = new Set([start]);
        
        while (queue.length > 0) {
            const [current, path] = queue.shift();
            
            if (current === target && path.length > 0) {
                return path;
            }
            
            if (path.length >= maxDepth) continue;
            
            const room = rooms[current];
            if (!room || !room.exits) continue;
            
            for (const [dir, nextId] of Object.entries(room.exits)) {
                // Skip the direct connection we're testing
                if (current === mismatch.from && dir === mismatch.direction && nextId === mismatch.to) {
                    continue;
                }
                
                if (!visited.has(nextId)) {
                    visited.add(nextId);
                    queue.push([nextId, path.concat([dir])]);
                }
            }
        }
        return null;
    };
    
    const altPath = findAlternativePath(mismatch.from, mismatch.to);
    
    if (altPath) {
        redundant.push({ ...mismatch, alternativePath: altPath, pathLength: altPath.length });
    } else {
        necessary.push(mismatch);
    }
}

console.log(`\nRedundant connections (have alternative paths): ${redundant.length}`);
console.log(`Necessary connections (no alternative): ${necessary.length}`);

// Sort redundant by priority (diagonals first, since they're less important)
redundant.sort((a, b) => {
    if (a.priority !== b.priority) return b.priority - a.priority;
    return a.pathLength - b.pathLength;
});

console.log('\n' + '='.repeat(70));
console.log('Redundant connections we can safely remove (first 30):');
redundant.slice(0, 30).forEach((m, i) => {
    console.log(`${i + 1}. ${rooms[m.from].name} -> ${m.direction} -> ${rooms[m.to].name}`);
    console.log(`   Alternative: ${m.alternativePath.join(' -> ')} (${m.pathLength} steps)`);
});

// Test removing only redundant connections
console.log('\n' + '='.repeat(70));
console.log('Testing connectivity after removing only redundant connections...');

const testRooms = JSON.parse(JSON.stringify(rooms));
for (const mismatch of redundant) {
    if (testRooms[mismatch.from] && testRooms[mismatch.from].exits) {
        delete testRooms[mismatch.from].exits[mismatch.direction];
    }
}

const reachable = new Set();
const queue = ['bag_end'];
reachable.add('bag_end');

while (queue.length > 0) {
    const currentId = queue.shift();
    const room = testRooms[currentId];
    if (!room || !room.exits) continue;
    
    for (const targetId of Object.values(room.exits)) {
        if (!reachable.has(targetId)) {
            reachable.add(targetId);
            queue.push(targetId);
        }
    }
}

const totalRooms = Object.keys(rooms).length;
const unreachable = totalRooms - reachable.size;

console.log(`\nAfter removing ${redundant.length} redundant connections:`);
console.log(`  Reachable from bag_end: ${reachable.size}/${totalRooms} rooms`);
console.log(`  Unreachable: ${unreachable} rooms`);

if (unreachable === 0) {
    console.log('\n✅ World remains fully connected!');
    console.log(`\nWe can safely remove ${redundant.length} redundant connections.`);
    console.log(`This should improve coordinate accuracy significantly!`);
} else {
    console.log('\n⚠️  Some rooms become unreachable.');
}

