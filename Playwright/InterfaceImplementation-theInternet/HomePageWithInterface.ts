import { expect, Locator, Page, chromium } from '@playwright/test';
import { environment } from '../Utilities/heroku_config';
import{ IHomePageOperations } from '../Operations/IHomePageOperations' //import the basic skeleton of this class from the Interface defined in IHomePageOperations file.

/**
 * This is the class that implements the IHomePageOperations Interface
 */
export class HomePagewithInterface implements IHomePageOperations{
  /**
   * The page instance.
   */
  readonly page: Page;

  /**
   * The locator for the page heading.
   */
  readonly pageHeading: Locator;

  /**
   * The locator for the subheading.
   */
  readonly subHeading: Locator;

/**
   * Constructs a new instance of the HerokuHumePage.
   * @param {Page} page - The Playwright page instance.
   */
constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1');
    this.subHeading = page.locator('h2');
  }

  /**
   * Visits the HerokuHumePage.
   */
  async visit() {
    await this.page.goto(environment.url);
  }

  /**
   * Checks if the page heading matches the specified text.
   * @param {string} headingText - The expected heading text.
   */
  async checkHeading(headingText: string) {
    await expect(this.pageHeading).toHaveText(headingText);
  }

  /**
   * Checks if the subheading matches the specified text.
   * @param {string} headingText - The expected subheading text.
   */
  async checksubHeading(headingText: string) {
    await expect(this.subHeading).toHaveText(headingText);
  }

  /**
   * Checks the count of available links
   * @param {string} linkText - The text of the link to click.
   */
  async checkAvailableLinks(noOfLinks: number) {
    const links = await this.page.$$('ul li a');
    const actualCount = links.length;
    await expect(actualCount).toBe(noOfLinks);
  }

  /**
   * Clicks the link with the specified text.
   * @param {string} linkText - The text of the link to click.
   */
  async clickLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click();
  }
}
