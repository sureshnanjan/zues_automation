import { test, expect } from '@playwright/test';

test('Opening the required algo', async ({ page }) => {

const AlgoNum = 'math35871';

  await page.goto('https://gibbs:review@gibbs.aleks.com');
  await page.getByLabel('Login Name:').click();
  await page.getByLabel('Login Name:').fill('mdodiya');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('zeus@123');
  await page.getByLabel('Password:').press('Enter');
  await page.locator('input[name="debugItemInput"]').click();
  await page.waitForTimeout(3000);
  await page.locator('input[name="debugItemInput"]').fill(AlgoNum);
  await page.locator('input[name="debugItemInput"]').press('Enter');
  await page.waitForTimeout(3000);

});

test('Opening the required algo', async ({ page }) => {

await page.frameLocator('iframe[title="content"]').locator('#ansed_input_formed_innerEditor_0_formed_I1').click();
await page.frameLocator('iframe[title="content"]').locator('#ansed_input_formed_innerEditor_0_formed_I1').press('Control+a');

});