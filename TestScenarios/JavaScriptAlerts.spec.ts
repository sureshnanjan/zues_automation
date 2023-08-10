import { test, expect } from '@playwright/test';
import { jspage } from '../PlaywrightImplementation/JsAlert';


test('Validating heading of JS Alerts Page', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.verifyHeading();
    })

test('Validating subheading of JS Alerts Page', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.verifySubHeading();
     })

test('Verifying JSAlert Functionality', async ({ page }) => {
     const javascriptpage = new jspage();
     javascriptpage.invokeJsAlert();
     javascriptpage.verifyAlertText("");
     javascriptpage.clickOk();
     javascriptpage.verifyResultText("");
    
    })


test('Verifying JSConfirm Functionality with OK Button', async ({ page }) => {
     const javascriptpage = new jspage();
     javascriptpage.invokeJsConfirm();
     javascriptpage.verifyAlertText("");
     javascriptpage.clickOk();
     javascriptpage.verifyResultText("");
    
    })

test('Verifying JSConfirm Functionality with Cancel Button', async ({ page }) => {
    const javascriptpage = new jspage();
     javascriptpage.invokeJsConfirm();
     javascriptpage.verifyAlertText("");
     javascriptpage.clickCancel();
     javascriptpage.verifyResultText("");

})

test('Verifying JSPrompt Functionality with data and OK Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invokeJsPrompt();
    javascriptpage.verifyAlertText("");
    javascriptpage.inputValue("");
    javascriptpage.clickOk();
    javascriptpage.verifyResultText("");

})

test('Verifying JSPrompt Functionality without data and OK Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invokeJsPrompt();
    javascriptpage.verifyAlertText("");
    javascriptpage.clickOk();
    javascriptpage.verifyResultText("");
})

test('Verifying JSPrompt Functionality and Cancel Button', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invokeJsPrompt();
    javascriptpage.verifyAlertText("");
    javascriptpage.clickCancel();
    javascriptpage.verifyResultText("");

})