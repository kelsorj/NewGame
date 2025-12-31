// Reorganize world using layered terrain approach
// Layer 1: Terrain/world map (base layer defining terrain types)
// Layer 2+: Rooms placed on top of terrain, with vertical layers (Z-levels)

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
console.log('REORGANIZING WORLD WITH LAYERED TERRAIN APPROACH');
console.log('='.repeat(100));

// Read terrain map from terrain-map.txt file
// The user can edit this file as they build the terrain map
const terrainMapPath = join(__dirname, 'terrain-map.txt');
let userTerrainMap = '';
try {
    userTerrainMap = readFileSync(terrainMapPath, 'utf-8');
    console.log(`\nReading terrain map from: ${terrainMapPath}`);
} catch (err) {
    console.log(`\nWarning: Could not read ${terrainMapPath}, using embedded map`);
    // Fallback to embedded map

// Terrain symbols:
// ^ = mountain
// f = forest  
// h = hill
// | = river
// * = hobbit path
// L = lake/water
// ~ = sea/water
// & = forest (Mirkwood)
// : = Shire
// = = road
// p = plains
// R = region marker
// blank = plains/open

    userTerrainMap = `
       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                            |                                                                                                                                         ^^^^^^^^^^^^^^^^^^^^^^             ^^^                                                                                                        ^
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                             ||||                                                                                                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                          (Ered Mithrim)                           (Grey Mountains)        ^^^^^^^^^^^^^^
      ^^^^^^^^^^^                                                 |                                                                                                                                                           ^^^^^^^^^^^^^^^^^^^               (Mount Gundabad)                                                        ^^^^^^^^^^^^
                   ^^^^^^^^^                                      |                                             (Hills of Evendim)                                                                                                  ^^^^^^^^^^^^^^^^^^^^^^   ^                                                                ^^^^^^    ^^^^^^^^
                    ^^^^^^^^                                      |||                                                                                                                                                                 ^^^^^^^^^^^^^^^^^^^^^^^^^             ^^^^^                            ^^^^^^^^^^^^^^^^^^^^^^^^^^                         (Withered Heath)
LLLLLLLL            ^^^^^^^^^^^                                     ||                                hhhhhhhhhh                                                                                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLLLLLLL         ^^^^^^^^^                                       ||                            hhhhhhhhhhhhhhhhhhh                                                                                                                      ^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLLLLL         ^^^^^^^^^^^^^^^^                                 ||                        hhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                   ^^^^^^^^^^^^^^^^^^^       ^^^^   |            |   ^^^^^^^^                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLLLLL      fff  ^^^^^^^^^^^^^^^^^                             ||                      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^     ||||        |||   (Forrest River)  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LLLLL       fffff    ^^^^^^^^^^^^^^^^^^                         ||                        hhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                   (Mount Gram)                      ^^^^^^^^^^^^^^^^^^^^^^              ||     ||| |||||||||                                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
           ffffff     ^^^^^^^^^^^^^        ||||||||||           ||                          hhhhhhhhhhhhhhhhh                                                                                                                                ^^^^^^^^^^                         |||   |           ||                                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^
          ffffff                          ||||||||||||||||||||| ||                      hhhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                              ^^^^^^^^ ^^^^^^                ||||||            ||                                   
          fffff             ^^^^^^^^^^^^ ||                   |||                     hhhhhhhhhhhhhhhhhhhhhhhhhhh                                        (North Downs)                                                   ^^                            ^^^^^^^^^^                ||                  ||||       ffffffffff                                        (The Lonely Mountain)                
            ffffff    |||||||||||||||||||||                    ||                                hhhhhhhhhhhh            (ARTHEDAIN)                                                                                   ^^^^^^^^^^                 ^^^^^^^^^         ||||||||||||||                      ||||   fffffffffffffffffffffffffffffff            
             ||||||||||      ^^^^^                              ||   (River Lune)                 hhhhhhhhhh                                                                                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^              ||                fffff   |||  fffffff    (ETTENMOORS) ffffffff                                                                                               hhhhhh  
        |||||||                     ^^^^                         ||                             hhhhhhhhhhhh                                                                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^              ||                fffffff   ||   fffffffffffffffffffffffffffffff                                                                                           hhhhhhhhhhhhh
       ||               ^^^^^^^^^                               ||||                         hhhhhhhhhhhhhhh                                      hhhhhhhhhhh                                                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^             ||             ffffffffffff ||||  ffffffffffffffffffffffffffff                   ^                                                                           hhhhhhhhhhh                                                                              
       ||                  ^^^^^^^^^                              ||                       hhhhhhhhhhhhhhhhh                                     hhhhhhhhhhhhhhhhhhhh                                         (ETTENMOORS)            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^            ||           ffffffffffffff   |||   ffffffffffffffffffffffffffffff             ^^^                                                   (IRON HILLS)                  hhhhhhhhhhhhhhhhhhh
  |||||||                 ^^^^^^^^^^^                              |||                      hhhhhhhhhhhh                                          hhhhhhhhhhhhhhhhhh                                                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^            ||          ffffffffffffffffff ||||   ffffffffffffffffffffffffff             ^^^^^^                                                                                   hhhhhhhhhhhhhhhhhhhhh   
||||       ffffffffff   ^^^^^^^^^^^^                                ||                 hhhhhhhh                                              hhhhhhhhhhhhhhhhhhhhhh              (ARNOR)                                     hhhhh                           ^^^^^^^^              ||           ffffffffffffffffffff  ||   fffffffffffffffffffffffff             *^^^^                                       hhhhhh                                         hhhhhhhhhhhhhhhhhhhhh
||         fffffffff    ^^^^^^^^^^^^^^^^^                           ||               hhhhhhhhhhhhhhhh     (Lake Evendim)                  hhhhhhhhhhhhhhhhhhhhhhhh                                                              hhhhh                      || ^^^^^    ||           ||          ffffffffffffffffffffff ||||||||||  ffffffffffffffff               *** (Dale)                                   hhhhhhh                                    hhhhhhhhhhhhhhhhhhhhhhh
|         ffffffffffff   ^^^^^^^^^^^^^^^^                           ||                 hhhhhhhhhhhhh     L                             hhhhhhhhhhhhhhhhhhhhhhhh                                                                    hhhhh        ||||||||||||  ^^^^^^^   |||||       ||           fffffffffffffffffffffffffffff  ||||||||||||  (Elven King's Halls   *                                                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh    
|      ffffffffffffff     ^^^^^^^^^^^^^^                            ||          ||||   hhhhhhhh         LL                             hhhhhhhhhhhhhhhhhhhhhh                                                                         ||||||||||||           ^^^^^^^^^^     |||||    ||      ***************  ffffffffffffffffffffffffffff |||||********************                                                     hhhhhh |    hhhhhhhhhhhhhhhhh
        ffffffffffff       ^^^^^^^^^^^^^                            ||    |||||||      hhhhhhhh      LLLLLL                          hhhhhhhhhhhhhhhhhhhhhhh                                                                         |||                ^^^^^^^^^^^^^^^   |          ||     **        fffff*********  fffffffffffffffffff   || **  fffffff         LL (Esgaroth upon the Long Lake)                           |||                 hhh
              ffffff    ^^^^^^^^^^^^^^^^^^^^                        ||  |||           hhhhhhhh     LLLLLLL                             hhhhhhhhhhhhhhhhhh                                                                            ||                     ^^^^^^^^^^^^  |||||||||||||     *        fffffffffffff *********  ffffffffff |||| ** ffffffffff        LL                                                       |||
              ffffff      ^^^^^^^^^^^^^^^^                          || ||         hhhhhhhhhhh     LLLLLLL ||||||||||||||||||            p  (Fornost)                                                                               |||                     ^^^^^^^^^^^^^^             ||    *       fffffffffffffffffffffff******************** fffffffffff        L                                                         |   
                ffff       ^^^^^^^^^^^^^^^                          ||||          hhhhhhhhhh      LLLLL                    |            pp                                                                                       |||   (COLDFELLS)       ^^^^^^^^^^^^^^^^^^^           |     *     ffffffffffffffffffffffffffffffff  ||| fffffffffffffffffff      ||                                                         |||||
               fffff  ^^^^^^^^^^^^^^^^^^^                         |||             hhhhhhhhhh          (Annuminas)          ||            p                           (Weather Hills)                                           |||                       ^^^^^^^^^^^^^^^^             |||    *     ffffffffffffffffffffffffffffffff  ||  fffffffffffffffffffff    ||                                                             ||||||||||
              ffffff  ^^^^^^^^^^^^^^^^^^                         |||             hhhhhhhhhhhhhhhhhhhhhhhhhhhh              ||            pp                       hhhhhh                                                 |||||||                         ^^^^^^^^^^^^^^^^^^            ||    **        fffffffffffffffffffffffffffff  |||   ffff        ffffff    ||                                                                      ||||
            fffffff   ^^^^^^^^^^^^^^^^^                         ||              hhhhhhhhhhhhhhhhhhhhhh                    ||              p                  hhhhhhhhhhhh                                               ||    (RHUDAUR)                 ^^^^^^^^^^^^^  *                ||    **       ffffffffffffffffffffffffffffffff |||      ^^^^^^^   ffffff  | fff                                                                     ||
           ffffffff   ^^^^^^^^^^^^^^^                          ||                   hhhhhh                             ||||               pp                  hhhhhhhhhhh                                              ||                           ^^^^^^^^^^^^^^^^^ * ****            ||   **          ffffffffffffffff    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ffff  |  ffff                                                                    ||
           ffffffff    ^^^^^^^^^^^^^^                       |||||                                                    |||                   pp                  hhhhhhhhhhh                                          ||||                            ^^^^^^^^^^^^^^^^ **    *******************                fffffffffff   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  fffff   |  ffff                                                                   ||
          fffffffff     ^^^^^^^^^^^^                     |||||                                                      ||                      p                    hhhhhhhhhh                                        ||                                ^^^^^^^^^^^^^^ **                   |||                 fffffffffffffffff       ^^          ^^  fffffffffffff  ||  fff                                                                   ||
           ffffffff   ^^^^^^^^^^^^                     ||||                                                        ||                       pp                    hhhhhhhhh                                        ||          ffff                  ^^^^^^^^^ ******  ^^^^               ||               fffffffffffffffffffffffffffffffffffffffffffffffffffffff   |||  ff                                                                 ||
          fffffffff  ^^^^^^^^^^^^^^                   ||                                                          ||                         pp                   hhhhhhhhhhh                                     || fffffffffffffffff                ^^^^^^^ **  ^^^^^^^                  ||               fffffffffffffffffff                                        |   f                                                                ||
           ffffffff     ^^^^^^^^^^^^                 |||                                                           |                          p                     hhhhhhhhhhh                                 |||  ffffffffffffffffffff            ^^^^^^  **  ^^^^^^                     ||               RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR||                                                                 |||
            fffffffffff   ^^^^^^^^^^                 |||                                                 
`;
}

