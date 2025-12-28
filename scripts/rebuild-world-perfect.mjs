import { rooms } from '../server/src/data/rooms.js';
import { writeFileSync } from 'fs';

console.log('='.repeat(70));
console.log('REBUILDING WORLD WITH PERFECT COORDINATE ALIGNMENT');
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
};

// Categorize rooms by region
function getRegion(roomId, room) {
    const name = room.name.toLowerCase();
    const id = roomId.toLowerCase();
    
    if (id === 'bag_end') return 'START';
    if (name.includes('shire') || name.includes('hobbit') || name.includes('michel') || name.includes('tuck') || name.includes('bywater') || name.includes('bucklebury') || name.includes('buckland') || name.includes('crickhollow') || name.includes('old forest') || name.includes('bombadil') || name.includes('withywindle') || name.includes('scary') || name.includes('needlehole') || name.includes('longbottom') || name.includes('whitwell') || name.includes('rushock') || name.includes('green hill') || name.includes('marish') || name.includes('sackville') || name.includes('woody end')) return 'SHIRE';
    if (name.includes('bree') || name.includes('archet') || name.includes('combe') || name.includes('staddle') || name.includes('chetwood') || name.includes('prancing pony') || name.includes('stock road') || name.includes('brandywine bridge')) return 'BREE';
    if (name.includes('weathertop') || name.includes('weather hills') || name.includes('troll') || name.includes('last bridge') || name.includes('trollshaws') || name.includes('troll cave')) return 'WEATHERHILLS';
    if (name.includes('rivendell') || name.includes('elrond') || name.includes('ford of bruinen') || name.includes('hollin') || name.includes('waterfall') || name.includes('library') || name.includes('forge') || name.includes('garden') || name.includes('hall of fire') || name.includes('guest house') || name.includes('study')) return 'RIVENDELL';
    if (name.includes('moria') || name.includes('khazad') || name.includes('durin') || name.includes('mines') || name.includes('goblin') || name.includes('twenty-first') || name.includes('balin') || name.includes('endless stair') || name.includes('bridge of khazad') || name.includes('doors of durin') || name.includes('first hall') || name.includes('chasm') || name.includes('nameless') || name.includes('dark lake') || name.includes('mithril') || name.includes('iron mines') || name.includes('smelting') || name.includes('royal') || name.includes('deep mines') || name.includes('unending stair')) return 'MORIA';
    if (name.includes('lothlorien') || name.includes('galadriel') || name.includes('caras') || name.includes('cerin') || name.includes('nimbrethil') || name.includes('mallorn') || name.includes('silverlode') || name.includes('celebrant') || name.includes('niphredil') || name.includes('singing groves') || name.includes('craft')) return 'LORIEN';
    if (name.includes('fangorn') || name.includes('ent') || name.includes('treebeard') || name.includes('wellinghall') || name.includes('entmoot') || name.includes('entwash') || name.includes('skinbark') || name.includes('leaflock') || name.includes('eaves of fangorn') || name.includes('edge of fangorn') || name.includes('deep in fangorn') || name.includes('hidden path')) return 'FANGORN';
    if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') || name.includes('helms') || name.includes('isengard') || name.includes('orthanc') || name.includes('gap of rohan') || name.includes('westfold') || name.includes('eastfold') || name.includes('emnet') || name.includes('wold') || name.includes('snowbourn') || name.includes('starkhorn') || name.includes('dunharrow') || name.includes('harrowdale') || name.includes('aldburg') || name.includes('deep coomb') || name.includes('deeping stream') || name.includes('hornburg')) return 'ROHAN';
    if (name.includes('gondor') || name.includes('minas tirith') || name.includes('pelennor') || name.includes('osgiliath') || name.includes('ithilien') || name.includes('henneth') || name.includes('lossarnach') || name.includes('pelargir') || name.includes('minas morgul') || name.includes('cirith ungol') || name.includes('shelob') || name.includes('morgul') || name.includes('white tower') || name.includes('citadel') || name.includes('houses of healing') || name.includes('stables') || name.includes('rath') || name.includes('house of stewards')) return 'GONDOR';
    if (name.includes('mordor') || name.includes('barad') || name.includes('mount doom') || name.includes('black gate') || name.includes('gorgoroth') || name.includes('sammath') || name.includes('durthang') || name.includes('plains of mordor')) return 'MORDOR';
    if (name.includes('mirkwood') || name.includes('thranduil') || name.includes('rhosgobel') || name.includes('elf-path') || name.includes('elf path') || name.includes('mirkwood path') || name.includes('mirkwood depths') || name.includes('mirkwood edge')) return 'MIRKWOOD';
    if (name.includes('erebor') || name.includes('lonely mountain') || name.includes('lake-town') || name.includes('long lake')) return 'EREBOR';
    if (name.includes('fornost') || name.includes('annuminas') || name.includes('evendim') || name.includes('barrow') || name.includes('approach to fornost') || name.includes('fornost gates') || name.includes('fornost ruins') || name.includes('fornost temple') || name.includes('fornost palace') || name.includes('fornost keep') || name.includes('approach to annuminas') || name.includes('annuminas ruins') || name.includes('annuminas tower') || name.includes('lake evendim')) return 'FORNOST';
    if (name.includes('grey havens') || name.includes('mithlond') || name.includes('havens') || name.includes('approach to mithlond') || name.includes('docks of mithlond')) return 'HAVENS';
    if (name.includes('anduin') || name.includes('rauros') || name.includes('amon hen') || name.includes('parth galen') || name.includes('confluence') || name.includes('midstream') || name.includes('approach to rauros')) return 'ANDUIN';
    
    return 'OTHER';
}

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

