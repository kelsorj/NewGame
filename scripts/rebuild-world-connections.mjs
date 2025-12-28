import { rooms } from '../server/src/data/rooms.js';
import { readFileSync, writeFileSync } from 'fs';

console.log('='.repeat(70));
console.log('REBUILDING WORLD CONNECTIONS FROM SCRATCH');
console.log('='.repeat(70));
console.log(`Total rooms: ${Object.keys(rooms).length}\n`);

// Group rooms by region for logical placement
function categorizeRoom(roomId, room) {
    const name = room.name.toLowerCase();
    const id = roomId.toLowerCase();
    
    if (name.includes('bag end') || id === 'bag_end') return 'START';
    if (name.includes('shire') || name.includes('hobbit') || name.includes('michel') || name.includes('tuck') || name.includes('bywater') || name.includes('bucklebury') || name.includes('buckland') || name.includes('crickhollow') || name.includes('old forest') || name.includes('bombadil') || name.includes('withywindle')) return 'SHIRE';
    if (name.includes('bree') || name.includes('archet') || name.includes('combe') || name.includes('staddle') || name.includes('chetwood') || name.includes('prancing pony')) return 'BREE';
    if (name.includes('weathertop') || name.includes('weather hills') || name.includes('troll') || name.includes('last bridge')) return 'WEATHERHILLS';
    if (name.includes('rivendell') || name.includes('elrond') || name.includes('ford of bruinen') || name.includes('hollin') || name.includes('waterfall')) return 'RIVENDELL';
    if (name.includes('moria') || name.includes('khazad') || name.includes('durin') || name.includes('mines') || name.includes('goblin') || name.includes('twenty-first') || name.includes('balin') || name.includes('endless stair') || name.includes('bridge of khazad')) return 'MORIA';
    if (name.includes('lothlorien') || name.includes('galadriel') || name.includes('caras') || name.includes('cerin') || name.includes('nimbrethil') || name.includes('mallorn') || name.includes('silverlode') || name.includes('celebrant')) return 'LORIEN';
    if (name.includes('fangorn') || name.includes('ent') || name.includes('treebeard') || name.includes('wellinghall') || name.includes('entmoot') || name.includes('entwash') || name.includes('skinbark') || name.includes('leaflock')) return 'FANGORN';
    if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') || name.includes('helms') || name.includes('isengard') || name.includes('orthanc') || name.includes('gap of rohan') || name.includes('westfold') || name.includes('eastfold') || name.includes('emnet') || name.includes('wold') || name.includes('snowbourn') || name.includes('starkhorn') || name.includes('dunharrow') || name.includes('harrowdale') || name.includes('aldburg')) return 'ROHAN';
    if (name.includes('gondor') || name.includes('minas tirith') || name.includes('pelennor') || name.includes('osgiliath') || name.includes('ithilien') || name.includes('henneth') || name.includes('lossarnach') || name.includes('pelargir') || name.includes('minas morgul') || name.includes('cirith ungol') || name.includes('shelob') || name.includes('morgul')) return 'GONDOR';
    if (name.includes('mordor') || name.includes('barad') || name.includes('mount doom') || name.includes('black gate') || name.includes('gorgoroth') || name.includes('sammath') || name.includes('durthang')) return 'MORDOR';
    if (name.includes('mirkwood') || name.includes('thranduil') || name.includes('rhosgobel') || name.includes('elf-path') || name.includes('elf path')) return 'MIRKWOOD';
    if (name.includes('erebor') || name.includes('lonely mountain') || name.includes('lake-town') || name.includes('long lake')) return 'EREBOR';
    if (name.includes('fornost') || name.includes('annuminas') || name.includes('evendim') || name.includes('barrow')) return 'FORNOST';
    if (name.includes('grey havens') || name.includes('mithlond') || name.includes('havens')) return 'HAVENS';
    if (name.includes('anduin') || name.includes('rauros') || name.includes('amon hen') || name.includes('parth galen')) return 'ANDUIN';
    
    return 'OTHER';
}

