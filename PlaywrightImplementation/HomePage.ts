import { Locator, Page, expect } from "@playwright/test";
import { IHomePage } from "../Operations/IHomeOps";

export class HomePage implements IHomePage{
    page: any;
    async visit() {
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
}