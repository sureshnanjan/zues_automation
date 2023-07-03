import { test, expect } from '@playwright/test';

test('Navigate to HomePage', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  
  //Expect total 44 hyperlink on HomePage
  expect(await page.locator('li').count()).toBe(44);
});