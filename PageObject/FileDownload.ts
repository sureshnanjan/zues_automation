/* The line `import { expect, FrameLocator, Locator, Page } from '@playwright/test';` is importing
specific classes and functions from the `@playwright/test` library. */
import { expect, FrameLocator, Locator, Page } from '@playwright/test';
import { IFileDownload } from '../Operations/IFileDownload';
const fs = require("fs");


/* The FileDownload class is used for downloading files. */
export class FileDownload implements IFileDownload{

    readonly page: Page;
    readonly pageHeading: Locator;
    readonly link: Locator;
    NumberOfLinks: number;
    saveAs: any;
    suggestedFilename: any;
    filePath: any;

    /**
     * The constructor initializes the properties of the class with specific values.
     * @param {Page} page - The `page` parameter is an instance of the `Page` class. It represents a
     * web page and provides methods for interacting with the page's elements and performing actions on
     * the page.
     */
    constructor(page: Page){
        this.page = page;
        this.pageHeading =  page.locator('h3', { hasText: 'File Downloader' });
        this.link = page.getByRole('link', { name: 'dummy 1.txt', exact: true });
        //this.suggestedFilename = "logo.png";
       
    }
    /**
     * The function visits the specified URL using Puppeteer in TypeScript.
     */
    async visit(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/download');
    }
    /**
     * The function checks if the page heading matches the expected heading for a file download page.
     * @param {string} expectedHeadingFileDownloadPage - The expected heading text for the file
     * download page.
     */
    async checkHeading(expectedHeadingFileDownloadPage: string): Promise<void> {
        await expect(this.pageHeading).toHaveText(expectedHeadingFileDownloadPage);
    }
    /**
     * The function checks if a link is visible on the page.
     */
    async checkforLink(): Promise<void> {
        await expect(this.link).toBeVisible();
    }
   
    /**
     * The `downloadFile` function in TypeScript waits for a download event, clicks on a link, saves
     * the downloaded file with a suggested filename, and stores the file path.
     */
    async dowloadFile(): Promise<void> {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            await this.link.click(),
        ])
            const suggestedFileName = download.suggestedFilename();
            this.filePath = 'download/' + suggestedFileName;
            await download.saveAs(this.filePath);
        
    }
  
    /**
     * The function checks if a file exists at a specified file path.
     */
    async checkFileDownload(): Promise<void> {
        expect(fs.existsSync(this.filePath)).toBeTruthy();
    
    }

    
}