import { rooms } from '../server/src/data/rooms.js';
import fs from 'fs';

console.log('='.repeat(70));
console.log('REBUILDING WORLD AS LINEAR SNAKE-LIKE ADVENTURE PATH');
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

// Categorize rooms
function categorizeRoom(roomId, room) {
    const name = room.name.toLowerCase();
    const desc = (room.description || '').toLowerCase();
    
    if (name.includes('bag end') || name.includes('shire') || name.includes('hobbit') || 
        name.includes('hobbiton') || name.includes('bywater') || name.includes('tuckborough') ||
        name.includes('michel delving') || name.includes('buckland') || name.includes('crickhollow') ||
        name.includes('tookbank') || name.includes('waymeet') || name.includes('overhill')) {
        return { category: 'shire', priority: 1, z: 0 };
    }
    if (name.includes('old forest') || name.includes('withywindle') || name.includes('bombadil') ||
        name.includes('barrow downs')) {
        return { category: 'old_forest', priority: 2, z: 0 };
    }
    if (name.includes('bree') || name.includes('chetwood') || name.includes('weathertop') ||
        name.includes('weather hills') || name.includes('trollshaws') || name.includes('troll cave') ||
        name.includes('midgewater')) {
        return { category: 'bree', priority: 3, z: 0 };
    }
    if (name.includes('rivendell') || name.includes('ford of bruinen') || name.includes('last bridge') ||
        name.includes('bruinen') || name.includes('hollin gate')) {
        return { category: 'rivendell', priority: 4, z: 0 };
    }
    if (name.includes('moria') || name.includes('durin') || name.includes('khazad') ||
        name.includes('mazarbul') || name.includes('balin') || name.includes('mithril vein') ||
        name.includes('first hall') || name.includes('twenty-first') || 
        (name.includes('level') && (name.includes('moria') || desc.includes('moria'))) ||
        name.includes('bridge of khazad') || name.includes('endless stair')) {
        return { category: 'moria', priority: 5, z: -1 };
    }
    if (name.includes('lothlorien') || name.includes('lórien') || name.includes('caras galadhon') ||
        name.includes('cerin amroth') || name.includes('galadriel') || name.includes('mirror') ||
        name.includes('silverlode') || (name.includes('anduin') && name.includes('lothlorien'))) {
        return { category: 'lothlorien', priority: 6, z: 0 };
    }
    if (name.includes('fangorn') || name.includes('wellinghall') || name.includes('treebeard') ||
        name.includes('ent') || name.includes('entwash')) {
        return { category: 'fangorn', priority: 7, z: 0 };
    }
    if (name.includes('mirkwood') || name.includes('thranduil') || name.includes('woodland realm')) {
        return { category: 'mirkwood', priority: 7, z: 0 };
    }
    if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') ||
        name.includes('helm') || name.includes('dunharrow') || name.includes('paths of the dead') ||
        name.includes('harrowdale') || name.includes('aldburg') || name.includes('snowbourn') ||
        name.includes('gap of rohan') || name.includes('emnet')) {
        return { category: 'rohan', priority: 8, z: 0 };
    }
    if (name.includes('gondor') || name.includes('minas tirith') || name.includes('pelennor') ||
        name.includes('osgiliath') || name.includes('white tower') || name.includes('rath dinen') ||
        name.includes('steward') || name.includes('lossarnach')) {
        return { category: 'gondor', priority: 9, z: 0 };
    }
    if (name.includes('mordor') || name.includes('barad') || name.includes('mount doom') ||
        name.includes('black gate') || name.includes('gorgoroth') || name.includes('sammath') ||
        name.includes('cirith ungol') || name.includes('shelob') || name.includes('morgul') ||
        name.includes('durthang')) {
        return { category: 'mordor', priority: 10, z: 0 };
    }
    if (name.includes('mountain') || name.includes('peak') || name.includes('summit') ||
        name.includes('misty mountains') || name.includes('white mountains') || 
        name.includes('erebor') || name.includes('lonely mountain') ||
        name.includes('dimrill') || name.includes('caradhras')) {
        return { category: 'mountains', priority: 11, z: 1 };
    }
    return { category: 'other', priority: 6, z: 0 };
}

// Organize rooms
const categorized = {};
for (const [roomId, room] of Object.entries(rooms)) {
    const cat = categorizeRoom(roomId, room);
    if (!categorized[cat.category]) {
        categorized[cat.category] = [];
    }
    categorized[cat.category].push({ id: roomId, room, ...cat });
}

const categoryOrder = ['shire', 'old_forest', 'bree', 'rivendell', 'moria', 'lothlorien', 
                       'fangorn', 'mirkwood', 'rohan', 'gondor', 'mordor', 'mountains', 'other'];

