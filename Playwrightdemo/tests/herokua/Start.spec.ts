import { test, expect } from '@playwright/test';
import { Checkbox_page } from '../../PageObejct/checkbox';
import { home_page } from '../../PageObejct/homepage';
import { FormAuth_Page } from '../../PageObejct/formauth';
import { Redirection_page } from '../../PageObejct/redirection';



/**
 * Test case for checkboxes functionality.
 */
test('This is a test for Checkboxes', async ({ page }) => {
  // Create an instance of the page object
  const checkboxesPage = new Checkbox_page(page);
  const home_Page = new home_page(page);

  // Navigate to the checkboxes page
  await home_Page.gotohomepage();

  // Perform checkbox actions on the Checkboxes page

  await checkboxesPage.boxes();

  // Assert the heading text on the Checkboxes page
  await checkboxesPage.checkheading();
});

/**
 * Test case for form authentication functionality.
 */

test('This is a test for form authentication', async ({ page }) => {
  // Create an instance of the page object
  const home_Page = new home_page(page);
  const formauth_page = new FormAuth_Page(page);

  // Navigate to the home page
  await home_Page.gotohomepage();

  // Assert the heading text on the Form Authentication page
  await formauth_page.checkheading();

  // Log in with valid credentials
  await formauth_page.login('tomsmith', 'SuperSecretPassword!');

  // Log out from the secure area
  await formauth_page.logout();
});

/**
 * Test case for redirection functionality.
 */

test('This is a test for redirection', async ({ page }) => {
  // Create an instance of the page object
  const home_Page = new home_page(page);
  const redirect = new Redirection_page(page);

  // Navigate to the home page
  await home_Page.gotohomepage();

  // Assert the headings on the Redirection page
  await redirect.Checkheadings();

  // Go to the next page from the Redirection page
  await redirect.gotonextpage();
  
});
