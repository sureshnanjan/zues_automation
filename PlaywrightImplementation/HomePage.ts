import { Locator, Page, expect } from "@playwright/test";
import { IHomePage } from "../Operations/IHomePage";

export class HomePage implements IHomePage{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async visit() {

        await this.page.goto("https://the-internet.herokuapp.com/");

    }     
 }