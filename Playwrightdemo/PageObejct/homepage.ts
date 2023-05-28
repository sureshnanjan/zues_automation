import { expect,  Page } from '@playwright/test';

/**
 * Page object for the home page.
 */

export class home_page {
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
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

}
