import { test, expect } from '@playwright/test';
import { CheckBox } from '../../training/playwrightwork/mai';


test('Check the checkbox 1', async ({ page }) => {

const checkbox1 = new CheckBox(page);     /* Create an instance of the page object*/
await checkbox1.goto();                      /*Navigate to the URL*/
await checkbox1.checkboxcheck();               /**Check the checkbox 1 */

});

test('Uncheck the checkbox 2', async ({ page }) => {

    const checkbox2 = new CheckBox(page);     /* Create an instance of the page object*/
    await checkbox2.goto();                      /*Navigate to the URL*/
    await checkbox2.checkboxuncheck();               /** Uncheck the checkbox 2*/
    
    });