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

