// HerokuHomePage Automation
import { expect, Locator, Page } from '@playwright/test';

// This is my HomePage behavior

export default class HomePage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly subHeading: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-Internet' });
    this.subHeading = page.locator('h1', { hasText: 'Available Examples' });
  }

// Visit Home page

  async visit(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async checkHeadingText(headingText: string) {
    await this.pageHeading.first();
    await expect(this.pageHeading).toHaveText(headingText);
  }

  async checksubHeading(headingText: string) {
    await this.subHeading.first();
    await expect(this.pageHeading).toHaveText(headingText);
  }

  async checkAvailableExamplesCount(noofLinks: number){
    
  }
}