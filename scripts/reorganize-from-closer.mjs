// Reorganize the entire game world based on closer.txt ASCII map
// This creates a proper Middle Earth layout with all regions correctly positioned

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
console.log('REORGANIZING WORLD BASED ON CLOSER.TXT MIDDLE EARTH MAP');
console.log('='.repeat(100));

// Coordinate system: 
// - Map editor displays Y+ as UP (north), Y- as DOWN (south)
// - X+ is right (east), X- is left (west)
// - closer.txt: line 1 = far north, line 135 = far south
// - So we need to map: ASCII line -> negative Y (lower lines = more negative Y)

// Scale: Each ASCII line ~= 1 Y unit, each character ~= 0.5 X units
// We'll use a scale factor to spread things out nicely

const SCALE_X = 1.5;  // Horizontal spread
const SCALE_Y = 1.0;  // Vertical spread

// Define region centers based on closer.txt character positions and line numbers
// Format: { x: character position, y: line number (inverted for game coords) }
// Line 1 = y: 70 (north), Line 135 = y: -65 (south)
function asciiToGameCoords(charPos, lineNum) {
    // Center the map: char 70 -> x: 0, line 68 -> y: 0 (roughly middle)
    const x = Math.round((charPos - 70) * SCALE_X);
    const y = Math.round((68 - lineNum) * SCALE_Y);  // Invert: low line = high y (north)
    return { x, y };
}

// Region definitions from closer.txt (charPos, lineNum)
const regions = {
    // FAR NORTH (lines 1-20)
    grey_mountains: asciiToGameCoords(100, 4),
    withered_heath: asciiToGameCoords(90, 7),
    iron_hills: asciiToGameCoords(130, 14),
    erebor: asciiToGameCoords(100, 21),
    dale: asciiToGameCoords(95, 25),
    laketown: asciiToGameCoords(100, 31),
    
    // NORTHWEST (lines 7-55)
    forochel: asciiToGameCoords(20, 10),
    blue_mountains: asciiToGameCoords(15, 20),
    grey_havens: asciiToGameCoords(12, 52),
    angmar: asciiToGameCoords(50, 11),
    ettenmoors: asciiToGameCoords(50, 19),
    
    // NORTH-CENTRAL (lines 25-45)
    evendim: asciiToGameCoords(55, 29),
    fornost: asciiToGameCoords(65, 29),
    north_downs: asciiToGameCoords(60, 25),
    weather_hills: asciiToGameCoords(65, 33),
    weathertop: asciiToGameCoords(65, 35),
    
    // THE SHIRE & BREE (lines 45-55)
    shire: asciiToGameCoords(45, 49),
    bag_end: asciiToGameCoords(45, 49),
    bree: asciiToGameCoords(55, 46),
    
    // RIVENDELL & MISTY MOUNTAINS (lines 45-85)
    rivendell: asciiToGameCoords(70, 54),
    misty_mountains: asciiToGameCoords(75, 47),
    high_pass: asciiToGameCoords(75, 43),
    
    // MIRKWOOD & RHOVANION (lines 38-60)
    mirkwood: asciiToGameCoords(110, 42),
    elvenking_halls: asciiToGameCoords(115, 42),
    old_ford: asciiToGameCoords(95, 51),
    beorns_hall: asciiToGameCoords(85, 57),
    dol_guldur: asciiToGameCoords(105, 58),
    
    // CENTRAL (lines 60-80)
    gladden_fields: asciiToGameCoords(80, 66),
    lorien: asciiToGameCoords(80, 71),
    moria: asciiToGameCoords(78, 78),
    
    // FANGORN & ROHAN (lines 84-100)
    isengard: asciiToGameCoords(55, 85),
    fangorn: asciiToGameCoords(78, 86),
    gap_of_rohan: asciiToGameCoords(55, 89),
    rohan: asciiToGameCoords(55, 91),
    edoras: asciiToGameCoords(55, 93),
    helms_deep: asciiToGameCoords(50, 96),
    
    // GONDOR (lines 100-125)
    white_mountains: asciiToGameCoords(65, 101),
    gondor: asciiToGameCoords(60, 104),
    pinnath_gelin: asciiToGameCoords(50, 107),
    anfalas: asciiToGameCoords(45, 112),
    dol_amroth: asciiToGameCoords(35, 119),
    minas_tirith: asciiToGameCoords(78, 110),
    osgiliath: asciiToGameCoords(78, 116),
    pelargir: asciiToGameCoords(78, 124),
    
    // MORDOR & EAST (lines 93-130)
    emyn_muil: asciiToGameCoords(100, 93),
    argonath: asciiToGameCoords(95, 96),
    rauros: asciiToGameCoords(90, 101),
    dead_marshes: asciiToGameCoords(100, 105),
    black_gate: asciiToGameCoords(100, 109),
    ered_lithui: asciiToGameCoords(115, 104),
    minas_morgul: asciiToGameCoords(95, 119),
    ithilien: asciiToGameCoords(100, 128),
    
    // MORDOR INTERIOR (lines 105-125)
    mordor: asciiToGameCoords(115, 118),
    barad_dur: asciiToGameCoords(120, 108),
    mount_doom: asciiToGameCoords(120, 113),
    ephel_duath: asciiToGameCoords(115, 126),
    nurn: asciiToGameCoords(120, 122),
};

