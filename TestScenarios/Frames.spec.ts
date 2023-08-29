import { Page, BrowserContext, test, expect } from '@playwright/test';
import { Frames } from "../PlaywrightImplementation/Frames";

//  Test case 01: To verify link count in the page
test('Verify the no. of links available', async ({ page }) => {
    const frames = new Frames(page);
    const expectedHeadingFramesPage="Frames";
    await frames.visit();
    await frames.checkHeading(expectedHeadingFramesPage);
})

// Test case 02: To verify link count in the page
test('Verify the no. of links available', async ({ page }) => {
    const frames = new Frames(page);
    await frames.visit();
    await frames.checkLinkcount(2);
})

//  Test case 03: To verify iFrames example is clickable
test('Verify the iFrame example is clickable', async ({ page }) => {
    const frames = new Frames(page);
    await frames.visit();
    await frames.Link1.click();
})

//  Test case 04: To verify Nested Frames example is clickable
test('Verify the Nested Frame is clickable', async ({ page }) => {
    const frames = new Frames(page);
    await frames.visit();
    await frames.Link2.click();
})

//  Test case 05: To verify user has navigated to the correct iFrame link
test('To check the iFrame link has correctly loaded or not', async ({ page }) => {
    const frames = new Frames(page);
    await frames.visit();
    await frames.Link1.click();
    await frames.gotoiFrames(expectedHeadingiFramesPage);
})

//  Test case 06: To verify user has navigated to the correct Nested Frame link
test('To check the Nested Frame link has correctly loaded or not', async ({ page }) => {
    const frames = new Frames(page);
    await frames.visit();
    await frames.Link2.click();
    await frames.gotoNestedFrame(expectedURLnestedframesPage);
}) 





