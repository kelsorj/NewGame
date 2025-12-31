// Connect all regions together with paths to ensure the entire world is traversable
// This creates paths between all major regions and verifies connectivity from Bag End

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const worldDataPath = join(__dirname, 'linear-world-connections.json');
const worldData = JSON.parse(readFileSync(worldDataPath, 'utf-8'));

let coordinates = worldData.coordinates || {};
let exits = worldData.exits || {};

console.log('='.repeat(100));
console.log('CONNECTING ALL REGIONS WITH PATHS');
console.log('='.repeat(100));

// Direction helpers
const directions = [
    { dir: 'north', dx: 0, dy: 1 },
    { dir: 'south', dx: 0, dy: -1 },
    { dir: 'east', dx: 1, dy: 0 },
    { dir: 'west', dx: -1, dy: 0 },
    { dir: 'northeast', dx: 1, dy: 1 },
    { dir: 'northwest', dx: -1, dy: 1 },
    { dir: 'southeast', dx: 1, dy: -1 },
    { dir: 'southwest', dx: -1, dy: -1 },
];

const opposites = {
    north: 'south', south: 'north',
    east: 'west', west: 'east',
    northeast: 'southwest', southwest: 'northeast',
    northwest: 'southeast', southeast: 'northwest',
};

// Build position lookup
function buildPositionMap() {
    const map = new Map();
    for (const [roomId, coord] of Object.entries(coordinates)) {
        const key = `${coord.x},${coord.y},${coord.z || 0}`;
        map.set(key, roomId);
    }
    return map;
}

let positionToRoom = buildPositionMap();

// Check what's reachable from Bag End
function findReachable(startRoom) {
    const visited = new Set();
    const queue = [startRoom];
    
    while (queue.length > 0) {
        const room = queue.shift();
        if (visited.has(room)) continue;
        visited.add(room);
        
        const roomExits = exits[room] || {};
        for (const targetRoom of Object.values(roomExits)) {
            if (targetRoom && !visited.has(targetRoom)) {
                queue.push(targetRoom);
            }
        }
    }
    
    return visited;
}

// Find the closest room in the reachable set to a target position
function findClosestReachable(reachable, targetX, targetY, targetZ = 0) {
    let closest = null;
    let minDist = Infinity;
    
    for (const roomId of reachable) {
        const coord = coordinates[roomId];
        if (!coord || (coord.z || 0) !== targetZ) continue;
        
        const dist = Math.abs(coord.x - targetX) + Math.abs(coord.y - targetY);
        if (dist < minDist) {
            minDist = dist;
            closest = roomId;
        }
    }
    
    return { roomId: closest, distance: minDist };
}

// Create a path between two points, creating rooms as needed
function createPathBetween(fromX, fromY, toX, toY, pathPrefix, z = 0) {
    const newRooms = [];
    const dx = toX - fromX;
    const dy = toY - fromY;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    if (steps === 0) return newRooms;
    
    let prevRoom = null;
    const prevKey = `${fromX},${fromY},${z}`;
    prevRoom = positionToRoom.get(prevKey);
    
    for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const x = Math.round(fromX + dx * t);
        const y = Math.round(fromY + dy * t);
        const key = `${x},${y},${z}`;
        
        let currentRoom = positionToRoom.get(key);
        
        // Create room if it doesn't exist
        if (!currentRoom) {
            currentRoom = `${pathPrefix}_${i}`;
            coordinates[currentRoom] = { x, y, z };
            exits[currentRoom] = {};
            positionToRoom.set(key, currentRoom);
            newRooms.push(currentRoom);
        }
        
        // Connect to previous room
        if (prevRoom && currentRoom !== prevRoom) {
            const prevCoord = coordinates[prevRoom];
            const currCoord = coordinates[currentRoom];
            
            // Find the direction
            const ddx = currCoord.x - prevCoord.x;
            const ddy = currCoord.y - prevCoord.y;
            
            for (const { dir, dx: dirDx, dy: dirDy } of directions) {
                if (Math.sign(ddx) === dirDx && Math.sign(ddy) === dirDy) {
                    if (!exits[prevRoom]) exits[prevRoom] = {};
                    if (!exits[currentRoom]) exits[currentRoom] = {};
                    
                    exits[prevRoom][dir] = currentRoom;
                    exits[currentRoom][opposites[dir]] = prevRoom;
                    break;
                }
            }
        }
        
        prevRoom = currentRoom;
    }
    
    return newRooms;
}

