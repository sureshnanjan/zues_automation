import { expect, Locator, Page } from '@playwright/test';

import assert from 'assert';

/**
 * Page object representing the Checkboxes page.
 */
export class Checkbox {
    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    readonly headingtext : Locator;

 /**

   * Constructs a new instance of the Checkboxes page object.

   * @param page The Playwright Page object associated with the page.

   */
constructor(page) {
    this.page = page;
    this.checkbox1 = page.getByRole('checkbox').first();
    this.checkbox2 = page.getByRole('checkbox').nth(1);
    this.headingtext = page.getByRole('heading', { name: 'Checkboxes' })
 }


async checkheading(){

/**
   * Checks if the heading text on the Checkboxes page matches the expected heading.
   */     
    const actualHeadingText = await this.headingtext.innerText();
    assert.equal(actualHeadingText, 'Checkboxes');
 };

/**
   * Performs checkbox interactions and checks their state.
   */
 async checkboxes() {
    await this.page.getByRole('link', { name: 'Checkboxes' }).click();
    await this.checkbox1.click();
    await this.checkbox2.click();
    const isCheckedbox1 = await this.checkbox1.isChecked();
    const isCheckedbox2 = await this.checkbox2.isChecked();

 if (isCheckedbox1) {
 console.log('Checkbox1 is checked');
} else {
 console.log('Checkbox1 is not checked');
 }

if (isCheckedbox2) {
 console.log('Checkbox2 is checked');
 } else {
 console.log('Checkbox2 is not checked');
 }
};
}