// Parse terrain map
function parseTerrainMap(mapString) {
    // Keep all lines, including empty ones, to preserve full map size
    const lines = mapString.split('\n').filter(l => l !== ''); // Only remove completely empty lines
    const terrain = [];
    const labels = new Map();
    
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
                    // Fill label area with plains
                    for (let i = x; i < labelEnd; i++) {
                        terrain[y][i] = 'plains';
                    }
                    x = labelEnd;
                    continue;
                }
            }
            
            // Map characters to terrain types
            if (char === '^') terrain[y][x] = 'mountain';
            else if (char === 'f' || char === '&') terrain[y][x] = 'forest';
            else if (char === 'h') terrain[y][x] = 'hill';
            else if (char === '|') terrain[y][x] = 'river';
            else if (char === '*') terrain[y][x] = 'hobbit_path';
            else if (char === 'L' || char === '~') terrain[y][x] = 'lake';
            else if (char === '=' || char === '/' || char === '\\') terrain[y][x] = 'road';
            else if (char === ':') terrain[y][x] = 'shire';
            else if (char === 'p') terrain[y][x] = 'plains';
            else if (char === 'R') terrain[y][x] = 'region';
            else terrain[y][x] = 'plains';
        }
    }
    
    return { terrain, labels, width: Math.max(...lines.map(l => l.length)), height: lines.length };
}

