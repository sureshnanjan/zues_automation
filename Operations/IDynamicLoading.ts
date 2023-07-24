export interface DynamicLoadingOps {
    /**
     * Navigating to th eDynamic loading page.
     */
    visitDynamicLoading():Promise<void>;

    /**
     * Verifying the heading of the page
     */
    verifyPageHeading(expected:string):Promise<void>;

    /**
     * Verifying the content present on the page
     */
    verifyCotentPresent(expected:string):Promise<void>;

    /**
     * Verifying the hyperlinks present on the dynamic loading page
     */
    verifyHyperlinkPresent(text:String):Promise<void>

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