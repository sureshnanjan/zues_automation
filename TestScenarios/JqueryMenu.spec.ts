import { test, expect } from '@playwright/test';
import { JqueryMenuPage } from '../PlaywrightImplementation/JqueryMenuPage';
import { HomePage } from '../PlaywrightImplementation/HomePage';

test('Visiting JQuery-UI Menu page', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    //add assertion
});

test('Verfying the heading on JQuery-UI Menu page', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.verifyHeading('JQueryUI - Menu');
});

test('Verfying if the hyperlink is present', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.verifyHyperlinkPresent()
});

test('Verfying if the hyperlink is clickable', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickHyperlink();
});

test('Verfying if the hyperlink redirects correctly or not', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickHyperlink();
    await jquerypage.verifyUrl('https://api.jqueryui.com/menu/');
});

test('Verfying text of both the menu options', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.verifyDisabledText('Disabled');
    await jquerypage.verifyEnabledText('Enabled');
});

test('Checking if the enabled menu option is clickable', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
});

test('Verfying the text of downloads option in Enabled menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.verifyDownloadsText('Downloads');
});

test('Verfying click on downloads option in Enabled menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.verifyDownloadsText('Downloads');
    await jquerypage.clickDownloads();
});

test('Verfying the downloaded file when PDF option is selected from the menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.clickDownloads();
    await jquerypage.clickPdfandVerify();
});

test('Verfying the downloaded file when CSV option is selected from the menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.clickDownloads();
    await jquerypage.clickCsvandVerify();
});

test('Verfying the downloaded file when Excel option is selected from the menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.clickDownloads();
    await jquerypage.clickExcelandVerify();
});

test('Checking the back to jquery menu option in enabled menu', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.clickBackToJqueryUI();
});

test('Verifying if the back to jquery menu option worked or not', async ({ page }) => {
    const jquerypage = new JqueryMenuPage(page);
    await jquerypage.gotoJqueryMenuPage();
    await jquerypage.clickEnabled();
    await jquerypage.clickBackToJqueryUI();
    await jquerypage.returnToPrevScreen('https://the-internet.herokuapp.com/jqueryui');
});







