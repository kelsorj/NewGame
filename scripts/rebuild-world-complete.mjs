import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

console.log('='.repeat(70));
console.log('REBUILDING ENTIRE WORLD WITH PERFECT COORDINATE ALIGNMENT');
console.log('='.repeat(70));
console.log(`Total rooms: ${Object.keys(rooms).length}\n`);

// Direction vectors
const directions = {
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

const reverseDir = {
    'north': 'south', 'south': 'north',
    'east': 'west', 'west': 'east',
    'northeast': 'southwest', 'southwest': 'northeast',
    'northwest': 'southeast', 'southeast': 'northwest',
    'up': 'down', 'down': 'up'
};

// Initialize
const newExits = {};
const coordinates = {};
const coordToRoom = new Map();
const visited = new Set();

// Start from bag_end
coordinates['bag_end'] = { x: 0, y: 0, z: 0 };
coordToRoom.set('0,0,0', 'bag_end');
visited.add('bag_end');

for (const roomId of Object.keys(rooms)) {
    newExits[roomId] = {};
}

console.log('Building connections with perfect coordinate alignment...\n');

const queue = [{ roomId: 'bag_end', coord: { x: 0, y: 0, z: 0 }, depth: 0 }];
let totalConnections = 0;

// All available directions (prioritize cardinal)
const allDirs = ['north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest'];

while (queue.length > 0 && visited.size < Object.keys(rooms).length) {
    const { roomId, coord, depth } = queue.shift();
    
    // Find unvisited rooms
    const unvisited = Object.keys(rooms).filter(id => !visited.has(id));
    if (unvisited.length === 0) break;
    
    // Try to connect to unvisited rooms
    let connectionsThisRound = 0;
    
    for (const dir of allDirs) {
        if (connectionsThisRound >= 4) break; // Limit connections per room
        
        const vec = directions[dir];
        const targetX = coord.x + vec.x;
        const targetY = coord.y + vec.y;
        const targetZ = coord.z + vec.z;
        const coordKey = `${targetX},${targetY},${targetZ}`;
        
        // Check if coordinate is available
        if (!coordToRoom.has(coordKey)) {
            // Pick next unvisited room
            if (unvisited.length === 0) break;
            const targetId = unvisited.shift();
            
            // Create bidirectional connection
            newExits[roomId][dir] = targetId;
            const revDir = reverseDir[dir];
            if (revDir) {
                newExits[targetId][revDir] = roomId;
            }
            
            // Assign coordinate
            coordinates[targetId] = { x: targetX, y: targetY, z: targetZ };
            coordToRoom.set(coordKey, targetId);
            visited.add(targetId);
            queue.push({
                roomId: targetId,
                coord: { x: targetX, y: targetY, z: targetZ },
                depth: depth + 1
            });
            
            totalConnections++;
            connectionsThisRound++;
        }
    }
    
    // If we couldn't connect from this room, find a nearby coordinate for next room
    if (connectionsThisRound === 0 && unvisited.length > 0) {
        // Find an available coordinate near current position
        let found = false;
        for (let radius = 1; radius <= 10 && !found; radius++) {
            for (const dir of allDirs) {
                const vec = directions[dir];
                const targetX = coord.x + vec.x * radius;
                const targetY = coord.y + vec.y * radius;
                const targetZ = coord.z;
                const coordKey = `${targetX},${targetY},${targetZ}`;
                
                if (!coordToRoom.has(coordKey)) {
                    const targetId = unvisited.shift();
                    
                    // Connect using the direction (scaled)
                    newExits[roomId][dir] = targetId;
                    const revDir = reverseDir[dir];
                    if (revDir) {
                        newExits[targetId][revDir] = roomId;
                    }
                    
                    coordinates[targetId] = { x: targetX, y: targetY, z: targetZ };
                    coordToRoom.set(coordKey, targetId);
                    visited.add(targetId);
                    queue.push({
                        roomId: targetId,
                        coord: { x: targetX, y: targetY, z: targetZ },
                        depth: depth + 1
                    });
                    
                    totalConnections++;
                    found = true;
                    break;
                }
            }
        }
    }
}

console.log(`Connected ${visited.size} rooms`);
console.log(`Total connections: ${totalConnections}\n`);

// Connect any remaining unvisited rooms
const remaining = Object.keys(rooms).filter(id => !visited.has(id));
if (remaining.length > 0) {
    console.log(`Connecting ${remaining.length} remaining rooms...`);
    
    for (const roomId of remaining) {
        // Find nearest visited room
        let nearest = null;
        let nearestDist = Infinity;
        let nearestCoord = null;
        
        for (const [visitedId, visitedCoord] of Object.entries(coordinates)) {
            const dist = Math.abs(visitedCoord.x) + Math.abs(visitedCoord.y);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = visitedId;
                nearestCoord = visitedCoord;
            }
        }
        
        if (nearest && nearestCoord) {
            // Place it east of nearest
            const targetX = nearestCoord.x + 1;
            const targetY = nearestCoord.y;
            const targetZ = nearestCoord.z;
            const coordKey = `${targetX},${targetY},${targetZ}`;
            
            // Find available coordinate
            let finalX = targetX;
            let finalY = targetY;
            let finalZ = targetZ;
            let attempts = 0;
            
            while (coordToRoom.has(`${finalX},${finalY},${finalZ}`) && attempts < 100) {
                finalX++;
                attempts++;
            }
            
            newExits[nearest]['east'] = roomId;
            newExits[roomId]['west'] = nearest;
            
            coordinates[roomId] = { x: finalX, y: finalY, z: finalZ };
            coordToRoom.set(`${finalX},${finalY},${finalZ}`, roomId);
            visited.add(roomId);
        }
    }
    
    console.log(`Now connected: ${visited.size}/${Object.keys(rooms).length}`);
}

