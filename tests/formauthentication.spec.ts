import { test, expect } from '@playwright/test';
import FormAuthentication from "../pages/formauthentication"

test('Test form authentication - success', async ({ page }) => {
    const formauthentication = new FormAuthentication(page);
    await page.goto('https://the-internet.herokuapp.com/');
    await formauthentication.clickFormAutheticationLink();
    await formauthentication.enterUsername("tomsmith");
    await formauthentication.enterPassword("SuperSecretPassword!");
    await formauthentication.clickLoginButton();
})