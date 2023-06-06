import { expect, Page, ElementHandle, Locator } from '@playwright/test';

/**
 * Represents the ContextMenu page.
 */
export class ContextMenu {
  /**
   * The page instance.
   */
  readonly page: Page;

  /**
   * The CSS selector for the context menu box.
   */
  readonly box: string;

  /**
   * The locator for the page heading.
   */
  readonly pageHeading: Locator;

  /**
   * Constructs a new instance of the ContextMenu page.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.box = '#hot-spot';
    this.pageHeading = page.locator('h3');
  }

  /**
   * Checks if the page heading matches the specified text.
   * @param {string} headingText - The expected heading text.
   */
  async checkHeading(headingText: string) {
    await expect(this.pageHeading).toHaveText(headingText);
  }

  /**
   * Performs a right click on the context menu box.
   */
  async rightClickOnBox() {
    await this.page.click(this.box, { button: 'right' });
  }

  /**
   * Checks if the dialogue box text contains the specified text.
   * @param {string} dialogueText - The expected text in the dialogue box.
   */
  async checkDialogueText(dialogueText: string) {
    this.page.on('dialog', async (dialog) => {
      const contextMenuText = await dialog.message();
      console.log('Dialog text:', contextMenuText);
      expect(contextMenuText).toContain(dialogueText);
    });
  }

  /**
   * Waits for the dialogue box to disappear.
   */
  async waitForDialogDisappearance() {
    await this.page.waitForSelector('dialog', { state: 'detached' });
    console.log('Dialogue box disappeared');
  }
}
