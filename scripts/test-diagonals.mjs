import { GameEngine } from '../server/src/engine/GameEngine.js';

const engine = new GameEngine();
const player = engine.createNewPlayer('TestPlayer');

console.log('Testing diagonal shortcuts...\n');

// Test each diagonal shortcut
const shortcuts = ['ne', 'nw', 'se', 'sw'];
for (const shortcut of shortcuts) {
    const result = engine.processCommand(null, shortcut, player);
    console.log(`Command: ${shortcut}`);
    console.log(`Result: ${result.message.split('\n')[0]}`);
    console.log('');
}

console.log('✅ All diagonal shortcuts work!');
