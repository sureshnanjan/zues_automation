import { expect, Locator, Page } from '@playwright/test';
import {ShiftingContent} from "../Operations/ShiftingContentOps"
export class ShiftingContentPages implements ShiftingContent{
    readonly page: Page;
    heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3', { hasText: 'Shifting Content' })
    }
    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com/shifting_content')
    }
    async checkHeading(headingText: string): Promise<void> {
        await expect(this.heading).toHaveText(headingText)
    }
    Ex1Menu(): void {
        throw new Error('Method not implemented.');
    }
    Mlink1(): void {
        throw new Error('Method not implemented.');
    }
    Mlink2(): void {
        throw new Error('Method not implemented.');
    }
    Mlink3(): void {
        throw new Error('Method not implemented.');
    }
    Ex2Img(): void {
        throw new Error('Method not implemented.');
    }
    Ilink1(): void {
        throw new Error('Method not implemented.');
    }
    Ilink2(): void {
        throw new Error('Method not implemented.');
    }
    Ilink3(): void {
        throw new Error('Method not implemented.');
    }
    Ilink4(): void {
        throw new Error('Method not implemented.');
    }
    Ex3List(): void {
        throw new Error('Method not implemented.');
    }
  
}

