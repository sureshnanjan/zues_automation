import { Locator, Page, expect } from "@playwright/test";
import { IBasicAuthOps } from "../Operations/IBAsicAuthOps";



export class HerokuBasicAuth implements IBasicAuthOps {
    
    readonly page: Page;
    readonly basicauthlink: Locator
    readonly successfulheading: Locator
    readonly successfulsubheading: Locator;
    readonly unsuccessfulheading: Locator;
   
    
    constructor(page:Page) {
        
       this.page = page;
       this.basicauthlink = page.getByRole('link', {name: 'Basic Auth'})
       this.successfulheading = page.getByText('Basic Auth' );
       this.successfulsubheading = page.getByText('Congratulations! You must have the proper credentials.' )
       this.unsuccessfulheading = page.getByText('Not authorized');

    }
    async HomePageUrl(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/');
    }
    async ClickBasicAuthLink(): Promise<void> {
        await this.basicauthlink.click();
    }
    async CheckSuccessfulHeading(expected: string): Promise<void> {
        await expect(this.successfulheading).toHaveText(expected);
        await expect(this.successfulheading).toHaveCSS('font-size', '27px')

    }
    async CheckSuccessfulSubHeading(expected: string): Promise<void> {
       
        await expect(this.successfulsubheading).toHaveText(expected);
        await expect(this.successfulsubheading).toHaveCSS('font-size', '16px', );
        await expect(this.successfulsubheading).toHaveCSS('font-weight', '400');
    }
    async CheckUnSucessfulHeading(expected: string): Promise<void>{
        await expect(this.unsuccessfulheading).toHaveText(expected);
        await expect(this.unsuccessfulheading).toHaveCSS('margin','8px')
    }


}
