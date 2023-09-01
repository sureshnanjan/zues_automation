import { test, expect } from '@playwright/test';
import { response } from '../PlaywrightImplementation/SlowResourcesPage';
/**To verify the Slow Response link is clickable */
test('Click on the link text', async ({ page }) => {
    const responsepage = new response(page);
   await responsepage.goto();
  });

/**To verify the Header text available on Slow Response page */
test('Check header text', async ({ page }) => {
  const responsepage = new response(page);
  await responsepage.checkHeading('Slow Resources');
});

/**To verify the Content displayed on Slow Response page */
test('Check the content of the page', async ({ page }) => {
  const responsepage = new response(page);
  await responsepage.checkContent('At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');
});
