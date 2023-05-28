import { expect,Locator,Page } from '@playwright/test';
/**
 * Page object representing the Enable functionality.
 */
export class Enable {
    page: Page
    enable_button: Locator
    enabled_text: Locator
    searchbox: Locator
    heading: Locator

    /**
   * Creates an instance of the Enable page object.
   *
   * @param {Page} page - The Playwright test page.
   */

    constructor(page){
        this.page = page ;
        this.enable_button = page.getByRole('button', { name: 'Enable' });
        this.searchbox= page.getByRole('textbox');
        this.enabled_text = page.getByText('It\'s enabled!')
        this.heading = page.getByRole('heading', { name: 'Enable/disable' })
    }
    /**
   * Checks if the necessary headings are visible on the Dynamic Controls page.
   */

    async Checkheadings(){
        await this.page.getByRole('link', { name: 'Dynamic Controls' }).click();
        await this.page.getByRole('heading', { name: 'Dynamic Controls' }).isVisible;
        if(await this.page.getByRole('heading', { name: 'Enable/disable' }).isVisible){
            console.log("test passed");
        }
        else{
            console.log("test failed")
        }
    }
    /**
   * Enables the input field, fills it with text, and verifies the enabled state.
   */
    async enableinput(){
        await this.page.getByRole('button', { name: 'Enable' }).click();
        if(await this.page.getByText('It\'s enabled!').isVisible){
            console.log("test passed");
        }
        else{
            console.log("test failed");
        }
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox').isEnabled
        await this.page.getByRole('textbox').click();
        await this.page.getByRole('textbox').fill('write anything');
    }
    /**
   * Disables the input field and verifies the disabled state.
   */
    async disableInput(){
        await this.page.getByRole('button', { name: 'Disable' }).click();
        await this.page.getByText('It\'s disabled!').isVisible();
        if(await this.page.getByRole('textbox').isDisabled){
            console.log("test passed")
        }
        else{
            console.log("test failed")
        }
        await this.page.waitForTimeout(2000);
    }

}