import { expect, Locator, Page } from '@playwright/test';
import { IInputOperations } from '../Operations/IInputOperations';
const fs = require('fs');

export class InputsPage implements IInputOperations {
    readonly page: Page;
    readonly heading: Locator;
    readonly numberInputFieldLabel: Locator;
    readonly inputField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3', { hasText: 'Inputs' });
        this.numberInputFieldLabel = page.getByText('Number');
        this.inputField = page.locator('input[type=number]');
    }

    async gotoInputsPage(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/inputs");
    }

    async checkHeading(headingText: string): Promise<void> {
        await expect(this.heading).toHaveText(headingText);
    }

    async checkInputFieldLabel(numberInputFieldLabel: string): Promise<void> {
        await expect(this.numberInputFieldLabel).toHaveText(numberInputFieldLabel);
    }

    async enterNumberInNumberInputField(Number: number): Promise<void> {
        await this.inputField.fill("" + Number);
    }

    async enterNumberAndVerifyInNumberInputField(Number: number): Promise<void> {
        await this.inputField.fill("" + Number);
        await expect(this.inputField).toHaveJSProperty('valueAsNumber', Number);
    }

    async verifyNextNumber(expectedNumber: number): Promise<void> {
        await this.page.keyboard.press('ArrowUp');
        await expect(this.inputField).toHaveJSProperty('valueAsNumber', expectedNumber);
    }

    async verifyPreviousNumber(expectedNumber: number): Promise<void> {
        await this.page.keyboard.press('ArrowDown');
        await expect(this.inputField).toHaveJSProperty('valueAsNumber', expectedNumber);
    }
}