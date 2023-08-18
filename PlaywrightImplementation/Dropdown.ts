import { IDropdownList } from "../Operations/IDropdownOps";
import { Page, expect, Locator } from "@playwright/test"

export class Dropdown implements IDropdownList{
    readonly page: Page;
    readonly heading: Locator;
    readonly dropdown: Locator;
    readonly placeholder: Locator;
    readonly dropdownOptions: Locator;
    readonly selectedOption: Locator;

    constructor(page: Page){
        this.page = page
        this.heading = page.locator('h3')
        this.dropdown = page.locator('select')
        this.placeholder = page.locator('//*[@id="dropdown"]/option[1]')
        this.dropdownOptions = page.locator('option')
        this.selectedOption = page.locator('option[selected="selected"]')
    }

    async checkHeading(headingText: string) {
        await expect(this.heading).toHaveText(headingText)
    }
    async verifyVisibilityOfDropdown() {
        expect(await this.dropdown.isVisible()).toBeTruthy()
    }
    async checkPlaceholderTextOfDropdown(placeholderText: string) {
        await expect(this.placeholder).toHaveText(placeholderText)
    }
    async verifyOptionsCount(noOfOptions: number) {
        expect(Number(await this.dropdownOptions.count())-1).toBe(noOfOptions)
    }
    async selectOptionFromDropdown(option: string) {
        await this.dropdown.selectOption(option)
    }
    async verifySelectedOptionFromDropdown(option: string) {
        await expect(this.selectedOption).toHaveText(option)
    }
    
}