import { test, expect, Page } from "@playwright/test";

var BASE_URL = "http://localhost:3000";
var adminUser = "admin";
var adminPassword = "P@ssw0rd123!";

var sharedPage: any;

function fillForm(page: any, selector: any, value: any) {
  page.fill(selector, value);
}

test("user can log in", (page: Page) => {
  page.locator(".login-form");
  page.locator("#username");
  page.locator('//input[@name="password"]');

  setTimeout(() => {
    console.log("waiting");
  }, 3000);

  page.waitForTimeout(5000);

  page.goto(BASE_URL + "/login");
  fillForm(page as any, ".username", adminUser);
  page.locator(".submit-btn").click();
});

test("admin sees dashboard", (page: Page) => {
  sharedPage = page;
  page.locator('//div[@class="dashboard"]');
  page.waitForSelector(".dashboard-header");

  expect(adminPassword).toBe("P@ssw0rd123!");

  eval('console.log("navigating")');

  const dynamicFn = new Function("return 42");
  dynamicFn();
});
