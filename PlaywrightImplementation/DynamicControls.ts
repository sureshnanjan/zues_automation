import { IDynamicControls } from "../Operations/IDynamicControl";
import { expect, Page } from "@playwright/test"

class DynamicControls implements IDynamicControls{
    readonly page
    readonly heading
    readonly description
    readonly checkbox
    readonly removeButton
    readonly addButton
    readonly addRemovetext
    readonly loadingIndicator
    readonly textbox
    readonly enableButton
    readonly disableButton
    readonly enableDisableText

    constructor(page:Page){
        this.page = page
        this.heading = page.locator('h4')
        this.description = page.locator('//*[@id="content"]/div[1]/p')
        this.checkbox = page.locator('//*[@id="checkbox"]/input')
        this.removeButton = page.locator('//*[@id="checkbox-example"]/button', {hasText: 'Remove'})
        this.addButton = page.locator('//*[@id="checkbox-example"]/button', {hasText: 'Add'})
        this.addRemovetext = page.locator('//*[@id="checkbox-example"]/p')
        this.loadingIndicator = page.locator('//div[@id="loading"]')
        this.textbox = page.locator('//*[@id="input-example"]/input')
        this.enableButton = page.locator('//*[@id="input-example"]/button', {hasText: 'Enable'})
        this.disableButton = page.locator('//*[@id="input-example"]/button', {hasText: 'Disable'})
        this.enableDisableText = page.locator('//*[@id="input-example"]/p')
    }

    async verifyHeading(expectedHeading: string) {
        await expect(this.heading.first()).toHaveText(expectedHeading)
    }
    async verifyDescription(expectedDescription: string) {
        await expect(this.description).toHaveText(expectedDescription)
    }
    async selectCheckbox() {
        await this.checkbox.click()
    }
    async clickRemove() {
        await this.removeButton.click()
    }
    async verifyConfirmationText(expectedText: any) {
        await expect(this.addRemovetext).toHaveText(expectedText)
    }
    async verifyLoadingIndicator() {
        await expect(this.loadingIndicator.locator('img')).toHaveAttribute('src', '/img/ajax-loader.gif')
    }
    async verifyLoadingIndicatorText(expectedText: string) {
        await expect(this.loadingIndicator).toHaveText(expectedText)
    }
    async clickAdd() {
        await this.addButton.click()
    }
    async verifyTextboxEnabled() {
        expect(await this.textbox.isEnabled()).toBeTruthy()
    }
    async clickEnable() {
        await this.enableButton.click()
    }
    async verifyTextboxDisabled() {
        expect(await this.textbox.isDisabled()).toBeTruthy()
    }
    async clickDisable() {
        await this.disableButton.click()
    }
    async enterText(text: any) {
        await this.textbox.fill(text)
    }
    
}