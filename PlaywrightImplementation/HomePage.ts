import { IHomePage } from "../Operations/IHomePage";
import { expect,  Page } from '@playwright/test';


export class HomePage implements IHomePage{
  
    readonly page: Page;

    /**
    * Constructs a new instance of the HomePage object.
    * @param {Page} page - The Playwright Page object associated with the page.
    */

    constructor(page: Page) {
      this.page = page;
    }

  /**
   * Navigates to the home page.
   */

  async gotohomepage() {
    await this.page.goto('https://the-internet.herokuapp.com/entry_ad');

  }
}