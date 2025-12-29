#!/usr/bin/env node
/**
 * Rebuild World Based on Middle Earth Map
 * 
 * This script creates a geographic layout based on the Middle Earth map,
 * with proper vertical structure for Minas Tirith and other multi-level locations.
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

// Geographic regions based on Middle Earth map
// Coordinates are spread out to match the actual map distances
// Using a larger coordinate system: X goes west to east, Y goes north to south
// Shire is far northwest, Mordor is far southeast
const geographicRegions = {
    // THE SHIRE (Far Northwest) - Small, compact region
    shire: {
        xRange: [0, 20],
        yRange: [0, 20],
        z: 0,
        rooms: ['bag_end', 'tuckborough', 'tookbank', 'michel_delving', 'hobbiton_square', 
                'waymeet', 'overhill', 'scary', 'needlehole', 'longbottom', 'sackville_manor',
                'whitwell', 'rushock_bog', 'green_hill_country', 'bucklebury', 'brandy_hall',
                'buckland_kitchen', 'buckland_cellar', 'crickhollow', 'old_forest_buckland_entrance']
    },
    
    // OLD FOREST / WITHYWINDLE (East of Shire)
    old_forest: {
        xRange: [20, 35],
        yRange: [5, 20],
        z: 0,
        rooms: ['old_forest', 'old_forest_depth', 'withywindle', 'bombadil_house', 'bombadil_garden',
                'deep_in_old_forest', 'tom_bombadil_house']
    },
    
    // BREE-LAND (East of Shire, South of Rivendell)
    bree: {
        xRange: [40, 60],
        yRange: [30, 50],
        z: 0,
        rooms: ['bree_gate', 'bree_square', 'prancing_pony', 'bree_inn', 'bree_stable']
    },
    
    // WEATHERTOP / AMON SUL (Between Shire and Rivendell)
    weathertop: {
        xRange: [50, 70],
        yRange: [50, 70],
        z: 0,
        rooms: ['weathertop_approach', 'weathertop_base', 'weathertop_summit']
    },
    
    // RIVENDELL / IM LADRIS (Central North, East of Weathertop)
    rivendell: {
        xRange: [80, 100],
        yRange: [60, 80],
        z: 0,
        rooms: ['rivendell', 'elrond_study', 'rivendell_library', 'rivendell_halls', 'rivendell_gardens']
    },
    
    // MORIA (Central, underground, between Rivendell and Lothlorien)
    moria: {
        xRange: [100, 120],
        yRange: [80, 100],
        z: -1,  // Underground
        rooms: ['moria_gates', 'moria_halls', 'moria_bridge', 'moria_depths', 'doors_of_durin',
                'moria_chamber', 'moria_treasure_room']
    },
    
    // LOTH LORIEN (East of Rivendell, South of Mirkwood)
    lothlorien: {
        xRange: [120, 140],
        yRange: [100, 120],
        z: 0,
        rooms: ['lothlorien', 'caras_galadhon', 'galadriel_mirror', 'lothlorien_forest']
    },
    
    // MIRKWOOD (Far East, North of Rohan)
    mirkwood: {
        xRange: [150, 180],
        yRange: [80, 120],
        z: 0,
        rooms: ['mirkwood', 'mirkwood_path', 'mirkwood_depths', 'thranduil_halls_interior',
                'mirkwood_path_2', 'mirkwood_clearing']
    },
    
    // EREBOR / LONELY MOUNTAIN (Far Northeast, North of Mirkwood)
    erebor: {
        xRange: [180, 200],
        yRange: [60, 80],
        z: 0,
        rooms: ['erebor', 'lonely_mountain', 'dwarven_halls', 'erebor_gates']
    },
    
    // FANGORN (East of Rohan, West of Mirkwood)
    fangorn: {
        xRange: [130, 150],
        yRange: [140, 160],
        z: 0,
        rooms: ['fangorn_eaves', 'fangorn_depths', 'wellinghall', 'treebeard_glade',
                'fangorn_clearing']
    },
    
    // ROHAN (Central South, between Shire and Gondor)
    rohan: {
        xRange: [60, 100],
        yRange: [180, 220],
        z: 0,
        rooms: ['rohan_plains', 'edoras_approach', 'edoras_gates', 'meduseld', 'aldburg',
                'harrowdale', 'dunharrow', 'helms_deep', 'helms_deep_interior', 'snowbourn_banks',
                'east_emnet', 'west_emnet', 'entwash_delta', 'gap_of_rohan']
    },
    
    // GONDOR (Southwest, West of Mordor)
    gondor: {
        xRange: [40, 80],
        yRange: [240, 280],
        z: 0,
        rooms: ['pelennor_fields', 'osgiliath_ruins', 'ithilien_woods', 'henneth_annun',
                'lossarnach_valleys', 'pelargir_port', 'annuminas_ruins', 'annuminas_tower',
                'gondor_plains']
    },
    
    // MINAS TIRITH - Vertical Structure (Same X/Y, different Z levels)
    // Located in Gondor region, southwest of Mordor
    minas_tirith: {
        x: 60,  // Fixed X coordinate in Gondor
        y: 260,  // Fixed Y coordinate in Gondor
        levels: {
            0: 'minas_tirith_gates',  // Ground level - gates
            1: 'first_level',         // First level above ground
            2: 'second_level',        // Second level
            3: 'third_level',         // Third level
            4: 'fourth_level',        // Fourth level
            5: 'fifth_level',         // Fifth level
            6: 'sixth_level',         // Sixth level
            7: 'white_tower',         // White Tower (highest)
            // Special locations on various levels
            '1_stables': 'minas_tirith_stables',
            '6_healing': 'minas_tirith_houses_of_healing',
            '6_citadel': 'citadel_guards_hall',
            '6_hall': 'hall_of_kings'
        }
    },
    
    // MORDOR (Far Southeast)
    mordor: {
        xRange: [120, 180],
        yRange: [260, 320],
        z: 0,
        rooms: ['mordor_gates', 'barad_dur_approach', 'barad_dur_base', 'barad_dur_throne_room',
                'mount_doom_approach', 'mount_doom_sammath_naur', 'cirith_ungol', 'morgul_vale',
                'morgul_pass', 'durthang_fortress', 'minas_morgul_gates', 'black_gate']
    },
    
    // BARROW DOWNS (Between Shire and Bree)
    barrow_downs: {
        xRange: [30, 50],
        yRange: [20, 40],
        z: 0,
        rooms: ['barrow_downs', 'barrow_chamber', 'barrow_chamber_second_mound']
    }
};

// Assign coordinates to rooms based on regions
function assignCoordinates() {
    const coordinates = {};
    const roomToRegion = {};
    
    // Initialize all rooms first
    for (const roomId of Object.keys(rooms)) {
        coordinates[roomId] = null; // Mark as unassigned
    }
    
    // Assign rooms to regions
    for (const [regionName, region] of Object.entries(geographicRegions)) {
        if (regionName === 'minas_tirith') {
            // Special handling for Minas Tirith vertical structure
            const baseX = region.x;
            const baseY = region.y;
            
            // Assign ground level
            if (rooms[region.levels[0]]) {
                coordinates[region.levels[0]] = { x: baseX, y: baseY, z: 0 };
                roomToRegion[region.levels[0]] = 'minas_tirith';
            }
            
            // Assign each level above ground
            for (let level = 1; level <= 7; level++) {
                const levelKey = level;
                if (region.levels[levelKey] && rooms[region.levels[levelKey]]) {
                    coordinates[region.levels[levelKey]] = { 
                        x: baseX, 
                        y: baseY, 
                        z: level  // Levels 1-7 above ground
                    };
                    roomToRegion[region.levels[levelKey]] = 'minas_tirith';
                }
            }
            
            // Assign special locations (they share coordinates with their level)
            if (region.levels['1_stables'] && rooms[region.levels['1_stables']]) {
                coordinates[region.levels['1_stables']] = { x: baseX + 1, y: baseY, z: 1 };
            }
            if (region.levels['6_healing'] && rooms[region.levels['6_healing']]) {
                coordinates[region.levels['6_healing']] = { x: baseX, y: baseY + 1, z: 6 };
            }
            if (region.levels['6_citadel'] && rooms[region.levels['6_citadel']]) {
                coordinates[region.levels['6_citadel']] = { x: baseX, y: baseY - 1, z: 6 };
            }
            if (region.levels['6_hall'] && rooms[region.levels['6_hall']]) {
                coordinates[region.levels['6_hall']] = { x: baseX + 1, y: baseY, z: 6 };
            }
        } else if (region.xRange && region.yRange) {
            // Regular region with ranges
            const regionRooms = (region.rooms || []).filter(roomId => rooms[roomId]);
            const xMin = region.xRange[0];
            const xMax = region.xRange[1];
            const yMin = region.yRange[0];
            const yMax = region.yRange[1];
            const z = region.z || 0;
            
            // Distribute rooms in a grid within the region
            if (regionRooms.length > 0) {
                const cols = Math.ceil(Math.sqrt(regionRooms.length));
                const rows = Math.ceil(regionRooms.length / cols);
                const xStep = cols > 1 ? (xMax - xMin) / (cols - 1) : 0;
                const yStep = rows > 1 ? (yMax - yMin) / (rows - 1) : 0;
                
                regionRooms.forEach((roomId, idx) => {
                    const col = idx % cols;
                    const row = Math.floor(idx / cols);
                    coordinates[roomId] = {
                        x: Math.round(xMin + col * xStep),
                        y: Math.round(yMin + row * yStep),
                        z: z
                    };
                    roomToRegion[roomId] = regionName;
                });
            }
        }
    }
    
    // Assign any remaining rooms to a default location (spread them out more)
    let defaultX = 200;
    let defaultY = 0;
    const defaultZ = 0;
    const defaultCols = 15;
    const defaultSpacing = 5; // More spacing for unassigned rooms
    
    for (const roomId of Object.keys(rooms)) {
        if (coordinates[roomId] === null) {
            coordinates[roomId] = { 
                x: defaultX, 
                y: defaultY, 
                z: defaultZ 
            };
            roomToRegion[roomId] = 'default';
            defaultX += defaultSpacing;
            if (defaultX >= 200 + (defaultCols * defaultSpacing)) {
                defaultX = 200;
                defaultY += defaultSpacing;
            }
        }
    }
    
    return { coordinates, roomToRegion };
}

// Create connections based on geographic proximity and logical paths
function createConnections(coordinates, roomToRegion) {
    const exits = {};
    
    // Initialize exits object for all rooms
    for (const roomId of Object.keys(rooms)) {
        exits[roomId] = {};
    }
    
    // Helper to calculate distance
    function distance(room1, room2) {
        const c1 = coordinates[room1];
        const c2 = coordinates[room2];
        if (!c1 || !c2) return Infinity;
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const dz = c2.z - c1.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    // Helper to get direction (works for any distance, not just adjacent)
    function getDirection(room1, room2) {
        const c1 = coordinates[room1];
        const c2 = coordinates[room2];
        if (!c1 || !c2) return null;
        
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const dz = c2.z - c1.z;
        
        // Vertical connections (only if X and Y are the same or very close)
        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
            if (dz === 1) return 'up';
            if (dz === -1) return 'down';
        }
        
        // Horizontal connections (only if on same Z level)
        if (dz === 0) {
            // Calculate angle to determine general direction
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            // Cardinal directions (with tolerance)
            if (Math.abs(angle) < 22.5 || Math.abs(angle) > 157.5) {
                return dx > 0 ? 'east' : 'west';
            }
            if (Math.abs(angle - 90) < 22.5 || Math.abs(angle + 90) < 22.5) {
                return dy > 0 ? 'south' : 'north';
            }
            
            // Diagonal directions
            if (angle > 22.5 && angle < 67.5) return 'southeast';
            if (angle > 67.5 && angle < 112.5) return 'south';
            if (angle > 112.5 && angle < 157.5) return 'southwest';
            if (angle < -22.5 && angle > -67.5) return 'northeast';
            if (angle < -67.5 && angle > -112.5) return 'north';
            if (angle < -112.5 && angle > -157.5) return 'northwest';
        }
        
        return null;
    }
    
    // Helper function to check if regions are adjacent
    function areRegionsAdjacent(region1, region2) {
        if (region1 === region2) return true;
        if (!region1 || !region2) return false;
        
        // Define region adjacency
        const adjacentPairs = [
            ['shire', 'old_forest'],
            ['shire', 'bree'],
            ['shire', 'barrow_downs'],
            ['old_forest', 'barrow_downs'],
            ['barrow_downs', 'bree'],
            ['bree', 'weathertop'],
            ['weathertop', 'rivendell'],
            ['rivendell', 'moria'],
            ['rivendell', 'lothlorien'],
            ['moria', 'lothlorien'],
            ['lothlorien', 'fangorn'],
            ['lothlorien', 'mirkwood'],
            ['fangorn', 'rohan'],
            ['fangorn', 'mirkwood'],
            ['mirkwood', 'erebor'],
            ['rohan', 'gondor'],
            ['rohan', 'fangorn'],
            ['gondor', 'minas_tirith'],
            ['gondor', 'mordor'],
            ['minas_tirith', 'mordor']
        ];
        
        return adjacentPairs.some(([r1, r2]) => 
            (r1 === region1 && r2 === region2) || (r1 === region2 && r2 === region1)
        );
    }
    
    // Create connections for rooms within regions and between adjacent regions
    for (const room1 of Object.keys(rooms)) {
        const region1 = roomToRegion[room1] || 'default';
        
        for (const room2 of Object.keys(rooms)) {
            if (room1 === room2) continue;
            
            const region2 = roomToRegion[room2] || 'default';
            const dist = distance(room1, room2);
            const dir = getDirection(room1, room2);
            
            if (!dir) continue;
            
            // Determine max distance based on region relationship
            let maxDist = 1.5; // Default: only directly adjacent
            if (region1 === region2) {
                maxDist = 15; // Same region: more lenient
            } else if (areRegionsAdjacent(region1, region2)) {
                maxDist = 25; // Adjacent regions: connect if reasonably close
            }
            
            // Connect if within distance
            if (dist <= maxDist) {
                // Only add if not already connected in that direction
                if (!exits[room1][dir]) {
                    exits[room1][dir] = room2;
                }
            }
        }
    }
    
    // Special connections for Minas Tirith vertical structure
    const minasTirithRooms = [
        'minas_tirith_gates', 'first_level', 'second_level', 'third_level',
        'fourth_level', 'fifth_level', 'sixth_level', 'white_tower'
    ];
    
    // Connect Minas Tirith levels vertically
    for (let i = 0; i < minasTirithRooms.length - 1; i++) {
        const lower = minasTirithRooms[i];
        const upper = minasTirithRooms[i + 1];
        if (rooms[lower] && rooms[upper] && coordinates[lower] && coordinates[upper]) {
            exits[lower]['up'] = upper;
            exits[upper]['down'] = lower;
        }
    }
    
    // Connect special Minas Tirith locations
    if (rooms['minas_tirith_stables'] && rooms['first_level'] && 
        coordinates['minas_tirith_stables'] && coordinates['first_level']) {
        exits['first_level']['north'] = 'minas_tirith_stables';
        if (!exits['minas_tirith_stables']) exits['minas_tirith_stables'] = {};
        exits['minas_tirith_stables']['south'] = 'first_level';
    }
    
    if (rooms['minas_tirith_houses_of_healing'] && rooms['sixth_level'] &&
        coordinates['minas_tirith_houses_of_healing'] && coordinates['sixth_level']) {
        exits['sixth_level']['south'] = 'minas_tirith_houses_of_healing';
        if (!exits['minas_tirith_houses_of_healing']) exits['minas_tirith_houses_of_healing'] = {};
        exits['minas_tirith_houses_of_healing']['north'] = 'sixth_level';
    }
    
    if (rooms['citadel_guards_hall'] && rooms['sixth_level'] &&
        coordinates['citadel_guards_hall'] && coordinates['sixth_level']) {
        exits['sixth_level']['southeast'] = 'citadel_guards_hall';
        if (!exits['citadel_guards_hall']) exits['citadel_guards_hall'] = {};
        exits['citadel_guards_hall']['northwest'] = 'sixth_level';
    }
    
    // Connect gates to first level
    if (rooms['minas_tirith_gates'] && rooms['first_level'] &&
        coordinates['minas_tirith_gates'] && coordinates['first_level']) {
        exits['minas_tirith_gates']['up'] = 'first_level';
        exits['first_level']['down'] = 'minas_tirith_gates';
    }
    
    // Connect Pelennor Fields to gates
    if (rooms['pelennor_fields'] && rooms['minas_tirith_gates'] &&
        coordinates['pelennor_fields'] && coordinates['minas_tirith_gates']) {
        const dist = distance('pelennor_fields', 'minas_tirith_gates');
        if (dist <= 2) {
            exits['pelennor_fields']['east'] = 'minas_tirith_gates';
            exits['minas_tirith_gates']['west'] = 'pelennor_fields';
        }
    }
    
    return exits;
}

// Main execution
console.log('Rebuilding world based on Middle Earth map...');
console.log(`Found ${Object.keys(rooms).length} rooms`);

const { coordinates, roomToRegion } = assignCoordinates();
console.log(`Assigned coordinates to ${Object.keys(coordinates).length} rooms`);

const exits = createConnections(coordinates, roomToRegion);
console.log(`Created connections for ${Object.keys(exits).length} rooms`);

// Count connections
let totalConnections = 0;
for (const roomExits of Object.values(exits)) {
    totalConnections += Object.keys(roomExits).length;
}
console.log(`Total connections: ${totalConnections}`);

// Save to JSON file
const outputPath = path.join(__dirname, 'linear-world-connections.json');
const outputData = {
    coordinates,
    newExits: exits,
    metadata: {
        generated: new Date().toISOString(),
        totalRooms: Object.keys(rooms).length,
        totalConnections: totalConnections,
        regions: Object.keys(geographicRegions).length
    }
};

writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`\n✅ World rebuilt successfully!`);
console.log(`   Output: ${outputPath}`);
console.log(`   Rooms: ${Object.keys(coordinates).length}`);
console.log(`   Connections: ${totalConnections}`);
console.log(`\nMinas Tirith vertical structure:`);
for (let z = 0; z <= 7; z++) {
    const roomsAtLevel = Object.entries(coordinates)
        .filter(([_, coord]) => coord.x === 40 && coord.y === 60 && coord.z === z)
        .map(([id, _]) => id);
    if (roomsAtLevel.length > 0) {
        console.log(`   Level ${z}: ${roomsAtLevel.join(', ')}`);
    }
}
