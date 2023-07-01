import { test, expect } from '@playwright/test';

import { StatusCodes } from '../../training/playwrightwork/StatusCodes';
test('Position of header, description and images', async ({ page }) => {
const Object = new StatusCodes(page);    

await Object.goto();                      

await Object.LocateElements();            
});

 

test('Click on the buttons and check', async ({ page }) => {

 

    const Object = new StatusCodes(page);    

    await Object.goto();                      

    await Object.ClickandCheck();  

});