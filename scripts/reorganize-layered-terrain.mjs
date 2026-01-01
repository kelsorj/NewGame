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
    const labels = new Map(); // Map of "x,y" -> label name
    const regionLabels = new Map(); // Map of region name -> array of {x, y} coordinates
    
    for (let y = 0; y < lines.length; y++) {
        const line = lines[y];
        terrain[y] = [];
        
        let x = 0;
        while (x < line.length) {
            const char = line[x];
            
            // Check for labels in parentheses
            if (char === '(') {
                let labelEnd = line.indexOf(')', x);
                if (labelEnd > 0) {
                    const label = line.substring(x + 1, labelEnd);
                    const labelKey = `${x},${y}`;
                    labels.set(labelKey, label);
                    
                    // Store ALL labels (both regions and locations) with their exact coordinates
                    // Normalize label name (remove spaces, convert to lowercase)
                    const labelName = label.replace(/\s+/g, '_').toLowerCase();
                    if (!regionLabels.has(labelName)) {
                        regionLabels.set(labelName, []);
                    }
                    // Store the starting X coordinate of the label
                    regionLabels.get(labelName).push({ x, y });
                    
                    // Fill label area with plains
                    for (let i = x; i <= labelEnd; i++) {
                        if (i < line.length) {
                            terrain[y][i] = 'plains';
                        }
                    }
                    x = labelEnd + 1;
                    continue;
                }
            }
            
            // Map characters to terrain types (corrected per user definitions)
            if (char === '^') terrain[y][x] = 'mountain';
            else if (char === 'M') terrain[y][x] = 'mount_doom';  // Mount Doom
            else if (char === 'f' || char === '&') terrain[y][x] = 'forest';
            else if (char === 'h') terrain[y][x] = 'hill';
            else if (char === '|') terrain[y][x] = 'river';
            else if (char === '*') terrain[y][x] = 'hobbit_route';  // Route they took in the hobbit
            else if (char === 'p') terrain[y][x] = 'path';  // Path
            else if (char === 'R') terrain[y][x] = 'road';  // Road
            else if (char === 'G') terrain[y][x] = 'gulf';  // Gulf of water
            else if (char === 'm') terrain[y][x] = 'marsh';  // Marshes
            else if (char === 'C') terrain[y][x] = 'coast';  // Coast
            else if (char === 'O') terrain[y][x] = 'ocean';  // Ocean (deep)
            else if (char === 'S') terrain[y][x] = 'sea';  // Sea (not as deep as ocean)
            else if (char === 'L' || char === '~') terrain[y][x] = 'lake';  // Lake/water
            else if (char === '=' || char === '/' || char === '\\') terrain[y][x] = 'road';  // Road markers
            else if (char === ':') terrain[y][x] = 'shire';  // Shire area
            else terrain[y][x] = 'plains';
            
            x++;
        }
    }
    
    return { terrain, labels, regionLabels, width: Math.max(...lines.map(l => l.length)), height: lines.length };
}

const { terrain, labels, regionLabels, width, height } = parseTerrainMap(userTerrainMap);

console.log(`\nParsed terrain map: ${width}x${height}`);
console.log(`Found ${labels.size} labeled locations`);
console.log(`Found ${regionLabels.size} region labels:`, Array.from(regionLabels.keys()).join(', '));

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

