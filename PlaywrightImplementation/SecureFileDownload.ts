import { expect, Locator, Page,  } from '@playwright/test';
import fs from 'fs';
import { ISecureDownloadOps } from '../Operations/ISecureDownloadOps';


export class SecureDownloadsPage implements ISecureDownloadOps{
    readonly page: Page;
    readonly linkSecureFileDownload: Locator;
    readonly heading: Locator;
    readonly unsuccessfulheading: Locator;
    readonly uploadfile: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.linkSecureFileDownload = page.getByRole('link', { name: 'Secure File Download' });
        this.heading = page.locator('//*[@id="content"]/div/h3');
        this.uploadfile = page.getByRole('link', {name: 'canvas.png'});
        this.unsuccessfulheading = page.getByText('Not authorized');
    }
    async gotoSecureFileDownloadsPage(): Promise<void> {
        await this.linkSecureFileDownload.click();
    }
    async checkSecureFileDownloadHeading(expected: string): Promise<void> {
        await expect(this.heading).toHaveText(expected);
    }
    async checkDownloadLink(expectedLink: string): Promise<void> {
        await expect(this.uploadfile).toHaveText(expectedLink);
    }
    async clickDownloadFile(fileName: string, path: string): Promise<void> {
        const [download] = await Promise.all([ 
            this.page.waitForEvent('download'),
        await this.page.getByText(fileName).click()
    ])
        const suggestedFileName = download.suggestedFilename()
       const filename = path+ '/' + suggestedFileName
       await download.saveAs(filename);
   
    }
    async checkDownloadedFile(path: string): Promise<void> {
        expect(fs.existsSync(path)).toBeTruthy()
        console.log("Path is " +path)
    }
    async checkUnsuccessfulHeading(expectedText: string): Promise<void>{
        await expect(this.unsuccessfulheading).toHaveText(expectedText);
        await expect(this.unsuccessfulheading).toHaveCSS('margin','8px')

    }
    async checkAvailableFilesAreMoreThan1(): Promise<void>{

    }
}

