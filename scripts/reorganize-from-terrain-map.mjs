// Reorganize the world based on terrain map
// Symbols: ^=mountain, f=forest, h=hill, |=river, *=hobbit path, blank=plains

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
console.log('REORGANIZING WORLD BASED ON TERRAIN MAP');
console.log('='.repeat(100));

// Read terrain map from closer.txt (in parent directory)
const closerFilePath = join(__dirname, '..', 'closer.txt');
let closerFileContent = readFileSync(closerFilePath, 'utf-8');

// Extract the map data from the Python-style triple-quoted string
const mapDataMatch = closerFileContent.match(/map_data = """([\s\S]*?)"""/);
let terrainMap = '';
if (mapDataMatch) {
    terrainMap = mapDataMatch[1];
} else {
    // Fallback: extract lines between map_data = """ and """
    const lines = closerFileContent.split('\n');
    let inMap = false;
    for (const line of lines) {
        if (line.includes('map_data = """')) {
            inMap = true;
            continue;
        }
        if (inMap && line.includes('"""')) {
            break;
        }
        if (inMap) {
            terrainMap += line + '\n';
        }
    }
}

// OLD HARDCODED MAP - REPLACED WITH FILE READING ABOVE
const oldTerrainMap = `
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                      |                                                                                                                                                                                                                                                                                                                      ^^^^^^^^^^^^^^^^^^^^^^             ^^^                                                                                                                                                                                                                                       ^
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                                          | |                                                                                                                                                                                                                                                                                                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                                       (Ered Mithrim)                                                                                (Grey Mountains)        ^^^^^^^^^^^^^^
                                             ^^^^^^^^^^^                                                                             |                                                                                                                                                                                                                                                                                                                                                                  ^^^^^^^^^^^^^^^^^^^               (Mount Gundabad)                                                                                                                                       ^^^^^^^^^^^^
                                                 ^^^^^^^^^                                                                              | |                                                                                             (Hills of Evendim)                                                                                                                                                                                                                                     ^^^^^^^^^^^^^^^^^^^^^^                                                                                                                 ^                                ^^^^^^    ^^^^^^^^
                                                   ^^^^^^^^                                                                                 ||                                                                                                                                                                                                                                                                                                                                                                     ^^^^^^^^^^^^^^^^^^^^^^^^^                             ^^^^^^                                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^                                          (Withered Heath)
LLLLLLLL                               ^^^^^^^^^^^                                                                               ||                                                                         hhhhhhhhhh                                                                                                                                                                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLLLLLLL                               ^^^^^^^^^                                                                             ||                                                               hhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                                                                          ^^^^^^^^^^^^^^^^^^^^                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLLLLL                               ^^^^^^^^^^^^^^^^                                                                    ||                                                hhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                                                                   ^^^^^^^^^^^^^^^^^^^                         ^^^^   ||||                  |                                                              ^^^^^^^^                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLL                 fffffffff          ^^^^^^^^^^^^^^^^^^^											  ||                                              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^                      ^        ||||           ||| ||||||||||||||  (Forrest River)                                                                                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       fffffffffffff           ^^^^^^^^^^^^^^^^^^             |||||||||||||||||||||||||||||||||||||||||                                                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                          (Mount Gram)                      ^^^^^^^^^^^^^^^^^^^^^^                                    ||   ||||||                   ||||||||||
                        ffffffffffff                ^^^^^^^^^^^^^^^^^||||||||||                                        |||                                                          hhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                                 ^                                                                ^^^^^^^^^^      |||||                       ||                                       ||||||||             ffffffffffffff      ffff           ff              ff
                        ffffff    ||||||||||||||||||||||||||||||||||||||||||                                                    ||                                                                             hhhhhhhhhhhh                                                                                                                                                                                                                              ^^^^^^^^                                              ^^^^^^^^^^^^^^^^              ||||||||             ||                                          ff    |||||      ffffffffffffffffffffffffffff     fffffff       ffffffffffff
                        ||||||||||| fffff                ^^^^^^^^^^^^                                                         ||                                                                          hhhhhhhhhhh                                                                                             (North Downs)                                                                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                  |||||||||||||                                   ffffffffff      |||     ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff                                              (The Lonely Mountain)                                                                                                                            hhhhh
                ||||||||                                ^^^^^^^                                                                      ||                                                                   hhhhhhhhhhhh                (ARTHEDAIN)                                                 hhhhhhhhhh                                                                                                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                           ||                                   ffffffffffffffff     |||         ffffffffffffffffffffffffffffffffffffffffffffffffffffffff                                   ^^                                                                                                                                                              hhhhhhhhhh
               ||                                            ^^^^^                                                                       ||   (River Lune)                                     hhhhhhhhhh                                                                                             hhhhhhhhhhhhhhh                                                                                         (ETTENMOORS)                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                         |||||                           fffffffffffffffffffffff   ||||||||||||   ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff                                   ^^^^^                                                                                                                                                                            hhhhhhhhhhhh
              ||                                           ^^^^^^^^^                                                                    ||||                                              hhhhhhhhhhhhhhh                                                                                          hhhhhhhhhhhhhh                                                                                                                                                                                          ^^^^^^^^^^^^^                                   ||                              ffffffffffffffffffffffffffff       ||         fffffffffffffffffffffffffffffffffffff                                  ^^^^^^^^^                                                                                                                                            (IRON HILLS)                 hhhhhhhhhhhhhh
  ||||||||||||                                              ^^^^^^^^^^^                                                                 |||                                      hhhhhhhhhhhh                                                                                                  hhhhhhhhhhhhhhhhhh                                                                                                                                                                                              ||||||||||||||||||||||                       |||                          ffffffffffffffffffffffffffffffffff    ||||||||             ffffffffffffffffffffffffffffffffff                               ****                                                                                             hhhh                                                                                             hhhhhhhhhhhhhhhh
||||                                            ^^^^^^^^^^^^^^^^^^^^^^                                                            ||
`;