// Build connections using strict coordinate matching
console.log('Building connections with perfect coordinate alignment...\n');

const queue = [{ roomId: 'bag_end', coord: { x: 0, y: 0, z: 0 } }];
let connectionsMade = 0;

while (queue.length > 0 && visited.size < Object.keys(rooms).length) {
    const { roomId, coord } = queue.shift();
    const room = rooms[roomId];
    if (!room) continue;
    
    const region = getRegion(roomId, room);
    
    // Find unvisited rooms in same or adjacent regions
    const candidates = [];
    
    for (const otherId of Object.keys(rooms)) {
        if (visited.has(otherId)) continue;
        
        const otherRegion = getRegion(otherId, rooms[otherId]);
        
        // Prefer same region, then adjacent regions
        const regionOrder = [
            region, // Same region first
            ...(region === 'SHIRE' ? ['BREE', 'HAVENS'] : []),
            ...(region === 'BREE' ? ['SHIRE', 'WEATHERHILLS', 'FORNOST'] : []),
            ...(region === 'WEATHERHILLS' ? ['BREE', 'RIVENDELL'] : []),
            ...(region === 'RIVENDELL' ? ['WEATHERHILLS', 'MORIA', 'LORIEN'] : []),
            ...(region === 'MORIA' ? ['RIVENDELL', 'LORIEN', 'FANGORN'] : []),
            ...(region === 'LORIEN' ? ['MORIA', 'FANGORN', 'ANDUIN'] : []),
            ...(region === 'FANGORN' ? ['LORIEN', 'ROHAN', 'MORIA'] : []),
            ...(region === 'ROHAN' ? ['FANGORN', 'GONDOR', 'MORIA'] : []),
            ...(region === 'GONDOR' ? ['ROHAN', 'MORDOR', 'ANDUIN'] : []),
            ...(region === 'MORDOR' ? ['GONDOR'] : []),
            'OTHER'
        ];
        
        const regionPriority = regionOrder.indexOf(otherRegion);
        if (regionPriority === -1) continue;
        
        candidates.push({
            roomId: otherId,
            region: otherRegion,
            priority: regionPriority
        });
    }
    
    // Sort by region priority
    candidates.sort((a, b) => a.priority - b.priority);
    
    // Try to connect to candidates using available directions
    const availableDirs = ['north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest'];
    let dirIndex = 0;
    
    for (const candidate of candidates.slice(0, 6)) { // Try up to 6 connections
        if (dirIndex >= availableDirs.length) break;
        
        const dir = availableDirs[dirIndex];
        const vec = directions[dir];
        const targetX = coord.x + vec.x;
        const targetY = coord.y + vec.y;
        const targetZ = coord.z + vec.z;
        const coordKey = `${targetX},${targetY},${targetZ}`;
        
        // Check if coordinate is available
        if (!coordToRoom.has(coordKey)) {
            // Create connection
            newExits[roomId][dir] = candidate.roomId;
            const revDir = reverseDir[dir];
            if (revDir) {
                newExits[candidate.roomId][revDir] = roomId;
            }
            
            // Assign coordinate
            coordinates[candidate.roomId] = { x: targetX, y: targetY, z: targetZ };
            coordToRoom.set(coordKey, candidate.roomId);
            visited.add(candidate.roomId);
            queue.push({
                roomId: candidate.roomId,
                coord: { x: targetX, y: targetY, z: targetZ }
            });
            
            connectionsMade++;
            dirIndex++;
        } else {
            dirIndex++;
        }
    }
    
    // If we couldn't connect anything, try placing next room further away
    if (connectionsMade === 0 && visited.size < Object.keys(rooms).length) {
        for (const candidate of candidates) {
            // Place it east of current position
            const targetX = coord.x + 10;
            const targetY = coord.y;
            const targetZ = coord.z;
            const coordKey = `${targetX},${targetY},${targetZ}`;
            
            if (!coordToRoom.has(coordKey)) {
                newExits[roomId]['east'] = candidate.roomId;
                newExits[candidate.roomId]['west'] = roomId;
                
                coordinates[candidate.roomId] = { x: targetX, y: targetY, z: targetZ };
                coordToRoom.set(coordKey, candidate.roomId);
                visited.add(candidate.roomId);
                queue.push({
                    roomId: candidate.roomId,
                    coord: { x: targetX, y: targetY, z: targetZ }
                });
                break;
            }
        }
    }
}

