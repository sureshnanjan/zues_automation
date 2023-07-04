import { expect, Locator, Page } from '@playwright/test';

export class checkboxPage {
readonly page: Page;
//readonly pageHeading: Locator;
//readonly subHeading: Locator;


constructor(page: Page) {
this.page = page;
}

async checkCheckbox(checkBoxNumber: number) {
   // await this.page.getByLabel(checkBoxLabel).check();
   await this.page.getByRole('checkbox').nth(checkBoxNumber).check();
   //await this.page.locator("xpath = //input[@type = 'checkbox']").check();
}

async verifyCheckboxStatus(checkBoxNumber: number) {
    //expect(await this.page.getByLabel(checkBoxLabel).isChecked()).toBeTruthy();
    //expect(await this.page.locator("xpath = //input[@type = 'checkbox']").isChecked()).toBeTruthy();
    expect(await this.page.getByRole('checkbox').nth(checkBoxNumber).isChecked()).toBeTruthy();
}
}