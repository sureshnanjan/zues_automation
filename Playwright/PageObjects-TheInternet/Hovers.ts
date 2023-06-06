import { expect, Locator, Page } from '@playwright/test';

/**
 * Represents the HoversPage.
 */
export class HoversPage {
  /**
   * The page instance.
   */
  readonly page: Page;

  /**
   * The locator for the first user.
   */
  readonly user1: Locator;

  /**
   * The locator for the second user.
   */
  readonly user2: Locator;

  /**
   * The locator for the third user.
   */
  readonly user3: Locator;

  /**
   * Constructs a new instance of the HoversPage.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.user1 = page.locator('//*[@id="content"]/div/div[1]');
    this.user2 = page.locator('//*[@id="content"]/div/div[2]');
    this.user3 = page.locator('//*[@id="content"]/div/div[3]');
  }

  /**
   * Performs a hover action over the specified user element.
   * @param {Locator} user - The user element to hover over.
   */
  async hoverOverUser(user: Locator) {
    await user.hover();
  }

  /**
   * Retrieves the text content of the specified user element.
   * @param {Locator} user - The user element to get the text from.
   * @returns {Promise<string>} - The text content of the user element.
   */
  async getUserText(user: Locator): Promise<string> {
    const element = await user.locator('h5').first();
    return await element.innerText();
  }
}