console.log(`Connected ${visited.size} rooms`);
console.log(`Total connections made: ${connectionsMade}\n`);

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

console.log(`Reachable from bag_end: ${reachable.size}/${Object.keys(rooms).length}`);

// Connect any unreachable rooms
if (reachable.size < Object.keys(rooms).length) {
    console.log('Connecting unreachable rooms...');
    for (const roomId of Object.keys(rooms)) {
        if (!reachable.has(roomId)) {
            // Find nearest reachable room
            let nearest = null;
            let nearestDist = Infinity;
            
            for (const reachableId of reachable) {
                if (!coordinates[reachableId] || !coordinates[roomId]) continue;
                const dist = Math.abs(coordinates[reachableId].x - coordinates[roomId].x) +
                           Math.abs(coordinates[reachableId].y - coordinates[roomId].y);
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearest = reachableId;
                }
            }
            
            if (nearest && coordinates[nearest]) {
                const nearestCoord = coordinates[nearest];
                const newCoord = { x: nearestCoord.x + 1, y: nearestCoord.y, z: nearestCoord.z };
                const coordKey = `${newCoord.x},${newCoord.y},${newCoord.z}`;
                
                if (!coordToRoom.has(coordKey)) {
                    newExits[nearest]['east'] = roomId;
                    newExits[roomId]['west'] = nearest;
                    coordinates[roomId] = newCoord;
                    coordToRoom.set(coordKey, roomId);
                    reachable.add(roomId);
                }
            }
        }
    }
    console.log(`Now reachable: ${reachable.size}/${Object.keys(rooms).length}`);
}

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

const accuracy = Math.round(correct / total * 100);
console.log(`Constraint satisfaction: ${correct}/${total} (${accuracy}%)`);

// Check overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
console.log(`\nCoordinate overlaps: ${overlaps.length}`);

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
        connectedRooms: reachable.size,
        totalConnections: total,
        correctConnections: correct,
        accuracy: accuracy,
        overlaps: overlaps.length
    }
};

writeFileSync('scripts/perfect-world-connections.json', JSON.stringify(result, null, 2));
console.log('\n✅ Results saved to scripts/perfect-world-connections.json');

