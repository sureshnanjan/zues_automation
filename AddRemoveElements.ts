import { expect, Locator, Page, test } from '@playwright/test';
import { IAddRemoveElements } from './IAddRemoveElements';

    //Create class to export
    export class AddRemoveElements implements IAddRemoveElements {
    /*Declare variables*/
    readonly page: Page;
    readonly Heading: Locator;
    readonly Addbutton: Locator;
    readonly Deletebutton: Locator;

    /**
     * This is the class constructor
     * Initializing the main page
     * Initializing AddButton locator
     * Initializing DeleteButton locator
     */

    constructor(page: Page) {
        this.page = page;
        this.Heading = page.locator('h3',{hasText:"Add/Remove Elements}"});
        this.Addbutton = page.locator('button',{hasText:"Add Element}"});
        this.Deletebutton = page.locator('button',{hasText:"Delete}"});
    }

    async visit(){
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    }
    
    async checkHeading() {
        await expect(this.Heading).toBeVisible();
    }

    async checkButton() {
        await expect(this.Addbutton).toBeVisible();
    } 

    async checkAddButtonisClicked() {
        await expect(this.Deletebutton).toBeVisible();
    }

    async ClickDeleteButtonisClicked() {
        await expect(this.Deletebutton).toBeHidden();

    }

}
