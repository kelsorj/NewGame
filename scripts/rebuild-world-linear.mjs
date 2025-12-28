import { rooms } from '../server/src/data/rooms.js';
import fs from 'fs';

console.log('='.repeat(70));
console.log('REBUILDING WORLD AS LINEAR ADVENTURE PATH');
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

// Categorize rooms by region/type for logical ordering
function categorizeRoom(roomId, room) {
    const name = room.name.toLowerCase();
    const desc = (room.description || '').toLowerCase();
    
    // Shire region
    if (name.includes('bag end') || name.includes('shire') || name.includes('hobbit') || 
        name.includes('hobbiton') || name.includes('bywater') || name.includes('tuckborough') ||
        name.includes('michel delving') || name.includes('buckland') || name.includes('crickhollow')) {
        return { category: 'shire', priority: 1 };
    }
    
    // Bree and surrounding areas
    if (name.includes('bree') || name.includes('chetwood') || name.includes('weathertop') ||
        name.includes('weather hills') || name.includes('trollshaws') || name.includes('troll cave')) {
        return { category: 'bree', priority: 2 };
    }
    
    // Rivendell and Last Bridge
    if (name.includes('rivendell') || name.includes('ford of bruinen') || name.includes('last bridge') ||
        name.includes('bruinen')) {
        return { category: 'rivendell', priority: 3 };
    }
    
    // Moria (underground)
    if (name.includes('moria') || name.includes('durin') || name.includes('khazad') ||
        name.includes('mazarbul') || name.includes('balin') || name.includes('mithril vein') ||
        name.includes('first hall') || name.includes('twenty-first') || name.includes('level') ||
        (desc.includes('moria') && !name.includes('approach'))) {
        return { category: 'moria', priority: 4, z: -1 }; // Underground
    }
    
    // Lothlórien
    if (name.includes('lothlorien') || name.includes('lórien') || name.includes('caras galadhon') ||
        name.includes('cerin amroth') || name.includes('galadriel') || name.includes('mirror')) {
        return { category: 'lothlorien', priority: 5 };
    }
    
    // Fangorn and Ents
    if (name.includes('fangorn') || name.includes('wellinghall') || name.includes('treebeard') ||
        name.includes('ent')) {
        return { category: 'fangorn', priority: 6 };
    }
    
    // Rohan
    if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') ||
        name.includes('helm') || name.includes('dunharrow') || name.includes('paths of the dead') ||
        name.includes('harrowdale') || name.includes('aldburg') || name.includes('snowbourn')) {
        return { category: 'rohan', priority: 7 };
    }
    
    // Gondor
    if (name.includes('gondor') || name.includes('minas tirith') || name.includes('pelennor') ||
        name.includes('osgiliath') || name.includes('white tower') || name.includes('rath dinen') ||
        name.includes('steward')) {
        return { category: 'gondor', priority: 8 };
    }
    
    // Mordor
    if (name.includes('mordor') || name.includes('barad') || name.includes('mount doom') ||
        name.includes('black gate') || name.includes('gorgoroth') || name.includes('sammath') ||
        name.includes('cirith ungol') || name.includes('shelob') || name.includes('morgul')) {
        return { category: 'mordor', priority: 9 };
    }
    
    // Mountains (high z)
    if (name.includes('mountain') || name.includes('peak') || name.includes('summit') ||
        name.includes('misty mountains') || name.includes('white mountains') || 
        name.includes('erebor') || name.includes('lonely mountain')) {
        return { category: 'mountains', priority: 10, z: 1 }; // Above ground
    }
    
    // Mirkwood
    if (name.includes('mirkwood') || name.includes('thranduil')) {
        return { category: 'mirkwood', priority: 6 };
    }
    
    // Old Forest
    if (name.includes('old forest') || name.includes('withywindle') || name.includes('bombadil')) {
        return { category: 'old_forest', priority: 2 };
    }
    
    // Default - place in middle
    return { category: 'other', priority: 5 };
}

// Organize rooms by category
const categorized = {};
for (const [roomId, room] of Object.entries(rooms)) {
    const cat = categorizeRoom(roomId, room);
    if (!categorized[cat.category]) {
        categorized[cat.category] = [];
    }
    categorized[cat.category].push({ id: roomId, room, ...cat });
}

