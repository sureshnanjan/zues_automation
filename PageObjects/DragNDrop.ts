import {expect, Locator, Page } from '@playwright/test';

export class DragNDrop{
    readonly page: Page
    readonly columnA
    readonly columnB

    constructor(page: Page){
        this.columnA = page.locator('//*[@id="column-a"]')
        this.columnB = page.locator('//*[@id="column-b"]')
    }

    /**
     * Function to drag from column A to column B
     */
    async drag(){
        await this.columnA.dragTo(this.columnB)
    }

    /**
     * Function to verify the column name
     */
    async verifyColumnName(){
        await expect(this.columnA.locator('header')).toHaveText('B')
        await expect(this.columnB.locator('header')).toHaveText('A')
    }
}