import { test, expect } from '@playwright/test';

test('Heroku Home Page Heading', async ({ page }) => {
    const expectedHeading = 'Welcome to the-internet'
    await page.goto('https://the-internet.herokuapp.com/');
    const result = await page.getByRole('heading', { name : 'Welcome to the-internet' }).innerText();
    expect(result).toBe(expectedHeading);
  });

test('Heroku Home Page Sub-Heading', async ({ page }) => {
    const expectedHeading = 'Available Examples'
    await page.goto('https://the-internet.herokuapp.com/');
    const result = await page.getByRole('heading', { name: 'Available Examples' }).innerText();
    expect(result).toBe(expectedHeading);
});

test('Count of Links on Home Page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const result = await page.getByRole('link').count()
    expect(result).toBe(46);
});