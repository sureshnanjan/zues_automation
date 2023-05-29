import { test, expect } from '@playwright/test';

import { Checkboxes } from '../PageObjects/Checkboxes';

test('Checkboxes functionality', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/'); 
    // Heroku Home page launched
    await page.getByRole('link', { name: 'Checkboxes' }).click();  
    // Checkboxes link clicked
    await expect(page.locator('.heading')).toHaveText('Checkboxes');
    // Checkboxes pages launched
    await page.getByRole('heading', { name: 'Checkboxes' }).click();
    // Heading checked
    await page.getByRole('checkbox').first().check();
    // 1st check box checked
    await page.getByRole('checkbox').nth(1).uncheck();
    // 2nd checkbox unchecked
    await page.getByRole('checkbox').first().uncheck();
    // 1st checkbox unchecked
  });