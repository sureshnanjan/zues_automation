import { expect, Locator, Page } from '@playwright/test';

export class dropdownPage {
readonly page: Page;
readonly title: Locator;


constructor(page: Page) {
this.page = page;
this.title = page.locator('heading', { hasText: 'Dropdown List' })
}

async dropdown(checkDropdown: boolean) {
  //Launch the dropdown click
  await this.page.getByRole('link', { name: 'Dropdown' }).click()
  await expect(this.title).toBeVisible()
}

async selectDropdownOption(checkDropdown: boolean) {
    await this.page.locator('#dropdown').selectOption('1');
  }
}