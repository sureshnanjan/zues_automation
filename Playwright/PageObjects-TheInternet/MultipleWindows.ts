import { expect, Locator, Page } from '@playwright/test';

/**
 * Represents the WindowsPage.
 */
export class WindowsPage {
  /**
   * The page instance.
   * @type {Page}
   */
  readonly page: Page;

  /**
   * The URL of the WindowsPage.
   * @type {string}
   */
  readonly pageUrl: string;

  /**
   * The locator for the link to open a new window.
   * @type {Locator}
   */
  readonly linkNewWindow: Locator;

  /**
   * The locator for the page heading.
   * @type {Locator}
   */
  readonly pageHeading: Locator;

  /**
   * The locator for the subheading.
   * @type {Locator}
   */
  readonly subHeading: Locator;

  /**
   * Constructs a new instance of the WindowsPage.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'https://the-internet.herokuapp.com/windows';
    this.linkNewWindow = page.locator('a[href="/windows/new"]');
    this.pageHeading = page.locator('h3');
    this.subHeading = page.locator('.example > p');
  }

  /**
   * Retrieves the page title.
   * @returns {Promise<string>} - The page title.
   */
  async getPageTitle() {
    return this.page.title();
  }

  /**
   * Navigates to the WindowsPage.
   */
  async navigateTo() {
    await this.page.goto(this.pageUrl);
  }

  /**
   * Clicks the link to open a new window and returns the NewWindowPage.
   * @returns {Promise<NewWindowPage>} - The NewWindowPage instance.
   */
  async clickNewWindowLink() {
    await this.linkNewWindow.click();
    const [newWindow] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.waitForSelector('body'),
    ]);
    await newWindow.waitForLoadState();
    return new NewWindowPage(newWindow);
  }
}

/**
 * Represents the NewWindowPage.
 */
export class NewWindowPage {
  /**
   * The page instance.
   * @type {Page}
   */
  readonly page: Page;

  /**
   * The page URL of the NewWindowPage.
   * @type {string}
   */
  readonly pageUrl: string = '';

  /**
   * The link to open a new window.
   * @type {string}
   */
  readonly linkNewWindow: string = '';

  /**
   * The locator for the page heading.
   * @type {Locator}
   */
  readonly pageHeading: Locator;

  /**
   * The locator for the subheading.
   * @type {Locator}
   */
  readonly subHeading: Locator;

  /**
   * Constructs a new instance of the NewWindowPage.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = this.page.locator('h3');
    this.subHeading = this.page.locator('.example > p');
    // Assign values to other properties as needed
  }

  /**
   * Retrieves the current window handle.
   * @returns {Promise<string>} - The current window handle.
   */
  async getCurrentWindowHandle() {
    return this.page.evaluate(() => window.location.href);
  }

   /**
   * Switches back to the main window and returns the WindowsPage.
   * @returns {Promise<WindowsPage>} - The WindowsPage instance.
   */
   async switchToMainWindow() {
    const [mainWindow] = await this.page.context().pages();
    return new WindowsPage(mainWindow);
  }

  /**
   * Retrieves the page title.
   * @returns {Promise<string>} - The page title.
   */
  async getPageTitle() {
    return this.page.title();
  }

  /**
   * Retrieves the content of the page.
   * @returns {Promise<string>} - The page content.
   */
  async getContent() {
    return this.page.textContent('body');
  }
}

module.exports = { WindowsPage, NewWindowPage };