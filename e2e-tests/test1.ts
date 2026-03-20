import { test, expect } from "@playwright/test";

test("Sample login validation", async ({ page }) => {
  await page.goto("https://example.com");

  // VIOLATION 1: Using a CSS class instead of data-test-id
  const usernameInput = page.locator(".input-field-login");
  await usernameInput.fill("testuser test");

  // VIOLATION 2: Using hardcoded sleep instead of dynamic wait
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  await expect(page).toHaveURL(/dashboard/);
});
