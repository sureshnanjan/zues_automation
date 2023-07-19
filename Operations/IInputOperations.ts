/**
 * Operation for Inputs Page
 */
export interface IInputOperations {
  
  /**
  * This method is used to visit Inputs Page
  * */
  gotoInputsPage(): Promise<void>

  /**
   * This method is used to check heading on Inputs Page
   * @param headingText - This parameter is used to pass the expected heading text.
   */
  checkHeading(headingText: string): void;

  /**
   * This method is used to check Number input field label
   * @param numberInputFieldLabel - This parameter is used to pass the expected input field label.
   */
  checkInputFieldLabel(numberInputFieldLabel: string): void;

  /**
   * This method is used to enter number and verify in the number input field 
   * @param Number  This parameter is used to enter number in Number input field
   */
  enterNumberAndVerifyInNumberInputField(Number: number): void;

  /**
 * This method is used to verify the Next number
 *  @param expectedNumber  This parameter is used to check number displayed in Number input field
 */
  verifyNextNumber(expectedNumber: number): void;

  /**
   * This method is used to verify the previous number
   * @param expectedNumber  This parameter is used to check number displayed in Number input field
   */
  verifyPreviousNumber(expectedNumber: number): void;
}