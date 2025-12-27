// Inventory System Tests
import { InventorySystem } from '../src/engine/InventorySystem.js';
import { items } from '../src/data/items.js';

describe('InventorySystem', () => {
    let inventorySystem;
    let playerState;
    let room;

    beforeEach(() => {
        inventorySystem = new InventorySystem(items);
        playerState = {
            hp: 100,
            maxHp: 100,
            attack: 5,
            defense: 2,
            baseAttack: 5,
            baseDefense: 2,
            inventory: ['rusty_dagger'],
            equipment: {}
        };
        room = {
            items: ['walking_stick', 'health_potion']
        };
    });

    describe('takeItem', () => {
        test('takes item from room', () => {
            const result = inventorySystem.takeItem('walking_stick', playerState, room);

            expect(result.success).toBe(true);
            expect(result.message).toContain('You take');
            expect(playerState.inventory).toContain('walking_stick');
            expect(room.items).not.toContain('walking_stick');
        });

        test('fails to take non-existent item', () => {
            const result = inventorySystem.takeItem('excalibur', playerState, room);

            expect(result.success).toBe(false);
            expect(result.message).toContain('no');
        });
    });

    describe('dropItem', () => {
        test('drops item into room', () => {
            const result = inventorySystem.dropItem('rusty_dagger', playerState, room);

            expect(result.success).toBe(true);
            expect(result.message).toContain('drop');
            expect(playerState.inventory).not.toContain('rusty_dagger');
            expect(room.items).toContain('rusty_dagger');
        });

        test('fails to drop item not in inventory', () => {
            const result = inventorySystem.dropItem('sting', playerState, room);

            expect(result.success).toBe(false);
            expect(result.message).toContain("don't have");
        });

        test('unequips item when dropped', () => {
            playerState.equipment.weapon = 'rusty_dagger';

            inventorySystem.dropItem('rusty_dagger', playerState, room);

            expect(playerState.equipment.weapon).toBeUndefined();
        });
    });

    describe('showInventory', () => {
        test('shows inventory items', () => {
            playerState.inventory = ['rusty_dagger', 'lembas_bread'];

            const result = inventorySystem.showInventory(playerState);

            expect(result).toContain('Inventory');
            expect(result).toContain('rusty_dagger');
            expect(result).toContain('lembas_bread');
        });

        test('shows empty inventory message', () => {
            playerState.inventory = [];

            const result = inventorySystem.showInventory(playerState);

            expect(result).toContain('empty');
        });

        test('marks equipped items', () => {
            playerState.equipment.weapon = 'rusty_dagger';

            const result = inventorySystem.showInventory(playerState);

            expect(result).toContain('EQUIPPED');
        });
    });

    describe('useItem', () => {
        test('uses healing potion', () => {
            playerState.inventory.push('health_potion');
            playerState.hp = 50;

            const result = inventorySystem.useItem('health_potion', playerState);

            expect(result.success).toBe(true);
            expect(playerState.hp).toBe(70); // 50 + 20
            expect(playerState.inventory).not.toContain('health_potion');
            expect(result.message).toContain('recover');
        });

        test('equips weapon', () => {
            const result = inventorySystem.useItem('rusty_dagger', playerState);

            expect(result.success).toBe(true);
            expect(playerState.equipment.weapon).toBe('rusty_dagger');
            expect(result.message).toContain('equip');
        });

        test('cannot use item not in inventory', () => {
            const result = inventorySystem.useItem('sting', playerState);

            expect(result.success).toBe(false);
            expect(result.message).toContain("don't have");
        });
    });

    describe('equipItem', () => {
        test('equips weapon and updates attack', () => {
            playerState.inventory.push('sting');
            const stingItem = items['sting'];

            const result = inventorySystem.equipItem(stingItem, 'sting', playerState);

            expect(result.success).toBe(true);
            expect(playerState.equipment.weapon).toBe('sting');
            expect(playerState.attack).toBe(5 + 10); // base + sting bonus
        });

        test('unequips previous weapon when equipping new one', () => {
            playerState.equipment.weapon = 'rusty_dagger';
            playerState.inventory.push('walking_stick');

            const result = inventorySystem.equipItem(items['walking_stick'], 'walking_stick', playerState);

            expect(result.success).toBe(true);
            expect(playerState.equipment.weapon).toBe('walking_stick');
            expect(result.message).toContain('unequipped rusty_dagger');
        });
    });

    describe('examineItem', () => {
        test('shows item details', () => {
            const result = inventorySystem.examineItem('sting', playerState);

            expect(result.success).toBe(true);
            expect(result.message).toContain('sting');
            expect(result.message).toContain('elven-blade');
            expect(result.message).toContain('Type:');
        });
    });
});
