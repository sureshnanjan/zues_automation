// CheckboxesPage Automation
import { expect, Locator, Page } from '@playwright/test';

// This is my HomePage behavior

export class Checkboxes {
    gotoTexample(arg0: string) {
      throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h3', { hasText: 'Checkboxes' });
        this.checkbox1 = page.locator('a', { hasText: 'checkbox 1' });
        this.checkbox2 = page.locator('b', { hasText: 'checkbox 2' });
      }

      async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes/') 
        await expect(this.pageHeading).toBeVisible();
      }
    async check () {
        await this.checkbox1.first().click;
        await expect(this.checkbox1).toBeChecked();

        await this.checkbox2.first().click;
        await expect(this.checkbox1).toBeChecked();
    }
    } 