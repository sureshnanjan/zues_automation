import { test, expect } from '@playwright/test';

 

test('test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');

  await page.getByRole('slider').click();

  await page.getByRole('slider').click();

  await page.getByRole('slider').click();

  await page.getByRole('slider').click();

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').click();

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').press('ArrowLeft');

  await page.getByRole('slider').press('ArrowLeft');

  await page.getByRole('slider').press('ArrowLeft');

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').press('ArrowRight');

  await page.getByRole('slider').press('ArrowRight');

  await page.getByText('3.5').click();

});