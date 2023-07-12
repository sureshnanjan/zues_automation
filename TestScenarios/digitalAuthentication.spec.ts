const { test, expect } = require('@playwright/test');
import { digestAuthenticationPageWithInterfaceImpl } from '../PlaywrightImplementation/DigitalAuthentication';


test('Visiting digest authentication page', async ({ page }) => {
    const herokuAppBrokenImg = new digestAuthenticationPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.loginPage();
});