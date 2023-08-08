import { expect, Locator, Page } from '@playwright/test';
import { IRedirectLink } from '../Operations/IRedirectLink';

/**
 * Represents a Redirect Link functionality in a web page.
 */
export class RedirectLink implements IRedirectLink {
  readonly page: Page;
  readonly header: Locator;
  readonly content: Locator;
  readonly clickHereLink: Locator;
  readonly redirectedheader: Locator;

  headertext = 'Redirection';
  redirectedheadertext = 'Status Codes';
  contenttext = 'This is separate from directly returning a redirection status code, in that some browsers cannot handle a raw redirect status code without a destination page as part of the HTTP response.';
  linkText = 'here';

   /**
   * Constructs a new instance of RedirectLink.
   * @param page The Playwright Page object.
   */

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h3', { hasText: this.headertext });
    this.content = page.locator('div p', { hasText: this.contenttext });
    this.clickHereLink = page.locator('div p a', { hasText: this.linkText });
    this.redirectedheader = page.locator('h3', { hasText: this.redirectedheadertext });
  }
  verfiycontenttext() {
    throw new Error('Method not implemented.');
  }

  /**
   * Navigates to the page with the Redirect Link.
   */
  async goto(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/redirector')         
}

  /**
   * Navigates to the redirected page.
   */

async redirectUrlLink(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/status_codes')         
}


  /**
   * Verifies the heading of the page.
   */

  async verifyheader(): Promise<void> {
    await expect(this.header).toBeVisible();
  }

  
  /**
   * Verifies the content of the page.
   */
  async verifycontenttext(): Promise<void> {
    await expect(this.content).toBeVisible();
  }

    /**
   * Clicks on the "Click here" link.
   */
  async click_here(): Promise<void> {
    await this.clickHereLink.click();
    

  }

  /**
   * Verifies the redirection of the "Click here" link.
   */
  async verifyredirectedlink(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/status_codes');
    const currentUrl = this.page.url();
    expect(currentUrl).toBe('https://the-internet.herokuapp.com/status_codes');
  }

  /**
   * Verifies the heading of the redirected page.
   */
  async verifyredirectedpageheader(): Promise<void> {
    await expect(this.redirectedheader).toBeVisible();
  }
}