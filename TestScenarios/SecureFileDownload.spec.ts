const { test, expect } = require('@playwright/test');
import { HomePage } from "../PlaywrightImplementation/HomePage";
import { SecureDownloadsPage } from "../PlaywrightImplementation/SecureFileDownload";
import { UploadFilePage } from "../PlaywrightImplementation/UploadFile";

test.describe('Launch secure file download page and unsucessful creds', () =>{
    test.describe('Unsucessfully sign in with incorrect username and password', () => {
    test.use({ httpCredentials: { username: 'username', password: 'passcode' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        const herokuapphomepage = new HomePage(page)
        await herokuapphomepage.visit()
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

test.describe('Unsucessfully sign in with incorrect username', () => {
    test.use({ httpCredentials: { username: 'username', password: 'admin' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        const herokuapphomepage = new HomePage(page)
        await herokuapphomepage.visit()
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

test.describe('Unsucessfully sign in with incorrect password', () => {
    test.use({ httpCredentials: { username: 'admin', password: 'passcode' } });
    test('User should not be able to sign in to the secure file downloader page', async ({ page }) => {
        const herokuAppSecureDownloads = new SecureDownloadsPage(page);
        const herokuapphomepage = new HomePage(page)
        await herokuapphomepage.visit()
        await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
        await herokuAppSecureDownloads.checkUnsuccessfulHeading('Not authorized');
    });
});

});

test.describe('Launch secure file download page and sucessful creds', () =>{
    test.describe('Launching secure file download page with correct username and correct password', () => {
        test.use({ httpCredentials: { username: 'admin', password: 'admin' } });
            test('User should be able to sign in to the secure file downloader page and see proper heading of the page', async ({ page }) => {
                const herokuAppSecureDownloads = new SecureDownloadsPage(page);
                const herokuapphomepage = new HomePage(page)
                await herokuapphomepage.visit()
                await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
                await herokuAppSecureDownloads.checkSecureFileDownloadHeading('Secure File Downloader');
            });

         /*    test('Checking the number of files available to download are more than 1', async ({ page }) => {
                const herokuAppSecureDownloads = new SecureDownloadsPage(page);
                await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
                await herokuAppSecureDownloads.checkAvailableFilesAreMoreThan1();
            }); */

            test('Checking if download file link is present or not for the uploaded file', async ({ page }) => {
                const uploadFilePage = new UploadFilePage(page);
                const herokuAppSecureDownloads = new SecureDownloadsPage(page);
                const herokuapphomepage = new HomePage(page)
                await herokuapphomepage.visit()
                await uploadFilePage.goto();
                await uploadFilePage.chooseFile("D:/TESTDATA/Upload/canvas.png");
                await uploadFilePage.uploadFile();
                await herokuapphomepage.visit()
                await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
                await herokuAppSecureDownloads.checkDownloadLink('canvas.png');
            }, { timeout: 80000 });

            test('Downloading the uploaded file from secure file downloads page', async ({ page }) => {
                const herokuAppSecureDownloads = new SecureDownloadsPage(page);
                const herokuapphomepage = new HomePage(page)
                await herokuapphomepage.visit()
                await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
                await herokuAppSecureDownloads.clickDownloadFile('canvas.png', 'D:/TESTDATA/Download');
            });

            test('Checking the file is downloaded', async ({ page }) => {
                const herokuAppSecureDownloads = new SecureDownloadsPage(page);
                const herokuapphomepage = new HomePage(page)
                await herokuapphomepage.visit()
                await herokuAppSecureDownloads.gotoSecureFileDownloadsPage();
                await herokuAppSecureDownloads.clickDownloadFile('canvas.png', 'D:/TESTDATA/Download');
                await herokuAppSecureDownloads.checkDownloadedFile("D:/TESTDATA/Download/canvas.png");
            });
    });
});