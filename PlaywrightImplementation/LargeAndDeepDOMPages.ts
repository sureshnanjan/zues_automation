import { expect, Locator, Page } from '@playwright/test';
import {LargeAndDeepDOMOps} from "../Operations/largeAndDeepDOMOps"
export class LargeAndDeepDOMPages implements LargeAndDeepDOMOps{
    readonly page: Page;
    heading: Locator;
    pageHeading: Locator;
    subHeading: Locator;
    pageInstruction: Locator;
    noSibling: Locator;
    totalSibling: Locator;
    totalRow: Locator;
    totalHeader: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator("xpath=//div[@class='example']//h3");
        this.subHeading = page.locator("xpath=(//h4)[1]");
        this.pageInstruction = page.locator("xpath=//div[@class='example']//p");
        this.noSibling = page.locator("xpath=//div[@id='no-siblings']");
        this.totalSibling = page.locator("xpath=//div[@id='sibling-50.3']");
        this.totalRow = page.locator("xpath=//tr[@class='row-50']");
        this.totalHeader = page.locator("xpath=//th[@class='header-50']");
    
        
    }

    pageNthSibling(X: number): Locator {
        return this.page.locator(`xpath=//div[@id='sibling-[${X}].1']`);
    }

    pageSepcificElementInTable(X: number, Y: number): Locator {
        return this.page.locator(`//tr[@class='row-[${X}]']//td[@class="column-[${Y}]"]]`);
    }
    

    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com/large');
    }

     /**
 * Verifies the heading of a document.
 *
 * @param {string} heading - The heading to verify.
 * @returns {void}
 */
    async verifyHeading(headingText: string): Promise<void> {
        await expect(this.pageHeading).toHaveText(headingText);
    }

 /**
   * Verifies the subheading of a document.
   *
   * @param {string} subHeading - The subheading to verify.
   * @returns {void}
   */
    async verifySubHeadings(SubHeading: string): Promise<void> {
        await expect(this.subHeading).toHaveText(SubHeading);
    }

      /**
   * Verifies the instruction of a document.
   *
   * @param {string} instruction - The instruction to verify.
   * @returns {void}
   */
    async  verifyInstruction(instruction: string): Promise<void> {
        await expect(this.pageInstruction).toHaveText(instruction);
    }

      /**
   * Verifies that there are no siblings.
   *
   * @returns {void}
   */
      async verifyNoSiblings(): Promise<void> {
        await expect(this.pageInstruction).toHaveText("No siblings");
    }

     /**
   * Verifies the nth sibling of a document.
   *
   * @param {number} siblingToSearch - The index of the sibling to search for.
   * @returns {void}
   */
    async verifyNthSibling(siblingToSearch: number): Promise<void> {
        expect(await this.pageNthSibling(siblingToSearch).isVisible()).toBe(true);
    }

    /**
   * Verifies the total number of siblings in a document.
   *
   * @returns {void}
   */
    async verifyTotalSiblings(): Promise<void> {
         expect(await this.totalSibling.isVisible()).toBe(true);
    }

      /**
   * Verifies the number of rows in a table.
   *
   * @returns {void}
   */
      async verifyNumberOfTableRows(): Promise<void> {
         expect( await this.totalRow.isVisible()).toBe(true);
    }

      /**
   * Verifies the number of columns in a table.
   *
   * @returns {void}
   */
      async verifyNumberOfTableColumns(): Promise<void> {
         expect( await this.totalHeader.isVisible()).toBe(true);
    }

     /**
   * Verifies a specific element in a table.
   *
   * @param {number} row - The row index of the element.
   * @param {number} column - The column index of the element.
   * @returns {void}
   */
     async verifySpecificElementInTable(row: number, column: number): Promise<void> {
         expect(await this.pageSepcificElementInTable(row,column).isVisible()).toBe(true);
    }

 
   
}

