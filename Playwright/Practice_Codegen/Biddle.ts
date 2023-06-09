import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/chrome-extensions');
  await page.getByPlaceholder('Enter Email Address').click();
  await page.getByPlaceholder('Enter Email Address').fill('ashish.asgola@zeuslearning.com');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('33e37h4*M3M8');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://staging-tgo-admin.testgenius.com/super-admin');
  await page.getByRole('tab', { name: 'Test Batteries' }).click();
  await page.getByRole('button', { name: ' Create Test Battery This function allows system administrators to create a battery of tests (formerly known as AutoTest Codes) that will work on any Windows or Apple computer.' }).locator('a').click();
  await page.getByRole('button', { name: 'Cancel' }).getByRole('button', { name: 'Cancel', exact: true }).filter({ hasText: 'Cancel' }).click();
});