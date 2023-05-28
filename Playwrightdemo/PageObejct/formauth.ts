import { expect, Locator, Page } from '@playwright/test';
import assert from 'assert';

/**
 * Page object for the Form Authentication page.
 */

export class FormAuth_Page {
    page: Page
    username: Locator
    password: Locator
    loginbutton: Locator
    headingtext : Locator

      /**
        * Constructs a new instance of the FormAuthPage object.
        * @param {Page} page - The Playwright Page object associated with the page.
      */

    constructor(page) {
        this.page = page
        this.username = page.getByLabel('Username')
        this.password = page.getByLabel('Password')
        this.loginbutton = page.getByRole('button', { name: 'Login' })
        this.headingtext= page.getByRole('heading', { name: 'Login Page' })
    }

    /**
        * Logs in with the provided username and password.
        * @param {string} username - The username to fill in the login form.
        * @param {string} password - The password to fill in the login form.
   */

    async login(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click()
        await this.page.getByText('You logged into a secure area!').isVisible;
    }

    /**
        * Asserts the heading text on the Form Authentication page.
    */

    async checkheading(){
        await this.page.getByRole('link', { name: 'Form Authentication' }).click();
        const actualHeadingText = await this.headingtext.innerText();
        assert.equal(actualHeadingText, 'Login Page');
    };

    /**
     * Logs out from the secure area.
    */ 

    async logout(){
        await this.page.getByRole('link', { name: 'Logout' }).click();
        await this.page.getByText('You logged out of the secure area!').isVisible;

    }
   
}