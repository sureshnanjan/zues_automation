import {Page} from "@playwright/test";

export class ABTestControl{
    page: Page;
    headerText = 'A/B Test Variation 1';
    paragraphText = "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).";
    paragraphTextLocator = "//div[@id='content']//p";
    constructor(page:Page){
        this.page = page;
    }
}