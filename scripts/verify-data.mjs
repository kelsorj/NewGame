import { rooms } from '../server/src/data/rooms.js';

const b = rooms.bag_end;
const h = rooms.hobbiton_square;

console.log('--- BAG END ---');
console.log(JSON.stringify(b, null, 2));
console.log('--- HOBBITON SQUARE ---');
console.log(JSON.stringify(h, null, 2));

const shire = rooms;
const counts = {};
for (const id in shire) {
    const e = shire[id].exits || {};
    for (const d in e) {
        counts[d] = (counts[d] || 0) + 1;
    }
}
console.log('--- EXIT COUNTS ---');
console.log(counts);
