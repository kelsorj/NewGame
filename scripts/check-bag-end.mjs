import { rooms } from '../server/src/data/rooms.js';

console.log('=== BAG_END ===');
console.log(JSON.stringify(rooms.bag_end, null, 2));

console.log('\n=== WOODY_END ===');
console.log(JSON.stringify(rooms.woody_end, null, 2));

console.log('\n=== HOBBITON_SQUARE ===');
console.log(JSON.stringify(rooms.hobbiton_square, null, 2));

// Check what woody_end connects to
if (rooms.woody_end && rooms.woody_end.exits) {
    console.log('\n=== WOODY_END EXITS ===');
    for (const [dir, target] of Object.entries(rooms.woody_end.exits)) {
        console.log(`${dir} -> ${target}`);
        const targetRoom = rooms[target];
        if (targetRoom) {
            // Check if target has reverse exit
            const opposites = {
                north: 'south', south: 'north',
                east: 'west', west: 'east',
                northeast: 'southwest', southwest: 'northeast',
                northwest: 'southeast', southeast: 'northwest'
            };
            const oppDir = opposites[dir];
            if (oppDir && targetRoom.exits && targetRoom.exits[oppDir]) {
                console.log(`  ${target} has ${oppDir} -> ${targetRoom.exits[oppDir]}`);
            } else {
                console.log(`  WARNING: ${target} does NOT have ${oppDir} exit back!`);
            }
        }
    }
}
