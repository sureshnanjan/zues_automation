const { test, expect } = require('@playwright/test');
import { SecureDownloadsPage } from "../PlaywrightImplementation/SecureDownloadsPage";
test.use({httpCredentials : {username : 'admin', password : 'admin'}});

test('Visiting Secure File Dowloader page', async ({ page }) => {
    const herokuAppSecureDownloads = new SecureDownloadsPage(page);
    await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
});

test('Check heading of Secure File Downloader page', async ({ page }) => {
    const herokuAppSecureDownloads = new SecureDownloadsPage(page);
    await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
    await herokuAppSecureDownloads.checkSecureFileDownloadHeading('Secure File Downloader');
});

test('Checking if download file link is present or not', async ({ page }) => {
    const herokuAppSecureDownloads = new SecureDownloadsPage(page);
    await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
    await herokuAppSecureDownloads.checkDownloadLink('testdoc.txt');
});

test('Downloading the file', async ({ page }) => {
    const herokuAppSecureDownloads = new SecureDownloadsPage(page);
    await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
    await herokuAppSecureDownloads.clickDownloadFile('testdoc.txt','download/testdoc.txt');
});

test('Checking the file is downloaded', async ({ page }) => {
    const herokuAppSecureDownloads = new SecureDownloadsPage(page);
    await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
    await herokuAppSecureDownloads.clickDownloadFile('testdoc.txt','download/testdoc.txt');
    await herokuAppSecureDownloads.checkDownloadedFile('download/testdoc.txt');
});