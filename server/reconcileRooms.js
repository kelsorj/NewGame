import fs from 'fs';
import path from 'path';

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

const opposites = {
    north: 'south', south: 'north',
    east: 'west', west: 'east',
    northwest: 'southeast', southeast: 'northwest',
    northeast: 'southwest', southwest: 'northeast',
    up: 'down', down: 'up'
};

// 1. Build room-to-file map
const roomToFile = {};
files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const roomMatches = content.matchAll(/^\s*(\w+):\s*{/gm);
    for (const match of roomMatches) {
        roomToFile[match[1]] = file;
    }
});

// 2. Load all rooms
import { rooms } from './src/data/rooms.js';

const missing = [];
for (const [id, room] of Object.entries(rooms)) {
    for (const [dir, target] of Object.entries(room.exits || {})) {
        const targetRoom = rooms[target];
        if (!targetRoom) continue;
        const oppDir = opposites[dir];
        if (oppDir && (!targetRoom.exits || targetRoom.exits[oppDir] !== id)) {
            missing.push({ from: id, to: target, dir, expectedOpp: oppDir });
        }
    }
}

console.log(`Reconciling ${missing.length} missing connections...`);

// 3. Apply fixes 
missing.forEach(m => {
    let file = roomToFile[m.to];
    if (!file) {
        for (const f of files) {
            const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
            if (content.includes(`${m.to}: {`)) {
                file = f;
                break;
            }
        }
    }

    if (!file) return;

    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find room header
    const roomPattern = new RegExp(`^\\s*${m.to}:\\s*{`, 'm');
    const match = content.match(roomPattern);
    if (!match) return;

    const roomStart = match.index;

    // Find exits: { within this region
    let exitsIndex = content.indexOf('exits: {', roomStart);
    if (exitsIndex === -1) {
        // Broaden search - maybe it's not at the start of a line
        exitsIndex = content.indexOf('exits:', roomStart);
        if (exitsIndex === -1) return;
    }

    const exitsStart = content.indexOf('{', exitsIndex) + 1;

    // Find matching }
    let depth = 1;
    let exitsEnd = -1;
    for (let i = exitsStart; i < content.length; i++) {
        if (content[i] === '{') depth++;
        else if (content[i] === '}') {
            depth--;
            if (depth === 0) {
                exitsEnd = i;
                break;
            }
        }
    }

    if (exitsEnd === -1) return;

    const exitsContent = content.substring(exitsStart, exitsEnd);
    const exitEntry = `${m.expectedOpp}: '${m.from}'`;

    const existingPattern = new RegExp(`${m.expectedOpp}:\\s*['"]${m.from}['"]`);
    if (existingPattern.test(exitsContent)) return;

    let cleanExits = exitsContent.replace(/\/\/.*$/gm, '').trim();
    if (cleanExits && !cleanExits.endsWith(',')) cleanExits += ',';
    cleanExits += ` ${exitEntry} `;

    content = content.substring(0, exitsStart) + ' ' + cleanExits + ' ' + content.substring(exitsEnd);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${m.to} <- ${m.from} (${m.expectedOpp})`);
});

console.log('Reconciliation complete.');
