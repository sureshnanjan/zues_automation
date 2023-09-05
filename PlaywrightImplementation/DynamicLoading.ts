import { chromium, Browser, Page, ElementHandle, Locator, expect } from '@playwright/test';
import { IDynamicLoading } from '../Operations/IDynamicLoading'
import assert from 'assert';

export class DynamicLoadingwithInterface implements IDynamicLoading {
    [x: string]: any;
    private browser: Browser;
    //private page: Page;
    readonly pageHeading: Locator;
    readonly pageContent: Locator;
    readonly button: Locator;
    static page: any;
    textBox: any;
    static locator: any;

    constructor(public page: Page){
        //this.pageContent = DynamicLoadingwithInterface.locator('//*[@id="content"]/div/p[2]', {hasText: 'There are two examples. One in which an element already exists on the page but it is not displayed. And anonther where the element is not on the page and gets added in.'})
      }
    checkPageHeading(expectedPageHeading: String): void {
        throw new Error('Method not implemented.');
    }
    checkPageSubHeadingOfHidden(expectedsubPageHeadingOfHidden: String): void {
        throw new Error('Method not implemented.');
    }
    checkPageSubHeadingOfRendered(expectedsubPageHeadingOfRendered: String): void {
        throw new Error('Method not implemented.');
    }

    async gotoDynamicLoading(){
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
    }
    async clickFirstkHyperLink(){
        await this.page.getByRole('link', {name: 'Example 1: Element on page that is hidden'}).click();
    }
    async clickSecondkHyperLink(){
        await this.page.getByRole('link', {name: 'Example 2: Element rendered after the fact'}).click();
    }
    async clickStartButton(){
        await this.page.getByRole('button', {name: 'Start'}).click();          
    }
}