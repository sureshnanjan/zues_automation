import { test, expect } from '@playwright/test';
import { DropdownPage } from '../PageObjects/dropdownPO';
 
test('Dropdown page to select first option', async ({page}) => {

  const Dropdown = new DropdownPage (page);
  await Dropdown.herokupage();
  await Dropdown.dropdownclick();
  await Dropdown.checkdropdownPage();
  await Dropdown.dropdownlistoptions();
 /**await Dropdown.checkdropdownlistoptions();*/
  await Dropdown.selectfirstoption();
  await Dropdown.checkfirstoptionasselected();

})
