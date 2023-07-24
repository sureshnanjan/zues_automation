import { test, expect } from '@playwright/test';
import { onLoadError } from '../PlaywrightImplementation/JavaScriptOnloadEventError';

test('Visit JavaScriptOnloadEventError page', async ({ page }) => {
    const JavaScriptOnloadEventError = new onLoadError(page);
    await JavaScriptOnloadEventError.visit();
});

test('Verify the text on the page ', async ({page}) => {
    const JavaScriptOnloadEventError = new onLoadError(page);
    await JavaScriptOnloadEventError.visit();
    await JavaScriptOnloadEventError.checkContent("This page has a JavaScript error in the onload event. This is often a problem to using normal Javascript injection techniques.")

});