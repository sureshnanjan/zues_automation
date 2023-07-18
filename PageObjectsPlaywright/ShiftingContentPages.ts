import { expect, Locator, Page } from '@playwright/test';
import {ShiftingContent} from "../Operations/ShiftingContentOps"
export class ShiftingContentPages implements ShiftingContent{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    visit() {
        throw new Error('Method not implemented.');
    }
    checkHeading(headingText: string): void {
        throw new Error('Method not implemented.');
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

