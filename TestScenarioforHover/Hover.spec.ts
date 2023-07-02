import { test, expect } from '@playwright/test';
import { Hovers } from '../../training/playwrightwork/Hover';


test('Position of header, description and images', async ({ page }) => {

const Object = new Hovers(page);     //Create an instance of the page object  
await Object.goto();                 // Call function that can go to URL of Hover page        
await Object.LocateElements();       //Call function that can check if page contains header, subheader and 3 images 

});
  
test('Hover each image and check the data', async ({ page }) => {
  
    const Object = new Hovers(page);   //Create an instance of the page object  
    await Object.goto();               // Call function that can go to URL of Hover page      
    await Object.HoverandCheck();      //Call function that can hover over each image and find its name and profile
});
  
   
