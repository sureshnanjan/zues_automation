import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
test('Heroku App Test', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage(page);
  
    // Act

    hompepage.visitPage('https://the-internet.herokuapp.com');
    const result = HomePage.getExampleCount();

    // Assert
    expect(result).toEqual(44);

  });