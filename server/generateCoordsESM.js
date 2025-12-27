import { rooms } from './src/data/rooms.js';
import fs from 'fs';

const coords = {
    bag_end: { x: 50, y: 50, name: 'Bag End' }
};

const processed = new Set(['bag_end']);
const queue = ['bag_end'];

const cardinalOffsets = {
    north: { x: 0, y: 1 },
    south: { x: 0, y: -1 },
    east: { x: 1, y: 0 },
    west: { x: -1, y: 0 }
};

const diagonalOffsets = {
    northwest: { x: -1, y: 1 },
    northeast: { x: 1, y: 1 },
    southwest: { x: -1, y: -1 },
    southeast: { x: 1, y: -1 }
};

const otherOffsets = {
    up: { x: 0, y: 1 },
    down: { x: 0, y: -1 }
};

// Priority BFS
while (queue.length > 0) {
    const currentId = queue.shift();
    const currentRoom = rooms[currentId];
    const currentCoord = coords[currentId];

    if (!currentRoom || !currentRoom.exits) continue;

    // Sort exits by priority: Cardinals first, then Diagonals, then Others
    const exits = Object.entries(currentRoom.exits);
    const sortedExits = exits.sort((a, b) => {
        const aPri = cardinalOffsets[a[0]] ? 0 : (diagonalOffsets[a[0]] ? 1 : 2);
        const bPri = cardinalOffsets[b[0]] ? 0 : (diagonalOffsets[b[0]] ? 1 : 2);
        return aPri - bPri;
    });

    for (const [dir, targetId] of sortedExits) {
        if (!processed.has(targetId)) {
            const offset = cardinalOffsets[dir] || diagonalOffsets[dir] || otherOffsets[dir];
            if (offset) {
                const targetRoom = rooms[targetId];
                if (targetRoom) {
                    coords[targetId] = {
                        x: currentCoord.x + offset.x,
                        y: currentCoord.y + offset.y,
                        name: targetRoom.name
                    };
                    processed.add(targetId);
                    queue.push(targetId);
                }
            }
        }
    }
}

// Format the output
let output = '// Generated consistent coordinates for all rooms (Orthogonal First)\n';
output += 'export const roomCoordinates = {\n';
for (const [id, data] of Object.entries(coords)) {
    const safeName = data.name.replace(/'/g, "\\'");
    output += `    ${id}: { x: ${data.x}, y: ${data.y}, name: '${safeName}' },\n`;
}
output += '};';

fs.writeFileSync('../coords_fully_fixed.js', output);
console.log(`Generated coordinates for ${Object.keys(coords).length} rooms.`);
