import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// test('Open Heroku web page and verify heading',async ({ page }) => {

//   await page.goto('https://the-internet.herokuapp.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/The Internet/);

//   // Click the get started link.
//   await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*herokuapp/);
// })

// test('Add an elememt',async ({page}) => {
//   await page.goto('https://the-internet.herokuapp.com/');
//   //Click on the 2nd link
//   await page.getByRole('link', {name: "Add/Remove Elements"}).click()
//   //click on the Add element button 
//   await page.getByRole('button', {name: "Add Element"}).click()
//   //Assert if one delete button is present
//   await expect(page.getByRole('button', {name: "Delete"})).toHaveCount(1)
// })

test('Remove an element',async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
  //Click on the 2nd link
  await page.getByRole('link', {name: "Add/Remove Elements"}).click()
  //click on the Add element button 
  await page.getByRole('button', {name: "Add Element"}).click()
  //Assert if one delete button is present
  await expect(page.getByRole('button', {name: "Delete"})).toHaveCount(1)
  //Remove an element
  await page.getByRole('button', {name: "Delete"}).click()
  //Assert if delete button is removed
  await expect(page.getByRole('button', {name: "Delete"})).toHaveCount(0)
})