// Sort categories by priority
const categoryOrder = ['shire', 'old_forest', 'bree', 'rivendell', 'moria', 'lothlorien', 
                       'fangorn', 'mirkwood', 'rohan', 'gondor', 'mordor', 'mountains', 'other'];

// Build linear path: snake-like winding through categories
const path = [];
let currentX = 0;
let currentY = 0;
let currentZ = 0;
let direction = 'east'; // Start going east
let snakeLength = 0; // How many rooms in current direction before turning
const maxSnakeLength = 8; // Turn after this many rooms

const coordinates = {};
const newExits = {};

// Initialize all rooms
for (const roomId of Object.keys(rooms)) {
    newExits[roomId] = {};
}

// Helper to get next direction for snake
function getNextDirection(currentDir, snakeCount) {
    // After going east for a while, go north, then west, then south, etc.
    if (snakeCount >= maxSnakeLength) {
        if (currentDir === 'east') return 'north';
        if (currentDir === 'north') return 'west';
        if (currentDir === 'west') return 'south';
        if (currentDir === 'south') return 'east';
    }
    return currentDir;
}

// Build path through each category
for (const category of categoryOrder) {
    if (!categorized[category]) continue;
    
    const roomsInCategory = categorized[category];
    console.log(`Processing ${category}: ${roomsInCategory.length} rooms`);
    
    // Determine z-level for this category
    let categoryZ = currentZ;
    if (roomsInCategory[0].z !== undefined) {
        categoryZ = roomsInCategory[0].z;
    }
    
    // Connect rooms in this category
    for (let i = 0; i < roomsInCategory.length; i++) {
        const { id: roomId } = roomsInCategory[i];
        
        // Assign coordinates
        coordinates[roomId] = { x: currentX, y: currentY, z: categoryZ };
        
        // Connect to previous room in path
        if (path.length > 0) {
            const prevRoomId = path[path.length - 1];
            const prevCoord = coordinates[prevRoomId];
            
            // Determine direction from previous to current
            const dx = currentX - prevCoord.x;
            const dy = currentY - prevCoord.y;
            const dz = categoryZ - prevCoord.z;
            
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
            else dir = 'east'; // Default
            
            if (dir) {
                newExits[prevRoomId][dir] = roomId;
                // Add reverse connection
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
        }
        
        path.push(roomId);
        
        // Move to next position (snake-like)
        snakeLength++;
        if (snakeLength >= maxSnakeLength) {
            direction = getNextDirection(direction, snakeLength);
            snakeLength = 0;
        }
        
        const move = directions[direction];
        currentX += move.x;
        currentY += move.y;
        currentZ = categoryZ; // Keep z-level for category
    }
    
    // Add some variation - occasionally change direction between categories
    if (Math.random() > 0.5) {
        direction = getNextDirection(direction, maxSnakeLength);
        snakeLength = 0;
    }
}

// Ensure Bag End is at start
if (path[0] !== 'bag_end') {
    const bagEndIndex = path.indexOf('bag_end');
    if (bagEndIndex > 0) {
        path.splice(bagEndIndex, 1);
        path.unshift('bag_end');
        coordinates.bag_end = { x: 0, y: 0, z: 0 };
    }
}

// Add some branching paths for exploration (not just linear)
// Connect some rooms to nearby rooms for exploration
const roomIds = Object.keys(rooms);
for (let i = 0; i < roomIds.length; i++) {
    const roomId = roomIds[i];
    if (!coordinates[roomId]) continue;
    
    const coord = coordinates[roomId];
    
    // Find nearby rooms (within 2 units)
    for (let j = i + 1; j < roomIds.length; j++) {
        const otherId = roomIds[j];
        if (!coordinates[otherId]) continue;
        
        const otherCoord = coordinates[otherId];
        const dx = otherCoord.x - coord.x;
        const dy = otherCoord.y - coord.y;
        const dz = otherCoord.z - coord.z;
        const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
        
        // If very close (1-2 units) and not already connected, add a connection
        if (dist <= 2 && dist > 0 && !newExits[roomId][Object.keys(newExits[roomId]).find(d => newExits[roomId][d] === otherId)]) {
            // Determine direction
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
            
            // Only add if we don't already have an exit in that direction
            if (dir && !newExits[roomId][dir] && Math.random() < 0.3) { // 30% chance for exploration branches
                newExits[roomId][dir] = otherId;
                const opposite = {
                    north: 'south', south: 'north',
                    east: 'west', west: 'east',
                    northeast: 'southwest', southwest: 'northeast',
                    northwest: 'southeast', southeast: 'northwest',
                    up: 'down', down: 'up'
                }[dir];
                if (opposite && !newExits[otherId][opposite]) {
                    newExits[otherId][opposite] = roomId;
                }
            }
        }
    }
}

// Verify all rooms are connected
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

const unconnected = Object.keys(rooms).filter(id => !visited.has(id));
if (unconnected.length > 0) {
    console.log(`\n⚠️  Warning: ${unconnected.length} rooms not reachable from bag_end`);
    console.log('Connecting them...');
    
    // Connect unconnected rooms to nearest connected room
    for (const unconnectedId of unconnected) {
        if (!coordinates[unconnectedId]) {
            coordinates[unconnectedId] = { x: currentX++, y: currentY, z: 0 };
        }
        
        // Find nearest connected room
        let nearest = null;
        let minDist = Infinity;
        for (const connectedId of visited) {
            if (!coordinates[connectedId]) continue;
            const dist = Math.abs(coordinates[connectedId].x - coordinates[unconnectedId].x) +
                        Math.abs(coordinates[connectedId].y - coordinates[unconnectedId].y) +
                        Math.abs(coordinates[connectedId].z - coordinates[unconnectedId].z);
            if (dist < minDist) {
                minDist = dist;
                nearest = connectedId;
            }
        }
        
        if (nearest) {
            // Connect them
            const dx = coordinates[unconnectedId].x - coordinates[nearest].x;
            const dy = coordinates[unconnectedId].y - coordinates[nearest].y;
            const dz = coordinates[unconnectedId].z - coordinates[nearest].z;
            
            let dir = 'east';
            if (dz > 0) dir = 'up';
            else if (dz < 0) dir = 'down';
            else if (dx > 0) dir = 'east';
            else if (dx < 0) dir = 'west';
            else if (dy > 0) dir = 'north';
            else if (dy < 0) dir = 'south';
            
            newExits[nearest][dir] = unconnectedId;
            const opposite = {
                north: 'south', south: 'north',
                east: 'west', west: 'east',
                up: 'down', down: 'up'
            }[dir];
            if (opposite) {
                newExits[unconnectedId][opposite] = nearest;
            }
            visited.add(unconnectedId);
        }
    }
}

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

console.log(`\nConstraint satisfaction: ${correct}/${total} (${Math.round(correct/total*100)}%)`);

// Check overlaps
const overlapMap = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!overlapMap.has(key)) overlapMap.set(key, []);
    overlapMap.get(key).push(roomId);
}