// Connect to the nearest point in the reachable set
function connectToReachable(reachable, targetX, targetY, pathPrefix, z = 0) {
    const { roomId: closestRoom, distance } = findClosestReachable(reachable, targetX, targetY, z);
    
    if (!closestRoom) {
        console.log(`  Warning: No reachable room found for ${pathPrefix}`);
        return [];
    }
    
    const closestCoord = coordinates[closestRoom];
    console.log(`  Connecting ${pathPrefix} at (${targetX}, ${targetY}) to ${closestRoom} at (${closestCoord.x}, ${closestCoord.y}) - distance: ${distance}`);
    
    return createPathBetween(closestCoord.x, closestCoord.y, targetX, targetY, pathPrefix, z);
}

// Get representative room for each region
function getRegionRooms() {
    const regionRooms = {};
    
    for (const [roomId, coord] of Object.entries(coordinates)) {
        const id = roomId.toLowerCase();
        let region = null;
        
        // Determine region
        if (id === 'bag_end') region = 'bag_end';
        else if (id.includes('shire') || id.includes('hobbit') || id.includes('bywater') || 
                 id.includes('buckland') || id.includes('brandywine')) region = 'shire';
        else if (id.includes('bree') || id.includes('prancing')) region = 'bree';
        else if (id.includes('weathertop') || id.includes('amon_sul')) region = 'weathertop';
        else if (id.includes('rivendell') || id.includes('elrond') || id.includes('imladris')) region = 'rivendell';
        else if (id.includes('moria') || id.includes('khazad') || id.includes('durin')) region = 'moria';
        else if (id.includes('lorien') || id.includes('galadriel') || id.includes('caras')) region = 'lorien';
        else if (id.includes('fangorn') || id.includes('ent') || id.includes('treebeard')) region = 'fangorn';
        else if (id.includes('isengard') || id.includes('orthanc')) region = 'isengard';
        else if (id.includes('rohan') && !id.includes('gap')) region = 'rohan';
        else if (id.includes('edoras') || id.includes('meduseld')) region = 'edoras';
        else if (id.includes('helm') || id.includes('hornburg')) region = 'helms_deep';
        else if (id.includes('minas_tirith') || id.includes('white_city')) region = 'minas_tirith';
        else if (id.includes('osgiliath')) region = 'osgiliath';
        else if (id.includes('minas_morgul') || id.includes('morgul')) region = 'minas_morgul';
        else if (id.includes('mordor') || id.includes('gorgoroth')) region = 'mordor';
        else if (id.includes('mount_doom') || id.includes('orodruin')) region = 'mount_doom';
        else if (id.includes('barad_dur') || id.includes('dark_tower')) region = 'barad_dur';
        else if (id.includes('erebor') || id.includes('lonely_mountain')) region = 'erebor';
        else if (id.includes('mirkwood') || id.includes('elvenking')) region = 'mirkwood';
        else if (id.includes('laketown') || id.includes('esgaroth')) region = 'laketown';
        else if (id.includes('dale')) region = 'dale';
        else if (id.includes('gondor') || id.includes('ithilien')) region = 'gondor';
        else if (id.includes('pelargir')) region = 'pelargir';
        else if (id.includes('fornost')) region = 'fornost';
        else if (id.includes('grey_haven') || id.includes('mithlond')) region = 'grey_havens';
        else if (id.includes('dead_marsh')) region = 'dead_marshes';
        else if (id.includes('black_gate') || id.includes('morannon')) region = 'black_gate';
        else if (id.includes('emyn_muil') || id.includes('argonath')) region = 'emyn_muil';
        
        if (region) {
            if (!regionRooms[region]) regionRooms[region] = [];
            regionRooms[region].push({ roomId, coord });
        }
    }
    
    // Get center room for each region
    const regionCenters = {};
    for (const [region, rooms] of Object.entries(regionRooms)) {
        // Find the center-most room
        let sumX = 0, sumY = 0;
        for (const { coord } of rooms) {
            sumX += coord.x;
            sumY += coord.y;
        }
        const avgX = sumX / rooms.length;
        const avgY = sumY / rooms.length;
        
        let closest = rooms[0];
        let minDist = Infinity;
        for (const room of rooms) {
            const dist = Math.abs(room.coord.x - avgX) + Math.abs(room.coord.y - avgY);
            if (dist < minDist) {
                minDist = dist;
                closest = room;
            }
        }
        
        regionCenters[region] = closest;
    }
    
    return regionCenters;
}

