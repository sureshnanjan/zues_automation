import { test, expect } from '@playwright/test';
import { herokuHome } from '../typescriptsrc/PageObject/herokuHome';
import { FileDownload } from '../PageObject/FileDownload';

test('Verify Heading', async ({ page }) => {
    const FD = new FileDownload(page);
    const  expectedHeadingFileDownloadPage="File Downloader";
    await FD.visit();
    await FD.checkHeading(expectedHeadingFileDownloadPage);
})

test('Check if link present', async ({ page }) => {
    const FD = new FileDownload(page);
    await FD.visit();
    //await page.pause();
    await FD.checkforLink();

})

test('link download', async ({ page }) => {
    const FD = new FileDownload(page);
    await FD.visit();
    await FD.dowloadFile();

})

test('check if downloaded ', async ({ page }) => {
    const FD = new FileDownload(page);
    await FD.visit();
    await FD.dowloadFile();
    //await page.pause();
    //await page.waitForTimeout(10000);
    await FD.checkFileDownload();

})





