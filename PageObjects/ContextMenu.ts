import {expect, Locator, Page } from '@playwright/test';

export class ContextMenu{
    readonly page
    readonly box

    constructor(page: Page){
        this.page = page
        this.box = page.locator('//*[@id="hot-spot"]')
    }

    /**
     * Function to right click the context menu
     */
    async rightClick(){
        await this.box.click({ button: 'right' })
    }

    /**
     * Function to verify the message on the dialog box
     */
    async verifyDialogMessage(){
        this.page.on('dialog', async dialog => {
            expect(dialog.message().toHaveText('You selected a context menu'))
        })
    }

    /**
     * Function to close the dialog box
     */
    async closeDialog(){
        this.page.on('dialog', async dialog => {
            await dialog.accept()
        })
    }
}