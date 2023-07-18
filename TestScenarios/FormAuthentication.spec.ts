import {IFormAuthentication} from '../Operations/IFormAuthentication';
import { test, expect, type Page } from '@playwright/test';
import { FormAuth } from '../PlaywrightImplementation/FormAuthenticationPage';


test('Heroku App Login Page Heading is correct',async ({ page }) => {
    // Arrange 
    const formauth= new FormAuth();
    const expectedHeading = 'Login Page'; 
    formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  // #content > h1
  // Act 
 formauth.checkPageHeading(expectedHeading);
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
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.checkFormComponents,{name:'Username'}
})

test('Password field should be present on the page',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.checkFormComponents,{name:'Password'}
})

test('Verify that user is logged in correctly on entering correct credentials',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("tomsmith");
  formauth.enterPassword("SuperSecretPassword!");
  formauth.clickLoginButton;
  expect.checkPageHeading('Secure Area')
})

test('Verify text after successful login', async({page})=>{
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("tomsmith");
  formauth.enterPassword("SuperSecretPassword!");
  formauth.checkstring('Welcome to the Secure Area. When you are done click logout below.');
})

test('Verify that user is not able to log in on entering incorrect username',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("abc");
  formauth.enterPassword("SuperSecretPassword!");
  formauth.clickLoginButton;
  expect.checkFlashErrorMessage('Your username is invalid!')
})

test('Verify that user is not able to log in on entering incorrect password',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("tomsmith");
  formauth.enterPassword("abc");
  formauth.clickLoginButton;
  expect.checkFlashErrorMessage('Your password is invalid!')
})

test('To verify flash message for login with incorrect or empty input',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("");
  formauth.enterPassword("");
  formauth.clickLoginButton;
  expect.checkFlashErrorMessage('Your username is invalid!')
})

test('To verify flash message after logout',async ({ page }) => {
  const formauth= new FormAuth();
  await formauth.gotoFormAuthenticationPage('https://the-internet.herokuapp.com/login');
  formauth.enterUsername("tomsmith");
  formauth.enterPassword("SuperSecretPassword!");
  formauth.clickLoginButton;
  formauth.checkstring('Welcome to the Secure Area. When you are done click logout below.');
  formauth.clickLogoutButton;
  expect.checkFlashSuccessMessage('You logged out of the secure area!')
})