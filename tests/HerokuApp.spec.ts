import { test, expect } from '@playwright/test';
import { HerokuHomePage } from '../PageObjects/HerokuHomePage';
import { IHomePage } from '../Operations/IHomePage';

test('get started with HerokuHomePage', async ({ page }) => {
  const checkHeading = new HerokuHomePage(page);
  await page.goto('https://the-internet.herokuapp.com/'); 
// Act
  // Expects the page to contain Heading.
  const pageHeading = await page.getByRole('heading',{name: 'Welcome to the-internet'});
  await expect(page.locator('.heading')).toHaveText('Welcome to the-Internet');
  // Assert

  expect(pageHeading).toBe(checkHeading);

  // Act
  // Expects the page to contain Heading.
  const subHeading = await page.getByRole('heading',{name: 'Available Examples'}).innerText();
  await expect(page.locator('.heading')).toHaveText('Available Examples');
  // Assert

  expect(subHeading).toBe(checkHeading);


});