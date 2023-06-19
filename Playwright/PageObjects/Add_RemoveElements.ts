import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElements {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly AddButton: Locator;
    readonly DeleteButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageHeading = page.locator('h3',{hasText: 'Add/Remove Elements'});
        this.AddButton = page.locator('button',{hasText: 'Add Element'});
        this.DeleteButton = page.locator('button',{hasText: 'Delete'});
    }
async visit() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
}

async checkHeading(headingText:string){
    await expect(this.pageHeading).toHaveText(headingText);
}

async checkButtonVisibility(){
    await expect(this.AddButton).toBeVisible();
    await expect(this.AddButton).toBeEnabled;
}

async checkAddButtonClick(){
    await this.AddButton.click();
    await expect(this.DeleteButton).toBeVisible();
}

Elementcount: number;
async checkAddButtonFunction(Elementcount){
    this.Elementcount = Elementcount;
    do {
        await this.AddButton.click();
        Elementcount = Elementcount - 1;
    } while (Elementcount!=0);
    await expect(this.DeleteButton).toHaveCount(this.Elementcount+1);
}

Deletecount: number;
 async checkDeleteButtonFunction(Deletecount:number){
    this.Deletecount = Deletecount;
    do {
         await this.DeleteButton.first().click();
        Deletecount = Deletecount - 1;
    } while (Deletecount!=0);
     const count = (this.Elementcount+1)-this.Deletecount;
     await expect(this.DeleteButton).toHaveCount(count);
 }
}