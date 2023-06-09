import { test, expect } from '@playwright/test';
import { IContextMenu } from '../Operations/IContextMenu';
import { HerokuHomePage } from '../PageObjects/HerokuHomePage';
import { ContextMenu } from '../PageObjects/ContextMenu';

test('Accessing Heroku HomePage app using Interfaces', async ({page}) =>{

    const herokuApp = new HerokuHomePage(page);

    await herokuApp.visit();

  })

  test('Check Heading of Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    await herokuApp.visit();
    await contextMenu.goto();
    // const expectedHeadingContextPage = 'Context Menu';
    // const pageheading = contextMenu.checkHeading(expectedHeadingContextPage);
    // await page.getByRole('heading', { name: 'Context Menu' });
    await.checkHeading('Context Menu')
  })

  
  test('Check Paragraph text of Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    await herokuApp.visit();
    await contextMenu.goto();
    const expectedParagraph = 'Context menu items are custom additions that appear in the right-click menu.';
    await contextMenu.checkParagraph1();
    
  })

   
  test('Check Box element present on the Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    await herokuApp.visit();
    await contextMenu.goto();
    await contextMenu.checkBox();
    
  })


  test('Check alert popup and text after right click action on the box', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    await herokuApp.visit();
    await contextMenu.goto();
    await contextMenu.checkAlertText();
    
    
  })


  test('test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Context Menu' }).click();
    await page.getByRole('heading', { name: 'Context Menu' }).click();
    await page.getByText('Context menu items are custom additions that appear in the right-click menu.').click();
    await page.getByText('Right-click in the box below to see one called \'the-internet\'. When you click it').click();
    await page.locator('#hot-spot').click();
  });
