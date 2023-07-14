export interface IDropdown{
    /**
     * This function verifies the heading of the Dropdown page
     * @param expectedHeading Enter the expected heading
     */
    verifyHeading(expectedHeading: string)
    /**
     * This function verifies the placeholder text in the dropdown
     * @param expectedText Enter the expected placeholder text
     */
    verifyPlaceholderText(expectedText: string)
    /**
     * This function selects the option from the dropdown
     * @param option Enter the option to be selected
     */
    selectOption(option: string)
    /**
     * This function verifies the selected option in the dropdown
     */
    verifySelectedOption()
}