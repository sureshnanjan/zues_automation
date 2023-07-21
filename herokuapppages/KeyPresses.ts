// KeyPressesPage Automation
import { expect, Locator, Page } from '@playwright/test';
import { IKeyPresses } from '../Operations/IKeyPresses';

/* The KeyPresses class implements the IKeyPresses interface. */
export class KeyPresses implements IKeyPresses{
    readonly page: Page;
    readonly heading: Locator;
    readonly paragraph: Locator;
    readonly TextField: Locator;
    
    headerText = 'Key Presses';
    paragraphText = 'Key presses are often used to interact with a website (e.g., tab order, enter, escape, etc.). Press a key and see what you inputted.';
    // keyValue ='A';

    /**
     * The constructor function initializes properties for a page object, including locators for a heading,
     * paragraph, and text field.
     * @param {Page} page - The "page" parameter is an instance of the Page class. It is used to interact
     * with the web page and locate elements on the page using locators.
     */
    constructor(page: Page) {
            this.page = page;
            this.heading = page.locator('h3', { hasText: this.headerText});
            this.paragraph = page.locator('p', { hasText: this.paragraphText });
            this.TextField = page.locator('p',{hasText: 'You entered:'});
    }
    /**
     * The function "goto" navigates the page to the specified URL.
     */
    async goto(): Promise<void> {
      await this.page.goto('https://the-internet.herokuapp.com/key_presses')         
    }
    /**
     * The function "verifyheader" checks if the heading element is visible.
     */
    async verifyheader():Promise<void> {
      await expect(this.heading).toBeVisible();
    }
    /**
     * The function verifies if a paragraph element is visible on the page.
     */
    async verifyParagraph():Promise<void> {
      await expect(this.paragraph).toBeVisible();
    }
    /**
     * The function performs a key press action on a web page using the provided key.
     * @param {string} key - The key parameter is a string that represents the key to be pressed on
     * the keyboard. It can be any valid keyboard key such as "Enter", "Escape", "ArrowUp", "a", "b",
     * etc.
     */
    async performKeyPress(key:string):Promise<void> {
      await this.page.keyboard.press(key);
      await this.page.waitForTimeout(5000);
    }
    /**
     * The function verifies if a text field is visible.
     */
    async verifyKeyPressed():Promise<void> {
      await expect(this.TextField).toBeVisible();
    }
    /**
     * The function verifies that a text field has the expected text.
     * @param {string} key - The key parameter is a string that represents the value entered into a
     * text field.
     */
    async verifyTextField(key:string):Promise<void> {
      await expect(this.TextField).toHaveText('You entered: '+ key.toUpperCase());
    }
}