// Build region map
const regionMap = new Map();
for (const [id, room] of Object.entries(rooms)) {
    const region = categorizeRoom(id, room);
    if (!regionMap.has(region)) {
        regionMap.set(region, []);
    }
    regionMap.get(region).push(id);
}

console.log('Room regions:');
for (const [region, roomIds] of regionMap.entries()) {
    console.log(`  ${region}: ${roomIds.length} rooms`);
}

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

// Build new connections using grid-based approach
console.log('\n' + '='.repeat(70));
console.log('Building new grid-based connections...');

const newExits = {};
const coordinates = {};
const coordToRoom = new Map();
const roomQueue = [];
const visited = new Set();

// Start from bag_end
coordinates['bag_end'] = { x: 0, y: 0, z: 0 };
coordToRoom.set('0,0,0', 'bag_end');
visited.add('bag_end');
roomQueue.push({ roomId: 'bag_end', coord: { x: 0, y: 0, z: 0 }, region: 'START' });

// Initialize all rooms with empty exits
for (const roomId of Object.keys(rooms)) {
    newExits[roomId] = {};
}

// Region placement strategy - place regions in a logical grid
const regionPositions = {
    'START': { baseX: 0, baseY: 0, z: 0 },
    'SHIRE': { baseX: -10, baseY: -5, z: 0 },
    'BREE': { baseX: 0, baseY: -10, z: 0 },
    'WEATHERHILLS': { baseX: 5, baseY: -10, z: 0 },
    'RIVENDELL': { baseX: 10, baseY: -5, z: 0 },
    'MORIA': { baseX: 15, baseY: 0, z: 0 },
    'LORIEN': { baseX: 20, baseY: 5, z: 0 },
    'FANGORN': { baseX: 15, baseY: 10, z: 0 },
    'ROHAN': { baseX: 10, baseY: 15, z: 0 },
    'GONDOR': { baseX: 5, baseY: 20, z: 0 },
    'MORDOR': { baseX: 0, baseY: 25, z: 0 },
    'MIRKWOOD': { baseX: 25, baseY: 10, z: 0 },
    'EREBOR': { baseX: 30, baseY: 15, z: 0 },
    'FORNOST': { baseX: -5, baseY: -15, z: 0 },
    'HAVENS': { baseX: -15, baseY: 0, z: 0 },
    'ANDUIN': { baseX: 18, baseY: 0, z: 0 },
    'OTHER': { baseX: 0, baseY: 30, z: 0 }
};

// Build connections using BFS with grid constraints
let roomIndex = 0;
const allRoomIds = Object.keys(rooms);

