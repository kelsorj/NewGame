import { rooms } from './src/data/rooms.js';
const missing = [];
const opposites = {
    north: 'south', south: 'north',
    east: 'west', west: 'east',
    northwest: 'southeast', southeast: 'northwest',
    northeast: 'southwest', southwest: 'northeast',
    up: 'down', down: 'up'
};

for (const [id, room] of Object.entries(rooms)) {
    for (const [dir, target] of Object.entries(room.exits || {})) {
        const targetRoom = rooms[target];
        if (!targetRoom) {
            console.error(`Room ${id} points to non-existent room ${target} via ${dir}`);
            continue;
        }
        const oppDir = opposites[dir];
        if (oppDir && (!targetRoom.exits || targetRoom.exits[oppDir] !== id)) {
            missing.push({ from: id, to: target, dir, expectedOpp: oppDir });
        }
    }
}

console.log(`Total missing reciprocal connections: ${missing.length}`);
// Group by "to" room to see what needs to be added where
const updatesNeeded = {};
missing.forEach(m => {
    if (!updatesNeeded[m.to]) updatesNeeded[m.to] = [];
    updatesNeeded[m.to].push(`${m.expectedOpp}: '${m.from}'`);
});

for (const [room, exits] of Object.entries(updatesNeeded)) {
    console.log(`Update ${room} adding: ${exits.join(', ')}`);
}