// Main connection logic
console.log('\n1. Analyzing current connectivity...');
let reachable = findReachable('bag_end');
console.log(`   Reachable from Bag End: ${reachable.size} / ${Object.keys(coordinates).length} rooms`);

const regionCenters = getRegionRooms();
console.log(`\n2. Found ${Object.keys(regionCenters).length} regions with representative rooms`);

// Define the connection order (the path through Middle Earth)
const connectionOrder = [
    'bag_end',
    'shire',
    'bree',
    'weathertop',
    'rivendell',
    'moria',
    'lorien',
    'fangorn',
    'rohan',
    'edoras',
    'helms_deep',
    'isengard',
    'gondor',
    'minas_tirith',
    'osgiliath',
    'minas_morgul',
    'mordor',
    'barad_dur',
    'mount_doom',
    // Northern branch
    'erebor',
    'dale',
    'laketown',
    'mirkwood',
    // Other locations
    'grey_havens',
    'fornost',
    'pelargir',
    'dead_marshes',
    'black_gate',
    'emyn_muil',
];

console.log('\n3. Creating paths to connect all regions...');

let totalNewRooms = 0;
let pathCount = 0;

// First, connect the main quest path
const mainPath = [
    'bag_end', 'shire', 'bree', 'weathertop', 'rivendell', 
    'moria', 'lorien', 'fangorn', 'rohan', 'edoras',
    'gondor', 'minas_tirith', 'osgiliath', 'minas_morgul', 'mordor', 'mount_doom'
];

console.log('\n   Main quest path:');
for (let i = 0; i < mainPath.length - 1; i++) {
    const from = mainPath[i];
    const to = mainPath[i + 1];
    
    if (!regionCenters[from] || !regionCenters[to]) {
        console.log(`   Skipping ${from} -> ${to} (missing region)`);
        continue;
    }
    
    const fromCoord = regionCenters[from].coord;
    const toCoord = regionCenters[to].coord;
    
    const pathPrefix = `quest_path_${from}_to_${to}`;
    const newRooms = createPathBetween(fromCoord.x, fromCoord.y, toCoord.x, toCoord.y, pathPrefix);
    
    if (newRooms.length > 0) {
        console.log(`   Created ${newRooms.length} rooms: ${from} -> ${to}`);
        totalNewRooms += newRooms.length;
        pathCount++;
    }
}

// Secondary paths
const secondaryPaths = [
    ['mordor', 'barad_dur'],
    ['rohan', 'helms_deep'],
    ['rohan', 'isengard'],
    ['rivendell', 'erebor'],  // Northern route
    ['erebor', 'dale'],
    ['dale', 'laketown'],
    ['laketown', 'mirkwood'],
    ['mirkwood', 'lorien'],  // Connect Mirkwood to main path
    ['shire', 'grey_havens'],
    ['bree', 'fornost'],
    ['minas_tirith', 'pelargir'],
    ['emyn_muil', 'dead_marshes'],
    ['dead_marshes', 'black_gate'],
    ['black_gate', 'mordor'],
    ['lorien', 'emyn_muil'],
];

console.log('\n   Secondary paths:');
for (const [from, to] of secondaryPaths) {
    if (!regionCenters[from] || !regionCenters[to]) {
        console.log(`   Skipping ${from} -> ${to} (missing region)`);
        continue;
    }
    
    const fromCoord = regionCenters[from].coord;
    const toCoord = regionCenters[to].coord;
    
    const pathPrefix = `path_${from}_to_${to}`;
    const newRooms = createPathBetween(fromCoord.x, fromCoord.y, toCoord.x, toCoord.y, pathPrefix);
    
    if (newRooms.length > 0) {
        console.log(`   Created ${newRooms.length} rooms: ${from} -> ${to}`);
        totalNewRooms += newRooms.length;
        pathCount++;
    }
}

