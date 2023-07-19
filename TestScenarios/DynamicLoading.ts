import { test, expect } from '@playwright/test';
import { DynamicLoadingwithInterface } from "../PlaywrightImplementation/DymaicLoading"

test('Visit Dynamic Loading page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading');
})

test('Verify the heading of Dynamic Loading page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.checkPageHeading('Dynamically Loaded Page Elements');
})

test('Click on example 1', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickFirstkHyperLink();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading/1');
})

test('Click on example 2', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickSecondkHyperLink();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading/2');
})

test('Verify if sub heading of example 1 page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickFirstkHyperLink();
    await DynamicLoading.checkPageSubHeadingOfHidden('Example 1: Element on page that is hidden');
})

test('Verify if sub heading of example 2 page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickSecondkHyperLink();
    await DynamicLoading.checkPageSubHeadingOfRendered('Example 2: Element rendered after the fact');
})


// test('Verify if sub heading of example 1 page', async ({ page }) => {
//     test.setTimeout(120000);
//     const DynamicLoading = new DynamicLoadingwithInterface(page);
//     await formauthentication.vistHomePage();
//     await formauthentication.clickFormAutheticationLink();
//     await formauthentication.enterUsername("");
//     await formauthentication.enterPassword("");
//     await formauthentication.clickLoginButton();
//     await expect(page.locator('//*[@id="flash"]')).toHaveText('Your password is invalid!');
// })