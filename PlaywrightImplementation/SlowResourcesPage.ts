import { Locator, Page, expect } from "@playwright/test";
import { Slowresource } from "../Operations/SlowResourcesOps"; 
import assert from 'assert';
    /**Create clas to export*/
    export class response implements Slowresource {  
    /**Declare variables*/
    readonly page: any;
        pageHeading: Locator;
        Content: Locator;
    constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', { name: 'Slow Resources' });
    this.Content = page.getByText('At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');
    }
       
    async goto() {
        /**Clicking on the Slow Resources link form the main home page */
       await this.page.getByRole('link',{name : 'Slow Resources'}).click();
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

}