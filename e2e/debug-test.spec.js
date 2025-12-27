import { test, expect } from '@playwright/test';

/**
 * Test to demonstrate debugging features
 * Uncomment the test to see screenshots/traces in action
 */
test.describe('Debugging Demonstration', () => {
  test('This test passes - no screenshots captured', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  // Uncomment below to see debugging features in action
  // test('This test fails - demonstrates screenshots and traces', async ({ page }) => {
  //   await page.goto('/');
  //   
  //   // This will fail and capture screenshot + trace
  //   await expect(page.locator('.this-element-does-not-exist')).toBeVisible({ timeout: 1000 });
  // });
});

