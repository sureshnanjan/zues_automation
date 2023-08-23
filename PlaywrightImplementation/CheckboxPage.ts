import { expect, Locator, Page } from '@playwright/test';
import { ICheckboxes } from '../Operations/ICheckboxes';

export class CheckboxPage implements ICheckboxes {
    readonly page: Page;
    readonly heading: Locator;
    readonly checkboxOne: Locator;
    readonly checkboxTwo: Locator;
    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3');
        this.checkboxOne = page.locator('xpath=//input[@type = "checkbox"][1]');
        this.checkboxTwo = page.locator('xpath=//input[@type = "checkbox"][2]');
    }

    async visit(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/checkboxes");
    }

    async checkHeading(): Promise<void> {
        await expect(this.heading).toHaveText('Checkboxes');
    }

    async verifyCheckboxOne(): Promise<void> {
        await expect(this.checkboxOne).toBeVisible();
    }

    async verifyCheckboxTwo(): Promise<void> {
        await expect(this.checkboxTwo).toBeVisible();
    }

    async verifyDefaultStatusCheckboxOne(): Promise<void> {
        await expect(this.checkboxOne).not.toBeChecked();
    }

    async verifyDefaultStatusCheckboxTwo(): Promise<void> {
        await expect(this.checkboxTwo).toBeChecked();
    }

    async checkcheckbox1(): Promise<void> {
        await (this.checkboxOne).check();
        await expect(this.checkboxOne).toBeChecked();
    }

    async checkcheckbox2(): Promise<void> {
        await (this.checkboxTwo).uncheck();
        await (this.checkboxTwo).check();
        await expect(this.checkboxTwo).toBeChecked();
    }

    async uncheckcheckbox1(): Promise<void> {
        await (this.checkboxOne).check();
        await (this.checkboxOne).uncheck();
        await expect(this.checkboxOne).not.toBeChecked();
    }

    async uncheckcheckbox2(): Promise<void> {
        await (this.checkboxTwo).uncheck();
        await expect(this.checkboxTwo).not.toBeChecked();
    }
}
