/**
 * Dynamic Content page operations
 * 
 */

export interface IDynamicContent{
    
    /**
    * This method is used to navigate to the dynamin content page
    */
    gotoDynamicContentPage(): void;

    /**
     * This method is used to verify the page heading
     */
    checkPageHeading(expectedPageHeading: string): void;
    
    /**
     *This method is used to verify the page content
     * @param expectedtext expected page content
     */
    checkContent(expectedtext: string): void;

    /**
     * This method is used to verify the click here link
     */
    verifyClickherebutton() : Promise<void>;

    /**
     * To verify that the paragraph text 
     * * @param expectedparagraphtext expected page content
     */
    checkParagraphtext(expectedParagraphtext: string): void;

     /**
     * To verify that the paragraph text  
     */
    CheckImage(); void;
   
}