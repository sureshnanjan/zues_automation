import { test, expect } from '@playwright/test';
import FormAuthentication from "../pages/formauthentication"

test('Test form authentication - success', async ({ page }) => {
    const formauthentication = new FormAuthentication(page);
    await formauthentication.vistHomePage();
    await formauthentication.clickFormAutheticationLink();
    await formauthentication.enterUsername("tomsmith");
    await formauthentication.enterPassword("SuperSecretPassword!");
    await formauthentication.clickLoginButton();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
})

test('Test form authentication - failure', async ({ page }) => {
    test.setTimeout(120000);
    const formauthentication = new FormAuthentication(page);
    await formauthentication.vistHomePage();
    await formauthentication.clickFormAutheticationLink();
    await formauthentication.enterUsername("");
    await formauthentication.enterPassword("");
    await formauthentication.clickLoginButton();
    await expect(page.locator('//*[@id="flash"]')).toHaveText('Your password is invalid!');
})