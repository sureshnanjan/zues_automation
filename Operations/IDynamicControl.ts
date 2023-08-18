export interface IDynamicControls{
    /**
     * This function verifies the heading of the page
     * @param expectedHeading Enter the expected heading
     */
    verifyHeading(expectedHeading)
    /**
     * This function verifies the description on the Dynamic Controls page
     */
    verifyDescription(expectedDescription)
    /**
     * This function selects the checkbox
     */
    selectCheckbox()
    /**
     * This function clicks the Remove button
     */
    clickRemove()
    /**
     * This function verifies the confirmation text displayed after clicking remove/add/enable/disable button
     * @param expectedText Enter the expected text
     */
    verifyConfirmationText(expectedText)
    /**
     * This function verifies the loading indicator
     */
    verifyLoadingIndicator()
    /**
     * This function verifies the text displayed besides the loading indicator
     * @param expectedText Enter the expected text
     */
    verifyLoadingIndicatorText(expectedText)
    /**
     * This function clicks the Add button
     */
    clickAdd()
    /**
     * This function verifies the text box is enabled
     */
    verifyTextboxEnabled()
    /**
     * This function clicks the Enable button
     */
    clickEnable()
    /**
     * This function verifies the text box is disabled
     */
    verifyTextboxDisabled()
    /**
     * This function clicks the Disable button
     */
    clickDisable()
    /**
     * This function enters the text in the text box
     * @param text Enter the text to be entered in the text box
     */
    enterText(text)
}