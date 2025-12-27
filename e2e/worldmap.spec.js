import { test, expect } from '@playwright/test';

test.describe('World Map Visualization', () => {
    test('should show visited rooms in a grid and highlight current position', async ({ page }) => {
        await page.goto('/');

        // Join game
        await page.fill('input[placeholder="Enter your name, adventurer..."]', 'Gandalf');
        await page.click('button:has-text("Begin Adventure")');

        // Initial room (Bag End) should be on map
        const mapGrid = page.locator('.map-grid');
        await expect(mapGrid).toBeVisible();
        await expect(mapGrid.locator('.is-current')).toBeVisible();
        await expect(mapGrid.locator('.is-current')).toContainText('📍');

        // Move to another room (Hobbiton)
        await page.fill('input.command-input', 'go south');
        await page.keyboard.press('Enter');

        // Wait for update
        await page.waitForTimeout(500);

        // Now there should be one visited room (Bag End) and one current room (Hobbiton)
        await expect(mapGrid.locator('.has-room')).toHaveCount(2);

        // Highlighted room should be the new one
        const currentSlot = mapGrid.locator('.is-current');
        await expect(currentSlot).toContainText('📍');

        // Move again
        await page.fill('input.command-input', 'go east');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(500);

        // Total 3 rooms visited
        await expect(mapGrid.locator('.has-room')).toHaveCount(3);

        // Verify footer text
        await expect(page.locator('.map-footer')).toContainText('Showing 3 discovered locations');
    });
});
