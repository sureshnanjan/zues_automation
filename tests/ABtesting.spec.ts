import { test, expect } from '@playwright/test';

test('Verifying navigation to AB Testing page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  
  // Click the get started link.
  await page.getByRole('link', { name: 'A/B Testing' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
});