const overlaps = Array.from(overlapMap.entries()).filter(([_, rooms]) => rooms.length > 1);
console.log(`Coordinate overlaps: ${overlaps.length}`);

// Save results
const output = {
    newExits,
    coordinates,
    path: path.slice(0, 50), // First 50 rooms in path
    stats: {
        totalRooms: Object.keys(rooms).length,
        connectedRooms: visited.size,
        constraintSatisfaction: `${correct}/${total} (${Math.round(correct/total*100)}%)`,
        overlaps: overlaps.length
    }
};

fs.writeFileSync('scripts/linear-world-connections.json', JSON.stringify(output, null, 2));
console.log('\n✅ Saved to scripts/linear-world-connections.json');
console.log(`\nPath preview (first 20 rooms):`);
path.slice(0, 20).forEach((id, i) => {
    const coord = coordinates[id];
    console.log(`${i + 1}. ${rooms[id].name} [${id}] at (${coord.x}, ${coord.y}, ${coord.z})`);
});

console.log('\n' + '='.repeat(70));
console.log('WORLD REBUILD COMPLETE!');
console.log('='.repeat(70));
console.log(`✅ ${visited.size} rooms connected`);
console.log(`✅ Linear snake-like path created`);
console.log(`✅ Underground (z < 0) and mountain (z > 0) areas included`);
console.log(`✅ Some branching for exploration added`);

