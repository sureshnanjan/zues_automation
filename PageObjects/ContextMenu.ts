// ContextMenuPage Automation
import { expect, FrameLocator, Locator, Page } from '@playwright/test';
import { IContextMenu } from '../Operations/IContextMenu';

// This is my HomePage behavior

export class ContextMenu implements IContextMenu{
    goto() {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly paragraph1: Locator;
    readonly paragraph2: Locator;
    readonly dashbox: Locator;
    // readonly dialog: Locator;
constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h3', { hasText: 'Context Menu' });
        this.paragraph1 = page.locator('p1', { hasText: 'Context menu items are custom additions that appear in the right-click menu.' });
        this.paragraph2 = page.locator('p2', { hasText: "Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert." });
        this.dashbox = page.locator('#hot-spot');
      }
    checkalerttext(): void {
        throw new Error('Method not implemented.');
    }
    checkBox(): void {
        throw new Error('Method not implemented.');
    }
    async visit(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu') 
        
    }
    async checkHeading(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }
    async checkParagraph1(): Promise<void> {
        await expect(this.paragraph1).toBeVisible();
    }
    async checkParagraph2(): Promise<void> {
        await this.paragraph2.first();
        await expect(this.paragraph2).toBeVisible();
    }
    async checkdashbox(): Promise<void> {
        await expect(this.dashbox).toBeVisible();
      }
    async checkdialog(): Promise<void> {
        expect(dialog.type()).toContain('You selected a context menu');
      }
}