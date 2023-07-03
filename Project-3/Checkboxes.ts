// CheckboxesPage Automation
import { expect, Locator, Page } from '@playwright/test';
import { ICheckboxes } from './ICheckboxes';

// This is my HomePage behavior

export class Checkboxes implements ICheckboxes{
    gotoTexample(arg0: string) {
      throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly pagecheckbox1: Locator;
    readonly pagecheckbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h3', { hasText: 'Checkboxes' });
        this.pagecheckbox1 = page.locator('a', { hasText: 'checkbox 1' });
        this.pagecheckbox2 = page.locator('b', { hasText: 'checkbox 2' });
      }
  visit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async checkHeading(expectedHeadingContextPage: string): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes/') 
        await expect(this.pageHeading).toBeVisible();
  }
  async checkbox1(): Promise<void> {
    await this.pagecheckbox1.first().click;
        await expect(this.pagecheckbox1).toBeChecked();
  }
  async checkbox2(): Promise<void> {
    await this.pagecheckbox2.first().click;
        await expect(this.pagecheckbox2).toBeChecked();
  }

      
    } 