import  { expect, test } from '@playwright/test';
import { ContextMenu } from "../PlaywrightImplementation/ContextMenu";


/*test('Opening Herokuapp page', async ({page}) => {
    const expectedHeading = 'Welcome to the-internet'
    await page.goto('https://the-internet.herokuapp.com/');
});

test('Opening Context Menu page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name : 'Context Menu'}).click();
})*/

test('Check heading', async ({ page }) => {
    const expectedHeading = 'Context Menu';
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const result = await page.getByRole('heading', { name: 'Context Menu' }).innerText();
    expect(result).toBe(expectedHeading);
});


test('Check p1', async ({ page }) => {
    const expectedtext1 = 'Context menu items are custom additions that appear in the right-click menu.';
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const result = await page.getByText('Context menu items are custom additions that appear in the right-click menu.').innerText();
    expect(result).toBe(expectedtext1);
});

test('Check p2', async ({ page }) => {
    const expectedtext2 = 'Right-click in the box below to see one called \'the-internet\'. When you click it, it will trigger a JavaScript alert.';
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const result = await page.getByText('Right-click in the box below to see one called \'the-internet\'. When you click it, it will trigger a JavaScript alert').innerText();
    expect(result).toBe(expectedtext2);
});

test.only('Check for dashbox and right click in it',async ({page}) => {
    
    const CI = new ContextMenu (page);
    /*await CI.checkDashBox();
    await CI.checkAlert();*/
    await CI.checkContextMenu();
});

