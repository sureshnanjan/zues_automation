import test  from '@playwright/test';
import expect from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { Typos } from '../PlaywrightImplementation/TyposPage';


test("check the heading", async ({ page }) => {
    const rem =new Typos(page);
    const visit=new HomePage(page);
    visit.visitPage('https://the-internet.herokuapp.com/typos');
    rem.CheckTitle("Typos");
});

test("check the text is available", async ({ page }) => {
    const visit=new HomePage(page);
    const rem= new Typos(page);
    visit.visitPage('https://the-internet.herokuapp.com/typos');
    rem.VerifyTextPresent();
});

test("check if the correct text is displayed",async({page})=>{
    const visit=new HomePage(page);
    const rem= new Typos(page);
    visit.visitPage('https://the-internet.herokuapp.com/typos');
    rem.CheckText()
})

test("check changes after refresh" , async({page})=> {
    const visit=new HomePage(page);
    const rem= new Typos(page);
    rem.pageReload();
    rem.CheckText();
})
