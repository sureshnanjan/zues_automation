import * as test from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
test.test('Heroku App Test', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage();
  
    // Act
    hompepage.visit();
   
  });