**
 * Operation for Forget Password Page
 */
export interface IForgetPassword{

    /**
     * Check if the heading of page is correct
     * @param expectedHeading Expected Heading of the page
     */
    verifyHeading(expectedHeading : string) : void;
    test('Forget Password', async ({ page }) => {
        const ForgetPasswordpage = new ForgetPassword(page);
        await ForgetPasswordpage.visit();
        await ForgetPasswordpage.checkHeading('ForgetPassword Variation 1')
    });

    /**
     * To Enter Email Id in the input box
     * @param text Email Id
     */
    inputEmail(text : string) : void;
    test.only('ForgetPassword', async ({ page }) => {
        const ForgetPasswordpage = new ForgetPassword(page);
        await ForgetPasswordpage.visit();
        await ForgetPasswordpage.checkHeading('Forgot Password');
        await ForgetPasswordpage.checkInputFieldLabel();
        await ForgetPasswordpage.checkInputField(5);
        await ForgetPasswordpage.checkRetrievepasswordbutton(5);
    });

    /**
     * Clicks on the Retrieve Password
     */
    clickOnRetrivePassword() : Promise<void>;
    
    /**
     * To verify the result text on page
     * @param expectedText Text on the page after clicking retrive password
     */
    verifyResultText(expectedText : string) : void;


}