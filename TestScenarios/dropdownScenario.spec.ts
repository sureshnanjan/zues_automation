import { test, expect } from '@playwright/test';
import { DropdownListPage} from "../PlaywrightImplementation/DropdownListPage"

test('Visit dropdown list page', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
});

test('Check heading of Dropdown List page', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.checkHeading('Dropdown List')
});

test('Check Visibility of Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.verifyVisibilityOfDropdown();
});

test('Check placeholder text of Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.checkPlaceholderTextOfDropdown('Please select an option');
});

test('Check options count in Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.verifyOptionsCount(3);
});

test('Select option from Dropdown', async ({ page }) => {
  const dropdownListPage = new DropdownListPage(page);
  await dropdownListPage.gotoDropdownListPage();
  await dropdownListPage.selectOptionFromDropdown('Option 1');
  await dropdownListPage.selectOptionFromDropdown('Option 2');
});
