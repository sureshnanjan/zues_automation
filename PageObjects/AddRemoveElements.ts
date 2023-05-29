// HAddRemoveElements Automation
import { expect, Locator, Page, selectors } from '@playwright/test';

// This is my HomePage behavior

export class AddRemoveElements {
    gotoTexample(arg0: string) {
      throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly getAddElement: Locator;
    readonly getDelete: Locator;

constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1', { hasText: 'Add/Remove Elements' });
    this.getAddElement = page.locator('a', {hasText: 'Add Element'});
    this.getDelete = page.locator('b', {hasText: 'Delete'});
  }

async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/') 
    await expect(this.pageHeading).toBeVisible();
  }
async getStarted() {
    await this.getAddElement.first().click();
    await this.getDelete.first().click();
}
}
