import { expect, Locator, Page } from '@playwright/test';
import{HerokuHumePage} from '../PageObjects-TheInternet/HomePage';

export class DisappearingElements {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly menuItems: Locator;
  readonly listItems: Locator;
  readonly links: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h3');
    this.menuItems = page.locator('//*[@id="content"]/div/ul');
    this.listItems= page.locator('li');
    this.links = page.locator('a');
  }
  async navigateTo() {
    await this.page.goto('https://the-internet.herokuapp.com/disappearing_elements');
  }

  async getLinks() {
    const links = await this.page.$$eval('a', (elements) =>
      Array.from(elements).map((linkElement: HTMLAnchorElement) => linkElement.href)
    );
    return links.filter((link) => link !== null);
  }

  async getMenuItems() {
    await this.page.waitForLoadState(); // Wait for the page to finish loading
    await this.page.waitForSelector('#content > div > ul > li', { state: 'visible' }); // Wait for the menu items to be visible
    const menuItems = await this.page.$$eval(
      '#content > div > ul > li',
      (elements) => elements.map((element) => element.textContent)
    );
    return menuItems.filter((menuItem) => menuItem !== null);
  }

  async checkHeading(headingText: string) {
    await expect(this.pageHeading).toHaveText(headingText);
  }

  

  // async countMenuItems() {
  //   const menuItems1 = 'xpath=//*[@id="content"]/div/ul'
  //   await this.page.locator(menuItems1).first().waitFor();
  //   console.log(await this.page.locator(menuItems1).count())
  //   return await this.menuItems.count();
  // }
  // async countListItems() {
  //   const listItemsCount = await this.listItems.count();
  //   const listItemsTexts = await this.listItems.innerText();

  //   console.log('List Items Count:', listItemsCount);
  //   console.log('List Items Texts:', listItemsTexts);

  //   return listItemsCount;
  // }
  
}