// Map room IDs to region names based on region labels
function getRoomRegion(roomId) {
    const id = roomId.toLowerCase();
    
    // Check against all region labels
    for (const [regionName, coords] of regionLabels.entries()) {
        // Normalize region name for matching (remove underscores, spaces)
        const normalizedRegion = regionName.replace(/_/g, '').replace(/\s+/g, '');
        
        // Check if room ID contains the region name
        if (id.includes(normalizedRegion) || id.includes(regionName)) {
            return regionName;
        }
        
        // Also check common variations
        const regionVariations = {
            'arthedain': ['arthedain', 'arth', 'north_kingdom'],
            'ettenmoors': ['etten', 'moors', 'trollshaws'],
            'iron_hills': ['iron', 'ironhills'],
            'arnor': ['arnor', 'north_kingdom'],
            'rhudaur': ['rhudaur', 'rhudaur'],
            'rhun': ['rhun', 'easterlings'],
            'rhovanion': ['rhovanion', 'wilderland'],
            'cardolan': ['cardolan', 'south_kingdom'],
            'east_bight': ['east_bight', 'eastbight'],
            'harlinon': ['harlinon', 'harlindon'],
            'shire': ['shire', 'hobbit', 'bag_end'],
            'mirkwood': ['mirkwood', 'greenwood'],
            'gondor': ['gondor', 'minas_tirith', 'osgiliath'],
            'rohan': ['rohan', 'edoras', 'helms_deep'],
            'mordor': ['mordor', 'barad_dur', 'mount_doom']
        };
        
        if (regionVariations[regionName]) {
            for (const variation of regionVariations[regionName]) {
                if (id.includes(variation)) {
                    return regionName;
                }
            }
        }
    }
    
    return null; // No region match
}

// Map room IDs to terrain-appropriate locations
function getRoomTerrainType(roomId) {
    const id = roomId.toLowerCase();
    
    // Mount Doom (check before mountains)
    if (id.includes('mount_doom') || id.includes('sammath') || id.includes('doom_summit') ||
        id.includes('doom_approach') || id.includes('doom_naur') || 
        (id.includes('doom') && !id.includes('doom_doom'))) {
        return 'mount_doom';
    }
    
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
    
    // Shire (check before hobbit_route since bag_end is in shire)
    if (id.includes('shire') || id.includes('hobbit') || id === 'bag_end') {
        return 'shire';
    }
    
    // Hobbit route locations (the path they took in the book)
    // BUT exclude minas_tirith and mount_doom rooms - they should be placed at their specific labels
    if ((id.includes('bree') || id.includes('rivendell') ||
        id.includes('moria') || id.includes('lorien') || id.includes('rohan') ||
        id.includes('gondor') || id.includes('mordor') ||
        id.includes('dale') || id.includes('fornost') ||
        id.includes('annuminas') || id.includes('weathertop') || id.includes('amon_sul')) &&
        !id.includes('minas_tirith') && !id.includes('mount_doom') && !id.includes('sammath')) {
        return 'hobbit_route';
    }
    
    // Paths (generic paths, not roads)
    if (id.includes('path') && !id.includes('hobbit') && !id.includes('road') && 
        !id.includes('river') && !id.includes('ford')) {
        return 'path';
    }
    
    // Roads
    if (id.includes('road') || id.includes('east_road') || id.includes('great_road')) {
        return 'road';
    }
    
    // Marshes
    if (id.includes('marsh') || id.includes('midgewater')) {
        return 'marsh';
    }
    
    // Gulfs
    if (id.includes('gulf') || id.includes('lhun') || id.includes('forochel')) {
        return 'gulf';
    }
    
    // Default to plains
    return 'plains';
}

// Group rooms by terrain type
const roomsByTerrain = {
    mountain: [],
    mount_doom: [],
    forest: [],
    hill: [],
    river: [],
    hobbit_route: [],
    path: [],
    road: [],
    gulf: [],
    marsh: [],
    coast: [],
    ocean: [],
    sea: [],
    shire: [],
    lake: [],
    plains: []
};

const roomsByRegion = new Map(); // Map of region name -> array of room IDs

for (const roomId of Object.keys(coordinates)) {
    const terrainType = getRoomTerrainType(roomId);
    roomsByTerrain[terrainType].push(roomId);
    
    // Also group by region
    const region = getRoomRegion(roomId);
    if (region) {
        if (!roomsByRegion.has(region)) {
            roomsByRegion.set(region, []);
        }
        roomsByRegion.get(region).push(roomId);
    }
}

console.log('\nRooms by terrain type:');
for (const [type, rooms] of Object.entries(roomsByTerrain)) {
    console.log(`  ${type.padEnd(15)}: ${rooms.length} rooms`);
}

if (roomsByRegion.size > 0) {
    console.log('\nRooms by region:');
    for (const [region, rooms] of roomsByRegion.entries()) {
        console.log(`  ${region.padEnd(20)}: ${rooms.length} rooms`);
    }
}

// Place rooms on terrain
console.log('\nPlacing rooms on terrain...');

