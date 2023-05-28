import {expect, Locator, Page } from '@playwright/test';

export class Dropdown{
    readonly page
    readonly dropdown
    readonly selected

    constructor(page: Page){
        this.page = page
        this.dropdown = page.locator('select')
        this.selected = page.locator('option[selected="selected"]')
    }

    /**
     * Function select value from the dropdown
     * @param value Enter the value to be selected from the dropdown
     */
    async selectDropdownOption(value: string){
        await this.dropdown.selectOption(value)
    }

    /**
     * Function to verify the value of the option selected
     * @param value Enter the value to be verified
     */
    async verifySelectedOption(value: string){
        await expect(this.selected).toHaveText('Option '+value)
    }
}