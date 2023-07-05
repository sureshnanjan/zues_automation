import { expect, Locator, Page } from '@playwright/test';
import { IDropdownList } from '../Operations/IDropdownLIst';
const fs = require('fs');

export class DropdownListPage implements IDropdownList {
    readonly page: Page;
    readonly heading: Locator;
    readonly placeholderText: Locator;
    readonly dropdown: Locator;
    selectedOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3', { hasText: 'Dropdown List' });
        this.placeholderText = page.locator('option[selected="selected"]');
        this.dropdown = page.locator('#dropdown');
        this.selectedOption = page.locator('option[selected="selected"]');
    }
    async gotoDropdownListPage(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/dropdown");
    }

    async checkHeading(headingText): Promise<void> {
        await expect(this.heading).toHaveText(headingText);
    }

    async verifyVisibilityOfDropdown(): Promise<void> {
        await expect(this.dropdown).toBeVisible();
    }

    async checkPlaceholderTextOfDropdown(placeholderText: string): Promise<void> {
        await expect(this.placeholderText).toHaveText(placeholderText);
    }

    async verifyOptionsCount(noOfOptions): Promise<void> {
        const result = this.page.getByRole('option')
    await expect(result).toHaveCount(noOfOptions);
    }

    async selectOptionFromDropdown(option: string): Promise<void> {
        await this.dropdown.selectOption(option);
        await expect(this.selectedOption).toHaveText(option);
    }
}