const coordinates = {};
const newExits = {};
const usedCoords = new Set();

// Initialize
for (const roomId of Object.keys(rooms)) {
    newExits[roomId] = {};
}

// Build linear snake path
const path = [];
let currentX = 0;
let currentY = 0;
let currentZ = 0;
let snakeDir = 'east';
let roomsInDir = 0;
const TURN_AFTER = 5; // Turn after 5 rooms

// Start with Bag End
if (rooms.bag_end) {
    coordinates.bag_end = { x: 0, y: 0, z: 0 };
    usedCoords.add('0,0,0');
    path.push('bag_end');
}

// Process each category
for (const category of categoryOrder) {
    if (!categorized[category]) continue;
    
    const roomsInCategory = categorized[category];
    const categoryZ = roomsInCategory[0]?.z ?? 0;
    
    console.log(`Processing ${category}: ${roomsInCategory.length} rooms (z=${categoryZ})`);
    
    // If z-level changes, add transition
    if (categoryZ !== currentZ && path.length > 0) {
        const prevRoomId = path[path.length - 1];
        const prevCoord = coordinates[prevRoomId];
        currentZ = categoryZ;
    }
    
    // Connect rooms in category
    for (let i = 0; i < roomsInCategory.length; i++) {
        const { id: roomId } = roomsInCategory[i];
        if (roomId === 'bag_end' && path.includes('bag_end')) continue;
        
        // Calculate next position based on snake direction
        const move = directions[snakeDir];
        let nextX = currentX + move.x;
        let nextY = currentY + move.y;
        let nextZ = categoryZ;
        
        // Ensure coordinate is available
        let coordKey = `${nextX},${nextY},${nextZ}`;
        let attempts = 0;
        while (usedCoords.has(coordKey) && attempts < 50) {
            // Try nearby coordinates
            const offsets = [
                { x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 },
                { x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }
            ];
            const offset = offsets[attempts % offsets.length];
            nextX = currentX + move.x + offset.x;
            nextY = currentY + move.y + offset.y;
            coordKey = `${nextX},${nextY},${nextZ}`;
            attempts++;
        }
        
        const coord = { x: nextX, y: nextY, z: nextZ };
        coordinates[roomId] = coord;
        usedCoords.add(coordKey);
        
        // Connect to previous room
        if (path.length > 0) {
            const prevRoomId = path[path.length - 1];
            const prevCoord = coordinates[prevRoomId];
            
            // Calculate exact direction
            const dx = coord.x - prevCoord.x;
            const dy = coord.y - prevCoord.y;
            const dz = coord.z - prevCoord.z;
            
            let dir = null;
            if (dz > 0) dir = 'up';
            else if (dz < 0) dir = 'down';
            else if (dx > 0 && dy === 0) dir = 'east';
            else if (dx < 0 && dy === 0) dir = 'west';
            else if (dx === 0 && dy > 0) dir = 'north';
            else if (dx === 0 && dy < 0) dir = 'south';
            else if (dx > 0 && dy > 0) dir = 'northeast';
            else if (dx < 0 && dy > 0) dir = 'northwest';
            else if (dx > 0 && dy < 0) dir = 'southeast';
            else if (dx < 0 && dy < 0) dir = 'southwest';
            else dir = snakeDir; // Fallback
            
            // Verify coordinate matches direction
            const expectedCoord = {
                x: prevCoord.x + directions[dir].x,
                y: prevCoord.y + directions[dir].y,
                z: prevCoord.z + directions[dir].z
            };
            
            // If coordinate doesn't match, adjust it
            if (expectedCoord.x !== coord.x || expectedCoord.y !== coord.y || expectedCoord.z !== coord.z) {
                coordinates[roomId] = expectedCoord;
                const newKey = `${expectedCoord.x},${expectedCoord.y},${expectedCoord.z}`;
                usedCoords.delete(coordKey);
                usedCoords.add(newKey);
            }
            
            // Add connection
            newExits[prevRoomId][dir] = roomId;
            const opposite = {
                north: 'south', south: 'north',
                east: 'west', west: 'east',
                northeast: 'southwest', southwest: 'northeast',
                northwest: 'southeast', southeast: 'northwest',
                up: 'down', down: 'up'
            }[dir];
            if (opposite) {
                newExits[roomId][opposite] = prevRoomId;
            }
        }
        
        path.push(roomId);
        const finalCoord = coordinates[roomId];
        currentX = finalCoord.x;
        currentY = finalCoord.y;
        currentZ = finalCoord.z;
        roomsInDir++;
        
        // Turn snake direction
        if (roomsInDir >= TURN_AFTER) {
            if (snakeDir === 'east') snakeDir = 'north';
            else if (snakeDir === 'north') snakeDir = 'west';
            else if (snakeDir === 'west') snakeDir = 'south';
            else if (snakeDir === 'south') snakeDir = 'east';
            roomsInDir = 0;
        }
    }
}

