import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly pageHeader: Locator;
  readonly addElementButton: Locator;
  readonly deleteElementButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = page.locator('h3');
    this.addElementButton = page.locator('button', { hasText: 'Add Element' });
    this.deleteElementButton = page.locator('button', { hasText: 'Delete' });
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  }

  async addElement() {
    await this.addElementButton.click();
  }

  async deleteElement() {
    await this.deleteElementButton.click();
  }
}