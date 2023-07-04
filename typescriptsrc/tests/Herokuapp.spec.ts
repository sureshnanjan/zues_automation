const { test, expect, Page} = require('@playwright/test');
 import { HerokuHomePage } from '../Pages/herokuHomePage';
 import { checkboxPage } from '../Pages/checkboxPage';
 import { dropdownPage } from '../Pages/dropdownPage';
 

test('Launch checkboxs link and verify checkboxes', async ({ page }) => {
   const herokuapp = new HerokuHomePage(page)
;
    const checkbox = new checkboxPage(page)
;
    
    // Visit the Herokuapp Home page
    await herokuapp.visit();

    // Verify the header
    await herokuapp.verifyHeader("Welcome to the-internet");

    // Launch the checkbox link
    await herokuapp.launchLink("Checkboxes");

    // Check a checkbox
    await checkbox.checkCheckbox(1);

    // Verify if the checkbox is checked
    await checkbox.verifyCheckboxStatus(1);

    //Launch Drop down link
    await dropdown.checkDropdown(true);

    //choose option from dropdown
    await selectDropdownOption.checkDropdown(true);
  });