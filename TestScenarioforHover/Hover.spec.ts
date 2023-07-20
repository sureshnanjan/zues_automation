import { test, expect } from '@playwright/test';
import { Hovers } from '../../training/playwrightwork/Hover2';


test('Position of header, description and images', async ({ page }) => {

const Object = new Hovers(page);     
await Object.goto();    
await Object.verifyHeading();
await Object.verifySubheading();
await Object.verifyImages();                  

});
  
test('Hover each image and check the data', async ({ page }) => {
  
    const Object = new Hovers(page);     
    await Object.goto();                      
    await Object.hoverOnImage(0, 'user1');
    await Object.hoverOnImage(1, 'user2');
    await Object.hoverOnImage(2, 'user3');
    await Object.viewProfile('user1');
    await Object.viewProfile('user2');
    await Object.viewProfile('user3');
    
});    

test('Hover away from image and check', async ({ page }) => {
  
    const Object = new Hovers(page);     
    await Object.goto();                      
    await Object.hoverAwayFromImage(0);  
    await Object.hoverAwayFromImage(1);  
    await Object.hoverAwayFromImage(2);  
});
   
