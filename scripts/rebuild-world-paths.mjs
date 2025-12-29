#!/usr/bin/env node
/**
 * Rebuild World with Paths Between Regions
 * 
 * This script creates a geographic layout with regions connected by paths/roads,
 * avoiding clusters and creating a more network-like structure.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import rooms dynamically
const roomsPath = path.join(__dirname, '../server/src/data/rooms.js');
const roomsModule = await import(`file://${roomsPath}`);
const { rooms } = roomsModule;

console.log(`Loaded ${Object.keys(rooms).length} rooms from data files`);

// Region centers and key locations (spread out like the Middle Earth map)
const regionCenters = {
    shire: { x: 10, y: 10 },
    old_forest: { x: 25, y: 12 },
    barrow_downs: { x: 40, y: 30 },
    bree: { x: 50, y: 40 },
    weathertop: { x: 60, y: 60 },
    rivendell: { x: 90, y: 70 },
    moria: { x: 110, y: 90, z: -1 }, // Underground
    lothlorien: { x: 130, y: 110 },
    fangorn: { x: 140, y: 200 },
    mirkwood: { x: 165, y: 100 },
    erebor: { x: 190, y: 80 },
    rohan: { x: 80, y: 200 },
    gondor: { x: 60, y: 260 },
    minas_tirith: { x: 60, y: 260 }, // Same as gondor, but vertical
    mordor: { x: 150, y: 290 }
};

// Paths between regions (like roads/rivers)
const regionPaths = [
    // Shire to Bree
    { from: 'shire', to: 'bree', rooms: ['bag_end', 'tuckborough', 'tookbank', 'michel_delving', 'waymeet', 'bree_gate'] },
    // Bree to Weathertop
    { from: 'bree', to: 'weathertop', rooms: ['bree_square', 'weathertop_approach', 'weathertop_base'] },
    // Weathertop to Rivendell
    { from: 'weathertop', to: 'rivendell', rooms: ['weathertop_summit', 'rivendell'] },
    // Rivendell to Moria
    { from: 'rivendell', to: 'moria', rooms: ['rivendell', 'moria_gates'] },
    // Moria to Lothlorien
    { from: 'moria', to: 'lothlorien', rooms: ['moria_bridge', 'lothlorien'] },
    // Lothlorien to Fangorn
    { from: 'lothlorien', to: 'fangorn', rooms: ['lothlorien', 'fangorn_eaves'] },
    // Fangorn to Rohan
    { from: 'fangorn', to: 'rohan', rooms: ['fangorn_depths', 'rohan_plains'] },
    // Rohan to Gondor
    { from: 'rohan', to: 'gondor', rooms: ['edoras_gates', 'pelennor_fields'] },
    // Gondor to Mordor
    { from: 'gondor', to: 'mordor', rooms: ['osgiliath_ruins', 'mordor_gates'] }
];

// Assign coordinates: place rooms along paths, with some spread
function assignCoordinates() {
    const coordinates = {};
    const roomToRegion = {};
    const usedRooms = new Set();
    
    // First, assign rooms along paths
    for (const path of regionPaths) {
        const fromCenter = regionCenters[path.from];
        const toCenter = regionCenters[path.to];
        
        if (!fromCenter || !toCenter) continue;
        
        const pathRooms = path.rooms.filter(r => rooms[r] && !usedRooms.has(r));
        if (pathRooms.length === 0) continue;
        
        // Create a path between centers
        const steps = pathRooms.length;
        for (let i = 0; i < pathRooms.length; i++) {
            const t = i / Math.max(1, steps - 1);
            const x = Math.round(fromCenter.x + (toCenter.x - fromCenter.x) * t);
            const y = Math.round(fromCenter.y + (toCenter.y - fromCenter.y) * t);
            const z = fromCenter.z || toCenter.z || 0;
            
            coordinates[pathRooms[i]] = { x, y, z };
            roomToRegion[pathRooms[i]] = path.from;
            usedRooms.add(pathRooms[i]);
        }
    }
    
    // Assign region-specific rooms near their centers (spread out, not clustered)
    const regionRooms = {
        shire: ['hobbiton_square', 'overhill', 'scary', 'needlehole', 'longbottom', 'sackville_manor',
                'whitwell', 'rushock_bog', 'green_hill_country', 'bucklebury', 'brandy_hall',
                'buckland_kitchen', 'buckland_cellar', 'crickhollow', 'old_forest_buckland_entrance'],
        old_forest: ['old_forest', 'old_forest_depth', 'withywindle', 'bombadil_house', 'bombadil_garden',
                     'deep_in_old_forest', 'tom_bombadil_house'],
        barrow_downs: ['barrow_downs', 'barrow_chamber', 'barrow_chamber_second_mound'],
        bree: ['bree_square', 'prancing_pony', 'bree_inn', 'bree_stable'],
        weathertop: ['weathertop_approach', 'weathertop_base', 'weathertop_summit'],
        rivendell: ['elrond_study', 'rivendell_library', 'rivendell_halls', 'rivendell_gardens'],
        moria: ['moria_halls', 'moria_bridge', 'moria_depths', 'doors_of_durin', 'moria_chamber', 'moria_treasure_room'],
        lothlorien: ['caras_galadhon', 'galadriel_mirror', 'lothlorien_forest'],
        fangorn: ['fangorn_eaves', 'fangorn_depths', 'wellinghall', 'treebeard_glade', 'fangorn_clearing'],
        mirkwood: ['mirkwood', 'mirkwood_path', 'mirkwood_depths', 'thranduil_halls_interior', 'mirkwood_path_2', 'mirkwood_clearing'],
        erebor: ['lonely_mountain', 'dwarven_halls', 'erebor_gates'],
        rohan: ['edoras_approach', 'edoras_gates', 'meduseld', 'aldburg', 'harrowdale', 'dunharrow',
                'helms_deep', 'helms_deep_interior', 'snowbourn_banks', 'east_emnet', 'west_emnet', 'entwash_delta', 'gap_of_rohan'],
        gondor: ['ithilien_woods', 'henneth_annun', 'lossarnach_valleys', 'pelargir_port', 'annuminas_ruins', 'annuminas_tower', 'gondor_plains'],
        mordor: ['barad_dur_approach', 'barad_dur_base', 'barad_dur_throne_room', 'mount_doom_approach',
                 'mount_doom_sammath_naur', 'cirith_ungol', 'morgul_vale', 'morgul_pass', 'durthang_fortress',
                 'minas_morgul_gates', 'black_gate']
    };
    
    // Place region rooms in a line or small spread around center
    for (const [region, roomList] of Object.entries(regionRooms)) {
        const center = regionCenters[region];
        if (!center) continue;
        
        const availableRooms = roomList.filter(r => rooms[r] && !usedRooms.has(r));
        if (availableRooms.length === 0) continue;
        
        // Spread rooms in a line or small grid (not clustered)
        const cols = Math.ceil(Math.sqrt(availableRooms.length));
        const spacing = 5; // Space between rooms
        
        availableRooms.forEach((roomId, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            coordinates[roomId] = {
                x: center.x + (col - cols/2) * spacing,
                y: center.y + (row - availableRooms.length/cols/2) * spacing,
                z: center.z || 0
            };
            roomToRegion[roomId] = region;
            usedRooms.add(roomId);
        });
    }
    
    // Minas Tirith vertical structure
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
        if (rooms[room.id] && !usedRooms.has(room.id)) {
            coordinates[room.id] = {
                x: minasTirithCenter.x + (room.offset?.x || 0),
                y: minasTirithCenter.y + (room.offset?.y || 0),
                z: room.z
            };
            roomToRegion[room.id] = 'minas_tirith';
            usedRooms.add(room.id);
        }
    }
    
    // Find all underground/mine rooms
    const undergroundKeywords = ['mine', 'mines', 'underground', 'cave', 'tunnel', 'depth', 'chamber', 'stair'];
    for (const [roomId, room] of Object.entries(rooms)) {
        if (usedRooms.has(roomId)) continue;
        
        const name = (room.name || '').toLowerCase();
        const desc = (room.description || '').toLowerCase();
        const isUnderground = undergroundKeywords.some(kw => name.includes(kw) || desc.includes(kw));
        
        // Assign to nearest region or default
        let nearestRegion = 'shire';
        let minDist = Infinity;
        for (const [region, center] of Object.entries(regionCenters)) {
            if (region === 'minas_tirith') continue; // Skip minas_tirith, it's special
            const dist = Math.sqrt(Math.pow(center.x - 10, 2) + Math.pow(center.y - 10, 2));
            if (dist < minDist) {
                minDist = dist;
                nearestRegion = region;
            }
        }
        
        const center = regionCenters[nearestRegion] || { x: 0, y: 0, z: 0 };
        coordinates[roomId] = {
            x: center.x + Math.floor(Math.random() * 20 - 10),
            y: center.y + Math.floor(Math.random() * 20 - 10),
            z: isUnderground ? -1 : (center.z || 0)
        };
        roomToRegion[roomId] = nearestRegion;
    }
    
    return { coordinates, roomToRegion };
}

// Create connections along paths and between nearby rooms
function createConnections(coordinates, roomToRegion) {
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
        
        // Vertical
        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
            if (dz === 1) return 'up';
            if (dz === -1) return 'down';
        }
        
        // Horizontal
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
    
    // Connect rooms along paths (sequential)
    for (const path of regionPaths) {
        for (let i = 0; i < path.rooms.length - 1; i++) {
            const room1 = path.rooms[i];
            const room2 = path.rooms[i + 1];
            if (rooms[room1] && rooms[room2] && coordinates[room1] && coordinates[room2]) {
                const dir = getDirection(room1, room2);
                if (dir) {
                    exits[room1][dir] = room2;
                    // Reverse direction
                    const reverseDir = {
                        'north': 'south', 'south': 'north',
                        'east': 'west', 'west': 'east',
                        'northeast': 'southwest', 'southwest': 'northeast',
                        'northwest': 'southeast', 'southeast': 'northwest',
                        'up': 'down', 'down': 'up'
                    }[dir];
                    if (reverseDir) exits[room2][reverseDir] = room1;
                }
            }
        }
    }
    
    // Connect nearby rooms (within same region or adjacent, max 15 units for better connectivity)
    for (const room1 of Object.keys(rooms)) {
        for (const room2 of Object.keys(rooms)) {
            if (room1 === room2) continue;
            const dist = distance(room1, room2);
            // Increase max distance to connect more rooms
            if (dist <= 15) {
                const dir = getDirection(room1, room2);
                if (dir && !exits[room1][dir]) {
                    exits[room1][dir] = room2;
                }
            }
        }
    }
    
    // Ensure all regions are connected by creating additional paths between region centers
    const regionCenterRooms = {
        'shire': 'bag_end',
        'bree': 'bree_gate',
        'weathertop': 'weathertop_summit',
        'rivendell': 'rivendell',
        'moria': 'moria_gates',
        'lothlorien': 'lothlorien',
        'fangorn': 'fangorn_eaves',
        'mirkwood': 'mirkwood',
        'erebor': 'erebor',
        'rohan': 'edoras_gates',
        'gondor': 'pelennor_fields',
        'mordor': 'mordor_gates'
    };
    
    // Connect region centers to ensure all regions are reachable
    const regionList = Object.keys(regionCenterRooms);
    for (let i = 0; i < regionList.length - 1; i++) {
        const region1 = regionList[i];
        const region2 = regionList[i + 1];
        const room1 = regionCenterRooms[region1];
        const room2 = regionCenterRooms[region2];
        
        if (rooms[room1] && rooms[room2] && coordinates[room1] && coordinates[room2]) {
            const dir = getDirection(room1, room2);
            if (dir && !exits[room1][dir]) {
                exits[room1][dir] = room2;
                // Also connect in reverse if it makes sense
                const reverseDir = {
                    'north': 'south', 'south': 'north',
                    'east': 'west', 'west': 'east',
                    'northeast': 'southwest', 'southwest': 'northeast',
                    'northwest': 'southeast', 'southeast': 'northwest'
                }[dir];
                if (reverseDir && !exits[room2][reverseDir]) {
                    exits[room2][reverseDir] = room1;
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
        if (rooms[lower] && rooms[upper]) {
            exits[lower]['up'] = upper;
            exits[upper]['down'] = lower;
        }
    }
    
    return exits;
}

// Main
console.log('Rebuilding world with paths between regions...');
const { coordinates, roomToRegion } = assignCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms`);

const exits = createConnections(coordinates, roomToRegion);
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

const outputPath = path.join(__dirname, 'linear-world-connections.json');
const outputData = {
    coordinates,
    newExits: exits,
    metadata: {
        generated: new Date().toISOString(),
        totalRooms: Object.keys(rooms).length,
        totalConnections: totalConnections
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt with paths!`);
console.log(`   Output: ${outputPath}`);

