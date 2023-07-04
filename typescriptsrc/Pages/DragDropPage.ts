import { expect, Locator, Page } from '@playwright/test';

export class dragdropPage implements IDragDrop {
readonly page: Page;
readonly DragDroptitle: Locator;
readonly column: Locator;
readonly blockA: Locator;
readonly blockB: Locator;


constructor(page: Page) {
this.page = page;
this.DragDroptitle = page.getByRole('heading', { name: 'Drag and Drop' });
this.column = page.locator('//*[@id="columns"]'); 
this.blockA = page.locator('//*[@id="column-a"]');
this.blockB = page.locator('#column-b');
}

/**
 *Load the drag and drop page
 */
async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');  
}

/**
 * Verifying the title of the page
 */
async CheckTitle() {
    const title = await expect(this.DragDroptitle).toBeVisible();
};

/**
 * Verifying the count of elements/blocks present on the page
 */
async CountOfElements(expectedcount:number) {
    const actualcount = await this.column.count();
    await expect(actualcount).toEqual(expectedcount)
}

/**
 * Verifying the cursour handle over any block on the page
 */
async CursorHandle() {
    const dragcursor = await expect(this.blockA).toHaveCSS('cursor','move')
}

/**
 * Verifying the position of block A
 */
async PositionOfA() {
    const Abox = await this.blockA.boundingBox();                           /*Get x, y, width and height of Box A*/
    const AboxXCoordinate = 155;                                            /*Declare required x co-ordinate for box A*/
    const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/
    await expect(Abox?.x).toBe(AboxXCoordinate);                            /*Check for x co-ordinate*/
    await expect(Abox?.height && Abox.width).toBe(length);                 /*Check for height and width of box*/
}

/**
 * Verifying the position of block B
 */
async PositionOfB() {
    const Bbox = await this.blockB.boundingBox();                           /*Get x, y, width and height of Box B*/
    const BboxXCoordinate = 370;                                            /*Declare required x co-ordinate for box B*/
    const length = 150;                                                     /*Declare length and width of box. Since box is square, length = width*/
    await expect(Bbox?.x).toBe(BboxXCoordinate);                            /*Check for x co-ordinate*/
    await expect(Bbox?.height && Bbox.width).toBe(length);                  /*Check for height and width of box*/
}

}