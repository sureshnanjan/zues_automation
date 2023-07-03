/**
 * Operation for Inputs Page
 */
export interface IInputOperations {
    /**
     * This method is used to check heading on Inputs Page
     * @param expectedHeading - This parameter is used to pass the expected heading text.
     */
    checkHeading(expectedHeading: string): void;

    /**
     * This method is used to check sub heading of inputs page
     * @param expectedSubHeading - This parameter is used to pass the expected sub heading.
     */
    checkSunHeading(expectedSubHeading: string): void;

    /**
     * To Enter number in the number input box
     * @param text  This parameter is used to enter number in numbers input field
     */
    inputNumber(text: number): void;

    /**
   * This method is used to verify the Next number
   */
    checkNextNumber(): void;
    
    /**
     * This method is used to verify the previous number
     */
    checkPreviousNumber(): void;

    /**
  * To verify the number present in Number input field
  * @param expectedNumber  This parameter is used to check number displayed in Number input field
  */
    verifyNumberInInputField(expectedNumber: number): void;
}