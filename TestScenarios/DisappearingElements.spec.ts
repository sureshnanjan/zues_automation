import { test, expect } from '@playwright/test';

import { DisappearingElement } from '../../training/playwrightwork/DisapperaingElement';





test('Check Page content', async ({ page }) => {




const Object = new DisappearingElement(page);    

await Object.goto();                      

await Object.ValidatePageElements();            




});

 

test('Reload and check page content', async ({ page }) => {

 

    const Object = new DisappearingElement(page);    

    await Object.goto();                      

    await Object.ReloadandValidatePageElements();

});