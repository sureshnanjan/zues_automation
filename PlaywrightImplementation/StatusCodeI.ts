import { IStatusCode } from "../Operations/StatusCode";
import { Locator, Page } from '@playwright/test';
import assert from "assert";
export class StatusCode implements IStatusCode{
    static link() {
        throw new Error('Method not implemented.');
    }
    static goBacktoStatusPage() {
        throw new Error('Method not implemented.');
    }
    static page200() {
        throw new Error('Method not implemented.');
    }
    static check200StatusCodePage() {
        throw new Error('Method not implemented.');
    }
    static linkOnStatusPage() {
        throw new Error('Method not implemented.');
    }
    static page404() {
        throw new Error('Method not implemented.');
    }
    static check404StatusCodePage() {
        throw new Error('Method not implemented.');
    }
    static page301() {
        throw new Error('Method not implemented.');
    }
    static check301StatusCodePage() {
        throw new Error('Method not implemented.');
    }
    static page500() {
        throw new Error('Method not implemented.');
    }
    static check500StatusCodePage() {
        throw new Error('Method not implemented.');
    }
    static goto() {
        throw new Error('Method not implemented.');
    }
    static checkheading() {
        throw new Error('Method not implemented.');
    }
    static checkcontent() {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    Content: Locator;
    pageHeading: Locator;
    pagelink: Locator;
    status200: Locator;
    status404: Locator;
    status301: Locator;
    status500: Locator;
    statusPagelink: Locator;
    ContentOnStatus200Page: any;
    ContentOnStatus404Page: Locator;
    ContentOnStatus301Page: Locator;
    ContentOnStatus500Page: Locator;
    constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', {name:'Status Codes'});
    this.Content = page.getByText('HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go');
    this.pagelink = page.getByRole('link', {name:'here'});
    this.status200 = page.getByRole('link',{name:'200'});
    this.status404 = page.getByRole('link',{name:'404'});
    this.status301 = page.getByRole('link',{name:'301'});
    this.status500 = page.getByRole('link',{name:'500'});
    this.statusPagelink = page.getByRole('link', {name:'here'});
}
    async goto() {
        /**Clicking on the Status Code link form the main home page */
       await this.page.getByRole('link',{name : 'Status Codes'}).click();
    }
   
    async checkHeading(expectedHeading: string): Promise<void> {
        /**Checking the Heading of the page */
        const actualheading = await this.pageHeading.innerText();
        console.log(actualheading);
        assert.equal(actualheading, expectedHeading);
    }
    
    async checkContent(expectedContent: string){
        /**Checking the Content of the page that is displayed */
        const actualContent = await this.Content.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedContent);
    }

    async link(expectedLink:string) {
        /**Check the link available within the content */
        const actualText = this.pagelink.innerText;
        console.log(actualText);
        assert.equal(actualText, expectedLink);
        this.pagelink.click();
        await this.page.waitForURL("https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml");
    }
   
    async goBacktoStatusPage(){
        await this.page.goBack();
        await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes");
}
    async page200(expectedStatus200:string) {
        /**Check the 200 status code link available on the page */
        const actualText = this.status200.innerText;
        console.log(actualText);
        assert.equal(actualText, expectedStatus200);
        this.status200.click();
        await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes/200");
    }
    
    async check200StatusCodePage(expectedContentStatus200:string) {
        /**Checking the Content of the Status Code page that is displayed */
        this.ContentOnStatus200Page = this.page.getByText('This page returned a 200 status code.');
        const actualContent = await this.ContentOnStatus200Page.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedContentStatus200);
    }
    async page404(expectedStatus404: string) {
       /**Check the 404 status code link available on the page */
       const actualText = this.status404.innerText;
       console.log(actualText);
       assert.equal(actualText, expectedStatus404);
       this.status404.click();
       await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes/404");
    }
    async check404StatusCodePage(expectedContentStatus404:string) {
        /**Checking the Content of the Status Code page that is displayed */
        this.ContentOnStatus404Page = this.page.getByText('This page returned a 404 status code.');
        const actualContent = await this.ContentOnStatus404Page.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedContentStatus404);
    }

    async page301(expectedStatus301: string) {
       /**Check the 301 status code link available on the page */
       const actualText = this.status301.innerText;
       console.log(actualText);
       assert.equal(actualText, expectedStatus301);
       this.status301.click();
       await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes/301");
    }
   
    async check301StatusCodePage(expectedContentStatus301:string) {
        /**Checking the Content of the Status Code page that is displayed */
        this.ContentOnStatus301Page = this.page.getByText('This page returned a 301 status code.');
        const actualContent = await this.ContentOnStatus301Page.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedContentStatus301);
    }

    async page500(expectedStatus500: string) {
        /**Check the 500 status code link available on the page */
        const actualText = this.status500.innerText;
        console.log(actualText);
        assert.equal(actualText, expectedStatus500);
        this.status500.click();
        await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes/500");
    }
    
    async check500StatusCodePage(expectedContentStatus500:string) {
        /**Checking the Content of the Status Code page that is displayed */
        this.ContentOnStatus500Page = this.page.getByText('This page returned a 500 status code.');
        const actualContent = await this.ContentOnStatus500Page.innerText();
        console.log(actualContent);
        assert.equal(actualContent, expectedContentStatus500);
    }

    async linkOnStatusPage(expectedStatusLink:string) {
         /**Check the link available on the status page */
         const actualText = this.statusPagelink.innerText;
         console.log(actualText);
         assert.equal(actualText, expectedStatusLink);
         this.statusPagelink.click();
         await this.page.waitForURL("https://the-internet.herokuapp.com/status_codes");
    }

}
