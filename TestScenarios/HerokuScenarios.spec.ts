import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { BrokenImagePage } from '../PlaywrightImplementation/BrokenImagePage';
test('Checking First Image', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage();
  
    // Act
    hompepage.visit('Broken Image');
    const bipage = new BrokenImagePage(page);

    // Assert
    expect(result).toBeEqueal(44);

  });