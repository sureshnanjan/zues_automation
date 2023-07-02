import { Locator, Page } from "@playwright/test";
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

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Notification Message' });
        this.content1 = page.getByText('The message displayed above the heading is a notification message. It is often u');
        //Some rudimentary examples include 'Action successful', 'Action unsuccessful, please try again', etc.
        this.pagetext = page.getByRole('link', { name: 'Click here' });
        this.pagelink = page.getByRole('link', { name: 'Click here' });
    }

    async gotoNotificationMessagesPage(): Promise<void> {
        await this.page.getByRole('link', { name: 'Notification Messages' }).click();
    }

    async checkHeading(expectedHeading: string): Promise<void> {
        const actualHeading = await this.heading.innerText();
        console.log(actualHeading);
        assert.equal(actualHeading, expectedHeading);
    }

    async checkTextContent(expectedTextContent: string): Promise<void> {
        const actualContent = await this.content1.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedTextContent);
    }

    async verifyLink(expectedText: string, expectedLink: string): Promise<void> {
        const actualText = await this.pagetext.innerText();
        console.log(actualText);
        assert.equal(actualText, expectedText);
        //const actualLink = await this.pagelink.innerText();
        //console.log(actualLink);
        //assert.equal(actualLink, expectedLink);
    }
    
    loadNewMessage(): Promise<void> {
        throw new Error("Method not implemented.");
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

function visit() {
    throw new Error("Function not implemented.");
}
