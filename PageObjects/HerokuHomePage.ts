// HerokuHomePage Automation
import { expect, Locator, Page } from '@playwright/test';
import { IHomePage } from '../Operations/IHomePage';

// This is my HomePage behavior

export class HerokuHomePage implements IHomePage{
  gotoTexample(arg0: string) {
    throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly subHeading: Locator;
  // readonly result: Locator;
  // readonly gotoExample: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-Internet' });
    this.subHeading = page.locator('h1', { hasText: 'Available Examples' });
  }

// Visit Home page

  async visit(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async checkHeading(headingText: string) {
    await this.pageHeading.first();
    await expect(this.pageHeading).toHaveText(headingText);
  }

  async checksubHeading(headingText: string) {
    await this.subHeading.first();
    await expect(this.subHeading).toHaveText(headingText);
  }

  // async checkAvailableExamplesCount(noofLinks: number){
  //   const result = await this.page.getByRole('link')
  //   await expect(result).toHaveCount(noofLinks);

  // async goToExample(this.exampleName: string) {
  //   await this.page.getByRole('link',{name: `${this.exampleName}`}).click();
  }

