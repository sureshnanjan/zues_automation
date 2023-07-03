import { expect, Locator, Page } from "@playwright/test";
import { UploadFileOperations } from "../Operations/IUploadFilePageOps";

export class UploadFilePage implements UploadFileOperations {
    readonly page: Page;
    readonly pageHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator('h3');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/upload')
    }

    async verifyHeading() {
        await expect(this.pageHeader).toContainText('File Uploader')
    }

    async chooseFile() {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator('#file-upload').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('myfile.pdf');
    }

    async uploadFile() {
        throw new Error("Method not implemented.");
    }
}