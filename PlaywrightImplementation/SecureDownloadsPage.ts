import { expect, Locator, Page } from '@playwright/test';
import { ISecureDownloadOps } from '../Operations/ISecureDownloadOps';
const fs = require('fs');

export class SecureDownloadsPage implements ISecureDownloadOps {
    readonly page: Page;
    readonly heading: Locator;
    readonly downloadLink: Locator;
    readonly body: Locator;
    readonly fileLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3', { hasText: 'Secure File Downloader' });
        this.downloadLink = page.getByRole('link', { name: 'Hubble_ultra_deep_field.jpg', exact: true });
        this.body = page.locator('body');
        this.fileLink = page.locator('[class="example"] a[href]');
    }

    async gotoSecureFileDownloadsPage(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/download_secure");
    }

    async checkSecureFileDownloadHeading(expected: string): Promise<void> {
        await expect(this.heading).toHaveText(expected);
    }

    async checkDownloadLink(expectedLink: string): Promise<void> {
        await expect(this.downloadLink).toHaveAttribute('href', `download_secure/${expectedLink}`);
        await expect(this.downloadLink).toHaveText(expectedLink);
        await expect(this.downloadLink).toBeVisible();
    }

    async clickDownloadFile(filename: string, path: string): Promise<void> {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: `${filename}`, exact: true }).click();
        const download = await downloadPromise;
        await download.saveAs(path);
    }

    async checkDownloadedFile(path: string): Promise<void> {
        expect(fs.existsSync(path)).toBeTruthy();
    }

    async checkUnsuccessfulHeading(expectedText: string): Promise<void> {
        await expect(this.body).toHaveText(expectedText);
    }

    async checkAvailableFilesAreMoreThan1(): Promise<void> {
        expect(await this.fileLink.count()).toBeGreaterThan(1);
    }
}