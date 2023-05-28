import {expect, Locator, Page } from '@playwright/test';

export class Checkboxes{
    readonly heading: Locator
    readonly checkbox: Locator

    constructor(page: Page){
        this.heading = page.locator('h3')
        this.checkbox = page.locator('form > input')
    }

    /**
     * Function to check the heading of Checkboxes page
     * @param headingText Enter the expected heading of the page
     */
    async checkHeading(headingText: string) {
        await expect(this.heading).toHaveText(headingText)
    }

    /**
     * Function to check the state of checkboxes - checked or unchecked
     */
    async getCheckboxState(){
        const count = await this.checkbox.count()
        for (let index = 0; index < count; index++) {
            if(await this.checkbox.nth(index).isChecked())
            expect(await this.checkbox.nth(index).isChecked()).toBeTruthy()
            else
            expect(await this.checkbox.nth(index).isChecked()).toBeFalsy()
        }
    }

    /**
     * Function to click the checkboxes
     * @param checkboxName Enter the name of the checkbox
     */
    async clickCheckbox(checkboxName: string){
        if(checkboxName === 'checkbox 1'){
            await this.checkbox.nth(0).click()
        }
        else{
            await this.checkbox.nth(1).click()
        }
    }
}