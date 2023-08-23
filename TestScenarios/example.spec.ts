import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';

test('has title', async ({ page, context }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

const collection = readetriedfromExcel()
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('Checking Image 1 is correcltly loaded', async ({ page }) => {
 
});
