import { test, expect } from '@playwright/test';
import { EntryAddObject } from '../PlaywrightImplementation/EnteryAddObject';
import { HomePage } from '../PlaywrightImplementation/HomePage';

/**
 * Test suite for the Entry Ad Page.
 */

test.describe('Entry Ad Page', () => {

  /**
   * Runs before each test case to set up the necessary conditions.
   * Navigates to the Entry Ad page.
   * @param page The Playwright page object.
   */

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    // Navigate to the Entry Ad page
    await homePage.gotohomepage();
  });

   /**
   * Test case to verify if the heading of the Entry Ad page is correct.
   * @param page The Playwright page object.
   */

  test('To verify if the heading is correct', async ({ page }) => {
    const entryAdPage = new EntryAddObject(page);
    await entryAdPage.verifyheading("Entry Ad");
  });

  /**
   * Test case to verify if the content of the Entry Ad page is correct.
   * @param page The Playwright page object.
   */

  test('To verify if the content is correct', async ({ page }) => {
    const entryAdPage = new EntryAddObject(page);
    await entryAdPage.verifycontent(
      'Displays an ad on page load.',
      'If closed, it will not appear on subsequent page loads.',
      'To re-enable it, click here.'
    );
  });

  /**
   * Test case to open the modal window by clicking the "click here" button.
   * @param page The Playwright page object.
   */

  test('To open model window by clicking "click here" button', async ({ page }) => {
    const entryAdPage = new EntryAddObject(page);

    await entryAdPage.verifyclickhere();
  });

   /**
   * Test case to verify the correct content in the modal pop-up.
   * @param page The Playwright page object.
   */

  test('To verify the correct content in the model pop-up', async ({ page }) => {
    const entryAdPage = new EntryAddObject(page);

    await entryAdPage.verifyclickhere();
    await entryAdPage.verifypopup(
      'THIS IS A MODAL WINDOW',
      "It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker)."
    );
  });

  /**
   * Test case to close the modal window by clicking the close button.
   * @param page The Playwright page object.
   */

  test('To close model window by clicking close button', async ({ page }) => {
    const entryAdPage = new EntryAddObject(page);

    await entryAdPage.verifyclickhere();
    await entryAdPage.verifyclosebutton();
  });

});

