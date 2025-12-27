// Crafting System - Combine items to create new items
export class CraftingSystem {
    constructor(items) {
        this.items = items;
        this.recipes = this.defineRecipes();
    }

    /**
     * Define crafting recipes
     * Format: { result: 'item_id', ingredients: ['item1', 'item2'], level: minLevel }
     */
    defineRecipes() {
        return {
            // Basic crafting
            rope_bundle: {
                result: 'rope_bundle',
                ingredients: ['rope', 'rope'],
                level: 1,
                description: 'Combine two ropes to make a stronger bundle'
            },
            
            // Weapon crafting
            improved_dagger: {
                result: 'improved_dagger',
                ingredients: ['rusty_dagger', 'whetstone'],
                level: 3,
                description: 'Sharpen a rusty dagger with a whetstone'
            },
            
            enchanted_blade: {
                result: 'enchanted_blade',
                ingredients: ['ancient_blade', 'mithril_ingot', 'elven_rune'],
                level: 10,
                description: 'Forge an enchanted blade with mithril and elven runes'
            },
            
            // Potion crafting
            greater_health_potion: {
                result: 'greater_health_potion',
                ingredients: ['health_potion', 'health_potion', 'athelas'],
                level: 5,
                description: 'Combine two health potions with athelas for a greater potion'
            },
            
            // Armor crafting
            reinforced_armor: {
                result: 'reinforced_armor',
                ingredients: ['leather_armor', 'iron_plates', 'mithril_ingot'],
                level: 8,
                description: 'Reinforce armor with iron and mithril'
            },
            
            // Special items
            light_of_earendil: {
                result: 'light_of_earendil',
                ingredients: ['phial_of_galadriel', 'starlight_crystal'],
                level: 15,
                description: 'Combine phial with starlight to create the Light of Eärendil'
            },
            
            // Ring crafting (advanced)
            ring_of_power: {
                result: 'ring_of_power',
                ingredients: ['gold_ring', 'dragon_scale', 'ancient_rune'],
                level: 20,
                description: 'Forge a ring of power (requires high level)'
            }
        };
    }

    /**
     * Get recipe by result item
     */
    getRecipe(resultItem) {
        for (const [recipeId, recipe] of Object.entries(this.recipes)) {
            if (recipe.result === resultItem) {
                return { id: recipeId, ...recipe };
            }
        }
        return null;
    }

    /**
     * Find recipe that matches given ingredients
     */
    findRecipe(ingredients) {
        const sortedIngredients = [...ingredients].sort();
        
        for (const [recipeId, recipe] of Object.entries(this.recipes)) {
            const sortedRecipe = [...recipe.ingredients].sort();
            if (sortedIngredients.length === sortedRecipe.length &&
                sortedIngredients.every((item, i) => item === sortedRecipe[i])) {
                return { id: recipeId, ...recipe };
            }
        }
        return null;
    }

    /**
     * Attempt to craft an item
     */
    craft(ingredients, playerState) {
        // Check if player has required level
        const recipe = this.findRecipe(ingredients);
        
        if (!recipe) {
            return {
                success: false,
                message: "Those items don't combine into anything useful."
            };
        }

        if ((playerState.level || 1) < recipe.level) {
            return {
                success: false,
                message: `You need to be level ${recipe.level} to craft this item. (You are level ${playerState.level || 1})`
            };
        }

        // Check if player has all ingredients
        const missing = [];
        for (const ingredient of recipe.ingredients) {
            const count = ingredients.filter(i => i === ingredient).length;
            const hasCount = (playerState.inventory || []).filter(i => i === ingredient).length;
            
            if (hasCount < count) {
                missing.push(ingredient);
            }
        }

        if (missing.length > 0) {
            return {
                success: false,
                message: `You don't have all the required ingredients. Missing: ${missing.join(', ')}`
            };
        }

        // Remove ingredients from inventory
        for (const ingredient of recipe.ingredients) {
            const index = playerState.inventory.indexOf(ingredient);
            if (index > -1) {
                playerState.inventory.splice(index, 1);
            }
        }

        // Add result to inventory
        playerState.inventory.push(recipe.result);

        return {
            success: true,
            message: `✨ You successfully craft ${this.items[recipe.result]?.name || recipe.result}!\n${recipe.description}`
        };
    }

    /**
     * Get list of available recipes (that player can see)
     */
    getAvailableRecipes(playerState) {
        const playerLevel = playerState.level || 1;
        const available = [];

        for (const [recipeId, recipe] of Object.entries(this.recipes)) {
            if (playerLevel >= recipe.level) {
                // Check if player has at least one of each ingredient
                const hasIngredients = recipe.ingredients.every(ingredient =>
                    (playerState.inventory || []).includes(ingredient)
                );

                available.push({
                    id: recipeId,
                    ...recipe,
                    canCraft: hasIngredients
                });
            }
        }

        return available;
    }
}

