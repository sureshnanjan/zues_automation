import {expect, Locator, Page } from '@playwright/test';
import { IContextMenu } from '../Interfaces/IContextMenuOps';

export class ContextMenu implements IContextMenu{
    readonly page
    readonly box
    readonly heading

    constructor(page: Page){
        this.page = page
        this.box = page.locator('//*[@id="hot-spot"]')
        this.heading = page.locator('//*[@id="content"]/div/h3')
    }

    async verifyHeading(){
        await expect(this.heading).toHaveText('You selected a context menu')
    }

    /**
     * Function to right click the context menu
     */
    async launchContextMenu(){
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