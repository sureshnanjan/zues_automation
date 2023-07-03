import { expect, Locator, Page } from '@playwright/test';
import { ICheckboxes } from './IiFrames';

// This is my HomePage behavior

export class iFrames implements iFrames{
    readonly page: Page;
    readonly Heading: Locator;
    readonly Link1: Locator;
    readonly Link2: Locator;

    /**
    * This is the class constructor
    * Intializing the main page 
    * Intializing DialogHeading locator
    * Intializing DialogClose locator
    * Intializing ClickHere locator
    */

    constructor(page: Page){
        this.page = page;
        this.Heading = page.locator('h3',{hasText:"Frames"});
        this.Link1 = page.locator('a', {hasText:"NestedFrames"});
        this.Link2 = page.locator('a',{hasText:"iFrames"}); 
    }  
async visit(){
    await this.page.goto('https://the-internet.herokuapp.com/frames')
}

async checkHeading(){
    await expect(this.Heading).toBeVisible();
}

async checkLinkcount(nooflinks: number){
    const result = await this.page.getByRole('Links')
    await expect(result).toHaveCOunt(nooflinks);
}

async gotoExample(this.exampleName: Locator){
    await this.page.getByRole('link', {name: (`${this.exampleName}`).click})
}
}