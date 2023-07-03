import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';

test.only('Heroku App Test', async ({ page }) => {

  const Homepage = new HomePage(page);
  //const addRemoveElement = new AddRemoveElements(page);
  test.setTimeout(1200000);
  await Homepage.visit('Add/Remove Element');
  });