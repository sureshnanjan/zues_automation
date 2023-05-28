/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

/*test('category implemented ok',async({page})=>{
  //SUT - System under test 
  //AUT - application under test 
  //arrange 
  const cut = new Category('testId','Poorva');
  Category.print();
});*/
/*
test('Heroku app homepage heading is correct', async ({ page }) => {
  const expected_heading = 'Welcome to the-internet';
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  const result= await page.getByRole('heading', { name: 'Welcome to the-internet' }).innerText(); 
  expect(result).toBe(expected_heading);
});
tes
*/
import { test, expect } from '@playwright/test';

//Login as sysadmin
test('test', async ({ page }) => {
  await page.goto('https://staging.bigideasmath.com/BIM/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('sysadmin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('bim');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
//await page.getByRole('button', { name: 'profile and settings' }).click();
//await page.getByRole('menuitem', { name: 'Logout' }).click();
});
//login as teacher and launch subheaders 

test('Launch headers', async ({ page }) => {
  await page.goto('https://staging.bigideasmath.com/BIM/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('bts21.teacher1@zeus.com');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('zeus@123');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.waitForTimeout(19000);
  await page.goto('https://staging.bigideasmath.com/MRL/public/app/#/teacher/dashboard');
  await page.getByRole('link', { name: 'Dynamic Classroom', exact: true }).click();
  await page.getByRole('link', { name: 'Practice' }).click();
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('link', { name: 'Assessments' }).click();
  await page.getByRole('link', { name: 'Class Management' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('.chapter-selector-header').click();
});