console.log('\nRegion centers (game coordinates):');
for (const [name, coord] of Object.entries(regions)) {
    console.log(`  ${name.padEnd(20)}: (${coord.x}, ${coord.y})`);
}

// Map room IDs to regions
function getRoomRegion(roomId) {
    const id = roomId.toLowerCase();
    
    // Mordor
    if (id.includes('mount_doom') || id.includes('sammath_naur') || id.includes('crack_of_doom') || id.includes('orodruin')) return 'mount_doom';
    if (id.includes('barad_dur') || id.includes('dark_tower') || id.includes('sauron')) return 'barad_dur';
    if (id.includes('mordor') || id.includes('gorgoroth') || id.includes('plateau') || id.includes('ash_plain')) return 'mordor';
    if (id.includes('cirith_ungol') || id.includes('spider') || id.includes('shelob')) return 'minas_morgul';
    if (id.includes('minas_morgul') || id.includes('morgul')) return 'minas_morgul';
    if (id.includes('black_gate') || id.includes('morannon')) return 'black_gate';
    if (id.includes('dead_marsh')) return 'dead_marshes';
    if (id.includes('ithilien') || id.includes('henneth')) return 'ithilien';
    if (id.includes('ephel') || id.includes('duath')) return 'ephel_duath';
    if (id.includes('nurn')) return 'nurn';
    if (id.includes('ered_lithui') || id.includes('ash_mountain')) return 'ered_lithui';
    
    // Gondor
    if (id.includes('minas_tirith') || id.includes('white_city') || id.includes('citadel') || 
        id.includes('pelennor') || id.includes('houses_of_healing') || id.includes('steward')) return 'minas_tirith';
    if (id.includes('osgiliath')) return 'osgiliath';
    if (id.includes('pelargir')) return 'pelargir';
    if (id.includes('dol_amroth') || id.includes('prince_imrahil')) return 'dol_amroth';
    if (id.includes('anfalas')) return 'anfalas';
    if (id.includes('pinnath')) return 'pinnath_gelin';
    if (id.includes('gondor') || id.includes('lossarnach')) return 'gondor';
    if (id.includes('white_mountain') || id.includes('ered_nimrais')) return 'white_mountains';
    
    // Rohan
    if (id.includes('edoras') || id.includes('meduseld') || id.includes('golden_hall') || id.includes('theoden')) return 'edoras';
    if (id.includes('helm') || id.includes('hornburg') || id.includes('deeping')) return 'helms_deep';
    if (id.includes('rohan') || id.includes('westfold') || id.includes('dunharrow') || id.includes('snowbourn')) return 'rohan';
    if (id.includes('isengard') || id.includes('orthanc') || id.includes('saruman')) return 'isengard';
    if (id.includes('gap_of_rohan') || id.includes('fords_of_isen')) return 'gap_of_rohan';
    
    // Fangorn
    if (id.includes('fangorn') || id.includes('ent') || id.includes('treebeard') || id.includes('wellinghall')) return 'fangorn';
    
    // Lorien
    if (id.includes('lorien') || id.includes('galadriel') || id.includes('caras') || 
        id.includes('mallorn') || id.includes('celebrant') || id.includes('niphredil') ||
        id.includes('silverlode') || id.includes('galadhrim')) return 'lorien';
    
    // Moria
    if (id.includes('moria') || id.includes('khazad') || id.includes('durin') || 
        id.includes('bridge_of') || id.includes('balin') || id.includes('dwarrowdelf') ||
        id.includes('endless_stair') || id.includes('mithril')) return 'moria';
    
    // Gladden Fields
    if (id.includes('gladden')) return 'gladden_fields';
    
    // Rivendell
    if (id.includes('rivendell') || id.includes('elrond') || id.includes('imladris') ||
        id.includes('last_homely') || id.includes('hall_of_fire') || id.includes('bruinen')) return 'rivendell';
    
    // Misty Mountains
    if (id.includes('misty') || id.includes('goblin') || id.includes('high_pass') || id.includes('carrock')) return 'misty_mountains';
    
    // Beorn
    if (id.includes('beorn') || id.includes('skin_changer')) return 'beorns_hall';
    
    // Mirkwood
    if (id.includes('mirkwood') || id.includes('elvenking') || id.includes('thranduil') || id.includes('wood_elf')) return 'mirkwood';
    if (id.includes('dol_guldur') || id.includes('necromancer')) return 'dol_guldur';
    if (id.includes('old_ford')) return 'old_ford';
    
    // Erebor & Dale
    if (id.includes('erebor') || id.includes('lonely_mountain') || id.includes('smaug') || id.includes('thorin')) return 'erebor';
    if (id.includes('dale') || id.includes('bard')) return 'dale';
    if (id.includes('laketown') || id.includes('esgaroth') || id.includes('lake_town') || id.includes('long_lake')) return 'laketown';
    
    // Iron Hills
    if (id.includes('iron_hill') || id.includes('dain')) return 'iron_hills';
    
    // Grey Mountains
    if (id.includes('grey_mountain') || id.includes('ered_mithrin') || id.includes('withered_heath')) return 'grey_mountains';
    
    // Angmar & North
    if (id.includes('angmar') || id.includes('carn_dum') || id.includes('witch_king')) return 'angmar';
    if (id.includes('ettenmoor') || id.includes('troll')) return 'ettenmoors';
    if (id.includes('forochel')) return 'forochel';
    
    // Weather Hills / Bree
    if (id.includes('weathertop') || id.includes('amon_sul')) return 'weathertop';
    if (id.includes('bree') || id.includes('prancing_pony') || id.includes('butterbur')) return 'bree';
    if (id.includes('fornost') || id.includes('deadmen')) return 'fornost';
    if (id.includes('evendim') || id.includes('annuminas')) return 'evendim';
    if (id.includes('north_down')) return 'north_downs';
    
    // The Shire
    if (id.includes('bag_end') || id === 'bag_end') return 'bag_end';
    if (id.includes('hobbiton') || id.includes('hill') || id.includes('gaffer')) return 'shire';
    if (id.includes('bywater') || id.includes('green_dragon')) return 'shire';
    if (id.includes('buckland') || id.includes('brandy') || id.includes('brandywine')) return 'shire';
    if (id.includes('shire') || id.includes('michel_delving') || id.includes('stock') ||
        id.includes('took') || id.includes('sackville') || id.includes('hobbit') ||
        id.includes('woodhall') || id.includes('farmer') || id.includes('maggot')) return 'shire';
    
    // Old Forest area
    if (id.includes('old_forest') || id.includes('bombadil') || id.includes('withywindle') || 
        id.includes('goldberry')) return 'shire';
    if (id.includes('barrow') || id.includes('wight')) return 'weather_hills';
    
    // Blue Mountains / Grey Havens
    if (id.includes('blue_mountain') || id.includes('ered_luin')) return 'blue_mountains';
    if (id.includes('grey_haven') || id.includes('mithlond') || id.includes('cirdan')) return 'grey_havens';
    
    // Emyn Muil / Argonath
    if (id.includes('emyn_muil') || id.includes('rauros') || id.includes('argonath') || id.includes('parth_galen')) return 'emyn_muil';
    
    return null;
}

