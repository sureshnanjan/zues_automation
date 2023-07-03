import { chromium, Browser, Page, ElementHandle, Locator, expect } from '@playwright/test';
import { IDynamicControls } from '../Operations/IDynamicControl'
import { equal } from 'assert';

export class DynamicControlswithInterface implements IDynamicControls {
    private browser: Browser;
    private page: Page;
    readonly pageHeading: Locator;
    readonly pageContent: Locator;
    readonly checkboxButton: Locator;
    readonly loadingIndicator: Locator;
    readonly textBox: Locator;

    /**
     * Constructs an instance of the DynamicControlswithInterface class.
     * @param page The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//*[@id="content"]/div[1]/h4[1]');
        this.pageContent = page.locator('p');
        this.checkboxButton = page.locator('#checkbox-example button');
        this.loadingIndicator = page.locator('#loading');
        this.textBox = page.locator('#input-example input');
    }

    /**
     * Verifies the heading of the page.
     * @param expectedHeading The expected heading text.
     */
    async verifyHeading(expectedHeading: string) {
        const actualHeading = await this.pageHeading.textContent();
        expect(actualHeading).toBe(expectedHeading);
    }

    /**
     * Verifies the description on the Dynamic Controls page.
     */
    async verifyDescription() {
        const description = await this.pageContent.textContent();
        const text = 'This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.'
        expect(description).toBe(text);
    }

    /**
     * Selects the checkbox.
     */
    async selectCheckbox() {
        await this.page.check('#checkbox input');
    }

    /**
     * Clicks the Remove button.
     */
    async clickRemove() {
        await this.checkboxButton.click()
    }

    /**
     * Verifies the confirmation text displayed after clicking remove/add/enable/disable button.
     * @param expectedText The expected confirmation text.
     */
    async verifyConfirmationText(expectedText: string) {
        const confirmationText = await this.page.$('#message');
        const text = await confirmationText?.innerText();
    }

    /**
     * Verifies the loading indicator.
     */
    async verifyLoadingIndicator() {
        await this.loadingIndicator.first().isVisible()

    }

    /**
     * Verifies the text displayed besides the loading indicator.
     * @param expectedText The expected text.
     */
    async verifyLoadingIndicatorText(expectedText: string) {
        const loadingText = await this.page.$('#input-example p');
        const text = await loadingText?.innerText();

    }

    /**
     * Clicks the Add button.
     */
    async clickAdd() {
        await this.checkboxButton.click()
    }

    /**
     * Verifies if the textbox is enabled.
     * @returns True if the textbox is enabled, false otherwise.
     */
    async verifyTextboxEnabled() {
        const textbox = await this.textBox
        const isEnabled = await textbox?.isEnabled();
        return isEnabled;
    }

    /**
     * Clicks the Enable button.
     */
    async clickEnable() {
        await this.page.click('#input-example button');
    }

    /**
     * Verifies if the textbox is disabled.
     * @returns True if the textbox is disabled, false otherwise.
     */
    async verifyTextboxDisabled() {
        const textbox = await this.textBox
        const isDisabled = await textbox?.isDisabled();
        return isDisabled;

    }

    /**
     * Clicks the Disable button.
     */
    async clickDisable() {
        await this.page.click('#input-example button');
    }

    /**
     * Enters the specified text in the textbox.
     * @param text The text to be entered in the textbox.
     */
    async enterText(text: string) {
        await this.textBox.fill(text);
    }

    /**
     * Retrieves the value of the input field.
     * @returns The value of the input field.
     */
    async getInputFieldValue() {
        const value = await this.page.getByRole('textbox').inputValue()
        return value;
    }
}
