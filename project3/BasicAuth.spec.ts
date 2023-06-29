import { test, expect } from '@playwright/test';
import { BasicAuth } from '../../training/playwrightwork/BasicAuth';


test('Testing the basic Authientication page when login pass', async ({ page }) => {

const string1 = 'Basic Auth';
const string2 = 'Congratulations! You must have the proper credentials.';  
const Field = new BasicAuth(page);     
await Field.ClickBasicAuthLink();
await Field.CheckSuccessfulHeading(string1);
await Field.CheckSuccessfulSubHeading(string2);      

                
});


test('Testing the basic Authientication page when login fails', async ({ page }) => {

    const string = 'Not authorized'
    const Field = new BasicAuth(page);     
    await Field.CheckUnSucessfulHeading(string);
                      
});




