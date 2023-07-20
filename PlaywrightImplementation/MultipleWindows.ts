import { Dialog, expect, FrameLocator, Locator, Page } from '@playwright/test';
import { IMultipleWindow } from '../Operations/IMultipleWindow';

/* The MultipleWindows class is an implementation of the IMultipleWindow interface. */
export class MultipleWindows implements IMultipleWindow{
    readonly page: Page;
    readonly windowpageHeading: Locator;
    readonly clickHere: Locator;
    readonly newWindowpageHeading: Locator;
  
    pageHeading = 'Opening a new window';
    linkText = 'Click Here';
    newpagetitle = 'New Window';

    /**
     * The constructor function initializes the page object and locators for the page heading, click
     * here link, and new window page heading.
     * @param {Page} page - The "page" parameter is an instance of the Page class. It represents the
     * web page that the constructor is being used on.
     */
    constructor(page: Page) {
        this.page = page;
        this.windowpageHeading = page.locator('h3', { hasText: this.pageHeading });
        this.clickHere = page.locator('a', { hasText: this.linkText});
        this.newWindowpageHeading = page.locator('h3', { hasText: this.newpagetitle });
      }
      
      /**
       * The function navigates to the "windows" page on the website
       * "https://the-internet.herokuapp.com".
       */
      async goto(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/windows')         
    }
    
    /**
     * The function verifies if the window page heading is visible.
     */
    async verifyWindowPage(): Promise<void> {
      await expect(this.windowpageHeading).toBeVisible();
    }
  
    /**
     * The function "verifylink" checks if the element with the id "clickHere" is visible.
     */
    async verifylink(): Promise<void> {
    await expect(this.clickHere).toBeVisible();
  }
  
  /**
   * The function "clickLink" asynchronously clicks on a link.
   */
  async clickLink(): Promise<void> {
    await this.clickHere.click();
  }
  
  /**
   * The function verifies if the new window page heading is visible.
   */
  async verifyNewWindowPage(): Promise<void> {
    await expect(this.newWindowpageHeading).toBeVisible();
  }
}