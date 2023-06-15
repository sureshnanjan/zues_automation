import { test, expect } from '@playwright/test';
import { DragandDrop } from '../../training/playwrightwork/dad';


test('Position of element A', async ({ page }) => {

const boxA = new DragandDrop(page);     /* Create an instance of the page object*/
await boxA.goto();                      /*Navigate to the URL*/
await boxA.PositionOfA();               /**Check Position of Box A */

});
  
test('Position of element B', async ({ page }) => {
  
const boxB = new DragandDrop(page);     /* Create an instance of the page object*/
await boxB.goto();                      /*Navigate to the URL*/
await boxB.PositionOfB();               /**Check Position of Box A */

});
  
   