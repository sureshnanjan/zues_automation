import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('Verify the Page header', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('heading',{name: 'Welcome to the-internet'}).innerText();
  await expect(page.locator('.heading')).toHaveText('Welcome to the-internet');
});