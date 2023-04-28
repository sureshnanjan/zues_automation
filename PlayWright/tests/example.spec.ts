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

test('TestingHerokuappTitle', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Get the Heading.
 const Output= await page.getByRole('heading',{name: 'Welcome to the-internet'} ).innerText();
 // Storing the expected text in an variable
 const ExpectedHeading = 'Welcome to the-internet';
 // Compare the value
  expect(Output).toBe(ExpectedHeading);

});
test('TestingHerokuappLinkLaunch', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Click the get started link.
  await page.getByRole('link', { name: 'A/B Testing' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
});