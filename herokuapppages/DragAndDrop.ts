import {expect,Page} from "@playwright/test";
import {IDragAndDrop} from "../Operations/IDragAndDrop";

export class DragAndDrop implements IDragAndDrop{
    page:Page;
    headerText:string = 'Drag and Drop';
    labelA:string = 'A';
    labelB:string = 'B';
    firstElement:string = "//div[@id='column-a']";
    secondElement:string = "//div[@id='column-b']";
    constructor(page:Page){
        this.page = page;
    }
    async verifyHeader(){
        expect(this.page.locator('h3')).toBeVisible();
        expect(this.page.locator('h3')).toHaveText(this.headerText);
    }
    async verifyElementLabel(elementlocator,elementlabel){
        expect(this.page.locator(elementlocator)).toBeVisible();
        expect(this.page.locator(elementlocator)).toHaveText(elementlabel);
    }
    async draganddrop(dragFrom,dragTo) {
        expect(this.page.locator(dragFrom)).toBeVisible();
        expect(this.page.locator(dragTo)).toBeVisible();
        this.page.locator(dragFrom).dragTo(this.page.locator(dragTo));
    }
}