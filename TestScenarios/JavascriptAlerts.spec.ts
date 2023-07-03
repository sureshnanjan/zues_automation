import { test } from "@playwright/test"
import { HomePage } from "../PlaywrightImplementation/HomePage"
import { JavascriptAlerts } from "../PlaywrightImplementation/JavascriptAlerts"

test('Verify the heading of the Dynamic Controls page', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.verifyHeading()
})

test('Verify the sub-heading on the Dynamic Controls page', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.verifySubHeading()
})

test('Verify the result heading on the Dynamic Controls page', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.verifyResultHeading()
})

test('Verify text displayed on alert box when clicking the JS Alert button', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.verifyAlertText('I am a JS Alert')
})

test('Verify result on clicking OK on JS Alert', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.clickOk()
    jsalert.verifyResultText('You successfully clicked an alert')
})

test('Verify text displayed on alert box when clicking the JS Confirm button', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsConfirm()
    jsalert.verifyAlertText('I am a JS Confirm')
})

test('Verify result on clicking Cancel on JS Confirm', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.clickCancel()
    jsalert.verifyResultText('You clicked: Cancel')
})

test('Verify result on clicking OK on JS Confirm', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.clickOk()
    jsalert.verifyResultText('You clicked: Ok')
})

test('Verify text displayed on alert box when clicking the JS Prompt button', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsPrompt()
    jsalert.verifyAlertText('I am a JS Prompt')
    jsalert.clickOk()
})

test('Verify result on clicking Cancel on JS Prompt', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.clickCancel()
    jsalert.verifyResultText('You entered: null')
})

test('Verify result on clicking OK on JS Prompt', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.clickOk()
    jsalert.verifyResultText('You entered: ')
})

test('Verify result on entering text and clicking OK on JS Prompt', async({ page }) => {
    const homepage = new HomePage(page)
    const jsalert = new JavascriptAlerts()
    await homepage.visit()
    await homepage.goToExample('JavaScript Alerts')
    jsalert.invokeJsAlert()
    jsalert.inputValue('Testing')
    jsalert.verifyResultText('You entered: Testing')
})