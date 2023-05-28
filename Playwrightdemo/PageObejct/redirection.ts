import { expect,Locator,Page } from '@playwright/test';
import assert from 'assert';

/**
 * Page object for the Redirection page.
 */

export class Redirection_page {
    readonly page: Page
    readonly headingtext : Locator;

  
   /**
   * Constructs a new instance of the RedirectionPage object.
   * @param {Page} page - The Playwright Page object associated with the page.
   */

    constructor(page){
        this.page = page ;
        this.headingtext = page.getByRole('heading', { name: 'Redirection' })

    }

    /**
    * Checks the headings on the Redirection page.
    */

    async Checkheadings(){
        await this.page.getByRole('link', { name: 'Redirect Link' }).click();
        
        const actualHeadingText = await this.headingtext.innerText();

        assert.equal(actualHeadingText, 'Redirection');
    }

    /**
    * Goes to the next page from the Redirection page.
    */
    async gotonextpage(){
   
        await this.page.getByRole('link', { name: 'here' }).click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/status_codes');

    }


}