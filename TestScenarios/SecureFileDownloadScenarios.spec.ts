const { test, expect } = require('@playwright/test');
import { SecureDownloadsPage } from "../PlaywrightImplementation/SecureDownloadsPage";
import { UploadFilePage } from "../PlaywrightImplementation/UploadFilePage";

test.describe('Launching secure file download page with incorrect username and incorrect password', () => {
    test.use({ httpCredentials: { username: 'username', password: 'passcode' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

test.describe('Launching secure file download page with incorrect username and correct password', () => {
    test.use({ httpCredentials: { username: 'username', password: 'admin' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

test.describe('Launching secure file download page with correct username and incorrect password', () => {
    test.use({ httpCredentials: { username: 'admin', password: 'passcode' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

test.describe('Launching secure file download page with correct username and correct password', () => {
    test.use({ httpCredentials: { username: 'admin', password: 'admin' } });
    test('User should be able to sign in to the secure file downloader page and see proper heading of the page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkSecureFileDownloadHeading('Secure File Downloader');
    });

    test('Checking the number of files available to download are more than 1', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkAvailableFilesAreMoreThan1();
    });

    test('Checking if download file link is present or not for the uploaded file', async ({ page }) => {
        const uploadFilePage = new UploadFilePage(page);
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await uploadFilePage.goto();
        await uploadFilePage.chooseFile();
        await uploadFilePage.uploadFile();
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkDownloadLink('Hubble_ultra_deep_field.jpg');
    }, { timeout: 80000 });

    test('Downloading the uploaded file from secure file downloads page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.clickDownloadFile('Hubble_ultra_deep_field.jpg', 'download/Hubble_ultra_deep_field.jpg');
    });

    test('Checking the file is downloaded', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.clickDownloadFile('Hubble_ultra_deep_field.jpg', 'download/Hubble_ultra_deep_field.jpg');
        await herokuAppSecureDownloads.checkDownloadedFile('download/Hubble_ultra_deep_field.jpg');
    });
});