import {expect, Locator, Page } from '@playwright/test';

export class DynamicControls{
    readonly page
    readonly removeButton
    readonly addButton
    readonly addRemovetext
    readonly textbox
    readonly enableButton
    readonly disableButton
    readonly enableDisableText

    constructor(page:Page){
        this.page = page
        this.removeButton = page.locator('//*[@id="checkbox-example"]/button', {hasText: 'Remove'})
        this.addButton = page.locator('//*[@id="checkbox-example"]/button', {hasText: 'Add'})
        this.addRemovetext = page.locator('//*[@id="checkbox-example"]/p')
        this.textbox = page.locator('//*[@id="input-example"]/input')
        this.enableButton = page.locator('//*[@id="input-example"]/button', {hasText: 'Enable'})
        this.disableButton = page.locator('//*[@id="input-example"]/button', {hasText: 'Disable'})
        this.enableDisableText = page.locator('//*[@id="input-example"]/p')
    }

    /**
     * Function to click remove button
     */
    async clickRemove(){
        await this.removeButton.click()
    }

    /**
     * Function to verify the text displayed after an action
     * @param confirmationText Enter the expected confirmation text
     */
    async verifyText(confirmationText: string){
        await expect(this.addRemovetext).toHaveText(confirmationText, {timeout: 4000})
    }

    /**
     * Function to click add button
     */
    async clickAdd(){
        await this.addButton.click()
    }

    /**
     * Function to verify textbox is disabled
     */
    async verifyDisabled(){
        expect(await this.textbox.isDisabled()).toBeTruthy()
    }

    /**
     * Function to verify checkbox is enabled
     */
    async verifyEnabled(){
        expect(await this.textbox.isEnabled()).toBeTruthy()
        await expect(this.enableDisableText).toHaveText("It's enabled!")
    }

    /**
     * Function to click enable button
     */
    async clickEnable(){
        await this.enableButton.click()
        await expect(this.textbox).toBeEnabled({timeout:4000})
    }

    /**
     * Function to enter text in the textbox
     */
    async enterText(){
        await this.textbox.fill('Sample text')
    }
    
    /**
     * Function to click disable button
     */
    async clickDisable(){
        await this.disableButton.click()
        await expect(this.textbox).toBeDisabled()
    }

}