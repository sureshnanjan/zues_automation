import { test, expect } from '@playwright/test';

test('Click on AB testing verify navigation', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Click the get started link.
  await page.locator("xpath=//a[text()='A/B Testing']").click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*abtest/);

  // Expect a page header "to contain" a substring.
  await expect(page.locator("xpath=//div[@class='example']//h3")).toHaveText('A/B Test Control');
});
