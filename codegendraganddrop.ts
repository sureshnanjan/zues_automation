import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Drag and Drop' }).click();
  await page.locator('#column-a').click();
  await page.locator('#column-b').click();
});

test('Position of element B', async ({ page }) => {
  
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  
  });