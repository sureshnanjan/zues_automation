/**
 * This is the Automation API for AddRemoveElements page.
 */

export interface IAddRemoveElements{
  
   addButton: string;
   deleteButton: string;
   pageHeading: any;
    checkHeading(headingText: string): any
    addElements(count: number): any;
    deleteElements(count: number): any;
    verifyAddedElements(count: number): any;
}