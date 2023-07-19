import { test, expect } from '@playwright/test';
import { DropdownListPage} from "../PlaywrightImplementation/DropdownListPage"

test('Visit dropdown list page', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
});

test('Verify heading of Dropdown List page', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.checkHeading('Dropdown List')
});

test('Verify visibility of Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.verifyVisibilityOfDropdown();
});

test('Verify placeholder text of Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.checkPlaceholderTextOfDropdown('Please select an option');
});

test('Verify options count in Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.verifyOptionsCount(3);
});

test('Verify option from Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.verifySelectedOptionFromDropdown('Option 1');
  await dropdownListPage.verifySelectedOptionFromDropdown('Option 2');
});


test('Verify that dropdown is closed if user clicks outside dropdown', async ({ page }) => {
  
});