const { terrain, labels, width, height } = parseTerrainMap(userTerrainMap);

console.log(`\nParsed terrain map: ${width}x${height}`);
console.log(`Found ${labels.size} labeled regions`);

// Convert ASCII coordinates to game coordinates
// Scale appropriately for the map dimensions
const SCALE_X = 1.0;
const SCALE_Y = 1.0;
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
        id.includes('lorien') || id.includes('wood') || id.includes('tree') ||
        id.includes('elvenking')) {
        return 'forest';
    }
    
    // Hills
    if (id.includes('hill') || id.includes('down') || id.includes('evendim') ||
        id.includes('weathertop') || id.includes('amon') || id.includes('coldfell')) {
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
        id.includes('bay') || id.includes('gulf') || id.includes('havens') ||
        id.includes('esgaroth') || id.includes('long_lake')) {
        return 'lake';
    }
    
    // Roads
    if (id.includes('road') || (id.includes('path') && !id.includes('hobbit'))) {
        return 'road';
    }
    
    // Shire
    if (id.includes('shire') || id.includes('hobbit') || id.includes('bag_end')) {
        return 'shire';
    }
    
    // Hobbit path locations
    if (id === 'bag_end' || id.includes('bree') || id.includes('rivendell') ||
        id.includes('moria') || id.includes('lorien') || id.includes('rohan') ||
        id.includes('gondor') || id.includes('minas_tirith') || id.includes('mordor') ||
        id.includes('mount_doom') || id.includes('dale') || id.includes('fornost') ||
        id.includes('annuminas')) {
        return 'hobbit_path';
    }
    
    // Default to plains
    return 'plains';
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

