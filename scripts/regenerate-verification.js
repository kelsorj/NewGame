#!/usr/bin/env node

/**
 * Regenerate World Map Verification File
 * Reads coordinates from WorldMap.jsx and room data to generate updated verification
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read WorldMap.jsx to extract coordinates
const worldMapPath = join(__dirname, '../client/src/components/WorldMap.jsx');
const worldMapContent = readFileSync(worldMapPath, 'utf-8');

// Extract coordinates
const coordMatch = worldMapContent.match(/const roomCoordinates = \{([\s\S]*?)\};/);
if (!coordMatch) {
    console.error('Could not find roomCoordinates');
    process.exit(1);
}

const coordinates = {};
const coordLines = coordMatch[1].split('\n');
coordLines.forEach(line => {
    const match = line.match(/(\w+):\s*\{\s*x:\s*(\d+),\s*y:\s*(\d+),\s*name:\s*['"]([^'"]+)['"]/);
    if (match) {
        const [, id, x, y, name] = match;
        coordinates[id] = { x: parseInt(x), y: parseInt(y), name };
    }
});

// Load rooms
const roomsModule = await import('../server/src/data/rooms.js');
const rooms = roomsModule.rooms;

// Helper to calculate expected coordinates
function getExpectedCoord(fromCoord, direction) {
    let { x, y } = fromCoord;
    switch (direction) {
        case 'north': return { x, y: y + 1 };
        case 'south': return { x, y: y - 1 };
        case 'east': return { x: x + 1, y };
        case 'west': return { x: x - 1, y };
        case 'northeast': return { x: x + 1, y: y + 1 };
        case 'northwest': return { x: x - 1, y: y + 1 };
        case 'southeast': return { x: x + 1, y: y - 1 };
        case 'southwest': return { x: x - 1, y: y - 1 };
        case 'up':
        case 'down': return { x, y }; // Same coordinates for vertical
        default: return null;
    }
}

// Generate verification text
let output = '';
output += '='.repeat(80) + '\n';
output += 'MIDDLE EARTH ADVENTURE - COMPLETE WORLD MAP (UPDATED)\n';
output += '='.repeat(80) + '\n\n';
output += `Generated: ${new Date().toISOString()}\n`;
output += `Total Rooms: ${Object.keys(rooms).length}\n`;
output += `Rooms with Coordinates: ${Object.keys(coordinates).length}\n\n`;

output += 'COORDINATE SYSTEM:\n';
output += '-'.repeat(80) + '\n';
output += '  North = +Y (increasing Y)\n';
output += '  South = -Y (decreasing Y)\n';
output += '  East  = +X (increasing X)\n';
output += '  West  = -X (decreasing X)\n';
output += '  Up/Down = same X,Y (vertical movement)\n\n';

// Group rooms by region
const regions = {
    'The Shire': [],
    'Bree-land': [],
    'Old Forest': [],
    'Barrow-downs': [],
    'Weathertop & Eriador': [],
    'Rivendell & Trollshaws': [],
    'Moria': [],
    'Lothlórien': [],
    'Fangorn Forest': [],
    'Rohan': [],
    'Gondor': [],
    'Mordor': [],
    'Other': []
};

Object.entries(rooms).forEach(([id, room]) => {
    const name = room.name.toLowerCase();
    let region = 'Other';
    
    if (name.includes('shire') || name.includes('hobbit') || name.includes('bag end') || 
        name.includes('tuckborough') || name.includes('bywater') || name.includes('michel')) {
        region = 'The Shire';
    } else if (name.includes('bree') || name.includes('combe') || name.includes('archet') || 
               name.includes('staddle') || name.includes('chetwood')) {
        region = 'Bree-land';
    } else if (name.includes('old forest') || name.includes('withywindle') || 
               name.includes('bombadil') || name.includes('willow')) {
        region = 'Old Forest';
    } else if (name.includes('barrow') || name.includes('downs')) {
        region = 'Barrow-downs';
    } else if (name.includes('weathertop') || name.includes('weather hills') || 
               name.includes('fornost') || name.includes('annuminas') || 
               name.includes('midgewater') || name.includes('last bridge')) {
        region = 'Weathertop & Eriador';
    } else if (name.includes('rivendell') || name.includes('ford of bruinen') || 
               name.includes('trollshaws') || name.includes('troll cave')) {
        region = 'Rivendell & Trollshaws';
    } else if (name.includes('moria') || name.includes('durin') || name.includes('hollin') || 
               name.includes('balin') || name.includes('mines') || name.includes('khazad')) {
        region = 'Moria';
    } else if (name.includes('lothlorien') || name.includes('caras') || name.includes('galadriel')) {
        region = 'Lothlórien';
    } else if (name.includes('fangorn') || name.includes('treebeard') || name.includes('wellinghall')) {
        region = 'Fangorn Forest';
    } else if (name.includes('rohan') || name.includes('edoras') || name.includes('helm') || 
               name.includes('isengard')) {
        region = 'Rohan';
    } else if (name.includes('gondor') || name.includes('minas tirith') || name.includes('osgiliath') || 
               name.includes('pelennor') || name.includes('pelargir')) {
        region = 'Gondor';
    } else if (name.includes('mordor') || name.includes('black gate') || name.includes('doom') || 
               name.includes('barad') || name.includes('gorgoroth') || name.includes('cirith')) {
        region = 'Mordor';
    }
    
    regions[region].push({ id, room });
});

// Sort by coordinates
Object.keys(regions).forEach(region => {
    regions[region].sort((a, b) => {
        const coordA = coordinates[a.id];
        const coordB = coordinates[b.id];
        if (!coordA && !coordB) return a.id.localeCompare(b.id);
        if (!coordA) return 1;
        if (!coordB) return -1;
        if (coordA.y !== coordB.y) return coordA.y - coordB.y;
        return coordA.x - coordB.x;
    });
});

// Generate output
Object.entries(regions).forEach(([regionName, roomList]) => {
    if (roomList.length === 0) return;
    
    output += '\n' + '='.repeat(80) + '\n';
    output += `${regionName.toUpperCase()} (${roomList.length} rooms)\n`;
    output += '='.repeat(80) + '\n\n';
    
    roomList.forEach(({ id, room }) => {
        const coord = coordinates[id];
        
        output += `${id} ${coord ? `(${coord.x}, ${coord.y})` : '(NO COORDS)'}\n`;
        output += `  Name: ${room.name}\n`;
        
        if (room.exits && Object.keys(room.exits).length > 0) {
            output += `  Exits:\n`;
            Object.entries(room.exits).forEach(([direction, targetId]) => {
                const targetCoord = coordinates[targetId];
                const currentCoord = coord;
                
                let verification = '';
                if (currentCoord && targetCoord) {
                    const expected = getExpectedCoord(currentCoord, direction);
                    if (expected && targetCoord.x === expected.x && targetCoord.y === expected.y) {
                        verification = ' ✓';
                    } else if (expected) {
                        verification = ` ⚠️ (expected: ${expected.x},${expected.y}, got: ${targetCoord.x},${targetCoord.y})`;
                    }
                } else if (!targetCoord) {
                    verification = ' ⚠️ (target has no coordinates)';
                }
                
                output += `    ${direction.padEnd(12)} → ${targetId.padEnd(30)} ${targetCoord ? `(${targetCoord.x},${targetCoord.y})` : 'NO COORDS'}${verification}\n`;
            });
        }
        output += '\n';
    });
});

// Summary
output += '\n' + '='.repeat(80) + '\n';
output += 'VERIFICATION SUMMARY\n';
output += '='.repeat(80) + '\n\n';

const roomsWithoutCoords = Object.keys(rooms).filter(id => !coordinates[id]);
if (roomsWithoutCoords.length > 0) {
    output += `⚠️  Rooms Missing Coordinates (${roomsWithoutCoords.length}):\n`;
    roomsWithoutCoords.slice(0, 20).forEach(id => {
        output += `  - ${id}: ${rooms[id].name}\n`;
    });
    if (roomsWithoutCoords.length > 20) {
        output += `  ... and ${roomsWithoutCoords.length - 20} more\n`;
    }
    output += '\n';
}

// Coordinate conflicts
const coordMap = {};
Object.entries(coordinates).forEach(([id, coord]) => {
    const key = `${coord.x},${coord.y}`;
    if (!coordMap[key]) coordMap[key] = [];
    coordMap[key].push(id);
});

const conflicts = Object.entries(coordMap).filter(([_, ids]) => ids.length > 1);
if (conflicts.length > 0) {
    output += `⚠️  Coordinate Conflicts (${conflicts.length} locations):\n`;
    conflicts.forEach(([coord, ids]) => {
        output += `  - (${coord}): ${ids.join(', ')}\n`;
    });
    output += '\n';
}

// Write file
const outputPath = join(__dirname, '../WORLD_MAP_VERIFICATION.txt');
writeFileSync(outputPath, output, 'utf-8');

console.log(`✅ Verification file regenerated: ${outputPath}`);
console.log(`   Total rooms: ${Object.keys(rooms).length}`);
console.log(`   Rooms with coordinates: ${Object.keys(coordinates).length}`);
console.log(`   Rooms missing coordinates: ${roomsWithoutCoords.length}`);
console.log(`   Coordinate conflicts: ${conflicts.length}`);



