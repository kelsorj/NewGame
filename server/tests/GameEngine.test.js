// Game Engine Tests
import { GameEngine } from '../src/engine/GameEngine.js';

describe('GameEngine', () => {
    let engine;

    beforeEach(() => {
        engine = new GameEngine();
    });

    describe('createNewPlayer', () => {
        test('creates a new player with default stats', () => {
            const player = engine.createNewPlayer('Frodo');

            expect(player.name).toBe('Frodo');
            expect(player.hp).toBe(100);
            expect(player.maxHp).toBe(100);
            expect(player.currentRoom).toBe('bag_end');
            expect(player.inventory).toContain('rusty_dagger');
            expect(player.level).toBe(1);
            expect(player.exp).toBe(0);
        });
    });

    describe('processCommand', () => {
        let playerState;

        beforeEach(() => {
            playerState = engine.createNewPlayer('Bilbo');
        });

        test('handles look command', () => {
            const result = engine.processCommand('player1', 'look', playerState);

            expect(result.message).toContain('Bag End');
            expect(result.message).toContain('hobbit-hole');
        });

        test('handles movement', () => {
            const result = engine.processCommand('player1', 'go south', playerState);

            expect(result.roomChanged).toBe(true);
            expect(playerState.currentRoom).toBe('hobbiton_square');
            expect(result.message).toContain('Hobbiton Square');
        });

        test('handles invalid movement', () => {
            const result = engine.processCommand('player1', 'go up', playerState);

            expect(result.roomChanged).toBeUndefined();
            expect(result.message).toContain("can't go");
        });

        test('handles inventory command', () => {
            const result = engine.processCommand('player1', 'inventory', playerState);

            expect(result.message).toContain('Inventory');
            expect(result.message).toContain('rusty_dagger');
        });

        test('handles take command', () => {
            playerState.currentRoom = 'bag_end';
            const result = engine.processCommand('player1', 'take walking_stick', playerState);

            expect(result.message).toContain('You take');
            expect(playerState.inventory).toContain('walking_stick');
        });

        test('handles help command', () => {
            const result = engine.processCommand('player1', 'help', playerState);

            expect(result.message).toContain('Navigation');
            expect(result.message).toContain('Combat');
            expect(result.message).toContain('Inventory');
        });

        test('handles stats command', () => {
            const result = engine.processCommand('player1', 'stats', playerState);

            expect(result.message).toContain('Bilbo');
            expect(result.message).toContain('HP:');
            expect(result.message).toContain('Attack:');
        });
    });
});
