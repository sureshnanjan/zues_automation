import { Locator } from "@playwright/test";

/**
 * This is the Automation API for AddRemoveElements page.
 */

export interface IAddRemoveElements{
    /**
     * This will navigate to the Hroku Home Page and check the Heading and Sub Heading
     */
   addButton: string;
   deleteButton: string;
   pageHeading: Locator;
    checkHeading(headingText: string): any
    addElements(count: number): any;
    deleteElements(count: number): any;
    verifyAddedElements()
}