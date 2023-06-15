import { expect, Locator, Page, test } from '@playwright/test';

    //Create clas to export
    export class DragandDrop {
    /*Declare variables*/
    readonly page: Page;
    readonly blockA: Locator;
    readonly blockB: Locator;
    
    constructor(page: Page) {
    
    this.page = page;
    this.blockA = page.locator('#column-a'); 
    this.blockB = page.locator('#column-b');
    }
    
    
    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');    /*Load the drag and drop page*/
    }
    
    async PositionOfA() {

        const Abox = await this.blockA.boundingBox();                           /*Get x, y, width and height of Box A*/ 
        const AboxXCoordinate = 155;                                            /*Declare required x co-ordinate for box A*/ 
        const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/ 
        await expect(Abox?.x).toBe(AboxXCoordinate);                            /*Check for x co-ordinate*/ 
        await expect(Abox?.height && Abox.width).toBe(length);   }              /*Check for height and width of box*/ 
        
        
    async PositionOfB() {

        const Bbox = await this.blockB.boundingBox();                           /*Get x, y, width and height of Box B*/
        const BboxXCoordinate = 370;                                            /*Declare required x co-ordinate for box B*/
        const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/
        await expect(Bbox?.x).toBe(BboxXCoordinate);                            /*Check for x co-ordinate*/
        await expect(Bbox?.height && Bbox.width).toBe(length);        }         /*Check for height and width of box*/
    
    }



