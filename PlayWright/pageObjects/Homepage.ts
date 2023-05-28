import { expect, Locator, Page } from '@playwright/test';

/**
 * Page object representing visiting a specific page.
 */

export class visitPage{
    /**
   * Creates an instance of the visitPage page object.
   *
   * @param {Page} page - The Playwright test page.
   */
    page: Page    
    constructor(page){
        this.page = page
    }
    /**
   * Navigates to the specified page URL.
   */
    async visitPage(){
        await this.page.goto('https://the-internet.herokuapp.com/')
    };
}