export interface IContextMenu{
    
        /**
         * This method is used to navigate to the specific link on home page.
         * @param urlToNavigate This is used to pass the name of the link to visit.
         */
        gotoUrl(urlToNavigate: String): void;

        /**
         * This method is used to check heading on context menu page
         * @param expectedHeading - used to pass the expected heading text.
         */
        checkHeading(expectedHeading: String): void;

        /**
         * This method is used to check first paragraph 1 text on context menu page
         * @param expectedParagraph1 - used to pass the expected paragraph 1 text.
         */
        checkParagraph1(expectedParagraph1: String): void;

        /**
         * This method is used to check first paragraph 2 text on context menu page
         * @param expectedParagraph2 - used to pass the expected paragraph 2 text.
         */
        checkParagraph2(expectedParagraph2: String): void;

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