// Parse terrain map
function parseTerrainMap(mapString) {
    const lines = mapString.trim().split('\n').filter(l => l.trim());
    const terrain = [];
    const labels = new Map(); // Store labeled regions
    
    for (let y = 0; y < lines.length; y++) {
        const line = lines[y];
        terrain[y] = [];
        
        for (let x = 0; x < line.length; x++) {
            const char = line[x];
            
            // Check for labels in parentheses
            if (char === '(') {
                let labelEnd = line.indexOf(')', x);
                if (labelEnd > 0) {
                    const label = line.substring(x + 1, labelEnd);
                    labels.set(`${x},${y}`, label);
                    // Fill the label area with the terrain type
                    for (let i = x; i < labelEnd; i++) {
                        terrain[y][i] = ' '; // Label area is plains
                    }
                    x = labelEnd;
                    continue;
                }
            }
            
            // Map characters to terrain types
            if (char === '^') terrain[y][x] = 'mountain';
            else if (char === 'f' || char === '&') terrain[y][x] = 'forest'; // f or & = forest
            else if (char === 'h') terrain[y][x] = 'hill';
            else if (char === '|') terrain[y][x] = 'river';
            else if (char === '*') terrain[y][x] = 'hobbit_path';
            else if (char === 'L' || char === '~') terrain[y][x] = 'lake'; // L or ~ = water/lake
            else if (char === '=' || char === '/' || char === '\\') terrain[y][x] = 'road'; // Roads/paths
            else if (char === ':') terrain[y][x] = 'shire'; // Shire area
            else terrain[y][x] = 'plains';
        }
    }
    
    return { terrain, labels, width: Math.max(...lines.map(l => l.length)), height: lines.length };
}

const { terrain, labels, width, height } = parseTerrainMap(terrainMap);

console.log(`\nParsed terrain map: ${width}x${height}`);
console.log(`Found ${labels.size} labeled regions`);

// Convert ASCII coordinates to game coordinates
// We'll center the map and scale it appropriately
// The map is 172 columns x 101 rows, so we want a more balanced aspect ratio
// Scale to make it roughly 2:1 (width:height) in game coordinates
const SCALE_X = 1.0;  // Standard scale for X
const SCALE_Y = 1.7;  // Larger scale for Y to make it taller (compensate for wide map)
const OFFSET_X = -width / 2;
const OFFSET_Y = height / 2; // Invert Y: top of ASCII = positive Y (north)

