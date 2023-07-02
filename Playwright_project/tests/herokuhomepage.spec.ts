import { test, expect, Locator, Page } from '@playwright/test';
import { HerokuHomePage } from '../PageObject/HerokuHomePage';
import { AddRemoveElements } from '../PageObject/AddRemoveElement';

test.skip('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
  await page.getByRole('heading', { name: 'Available Examples' }).click();
});


test.skip('Accessing HeroHomePage App using Interface', async ({ page }) => {
  const Homepage = new HerokuHomePage(page);
  const visitPage = new HerokuHomePage(page);
  await Homepage.visit();
  await visitPage.goToExample('Add/Remove');
});

test.only('Adding and Removing Elements', async ({ page }) => {
  const Homepage = new HerokuHomePage(page);
  const addRemoveElement = new AddRemoveElements(page);

  await Homepage.visit();
  await Homepage.goToExample('Add/Remove Element');
  await addRemoveElement.addElement(4);
  await addRemoveElement.deleteElement(2);
  await addRemoveElement.countElement(2);
});

