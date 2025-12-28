import { GameEngine } from '../server/src/engine/GameEngine.js';

const engine = new GameEngine();

// Create a test player
const player = engine.createNewPlayer('TestPlayer');

console.log('=== STARTING AT BAG END ===');
console.log(`Current room: ${player.currentRoom}`);

// Look around
const lookResult = engine.handleLook(null, player);
console.log(lookResult.message);

// Move south
console.log('\n=== MOVING SOUTH ===');
const moveResult = engine.handleMove(null, 'south', player);
console.log(moveResult.message);

console.log(`\n=== RESULT ===`);
console.log(`New room: ${player.currentRoom}`);
console.log(`Expected: woody_end`);
console.log(`Match: ${player.currentRoom === 'woody_end' ? '✅ SUCCESS' : '❌ FAILED'}`);
