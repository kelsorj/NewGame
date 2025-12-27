import { test, expect } from '@playwright/test';

/**
 * Example test that demonstrates screenshot and trace capture on failure
 * This test intentionally fails to show debugging capabilities
 */
test.describe('Debugging Examples', () => {
  test.skip('Example: This test would fail and show screenshots/traces', async ({ page }) => {
    await page.goto('/');
    
    // This would fail and capture screenshot
    await expect(page.locator('.nonexistent-element')).toBeVisible();
  });

  test('View HTML report after tests', async ({ page }) => {
    await page.goto('/');
    
    // This test passes, but you can view the report with:
    // npm run test:e2e:report
    expect(page).toBeTruthy();
  });
});