const occupiedPositions = new Set();
const placedRooms = new Map();

// First, place rooms at exact label coordinates
// Match room IDs to label names and place them at the exact label position
console.log('\n0. Placing rooms at exact label coordinates...');
const labelPlacements = new Map(); // Track which labels have been used

// Explicit mappings for key rooms to labels
const explicitRoomMappings = {
    'bag_end': ['hobbiton', 'the_shire', 'shire'],
    'mount_doom_summit': ['mount_doom'],
    'mount_doom_sammath_naur': ['mount_doom'],
    'mount_doom_approach': ['mount_doom'],
    'the_dark_tower': ['the_dark_tower', 'barad_dur'],
    'barad_dur': ['the_dark_tower', 'barad_dur']
};

// Explicit region mappings for rooms that should be placed near specific labels
const regionProximityMappings = {
    'minas_tirith': 'mount_doom', // Minas Tirith should be near Mount Doom
    'gondor': 'mount_doom' // Gondor should be near Mount Doom
};

// For each label, find all matching rooms and place them
for (const [labelName, labelCoords] of regionLabels.entries()) {
    if (labelCoords.length === 0) continue;
    
    const normalizedLabel = labelName.replace(/_/g, '').replace(/\s+/g, '').toLowerCase();
    const matchingRooms = [];
    
    // Find all rooms that match this label
    for (const roomId of Object.keys(coordinates)) {
        if (placedRooms.has(roomId)) continue; // Already placed
        
        const id = roomId.toLowerCase();
        
        // Check explicit mappings first
        if (explicitRoomMappings[id]) {
            if (explicitRoomMappings[id].some(m => m === labelName || m === normalizedLabel)) {
                matchingRooms.push(roomId);
                continue;
            }
        }
        
        // Special case: bag_end should match hobbiton
        if (id === 'bag_end' && (labelName === 'hobbiton' || normalizedLabel === 'hobbiton')) {
            matchingRooms.push(roomId);
            continue;
        }
        
        // Special case: mount_doom rooms should match mount_doom label
        if ((id.includes('mount_doom') || id.includes('sammath')) && 
            (labelName === 'mount_doom' || normalizedLabel.includes('mountdoom'))) {
            matchingRooms.push(roomId);
            continue;
        }
        
        // Special case: minas_tirith rooms should match minas_tirith label
        // Handle both 'Minas Tirith' (with space) and 'minas_tirith' (with underscore)
        if (id.includes('minas_tirith') || (id.includes('tirith') && !id.includes('morgul'))) {
            // Check if this label is for Minas Tirith (handle various forms)
            const labelLower = labelName.toLowerCase();
            if (labelLower === 'minas_tirith' || (labelLower.includes('minas') && labelLower.includes('tirith')) ||
                normalizedLabel.includes('minastirith') || normalizedLabel.includes('minas_tirith')) {
                matchingRooms.push(roomId);
                continue;
            }
        }
        
        // Special case: gondor rooms should match gondor label
        if (id.includes('gondor') && !id.includes('minas_tirith') &&
            (labelName === 'gondor' || normalizedLabel.includes('gondor'))) {
            matchingRooms.push(roomId);
            continue;
        }
        
        // Special case: osgiliath rooms should match osgiliath label
        if (id.includes('osgiliath') && 
            (labelName === 'osgiliath' || normalizedLabel.includes('osgiliath'))) {
            matchingRooms.push(roomId);
            continue;
        }
        
        // Check various matching patterns
        if (id.includes(normalizedLabel) || normalizedLabel.includes(id) || 
            id === labelName || id === normalizedLabel ||
            id.startsWith(normalizedLabel) || normalizedLabel.startsWith(id)) {
            matchingRooms.push(roomId);
        }
    }
    
    if (matchingRooms.length === 0) continue;
    
    // Use the first coordinate for this label
    const labelCoord = labelCoords[0];
    const centerGameCoord = asciiToGame(labelCoord.x, labelCoord.y);
    
    // Place the first room at the exact label coordinate
    // Place additional rooms in a spiral around it
    // Use larger radius for labels with many rooms
    const maxRadius = Math.max(5, Math.ceil(Math.sqrt(matchingRooms.length)) + 2);
    let placedCount = 0;
    for (let i = 0; i < matchingRooms.length; i++) {
        const roomId = matchingRooms[i];
        let found = false;
        
        // First room goes at exact coordinate, others spiral out
        for (let radius = 0; radius < maxRadius && !found; radius++) {
            for (let dx = -radius; dx <= radius && !found; dx++) {
                for (let dy = -radius; dy <= radius && !found; dy++) {
                    if (radius > 0 && Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
                    
                    const testX = centerGameCoord.x + dx;
                    const testY = centerGameCoord.y + dy;
                    const key = `${testX},${testY}`;
                    
                    if (!occupiedPositions.has(key)) {
                        const oldCoord = coordinates[roomId];
                        coordinates[roomId] = {
                            x: testX,
                            y: testY,
                            z: oldCoord?.z || 0
                        };
                        occupiedPositions.add(key);
                        placedRooms.set(roomId, { x: testX, y: testY });
                        placedCount++;
                        found = true;
                    }
                }
            }
        }
    }
    
    if (placedCount > 0) {
        labelPlacements.set(labelName, matchingRooms.slice(0, placedCount));
        console.log(`   Placed ${placedCount} / ${matchingRooms.length} room(s) at ${labelName}`);
    }
}

// Place Mount Doom rooms on Mount Doom terrain (M)
console.log('\n1. Placing Mount Doom rooms on Mount Doom terrain...');
const mountDoomRooms = roomsByTerrain.mount_doom.filter(id => !placedRooms.has(id));
const mountDoomPositions = [];
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (getTerrain(x, y) === 'mount_doom') {
            const gameCoord = asciiToGame(x, y);
            mountDoomPositions.push(gameCoord);
        }
    }
}

