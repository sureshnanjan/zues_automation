/**
 * Operation for Forget Password Page
 */
export interface IForgetPassword{

    /**
     * Check if the heading of page is correct
     * @param expectedHeading Expected Heading of the page
     */
    verifyHeading(expectedHeading : string) : void;

    /**
     * To Enter Email Id in the input box
     * @param text Email Id
     */
    inputEmail(text : string) : void;

    /**
     * Clicks on the Retrive Password
     */
    clickOnRetrivePassword() : Promise<void>;
    
    /**
     * To verify the result text on page
     * @param expectedText Text on the page after clicking retrive password
     */
    verifyResultText(expectedText : string) : void;


}