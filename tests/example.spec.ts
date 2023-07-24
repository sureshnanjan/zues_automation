import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
})


test('get started link', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  // Expects the URL to contain intro.
  await expect(page).toHaveTitle(/The Internet/);
})

test('Heading of Heroku App', async ({ page }) => {
  //Arrange
  const expectedHeading = 'Welcome to the-internet';

  await page.goto('https://the-internet.herokuapp.com/');
  // Heading 1
  // Act
  const result = await page.getByRole('heading', {name: 'Welcome to the-internet'}).innerText();
  expect(result).toBe(expectedHeading);
  })

  test('To verify ADD ELEMENTS' , async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name: 'Add/Remove Elements'}).click();
    // Get the Add Button
    await page.getByRole('button' , {name: "Add Element"}).click();
    // Assertion
    await expect(page.getByRole('button' , {name: "Delete"})).toHaveCount(1);

  })

  test('To verify REMOVE ELEMENTS' , async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name: 'Add/Remove Elements'}).click();
    // Get the Remove Button
    await page.getByRole('button' , {name: "Delete"}).click();

  })