import { test, expect } from '@playwright/test';

test.describe('Multiplayer Functionality', () => {
    test('two players can see each other and chat', async ({ browser }) => {
        // Create two independent contexts
        const contextA = await browser.newContext();
        const contextB = await browser.newContext();

        const pageA = await contextA.newPage();
        const pageB = await contextB.newPage();

        pageA.on('console', msg => console.log(`[PAGE A] ${msg.text()}`));
        pageB.on('console', msg => console.log(`[PAGE B] ${msg.text()}`));

        // 1. Join as Player A
        await pageA.goto('/');
        await pageA.fill('input[placeholder="Enter your name, adventurer..."]', 'Aragorn');
        await pageA.click('button:has-text("Begin Adventure")');
        // Wait for server welcome
        await expect(pageA.locator('.game-display')).toContainText('Welcome to Middle Earth, Aragorn!');

        // 2. Join as Player B
        await pageB.goto('/');
        await pageB.fill('input[placeholder="Enter your name, adventurer..."]', 'Legolas');
        await pageB.click('button:has-text("Begin Adventure")');
        // Wait for server welcome
        await expect(pageB.locator('.game-display')).toContainText('Welcome to Middle Earth, Legolas!');

        // 3. Verify Player A sees the join message
        await expect(pageA.locator('.game-display')).toContainText('Legolas has entered the realm!');

        // 4. Verify Online Count
        await expect(pageA.locator('.online-count')).toContainText('👥 2 Online');
        await expect(pageB.locator('.online-count')).toContainText('👥 2 Online');

        // 5. Test 'say' command
        await pageA.fill('input.command-input', 'say Greetings, elf!');
        await pageA.keyboard.press('Enter');
        await expect(pageA.locator('.game-display')).toContainText('You say: "Greetings, elf!"');
        await expect(pageB.locator('.game-display')).toContainText('Aragorn says: "Greetings, elf!"');

        // 6. Test 'look' command visibility
        await pageB.fill('input.command-input', 'look');
        await pageB.keyboard.press('Enter');
        await expect(pageB.locator('.game-display')).toContainText('Players here: Aragorn');

        // 7. Test 'shout' command
        await pageB.fill('input.command-input', 'shout The Beacons are lit!');
        await pageB.keyboard.press('Enter');
        await expect(pageB.locator('.game-display')).toContainText('You shout: "The Beacons are lit!"');
        await expect(pageA.locator('.game-display')).toContainText('📣 Legolas shouts: "The Beacons are lit!"');

        // 8. Player A leaves
        await pageA.close();
        await expect(pageB.locator('.game-display')).toContainText('Aragorn has left the realm.');
        await expect(pageB.locator('.online-count')).toContainText('👥 1 Online');

        await contextA.close();
        await contextB.close();
    });
});