function asciiToGame(x, y) {
    return {
        x: Math.round((x + OFFSET_X) * SCALE_X),
        y: Math.round((OFFSET_Y - y) * SCALE_Y)
    };
}

// Get terrain type at a position
function getTerrain(x, y) {
    if (y < 0 || y >= terrain.length || x < 0 || x >= terrain[y].length) {
        return 'plains';
    }
    return terrain[y][x] || 'plains';
}

// Map room IDs to terrain-appropriate locations
function getRoomTerrainType(roomId) {
    const id = roomId.toLowerCase();
    
    // Mountains
    if (id.includes('mountain') || id.includes('peak') || id.includes('summit') ||
        id.includes('misty') || id.includes('grey_mountain') || id.includes('ered') ||
        id.includes('gundabad') || id.includes('gram')) {
        return 'mountain';
    }
    
    // Forests
    if (id.includes('forest') || id.includes('mirkwood') || id.includes('fangorn') ||
        id.includes('lorien') || id.includes('wood') || id.includes('tree')) {
        return 'forest';
    }
    
    // Hills
    if (id.includes('hill') || id.includes('down') || id.includes('evendim') ||
        id.includes('weathertop') || id.includes('amon')) {
        return 'hill';
    }
    
    // Rivers
    if (id.includes('river') || id.includes('ford') || id.includes('stream') || 
        id.includes('bruinen') || id.includes('anduin') || id.includes('brandywine') || 
        id.includes('lune') || id.includes('running')) {
        return 'river';
    }
    
    // Lakes/Water
    if (id.includes('lake') || id.includes('water') || id.includes('sea') || 
        id.includes('bay') || id.includes('gulf') || id.includes('havens')) {
        return 'lake';
    }
    
    // Roads
    if (id.includes('road') || id.includes('path') && !id.includes('hobbit')) {
        return 'road';
    }
    
    // Shire
    if (id.includes('shire') || id.includes('hobbit') || id.includes('bag_end')) {
        return 'shire';
    }
    
    // Hobbit path locations (key story locations)
    if (id === 'bag_end' || id.includes('shire') || id.includes('hobbit') ||
        id.includes('bree') || id.includes('rivendell') || id.includes('moria') ||
        id.includes('lorien') || id.includes('rohan') || id.includes('gondor') ||
        id.includes('minas_tirith') || id.includes('mordor') || id.includes('mount_doom')) {
        return 'hobbit_path';
    }
    
    // Default to plains
    return 'plains';
}

// Find suitable terrain locations for a room
function findTerrainLocation(roomId, terrainType) {
    const candidates = [];
    
    // Search the terrain map for matching terrain
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const terrainAtPos = getTerrain(x, y);
            
            // Match terrain type
            if (terrainAtPos === terrainType) {
                const gameCoord = asciiToGame(x, y);
                candidates.push({ x: gameCoord.x, y: gameCoord.y, asciiX: x, asciiY: y });
            }
        }
    }
    
    // If no exact match, try related terrain
    if (candidates.length === 0) {
        const fallbackTypes = {
            'mountain': ['hill', 'plains'],
            'forest': ['hill', 'plains'],
            'hill': ['plains'],
            'river': ['plains'],
            'hobbit_path': ['plains'],
            'plains': []
        };
        
        const fallbacks = fallbackTypes[terrainType] || [];
        for (const fallback of fallbacks) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    if (getTerrain(x, y) === fallback) {
                        const gameCoord = asciiToGame(x, y);
                        candidates.push({ x: gameCoord.x, y: gameCoord.y, asciiX: x, asciiY: y });
                    }
                }
            }
            if (candidates.length > 0) break;
        }
    }
    
    return candidates;
}

// Group rooms by terrain type
const roomsByTerrain = {
    mountain: [],
    forest: [],
    hill: [],
    river: [],
    hobbit_path: [],
    road: [],
    shire: [],
    lake: [],
    plains: []
};

for (const roomId of Object.keys(coordinates)) {
    const terrainType = getRoomTerrainType(roomId);
    roomsByTerrain[terrainType].push(roomId);
}

console.log('\nRooms by terrain type:');
for (const [type, rooms] of Object.entries(roomsByTerrain)) {
    console.log(`  ${type.padEnd(15)}: ${rooms.length} rooms`);
}

// Place rooms on appropriate terrain
console.log('\nPlacing rooms on terrain...');