while (roomQueue.length > 0 && visited.size < allRoomIds.length) {
    const { roomId, coord, region } = roomQueue.shift();
    const room = rooms[roomId];
    if (!room) continue;
    
    // Find nearby unvisited rooms in the same region or adjacent regions
    const nearbyRooms = [];
    
    for (const otherId of allRoomIds) {
        if (visited.has(otherId)) continue;
        
        const otherRegion = categorizeRoom(otherId, rooms[otherId]);
        const otherPos = regionPositions[otherRegion] || regionPositions['OTHER'];
        
        // Calculate relative position
        const dx = otherPos.baseX - coord.x;
        const dy = otherPos.baseY - coord.y;
        const dz = (otherPos.z || 0) - coord.z;
        
        // Find best direction
        let bestDir = null;
        let bestMatch = Infinity;
        
        for (const [dir, vec] of Object.entries(directions)) {
            const expectedDx = vec.x;
            const expectedDy = vec.y;
            const expectedDz = vec.z;
            
            const dist = Math.abs(dx - expectedDx) + Math.abs(dy - expectedDy) + Math.abs(dz - expectedDz);
            if (dist < bestMatch) {
                bestMatch = dist;
                bestDir = dir;
            }
        }
        
        if (bestDir && bestMatch <= 2) {
            const targetX = coord.x + directions[bestDir].x;
            const targetY = coord.y + directions[bestDir].y;
            const targetZ = coord.z + directions[bestDir].z;
            const coordKey = `${targetX},${targetY},${targetZ}`;
            
            // Check if coordinate is available
            if (!coordToRoom.has(coordKey)) {
                nearbyRooms.push({
                    roomId: otherId,
                    direction: bestDir,
                    coord: { x: targetX, y: targetY, z: targetZ },
                    region: otherRegion,
                    distance: bestMatch
                });
            }
        }
    }
    
    // Sort by distance and region similarity
    nearbyRooms.sort((a, b) => {
        if (a.region === region && b.region !== region) return -1;
        if (a.region !== region && b.region === region) return 1;
        return a.distance - b.distance;
    });
    
    // Connect to up to 4 nearby rooms (cardinal directions preferred)
    const cardinalDirs = ['north', 'south', 'east', 'west'];
    let connectionsMade = 0;
    
    for (const nearby of nearbyRooms) {
        if (connectionsMade >= 4) break;
        
        // Prefer cardinal directions
        const isCardinal = cardinalDirs.includes(nearby.direction);
        if (connectionsMade < 4 || isCardinal) {
            // Create bidirectional connection
            if (!newExits[roomId][nearby.direction]) {
                newExits[roomId][nearby.direction] = nearby.roomId;
                
                // Find reverse direction
                const reverseDir = {
                    'north': 'south',
                    'south': 'north',
                    'east': 'west',
                    'west': 'east',
                    'northeast': 'southwest',
                    'southwest': 'northeast',
                    'northwest': 'southeast',
                    'southeast': 'northwest',
                    'up': 'down',
                    'down': 'up'
                }[nearby.direction];
                
                if (reverseDir) {
                    newExits[nearby.roomId][reverseDir] = roomId;
                }
                
                // Assign coordinate and add to queue
                coordinates[nearby.roomId] = nearby.coord;
                coordToRoom.set(`${nearby.coord.x},${nearby.coord.y},${nearby.coord.z}`, nearby.roomId);
                visited.add(nearby.roomId);
                roomQueue.push({
                    roomId: nearby.roomId,
                    coord: nearby.coord,
                    region: nearby.region
                });
                
                connectionsMade++;
            }
        }
    }
    
    // If no connections made, find any unvisited room and connect it
    if (connectionsMade === 0 && visited.size < allRoomIds.length) {
        for (const otherId of allRoomIds) {
            if (visited.has(otherId)) continue;
            
            const otherRegion = categorizeRoom(otherId, rooms[otherId]);
            const otherPos = regionPositions[otherRegion] || regionPositions['OTHER'];
            
            // Place it in a logical direction
            const dirs = ['east', 'south', 'north', 'west'];
            for (const dir of dirs) {
                const vec = directions[dir];
                const targetX = coord.x + vec.x * 5;
                const targetY = coord.y + vec.y * 5;
                const targetZ = coord.z;
                const coordKey = `${targetX},${targetY},${targetZ}`;
                
                if (!coordToRoom.has(coordKey)) {
                    newExits[roomId][dir] = otherId;
                    const reverseDir = {
                        'north': 'south',
                        'south': 'north',
                        'east': 'west',
                        'west': 'east'
                    }[dir];
                    newExits[otherId][reverseDir] = roomId;
                    
                    coordinates[otherId] = { x: targetX, y: targetY, z: targetZ };
                    coordToRoom.set(coordKey, otherId);
                    visited.add(otherId);
                    roomQueue.push({
                        roomId: otherId,
                        coord: { x: targetX, y: targetY, z: targetZ },
                        region: otherRegion
                    });
                    break;
                }
            }
            if (visited.has(otherId)) break;
        }
    }
}

console.log(`\nConnected ${visited.size} rooms`);
console.log(`Remaining unconnected: ${allRoomIds.length - visited.size}`);

// Verify all rooms are reachable from bag_end
const reachable = new Set();
const reachQueue = ['bag_end'];
reachable.add('bag_end');

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

console.log(`\nReachable from bag_end: ${reachable.size}/${allRoomIds.length}`);

