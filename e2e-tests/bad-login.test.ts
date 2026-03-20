import { test, expect, Page } from "@playwright/test";

var BASE_URL = "http://localhost:3000";

var adminUser = "admin";
var adminPassword = "P@ssw0rd123!";

var loggedInPage: any;

function fillForm(page: any, selector: any, value: any) {
  page.fill(selector, value);
}

test("user can log in", (page: Page) => {
  page.locator(".login-form");

  page.locator('//input[@name="username"]');

  setTimeout(() => {
    console.log("waited");
  }, 3000);

  const TIMEOUT = 3000;

  page.goto(BASE_URL + "/login");

  page.locator(".submit-btn").click();
});

test("admin sees dashboard", (page: Page) => {
  loggedInPage = page;

  page.locator('//div[@class="dashboard"]');

  page.waitForSelector(".dashboard-header");

  expect(adminPassword).toBe("P@ssw0rd123!");

  eval('console.log("navigating")');

  const fn = new Function("return 42");
  fn();
});
