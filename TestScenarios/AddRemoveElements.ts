import { test, expect } from '@playwright/test';
import { AddRemoveElements } from '../PlaywrightImplementation/AddRemoveElements';
import { HomePage } from '../PlaywrightImplementation/HomePage';

test('Visit the page', async ({ page }) => {
  const Homepage = new HomePage();
  const AddRemovePage = new AddRemoveElements();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await AddRemovePage.visit();
  });

  test('Verify the page Heading', async ({ page }) => {
    const Homepage = new HomePage();
  const AddRemovePage = new AddRemoveElements();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await AddRemovePage.visit();
    await AddRemovePage.checkHeading('Add/Remove Elements');
  });

  test('Verify the Functionality to Add Elements', async ({ page }) => {
    const Homepage = new HomePage();
  const AddRemovePage = new AddRemoveElements();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await AddRemovePage.visit();
    //Will check if the given number of elements can be added
    await AddRemovePage.addElements(4);
  });

  test('Verify the Functionality to Remove Elements', async ({ page }) => {
    const Homepage = new HomePage();
  const AddRemovePage = new AddRemoveElements();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await AddRemovePage.visit();
     //Will check if the given number of elements can be removed
    await AddRemovePage.removeElements(2);
  });

  test('Verify the Functionality to check the available elements after adding and removing Elements', async ({ page }) => {
    const Homepage = new HomePage();
  const AddRemovePage = new AddRemoveElements();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await AddRemovePage.visit();
     //Will check if the given number of elements can be added
    await AddRemovePage.addElements(5);
         //Will check if the given number of elements can be removed
    await AddRemovePage.removeElements(3);
     //Will check the number of elements on screen after adding and removing the given number of elements
    await AddRemovePage.availableElements();
  });