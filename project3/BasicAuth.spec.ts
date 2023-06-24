import { test, expect } from '@playwright/test';
import { BasicAuth } from '../../training/playwrightwork/BasicAuth';


test('Testing the basic Authientication page', async ({ page }) => {

    
const Field = new BasicAuth(page);     
await Field.LoadCorrectData();     
await Field.loginPage(); 
                
});


