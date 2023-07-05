/**
 * Operation for Dropdown list Page
 */
export interface IDropdownList {

  /**
  * This method is used to visit Dropdown list Page
  * */
  gotoDropdownListPage(): Promise<void>

  /**
   * This method is used to check heading on Dropdown list Page
   * @param headingText - This parameter is used to pass the expected heading text.
   */
  checkHeading(headingText: string): void;

  /**
  * This method is used to verify visibility of dropdown
  */
  verifyVisibilityOfDropdown(): void;

  /**
   * This method is used to check placeholder text of dropdown
   * @param placeholderText - This parameter is used to pass the expected placeholder text.
   */
  checkPlaceholderTextOfDropdown(placeholderText: string): void;

  /**
  * This method is used to verify no. options from dropdown
  * @param noOfOptions - This parameter is used to verify number of options from dropdown
  */
  verifyOptionsCount(noOfOptions:number): void;

  /**
   * This method is used to select option from dropdown and verify selected option 
   * @param Option  This parameter is used to select option from dropdown and verify selected option
   */
  selectOptionFromDropdown(option: string): void;
}