import { expect, Locator, Page, test } from '@playwright/test';
import {InterfaceForBasicAuth} from '../../training/project3/InterfaceForBasicAuth'

    //Create clas to export
    export class BasicAuth implements InterfaceForBasicAuth {
    /*Declare variables*/
    readonly page: Page;
    readonly UsernameField: Locator;
    readonly PasswordField: Locator;
    
    constructor(page: Page) {
    
    this.page = page;
    this.UsernameField = page.locator('locator for Username field'); 
    this.PasswordField = page.locator('locator for password field');
    }
    
    
    async goto() {
        //load the page
    }
    
    async CorrectData() {

        //Test fields with correct details
        
    }   

    async InCorrectData() {

        //Test fields with Incorrect details
        
    }  
    
    async NullData() {

        //Test fields with Null details
        
    }  

    async CancelButton() {

        //Test cancel button working
        
    }  

    async loginPage() {

        //Test content of page once logged in
        
    }  
    

    }
