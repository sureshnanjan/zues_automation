import { Locator, Page, expect } from "@playwright/test";
import { IAddRemoveElements } from "../Interface/IAddRemoveElement";

export class AddRemoveElements implements IAddRemoveElements {
    readonly page : Page ;
    readonly addnewElement : Locator;
    readonly deleteAElement : Locator;
    readonly countallElements : Locator;
    constructor(page: Page) {
        this.page = page;
        
        
        
    }
    async countElement(expectedNumber:number) {
        await expect (this.page.locator('added-manually')). toHaveCount(expectedNumber);
    }
    async pageTitle() {
        await this.page.locator ('h3', {hasText: 'Add/Remove Elements'})
    }
    async addElement(value:number) {
        for (let index = 0; index < value; index++) {
            await this.page.getByRole('button', { name: 'Add Element' }).click();            
        }
    }
    async deleteElement(value:number) {
        for (let index = 0; index < value; index++) {
            await this.page.getByRole('button', { name: 'Delete' }).first().click();            
        }
    }
}