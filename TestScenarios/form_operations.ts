import {IFormAuthentication} from '../Operations/IFormAuthentication';
import { test, expect, type Page } from '@playwright/test';


test('Heroku App Login Page Heading is correct',async ({ page }) => {
    // Arrange 
    const expectedHeading = 'Login Page'; 
    await page.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  // #content > h1
  // Act 
  const result = await page.getByRole('heading',{ name: 'Login Page' }).innerText(); 
  await expect(page.locator('.heading')).toHaveText('Login Page'); 
  //await expect(page.locator('.status')).toHaveText('Submitted');
  
  // Assert
  expect(result).toBe(expectedHeading); 
});

test('Verify that help text is present on login page',async ({ page }) => {
  // Arrange 
  const expectedHeading = 'Login Page'; 
  await page.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
// #content > h1
// Act 
const result = await page.getByRole('heading',{ name: 'Login Page' }).innerText(); 
await expect(page.locator('.heading')).toHaveText('Login Page'); 
//await expect(page.locator('.status')).toHaveText('Submitted');

// Assert
expect(result).toBe(expectedHeading); 
});
test('Helptext should be present on the page',async ({ page }) => {
}
)

test('Username field should be present on the page',async ({ page }) => {

  await page.checkFormComponents,{name:'Username'}
})

test('Password field should be present on the page',async ({ page }) => {
  await page.checkFormComponents,{name:'Password'}
})

test('Enter correct username',async ({ page }) => {
  page.enterUsername("tomsmith");

})

test('Enter correct password',async ({ page }) => {
  page.enterPassword("SuperSecretPassword!");

})

test('Verify that user is logged in correctly on entering correct credentials',async ({ page }) => {
  page.enterUsername("tomsmith");
  page.enterPassword("SuperSecretPassword!");
  page.clickLoginButton;
  expect.checkPageHeading('Secure Area')
})
test('Verify text after successful login', async({page})=>{
  page.enterUsername("tomsmith");
  page.enterPassword("SuperSecretPassword!");
  page.checkstring('Welcome to the Secure Area. When you are done click logout below.');
})

test('Verify that user is not able to log in on entering incorrect credentials',async ({ page }) => {
  page.enterUsername("abc");
  page.enterPassword("SuperSecretPassword!");
  page.clickLoginButton;
  expect.checkFlashErrorMessage('Your username is invalid!')

})
test('To verify flash message for login with incorrect or empty input',async ({ page }) => {
  page.enterUsername("");
  page.enterPassword("");
  page.clickLoginButton;
  expect.checkFlashErrorMessage('Your username is invalid!')
})

test('To verify flash message after logout',async ({ page }) => {
  page.enterUsername("tomsmith");
  page.enterPassword("SuperSecretPassword!");
  page.click(page.getByRole.button),{name:'Logout'}
  expect.checkFlashSuccessMessage('You logged out of the secure area!')
})