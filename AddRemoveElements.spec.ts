import { test, expect } from '@playwright/test';
import { AddRemoveElements } from './AddRemoveElements';


test('Clicking Add Element button', async ({ page }) => {

    const Object = new AddRemoveElements(page);
    await Object.goto();
    await Object.LocateElements();

});

test('Clicking Delete button', async ({ page }) => {

    const Object = new AddRemoveElements(page);
    await Object.goto();
    await Object.ClickandCheck();
});