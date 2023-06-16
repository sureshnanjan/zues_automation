import { expect, Locator, Page } from "@playwright/test";
import { IFileUpload } from "../Operations/IFileUploadOps";

export class FileUpload implements IFileUpload{

    readonly page: Page
    readonly heading: Locator
    readonly chooseAFile: Locator
    readonly multipleFiles: Locator
    readonly uploadBtn: Locator
    readonly errorMessage: Locator
    readonly uploadedFile: Locator

    constructor(page: Page){
        this.page = page
        this.heading = page.locator('//*[@id="content"]/div[1]/h3')
        this.chooseAFile = page.locator('//*[@id="file-upload"]')
        this.multipleFiles = page.locator('//*[@id="drag-drop-upload"]')
        this.uploadBtn = page.locator('//*[@id="file-submit"]')
        this.errorMessage = page.locator('h1')
        this.uploadedFile = page.locator('//*[@id="uploaded-files"]')
    }

    async chooseFile(path: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.chooseAFile.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path);
    }

    async verifyChosenFile(filename: string){
        expect(await this.chooseAFile.inputValue()).toContain(filename)
    }

    async uploadFile() {
        await this.uploadBtn.click()
    }

    async verifyError(){
        await expect(this.errorMessage).toHaveText('Internal Server Error')
    }

    async verifyUploadedFile(filename: string) {
        await expect(this.uploadedFile).toHaveText(filename)
    }

    async verifyHeading(expectedHeading: string) {
        await expect(this.heading).toHaveText(expectedHeading)
    }

}