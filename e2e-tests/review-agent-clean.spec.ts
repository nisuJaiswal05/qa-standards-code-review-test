import { test, expect } from "@playwright/test";

test("user signs in with stable selectors and dynamic waits", async ({
  page,
}) => {
  const appUrl = process.env.E2E_APP_URL;
  const testUser = process.env.E2E_TEST_USER;
  const testPassword = process.env.E2E_TEST_PASSWORD;

  if (!appUrl || !testUser || !testPassword) {
    throw new Error(
      "Missing required env vars: E2E_APP_URL, E2E_TEST_USER, E2E_TEST_PASSWORD",
    );
  }

  await page.goto(appUrl);

  await expect(page.locator('[data-test-id="login-form"]')).toBeVisible();

  await page.locator('[data-test-id="username-input"]').fill(testUser);
  await page.locator('[data-test-id="password-input"]').fill(testPassword);
  await page.locator('[data-test-id="submit-button"]').click();

  await expect(page.locator('[data-test-id="dashboard-header"]')).toBeVisible();
});
