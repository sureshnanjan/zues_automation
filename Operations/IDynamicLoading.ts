/**
 * Dynamic Loading page operations
 * 
 */

export interface IDynamicLoading{

    /**
     * To navigate to form authetication page
     */
    gotoDynamicLoading(): Promise<void>;
 
    /**
     * Verify page heading
     * @param expectedPageHeading expected page heading
     */
    checkPageHeading(expectedPageHeading: String): void;

    /**
     * Click on the hyperlink 1
     */
    clickFirstkHyperLink() : Promise<void>;

    /**
     * Verify page heading
     * @param expectedsubPageHeadingOfHidden expected page heading
     */
    checkPageSubHeadingOfHidden(expectedsubPageHeadingOfHidden: String): void;

    /**
     * Verify page heading
     * @param expectedsubPageHeadingOfRendered expected page heading
     */
    checkPageSubHeadingOfRendered(expectedsubPageHeadingOfRendered: String): void;

     /**
     * Click on the hyperlink 2
     */
    clickSecondkHyperLink() : Promise<void>;

    /**
     * Click on the Start button
     */
    clickStartButton(): Promise<void>;

}