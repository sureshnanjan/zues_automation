import { Locator, Page } from "@playwright/test";
import { IHerokuHomePage } from "../Interface/IHomePage";

export class HerokuHomePage implements IHerokuHomePage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly subHeading: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h1', {hasText: 'Welcome to the'});
        this.subHeading = page.locator ('h2', {hasText: 'Available Examples'});
    }
    async visit() {
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
    async goToExample(toHaveTitle : string) {
        await this.page.getByRole('link', {name : toHaveTitle}).click();
    }
    checkHeading() {
        throw new Error("Method not implemented.");
    }
    checksubHeading() {
        throw new Error("Method not implemented.");
    }
}