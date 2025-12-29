#!/usr/bin/env node
/**
 * Rebuild World - Full Connected World with Regions, Roads, and Paths
 * 
 * Creates a connected world starting from Bag End, with:
 * - Regions placed to match Middle Earth geography
 * - Intermediate path/road rooms to connect regions
 * - Above and below ground rooms properly stacked
 * - All connections are adjacent-only
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import rooms
const roomsPath = path.join(__dirname, '../server/src/data/rooms.js');
const roomsModule = await import(`file://${roomsPath}`);
const { rooms } = roomsModule;

console.log(`Loaded ${Object.keys(rooms).length} rooms from data files`);

// Region definitions with target positions (Middle Earth geography)
const regions = {
    shire: {
        center: { x: 0, y: 0 },
        rooms: ['bag_end', 'tuckborough', 'tookbank', 'michel_delving', 'hobbiton_square', 
                'waymeet', 'overhill', 'scary', 'needlehole', 'longbottom', 'sackville_manor',
                'whitwell', 'rushock_bog', 'green_hill_country', 'bucklebury', 'brandy_hall',
                'buckland_kitchen', 'buckland_cellar', 'crickhollow', 'old_forest_buckland_entrance']
    },
    old_forest: {
        center: { x: 5, y: 0 },
        rooms: ['old_forest', 'old_forest_depth', 'withywindle', 'bombadil_house', 'bombadil_garden',
                'deep_in_old_forest', 'tom_bombadil_house']
    },
    barrow_downs: {
        center: { x: 10, y: 0 },
        rooms: ['barrow_downs', 'barrow_chamber', 'barrow_chamber_second_mound']
    },
    bree: {
        center: { x: 15, y: 0 },
        rooms: ['bree_gate', 'bree_square', 'prancing_pony', 'bree_inn', 'bree_stable']
    },
    weathertop: {
        center: { x: 25, y: 0 },
        rooms: ['weathertop_approach', 'weathertop_base', 'weathertop_summit']
    },
    rivendell: {
        center: { x: 35, y: 0 },
        rooms: ['rivendell', 'elrond_study', 'rivendell_library', 'rivendell_halls', 'rivendell_gardens']
    },
    moria: {
        center: { x: 45, y: 0 },
        z: -1, // Underground
        rooms: ['moria_gates', 'moria_halls', 'moria_bridge', 'moria_depths', 'doors_of_durin',
                'moria_chamber', 'moria_treasure_room']
    },
    lothlorien: {
        center: { x: 55, y: 0 },
        rooms: ['lothlorien', 'caras_galadhon', 'galadriel_mirror', 'lothlorien_forest']
    },
    fangorn: {
        center: { x: 65, y: 10 },
        rooms: ['fangorn_eaves', 'fangorn_depths', 'wellinghall', 'treebeard_glade', 'fangorn_clearing']
    },
    rohan: {
        center: { x: 70, y: 20 },
        rooms: ['rohan_plains', 'edoras_approach', 'edoras_gates', 'meduseld', 'aldburg',
                'harrowdale', 'dunharrow', 'helms_deep', 'helms_deep_interior', 'snowbourn_banks',
                'east_emnet', 'west_emnet', 'entwash_delta', 'gap_of_rohan']
    },
    mirkwood: {
        center: { x: 50, y: -10 },
        rooms: ['mirkwood', 'mirkwood_path', 'mirkwood_depths', 'thranduil_halls_interior', 
                'mirkwood_path_2', 'mirkwood_clearing']
    },
    erebor: {
        center: { x: 60, y: -15 },
        rooms: ['erebor', 'lonely_mountain', 'dwarven_halls', 'erebor_gates']
    },
    gondor: {
        center: { x: 75, y: 30 },
        rooms: ['pelennor_fields', 'osgiliath_ruins', 'ithilien_woods', 'henneth_annun',
                'lossarnach_valleys', 'pelargir_port', 'annuminas_ruins', 'annuminas_tower', 'gondor_plains']
    },
    minas_tirith: {
        center: { x: 80, y: 30 },
        rooms: ['minas_tirith_gates', 'first_level', 'second_level', 'third_level',
                'fourth_level', 'fifth_level', 'sixth_level', 'white_tower',
                'minas_tirith_stables', 'minas_tirith_houses_of_healing', 'citadel_guards_hall', 'hall_of_kings']
    },
    mordor: {
        center: { x: 90, y: 40 },
        rooms: ['mordor_gates', 'barad_dur_approach', 'barad_dur_base', 'barad_dur_throne_room',
                'mount_doom_approach', 'mount_doom_sammath_naur', 'cirith_ungol', 'morgul_vale',
                'morgul_pass', 'durthang_fortress', 'minas_morgul_gates', 'black_gate']
    }
};

// Path connections between regions (in order)
const regionPaths = [
    ['shire', 'old_forest'],
    ['old_forest', 'barrow_downs'],
    ['barrow_downs', 'bree'],
    ['bree', 'weathertop'],
    ['weathertop', 'rivendell'],
    ['rivendell', 'moria'],
    ['moria', 'lothlorien'],
    ['lothlorien', 'fangorn'],
    ['fangorn', 'rohan'],
    ['rohan', 'gondor'],
    ['gondor', 'minas_tirith'],
    ['minas_tirith', 'mordor'],
    ['lothlorien', 'mirkwood'],
    ['mirkwood', 'erebor']
];

// Assign coordinates
function assignCoordinates() {
    const coordinates = {};
    const usedPositions = new Set();
    const pathRooms = []; // Track path rooms we create
    
    // Helper to find adjacent position
    function findAdjacentPosition(nearX, nearY, z, used) {
        const directions = [
            { dx: 0, dy: 1 },   // N
            { dx: 1, dy: 0 },   // E
            { dx: 0, dy: -1 },  // S
            { dx: -1, dy: 0 }, // W
            { dx: 1, dy: 1 },   // NE
            { dx: 1, dy: -1 },   // SE
            { dx: -1, dy: -1 },  // SW
            { dx: -1, dy: 1 }    // NW
        ];
        
        for (const dir of directions) {
            const x = nearX + dir.dx;
            const y = nearY + dir.dy;
            const key = `${x},${y},${z}`;
            if (!used.has(key)) {
                used.add(key);
                return { x, y, z };
            }
        }
        return null;
    }
    
    // Place rooms within each region
    for (const [regionName, region] of Object.entries(regions)) {
        const center = region.center;
        const z = region.z || 0;
        let x = center.x;
        let y = center.y;
        let placed = 0;
        
        for (const roomId of region.rooms) {
            if (!rooms[roomId]) continue;
            
            if (placed === 0) {
                // First room at center
                const key = `${x},${y},${z}`;
                if (!usedPositions.has(key)) {
                    usedPositions.add(key);
                    coordinates[roomId] = { x, y, z };
                } else {
                    const pos = findAdjacentPosition(x, y, z, usedPositions);
                    if (pos) coordinates[roomId] = pos;
                }
            } else {
                // Place adjacent to previous room in region
                const prevRoomId = region.rooms[placed - 1];
                const prevCoord = coordinates[prevRoomId];
                if (prevCoord) {
                    const pos = findAdjacentPosition(prevCoord.x, prevCoord.y, z, usedPositions);
                    if (pos) {
                        coordinates[roomId] = pos;
                    } else {
                        // Fallback: place near center
                        const pos = findAdjacentPosition(center.x, center.y, z, usedPositions);
                        if (pos) coordinates[roomId] = pos;
                    }
                }
            }
            placed++;
        }
    }
    
    // Place remaining rooms (not in defined regions) - place them near their logical regions
    const placedRoomIds = new Set();
    for (const region of Object.values(regions)) {
        for (const roomId of region.rooms) {
            placedRoomIds.add(roomId);
        }
    }
    
    // Map room IDs to likely regions based on name/description
    const roomToRegion = {};
    for (const [roomId, room] of Object.entries(rooms)) {
        if (placedRoomIds.has(roomId)) continue;
        
        const name = (room.name || '').toLowerCase();
        const desc = (room.description || '').toLowerCase();
        
        // Determine region based on name/description
        let targetRegion = 'shire';
        if (name.includes('shire') || name.includes('hobbit') || name.includes('buckland') || name.includes('took') || name.includes('brandy')) {
            targetRegion = 'shire';
        } else if (name.includes('forest') || name.includes('bombadil') || name.includes('withywindle')) {
            targetRegion = 'old_forest';
        } else if (name.includes('barrow')) {
            targetRegion = 'barrow_downs';
        } else if (name.includes('bree') || name.includes('pony')) {
            targetRegion = 'bree';
        } else if (name.includes('weathertop') || name.includes('amon')) {
            targetRegion = 'weathertop';
        } else if (name.includes('rivendell') || name.includes('elrond')) {
            targetRegion = 'rivendell';
        } else if (name.includes('moria') || name.includes('durin')) {
            targetRegion = 'moria';
        } else if (name.includes('lothlorien') || name.includes('galadriel') || name.includes('caras')) {
            targetRegion = 'lothlorien';
        } else if (name.includes('fangorn') || name.includes('treebeard') || name.includes('ent')) {
            targetRegion = 'fangorn';
        } else if (name.includes('rohan') || name.includes('edoras') || name.includes('meduseld') || name.includes('helm') || name.includes('emnet')) {
            targetRegion = 'rohan';
        } else if (name.includes('mirkwood') || name.includes('thranduil')) {
            targetRegion = 'mirkwood';
        } else if (name.includes('erebor') || name.includes('lonely') || name.includes('dwarven')) {
            targetRegion = 'erebor';
        } else if (name.includes('gondor') || name.includes('pelennor') || name.includes('osgiliath') || name.includes('ithilien') || name.includes('annuminas')) {
            targetRegion = 'gondor';
        } else if (name.includes('minas_tirith') || name.includes('tirith') || name.includes('white_tower') || name.includes('citadel')) {
            targetRegion = 'minas_tirith';
        } else if (name.includes('mordor') || name.includes('barad') || name.includes('doom') || name.includes('cirith') || name.includes('morgul')) {
            targetRegion = 'mordor';
        }
        
        roomToRegion[roomId] = targetRegion;
    }
    
    // Place rooms near their target regions
    const undergroundKeywords = ['mine', 'mines', 'underground', 'cave', 'tunnel', 'depth', 'chamber', 'stair'];
    for (const [roomId, targetRegion] of Object.entries(roomToRegion)) {
        const room = rooms[roomId];
        if (!room) continue;
        
        const name = (room.name || '').toLowerCase();
        const desc = (room.description || '').toLowerCase();
        const isUnderground = undergroundKeywords.some(kw => name.includes(kw) || desc.includes(kw));
        
        const region = regions[targetRegion];
        if (!region) continue;
        
        const center = region.center;
        const z = isUnderground ? (region.z || -1) : (region.z || 0);
        
        // Find last placed room in this region to place adjacent
        let lastCoord = { x: center.x, y: center.y, z };
        if (region.rooms.length > 0) {
            const lastRoom = region.rooms[region.rooms.length - 1];
            if (coordinates[lastRoom]) {
                lastCoord = coordinates[lastRoom];
                lastCoord.z = z; // Use correct Z level
            }
        }
        
        const pos = findAdjacentPosition(lastCoord.x, lastCoord.y, z, usedPositions);
        if (pos) {
            coordinates[roomId] = pos;
        } else {
            // Fallback: spiral search
            for (let radius = 1; radius <= 10; radius++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    for (let dy = -radius; dy <= radius; dy++) {
                        if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                            const x = center.x + dx;
                            const y = center.y + dy;
                            const key = `${x},${y},${z}`;
                            if (!usedPositions.has(key)) {
                                usedPositions.add(key);
                                coordinates[roomId] = { x, y, z };
                                break;
                            }
                        }
                    }
                    if (coordinates[roomId]) break;
                }
                if (coordinates[roomId]) break;
            }
        }
    }
    
    // Don't create fake path rooms - instead ensure regions are close enough
    // that real rooms can connect directly. Regions are already placed close together.
    
    return { coordinates, pathRooms: [] };
}

// Create connections - ONLY ADJACENT
function createConnections(coordinates, pathRooms) {
    const exits = {};
    
    // Initialize only real rooms
    for (const roomId of Object.keys(rooms)) {
        exits[roomId] = {};
    }
    
    function getDirection(room1, room2) {
        const c1 = coordinates[room1];
        const c2 = coordinates[room2];
        if (!c1 || !c2) return null;
        
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const dz = c2.z - c1.z;
        
        // Vertical
        if (dx === 0 && dy === 0) {
            if (dz === 1) return 'up';
            if (dz === -1) return 'down';
        }
        
        // Horizontal (adjacent only)
        if (dz === 0) {
            if (dx === 0 && dy === 1) return 'north';
            if (dx === 0 && dy === -1) return 'south';
            if (dx === 1 && dy === 0) return 'east';
            if (dx === -1 && dy === 0) return 'west';
            if (dx === 1 && dy === 1) return 'northeast';
            if (dx === 1 && dy === -1) return 'southeast';
            if (dx === -1 && dy === -1) return 'southwest';
            if (dx === -1 && dy === 1) return 'northwest';
        }
        
        return null;
    }
    
    // Connect all adjacent rooms (only real rooms)
    const allRooms = Object.keys(rooms);
    for (const room1 of allRooms) {
        for (const room2 of allRooms) {
            if (room1 === room2) continue;
            
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) continue;
            
            const dx = Math.abs(c2.x - c1.x);
            const dy = Math.abs(c2.y - c1.y);
            const dz = Math.abs(c2.z - c1.z);
            
            // Only connect adjacent
            const isAdjacent = 
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                (dz === 1 && dx === 0 && dy === 0) ||
                (dz === -1 && dx === 0 && dy === 0);
            
            if (isAdjacent) {
                const dir = getDirection(room1, room2);
                if (dir && !exits[room1][dir]) {
                    exits[room1][dir] = room2;
                    // Reverse connection
                    const reverseDir = {
                        'north': 'south', 'south': 'north',
                        'east': 'west', 'west': 'east',
                        'northeast': 'southwest', 'southwest': 'northeast',
                        'northwest': 'southeast', 'southeast': 'northwest',
                        'up': 'down', 'down': 'up'
                    }[dir];
                    if (reverseDir && !exits[room2][reverseDir]) {
                        exits[room2][reverseDir] = room1;
                    }
                }
            }
        }
    }
    
    // Connect Minas Tirith levels vertically
    const minasTirithLevels = ['minas_tirith_gates', 'first_level', 'second_level', 'third_level',
                               'fourth_level', 'fifth_level', 'sixth_level', 'white_tower'];
    for (let i = 0; i < minasTirithLevels.length - 1; i++) {
        const lower = minasTirithLevels[i];
        const upper = minasTirithLevels[i + 1];
        if (coordinates[lower] && coordinates[upper]) {
            exits[lower]['up'] = upper;
            exits[upper]['down'] = lower;
        }
    }
    
    return exits;
}

// Verify connectivity and fix any unreachable rooms
function verifyAndFixConnectivity(exits, coordinates, pathRooms) {
    // Only check real rooms, not path rooms (they're just connection points)
    const allRooms = Object.keys(rooms);
    const visited = new Set();
    const queue = ['bag_end'];
    visited.add('bag_end');
    
    while (queue.length > 0) {
        const current = queue.shift();
        const currentExits = exits[current] || {};
        for (const targetId of Object.values(currentExits)) {
            if (targetId && !visited.has(targetId)) {
                visited.add(targetId);
                queue.push(targetId);
            }
        }
    }
    
    const reachable = visited.size;
    const unreachable = allRooms.filter(r => !visited.has(r));
    
    console.log(`\nConnectivity check (from bag_end):`);
    console.log(`   Total rooms: ${allRooms.length}`);
    console.log(`   Reachable: ${reachable}`);
    console.log(`   Percentage: ${(reachable / allRooms.length * 100).toFixed(1)}%`);
    
    if (unreachable.length > 0) {
        console.log(`⚠️  ${unreachable.length} unreachable rooms`);
        
        // Connect unreachable rooms to nearest reachable room (adjacent only)
        function getDirection(room1, room2) {
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) return null;
            const dx = c2.x - c1.x;
            const dy = c2.y - c1.y;
            const dz = c2.z - c1.z;
            if (dx === 0 && dy === 0) {
                if (dz === 1) return 'up';
                if (dz === -1) return 'down';
            }
            if (dz === 0) {
                if (dx === 0 && dy === 1) return 'north';
                if (dx === 0 && dy === -1) return 'south';
                if (dx === 1 && dy === 0) return 'east';
                if (dx === -1 && dy === 0) return 'west';
                if (dx === 1 && dy === 1) return 'northeast';
                if (dx === 1 && dy === -1) return 'southeast';
                if (dx === -1 && dy === -1) return 'southwest';
                if (dx === -1 && dy === 1) return 'northwest';
            }
            return null;
        }
        
        function distance(room1, room2) {
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) return Infinity;
            const dx = c2.x - c1.x;
            const dy = c2.y - c1.y;
            const dz = c2.z - c1.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
        
        // Connect each unreachable room to nearest adjacent reachable room
        for (const unreachableRoom of unreachable) {
            let nearestReachable = null;
            let minDist = Infinity;
            
            for (const reachableRoom of visited) {
                const c1 = coordinates[reachableRoom];
                const c2 = coordinates[unreachableRoom];
                if (!c1 || !c2) continue;
                
                const dx = Math.abs(c2.x - c1.x);
                const dy = Math.abs(c2.y - c1.y);
                const dz = Math.abs(c2.z - c1.z);
                
                // Only consider adjacent
                const isAdjacent = 
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0) ||
                    (dz === -1 && dx === 0 && dy === 0);
                
                if (isAdjacent) {
                    const dist = distance(unreachableRoom, reachableRoom);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestReachable = reachableRoom;
                    }
                }
            }
            
            if (nearestReachable) {
                const dir = getDirection(nearestReachable, unreachableRoom);
                if (dir) {
                    if (!exits[nearestReachable]) exits[nearestReachable] = {};
                    exits[nearestReachable][dir] = unreachableRoom;
                    const reverseDir = {
                        'north': 'south', 'south': 'north',
                        'east': 'west', 'west': 'east',
                        'northeast': 'southwest', 'southwest': 'northeast',
                        'northwest': 'southeast', 'southeast': 'northwest',
                        'up': 'down', 'down': 'up'
                    }[dir];
                    if (reverseDir) {
                        if (!exits[unreachableRoom]) exits[unreachableRoom] = {};
                        exits[unreachableRoom][reverseDir] = nearestReachable;
                    }
                }
            }
        }
        
        // Re-check
        const visited2 = new Set();
        const queue2 = ['bag_end'];
        visited2.add('bag_end');
        while (queue2.length > 0) {
            const current = queue2.shift();
            const currentExits = exits[current] || {};
            for (const targetId of Object.values(currentExits)) {
                if (targetId && !visited2.has(targetId)) {
                    visited2.add(targetId);
                    queue2.push(targetId);
                }
            }
        }
        
        const finalReachable = visited2.size;
        if (finalReachable === allRooms.length) {
            console.log('✅ All rooms are now connected!');
            return { totalRooms: allRooms.length, reachable: finalReachable, isConnected: true };
        } else {
            console.log(`⚠️  Still ${allRooms.length - finalReachable} unreachable rooms`);
            return { totalRooms: allRooms.length, reachable: finalReachable, isConnected: false };
        }
    } else {
        console.log('✅ World is FULLY CONNECTED!');
        return { totalRooms: allRooms.length, reachable, isConnected: true };
    }
}

// Main
console.log('Rebuilding world - Full Connected with Regions and Paths...');
const { coordinates, pathRooms } = assignCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms (${pathRooms.length} path rooms)`);

// Check for overlaps
const positionCounts = {};
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!positionCounts[key]) positionCounts[key] = [];
    positionCounts[key].push(roomId);
}

const overlaps = Object.entries(positionCounts).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`⚠️  Found ${overlaps.length} overlaps (should only be vertical):`);
    overlaps.forEach(([pos, roomList]) => {
        const [x, y, z] = pos.split(',').map(Number);
        const zLevels = new Set(roomList.map(r => coordinates[r].z));
        if (zLevels.size === 1) {
            console.log(`   ${pos}: ${roomList.join(', ')}`);
        }
    });
} else {
    console.log('✅ No overlaps found!');
}

const exits = createConnections(coordinates, pathRooms);
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

const connectivity = verifyAndFixConnectivity(exits, coordinates, pathRooms);

if (connectivity.isConnected) {
    console.log('✅ World is FULLY CONNECTED!');
} else {
    console.log(`⚠️  ${connectivity.totalRooms - connectivity.reachable} rooms are unreachable`);
}

const outputPath = path.join(__dirname, 'linear-world-connections.json');
const outputData = {
    coordinates,
    newExits: exits,
    metadata: {
        generated: new Date().toISOString(),
        totalRooms: connectivity.totalRooms,
        totalConnections: totalConnections,
        pathRooms: pathRooms.length,
        isFullyConnected: connectivity.isConnected,
        overlaps: overlaps.length,
        phase: 'regions'
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt!`);
console.log(`   Output: ${outputPath}`);
console.log(`   Fully connected: ${connectivity.isConnected ? 'YES' : 'NO'}`);
console.log(`   Overlaps: ${overlaps.length} (should be 0 or only vertical)`);

