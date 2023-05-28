import { test, expect } from '@playwright/test';
import { visitPage } from '../../pageObjects/Homepage';
import { Enable } from '../../pageObjects/dynamic_controls/Enable';
import {FormAuthPage} from '../../pageObjects/Form_Auth'
import { Checkbox } from '../../pageObjects/Checkbox';
import { removeAddCheckbox } from '../../pageObjects/dynamic_controls/Remove_addCheckbox';

/**
 * Test case for enabling and disabling input fields.
 *
 * @param {import('@playwright/test').Page} page - The Playwright test page.
 */
test('enable', async ({ page }) => {

    const button = new Enable(page)
    const visit = new visitPage(page)

    /**
   * Visits the page and performs necessary actions to enable and disable input fields.
   */
    await visit.visitPage();
    await button.Checkheadings();
    await button.enableinput();
    await button.disableInput();
});
 /**
    * Test case for login functionality.
    *
    * @param {import('@playwright/test').Page} page - The Playwright test page.
    */
  
test('Login', async ({ page }) => {

    const visit = new visitPage(page)
    const Login = new FormAuthPage(page)
    /**
    * Visits the page and performs necessary actions to login and logout.
    */
    await visit.visitPage();
    await Login.checkheading();
    await Login.login('tomsmith', 'SuperSecretPassword!');
    await Login.logout();
  });

    /**
    * Test case for checkbox functionality.
    *
    * @param {import('@playwright/test').Page} page - The Playwright test page.
    */
  test('checkbox', async ({ page }) => {

    const visit = new visitPage(page)
    const check = new Checkbox(page)
    /**
    * Visits the page and performs necessary actions to interact with checkboxes.
    */
    await visit.visitPage();
    await check.checkboxes();
    await check.checkheading();

  });
  test('remove/add', async ({ page }) => {

    const visit = new visitPage(page)
    const remove = new removeAddCheckbox(page)
    /**
    * Visits the page and performs necessary actions to interact with checkboxes.
    */
    await visit.visitPage();
    await remove.checkHeading();
    await remove.removeCheckbox();

  });
    
