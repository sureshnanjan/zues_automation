import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../../PageObject/checkbox';
import { HomePage } from '../../PageObject/homepage';
import { FormAuthPage } from '../../PageObject/formauth';
import { RedirectionPage } from '../../PageObject/redirection';


test('Click on AB testing verify navigation', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Click the get started link.
  await page.locator("xpath=//a[text()='A/B Testing']").click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*abtest/);

  // Expect a page header "to contain" a substring.
  await expect(page.locator("xpath=//div[@class='example']//h3")).toHaveText('A/B Test Control');
});

/**
 * Test case for checkboxes functionality.
 */
test('Test Checkboxes Functionality', async ({ page }) => {
  // Create an instance of the page object
  const checkboxesPage = new CheckboxPage(page);
  const homePage = new HomePage(page);

  // Navigate to the checkboxes page
  await homePage.gotoHomepage();

  // Perform checkbox actions on the Checkboxes page
  await checkboxesPage.clickCheckboxes();

  // Assert the heading text on the Checkboxes page
  await checkboxesPage.assertHeadingText();
});

/**
 * Test case for form authentication functionality.
 */
test('Test Form Authentication Functionality', async ({ page }) => {
  // Create an instance of the page object
  const homePage = new HomePage(page);
  const formAuthPage = new FormAuthPage(page);

  // Navigate to the home page
  await homePage.gotoHomepage();

  // Assert the heading text on the Form Authentication page
  await formAuthPage.assertHeadingText();

  // Log in with valid credentials
  await formAuthPage.login('tomsmith', 'SuperSecretPassword!');

  // Log out from the secure area
  await formAuthPage.logout();
});

/**
 * Test case for redirection functionality.
 */
test('Test Redirection Functionality', async ({ page }) => {
  // Create an instance of the page object
  const homePage = new HomePage(page);
  const redirectionPage = new RedirectionPage(page);

  // Navigate to the home page
  await homePage.gotoHomepage();

  // Assert the headings on the Redirection page
  await redirectionPage.assertHeadings();

  // Go to the next page from the Redirection page
  await redirectionPage.goToNextPage();
});