// Track occupied positions
const occupiedPositions = new Set();

// Place rooms around region centers using spiral pattern
function placeRoomsInRegion(roomIds, centerX, centerY, startRadius = 0) {
    let radius = startRadius;
    
    for (const roomId of roomIds) {
        let found = false;
        let attempts = 0;
        
        while (!found && attempts < 200) {
            const numPoints = Math.max(8, radius * 4);
            for (let i = 0; i < numPoints && !found; i++) {
                const angle = (i / numPoints) * Math.PI * 2;
                const x = Math.round(centerX + Math.cos(angle) * radius);
                const y = Math.round(centerY + Math.sin(angle) * radius);
                const key = `${x},${y}`;
                
                if (!occupiedPositions.has(key)) {
                    const oldCoord = coordinates[roomId];
                    coordinates[roomId] = {
                        x,
                        y,
                        z: oldCoord?.z || 0
                    };
                    occupiedPositions.add(key);
                    found = true;
                }
            }
            radius++;
            attempts++;
        }
        
        if (!found) {
            console.warn(`  Warning: Could not place ${roomId}`);
        }
    }
}

// Group rooms by region
const regionRooms = {};
const unassigned = [];

for (const roomId of Object.keys(coordinates)) {
    const region = getRoomRegion(roomId);
    if (region && regions[region]) {
        if (!regionRooms[region]) regionRooms[region] = [];
        regionRooms[region].push(roomId);
    } else {
        unassigned.push(roomId);
    }
}