if (reachable.size === allRoomIds.length) {
    console.log('✅ All rooms are reachable!');
} else {
    console.log('⚠️  Some rooms are unreachable - adding connections...');
    
    // Connect unreachable rooms
    for (const roomId of allRoomIds) {
        if (!reachable.has(roomId)) {
            // Find nearest reachable room
            let nearest = null;
            let nearestDist = Infinity;
            
            for (const reachableId of reachable) {
                const dist = Math.abs((coordinates[reachableId]?.x || 0) - (coordinates[roomId]?.x || 0)) +
                           Math.abs((coordinates[reachableId]?.y || 0) - (coordinates[roomId]?.y || 0));
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearest = reachableId;
                }
            }
            
            if (nearest) {
                // Connect them
                const dir = 'east'; // Simple default
                newExits[nearest][dir] = roomId;
                newExits[roomId]['west'] = nearest;
                
                // Assign coordinate
                const nearestCoord = coordinates[nearest] || { x: 0, y: 0, z: 0 };
                const newCoord = { x: nearestCoord.x + 1, y: nearestCoord.y, z: nearestCoord.z };
                coordinates[roomId] = newCoord;
                coordToRoom.set(`${newCoord.x},${newCoord.y},${newCoord.z}`, roomId);
                reachable.add(roomId);
            }
        }
    }
    
    console.log(`Now reachable: ${reachable.size}/${allRoomIds.length}`);
}

// Verify coordinate constraints
console.log('\n' + '='.repeat(70));
console.log('Verifying coordinate constraints...');

let correctConnections = 0;
let totalConnections = 0;
const mismatches = [];

for (const [fromId, exits] of Object.entries(newExits)) {
    if (!coordinates[fromId]) continue;
    const fromCoord = coordinates[fromId];
    
    for (const [dir, toId] of Object.entries(exits)) {
        if (!coordinates[toId]) continue;
        totalConnections++;
        
        const vec = directions[dir];
        if (!vec) continue;
        
        const expected = {
            x: fromCoord.x + vec.x,
            y: fromCoord.y + vec.y,
            z: fromCoord.z + vec.z
        };
        
        const actual = coordinates[toId];
        
        if (expected.x === actual.x && expected.y === actual.y && expected.z === actual.z) {
            correctConnections++;
        } else {
            mismatches.push({ from: fromId, to: toId, dir, expected, actual });
        }
    }
}

console.log(`\nConstraint satisfaction: ${correctConnections}/${totalConnections} (${Math.round(correctConnections/totalConnections*100)}%)`);

if (mismatches.length > 0) {
    console.log(`\n⚠️  ${mismatches.length} mismatches found`);
    console.log('First 10 mismatches:');
    mismatches.slice(0, 10).forEach(m => {
        console.log(`  ${rooms[m.from].name} -> ${m.dir} -> ${rooms[m.to].name}`);
        console.log(`    Expected: (${m.expected.x}, ${m.expected.y}, ${m.expected.z})`);
        console.log(`    Actual: (${m.actual.x}, ${m.actual.y}, ${m.actual.z})`);
    });
} else {
    console.log('\n✅ All connections have perfect coordinate alignment!');
}

// Check for overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`\n⚠️  ${overlaps.length} coordinate overlaps found`);
} else {
    console.log('\n✅ No coordinate overlaps!');
}

// Now update the room files
console.log('\n' + '='.repeat(70));
console.log('Updating room files with new connections...');

// This is a simplified version - in reality we'd need to update each expansion file
// For now, let's create a summary file showing what needs to be changed
const summary = {
    totalRooms: allRoomIds.length,
    connectedRooms: reachable.size,
    totalConnections: totalConnections,
    correctConnections: correctConnections,
    overlaps: overlaps.length,
    newExits: newExits,
    coordinates: coordinates
};

writeFileSync('scripts/new-world-connections.json', JSON.stringify(summary, null, 2));
console.log('\n✅ New connection data saved to scripts/new-world-connections.json');
console.log('\nNext steps:');
console.log('1. Review the new connections');
console.log('2. Update room files with new exits');
console.log('3. Regenerate WorldMap.jsx with new coordinates');