// Connect any remaining rooms
const allRoomIds = Object.keys(rooms);
const connected = new Set(path);
const unconnected = allRoomIds.filter(id => !connected.has(id));

if (unconnected.length > 0) {
    console.log(`\nConnecting ${unconnected.length} remaining rooms...`);
    for (const roomId of unconnected) {
        // Find nearest connected room
        let nearest = null;
        let minDist = Infinity;
        for (const connectedId of connected) {
            if (!coordinates[connectedId]) continue;
            const dist = Math.abs(coordinates[connectedId].x - (coordinates[roomId]?.x ?? 0)) +
                        Math.abs(coordinates[connectedId].y - (coordinates[roomId]?.y ?? 0)) +
                        Math.abs(coordinates[connectedId].z - (coordinates[roomId]?.z ?? 0));
            if (dist < minDist) {
                minDist = dist;
                nearest = connectedId;
            }
        }
        
        if (nearest && coordinates[nearest]) {
            const nearestCoord = coordinates[nearest];
            const coord = { x: nearestCoord.x + 1, y: nearestCoord.y, z: nearestCoord.z };
            const key = `${coord.x},${coord.y},${coord.z}`;
            
            // Find available coordinate
            let attempts = 0;
            while (usedCoords.has(key) && attempts < 100) {
                coord.x++;
                const newKey = `${coord.x},${coord.y},${coord.z}`;
                if (!usedCoords.has(newKey)) {
                    coord.x++;
                    break;
                }
                attempts++;
            }
            
            coordinates[roomId] = coord;
            usedCoords.add(`${coord.x},${coord.y},${coord.z}`);
            
            newExits[nearest]['east'] = roomId;
            newExits[roomId]['west'] = nearest;
            connected.add(roomId);
        }
    }
}

// Verify reachability
const visited = new Set();
const queue = ['bag_end'];
visited.add('bag_end');

while (queue.length > 0) {
    const current = queue.shift();
    const exits = newExits[current] || {};
    for (const targetId of Object.values(exits)) {
        if (!visited.has(targetId)) {
            visited.add(targetId);
            queue.push(targetId);
        }
    }
}

console.log(`\n✅ ${visited.size} rooms reachable from bag_end`);

// Verify coordinate constraints
let correct = 0;
let total = 0;
for (const [roomId, exits] of Object.entries(newExits)) {
    if (!coordinates[roomId]) continue;
    const fromCoord = coordinates[roomId];
    
    for (const [dir, targetId] of Object.entries(exits)) {
        if (!coordinates[targetId]) continue;
        total++;
        
        const vec = directions[dir];
        if (!vec) continue;
        
        const expected = {
            x: fromCoord.x + vec.x,
            y: fromCoord.y + vec.y,
            z: fromCoord.z + vec.z
        };
        
        const actual = coordinates[targetId];
        
        if (expected.x === actual.x && expected.y === actual.y && expected.z === actual.z) {
            correct++;
        }
    }
}

console.log(`Constraint satisfaction: ${correct}/${total} (${Math.round(correct/total*100)}%)`);

// Check overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
console.log(`Coordinate overlaps: ${overlaps.length}`);

// Save
const output = {
    newExits,
    coordinates,
    path: path.slice(0, 50),
    stats: {
        totalRooms: Object.keys(rooms).length,
        connectedRooms: visited.size,
        constraintSatisfaction: `${correct}/${total} (${Math.round(correct/total*100)}%)`,
        overlaps: overlaps.length
    }
};

fs.writeFileSync('scripts/linear-world-connections.json', JSON.stringify(output, null, 2));
console.log('\n✅ Saved to scripts/linear-world-connections.json');

console.log(`\nPath preview (first 25 rooms):`);
path.slice(0, 25).forEach((id, i) => {
    const coord = coordinates[id];
    console.log(`${i + 1}. ${rooms[id].name.substring(0, 35).padEnd(35)} at (${coord.x}, ${coord.y}, ${coord.z})`);
});

console.log('\n' + '='.repeat(70));
console.log('WORLD REBUILD COMPLETE!');
console.log('='.repeat(70));
console.log(`✅ ${visited.size} rooms connected`);
console.log(`✅ Linear snake-like path created`);
console.log(`✅ Underground (z < 0) and mountain (z > 0) areas included`);

