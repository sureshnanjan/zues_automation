import { test, expect } from '@playwright/test';
import { BasicAuth } from '../../training/playwrightwork/BasicAuth';


test('Testing the Username and Password field', async ({ page }) => {

const Field = new BasicAuth(page);     
await Field.goto();                     
await Field.CorrectData();
await Field.InCorrectData();
await Field.NullData();               

});

test('Testing the cancel button', async ({ page }) => {

    const Field = new BasicAuth(page);     
    await Field.goto();                      
    await Field.CancelButton();            
    
});

test('Testing the content of logged in page', async ({ page }) => {

    const Field = new BasicAuth(page);    
    await Field.goto();                     
    await Field.loginPage();              
    
    });
  
