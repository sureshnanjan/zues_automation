import { expect, Locator, Page, test } from '@playwright/test';
test('Position of element A', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const blockA = await page.locator('#column-a');
    const blockB = await page.locator('#column-b');
    const Abox = await blockA.boundingBox();
    const Bbox = await blockB.boundingBox();
    console.log(Abox?.x);
    console.log(Abox?.y);
    console.log(Bbox?.x);
    console.log(Bbox?.y);
    test('Position of element B', async ({ page }) => {

      await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
      const blockB = await page.locator('#column-b');
      const Bbox = await blockB.boundingBox();
      const BboxXCoordinate = 370;
      const BboxYCoordinate = 87.890625;
      var result = 0
      if ( Bbox?.x==BboxXCoordinate &&  Bbox.y == BboxYCoordinate ) {
  
          result =1
      } 
      test.fail(result == 0, "B box not positioned properly");
    });

  
  });
  
   
  
  