import { expect, Locator, Page } from "@playwright/test";
import { IExitIntent } from "../Operations/IExitIntent";

export class ExitIntent implements IExitIntent {
    readonly page : Page;
    readonly heading : Locator;
    readonly content : Locator;
    readonly modalheading : Locator;
    readonly modalcontent : Locator;
    readonly modalclose : Locator;
    
    headertext = "Exit Intent";
    contenttext = "Mouse out of the viewport pane and see a modal window appear.";

    /**
     * 
     * @param page The Playwright page object
     */
    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3', {hasText : this.headertext});
        this.content = page.locator('div p', {hasText : this.contenttext});
        this.modalheading = page.locator('h3', {hasText : "This is a modal window"});
        this.modalcontent = page.locator('div p', {hasText : "It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something)."});
        this.modalclose = page.locator('div p', {hasText : "Close"});
    }

    /**
     * Navigate to Exit Intent page
     */
    async visit(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/exit_intent');
    }

    async verifyHeader() { //removed : Promise<boolean>
        await expect(this.heading).toBeVisible();
    }

    async verifyContentText() { //removed : Promise<boolean>
        await expect(this.content).toBeVisible();
    }

    async checkExitIntentOverlay() { //removed : Promise<boolean>
        await expect(this.modalheading).toBeVisible();
        await expect(this.modalcontent).toBeVisible();
        await expect(this.modalclose).toBeVisible();
    }

    async triggerExitIntent(): Promise<void> {
        await this.page.mouse.move(0,0);
    }
}