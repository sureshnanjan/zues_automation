import { expect, Locator, Page } from '@playwright/test';
import { HerokuHumePage } from '../PageObjects-TheInternet/HomePage';

/**
 * Represents the Checkboxes page.
 */
export class Checkboxes {
  /**
   * The page instance.
   */
  readonly page: Page;

  /**
   * The locator for the first checkbox.
   */
  readonly checkbox1: Locator;

  /**
   * The locator for the second checkbox.
   */
  readonly checkbox2: Locator;

  /**
   * The locator for the page heading.
   */
  readonly pageHeading: Locator;

  /**
   * Constructs a new instance of the Checkboxes page.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = this.page.locator('//form[@id="checkboxes"]/input[1]');
    this.checkbox2 = this.page.locator('//form[@id="checkboxes"]/input[2]');
    this.pageHeading = page.locator('h3');
  }

  /**
   * Checks if the page heading matches the specified text.
   * @param {string} headingText - The expected heading text.
   */
  async checkHeading(headingText: string) {
    await expect(this.pageHeading).toHaveText(headingText);
  }

  /**
   * Checks the specified checkbox.
   * @param {Locator} checkbox - The locator of the checkbox to check.
   */
  async checkCheckbox(checkbox: Locator) {
    await checkbox.check();
  }

  /**
   * Unchecks the specified checkbox.
   * @param {Locator} checkbox - The locator of the checkbox to uncheck.
   */
  async uncheckCheckbox(checkbox: Locator) {
    await checkbox.uncheck();
  }

  /**
   * Checks if the specified checkbox is checked.
   * @param {Locator} checkbox - The locator of the checkbox to check.
   * @returns {Promise<boolean>} - A boolean indicating whether the checkbox is checked.
   */
  async isCheckboxChecked(checkbox: Locator): Promise<boolean> {
    const isChecked = await checkbox.isChecked();
    return isChecked;
  }
}
