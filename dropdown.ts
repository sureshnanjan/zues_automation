import { expect, Locator, Page } from '@playwright/test';
//Create clas to export
export class DDM {
/*Declare variables*/
readonly page: Page;
readonly ddmpage: Locator;
readonly ddm: Locator;

constructor(page: Page) {

this.page = page;
this.ddmpage = page.getByRole('link', { name: 'Dropdown' }); //locate DDM page link
this.ddm = page.locator('#dropdown'); //locate DDM options
}


async goto() {
await this.page.goto('https://the-internet.herokuapp.com/'); /*open the website*/
}

async boxes() {

await this.ddmpage.click(); // Open DDM page
await this.page.waitForTimeout(3000); // Delay for 3000 milliseconds (3 seconds)
await this.ddm.selectOption('2'); // Select option 2 of DDM
await this.page.waitForTimeout(3000); // Delay for 3000 milliseconds (3 seconds)
await this.ddm.selectOption('1'); // Select option 1 of DDM
await this.page.waitForTimeout(3000); // Delay for 3000 milliseconds (3 seconds)
}

}
