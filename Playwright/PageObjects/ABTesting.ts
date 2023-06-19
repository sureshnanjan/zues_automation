import {expect, Locator, Page} from '@playwright/test';

export class ABTesting {
    checkText(arg0: string) {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly pageText: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageHeading = page.locator('h3',{hasText: 'A/B Test Variation 1'});
        this.pageText = page.locator('p',{hasText: 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'});
    }

async visit(){
    await this.page.goto('https://the-internet.herokuapp.com/abtest');
}

async checkHeading(headingText:string){
    if (headingText=='A/B Test Variation 1') {
        await expect(this.pageHeading).toHaveText(headingText);
    } else {
        await expect(this.pageHeading).toHaveText('A/B Test Control');
    }
}

}