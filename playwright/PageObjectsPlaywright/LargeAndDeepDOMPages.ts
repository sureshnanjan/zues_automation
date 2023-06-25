import { expect, Locator, Page } from '@playwright/test';
import {LargeAndDeepDOMOps} from "../Operations/largeAndDeepDOMOps"
export class LargeAndDeepDOMPages implements LargeAndDeepDOMOps{
    pageHeading: any;

     /**
 * Verifies the heading of a document.
 *
 * @param {string} heading - The heading to verify.
 * @returns {void}
 */
    verifyHeading(heading: String): void {
        throw new Error('Method not implemented.');
    }

 /**
   * Verifies the subheading of a document.
   *
   * @param {string} subHeading - The subheading to verify.
   * @returns {void}
   */
    verifySubHeadings(subHeading: String): void {
        throw new Error('Method not implemented.');
    }

      /**
   * Verifies the instruction of a document.
   *
   * @param {string} instruction - The instruction to verify.
   * @returns {void}
   */
    verifyInstruction(instruction: String): void {
        throw new Error('Method not implemented.');
    }

      /**
   * Verifies that there are no siblings.
   *
   * @returns {void}
   */
    verifyNoSiblings(): void {
        throw new Error('Method not implemented.');
    }

     /**
   * Verifies the nth sibling of a document.
   *
   * @param {number} siblingToSearch - The index of the sibling to search for.
   * @returns {void}
   */
    verifyNthSibling(siblingToSearch: Number): void {
        throw new Error('Method not implemented.');
    }

    /**
   * Verifies the total number of siblings in a document.
   *
   * @returns {void}
   */
    verifyTotalSiblings(): void {
        throw new Error('Method not implemented.');
    }

      /**
   * Verifies the number of rows in a table.
   *
   * @returns {void}
   */
    verifyNumberOfTableRows(): void {
        throw new Error('Method not implemented.');
    }

      /**
   * Verifies the number of columns in a table.
   *
   * @returns {void}
   */
    verifyNumberOfTableColumns(): void {
        throw new Error('Method not implemented.');
    }

     /**
   * Verifies a specific element in a table.
   *
   * @param {number} row - The row index of the element.
   * @param {number} column - The column index of the element.
   * @returns {void}
   */
    verifySpecificElementInTable(row: Number, column: Number): void {
        throw new Error('Method not implemented.');
    }

     /**
   * Verifies the total number of rows in a specific column of a table.
   *
   * @param {number} column - The index of the column to check.
   * @returns {void}
   */
    verifyTotalRowsInNthColumn(column: Number): void {
        throw new Error('Method not implemented.');
    }
 
   
}

