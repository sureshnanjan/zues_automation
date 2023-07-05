import { expect, Locator, Page } from "@playwright/test";
import { UploadFileOperations } from "../Operations/IUploadFilePageOps";

export class UploadFilePage implements UploadFileOperations {
    readonly page: Page;
    readonly pageHeader: Locator;
    readonly chooseFileButton: Locator;
    readonly uploadFileButton: Locator;
    readonly uploadedFileContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator('h3');
        this.chooseFileButton = page.locator('#file-upload');
        this.uploadFileButton = page.locator('#file-submit');
        this.uploadedFileContainer = page.locator('#uploaded-files');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/upload')
    }

    async verifyHeading() {
        await expect(this.pageHeader).toContainText('File Uploader')
    }

    async chooseFile() {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.chooseFileButton.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./fixtures/uploads/Hubble_ultra_deep_field.jpg');
    }

    async uploadFile() {
        await this.uploadFileButton.click();
        await expect(this.pageHeader).toContainText('File Uploaded!')
        await expect(this.uploadedFileContainer).toContainText('Hubble_ultra_deep_field.jpg')
    }
}