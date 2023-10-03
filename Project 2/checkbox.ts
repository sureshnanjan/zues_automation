import { expect, Locator, Page } from '@playwright/test';
//Create clas to export
export class CheckBox {
/*Declare variables*/
readonly page: Page;

constructor(page: Page) {
this.page = page;
}

async goto() {
await this.page.goto('https://the-internet.herokuapp.com/checkboxes'); /*open the website of checkbox*/
}

async checkboxcheck() {

await this.page.getByRole('checkbox').first().check(); // Check the 1st checkbox

}

async checkboxuncheck(){

    await this.page.getByRole('checkbox').nth(1).uncheck();//  Uncheck the 2nd checkbox
}

}