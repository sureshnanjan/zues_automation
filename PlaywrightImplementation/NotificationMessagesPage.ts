import { Locator, Page, expect } from "@playwright/test";
import { INotificationMessagesOps } from "../Operations/INotificationMessagesOps";
import { IHomePage } from "../Operations/IHomePage";
import assert from "assert";

export class NotificationMessagesPage implements INotificationMessagesOps {
    readonly page: Page;
    readonly heading: Locator;
    readonly content1: Locator;
    readonly content2: Locator;
    readonly pagetext: Locator;
    readonly pagelink: Locator;
    readonly actualmessage:Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Notification Message' });
        this.content1 = page.locator('#content > div > p'); Promise<string>
        //Some rudimentary examples include 'Action successful', 'Action unsuccessful, please try again', etc.
        this.pagetext = page.getByRole('link', { name: 'Click here' });
        this.pagelink = page.getByRole('link', { name: 'Click here' });
        //this.actualmessage = page.locator(String,{ has : 'Action Successful'})
    }

    async gotoNotificationMessagesPage(): Promise<void> {
        await this.page.getByRole('link', { name: 'Notification Messages' }).click();
    }

    async checkHeading(expectedHeading: string): Promise<void> {
        const actualHeading = await this.heading.innerText();
        console.log(actualHeading);
        assert.equal(actualHeading, expectedHeading);
    }

    async checkTextContent(expectedTextContent: string) {
        const actualContent = await this.content1.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedTextContent);
    }

    async verifyLink(expectedText: string, expectedLink: string): Promise<void> {
        const actualText = await this.pagetext.innerText();
        console.log(actualText);
        assert.equal(actualText, expectedText);
        const actualLink = await expect(this.page).toHaveURL('https://www.programsbuzz.com/blog');
        //console.log(actualLink);
        //assert.equal(actualLink, expectedLink);
    }
    
    async loadNewMessage(): Promise<void> {
        await this.page.getByRole('link', { name: 'Click here' }).click();
        const successmessage = 'Action successful'
        const actualmessage = await this.actualmessage.innerText();
        if (actualmessage == successmessage) {
            console.log(actualmessage);
            console.log('Message loaded successfully');
        } else {
            console.log(actualmessage);
            console.log('Message loaded successfully');
        }
        
        
    }
    checkExclaimationIconInNotificationMessage(): void {
        throw new Error("Method not implemented.");
    }
    checkNotificationMessageText(expectedMessage: string): void {
        throw new Error("Method not implemented.");
    }
    checkCloseIconBesidesNotificationMessage(): void {
        throw new Error("Method not implemented.");
    }
    closeNotificationMessage(): void {
        throw new Error("Method not implemented.");
    }
}