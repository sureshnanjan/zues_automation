import {expect, Locator, Page} from '@playwright/test'

/**
 * EntryAdPage is the class of HerokuApp EntryAdPage
 * page is the object of the EntryAdPage page
 * DialogHeading is the heading of modal
 * DialogClose is the close button of modal
 * ClickHere is the re-enable button of modal
 */

export class EntryAdPage{
    readonly page: Page;
    readonly DialogHeading: Locator;
    readonly DialogClose: Locator;
    readonly ClickHere: Locator;

    /**
    * This is the class constructor
    * Intializing the main page 
    * Intializing DialogHeading locator
    * Intializing DialogClose locator
    * Intializing ClickHere locator
    */

    constructor(page: Page){
        this.page = page;
        this.DialogHeading = page.locator('h3',{hasText:"This is a modal window"});
        this.DialogClose = page.getByText('Close', { exact: true });
        this.ClickHere = page.locator('a',{hasText:"click here"}); 
    }
    async visit(){
        await this.page.goto('https://the-internet.herokuapp.com/entry_ad');

    }
    /**
     * checkDialogHeading function checks for the heading of the modal
     */
    async checkDialogHeading(){
        await expect(this.DialogHeading).toBeVisible();
    }

    /**
     * performCloseDialog function performs close action of the modal
     */
    async performCloseDialog(){
        await this.DialogClose.click();
    }

    /**
     * checkDialogClose function checks whether modal is closed
     */
    async checkDialogClose(){
        await expect(this.ClickHere).toBeVisible();
    }

    /**
     * performClickHere function performs modal re-enable action by selecting ClickHere
     */
    async performClickHere(){
        await this.ClickHere.click();
    }

    /**
     * checkClickHere function checks whether modal is realucnhed again
     */
    async checkClickHere(){
        await expect(this.DialogHeading).toBeVisible();
    }
}