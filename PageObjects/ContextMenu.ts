// ContextMenuPage Automation
import { Dialog, expect, FrameLocator, Locator, Page } from '@playwright/test';
import { IContextMenu } from '../Operations/IContextMenu';

// This is my HomePage behavior

export class ContextMenu implements IContextMenu{
 
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly paragraph1: Locator;
    readonly paragraph2: Locator;
    readonly dashbox: Locator;
    // readonly dialog: Dialog;

    // readonly dialog: Locator;
constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h3', { hasText: 'Context Menu' });
        this.paragraph1 = page.locator('p', { hasText: 'Context menu items are custom additions that appear in the right-click menu.' });
        this.paragraph2 = page.locator('p', { hasText: "Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert." });
        this.dashbox = page.locator('#hot-spot');
        // this.dialog = page.on('dialog', async dialog => {dialog.accept();});
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
          });
      }
    checkDialog(): void {
        throw new Error('Method not implemented.');
    }
    checkAlertText(): void {
        throw new Error('Method not implemented.');
    }
        
    // dialog = page.once('dialog', dialog => {dialog.accept();}); 

    
    async goto(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu')         
    }
    async checkHeading(expectedHeadingContextPage: string): Promise<void>{
        await expect(this.pageHeading).toHaveText(expectedHeadingContextPage);
    }
    async checkParagraph(expectedParagraph1: string,expectedParagraph2: string): Promise<void> {
        await expect(this.paragraph1).toHaveText(expectedParagraph1);
        await expect(this.paragraph2).toHaveText(expectedParagraph2);
    }
    async checkDashBox(): Promise<void> {
        await expect(this.dashbox).toBeVisible();
      }
    async performRightClick(): Promise<void> {
        await this.dashbox.click({button: "right"});
    }
    // async checkDialog(): Promise<void> {
    //     expect(this.dialog.type()).toContain('You selected a context menu');
    //   }
    // async checkAlertText(): Promise<void> {
    //     expect(this.dialog).toContain('You selected a context menu');   
    //  }
    
}