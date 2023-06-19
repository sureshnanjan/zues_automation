/* eslint-env jest */
const { test, expect } = require('@playwright/test');
import { BrokenImagesPageWithInterfaceImpl } from '../PageObjects/BrokenImagesPage';

test('Visiting Broken Images page', async ({ page }) => {
    const herokuAppBrokenImg = new BrokenImagesPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.visit();
});

test('Check Page Heading', async ({ page }) => {
    const herokuAppBrokenImg = new BrokenImagesPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.visit();
    await herokuAppBrokenImg.checkHeading('Broken Images');
});

test('Check that Image1 is a broken image', async ({ page }) => {
    const herokuAppBrokenImg = new BrokenImagesPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.visit();
    await herokuAppBrokenImg.checkImage1();
});

test('Check that Image2 is a broken image', async ({ page }) => {
    const herokuAppBrokenImg = new BrokenImagesPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.visit();
    await herokuAppBrokenImg.checkImage2();
});

test('Check that Image3 is not a broken image', async ({ page }) => {
    const herokuAppBrokenImg = new BrokenImagesPageWithInterfaceImpl(page);
    await herokuAppBrokenImg.visit();
    await herokuAppBrokenImg.checkImage3();
});