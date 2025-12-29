#!/usr/bin/env node
/**
 * Rebuild World - FULLY CONNECTED with NO OVERLAPS
 * 
 * This script ensures:
 * 1. Every room has unique coordinates (no overlaps except vertical)
 * 2. Every room is reachable from every other room
 * 3. Creates a proper network of connections
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

// Region centers - placed closer together to ensure connectivity
const regionCenters = {
    shire: { x: 10, y: 10 },
    old_forest: { x: 20, y: 10 },
    barrow_downs: { x: 30, y: 15 },
    bree: { x: 40, y: 20 },
    weathertop: { x: 50, y: 30 },
    rivendell: { x: 60, y: 40 },
    moria: { x: 70, y: 50, z: -1 },
    lothlorien: { x: 80, y: 60 },
    fangorn: { x: 90, y: 80 },
    mirkwood: { x: 100, y: 70 },
    erebor: { x: 110, y: 60 },
    rohan: { x: 70, y: 100 },
    gondor: { x: 60, y: 120 },
    minas_tirith: { x: 60, y: 120 },
    mordor: { x: 80, y: 140 }
};

// Assign coordinates ensuring NO OVERLAPS
function assignCoordinates() {
    const coordinates = {};
    const usedPositions = new Set(); // Track used (x,y,z) positions
    const roomToRegion = {};
    
    // Helper to find next available position
    function findAvailablePosition(centerX, centerY, z, maxRadius = 50) {
        // Try positions in a spiral pattern
        for (let radius = 0; radius <= maxRadius; radius++) {
            for (let dx = -radius; dx <= radius; dx++) {
                for (let dy = -radius; dy <= radius; dy++) {
                    if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                        const x = Math.round(centerX + dx);
                        const y = Math.round(centerY + dy);
                        const key = `${x},${y},${z}`;
                        if (!usedPositions.has(key)) {
                            usedPositions.add(key);
                            return { x, y, z };
                        }
                    }
                }
            }
        }
        // Fallback: just find any unused position
        let x = centerX;
        let y = centerY;
        let attempts = 0;
        while (attempts < 1000) {
            const key = `${x},${y},${z}`;
            if (!usedPositions.has(key)) {
                usedPositions.add(key);
                return { x, y, z };
            }
            x += (attempts % 10) - 5;
            y += Math.floor(attempts / 10) - 5;
            attempts++;
        }
        return { x: centerX, y: centerY, z };
    }
    
    // Region room assignments
    const regionRooms = {
        shire: ['bag_end', 'tuckborough', 'tookbank', 'michel_delving', 'hobbiton_square', 
                'waymeet', 'overhill', 'scary', 'needlehole', 'longbottom', 'sackville_manor',
                'whitwell', 'rushock_bog', 'green_hill_country', 'bucklebury', 'brandy_hall',
                'buckland_kitchen', 'buckland_cellar', 'crickhollow', 'old_forest_buckland_entrance'],
        old_forest: ['old_forest', 'old_forest_depth', 'withywindle', 'bombadil_house', 'bombadil_garden',
                     'deep_in_old_forest', 'tom_bombadil_house'],
        barrow_downs: ['barrow_downs', 'barrow_chamber', 'barrow_chamber_second_mound'],
        bree: ['bree_gate', 'bree_square', 'prancing_pony', 'bree_inn', 'bree_stable'],
        weathertop: ['weathertop_approach', 'weathertop_base', 'weathertop_summit'],
        rivendell: ['rivendell', 'elrond_study', 'rivendell_library', 'rivendell_halls', 'rivendell_gardens'],
        moria: ['moria_gates', 'moria_halls', 'moria_bridge', 'moria_depths', 'doors_of_durin',
                'moria_chamber', 'moria_treasure_room'],
        lothlorien: ['lothlorien', 'caras_galadhon', 'galadriel_mirror', 'lothlorien_forest'],
        fangorn: ['fangorn_eaves', 'fangorn_depths', 'wellinghall', 'treebeard_glade', 'fangorn_clearing'],
        mirkwood: ['mirkwood', 'mirkwood_path', 'mirkwood_depths', 'thranduil_halls_interior', 
                   'mirkwood_path_2', 'mirkwood_clearing'],
        erebor: ['erebor', 'lonely_mountain', 'dwarven_halls', 'erebor_gates'],
        rohan: ['rohan_plains', 'edoras_approach', 'edoras_gates', 'meduseld', 'aldburg',
                'harrowdale', 'dunharrow', 'helms_deep', 'helms_deep_interior', 'snowbourn_banks',
                'east_emnet', 'west_emnet', 'entwash_delta', 'gap_of_rohan'],
        gondor: ['gondor_plains'],
        mordor: ['mordor_gates', 'barad_dur_approach', 'barad_dur_base', 'barad_dur_throne_room',
                 'mount_doom_approach', 'mount_doom_sammath_naur', 'cirith_ungol', 'morgul_vale',
                 'morgul_pass', 'durthang_fortress', 'minas_morgul_gates', 'black_gate']
    };
    
    // Assign rooms to regions - place them in a connected grid pattern
    for (const [region, roomList] of Object.entries(regionRooms)) {
        const center = regionCenters[region];
        if (!center) continue;
        
        const z = center.z || 0;
        
        // Place rooms in a snake-like pattern to ensure connectivity
        let placed = 0;
        for (const roomId of roomList) {
            if (!rooms[roomId]) continue;
            
            // Place in a connected pattern: spiral outward from center
            let x = center.x;
            let y = center.y;
            
            if (placed > 0) {
                // Calculate position in a spiral pattern
                const ring = Math.floor(Math.sqrt(placed));
                const posInRing = placed - ring * ring;
                const side = Math.floor(posInRing / (ring * 2 + 1));
                const offset = posInRing % (ring * 2 + 1);
                
                if (side === 0) { // Right side
                    x = center.x + ring;
                    y = center.y - ring + offset;
                } else if (side === 1) { // Bottom side
                    x = center.x + ring - offset;
                    y = center.y + ring;
                } else if (side === 2) { // Left side
                    x = center.x - ring;
                    y = center.y + ring - offset;
                } else { // Top side
                    x = center.x - ring + offset;
                    y = center.y - ring;
                }
            }
            
            const key = `${x},${y},${z}`;
            let finalPos = { x, y, z };
            
            // If position is taken, find adjacent available position
            if (usedPositions.has(key)) {
                finalPos = findAvailablePosition(x, y, z, 3); // Small radius to keep rooms close
            } else {
                usedPositions.add(key);
            }
            
            coordinates[roomId] = finalPos;
            roomToRegion[roomId] = region;
            placed++;
        }
    }
    
    // Minas Tirith vertical structure (all at same x,y, different z)
    const minasTirithCenter = regionCenters.minas_tirith;
    const minasTirithRooms = [
        { id: 'minas_tirith_gates', z: 0 },
        { id: 'first_level', z: 1 },
        { id: 'second_level', z: 2 },
        { id: 'third_level', z: 3 },
        { id: 'fourth_level', z: 4 },
        { id: 'fifth_level', z: 5 },
        { id: 'sixth_level', z: 6 },
        { id: 'white_tower', z: 7 },
        { id: 'minas_tirith_stables', z: 1, offset: { x: 1, y: 0 } },
        { id: 'minas_tirith_houses_of_healing', z: 6, offset: { x: 0, y: 1 } },
        { id: 'citadel_guards_hall', z: 6, offset: { x: 0, y: -1 } },
        { id: 'hall_of_kings', z: 6, offset: { x: 1, y: 0 } }
    ];
    
    for (const room of minasTirithRooms) {
        if (rooms[room.id]) {
            const x = minasTirithCenter.x + (room.offset?.x || 0);
            const y = minasTirithCenter.y + (room.offset?.y || 0);
            const z = room.z;
            const key = `${x},${y},${z}`;
            
            // Allow vertical overlaps (same x,y, different z)
            if (!usedPositions.has(key)) {
                usedPositions.add(key);
            }
            
            coordinates[room.id] = { x, y, z };
            roomToRegion[room.id] = 'minas_tirith';
        }
    }
    
    // Assign remaining rooms (underground detection)
    const undergroundKeywords = ['mine', 'mines', 'underground', 'cave', 'tunnel', 'depth', 'chamber', 'stair', 'moria'];
    for (const [roomId, room] of Object.entries(rooms)) {
        if (coordinates[roomId]) continue; // Already assigned
        
        const name = (room.name || '').toLowerCase();
        const desc = (room.description || '').toLowerCase();
        const isUnderground = undergroundKeywords.some(kw => name.includes(kw) || desc.includes(kw));
        
        // Find nearest region center
        let nearestRegion = 'shire';
        let minDist = Infinity;
        for (const [region, center] of Object.entries(regionCenters)) {
            if (region === 'minas_tirith') continue;
            const dist = Math.sqrt(Math.pow(center.x - 10, 2) + Math.pow(center.y - 10, 2));
            if (dist < minDist) {
                minDist = dist;
                nearestRegion = region;
            }
        }
        
        const center = regionCenters[nearestRegion] || { x: 0, y: 0, z: 0 };
        const z = isUnderground ? -1 : (center.z || 0);
        const pos = findAvailablePosition(center.x, center.y, z, 50);
        
        coordinates[roomId] = pos;
        roomToRegion[roomId] = nearestRegion;
    }
    
    return { coordinates, roomToRegion };
}

// Create FULLY CONNECTED network
function createConnections(coordinates) {
    const exits = {};
    
    // Initialize
    for (const roomId of Object.keys(rooms)) {
        exits[roomId] = {};
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
    
    function getDirection(room1, room2) {
        const c1 = coordinates[room1];
        const c2 = coordinates[room2];
        if (!c1 || !c2) return null;
        
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const dz = c2.z - c1.z;
        
        // Vertical (same x,y)
        if (dx === 0 && dy === 0) {
            if (dz === 1) return 'up';
            if (dz === -1) return 'down';
        }
        
        // Horizontal (same z)
        if (dz === 0) {
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            if (Math.abs(angle) < 22.5 || Math.abs(angle) > 157.5) return dx > 0 ? 'east' : 'west';
            if (Math.abs(angle - 90) < 22.5 || Math.abs(angle + 90) < 22.5) return dy > 0 ? 'south' : 'north';
            if (angle > 22.5 && angle < 67.5) return 'southeast';
            if (angle > 67.5 && angle < 112.5) return 'south';
            if (angle > 112.5 && angle < 157.5) return 'southwest';
            if (angle < -22.5 && angle > -67.5) return 'northeast';
            if (angle < -67.5 && angle > -112.5) return 'north';
            if (angle < -112.5 && angle > -157.5) return 'northwest';
        }
        
        return null;
    }
    
    // Step 1: Connect only ADJACENT rooms (1 unit away) - this creates local clusters
    for (const room1 of Object.keys(rooms)) {
        for (const room2 of Object.keys(rooms)) {
            if (room1 === room2) continue;
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) continue;
            
            const dx = Math.abs(c2.x - c1.x);
            const dy = Math.abs(c2.y - c1.y);
            const dz = Math.abs(c2.z - c1.z);
            
            // Only connect adjacent rooms (1 unit away horizontally, or directly above/below)
            const isAdjacent = 
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) || // Same level, adjacent
                (dz === 1 && dx === 0 && dy === 0); // Different level, directly above/below
            
            if (isAdjacent) {
                const dir = getDirection(room1, room2);
                if (dir && !exits[room1][dir]) {
                    exits[room1][dir] = room2;
                    // Create reverse connection
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
    
    // Step 2: Ensure FULL connectivity using only ADJACENT connections
    // Use BFS to find disconnected components and connect them via adjacent paths
    function findConnectedComponents() {
        const visited = new Set();
        const components = [];
        
        for (const roomId of Object.keys(rooms)) {
            if (visited.has(roomId)) continue;
            
            // BFS from this room using only existing adjacent connections
            const component = new Set();
            const queue = [roomId];
            visited.add(roomId);
            component.add(roomId);
            
            while (queue.length > 0) {
                const current = queue.shift();
                const currentExits = exits[current] || {};
                
                for (const targetId of Object.values(currentExits)) {
                    if (!visited.has(targetId)) {
                        visited.add(targetId);
                        component.add(targetId);
                        queue.push(targetId);
                    }
                }
            }
            
            components.push(Array.from(component));
        }
        
        return components;
    }
    
    // Connect disconnected components by finding the closest adjacent rooms
    let components = findConnectedComponents();
    let iterations = 0;
    while (components.length > 1 && iterations < 50) {
        // Find closest pair of adjacent rooms between components
        let minDist = Infinity;
        let bestPair = null;
        let bestDir = null;
        
        for (let i = 0; i < components.length; i++) {
            for (let j = i + 1; j < components.length; j++) {
                for (const room1 of components[i]) {
                    for (const room2 of components[j]) {
                        const c1 = coordinates[room1];
                        const c2 = coordinates[room2];
                        if (!c1 || !c2) continue;
                        
                        const dx = Math.abs(c2.x - c1.x);
                        const dy = Math.abs(c2.y - c1.y);
                        const dz = Math.abs(c2.z - c1.z);
                        
                        // Check if they're adjacent
                        const isAdjacent = 
                            (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                            (dz === 1 && dx === 0 && dy === 0);
                        
                        if (isAdjacent) {
                            const dist = distance(room1, room2);
                            if (dist < minDist) {
                                minDist = dist;
                                bestPair = [room1, room2];
                                bestDir = getDirection(room1, room2);
                            }
                        }
                    }
                }
            }
        }
        
        if (bestPair && bestDir) {
            // Connect them
            if (!exits[bestPair[0]]) exits[bestPair[0]] = {};
            exits[bestPair[0]][bestDir] = bestPair[1];
            
            // Reverse connection
            const reverseDir = {
                'north': 'south', 'south': 'north',
                'east': 'west', 'west': 'east',
                'northeast': 'southwest', 'southwest': 'northeast',
                'northwest': 'southeast', 'southeast': 'northwest',
                'up': 'down', 'down': 'up'
            }[bestDir];
            if (reverseDir) {
                if (!exits[bestPair[1]]) exits[bestPair[1]] = {};
                exits[bestPair[1]][reverseDir] = bestPair[0];
            }
        } else {
            // No adjacent rooms found - this shouldn't happen if rooms are properly placed
            console.warn('Warning: Could not find adjacent rooms to connect components');
            break;
        }
        
        components = findConnectedComponents();
        iterations++;
    }
    
    // Step 3: Connect Minas Tirith levels vertically
    const minasTirithLevels = ['minas_tirith_gates', 'first_level', 'second_level', 'third_level',
                               'fourth_level', 'fifth_level', 'sixth_level', 'white_tower'];
    for (let i = 0; i < minasTirithLevels.length - 1; i++) {
        const lower = minasTirithLevels[i];
        const upper = minasTirithLevels[i + 1];
        if (rooms[lower] && rooms[upper]) {
            exits[lower]['up'] = upper;
            exits[upper]['down'] = lower;
        }
    }
    
    // Step 4: Connect special Minas Tirith locations
    if (coordinates['minas_tirith_stables'] && coordinates['first_level']) {
        exits['first_level']['north'] = 'minas_tirith_stables';
        exits['minas_tirith_stables']['south'] = 'first_level';
    }
    if (coordinates['minas_tirith_houses_of_healing'] && coordinates['sixth_level']) {
        exits['sixth_level']['south'] = 'minas_tirith_houses_of_healing';
        exits['minas_tirith_houses_of_healing']['north'] = 'sixth_level';
    }
    if (coordinates['citadel_guards_hall'] && coordinates['sixth_level']) {
        exits['sixth_level']['southeast'] = 'citadel_guards_hall';
        exits['citadel_guards_hall']['northwest'] = 'sixth_level';
    }
    if (coordinates['pelennor_fields'] && coordinates['minas_tirith_gates']) {
        exits['pelennor_fields']['east'] = 'minas_tirith_gates';
        exits['minas_tirith_gates']['west'] = 'pelennor_fields';
    }
    
    return exits;
}

// Main
console.log('Rebuilding world - FULLY CONNECTED with NO OVERLAPS...');
const { coordinates, roomToRegion } = assignCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms`);

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

const exits = createConnections(coordinates, roomToRegion);
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

// Verify connectivity and fix any unreachable rooms
function verifyAndFixConnectivity(exits, coordinates) {
    const visited = new Set();
    const queue = [Object.keys(rooms)[0]]; // Start from first room
    visited.add(queue[0]);
    
    while (queue.length > 0) {
        const current = queue.shift();
        const currentExits = exits[current] || {};
        for (const targetId of Object.values(currentExits)) {
            if (!visited.has(targetId)) {
                visited.add(targetId);
                queue.push(targetId);
            }
        }
    }
    
    const totalRooms = Object.keys(rooms).length;
    const reachable = visited.size;
    const percentage = (reachable / totalRooms * 100).toFixed(1);
    
    console.log(`\nConnectivity check:`);
    console.log(`   Total rooms: ${totalRooms}`);
    console.log(`   Reachable: ${reachable}`);
    console.log(`   Percentage: ${percentage}%`);
    
    if (reachable === totalRooms) {
        console.log('✅ World is FULLY CONNECTED!');
        return true;
    } else {
        const unreachable = Array.from(Object.keys(rooms)).filter(r => !visited.has(r));
        console.log(`⚠️  ${unreachable.length} rooms are unreachable: ${unreachable.join(', ')}`);
        
        // Fix connectivity
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
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                if (Math.abs(angle) < 22.5 || Math.abs(angle) > 157.5) return dx > 0 ? 'east' : 'west';
                if (Math.abs(angle - 90) < 22.5 || Math.abs(angle + 90) < 22.5) return dy > 0 ? 'south' : 'north';
                if (angle > 22.5 && angle < 67.5) return 'southeast';
                if (angle > 67.5 && angle < 112.5) return 'south';
                if (angle > 112.5 && angle < 157.5) return 'southwest';
                if (angle < -22.5 && angle > -67.5) return 'northeast';
                if (angle < -67.5 && angle > -112.5) return 'north';
                if (angle < -112.5 && angle > -157.5) return 'northwest';
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
        
        // Connect each unreachable room - ONLY if adjacent
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
                
                // Only consider adjacent rooms
                const isAdjacent = 
                    (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                    (dz === 1 && dx === 0 && dy === 0);
                
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
                    console.log(`   Connected ${unreachableRoom} to ${nearestReachable} via ${dir}`);
                }
            } else {
                console.log(`   Could not find adjacent room to connect ${unreachableRoom}`);
            }
        }
        
        // Re-check
        const visited2 = new Set();
        const queue2 = [Object.keys(rooms)[0]];
        visited2.add(queue2[0]);
        while (queue2.length > 0) {
            const current = queue2.shift();
            const currentExits = exits[current] || {};
            for (const targetId of Object.values(currentExits)) {
                if (!visited2.has(targetId)) {
                    visited2.add(targetId);
                    queue2.push(targetId);
                }
            }
        }
        
        const finalReachable = visited2.size;
        if (finalReachable === totalRooms) {
            console.log('✅ All rooms are now connected!');
            return true;
        } else {
            console.log(`⚠️  Still ${totalRooms - finalReachable} unreachable rooms`);
            return false;
        }
    }
}

const isConnected = verifyAndFixConnectivity(exits, coordinates);

const outputPath = path.join(__dirname, 'linear-world-connections.json');
const outputData = {
    coordinates,
    newExits: exits,
    metadata: {
        generated: new Date().toISOString(),
        totalRooms: Object.keys(rooms).length,
        totalConnections: totalConnections,
        isFullyConnected: isConnected,
        overlaps: overlaps.length
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt!`);
console.log(`   Output: ${outputPath}`);
console.log(`   Fully connected: ${isConnected ? 'YES' : 'NO'}`);
console.log(`   Overlaps: ${overlaps.length} (should be 0 or only vertical)`);

