const fs = require('fs');
const path = require('path');

// Simple regex parser for our specific room files format
function parseRoomFiles() {
    const rooms = {};
    const dataDir = '/Users/kelsorj/Desktop/NewGame/server/src/data';
    const files = [
        'rooms-expansion-batch1.js',
        'rooms-expansion-batch2.js',
        'rooms-expansion-batch3.js',
        'rooms-expansion-batch4.js',
        'rooms-expansion-batch5.js',
        'rooms-expansion-batch6.js',
        'rooms.js'
    ];

    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        // This is a crude parser but should work for our structured JSON-like JS objects
        const roomBlocks = content.match(/(\w+):\s*{[\s\S]*?name:\s*"(.*?)"[\s\S]*?exits:\s*{([\s\S]*?)}/g);
        if (roomBlocks) {
            roomBlocks.forEach(block => {
                const idMatch = block.match(/^(\w+):/);
                const nameMatch = block.match(/name:\s*"(.*?)"/);
                const exitsMatch = block.match(/exits:\s*{([\s\S]*?)}/);

                if (idMatch && nameMatch && exitsMatch) {
                    const id = idMatch[1];
                    const name = nameMatch[1];
                    const exitsStr = exitsMatch[1];
                    const exits = {};

                    const exitLines = exitsStr.split(',');
                    exitLines.forEach(line => {
                        const parts = line.split(':');
                        if (parts.length === 2) {
                            const dir = parts[0].trim().replace(/['"]/g, '');
                            const target = parts[1].trim().replace(/['"]/g, '');
                            exits[dir] = target;
                        }
                    });

                    rooms[id] = { name, exits };
                }
            });
        }
    });
    return rooms;
}

const rooms = parseRoomFiles();

const coords = {
    bag_end: { x: 50, y: 50, name: 'Bag End' }
};

const queue = ['bag_end'];
const visited = new Set(['bag_end']);

const dirOffsets = {
    north: { x: 0, y: 1 },
    south: { x: 0, y: -1 },
    east: { x: 1, y: 0 },
    west: { x: -1, y: 0 },
    northwest: { x: -1, y: 1 },
    northeast: { x: 1, y: 1 },
    southwest: { x: -1, y: -1 },
    southeast: { x: 1, y: -1 },
    up: { x: 0, y: 1 },
    down: { x: 0, y: -1 },
    n: { x: 0, y: 1 },
    s: { x: 0, y: -1 },
    e: { x: 1, y: 0 },
    w: { x: -1, y: 0 },
    nw: { x: -1, y: 1 },
    ne: { x: 1, y: 1 },
    sw: { x: -1, y: -1 },
    se: { x: 1, y: -1 }
};

while (queue.length > 0) {
    const currentId = queue.shift();
    const currentRoom = rooms[currentId];
    const currentCoord = coords[currentId];

    if (!currentRoom) continue;

    for (const [dir, targetId] of Object.entries(currentRoom.exits)) {
        if (!visited.has(targetId)) {
            const offset = dirOffsets[dir];
            if (offset) {
                const targetRoom = rooms[targetId];
                if (targetRoom) {
                    coords[targetId] = {
                        x: currentCoord.x + offset.x,
                        y: currentCoord.y + offset.y,
                        name: targetRoom.name
                    };
                    visited.add(targetId);
                    queue.push(targetId);
                }
            }
        }
    }
}

// Format the output
let output = 'const roomCoordinates = {\n';
for (const [id, data] of Object.entries(coords)) {
    // Adjust x, y back to smaller numbers for easier reading if desired, 
    // but the component handles relative offsets anyway.
    output += `    ${id}: { x: ${data.x}, y: ${data.y}, name: '${data.name}' },\n`;
}
output += '};';

console.log(output);
fs.writeFileSync('/Users/kelsorj/Desktop/NewGame/coords_fixed.js', output);
