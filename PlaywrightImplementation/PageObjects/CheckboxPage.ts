///////////////////////////////////////////////////////////////////////////////
/**
 * Page object for the Checkboxes page.
 */

import { expect, Locator, Page } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly homeCheckboxButton: Locator;
  readonly checkBox1: Locator;
  readonly checkBox2: Locator;
  readonly headingText : Locator;

  /**
   * Constructs a new instance of the Checkboxes page object.
   * @param page The Playwright Page object associated with the page.
   */
  constructor(page: Page) {
    this.page = page;
    this.homeCheckboxButton = page.getByRole('link', { name: 'Checkboxes' });
    this.checkBox1 = page.getByRole('checkbox').first();
    this.checkBox2 = page.getByRole('checkbox').nth(1);
    this.headingText = page.getByRole('heading', { name: 'Checkboxes' })
  }

  /**
   * Verify the page heading
   */
  async checkheading(){
    await expect(this.headingText).toHaveText("Checkboxes");
  };

  /**
   * Performs checkbox actions on the Checkboxes page.
   */
  async boxes() {
    await this.homeCheckboxButton.click();
    await this.checkBox1.click();
    await this.checkBox2.click();
    const ischeckBox1Checked = await this.checkBox1.isChecked();
    const ischeckBox2Checked = await this.checkBox2.isChecked();
    console.log('Checkbox1 is ', ischeckBox1Checked);
    console.log('Checkbox2 is ', ischeckBox2Checked);
  }
}