import { test, expect } from '@playwright/test';

// Test Case for Login
test('Login', async ({ page }) => {
  //Navigates to the website
  await page.goto('https://qa-cms-thinklink.schoolspecialty.com/login');

  // Enter login credentials
  await page.getByLabel('Username/Email ID *').click();
  await page.getByLabel('Username/Email ID *').fill('Tanmay.pa1'); //Enters Username
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Ssiquantum@123'); //Enters password

  // Login button
  await page.getByRole('button', { name: 'Log In' }).click();

  // Assertion
  await expect(page).toHaveURL('https://qa-cms-thinklink.schoolspecialty.com/course/listing');  

});

/*

test('Logout', async ({ page }) => {
 // Logout
 await page.getByRole('button', { name: 'profile' }).click(); //Click on Profile
 await page.getByRole('button', { name: 'Logout' }).click();


 // Assertion
  await expect(page).toHaveURL('https://qa-cms-thinklink.schoolspecialty.com/login');  
});
*/