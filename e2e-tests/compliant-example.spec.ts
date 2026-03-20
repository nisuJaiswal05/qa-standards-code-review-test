import { test, expect } from '@playwright/test';

test.describe('Login Flow - Compliant Example', () => {
  test('successful login with valid credentials', async ({ page }) => {
    await page.goto('https://example.com/login');

    // ✅ COMPLIANT: Using data-test-id selector
    const usernameInput = page.locator('[data-test-id="username-input"]');
    await usernameInput.fill('testuser@example.com');

    // ✅ COMPLIANT: Using data-test-id selector
    const passwordInput = page.locator('[data-test-id="password-input"]');
    await passwordInput.fill('securepassword123');

    // ✅ COMPLIANT: Using semantic selector
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    // ✅ COMPLIANT: Using dynamic wait instead of hardcoded delay
    await page.waitForSelector('[data-test-id="dashboard"]');

    // ✅ COMPLIANT: Specific assertion with clear expectation
    await expect(page.locator('[data-test-id="user-greeting"]')).toContainText('Welcome');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('shows error message with invalid credentials', async ({ page }) => {
    await page.goto('https://example.com/login');

    // ✅ COMPLIANT: Reusable selector function
    const getUsernameInput = () => page.locator('[data-test-id="username-input"]');
    const getPasswordInput = () => page.locator('[data-test-id="password-input"]');

    await getUsernameInput().fill('invalid@example.com');
    await getPasswordInput().fill('wrongpassword');

    await page.getByRole('button', { name: 'Login' }).click();

    // ✅ COMPLIANT: Dynamic wait for error message
    await page.waitForSelector('[data-test-id="error-message"]');

    // ✅ COMPLIANT: Clear, specific assertion
    await expect(page.locator('[data-test-id="error-message"]')).toHaveText('Invalid credentials');
  });

  test('password visibility toggle works correctly', async ({ page }) => {
    await page.goto('https://example.com/login');

    const passwordInput = page.locator('[data-test-id="password-input"]');
    const toggleButton = page.locator('[data-test-id="password-toggle"]');

    await passwordInput.fill('visiblepassword');

    // ✅ COMPLIANT: Check initial state
    await expect(passwordInput).toHaveAttribute('type', 'password');

    await toggleButton.click();

    // ✅ COMPLIANT: Dynamic wait for state change
    await page.waitForFunction(() => {
      const input = document.querySelector('[data-test-id="password-input"]') as HTMLInputElement;
      return input.type === 'text';
    });

    await expect(passwordInput).toHaveAttribute('type', 'text');
  });
});