// Verify all reachable
const reachable = new Set(['bag_end']);
const reachQueue = ['bag_end'];

while (reachQueue.length > 0) {
    const current = reachQueue.shift();
    const exits = newExits[current] || {};
    for (const targetId of Object.values(exits)) {
        if (!reachable.has(targetId)) {
            reachable.add(targetId);
            reachQueue.push(targetId);
        }
    }
}

console.log(`\nReachable from bag_end: ${reachable.size}/${Object.keys(rooms).length}`);

// Verify coordinate constraints
console.log('\n' + '='.repeat(70));
console.log('Verifying coordinate constraints...\n');

let correct = 0;
let total = 0;

for (const [fromId, exits] of Object.entries(newExits)) {
    if (!coordinates[fromId]) continue;
    const fromCoord = coordinates[fromId];
    
    for (const [dir, toId] of Object.entries(exits)) {
        if (!coordinates[toId]) continue;
        total++;
        
        const vec = directions[dir];
        if (!vec) continue;
        
        const expected = {
            x: fromCoord.x + vec.x,
            y: fromCoord.y + vec.y,
            z: fromCoord.z + vec.z
        };
        
        const actual = coordinates[toId];
        
        if (expected.x === actual.x && expected.y === actual.y && expected.z === actual.z) {
            correct++;
        }
    }
}

const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;
console.log(`Constraint satisfaction: ${correct}/${total} (${accuracy}%)`);

// Check overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
console.log(`Coordinate overlaps: ${overlaps.length}`);

if (accuracy === 100 && overlaps.length === 0) {
    console.log('\n✅ PERFECT! All connections have correct coordinates and no overlaps!');
} else if (accuracy >= 95 && overlaps.length === 0) {
    console.log('\n✅ Excellent! Very high accuracy with no overlaps.');
} else {
    console.log('\n⚠️  Some issues remain.');
}

// Save results
const result = {
    newExits,
    coordinates,
    stats: {
        totalRooms: Object.keys(rooms).length,
        connectedRooms: visited.size,
        reachableRooms: reachable.size,
        totalConnections: total,
        correctConnections: correct,
        accuracy: accuracy,
        overlaps: overlaps.length
    }
};

writeFileSync('scripts/complete-world-connections.json', JSON.stringify(result, null, 2));
console.log('\n✅ Results saved to scripts/complete-world-connections.json');

