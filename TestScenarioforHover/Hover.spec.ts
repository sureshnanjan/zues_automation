import { test, expect } from '@playwright/test';
import { Hovers } from '../../training/playwrightwork/Hover';


test('Position of header, description and images', async ({ page }) => {

const Object = new Hovers(page);     
await Object.goto();                      
await Object.LocateElements();             

});
  
test('Hover each image and check the data', async ({ page }) => {
  
    const Object = new Hovers(page);     
    await Object.goto();                      
    await Object.HoverandCheck();  
});
  
   