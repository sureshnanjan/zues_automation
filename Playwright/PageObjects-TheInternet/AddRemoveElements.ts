import { expect, Locator, Page } from '@playwright/test';

/**
 * Represents the AddRemoveElements page.
 */
export class AddRemoveElements {
  /**
   * The page instance.
   */
  readonly page: Page;

  /**
   * The CSS selector for the "Add" button.
   */
  readonly addButton: string;

  /**
   * The CSS selector for the "Delete" button.
   */
  readonly deleteButton: string;

  /**
   * The locator for the page heading.
   */
  readonly pageHeading: Locator;

  /**
   * Constructs a new instance of the AddRemoveElements page.
   * @param {Page} page - The Playwright page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.addButton = 'button:has-text("Add")';
    this.deleteButton = 'button:has-text("Delete")';
    this.pageHeading = page.locator('h3', { hasText: "Add/Remove Elements" });
  }

  /**
   * Checks if the page heading matches the specified text.
   * @param {string} headingText - The expected heading text.
   */
  async checkHeading(headingText: string) {
    await expect(this.pageHeading).toHaveText(headingText);
  }

  /**
   * Adds the specified number of elements by clicking the "Add" button.
   * @param {number} count - The number of elements to add.
   */
  async addElements(count: number) {
    for (let i = 0; i < count; i++) {
      await this.page.click(this.addButton);
    }
  }

  /**
   * Deletes the specified number of elements by clicking the "Delete" button.
   * @param {number} count - The number of elements to delete.
   */
  async deleteElements(count: number) {
    const deleteButtons = await this.page.$$(this.deleteButton);

    if (count > deleteButtons.length) {
      throw new Error('Incorrect number of elements to delete');
    }

    for (let i = 0; i < count; i++) {
      await deleteButtons[i].click();
    }
  }

  /**
   * Verifies the number of added elements.
   * @returns {Promise<number>} - The count of delete buttons (representing the added elements).
   */
  async verifyAddedElements(): Promise<number> {
    const deleteButtons = await this.page.$$(this.deleteButton);
    return deleteButtons.length;
  }
}
