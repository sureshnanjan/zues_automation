import { Page, BrowserContext, test, expect } from '@playwright/test';
import { iFrames } from '../PlaywrightImplementation/NestedFramesPage'

test('Visiting nested frames page', async ({ page }) => {
    const NestedFramesPage = new NestedFramesPage(page);
    await NestedFrames.gotoNestedFramesPage();
});

//To verify count of nested frames available

test('Verify the no. of nested frames available On page', async ({ page }) => {
    const NestedFramesPage = new NestedFramesPage(page);
    await NestedFrames.gotoNestedFramesPage();
    await NestedFramesPage.checkcount();    
});

//To verify the top frame and its content

test('Verify the top frame and validate its content', async ({ page }) => {
    const topframe = new topframe(page);
    await NestedFrames.gotoNestedFramesPage();
    await expect(topframe).toHaveText('LEFT')   
})

//To verify the middle frame and its content

test('Verify the middlde frame and validate its content', async ({ page }) => {
    const middleframe = new middleframebody(page);
    await NestedFrames.gotoNestedFramesPage();
    await expect(middleframe).toHaveText('MIDDLE')
})

//To verify the right frame and its content

test('Verify the right frame and validate its content', async ({ page }) => {
    const rightframe = new rightframe(page);
    await NestedFrames.gotoNestedFramesPage();
    await expect(rightframe).toHaveText('RIGHT')
})

//To verify the bottom frame and its content

test('Verify the bottom frame and validate its content', async ({ page }) => {
    const bottomframe = new bottomframe(page);
    await NestedFrames.gotoNestedFramesPage();
    await expect(bottomframe).toHaveText('BOTTOM')
})

