import { test, expect } from '@playwright/test';



test('Access Resource without login and then login to score a test', async ({ page }) => {
  await page.goto('https://learningexpresshub.com/');
  await page.getByRole('heading', { name: 'High School Equivalency Center' }).click();
  await page.getByRole('link', { name: 'Prepare for the GED® Test' }).click();
  await page.getByRole('group', { name: 'Reasoning through Language Arts' }).getByRole('link', { name: 'Practice Tests' }).click();
  await page.getByRole('link', { name: ' Sign In or Register to Begin' }).first().click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('mrunal08@zeuslearning.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Password@123');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.locator('#start-test-btn-0').click();
  await page.goto('https://www.learningexpresshub.com/ProductEngine/player/index.html#/testEngine/learningexpresslibrary/hsequivalencycenter/introduction/2096a9aa-e868-4ffc-ad0e-bbd81d3ba0c6/yes');
  await page.getByRole('button', { name: ' Start Test' }).click();
  await page.getByText('to discuss the programs Mrs. Obama began with the goal of inspiring kids to eat ').click();
  await page.locator('#nextButton').click();
  await page.getByText('spend an evening teaching her children how to cook dinner.').click();
  await page.locator('#nextButton').click();
  await page.getByRole('listitem', { name: 'Thank you for protecting our environment by promoting renewable energy sources that will power our country for generations to come' }).click();
  await page.getByRole('listitem', { name: 'It rained a couple of days. Thank you.' }).click();
  await page.getByRole('listitem', { name: 'It rained a couple of days. Thank you.' }).click();
  await page.getByRole('listitem', { name: 'It rained a couple of days. Thank you.' }).click();
  await page.getByRole('button', { name: ' Score My Test' }).click();
  await page.getByRole('button', { name: 'Score', exact: true }).click();
  await page.goto('https://www.learningexpresshub.com/ProductEngine/player/index.html#/testEngine/learningexpresslibrary/hsequivalencycenter/scoreReport/4068a158-f861-11ed-a53e-79cf92971be9');
});