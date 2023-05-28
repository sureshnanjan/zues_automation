import { expect, Locator, Page } from '@playwright/test';
import assert from 'assert';
/**
 * Page object representing the Form Authentication page.
 */
export class FormAuthPage {
    /**
   * Creates an instance of the FormAuthPage page object.
   *
   * @param {Page} page - The Playwright test page.
   */
    page: Page
    username_textbox: Locator
    password_textbox: Locator
    login_button: Locator
    headingtext :Locator

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.headingtext =  page.getByRole('heading', { name: 'Login Page' })
    }

    /**
   * Performs the login operation with the provided username and password.
   *
   * @param {string} username - The username to fill in the username textbox.
   * @param {string} password - The password to fill in the password textbox.
   */

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await this.page.getByText('You logged into a secure area! ×').isVisible;

    }

    /**
   * Checks if the heading text on the Form Authentication page matches the expected heading.
   */
    async checkheading(){
        await this.page.getByRole('link', { name: 'Form Authentication' }).click();
        const actualHeadingText = await this.headingtext.innerText();
        assert.equal(actualHeadingText, 'Login Page');
    };

    /**
   * Performs the logout operation.
   */
    async logout(){
        await this.page.getByRole('link', { name: 'Logout' }).click();
        if(await this.page.getByText('You logged out of the secure area! ×').isVisible){
            console.log("test passed")
        }
        else{
            console.log("test failed")
        }

    };
    }