const occupiedPositions = new Set();
const placedRooms = new Map();

// First, place hobbit path rooms (key locations)
console.log('\n1. Placing hobbit path locations...');
const hobbitPathPositions = [];
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (getTerrain(x, y) === 'hobbit_path') {
            const gameCoord = asciiToGame(x, y);
            hobbitPathPositions.push(gameCoord);
        }
    }
}

// Place hobbit path rooms along the path
for (let i = 0; i < Math.min(roomsByTerrain.hobbit_path.length, hobbitPathPositions.length); i++) {
    const roomId = roomsByTerrain.hobbit_path[i];
    const pos = hobbitPathPositions[i];
    const key = `${pos.x},${pos.y}`;
    
    if (!occupiedPositions.has(key)) {
        const oldCoord = coordinates[roomId];
        coordinates[roomId] = {
            x: pos.x,
            y: pos.y,
            z: oldCoord?.z || 0
        };
        occupiedPositions.add(key);
        placedRooms.set(roomId, pos);
    }
}

// Place other rooms by terrain type
for (const [terrainType, rooms] of Object.entries(roomsByTerrain)) {
    if (terrainType === 'hobbit_path') continue; // Already placed
    
    console.log(`\n2. Placing ${terrainType} rooms...`);
    const candidates = findTerrainLocation('', terrainType);
    
    if (candidates.length === 0) {
        console.log(`   No ${terrainType} terrain found, placing on plains`);
        // Fallback to plains
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (getTerrain(x, y) === 'plains') {
                    candidates.push(asciiToGame(x, y));
                }
            }
        }
    }
    
    // Place rooms using spiral pattern around terrain
    let candidateIndex = 0;
    let placedCount = 0;
    
    for (const roomId of rooms) {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 5000; // Increased
        
        while (!placed && attempts < maxAttempts) {
            const candidate = candidates[candidateIndex % candidates.length];
            const radius = Math.floor(attempts / 16); // Slower radius growth
            const angle = (attempts % 16) * (Math.PI / 8); // More angles
            
            const x = Math.round(candidate.x + Math.cos(angle) * radius);
            const y = Math.round(candidate.y + Math.sin(angle) * radius);
            const key = `${x},${y}`;
            
            if (!occupiedPositions.has(key)) {
                const oldCoord = coordinates[roomId];
                coordinates[roomId] = {
                    x,
                    y,
                    z: oldCoord?.z || 0
                };
                occupiedPositions.add(key);
                placedRooms.set(roomId, { x, y });
                placed = true;
                placedCount++;
            }
            
            attempts++;
            if (attempts % 16 === 0) {
                candidateIndex++; // Try different candidate
            }
        }
        
        if (!placed) {
            // Final fallback: place anywhere in the map area
            for (let fallbackY = -100; fallbackY <= 100 && !placed; fallbackY += 1) {
                for (let fallbackX = -200; fallbackX <= 200 && !placed; fallbackX += 1) {
                    const key = `${fallbackX},${fallbackY}`;
                    if (!occupiedPositions.has(key)) {
                        const oldCoord = coordinates[roomId];
                        coordinates[roomId] = {
                            x: fallbackX,
                            y: fallbackY,
                            z: oldCoord?.z || 0
                        };
                        occupiedPositions.add(key);
                        placedRooms.set(roomId, { x: fallbackX, y: fallbackY });
                        placed = true;
                        placedCount++;
                    }
                }
            }
        }
    }
    
    console.log(`   Placed ${placedCount} / ${rooms.length} ${terrainType} rooms`);
}

