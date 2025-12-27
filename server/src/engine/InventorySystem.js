// Inventory System - Item management and equipment
import { formatItem } from '../utils/formatItem.js';
import { normalizeItemName, findMatchingId } from '../utils/normalizeItemName.js';

export class InventorySystem {
    constructor(items) {
        this.items = items;
    }

    getItem(itemName) {
        return this.items[itemName];
    }

    takeItem(itemName, playerState, room) {
        if (!room.items || room.items.length === 0) {
            return { success: false, message: `There are no items here.` };
        }

        // Find matching item ID
        const matchedId = findMatchingId(itemName, room.items);
        if (!matchedId) {
            return { success: false, message: `There is no ${itemName} here.` };
        }

        const item = this.items[matchedId];
        if (!item) {
            return { success: false, message: `Unknown item: ${matchedId}` };
        }

        // Add to inventory
        playerState.inventory.push(matchedId);

        // Remove from room
        const index = room.items.indexOf(matchedId);
        room.items.splice(index, 1);

        return {
            success: true,
            message: `✅ You take the ${formatItem(matchedId)}.\n${item.description}`
        };
    }

    dropItem(itemName, playerState, room) {
        // Find matching item ID in inventory
        const matchedId = findMatchingId(itemName, playerState.inventory);
        if (!matchedId) {
            return { success: false, message: `You don't have ${itemName}.` };
        }

        // Remove from inventory
        const index = playerState.inventory.indexOf(matchedId);
        playerState.inventory.splice(index, 1);

        // Add to room
        if (!room.items) room.items = [];
        room.items.push(matchedId);

        // Unequip if equipped
        if (playerState.equipment) {
            for (const [slot, equippedItem] of Object.entries(playerState.equipment)) {
                if (equippedItem === matchedId) {
                    delete playerState.equipment[slot];
                }
            }
        }

        return {
            success: true,
            message: `You drop the ${formatItem(matchedId)}.`
        };
    }

    showInventory(playerState) {
        if (playerState.inventory.length === 0) {
            return "🎒 Your inventory is empty.";
        }

        let output = "🎒 Inventory:\n";
        for (const itemName of playerState.inventory) {
            const item = this.items[itemName];
            const equipped = this.isEquipped(itemName, playerState) ? " [EQUIPPED]" : "";
            output += `  • ${formatItem(itemName)}${equipped}`;
            if (item) {
                output += ` - ${item.type}`;
                if (item.bonus) output += ` (+${item.bonus})`;
            }
            output += "\n";
        }

        return output;
    }

    useItem(itemName, playerState) {
        // Find matching item ID in inventory
        const matchedId = findMatchingId(itemName, playerState.inventory);
        if (!matchedId) {
            return { success: false, message: `You don't have ${itemName}.` };
        }

        const item = this.items[matchedId];
        if (!item) {
            return { success: false, message: `Unknown item: ${matchedId}` };
        }

        // Handle different item types
        if (item.type === 'potion') {
            return this.usePotion(item, matchedId, playerState);
        } else if (item.type === 'weapon' || item.type === 'armor') {
            return this.equipItem(item, matchedId, playerState);
        } else if (item.type === 'key' || item.type === 'quest') {
            return {
                success: true,
                message: `The ${formatItem(matchedId)} is a special item. It will be used automatically when needed.`
            };
        } else {
            return {
                success: false,
                message: `You can't use ${formatItem(matchedId)} right now.`
            };
        }
    }

    usePotion(item, itemName, playerState) {
        if (item.effect === 'heal') {
            const healAmount = item.power || 20;
            const oldHp = playerState.hp;
            playerState.hp = Math.min(playerState.maxHp, playerState.hp + healAmount);
            const actualHeal = playerState.hp - oldHp;

            // Remove potion from inventory
            const index = playerState.inventory.indexOf(itemName);
            playerState.inventory.splice(index, 1);

            return {
                success: true,
                message: `✨ You drink the ${formatItem(itemName)} and recover ${actualHeal} HP!\n❤️  HP: ${playerState.hp}/${playerState.maxHp}`
            };
        }

        return { success: false, message: `The ${formatItem(itemName)} has no effect.` };
    }

    equipItem(item, itemName, playerState) {
        if (!playerState.equipment) {
            playerState.equipment = {};
        }

        const slot = item.type; // 'weapon' or 'armor'
        const currentEquipped = playerState.equipment[slot];

        if (currentEquipped === itemName) {
            return { success: false, message: `${itemName} is already equipped.` };
        }

        playerState.equipment[slot] = itemName;

        // Update stats
        if (slot === 'weapon') {
            playerState.attack = (playerState.baseAttack || 5) + (item.bonus || 0);
        } else if (slot === 'armor') {
            playerState.defense = (playerState.baseDefense || 0) + (item.bonus || 0);
        }

        let message = `⚔️  You equip the ${formatItem(itemName)}.`;
        if (currentEquipped) {
            message += ` (unequipped ${formatItem(currentEquipped)})`;
        }

        return { success: true, message };
    }

    isEquipped(itemName, playerState) {
        if (!playerState.equipment) return false;
        return Object.values(playerState.equipment).includes(itemName);
    }

    examineItem(itemName, playerState) {
        // Try to find in inventory first, then in all items
        let matchedId = findMatchingId(itemName, playerState.inventory);
        if (!matchedId) {
            // Try to find in all available items
            matchedId = findMatchingId(itemName, Object.keys(this.items));
        }
        
        if (!matchedId) {
            return { success: false, message: `Unknown item: ${itemName}` };
        }

        const item = this.items[matchedId];
        if (!item) {
            return { success: false, message: `Unknown item: ${matchedId}` };
        }

        let output = `🔍 ${formatItem(matchedId)}\n\n${item.description}\n`;
        output += `\nType: ${item.type}`;

        if (item.bonus) {
            output += `\nBonus: +${item.bonus}`;
        }

        if (item.power) {
            output += `\nPower: ${item.power}`;
        }

        if (item.value) {
            output += `\nValue: ${item.value} gold`;
        }

        return { success: true, message: output };
    }
}

