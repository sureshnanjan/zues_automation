/**
 * This is the Automation API for Heroku Home Page
 */
export interface IHomePage{
    /**
     * This will navigate to the Home Page with provided URL
     */
    visit(): Promise<void>;
    goToExample():void;
    /**The heading should be "The Internet" */
    checkHeading(): void;
    checksubHeading(): void;
  
}