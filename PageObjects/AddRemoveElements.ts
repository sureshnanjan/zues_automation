import {expect, Locator, Page } from '@playwright/test';

export class AddRemoveElements{
    readonly page
    readonly heading
    readonly addButton
    readonly deleteButton

    constructor(page: Page){
        this.page = page
        this.heading = page.locator('h3')
        this.addButton = page.locator('button', { hasText: 'Add Element' })
        this.deleteButton = page.locator('button', { hasText: 'Delete' })
    }

    /**
     * Function to check the heading of the Add Remove Elements page
     */
    async checkHeading(){
        await expect(this.heading).toHaveText('Add/Remove Elements')
    }

    /**
     * Function to click the add button
     * @param count Enter the number of times add button is to be clicked
     */
    async clickAddElement(count: number){
        for (let index = 0; index < count; index++) {
            await this.addButton.click()
        }
    }

    /**
     * Function to count the number of delete buttons
     * @param count Enter the expected number of delete buttons
     */
    async countOfDeleteButton(count: number){
        expect(await this.deleteButton.count()).toBe(count)
    }

    /**
     * Function to click the delete button
     * @param count Enter the number of times delete button is to be clicked
     */
    async clickDeleteButton(count: number){
        for (let index = 0; index < count; index++) {
            await this.deleteButton.first().click()
        }
    }
}