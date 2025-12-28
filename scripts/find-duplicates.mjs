import { rooms } from '../server/src/data/rooms.js';
import { shireExpansion } from '../server/src/data/rooms-expansion-batch1.js';
import { moriaRivendellExpansion } from '../server/src/data/rooms-expansion-batch2.js';
import { lothlorienFangornExpansion } from '../server/src/data/rooms-expansion-batch3.js';
import { rohanExpansion } from '../server/src/data/rooms-expansion-batch4.js';
import { gondorMordorExpansion } from '../server/src/data/rooms-expansion-batch5.js';
import { newRegionsExpansion } from '../server/src/data/rooms-expansion-batch6.js';

const expansions = {
    'shireExpansion': shireExpansion,
    'moriaRivendellExpansion': moriaRivendellExpansion,
    'lothlorienFangornExpansion': lothlorienFangornExpansion,
    'rohanExpansion': rohanExpansion,
    'gondorMordorExpansion': gondorMordorExpansion,
    'newRegionsExpansion': newRegionsExpansion
};

// Find rooms defined in rooms.js
const mainFileRooms = new Set();
for (const id in rooms) {
    // Check if this room is NOT in any expansion
    let inExpansion = false;
    for (const [name, exp] of Object.entries(expansions)) {
        if (exp[id]) {
            inExpansion = true;
            break;
        }
    }
    if (!inExpansion) {
        mainFileRooms.add(id);
    }
}

console.log(`Rooms defined in rooms.js (not in expansions): ${mainFileRooms.size}`);
console.log(Array.from(mainFileRooms).sort().join(', '));

// Find duplicates
const seen = new Map();
for (const [expName, exp] of Object.entries(expansions)) {
    for (const id in exp) {
        if (seen.has(id)) {
            console.log(`\nDUPLICATE: ${id} in ${expName} (already in ${seen.get(id)})`);
        } else {
            seen.set(id, expName);
        }
    }
}

// Check if main file rooms conflict with expansions
for (const id of mainFileRooms) {
    if (seen.has(id)) {
        console.log(`\nCONFLICT: ${id} defined in BOTH rooms.js AND ${seen.get(id)}`);
    }
}
