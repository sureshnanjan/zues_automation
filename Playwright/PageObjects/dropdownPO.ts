import { expect, Locator, Page, test } from '@playwright/test';
/** import { environment } from '../Utilities/heroku_config'; */
import { Dropdownops } from "../Operations/Dropdownops";
export class DropdownPage {
    readonly page: Page;
    readonly dropdown: Locator;
    readonly dropdownHeading: Locator;
    readonly dropdownText: Locator;
    readonly dropdownList : Locator;
    readonly dropdownlistoption1 : Locator;
    readonly dropdownselectoption : Locator;
    readonly dropdownlistoption2 : Locator;


constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('//*[@id="content"]/ul/li[11]/a');
    this.dropdownHeading = page.locator('//*[@id="content"]/div/h3');
    this.dropdownText = page.locator('//*[@id="dropdown"]');
    this.dropdownList = page.locator('#dropdown');
    this.dropdownselectoption = page.locator('//*[@id="dropdown"]/option[1]');
    this.dropdownlistoption1 = page.locator('//*[@id="dropdown"]/option[2]');
    this.dropdownlistoption2 = page.locator('//*[@id="dropdown"]/option[3]');
}

async herokupage(){
        await this.page.goto('https://the-internet.herokuapp.com/');
}

    async dropdownclick(){
    await this.dropdown.click();
}

async checkdropdownPage(){
    await expect(this.dropdownHeading).toContainText('Dropdown List')
    await expect(this.dropdownText).toContainText('Please select an option')
}

async dropdownlistoptions(){
    await this.dropdownList.click();
}

/**async checkdropdownlistoptions(){
    await expect(this.dropdownselectoption).toContainText('Please select an option')
    await expect(this.dropdownlistoption1).toContainText('Option 1')
    await expect(this.dropdownlistoption2).toContainText('Option 2')

}*/

async selectfirstoption(){
    await this.dropdownlistoption1.click({force: true});
   
}

async checkfirstoptionasselected(){
    await expect(this.dropdownText).toContainText('Option 1')
}

}
