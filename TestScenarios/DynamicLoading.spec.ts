import { test, expect } from '@playwright/test';
import { DynamicLoadingwithInterface } from "../PlaywrightImplementation/DynamicLoading"

test('Visit Dynamic Loading page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading');
})

test('Verify the heading of Dynamic Loading page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    //test.setTimeout(120000);
    await expect(page.getByText('Dynamically Loaded Page Elements')).toBeVisible();
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
    await expect(page.getByText('Example 1: Element on page that is hidden')).toBeVisible();
})

test('Verify if sub heading of example 2 page', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickSecondkHyperLink();
    await expect(page.getByText('Example 2: Element rendered after the fact')).toBeVisible();
})

test('Verify if element is hidden', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickFirstkHyperLink();
    //const hellowworld = document.getElementById('finish') 
    //expect(hellowworld.isHidden()).toBe(true);
    await expect(page.getByText('Hello World!')).toBeHidden();
})

test('Verify if element is not hidden after clicking on start button', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickFirstkHyperLink();
    await DynamicLoading.clickStartButton();
    test.setTimeout(120000);
    await expect(page.getByText('Hello World!')).toBeHidden();
})

test('Verify if element is rendered after clicking on start button', async ({ page }) => {
    const DynamicLoading = new DynamicLoadingwithInterface(page);
    await DynamicLoading.gotoDynamicLoading();
    await DynamicLoading.clickFirstkHyperLink();
    await DynamicLoading.clickStartButton();
    test.setTimeout(120000);
    await expect(page.locator("text='Hello World'")).toBeHidden()
})