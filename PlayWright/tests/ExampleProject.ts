import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ssi-azure-cms-staging.zeuslearning.com/login');
  await page.getByLabel('Username/Email ID *').click();
  await page.getByLabel('Username/Email ID *').fill('tahir.pa');
  await page.getByLabel('Password *').fill('Ssiquantum@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  
});

test('CreateUser', async ({ page }) => {
  await page.getByRole('button', { name: 'users' }).click();
  await page.getByRole('button', { name: 'User Roles' }).click();
  await page.getByRole('button', { name: 'Publisher Admins' }).click();
  await page.getByRole('button', { name: 'create new publisher admin' }).click();
});