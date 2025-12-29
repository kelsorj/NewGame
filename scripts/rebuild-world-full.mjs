#!/usr/bin/env node
/**
 * Rebuild World - Full Middle Earth Map with Thousands of Connection Rooms
 * 
 * Creates a world matching the Middle Earth map by:
 * - Placing all existing rooms in their proper regions
 * - Generating intermediate path/road rooms to connect regions
 * - Creating a dense network matching the geography
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

// Middle Earth geography - spread out organically to avoid square clusters
const geography = {
    shire: { x: -10, y: 10, rooms: ['bag_end', 'tuckborough', 'tookbank', 'michel_delving', 'hobbiton_square', 
            'waymeet', 'overhill', 'scary', 'needlehole', 'longbottom', 'sackville_manor',
            'whitwell', 'rushock_bog', 'green_hill_country', 'bucklebury', 'brandy_hall',
            'buckland_kitchen', 'buckland_cellar', 'crickhollow', 'old_forest_buckland_entrance'] },
    old_forest: { x: -5, y: 8, rooms: ['old_forest', 'old_forest_depth', 'withywindle', 'bombadil_house', 'bombadil_garden',
            'deep_in_old_forest', 'tom_bombadil_house'] },
    barrow_downs: { x: 0, y: 5, rooms: ['barrow_downs', 'barrow_chamber', 'barrow_chamber_second_mound'] },
    bree: { x: 5, y: 3, rooms: ['bree_gate', 'bree_square', 'prancing_pony', 'bree_inn', 'bree_stable'] },
    weathertop: { x: 15, y: 0, rooms: ['weathertop_approach', 'weathertop_base', 'weathertop_summit'] },
    rivendell: { x: 25, y: -5, rooms: ['rivendell', 'elrond_study', 'rivendell_library', 'rivendell_halls', 'rivendell_gardens'] },
    moria: { x: 35, y: -8, z: -1, rooms: ['moria_gates', 'moria_halls', 'moria_bridge', 'moria_depths', 'doors_of_durin',
            'moria_chamber', 'moria_treasure_room'] },
    lothlorien: { x: 45, y: -3, rooms: ['lothlorien', 'caras_galadhon', 'galadriel_mirror', 'lothlorien_forest'] },
    fangorn: { x: 50, y: 5, rooms: ['fangorn_eaves', 'fangorn_depths', 'wellinghall', 'treebeard_glade', 'fangorn_clearing'] },
    rohan: { x: 55, y: 15, rooms: ['rohan_plains', 'edoras_approach', 'edoras_gates', 'meduseld', 'aldburg',
            'harrowdale', 'dunharrow', 'helms_deep', 'helms_deep_interior', 'snowbourn_banks',
            'east_emnet', 'west_emnet', 'entwash_delta', 'gap_of_rohan'] },
    mirkwood: { x: 40, y: -20, rooms: ['mirkwood', 'mirkwood_path', 'mirkwood_depths', 'thranduil_halls_interior', 
            'mirkwood_path_2', 'mirkwood_clearing'] },
    erebor: { x: 50, y: -25, rooms: ['erebor', 'lonely_mountain', 'dwarven_halls', 'erebor_gates'] },
    gondor: { x: 60, y: 25, rooms: ['pelennor_fields', 'osgiliath_ruins', 'ithilien_woods', 'henneth_annun',
            'lossarnach_valleys', 'pelargir_port', 'annuminas_ruins', 'annuminas_tower', 'gondor_plains'] },
    minas_tirith: { x: 65, y: 28, rooms: ['minas_tirith_gates', 'first_level', 'second_level', 'third_level',
            'fourth_level', 'fifth_level', 'sixth_level', 'white_tower',
            'minas_tirith_stables', 'minas_tirith_houses_of_healing', 'citadel_guards_hall', 'hall_of_kings'],
        levels: {
            'minas_tirith_gates': 0,
            'first_level': 1,
            'second_level': 2,
            'third_level': 3,
            'fourth_level': 4,
            'fifth_level': 5,
            'sixth_level': 6,
            'white_tower': 7,
            'citadel_guards_hall': 7,
            'hall_of_kings': 6,
            'minas_tirith_stables': 0,
            'minas_tirith_houses_of_healing': 0
        } },
    mordor: { x: 75, y: 35, rooms: ['mordor_gates', 'barad_dur_approach', 'barad_dur_base', 'barad_dur_throne_room',
            'mount_doom_approach', 'mount_doom_sammath_naur', 'cirith_ungol', 'morgul_vale',
            'morgul_pass', 'durthang_fortress', 'minas_morgul_gates', 'black_gate'] }
};

// Major paths/roads/rivers between regions - with organic curves and branches
const majorPaths = [
    { from: 'shire', to: 'old_forest', type: 'path', name: 'East Path', curve: true },
    { from: 'old_forest', to: 'barrow_downs', type: 'path', name: 'Barrow Downs Path', curve: true },
    { from: 'barrow_downs', to: 'bree', type: 'road', name: 'Great East Road', curve: true },
    { from: 'bree', to: 'weathertop', type: 'road', name: 'Weather Hills Road', curve: true },
    { from: 'weathertop', to: 'rivendell', type: 'path', name: 'Rivendell Path', curve: true },
    { from: 'rivendell', to: 'moria', type: 'road', name: 'Moria Road', curve: true },
    { from: 'moria', to: 'lothlorien', type: 'path', name: 'Lothlorien Path', curve: true },
    { from: 'lothlorien', to: 'fangorn', type: 'path', name: 'Fangorn Edge', curve: true },
    { from: 'fangorn', to: 'rohan', type: 'road', name: 'Rohan Plains Road', curve: true },
    { from: 'rohan', to: 'gondor', type: 'road', name: 'Gondor Road', curve: true },
    { from: 'gondor', to: 'minas_tirith', type: 'road', name: 'Pelennor Road', curve: true },
    { from: 'minas_tirith', to: 'mordor', type: 'road', name: 'Mordor Road', curve: true },
    { from: 'lothlorien', to: 'mirkwood', type: 'path', name: 'Mirkwood Path', curve: true },
    { from: 'mirkwood', to: 'erebor', type: 'road', name: 'Erebor Road', curve: true },
    // Additional organic connecting paths
    { from: 'shire', to: 'bree', type: 'path', name: 'Shire-Bree Path', curve: true },
    { from: 'bree', to: 'rivendell', type: 'path', name: 'Bree-Rivendell Trail', curve: true },
    { from: 'fangorn', to: 'mirkwood', type: 'path', name: 'Fangorn-Mirkwood Trail', curve: true },
    { from: 'rohan', to: 'mordor', type: 'path', name: 'Rohan-Mordor Path', curve: true },
    { from: 'gondor', to: 'mordor', type: 'path', name: 'Gondor-Mordor Trail', curve: true }
];

// River systems (flowing water + banks) - with organic curves, matching new region positions
const rivers = [
    { 
        name: 'Anduin River',
        path: [
            { x: 25, y: -5 },  // Near Rivendell
            { x: 30, y: -2 },   // Curving
            { x: 40, y: 0 },    // Through Lothlorien
            { x: 47, y: 3 },   // Curving
            { x: 52, y: 8 },   // Through Rohan
            { x: 58, y: 15 },  // Curving
            { x: 62, y: 22 },  // Through Gondor
            { x: 70, y: 28 },  // Curving
            { x: 75, y: 33 }   // Near Mordor
        ]
    },
    {
        name: 'Brandywine River',
        path: [
            { x: -12, y: 12 }, // Through Shire (curved start)
            { x: -8, y: 11 },   // Curving
            { x: -5, y: 9 },    // Through Old Forest
            { x: -2, y: 7 },   // Curving
            { x: 2, y: 5 }      // To Barrow Downs
        ]
    },
    {
        name: 'Entwash',
        path: [
            { x: 48, y: 3 },   // Fangorn (curved start)
            { x: 51, y: 8 },    // Curving
            { x: 55, y: 13 },  // Rohan
            { x: 58, y: 20 },  // Curving
            { x: 60, y: 25 }   // Gondor
        ]
    },
    {
        name: 'Bruinen',
        path: [
            { x: 23, y: -6 },  // Near Rivendell
            { x: 27, y: -4 },  // Curving
            { x: 30, y: -2 },  // Through region
            { x: 33, y: 0 }     // To junction
        ]
    },
    {
        name: 'Celebrant',
        path: [
            { x: 43, y: -4 },  // Lothlorien
            { x: 46, y: -1 },  // Curving
            { x: 48, y: 2 },   // Through region
            { x: 50, y: 5 }    // To Fangorn
        ]
    },
    {
        name: 'Forest River',
        path: [
            { x: 38, y: -22 }, // Mirkwood
            { x: 42, y: -20 }, // Curving
            { x: 48, y: -23 }, // Through region
            { x: 50, y: -25 }  // To Erebor
        ]
    }
];

// Assign coordinates to all existing rooms
function assignRoomCoordinates() {
    const coordinates = {};
    const usedPositions = new Set();
    const pathRooms = [];
    
    // Helper to find adjacent position
    function findAdjacent(nearX, nearY, z, used) {
        const dirs = [
            { dx: 0, dy: 1 }, { dx: 1, dy: 0 }, { dx: 0, dy: -1 }, { dx: -1, dy: 0 },
            { dx: 1, dy: 1 }, { dx: 1, dy: -1 }, { dx: -1, dy: -1 }, { dx: -1, dy: 1 }
        ];
        for (const dir of dirs) {
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
    
    // Place rooms in their regions
    const placedRoomIds = new Set();
    for (const [regionName, region] of Object.entries(geography)) {
        const center = { x: region.x, y: region.y, z: region.z || 0 };
        let lastCoord = center;
        
        for (const roomId of region.rooms) {
            if (!rooms[roomId]) continue;
            placedRoomIds.add(roomId);
            
            if (coordinates[roomId]) continue; // Already placed
            
            // Special handling for Minas Tirith levels (above ground)
            let zLevel = center.z;
            if (regionName === 'minas_tirith' && region.levels && region.levels[roomId] !== undefined) {
                zLevel = region.levels[roomId];
            }
            
            const pos = findAdjacent(lastCoord.x, lastCoord.y, zLevel, usedPositions);
            if (pos) {
                coordinates[roomId] = pos;
                lastCoord = pos;
            } else {
                // Spiral search
                for (let r = 1; r <= 20; r++) {
                    for (let dx = -r; dx <= r; dx++) {
                        for (let dy = -r; dy <= r; dy++) {
                            if (Math.abs(dx) === r || Math.abs(dy) === r) {
                                const x = center.x + dx;
                                const y = center.y + dy;
                                const key = `${x},${y},${zLevel}`;
                                if (!usedPositions.has(key)) {
                                    usedPositions.add(key);
                                    coordinates[roomId] = { x, y, z: zLevel };
                                    lastCoord = coordinates[roomId];
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
    }
    
    // Place remaining rooms near their logical regions
    const undergroundKeywords = ['mine', 'mines', 'underground', 'cave', 'tunnel', 'depth', 'chamber', 'stair'];
    const roomToRegion = {};
    
    for (const [roomId, room] of Object.entries(rooms)) {
        if (placedRoomIds.has(roomId)) continue;
        
        const name = (room.name || '').toLowerCase();
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
    
    // Place remaining rooms
    for (const [roomId, targetRegion] of Object.entries(roomToRegion)) {
        const room = rooms[roomId];
        if (!room) continue;
        
        const name = (room.name || '').toLowerCase();
        const isUnderground = undergroundKeywords.some(kw => name.includes(kw));
        const region = geography[targetRegion];
        if (!region) continue;
        
        // Special handling for Minas Tirith levels (above ground)
        let zLevel = region.z || 0;
        if (targetRegion === 'minas_tirith') {
            if (name.includes('first_level') || name.includes('minas_tirith_gates')) {
                zLevel = 1;
            } else if (name.includes('second_level')) {
                zLevel = 2;
            } else if (name.includes('third_level')) {
                zLevel = 3;
            } else if (name.includes('fourth_level')) {
                zLevel = 4;
            } else if (name.includes('fifth_level')) {
                zLevel = 5;
            } else if (name.includes('sixth_level')) {
                zLevel = 6;
            } else if (name.includes('white_tower') || name.includes('citadel')) {
                zLevel = 7; // White Tower is the highest
            } else if (isUnderground) {
                zLevel = -1;
            } else {
                zLevel = 0; // Ground level rooms like stables, houses of healing
            }
        } else if (isUnderground) {
            zLevel = region.z || -1;
        }
        
        const center = { x: region.x, y: region.y, z: zLevel };
        
        // Find last room in region
        let lastCoord = center;
        if (region.rooms.length > 0) {
            const lastRoom = region.rooms[region.rooms.length - 1];
            if (coordinates[lastRoom]) {
                lastCoord = { ...coordinates[lastRoom], z: center.z };
            }
        }
        
        const pos = findAdjacent(lastCoord.x, lastCoord.y, center.z, usedPositions);
        if (pos) {
            coordinates[roomId] = pos;
        } else {
            // Spiral search
            for (let r = 1; r <= 30; r++) {
                for (let dx = -r; dx <= r; dx++) {
                    for (let dy = -r; dy <= r; dy++) {
                        if (Math.abs(dx) === r || Math.abs(dy) === r) {
                            const x = center.x + dx;
                            const y = center.y + dy;
                            const key = `${x},${y},${center.z}`;
                            if (!usedPositions.has(key)) {
                                usedPositions.add(key);
                                coordinates[roomId] = { x, y, z: center.z };
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
    
    // Generate road/path rooms along major routes (moderate density)
    for (const path of majorPaths) {
        const from = geography[path.from];
        const to = geography[path.to];
        if (!from || !to) continue;
        
        const fromX = from.x;
        const fromY = from.y;
        const toX = to.x;
        const toY = to.y;
        const z = from.z || 0;
        
        // Find last room in from region
        let startX = fromX;
        let startY = fromY;
        if (from.rooms.length > 0) {
            const lastRoom = from.rooms[from.rooms.length - 1];
            if (coordinates[lastRoom]) {
                startX = coordinates[lastRoom].x;
                startY = coordinates[lastRoom].y;
            }
        }
        
        // Create path of intermediate rooms - MODERATE DENSITY
        const dx = toX - startX;
        const dy = toY - startY;
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        const steps = Math.max(1, Math.floor(distance * 1.5)); // 1.5 rooms per unit
        
        for (let i = 1; i <= steps; i++) {
            const pathX = Math.round(startX + (dx * i / (steps + 1)));
            const pathY = Math.round(startY + (dy * i / (steps + 1)));
            const pathRoomId = `${path.type}_${path.from}_${path.to}_${i}`;
            const key = `${pathX},${pathY},${z}`;
            
            if (!usedPositions.has(key)) {
                usedPositions.add(key);
                coordinates[pathRoomId] = { x: pathX, y: pathY, z };
                pathRooms.push(pathRoomId);
            }
        }
    }
    
    // Generate river systems (water + banks)
    for (const river of rivers) {
        for (let i = 0; i < river.path.length - 1; i++) {
            const from = river.path[i];
            const to = river.path[i + 1];
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const distance = Math.max(Math.abs(dx), Math.abs(dy));
            const steps = Math.max(1, Math.floor(distance * 2)); // 2 rooms per unit for rivers
            
            for (let j = 0; j <= steps; j++) {
                const riverX = Math.round(from.x + (dx * j / steps));
                const riverY = Math.round(from.y + (dy * j / steps));
                
                // Create river water (requires boat)
                const riverWaterId = `river_${river.name.toLowerCase().replace(/\s+/g, '_')}_${i}_${j}`;
                const waterKey = `${riverX},${riverY},0`;
                if (!usedPositions.has(waterKey)) {
                    usedPositions.add(waterKey);
                    coordinates[riverWaterId] = { x: riverX, y: riverY, z: 0 };
                    pathRooms.push(riverWaterId);
                }
                
                // Create river banks (walkable) - on both sides
                const bankOffsets = [
                    { dx: 1, dy: 0 },   // East bank
                    { dx: -1, dy: 0 }    // West bank
                ];
                
                // Add north/south banks if river flows east-west
                if (Math.abs(dx) > Math.abs(dy)) {
                    bankOffsets.push({ dx: 0, dy: 1 }, { dx: 0, dy: -1 });
                }
                
                for (const offset of bankOffsets) {
                    const bankX = riverX + offset.dx;
                    const bankY = riverY + offset.dy;
                    const bankKey = `${bankX},${bankY},0`;
                    
                    if (!usedPositions.has(bankKey)) {
                        const bankId = `riverbank_${river.name.toLowerCase().replace(/\s+/g, '_')}_${i}_${j}_${offset.dx}_${offset.dy}`;
                        usedPositions.add(bankKey);
                        coordinates[bankId] = { x: bankX, y: bankY, z: 0 };
                        pathRooms.push(bankId);
                    }
                }
            }
        }
    }
    
    // Generate organic connecting paths between regions and paths
    console.log('Generating organic connecting paths...');
    const allCoords = Object.values(coordinates);
    if (allCoords.length > 0) {
        // Create organic branch paths between major routes (wider spacing)
        const pathEndpoints = [];
        for (const [roomId, coord] of Object.entries(coordinates)) {
            if (roomId.startsWith('road_') || roomId.startsWith('path_') || 
                roomId.startsWith('river_') || roomId.startsWith('riverbank_')) {
                pathEndpoints.push({ id: roomId, x: coord.x, y: coord.y, z: coord.z });
            }
        }
        
        // Create organic branches between nearby path segments (wider range)
        let branchCount = 0;
        const usedBranches = new Set();
        
        for (let i = 0; i < Math.min(150, pathEndpoints.length); i += 3) { // Sample every 3rd point
            const point1 = pathEndpoints[i];
            for (let j = i + 5; j < Math.min(i + 30, pathEndpoints.length); j += 2) { // Wider search
                const point2 = pathEndpoints[j];
                const dist = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
                
                // Connect nearby path segments (8-20 units apart) with organic branches
                if (dist >= 8 && dist <= 20 && point1.z === point2.z) {
                    const branchKey = `${i}_${j}`;
                    if (usedBranches.has(branchKey)) continue;
                    usedBranches.add(branchKey);
                    
                    const steps = Math.floor(dist * 1.2); // Sparse branches
                    for (let k = 1; k < steps; k++) {
                        const t = k / steps;
                        // Add organic curve
                        const curveOffset = Math.sin(t * Math.PI) * (1 + Math.random() * 0.5);
                        const perpX = -(point2.y - point1.y) / dist;
                        const perpY = (point2.x - point1.x) / dist;
                        
                        const branchX = Math.round(point1.x + (point2.x - point1.x) * t + perpX * curveOffset);
                        const branchY = Math.round(point1.y + (point2.y - point1.y) * t + perpY * curveOffset);
                        const key = `${branchX},${branchY},${point1.z}`;
                        
                        if (!usedPositions.has(key)) {
                            usedPositions.add(key);
                            const branchId = `path_branch_${i}_${j}_${k}`;
                            coordinates[branchId] = { x: branchX, y: branchY, z: point1.z };
                            pathRooms.push(branchId);
                            branchCount++;
                        }
                    }
                }
            }
        }
        console.log(`Generated ${branchCount} organic branch paths`);
    }
    
    return { coordinates, pathRooms };
}

// Create connections - ONLY ADJACENT
function createConnections(coordinates, pathRooms) {
    const exits = {};
    const allRooms = [...Object.keys(rooms), ...pathRooms];
    
    // Initialize
    for (const roomId of allRooms) {
        exits[roomId] = {};
    }
    
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
    
    // Connect all adjacent rooms
    for (const room1 of allRooms) {
        for (const room2 of allRooms) {
            if (room1 === room2) continue;
            
            const c1 = coordinates[room1];
            const c2 = coordinates[room2];
            if (!c1 || !c2) continue;
            
            const dx = Math.abs(c2.x - c1.x);
            const dy = Math.abs(c2.y - c1.y);
            const dz = Math.abs(c2.z - c1.z);
            
            const isAdjacent = 
                (dz === 0 && dx <= 1 && dy <= 1 && (dx + dy) > 0) ||
                (dz === 1 && dx === 0 && dy === 0) ||
                (dz === -1 && dx === 0 && dy === 0);
            
            if (isAdjacent) {
                const dir = getDirection(room1, room2);
                if (dir && !exits[room1][dir]) {
                    exits[room1][dir] = room2;
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
    
    // Connect Minas Tirith levels
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

// Verify connectivity and fix unreachable rooms
function verifyAndFixConnectivity(exits, coordinates, pathRooms, startRoom = 'bag_end') {
    // Get all rooms including path rooms (but don't double-count)
    const originalRoomIds = new Set(Object.keys(rooms));
    const pathRoomIds = new Set(pathRooms);
    const allRooms = Array.from(new Set([...originalRoomIds, ...pathRoomIds]));
    const visited = new Set();
    const queue = [startRoom];
    visited.add(startRoom);
    
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
    
    // Fix unreachable rooms by connecting them to nearest reachable room
    if (unreachable.length > 0) {
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
        
        // Re-check connectivity
        const visited2 = new Set();
        const queue2 = [startRoom];
        visited2.add(startRoom);
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
        return { totalRooms: allRooms.length, reachable: finalReachable, isConnected: finalReachable === allRooms.length };
    }
    
    return { totalRooms: allRooms.length, reachable, isConnected: reachable === allRooms.length };
}

// Main
console.log('Rebuilding world - Full Middle Earth Map...');
const { coordinates, pathRooms } = assignRoomCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms (${pathRooms.length} path rooms)`);

// Check overlaps
const positionCounts = {};
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z}`;
    if (!positionCounts[key]) positionCounts[key] = [];
    positionCounts[key].push(roomId);
}

const overlaps = Object.entries(positionCounts).filter(([_, rooms]) => rooms.length > 1);
if (overlaps.length > 0) {
    console.log(`⚠️  Found ${overlaps.length} overlaps (should only be vertical)`);
} else {
    console.log('✅ No overlaps found!');
}

const exits = createConnections(coordinates, pathRooms);
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

// Generate path room definitions function
function generatePathRooms(pathRoomList) {
    const pathRoomDefinitions = {};
    const regionNames = {
        shire: 'Shire', old_forest: 'Old Forest', barrow_downs: 'Barrow Downs',
        bree: 'Bree', weathertop: 'Weathertop', rivendell: 'Rivendell',
        moria: 'Moria', lothlorien: 'Lothlorien', fangorn: 'Fangorn',
        rohan: 'Rohan', mirkwood: 'Mirkwood', erebor: 'Erebor',
        gondor: 'Gondor', minas_tirith: 'Minas Tirith', mordor: 'Mordor'
    };
    
    for (const pathRoomId of pathRoomList) {
        const parts = pathRoomId.split('_');
        if (parts.length >= 4) {
            const fromRegion = parts[1];
            const toRegion = parts[2];
            const fromName = regionNames[fromRegion] || fromRegion;
            const toName = regionNames[toRegion] || toRegion;
            pathRoomDefinitions[pathRoomId] = {
                name: `Road to ${toName}`,
                description: `You are on a well-traveled road between ${fromName} and ${toName}. The path is clear and well-maintained.`,
                exits: {},
                items: [],
                enemies: []
            };
        } else {
            // Check if it's a filler room
            if (pathRoomId.startsWith('filler_')) {
                pathRoomDefinitions[pathRoomId] = {
                    name: 'Countryside',
                    description: 'You are in the open countryside of Middle Earth. Rolling hills and fields stretch around you.',
                    exits: {},
                    items: [],
                    enemies: []
                };
            } else {
                pathRoomDefinitions[pathRoomId] = {
                    name: 'Road',
                    description: 'You are on a road through Middle Earth.',
                    exits: {},
                    items: [],
                    enemies: []
                };
            }
        }
    }
    return pathRoomDefinitions;
}

// Generate path room definitions and add to rooms
if (pathRooms.length > 0) {
    console.log(`\nGenerating ${pathRooms.length} path room definitions...`);
    const pathRoomDefinitions = generatePathRooms(pathRooms);
    // Add path rooms to rooms object
    Object.assign(rooms, pathRoomDefinitions);
    console.log(`Added ${Object.keys(pathRoomDefinitions).length} path rooms to world`);
}

const connectivity = verifyAndFixConnectivity(exits, coordinates, pathRooms, 'bag_end');
console.log(`\nConnectivity check (from bag_end):`);
console.log(`   Total rooms (including paths): ${connectivity.totalRooms}`);
console.log(`   Reachable: ${connectivity.reachable}`);
console.log(`   Percentage: ${(connectivity.reachable / connectivity.totalRooms * 100).toFixed(1)}%`);

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
        overlaps: overlaps.length
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt!`);
console.log(`   Output: ${outputPath}`);
console.log(`   Fully connected: ${connectivity.isConnected ? 'YES' : 'NO'}`);

