import { test, expect } from '@playwright/test';
import { jspage } from '../../PageObejct/javascriptalertspage';


test('Validating heading of JS Alerts Page', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.verify_heading();
    })

test('Validating subheading of JS Alerts Page', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.verify_subheading();
     })

test('Verifying JSAlert Functionality', async ({ page }) => {
     const javascriptpage = new jspage();
     javascriptpage.invoke_jsalert();
     javascriptpage.verify_alerttext();
     javascriptpage.click_ok();
     javascriptpage.verify_resulttext();
    
    })


test('Verifying JSConfirm Functionality with OK Button', async ({ page }) => {
     const javascriptpage = new jspage();
     javascriptpage.invoke_jsconfirm();
     javascriptpage.verify_alerttext();
     javascriptpage.click_ok();
     javascriptpage.verify_resulttext();
    
    })

test('Verifying JSConfirm Functionality with Cancel Button', async ({ page }) => {
    const javascriptpage = new jspage();
     javascriptpage.invoke_jsconfirm();
     javascriptpage.verify_alerttext();
     javascriptpage.click_cancel();
     javascriptpage.verify_resulttext();

})

test('Verifying JSPrompt Functionality with data and OK Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invoke_jsprompt();
    javascriptpage.verify_alerttext();
    javascriptpage.insert_text();
    javascriptpage.click_ok();
    javascriptpage.verify_resulttext();

})

test('Verifying JSPrompt Functionality without data and OK Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invoke_jsprompt();
    javascriptpage.verify_alerttext();
    javascriptpage.click_ok();
    javascriptpage.verify_resulttext();
})

test('Verifying JSPrompt Functionality and Cancel Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invoke_jsprompt();
    javascriptpage.verify_alerttext();
    javascriptpage.click_cancel();
    javascriptpage.verify_resulttext();

})
