import { expect, Locator, Page } from '@playwright/test';
import { IRedirectLink } from '../Operations/IRedirectLink';

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

  async goto(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/redirector')         
}

async redirectUrlLink(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/status_codes')         
}


  async verifyheader(): Promise<void> {
    // Verify Heading of the page
    await expect(this.header).toBeVisible();
  }

  async verifycontenttext(): Promise<void> {
    // Verify Content of the page
    await expect(this.content).toBeVisible();
  }

  async click_here(): Promise<void> {
    // Verify clicking on Click here link
    await this.clickHereLink.click();
    

  }

  async verifyredirectedlink(): Promise<void> {
    // Verify redirection of Click here link
    await this.page.goto('https://the-internet.herokuapp.com/status_codes');
    const currentUrl = this.page.url();
    expect(currentUrl).toBe('https://the-internet.herokuapp.com/status_codes');
  }

  async verifyredirectedpageheader(): Promise<void> {
    // Verify Heading of the Redirected page
    await expect(this.redirectedheader).toBeVisible();
  }
}