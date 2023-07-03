/**
 * Form Authetication page operations
 * 
 */

export interface IFormAuthentication{

    /**
     * To navigate to form authetication page
     */
    gotoFormAuthenticationPage(): Promise<void>;
 
    /**
     * Verify page heading
     * @param expectedPageHeading expected page heading
     */
    checkPageHeading(expectePagedHeading: String): void;

    /**
     * To check form components
     */
    checkFormComponents(): void;

    /**
     * To enter username in the input box
     * @param username Username
     */
    enterUsername(username : string) : void;

    /**
     * To enter password in the input box
     * @param password Password
     */
    enterPassword(password : string) : void;

    /**
     * Click on the Login button
     */
    clickLoginButton() : Promise<void>;

    /**
     * This method is used to check if the dashbox is present on the context menu page
     */
    checkDashBox(): void;

    /**
     * To verify flash message for login with incorrect or empty input
     * @param expectederrormessage Error message
     */
    checkFlashErrorMessage(expectederrormessage: String): void;

    /**
     * Click on the Login button
     */
    verifySuccessfulLogin() : Promise<void>;

    /**
     * Click on the Login button
     */
    clickLogoutButton() : Promise<void>;

    /**
     * To verify flash message after logout
     * @param expectedsuccessmessage Logout confiramtion message
     */
    checkFlashSuccessMessage(expectedsuccessmessage: String): void;

}