console.log('\n\nRooms by region:');
for (const [region, rooms] of Object.entries(regionRooms)) {
    console.log(`  ${region.padEnd(20)}: ${rooms.length} rooms`);
}
console.log(`  ${'(unassigned)'.padEnd(20)}: ${unassigned.length} rooms`);

// Clear positions and place rooms
occupiedPositions.clear();

// Place rooms for each region
console.log('\n\nPlacing rooms...');
for (const [region, rooms] of Object.entries(regionRooms)) {
    const center = regions[region];
    if (center) {
        placeRoomsInRegion(rooms, center.x, center.y);
        console.log(`  Placed ${rooms.length} rooms in ${region}`);
    }
}

// Place unassigned rooms along the central path
if (unassigned.length > 0) {
    console.log(`\n  Placing ${unassigned.length} unassigned rooms along paths...`);
    
    // Define major road waypoints
    const roadWaypoints = [
        regions.shire,
        regions.bree,
        regions.weathertop,
        regions.rivendell,
        regions.moria,
        regions.lorien,
        regions.fangorn,
        regions.rohan,
        regions.gondor,
        regions.minas_tirith,
        regions.mordor
    ];
    
    let waypointIndex = 0;
    for (const roomId of unassigned) {
        const waypoint = roadWaypoints[waypointIndex % roadWaypoints.length];
        placeRoomsInRegion([roomId], waypoint.x, waypoint.y, 5);
        waypointIndex++;
    }
}

// Create connecting paths between major regions
console.log('\n\nCreating connecting paths...');