// Build position lookup (needed for path creation)
const positionToRoom = new Map();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z || 0}`;
    positionToRoom.set(key, roomId);
}

const opposites = {
    north: 'south', south: 'north',
    east: 'west', west: 'east',
    northeast: 'southwest', southwest: 'northeast',
    northwest: 'southeast', southeast: 'northwest',
};

// Create paths following the hobbit path (*)
console.log('\n3. Creating hobbit path connections...');

// Find all hobbit path positions and connect them
const hobbitPathRooms = [];
for (const [roomId, pos] of placedRooms.entries()) {
    if (roomsByTerrain.hobbit_path.includes(roomId)) {
        hobbitPathRooms.push({ roomId, pos });
    }
}

// Sort by approximate journey order (west to east, north to south)
hobbitPathRooms.sort((a, b) => {
    // Primary: X (west to east)
    if (Math.abs(a.pos.x - b.pos.x) > 10) {
        return a.pos.x - b.pos.x;
    }
    // Secondary: Y (north to south, but Y is inverted)
    return b.pos.y - a.pos.y;
});

// Connect hobbit path rooms
for (let i = 0; i < hobbitPathRooms.length - 1; i++) {
    const from = hobbitPathRooms[i];
    const to = hobbitPathRooms[i + 1];
    
    // Create path between them
    const dx = to.pos.x - from.pos.x;
    const dy = to.pos.y - from.pos.y;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    let prevRoom = from.roomId;
    
    for (let s = 1; s < steps; s++) {
        const t = s / steps;
        const x = Math.round(from.pos.x + dx * t);
        const y = Math.round(from.pos.y + dy * t);
        const key = `${x},${y}`;
        
        let currentRoom = positionToRoom.get(`${x},${y},0`);
        
        if (!currentRoom && !occupiedPositions.has(key)) {
            currentRoom = `hobbit_path_${i}_${s}`;
            coordinates[currentRoom] = { x, y, z: 0 };
            exits[currentRoom] = {};
            occupiedPositions.add(key);
        }
        
        if (currentRoom && prevRoom) {
            if (!exits[prevRoom]) exits[prevRoom] = {};
            if (!exits[currentRoom]) exits[currentRoom] = {};
            
            // Determine direction
            const ddx = Math.sign(to.pos.x - from.pos.x);
            const ddy = Math.sign(to.pos.y - from.pos.y);
            
            const dirMap = {
                '0,1': 'north', '0,-1': 'south',
                '1,0': 'east', '-1,0': 'west',
                '1,1': 'northeast', '-1,1': 'northwest',
                '1,-1': 'southeast', '-1,-1': 'southwest'
            };
            
            const dir = dirMap[`${ddx},${ddy}`] || 'east';
            const oppDir = opposites[dir] || 'west';
            
            exits[prevRoom][dir] = currentRoom;
            exits[currentRoom][oppDir] = prevRoom;
        }
        
        prevRoom = currentRoom;
    }
    
    // Connect final segment
    if (prevRoom && to.roomId) {
        if (!exits[prevRoom]) exits[prevRoom] = {};
        if (!exits[to.roomId]) exits[to.roomId] = {};
        
        const ddx = Math.sign(to.pos.x - from.pos.x);
        const ddy = Math.sign(to.pos.y - from.pos.y);
        const dirMap = {
            '0,1': 'north', '0,-1': 'south',
            '1,0': 'east', '-1,0': 'west',
            '1,1': 'northeast', '-1,1': 'northwest',
            '1,-1': 'southeast', '-1,-1': 'southwest'
        };
        const dir = dirMap[`${ddx},${ddy}`] || 'east';
        const oppDir = opposites[dir] || 'west';
        
        exits[prevRoom][dir] = to.roomId;
        exits[to.roomId][oppDir] = prevRoom;
    }
}

// Rebuild all adjacent connections
console.log('\n4. Rebuilding adjacent connections...');

// Update position lookup with all current rooms
positionToRoom.clear();
for (const [roomId, coord] of Object.entries(coordinates)) {
    const key = `${coord.x},${coord.y},${coord.z || 0}`;
    positionToRoom.set(key, roomId);
}

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

console.log(`   Created ${connectionCount} adjacent connections`);

// Save
worldData.coordinates = coordinates;
worldData.exits = exits;
writeFileSync(worldDataPath, JSON.stringify(worldData, null, 2), 'utf-8');

console.log('\n' + '='.repeat(100));
console.log('TERRAIN-BASED REORGANIZATION COMPLETE');
console.log('='.repeat(100));
console.log(`\nTotal rooms: ${Object.keys(coordinates).length}`);
console.log(`Hobbit path rooms: ${hobbitPathRooms.length}`);
console.log(`\nKey locations placed:`);
for (const { roomId, pos } of hobbitPathRooms.slice(0, 10)) {
    console.log(`  ${roomId}: (${pos.x}, ${pos.y})`);
}
console.log('='.repeat(100));

