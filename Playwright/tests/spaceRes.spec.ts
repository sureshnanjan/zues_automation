import { test, expect } from '@playwright/test';
 test ('Verify Successful Login', async ({ page }) => {
      await page.goto('https://ogyulzod7y7uc19a-test.modolabs.net/english/kurogo_login/login?_kgologin_from_url=kgo%3A%2F%2Fweb%2Fattendance_space_slots%2Findex%3F_kgourl_navigationparent%3Dcurrent&_kgologin_authority=okta_yml&_kgologin_action=login');
      await page.getByLabel('Login (email address): *').click();
        await page.getByLabel('Login (email address): *').fill('jamima.nasir@zeuslearning.com');
        await page.getByLabel('Password *').click();
        await page.getByLabel('Password *').fill('Modotest123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await expect(page.getByRole('heading', { name: 'In-Office Schedule' })).toBeVisible;
      });
  test('Verify desk reservation', async ({ page }) => {

        await page.goto('https://ogyulzod7y7uc19a-test.modolabs.net/english/kurogo_login/login?_kgologin_from_url=kgo%3A%2F%2Fweb%2Fattendance_space_slots%2Findex%3F_kgourl_navigationparent%3Dcurrent&_kgologin_authority=okta_yml&_kgologin_action=login');
        await page.getByLabel('Login (email address): *').click();
        await page.getByLabel('Login (email address): *').fill('jamima.nasir@zeuslearning.com');
        await page.getByLabel('Password *').click();
        await page.getByLabel('Password *').fill('Modotest123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('button', { name: 'Make a booking' }).click();
        await page.getByRole('button', { name: 'List' }).click();
        await page.getByText('Desk: FLEX SEAT - 01373 62130_01_TTS TECH team').click();
        await page.getByRole('button', { name: 'Book' }).click();
        await expect(page.getByText('DLF CYBERCITY / 3 / 62130_01_TTS TECH Desk FLEX SEAT - 01373 ☆')).toBeVisible();
    });
    test('test', async ({ page }) => {

      await page.goto('https://ogyulzod7y7uc19a-test.modolabs.net/english/kurogo_login/login?_kgologin_from_url=kgo%3A%2F%2Fweb%2Fattendance_space_slots%2Findex%3F_kgourl_navigationparent%3Dcurrent&_kgologin_authority=okta_yml&_kgologin_action=login');
      await page.getByLabel('Login (email address): *').click();
      await page.getByLabel('Login (email address): *').fill('jamima.nasir@zeuslearning.com');
      await page.getByLabel('Password *').click();
      await page.getByLabel('Password *').fill('Modotest123');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('button', { name: 'Details' }).click();
      await expect(page.getByText('DLF CYBERCITY (INDIA) 3 62130_01_TTS TECH Desk FLEX SEAT - 01373')).toBeVisible();
      await expect(page.getByText('Desk: FLEX SEAT - 01373')).toBeVisible();
  });
  
  test('Verify Reservation Cancellation', async ({ page }) => {
  
      
      page.on('dialog', dialog => dialog.accept());
      await page.getByRole('button', { name: 'Cancel' }).click();
      await expect(page.getByRole('button', { name: 'Make a booking' })).toBeVisible();
  
  });
  
  