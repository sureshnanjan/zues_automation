import {test, expect} from '@playwright/test';  /*Adding playwright module*/

test('Page have header', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Internet/);
  });