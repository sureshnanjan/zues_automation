import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
test('Heroku HomePage Test', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage();
  
    // Act
    hompepage.visit();
    const result = HomePage.getExampleCount();

    // Assert
    expect(result).toBeEqueal(44);

  });