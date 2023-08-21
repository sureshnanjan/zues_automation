
import { test } from '@playwright/test'
import { HomePage } from '../PlaywrightImplementation/HomePage'
import { DynamicControls } from '../PlaywrightImplementation/DynamicControls'

test('Verify heading of Dynamic Controls page', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.verifyHeading('Dynamic Controls')
})

test('Verify description of Dynamic Controls page', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.verifyDescription('This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.')
})

test('Verify checkbox can be selected', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.selectCheckbox()
})

test('Verify Remove button removes checkbox and shows Add button', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.clickRemove()
    await dynamicControls.verifyLoadingIndicator()
    await dynamicControls.verifyLoadingIndicatorText('Wait for it...')
    await dynamicControls.verifyAddRemoveConfirmationText("It's gone!")
})

test('Verify Add button adds the checkbox and shows Remove button', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.clickRemove()
    await dynamicControls.clickAdd()
    await dynamicControls.verifyLoadingIndicator()
    await dynamicControls.verifyLoadingIndicatorText('Wait for it...')
    await dynamicControls.verifyAddRemoveConfirmationText("It's back!")
})

test('Verify text box is disabled by default', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.verifyTextboxDisabled()
})

test('Verify Enable button enables the text box', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.clickEnable()
    await dynamicControls.verifyLoadingIndicator()
    await dynamicControls.verifyLoadingIndicatorText('Wait for it...')
    await dynamicControls.verifyEnableDisableConfirmationText("It's enabled!")
    await dynamicControls.verifyTextboxEnabled()
})

test('Verify text can be entered in the text box', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.clickEnable()
    await dynamicControls.enterText('Testing')
})

test('Verify Disable button disables the text box', async({page}) => {
    const homepage = new HomePage(page)
    const dynamicControls = new DynamicControls(page)
    await homepage.visit()
    await homepage.goToExample('Dynamic Controls')
    await dynamicControls.clickEnable()
    await dynamicControls.clickDisable()
    await dynamicControls.verifyLoadingIndicator()
    await dynamicControls.verifyLoadingIndicatorText('Wait for it...')
    await dynamicControls.verifyEnableDisableConfirmationText("It's disabled!")
})