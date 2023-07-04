import { IDragDrop } from "../Operations/IJqueryMenu";
import { expect, Locator, Page } from '@playwright/test';

export class BrokenImagePage implements IJqueryMenu{
    page : Page 
    readonly heading: Locator;
    readonly hyperlink: Locator;
    readonly disableText: Locator;
    readonly enabledText: Locator;
    readonly enableMenu: Locator;
    readonly downloadsText: Locator;
    readonly downloadMenu: Locator;
    readonly pdfOption: Locator;
    readonly csvOption: Locator;
    readonly excelOption: Locator;
    readonly backtoJquery: Locator;
    constructor(pagearg: Page){
        this.page = pagearg;
        this.heading = this.page.locator('h3', { hasText: 'JQueryUI - Menu' })
        this.hyperlink = this.page.locator('//*[@id="content"]/div/div/p[1]/a')
        this.disableText = this.page.locator('//*[@id="ui-id-1"]/a')
        this.enabledText = this.page.locator('//*[@id="ui-id-3"]/a')
        this.enableMenu = this.page.locator('//*[@id="ui-id-3"]')
        this.downloadsText = this.page.locator('//*[@id="ui-id-4"]/a')
        this.downloadMenu = this.page.locator('//*[@id="ui-id-4"]')
        this.pdfOption = this.page.locator('//*[@id="ui-id-5"]')
        this.csvOption = this.page.locator('//*[@id="ui-id-6"]')
        this.excelOption = this.page.locator('//*[@id="ui-id-7"]')
        this.backtoJquery = this.page.locator('//*[@id="ui-id-8"]')
    }

    async gotoJqueryMenuPage(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/jqueryui/menu");
    }

    async verifyHeading(expected): Promise<void> {
        expect(this.heading).toHaveText(expected);
    }

    async verifyHyperlinkPresent():Promise<void> {
        expect(this.hyperlink).toBeVisible();
    }

    async clickHyperlink():Promise<void> {
        await this.hyperlink.click()
    }

    async verifyUrl(expected):Promise<void> {
        await expect(this.page).toHaveURL('expected')
    }

    async verifyDisabledText(expected):Promise<void> {
        await expect(this.disableText).toHaveText(expected)
    }

    async verifyEnabledText(expect):Promise<void> {
        await expect(this.enabledText).toHaveText(expected)
    }

    async clickEnabled():Promise<void> {
        await this.enableMenu.click()
    }

    async verifyDownloadsText(expected):Promise<void> {
        await expect(this.downloadsText).toHaveText(expected)
    }

    async clickDownloads():Promise<void> {
        await this.downloadMenu.click()
    }

    async clickPdfandVerify():Promise<void> {
        const [download] = await Promise.all([
            await this.page.waitForEvent('download'),
            await this.pdfOption.click()
            ])
        const path = await download.path();
        console.log(path)
        const url = await download.url();
        console.log(url)
    }

    async clickCsvandVerify():Promise<void> {
        const [download] = await Promise.all([
            await this.page.waitForEvent('download'),
            await this.csvOption.click()
            ])
            const path = await download.path();
            console.log(path)
            const url = await download.url();
            console.log(url)
    }

    async clickExcelandVerify():Promise<void> {
        const [download] = await Promise.all([
            await this.page.waitForEvent('download'),
            await this.excelOption.click()
            ])
        const path = await download.path();
        console.log(path)
        const url = await download.url();
        console.log(url)
    }

    async clickBackToJqueryUI(): Promise<void> {
        await this.backtoJquery.click()
    }

    async returnToPrevScreen(expected):Promise<void> {
        await expect(this.page).toHaveURL(expected)
    }    
}