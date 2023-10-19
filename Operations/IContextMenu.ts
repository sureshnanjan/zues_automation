export interface IContextMenu{
    
    /**
     * This method is used to check heading on context menu page
     */
    checkHeading(): void;

    /**
     * This method is used to check first paragraph 1 text on context menu page
     */
    checkParagraph1(): void;

    /**
     * This method is used to check first paragraph 2 text on context menu page
     */
    checkParagraph2(): void;

    /**
     * This method is used to check if the dashbox is present on the context menu page
     */
    checkDashBox(): void;

    /**
     * This method is used to check popup alert text on context menu page
     * @param expectedAlertText - used to pass the expected alert text.
     */
    checkAlertText(expectedAlertText: String): void;

}