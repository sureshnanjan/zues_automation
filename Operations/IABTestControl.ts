export interface IABTestControl {
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
}