// Place rooms on terrain
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

// Place hobbit path rooms
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
    if (terrainType === 'hobbit_path') continue;
    
    console.log(`\n2. Placing ${terrainType} rooms...`);
    const candidates = [];
    
    // Find all positions with this terrain type
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (getTerrain(x, y) === terrainType) {
                candidates.push(asciiToGame(x, y));
            }
        }
    }
    
    if (candidates.length === 0) {
        console.log(`   No ${terrainType} terrain found, placing on plains`);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (getTerrain(x, y) === 'plains') {
                    candidates.push(asciiToGame(x, y));
                }
            }
        }
    }
    
    // Place rooms using spiral pattern
    let candidateIndex = 0;
    let placedCount = 0;
    
    for (const roomId of rooms) {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 5000;
        
        while (!placed && attempts < maxAttempts) {
            const candidate = candidates[candidateIndex % candidates.length];
            const radius = Math.floor(attempts / 16);
            const angle = (attempts % 16) * (Math.PI / 8);
            
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
                candidateIndex++;
            }
        }
        
        if (!placed) {
            // Fallback: place anywhere
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

// Build position lookup
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

// Rebuild all adjacent connections
console.log('\n3. Rebuilding adjacent connections...');

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
console.log('LAYERED TERRAIN REORGANIZATION COMPLETE');
console.log('='.repeat(100));
console.log(`\nTotal rooms: ${Object.keys(coordinates).length}`);
console.log(`Terrain map: ${width}x${height}`);
console.log(`\nKey locations placed:`);
for (const { roomId, pos } of Array.from(placedRooms.entries()).slice(0, 10).map(([id, p]) => ({ roomId: id, pos: p }))) {
    if (roomsByTerrain.hobbit_path.includes(roomId)) {
        console.log(`  ${roomId}: (${pos.x}, ${pos.y})`);
    }
}
console.log('='.repeat(100));
console.log('\nNOTE: This script uses the terrain map you provided (top 1/4).');
console.log('As you continue building the terrain map, update the userTerrainMap variable');
console.log('or save it to a file and modify the script to read from that file.');
console.log('='.repeat(100));

