import { expect, Locator, Page, chromium } from '@playwright/test';
import { IFloatingMenuOps } from '../Interfaces/IFloatingMenuOps';

/**
 * Represents the file upload functionality with Playwright.
 */
export class floatingMenuwithInterface implements IFloatingMenuOps {
  /** The Playwright Page object. */
  readonly page: Page;
  /** Locator for the page heading element. */
  readonly pageHeading: Locator;

  readonly floatingMenu: Locator;

  readonly homeOption: Locator;
  readonly newsOption: Locator;
  readonly contactOption: Locator;
  readonly aboutOption: Locator;
  /**
   * Creates an instance of the fileUploadswithInterface class.
   * @param {Page} page - The Playwright Page object.
   */
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h3');
    this.floatingMenu = page.locator('//*[@id="menu"]');
    this.homeOption = page.locator('//*[@id="menu"]/ul/li[1]');
    this.newsOption = page.locator('//*[@id="menu"]/ul/li[2]');
    this.contactOption = page.locator('//*[@id="menu"]/ul/li[3]');
    this.aboutOption = page.locator('//*[@id="menu"]/ul/li[4]');
  }

  /**
   * Checks if the page heading matches the expected value.
   * @param {string} expectedHeading - The expected heading text.
   * @returns {Promise<void>}
   */
  async checkPageHeading(expectedHeading: string): Promise<void> {
    const actualHeading = await this.pageHeading.textContent();
    expect(actualHeading).toBe(expectedHeading);
  }


  async isFloatingMenuVisible(): Promise<boolean> {
    const isFloatingMenuVisible = await this.floatingMenu;
    return isFloatingMenuVisible !== null;
  }

  async scrollPage(scrollCount: number, direction: 'up' | 'down'): Promise<void> {
    const scrollBy = direction === 'up' ? -400 : 400;
  
    for (let i = 0; i < scrollCount; i++) {
      await this.page.evaluate((scrollBy) => {
        window.scrollBy(0, scrollBy);
      }, scrollBy);
      await this.page.waitForTimeout(1000);
    }
  }
  async checkMenuOptionLink(buttonSelector: Locator): Promise<boolean> {
    const initialUrl = await this.page.url();
    await buttonSelector.click(); // Use click() method of Locator object
    const updatedUrl = await this.page.url();
    return updatedUrl !== initialUrl;
}
}