function createPath(fromRegion, toRegion, pathType = 'path') {
    const from = regions[fromRegion];
    const to = regions[toRegion];
    if (!from || !to) return [];
    
    const paths = [];
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const steps = Math.ceil(distance / 2);
    
    for (let i = 1; i < steps; i++) {
        const t = i / steps;
        // Add some curve to the path
        const curve = Math.sin(t * Math.PI) * (distance * 0.1);
        const perpX = -dy / distance;
        const perpY = dx / distance;
        
        const x = Math.round(from.x + dx * t + perpX * curve);
        const y = Math.round(from.y + dy * t + perpY * curve);
        const key = `${x},${y},0`;
        
        if (!occupiedPositions.has(`${x},${y}`)) {
            const pathId = `${pathType}_${fromRegion}_to_${toRegion}_${i}`;
            paths.push({
                id: pathId,
                x, y, z: 0,
                type: pathType
            });
            occupiedPositions.add(`${x},${y}`);
        }
    }
    
    return paths;
}

// Define major roads and paths
const connections = [
    // Great East Road
    { from: 'grey_havens', to: 'shire', type: 'road' },
    { from: 'shire', to: 'bree', type: 'road' },
    { from: 'bree', to: 'weathertop', type: 'road' },
    { from: 'weathertop', to: 'rivendell', type: 'road' },
    
    // Path through Misty Mountains
    { from: 'rivendell', to: 'misty_mountains', type: 'path' },
    { from: 'misty_mountains', to: 'beorns_hall', type: 'path' },
    { from: 'beorns_hall', to: 'mirkwood', type: 'path' },
    
    // Fellowship path
    { from: 'rivendell', to: 'moria', type: 'path' },
    { from: 'moria', to: 'lorien', type: 'path' },
    { from: 'lorien', to: 'fangorn', type: 'path' },
    { from: 'fangorn', to: 'rohan', type: 'path' },
    { from: 'rohan', to: 'gondor', type: 'path' },
    { from: 'gondor', to: 'minas_tirith', type: 'path' },
    
    // Rohan paths
    { from: 'edoras', to: 'helms_deep', type: 'road' },
    { from: 'isengard', to: 'rohan', type: 'road' },
    
    // Gondor paths
    { from: 'minas_tirith', to: 'osgiliath', type: 'road' },
    { from: 'osgiliath', to: 'minas_morgul', type: 'path' },
    { from: 'minas_morgul', to: 'mordor', type: 'path' },
    { from: 'mordor', to: 'mount_doom', type: 'path' },
    { from: 'mordor', to: 'barad_dur', type: 'path' },
    
    // Northern paths
    { from: 'erebor', to: 'dale', type: 'road' },
    { from: 'dale', to: 'laketown', type: 'road' },
    { from: 'laketown', to: 'mirkwood', type: 'path' },
    
    // Emyn Muil path
    { from: 'lorien', to: 'emyn_muil', type: 'path' },
    { from: 'emyn_muil', to: 'dead_marshes', type: 'path' },
    { from: 'dead_marshes', to: 'black_gate', type: 'path' },
];

const newPathRooms = [];
for (const conn of connections) {
    const paths = createPath(conn.from, conn.to, conn.type);
    newPathRooms.push(...paths);
}

console.log(`  Created ${newPathRooms.length} path/road segments`);

// Add path rooms to coordinates
for (const pathRoom of newPathRooms) {
    coordinates[pathRoom.id] = { x: pathRoom.x, y: pathRoom.y, z: pathRoom.z };
    exits[pathRoom.id] = {};
}

// Create Anduin River (major north-south river)
console.log('\n  Creating Anduin River...');

const anduinPath = [
    regions.gladden_fields,
    regions.lorien,
    { x: regions.lorien.x + 5, y: regions.lorien.y - 10 },
    regions.fangorn,
    { x: regions.fangorn.x + 5, y: regions.fangorn.y - 15 },
    { x: regions.gondor.x + 10, y: regions.gondor.y },
    regions.osgiliath,
    regions.pelargir
];

