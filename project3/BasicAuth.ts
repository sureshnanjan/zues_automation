import { Browser, expect, Locator, Page, test } from '@playwright/test';
import { IBasicAuthOperation } from './InterfaceForBasicAuth';

    //Create clas to export
    export class BasicAuth implements IBasicAuthOperation {

    readonly page: Page;
    
    constructor(page: Page) {
        
        this.page = page;
    }
    
    
async ClickBasicAuthLink(){

    // Navigate to basic URL for Basic Authenication page
}
async CheckSuccessfulHeading(expected: String) {

    // Once logged in, check for header "Basic Auth"

}
async CheckSuccessfulSubHeading(expected: String) {

    // Once logged in, check for sub-header "Congratulations! You must have the proper credentials"

}
async CheckUnSucessfulHeading(expected: String) {

    //Check heading of "Not authorized" once logged with incorrect credentials 

}
}