// Update position map
positionToRoom = buildPositionMap();

// Rebuild all adjacent connections
console.log('\n4. Rebuilding all adjacent connections...');

let connectionCount = 0;
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (!exits[roomId]) exits[roomId] = {};
    
    for (const { dir, dx, dy } of directions) {
        const adjX = coord.x + dx;
        const adjY = coord.y + dy;
        const adjKey = `${adjX},${adjY},${coord.z || 0}`;
        const adjRoom = positionToRoom.get(adjKey);
        
        if (adjRoom) {
            exits[roomId][dir] = adjRoom;
            connectionCount++;
        }
    }
}

console.log(`   Created ${connectionCount} adjacent connections`);

// Final connectivity check
console.log('\n5. Final connectivity check...');
reachable = findReachable('bag_end');
const unreachable = [];

for (const roomId of Object.keys(coordinates)) {
    if (!reachable.has(roomId)) {
        unreachable.push(roomId);
    }
}

console.log(`   Reachable from Bag End: ${reachable.size} / ${Object.keys(coordinates).length} rooms`);
console.log(`   Unreachable: ${unreachable.length} rooms`);

// Try to connect unreachable rooms
if (unreachable.length > 0) {
    console.log('\n6. Connecting unreachable rooms...');
    
    // Group unreachable by approximate location
    for (const roomId of unreachable) {
        const coord = coordinates[roomId];
        if (!coord) continue;
        
        // Find nearest reachable room
        let nearestReachable = null;
        let nearestDist = Infinity;
        
        for (const reachableId of reachable) {
            const reachCoord = coordinates[reachableId];
            if (!reachCoord || (reachCoord.z || 0) !== (coord.z || 0)) continue;
            
            const dist = Math.abs(reachCoord.x - coord.x) + Math.abs(reachCoord.y - coord.y);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestReachable = reachableId;
            }
        }
        
        if (nearestReachable && nearestDist <= 50) {
            const nearCoord = coordinates[nearestReachable];
            const pathPrefix = `connect_${roomId}`;
            const newRooms = createPathBetween(nearCoord.x, nearCoord.y, coord.x, coord.y, pathPrefix);
            
            // Add new rooms to reachable
            for (const newRoom of newRooms) {
                reachable.add(newRoom);
            }
            reachable.add(roomId);
            totalNewRooms += newRooms.length;
        }
    }
    
    // Rebuild connections again
    positionToRoom = buildPositionMap();
    for (const [roomId, coord] of Object.entries(coordinates)) {
        if (!exits[roomId]) exits[roomId] = {};
        
        for (const { dir, dx, dy } of directions) {
            const adjX = coord.x + dx;
            const adjY = coord.y + dy;
            const adjKey = `${adjX},${adjY},${coord.z || 0}`;
            const adjRoom = positionToRoom.get(adjKey);
            
            if (adjRoom) {
                exits[roomId][dir] = adjRoom;
            }
        }
    }
}

// Final check
reachable = findReachable('bag_end');
const finalUnreachable = Object.keys(coordinates).filter(r => !reachable.has(r));

console.log(`\n   Final reachable: ${reachable.size} / ${Object.keys(coordinates).length} rooms`);
if (finalUnreachable.length > 0) {
    console.log(`   Still unreachable: ${finalUnreachable.length} rooms`);
    console.log(`   Examples: ${finalUnreachable.slice(0, 10).join(', ')}`);
}

// Save
worldData.coordinates = coordinates;
worldData.exits = exits;
writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

console.log('\n' + '='.repeat(100));
console.log('CONNECTION COMPLETE');
console.log('='.repeat(100));
console.log(`\nTotal rooms: ${Object.keys(coordinates).length}`);
console.log(`New path rooms created: ${totalNewRooms}`);
console.log(`Paths created: ${pathCount}`);
console.log(`Rooms reachable from Bag End: ${reachable.size} (${Math.round(reachable.size / Object.keys(coordinates).length * 100)}%)`);
console.log('='.repeat(100));

