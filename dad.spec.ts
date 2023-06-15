import { expect, Locator, Page, test } from '@playwright/test';

test('Position of element A', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');    /*Load the drag and drop page*/ 
    const blockA = await page.locator('#column-a');                         /*Locate Box A*/ 
    const Abox = await blockA.boundingBox();                                /*Get x, y, width and height of Box A*/ 
    const AboxXCoordinate = 155;                                            /*Declare required x co-ordinate for box A*/ 
    const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/ 
    await expect(Abox?.x).toBe(AboxXCoordinate);                            /*Check for x co-ordinate*/ 
    await expect(Abox?.height && Abox.width).toBe(length);                  /*Check for height and width of box*/ 

  });


  test('Position of element B', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');    /*Load the drag and drop page*/
    const blockB = await page.locator('#column-b');                         /* Locate Box B*/
    const Bbox = await blockB.boundingBox();                                /*Get x, y, width and height of Box B*/
    const BboxXCoordinate = 370;                                            /*Declare required x co-ordinate for box B*/
    const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/
    await expect(Bbox?.x).toBe(BboxXCoordinate);                            /*Check for x co-ordinate*/
    await expect(Bbox?.height && Bbox.width).toBe(length);                  /*Check for height and width of box*/

  });


  