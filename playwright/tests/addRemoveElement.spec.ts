import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../PageObjects/addRemoveElementsPage';

test('Add Element button is present on the page', async ({ page }) => {
  const addRemoveElementsPage = new AddRemoveElementsPage(page);
  await addRemoveElementsPage.goto();
  await expect(addRemoveElementsPage.addElementButton).toBeVisible();
});

test('When the user clicks on the Add element button then an element should get added', async ({ page }) => {
  const addRemoveElementsPage = new AddRemoveElementsPage(page);
  await addRemoveElementsPage.goto();
  await addRemoveElementsPage.addElement();
  await expect(addRemoveElementsPage.deleteElementButton).toBeVisible();
});

test('When the user clicks on the delete element button then the element shold get deleted from the page', async ({ page }) => {
  const addRemoveElementsPage = new AddRemoveElementsPage(page);
  await addRemoveElementsPage.goto();
  await addRemoveElementsPage.addElement();
  await addRemoveElementsPage.deleteElement();
  await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(0)
});
