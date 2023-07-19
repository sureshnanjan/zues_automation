import { chromium, Browser, Page, ElementHandle, Locator, expect } from '@playwright/test';
import { IDynamicLoading } from '../Operations/IDynamicLoading'
import assert from 'assert';

export class DynamicLoadingwithInterface implements IDynamicLoading {
    [x: string]: any;
    private browser: Browser;
    private page: Page;
    readonly pageHeading: Locator;
    readonly pageContent: Locator;
    readonly button: Locator;
    static page: any;
    textBox: any;
    static locator: any;

    constructor(pagearg: Page){  
        this.pageContent = DynamicLoadingwithInterface.locator('//*[@id="content"]/div/p[2]', {hasText: 'There are two examples. One in which an element already exists on the page but it is not displayed. And anonther where the element is not on the page and gets added in.'})
      }

    async gotoDynamicLoading(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
    }
    async checkPageHeading(expectedPageHeading: String): Promise<void> {
        const actualHeading = await this.pageHeading.textContent();
        expect(actualHeading).toBe(expectedPageHeading);
    }
    async clickFirstkHyperLink(): Promise<void> {
        await this.page.getByRole('link', {name: 'Example 1: Element on page that is hidden'}).click();
    }
    async checkPageSubHeadingOfHidden(expectedsubPageHeadingOfHidden: String): Promise<void> {
        const actualHiddenSubHeading = await this.pageHeading.textContent();
        expect(actualHiddenSubHeading).toBe(expectedsubPageHeadingOfHidden);
    }
    async clickSecondkHyperLink(): Promise<void> {
        await this.page.getByRole('link', {name: 'Example 2: Element rendered after the fact'}).click();
    }
    async checkPageSubHeadingOfRendered(expectedsubPageHeadingOfRendered: String): Promise<void> {
        const actualRenderedSubHeading = await this.pageHeading.textContent();
        expect(actualRenderedSubHeading).toBe(expectedsubPageHeadingOfRendered);
    }
    async clickStartButton(): Promise<void> {
        await this.locator.getByRole('button', {name: 'Start'}).click();          
    }
}