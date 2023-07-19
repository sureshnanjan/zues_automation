/**
 * Operation for Dropdown list Page
 */
export interface IDropdownList {
    /**  
     * This method is used to check heading on Dropdown list Page
     * @param headingText - Enter the expected heading text.
     */
    checkHeading(headingText: string): void;
    /**
    * This method is used to verify visibility of dropdown
    */
    verifyVisibilityOfDropdown(): void;
    /**
     * This method is used to check placeholder text of dropdown
     * @param placeholderText - Enter the expected placeholder text.
     */
    checkPlaceholderTextOfDropdown(placeholderText: string): void;
    /**
    * This method is used to verify no. options from dropdown
    * @param noOfOptions - Enter number of options to be expected in the dropdown
    */
    verifyOptionsCount(noOfOptions: number): void;
    /**
     * This method is used to select option from the dropdown
     * @param option Enter the option to be selected from the dropdown
     */
    selectOptionFromDropdown(option: string): void;
    /**
     * This method is used to verify selected option
     * @param option  Enter the option to be selected from dropdown
     */
    verifySelectedOptionFromDropdown(option: string): void;
}