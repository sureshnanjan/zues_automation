import { IHomePage } from "../Operations/IHomePage";
import {Locator, Page } from '@playwright/test';
import expect from '@playwright/test';

export class HomePage implements IHomePage{
    static getExampleCount() {
      throw new Error('Method not implemented.');
    }
    page: Page;
    constructor(page){
        this.page =page
    }
    async visitPage(expected:string) {
            this.page.goto(expected)
    }
}
