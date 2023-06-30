const { test, expect } = require('@playwright/test');
import { digestAuthenticationPageWithInterfaceImpl } from '../PageObjectsPlaywright/DigitalAuthentication';


test('Visiting digest authentication page', async ({ page }) => {
    const herokuAppBrokenImg = new digestAuthenticationPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.loginPage();
});