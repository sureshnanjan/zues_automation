const { test, expect } = require('@playwright/test');
import { CheckboxPage } from "../PlaywrightImplementation/CheckboxPage";

// Test case 01: To verify if the heading displayed is correct
test('Verify the heading of the page', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.checkHeading();
})

// Test case 02: To verify count of checkboxes is two
test('Verify there are two checkboxes present on the page', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.verifyCheckboxOne();
    await herokuappCheckboxPage.verifyCheckboxTwo();
})

// Test case 03: To check the default state of checkbox 1 - unchecked by default
test('Verify the default state of checkbox 1', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.verifyDefaultStatusCheckboxOne();
})

// Test case 04: To check the default state of checkbox 2 - checked by default
test('Verify the default state of checkbox 2', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.verifyDefaultStatusCheckboxTwo();
})

// Test case 05: To check checkbox 1 and verify if it is checked
test('Check checkbox 1 and verify if it is checked', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.checkcheckbox1;
})

// Test case 06: To uncheck checkbox 1 and verify if it is unchecked
test('Uncheck checkbox 1 and verify if it is unchecked', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.uncheckcheckbox1();
})

// Test case 07: To uncheck checkbox 02 and verify if if it unchecked
test('Unheck checkbox 2 and verify if it is unchecked', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.uncheckcheckbox2();
})

// Test case 08: To check checkbox 2 and verify if it is checked
test('Check checkbox 2 and verify if it is checked', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.checkcheckbox2;
})

// Test case 09: Refresh the page to check if the state persists after checking checkbox 1 and unchecking checkbox 2
test('Check checkbox 1, uncheck checkbox2, refresh the page to verify if the state persists ', async ({ page }) => {
    const herokuappCheckboxPage = new CheckboxPage(page)
    await herokuappCheckboxPage.visit();
    await herokuappCheckboxPage.checkcheckbox1;
    await herokuappCheckboxPage.checkcheckbox2;
    await page.reload();
    await herokuappCheckboxPage.verifyDefaultStatusCheckboxOne();
    await herokuappCheckboxPage.verifyDefaultStatusCheckboxTwo();
})


