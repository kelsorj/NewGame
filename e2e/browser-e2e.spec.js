import { test, expect } from '@playwright/test';

/**
 * Browser-based E2E tests
 * Tests the full UI and user experience
 */
test.describe('Browser E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('can join game through UI', async ({ page }) => {
    // Wait for connection
    await expect(page.locator('.status-connected')).toBeVisible({ timeout: 10000 });

    // Enter player name
    await page.fill('input[placeholder*="name"]', 'UITestPlayer');
    
    // Click join button
    await page.click('button:has-text("Begin Adventure")');

    // Should see game display
    await expect(page.locator('.game-display')).toBeVisible();
    
    // Should see welcome message
    await expect(page.locator('.message')).toContainText(/Welcome|Bag End/i);
  });

  test('can send commands through UI', async ({ page }) => {
    // Join game
    await expect(page.locator('.status-connected')).toBeVisible({ timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'CommandTest');
    await page.click('button:has-text("Begin Adventure")');

    // Wait for game to load
    await page.waitForSelector('.command-input', { timeout: 5000 });

    // Send a command
    await page.fill('.command-input', 'look');
    await page.press('.command-input', 'Enter');

    // Should see response
    await expect(page.locator('.message')).toContainText(/Bag End|Hobbiton/i);
  });

  test('player status updates correctly', async ({ page }) => {
    // Join game
    await expect(page.locator('.status-connected')).toBeVisible({ timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'StatusTest');
    await page.click('button:has-text("Begin Adventure")');

    // Wait for sidebar
    await page.waitForSelector('.player-status', { timeout: 5000 });

    // Check initial stats
    await expect(page.locator('.player-status')).toContainText('StatusTest');
    await expect(page.locator('.stat-value')).toContainText('100'); // HP

    // Take an item
    await page.fill('.command-input', 'take walking stick');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    // Check inventory updated
    await expect(page.locator('.inventory-summary')).toContainText('Walking Stick');
  });

  test('world map displays correctly', async ({ page }) => {
    // Join game
    await expect(page.locator('.status-connected')).toBeVisible({ timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'MapTest');
    await page.click('button:has-text("Begin Adventure")');

    // Wait for map
    await page.waitForSelector('.world-map', { timeout: 5000 });

    // Map should be visible
    await expect(page.locator('.world-map')).toBeVisible();
    await expect(page.locator('.map-content')).toContainText(/Map|Journey/i);

    // Move to different rooms
    await page.fill('.command-input', 'go south');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    await page.fill('.command-input', 'go east');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    // Map should update
    await expect(page.locator('.map-content')).toContainText(/Hobbiton|Green Dragon/i);
  });

  test('save and load through UI', async ({ page }) => {
    // Join game
    await expect(page.locator('.status-connected')).toBeVisible({ timeout: 10000 });
    await page.fill('input[placeholder*="name"]', 'SaveUITest');
    await page.click('button:has-text("Begin Adventure")');

    // Take item and move
    await page.fill('.command-input', 'take walking stick');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    await page.fill('.command-input', 'go south');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    // Save
    await page.fill('.command-input', 'save');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    // Should see save confirmation
    await expect(page.locator('.message')).toContainText(/saved|success/i);

    // Move more
    await page.fill('.command-input', 'go east');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(500);

    // Load
    await page.fill('.command-input', 'load');
    await page.press('.command-input', 'Enter');
    await page.waitForTimeout(1000);

    // Should see load confirmation and be back at previous location
    await expect(page.locator('.message')).toContainText(/loaded|Welcome/i);
  });
});

