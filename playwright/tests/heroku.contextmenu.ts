import { test, expect } from '@playwright/test';
import { IHomePage } from '../../Operations/IHomePage';
import { IContextMenu } from '../../Operations/IContextMenu';
test.skip('Heroku App Home Page Heading is correct',async ({ page }) => {
        const expectedHeading = 'Welcome to the-internet';
        await page.goto('https://the-internet.herokuapp.com/');
       
        const result = await page.getByRole('heading', { name: 'Welcome to the-internet' }).innerText();
        
        expect(result).toBe(expectedHeading);
      });

      test('Accessing Heroku HomePage app using Interfaces', async ({page}) =>{
        const herokuApp = new IHomePage(page);
        await herokuApp.visit();
        
      })
      
      test('Check Heading of Context menu page', async ({page}) =>{
        const herokuApp = new IHomePage();
        const contextMenu = new IContextMenu(page);
        await herokuApp.visit();
        await contextMenu.visit();
        const expectedHeadingContextPage = 'Context Menu';
        await contextMenu.checkHeading(expectedHeadingContextPage);
        // const result = await page.getByRole('heading', { name: 'Context Menu' }).innerText();
        // expect(result).toBe(expectedHeading);
        //await checkHeading.checkHeading();
        
      })

      
      test('Check Paragraph text of Context menu page', async ({page}) =>{
        const herokuApp = new IHomePage(page);
        const contextMenu = new IContextMenu(page);
        await herokuApp.visit();
        await contextMenu.visit();
        const expectedParagraph = 'Context menu items are custom additions that appear in the right-click menu.';
        await contextMenu.checkParagraph(expectedParagraph);
        
      })

       
      test('Check Box element present on the Context menu page', async ({page}) =>{
        const herokuApp = new IHomePage(page);
        const contextMenu = new IContextMenu(page);
        await herokuApp.visit();
        await contextMenu.visit();
        await contextMenu.checkBox();
        
      })

      test('Check right click action on the box', async ({page}) =>{
        const herokuApp = new IHomePage(page);
        const contextMenu = new IContextMenu(page);
        await herokuApp.visit();
        await contextMenu.visit();
        await contextMenu.rightClickAction();
        
      })

      test('Check alert popup and text after right click action on the box', async ({page}) =>{
        const herokuApp = new IHomePage(page);
        const contextMenu = new IContextMenu(page);
        await herokuApp.visit();
        await contextMenu.visit();
        await contextMenu.checkAlertText();
        
        
      })


