import { test, expect } from '@playwright/test';

test('test with violations', async ({ page }) => {
  await page.goto('https://example.com');

  // VIOLATION: CSS class selector
  const input = page.locator('.bad-selector');
  await input.fill('test');

  // VIOLATION: Hardcoded delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await expect(page).toHaveTitle(/Example/);
});