// Place Mount Doom rooms
if (mountDoomRooms.length > 0 && mountDoomPositions.length > 0) {
    let placedCount = 0;
    for (let i = 0; i < mountDoomRooms.length && i < mountDoomPositions.length; i++) {
        const roomId = mountDoomRooms[i];
        const pos = mountDoomPositions[i];
        const key = `${pos.x},${pos.y}`;
        
        if (!occupiedPositions.has(key)) {
            const oldCoord = coordinates[roomId];
            coordinates[roomId] = {
                x: pos.x,
                y: pos.y,
                z: oldCoord?.z || 0
            };
            occupiedPositions.add(key);
            placedRooms.set(roomId, { x: pos.x, y: pos.y });
            placedCount++;
        }
    }
    console.log(`   Placed ${placedCount} / ${mountDoomRooms.length} Mount Doom rooms`);
}

// First, place hobbit route rooms (key locations)
console.log('\n2. Placing hobbit route locations...');
const hobbitRoutePositions = [];
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (getTerrain(x, y) === 'hobbit_route') {
            const gameCoord = asciiToGame(x, y);
            hobbitRoutePositions.push(gameCoord);
        }
    }
}

// Place hobbit route rooms
for (let i = 0; i < Math.min(roomsByTerrain.hobbit_route.length, hobbitRoutePositions.length); i++) {
    const roomId = roomsByTerrain.hobbit_route[i];
    const pos = hobbitRoutePositions[i];
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
    // Skip hobbit_route and mount_doom (placed separately)
    if (terrainType === 'hobbit_route' || terrainType === 'mount_doom') continue;
    
    // Filter out already placed rooms
    const unplacedRooms = rooms.filter(id => !placedRooms.has(id));
    if (unplacedRooms.length === 0) continue;
    
    console.log(`\n3. Placing ${terrainType} rooms...`);
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
    
    for (const roomId of unplacedRooms) {
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
    if (roomsByTerrain.hobbit_route && roomsByTerrain.hobbit_route.includes(roomId)) {
        console.log(`  ${roomId}: (${pos.x}, ${pos.y})`);
    }
}
console.log('='.repeat(100));
console.log('\nNOTE: This script uses the terrain map you provided (top 1/4).');
console.log('As you continue building the terrain map, update the userTerrainMap variable');
console.log('or save it to a file and modify the script to read from that file.');
console.log('='.repeat(100));

