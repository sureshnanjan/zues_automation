import { expect, Locator, Page } from '@playwright/test';
import assert from 'assert';


/**
 * Page object for the Checkboxes page.
 */
export class Checkbox_page {
  readonly page: Page;
  readonly home_checkboxbutton: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly headingtext : Locator;

  /**
   * Constructs a new instance of the Checkboxes page object.
   * @param page The Playwright Page object associated with the page.
   */
  constructor(page: Page) {
    this.page = page;
    this.home_checkboxbutton = page.getByRole('link', { name: 'Checkboxes' });
    this.checkbox1 = page.getByRole('checkbox').first();
    this.checkbox2 = page.getByRole('checkbox').nth(1);
    this.headingtext = page.getByRole('heading', { name: 'Checkboxes' })
  }

  /**
   * Asserts the heading text on the Checkboxes page.
   */
  async checkheading(){
    // Assert the heading text using the 'assert' module
    const actualHeadingText = await this.headingtext.innerText();

    assert.equal(actualHeadingText, 'Checkboxes');

  };

  /**
   * Performs checkbox actions on the Checkboxes page.
   */
  async boxes() {
    await this.home_checkboxbutton.click();
    await this.checkbox1.click();
    await this.checkbox2.click();


    const isChecked1 = await this.checkbox1.isChecked();
    const isChecked2 = await this.checkbox2.isChecked();

    if (isChecked1) {
      console.log('Checkbox1 is checked');
    } else {
      console.log('Checkbox1 is not checked');
    }
  
    if (isChecked2) {
      console.log('Checkbox2 is checked');
    } else {
      console.log('Checkbox2 is not checked');
    }

    // Delay for 2000 milliseconds (2 seconds)

    await this.page.waitForTimeout(2000); 
  }
}