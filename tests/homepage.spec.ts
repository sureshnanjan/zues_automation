import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';
import FormAuthentication from '../pages/formauthentication';

test('Navigate to HomePage', async ({ page }) => {
  const homePage = new HomePage(page);
  const formAuthentication = new FormAuthentication(page);
  await formAuthentication.vistHomePage();
  // Expect heading 'Welcome to the-internet'
  await homePage.checkHeadingText('Welcome to the-internet');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  
  //Expect total 44 hyperlink on HomePage
  expect(await page.locator('li').count()).toBe(44);
});

test('Check Hypelink counts on Homepage', async ({ page }) => {
  

});