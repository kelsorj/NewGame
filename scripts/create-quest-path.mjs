// Create a clear, continuous quest path from Bag End to Mount Doom
// This will create a visible connected path through all major regions

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
console.log('CREATING CONTINUOUS QUEST PATH: BAG END → MOUNT DOOM');
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
const positionToRoom = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z || 0}`;
    positionToRoom.set(key, roomId);
}

// Find a room by partial name match
function findRoom(namePart) {
    for (const [roomId, coord] of Object.entries(coordinates)) {
        if (roomId.toLowerCase().includes(namePart.toLowerCase())) {
            return { roomId, coord };
        }
    }
    return null;
}

// Create path between two coordinates, creating new rooms as needed
function createDirectPath(fromX, fromY, toX, toY, pathName, z = 0) {
    const rooms = [];
    const dx = toX - fromX;
    const dy = toY - fromY;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    if (steps === 0) return rooms;
    
    console.log(`  Creating path ${pathName}: (${fromX},${fromY}) → (${toX},${toY}), ${steps} steps`);
    
    let prevRoomId = positionToRoom.get(`${fromX},${fromY},${z}`);
    
    for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const x = Math.round(fromX + dx * t);
        const y = Math.round(fromY + dy * t);
        const key = `${x},${y},${z}`;
        
        let roomId = positionToRoom.get(key);
        
        // Create new room if needed
        if (!roomId) {
            roomId = `${pathName}_${i}`;
            coordinates[roomId] = { x, y, z };
            exits[roomId] = {};
            positionToRoom.set(key, roomId);
            rooms.push(roomId);
        }
        
        // Connect to previous room
        if (prevRoomId && prevRoomId !== roomId) {
            const prevCoord = coordinates[prevRoomId];
            const currCoord = coordinates[roomId];
            
            if (prevCoord && currCoord) {
                // Determine direction
                const ddx = Math.sign(currCoord.x - prevCoord.x);
                const ddy = Math.sign(currCoord.y - prevCoord.y);
                
                for (const { dir, dx: dirDx, dy: dirDy } of directions) {
                    if (ddx === dirDx && ddy === dirDy) {
                        if (!exits[prevRoomId]) exits[prevRoomId] = {};
                        if (!exits[roomId]) exits[roomId] = {};
                        
                        exits[prevRoomId][dir] = roomId;
                        exits[roomId][opposites[dir]] = prevRoomId;
                        break;
                    }
                }
            }
        }
        
        prevRoomId = roomId;
    }
    
    return rooms;
}

// Get coordinates of key locations
const bagEnd = findRoom('bag_end');
const mountDoom = findRoom('mount_doom_summit') || findRoom('mount_doom');

if (!bagEnd) {
    console.error('ERROR: Cannot find Bag End!');
    process.exit(1);
}

if (!mountDoom) {
    console.error('ERROR: Cannot find Mount Doom!');
    process.exit(1);
}

console.log(`\nBag End: (${bagEnd.coord.x}, ${bagEnd.coord.y})`);
console.log(`Mount Doom: (${mountDoom.coord.x}, ${mountDoom.coord.y})`);

// Define waypoints for the quest path (matching closer.txt layout)
// These are intermediate points the path should go through
const questWaypoints = [
    { name: 'Bag End', x: bagEnd.coord.x, y: bagEnd.coord.y },
    { name: 'East Shire', x: bagEnd.coord.x + 15, y: bagEnd.coord.y },
    { name: 'Bree Road', x: -22, y: 20 },
    { name: 'Weathertop Approach', x: -7, y: 25 },
    { name: 'Ford of Bruinen', x: 0, y: 18 },
    { name: 'Rivendell', x: 0, y: 14 },
    { name: 'Misty Mountains Path', x: 8, y: 5 },
    { name: 'Moria Approach', x: 12, y: -5 },
    { name: 'East Gate of Moria', x: 15, y: -8 },
    { name: 'Dimrill Dale', x: 18, y: -5 },
    { name: 'Lorien Border', x: 15, y: -3 },
    { name: 'Nimrodel', x: 18, y: -8 },
    { name: 'South of Lorien', x: 15, y: -15 },
    { name: 'Fangorn Edge', x: 12, y: -18 },
    { name: 'Rohan Plains', x: 0, y: -20 },
    { name: 'Edoras Approach', x: -15, y: -23 },
    { name: 'Gap of Rohan', x: -10, y: -25 },
    { name: 'South Road', x: 0, y: -30 },
    { name: 'North Gondor', x: 5, y: -35 },
    { name: 'Minas Tirith Road', x: 12, y: -40 },
    { name: 'Cross-roads', x: 20, y: -45 },
    { name: 'Morgul Vale', x: 30, y: -48 },
    { name: 'Cirith Ungol Path', x: 45, y: -50 },
    { name: 'Mordor Border', x: 55, y: -48 },
    { name: 'Gorgoroth Plain', x: 65, y: -47 },
    { name: 'Mount Doom', x: mountDoom.coord.x, y: mountDoom.coord.y },
];

console.log(`\nCreating quest path with ${questWaypoints.length} waypoints...`);

let totalNewRooms = 0;

// Create paths between each consecutive waypoint
for (let i = 0; i < questWaypoints.length - 1; i++) {
    const from = questWaypoints[i];
    const to = questWaypoints[i + 1];
    
    const pathName = `main_quest_${i}_${from.name.replace(/\s+/g, '_').toLowerCase()}`;
    const newRooms = createDirectPath(from.x, from.y, to.x, to.y, pathName);
    totalNewRooms += newRooms.length;
}

// Also create secondary branch paths
console.log('\nCreating secondary paths...');

const secondaryPaths = [
    // To Helm's Deep
    { from: { x: -15, y: -23 }, to: { x: -30, y: -28 }, name: 'helms_deep_road' },
    // To Isengard
    { from: { x: -10, y: -18 }, to: { x: -22, y: -17 }, name: 'isengard_road' },
    // To Erebor (northern route from Rivendell)
    { from: { x: 0, y: 14 }, to: { x: 20, y: 30 }, name: 'north_road_1' },
    { from: { x: 20, y: 30 }, to: { x: 45, y: 47 }, name: 'north_road_2' },
    // Erebor to Mirkwood
    { from: { x: 45, y: 47 }, to: { x: 60, y: 26 }, name: 'dale_road' },
    // Mirkwood to Lorien
    { from: { x: 60, y: 26 }, to: { x: 40, y: 10 }, name: 'mirkwood_path_1' },
    { from: { x: 40, y: 10 }, to: { x: 15, y: -3 }, name: 'mirkwood_path_2' },
    // Grey Havens
    { from: { x: bagEnd.coord.x, y: bagEnd.coord.y }, to: { x: -60, y: 15 }, name: 'west_road_1' },
    { from: { x: -60, y: 15 }, to: { x: -87, y: 16 }, name: 'west_road_2' },
    // To Pelargir
    { from: { x: 12, y: -42 }, to: { x: 12, y: -56 }, name: 'pelargir_road' },
    // Black Gate route
    { from: { x: 30, y: -40 }, to: { x: 45, y: -41 }, name: 'black_gate_road' },
    // Barad-dur
    { from: { x: 65, y: -47 }, to: { x: 75, y: -40 }, name: 'barad_dur_path' },
];

for (const path of secondaryPaths) {
    const newRooms = createDirectPath(path.from.x, path.from.y, path.to.x, path.to.y, path.name);
    totalNewRooms += newRooms.length;
}

// Rebuild all adjacent connections for existing rooms
console.log('\nRebuilding adjacent connections...');

let connectionCount = 0;
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (!exits[roomId]) exits[roomId] = {};
    
    for (const { dir, dx, dy } of directions) {
        const adjKey = `${coord.x + dx},${coord.y + dy},${coord.z || 0}`;
        const adjRoom = positionToRoom.get(adjKey);
        
        if (adjRoom) {
            exits[roomId][dir] = adjRoom;
            connectionCount++;
        }
    }
}

// Verify connectivity
console.log('\nVerifying connectivity from Bag End...');

function findReachable(startRoom) {
    const visited = new Set();
    const queue = [startRoom];
    
    while (queue.length > 0) {
        const room = queue.shift();
        if (visited.has(room)) continue;
        visited.add(room);
        
        const roomExits = exits[room] || {};
        for (const target of Object.values(roomExits)) {
            if (target && !visited.has(target)) {
                queue.push(target);
            }
        }
    }
    
    return visited;
}

const reachable = findReachable('bag_end');
const canReachMountDoom = reachable.has(mountDoom.roomId);

console.log(`  Rooms reachable from Bag End: ${reachable.size}`);
console.log(`  Can reach Mount Doom: ${canReachMountDoom ? 'YES ✓' : 'NO ✗'}`);

if (!canReachMountDoom) {
    console.log('\n  Creating direct connection to Mount Doom...');
    
    // Find the closest reachable room to Mount Doom
    let closestReachable = null;
    let minDist = Infinity;
    
    for (const roomId of reachable) {
        const coord = coordinates[roomId];
        if (!coord) continue;
        
        const dist = Math.abs(coord.x - mountDoom.coord.x) + Math.abs(coord.y - mountDoom.coord.y);
        if (dist < minDist) {
            minDist = dist;
            closestReachable = { roomId, coord };
        }
    }
    
    if (closestReachable) {
        console.log(`  Connecting from ${closestReachable.roomId} at (${closestReachable.coord.x}, ${closestReachable.coord.y})`);
        createDirectPath(closestReachable.coord.x, closestReachable.coord.y, 
                         mountDoom.coord.x, mountDoom.coord.y, 'final_doom_path');
        
        // Rebuild connections
        for (const [roomId, coord] of Object.entries(coordinates)) {
            if (!exits[roomId]) exits[roomId] = {};
            
            for (const { dir, dx, dy } of directions) {
                const adjKey = `${coord.x + dx},${coord.y + dy},${coord.z || 0}`;
                const adjRoom = positionToRoom.get(adjKey);
                
                if (adjRoom) {
                    exits[roomId][dir] = adjRoom;
                }
            }
        }
    }
}

// Final verification
const finalReachable = findReachable('bag_end');
const finalCanReach = finalReachable.has(mountDoom.roomId);

// Save
worldData.coordinates = coordinates;
worldData.exits = exits;
writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

console.log('\n' + '='.repeat(100));
console.log('QUEST PATH COMPLETE');
console.log('='.repeat(100));
console.log(`\nTotal rooms: ${Object.keys(coordinates).length}`);
console.log(`New path rooms created: ${totalNewRooms}`);
console.log(`Total connections: ${connectionCount}`);
console.log(`\nPath from Bag End to Mount Doom: ${finalCanReach ? 'CONNECTED ✓' : 'NOT CONNECTED ✗'}`);
console.log(`Rooms reachable from Bag End: ${finalReachable.size} / ${Object.keys(coordinates).length}`);
console.log('='.repeat(100));

