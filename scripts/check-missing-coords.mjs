import { rooms } from '../server/src/data/rooms.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coordData = JSON.parse(readFileSync(
    path.join(__dirname, 'linear-world-connections.json'),
    'utf8'
));
const coords = coordData.coordinates || {};

const roomIds = Object.keys(rooms);
const coordIds = Object.keys(coords);
const missing = roomIds.filter(id => !coords[id]);
const at000 = Object.entries(coords).filter(([id, c]) => c.x === 0 && c.y === 0 && c.z === 0);

console.log('Total rooms in rooms.js:', roomIds.length);
console.log('Total rooms with coordinates:', coordIds.length);
console.log('Rooms missing coordinates (will default to 0,0,0):', missing.length);
console.log('Rooms explicitly at (0,0,0):', at000.length);

if (missing.length > 0) {
    console.log('\nFirst 50 rooms missing coordinates:');
    missing.slice(0, 50).forEach(id => console.log('  -', id));
    if (missing.length > 50) console.log('  ... and', missing.length - 50, 'more');
}

if (at000.length > 0) {
    console.log('\nRooms explicitly at (0,0,0):');
    at000.forEach(([id]) => console.log('  -', id));
}

