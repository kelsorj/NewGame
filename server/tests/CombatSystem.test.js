// Combat System Tests
import { CombatSystem } from '../src/engine/CombatSystem.js';
import { enemies } from '../src/data/enemies.js';

describe('CombatSystem', () => {
    let combatSystem;
    let playerState;

    beforeEach(() => {
        combatSystem = new CombatSystem(enemies);
        playerState = {
            name: 'Aragorn',
            hp: 100,
            maxHp: 100,
            attack: 10,
            defense: 5,
            inventory: []
        };
    });

    describe('startCombat', () => {
        test('initiates combat with an enemy', () => {
            const result = combatSystem.startCombat('player1', 'wild_wolf', playerState);

            expect(result.success).toBe(true);
            expect(result.message).toContain('Combat initiated');
            expect(result.message).toContain('Wild Wolf');
            expect(combatSystem.isInCombat('player1')).toBe(true);
        });

        test('rejects unknown enemy', () => {
            const result = combatSystem.startCombat('player1', 'unicorn', playerState);

            expect(result.success).toBe(false);
            expect(result.message).toContain('Unknown enemy');
        });
    });

    describe('attack', () => {
        beforeEach(() => {
            combatSystem.startCombat('player1', 'wild_wolf', playerState);
        });

        test('player can attack enemy', () => {
            const result = combatSystem.attack('player1', playerState);

            expect(result.success).toBe(true);
            expect(result.message).toContain('strike');
            expect(result.message).toContain('damage');
        });

        test('enemy is defeated when HP reaches 0', () => {
            // Mock a weak enemy
            const combat = combatSystem.activeCombats.get('player1');
            combat.enemy.currentHp = 1;

            const result = combatSystem.attack('player1', playerState);

            expect(result.combatOver).toBe(true);
            expect(result.victory).toBe(true);
            expect(result.message).toContain('Victory');
            expect(combatSystem.isInCombat('player1')).toBe(false);
        });

        test('player is defeated when HP reaches 0', () => {
            const combat = combatSystem.activeCombats.get('player1');
            playerState.hp = 1;
            combat.enemy.attack = 50; // High attack

            const result = combatSystem.attack('player1', playerState);

            expect(result.combatOver).toBe(true);
            expect(result.victory).toBe(false);
            expect(result.message).toContain('defeated');
        });

        test('cannot attack without being in combat', () => {
            combatSystem.activeCombats.delete('player1');

            const result = combatSystem.attack('player1', playerState);

            expect(result.success).toBe(false);
            expect(result.message).toContain('not in combat');
        });
    });

    describe('flee', () => {
        beforeEach(() => {
            combatSystem.startCombat('player1', 'wild_wolf', playerState);
        });

        test('fleeing might succeed', () => {
            // Test with mock random
            const originalRandom = Math.random;
            Math.random = () => 0.3; // Will succeed (< 0.5)

            const result = combatSystem.flee('player1', playerState);

            expect(result.success).toBe(true);
            expect(result.combatOver).toBe(true);
            expect(result.message).toContain('flee');
            expect(combatSystem.isInCombat('player1')).toBe(false);

            Math.random = originalRandom;
        });

        test('fleeing might fail', () => {
            const originalRandom = Math.random;
            Math.random = () => 0.7; // Will fail (>= 0.5)

            const result = combatSystem.flee('player1', playerState);

            expect(result.success).toBe(false);
            expect(result.combatOver).toBe(false);
            expect(result.message).toContain('Failed to flee');

            Math.random = originalRandom;
        });
    });

    describe('isInCombat', () => {
        test('returns false when not in combat', () => {
            expect(combatSystem.isInCombat('player1')).toBe(false);
        });

        test('returns true when in combat', () => {
            combatSystem.startCombat('player1', 'wild_wolf', playerState);
            expect(combatSystem.isInCombat('player1')).toBe(true);
        });
    });
});