const riverRooms = [];
for (let i = 0; i < anduinPath.length - 1; i++) {
    const from = anduinPath[i];
    const to = anduinPath[i + 1];
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const steps = Math.ceil(distance / 3);
    
    for (let j = 0; j <= steps; j++) {
        const t = j / steps;
        const x = Math.round(from.x + dx * t);
        const y = Math.round(from.y + dy * t);
        
        if (!occupiedPositions.has(`${x},${y}`)) {
            const riverId = `river_anduin_${i}_${j}`;
            riverRooms.push({ id: riverId, x, y, z: 0 });
            occupiedPositions.add(`${x},${y}`);
            
            // Add riverbanks
            for (const offset of [-1, 1]) {
                const bankX = x + offset;
                if (!occupiedPositions.has(`${bankX},${y}`)) {
                    const bankId = `riverbank_anduin_${i}_${j}_${offset}`;
                    riverRooms.push({ id: bankId, x: bankX, y, z: 0 });
                    occupiedPositions.add(`${bankX},${y}`);
                }
            }
        }
    }
}

console.log(`  Created ${riverRooms.length} river/bank segments`);

// Add river rooms to coordinates
for (const riverRoom of riverRooms) {
    coordinates[riverRoom.id] = { x: riverRoom.x, y: riverRoom.y, z: riverRoom.z };
    exits[riverRoom.id] = {};
}

// Create adjacent exits for all rooms
console.log('\n\nCreating adjacent connections...');

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

let connectionCount = 0;
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (!exits[roomId]) exits[roomId] = {};
    
    for (const { dir, dx, dy } of directions) {
        const adjX = coord.x + dx;
        const adjY = coord.y + dy;
        const adjKey = `${adjX},${adjY},${coord.z || 0}`;
        const adjRoom = positionToRoom.get(adjKey);
        
        if (adjRoom && !exits[roomId][dir]) {
            exits[roomId][dir] = adjRoom;
            
            // Create reverse connection
            if (!exits[adjRoom]) exits[adjRoom] = {};
            if (!exits[adjRoom][opposites[dir]]) {
                exits[adjRoom][opposites[dir]] = roomId;
            }
            connectionCount++;
        }
    }
}

console.log(`  Created ${connectionCount} connections`);

// Save updated data
worldData.coordinates = coordinates;
worldData.exits = exits;
writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

console.log('\n' + '='.repeat(100));
console.log('REORGANIZATION COMPLETE');
console.log('='.repeat(100));
console.log(`\nTotal rooms: ${Object.keys(coordinates).length}`);

// Verify key positions
console.log('\nKey locations:');
const keyRooms = [
    'bag_end', 'mount_doom_summit', 'minas_tirith_gates', 'barad_dur_entrance',
    'rivendell_valley', 'moria_gates', 'lorien_entrance', 'edoras_gates'
];
for (const [roomId, coord] of Object.entries(coordinates)) {
    if (roomId.toLowerCase() === 'bag_end' || 
        roomId.toLowerCase().includes('mount_doom') ||
        roomId.toLowerCase().includes('minas_tirith') ||
        roomId.toLowerCase().includes('barad_dur')) {
        console.log(`  ${roomId}: (${coord.x}, ${coord.y}, ${coord.z || 0})`);
    }
}

console.log('\nGeography verification:');
console.log('  North (top of map):    Erebor, Grey Mountains, Forochel');
console.log('  West (left of map):    Shire, Grey Havens, Blue Mountains');
console.log('  Center:                Rivendell, Moria, Lorien');
console.log('  South (bottom of map): Gondor, Rohan, White Mountains');
console.log('  Southeast (bottom-right): MORDOR, MOUNT DOOM, BARAD-DÛR');
console.log('='.repeat(100));

