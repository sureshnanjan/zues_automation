import { test } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { response } from '../PlaywrightImplementation/SlowResourcesI';

test('Click on the link text', async ({ page }) => {
    const Homepage = new HomePage(page);
    test.setTimeout(200000);
    await Homepage.visit();
    response.goto();
  });

test('Check header text', async () => {
    response.checkheading();
  });

test('Check the content of the page', async () => {
    response.checkcontent();
});
