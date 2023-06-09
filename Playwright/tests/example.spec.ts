// import { test, expect } from '@playwright/test';
// import { title } from 'process';
// import { EntryAdPage } from '../PageObject/EntryAdPage';
// // import { HomePage } from 'Playwright/PageObject/HerokuHomePage';

// test.skip('Loading of HerokuAApp Home Page', async ({ page }) => {
//   //Arrange
//   const HP = new HomePage(page);
//   await HP.visit();
  
//   //Act and Assert
//   await HP.checkHeading();
//   await HP.checkSubHeading();
// });

// test.skip('Clicking on EntryAd Page', async ({ page }) => {
//   //Arrange
//   const HP = new HomePage(page);
//   const EAP = new EntryAdPage(page);
//   await HP.visit();
  
//   //Act 
//   await HP.clickEntryAd();

//   //Assert
//   await EAP.checkDialogHeading();
// });

// test.skip('Closing the Dialog on EntryAd Page', async ({ page }) => {
//   //Arrange
//   const HP = new HomePage(page);
//   const EAP = new EntryAdPage(page);
//   await HP.visit();
//   await HP.clickEntryAd();
//   await EAP.checkDialogHeading();
  
//   //Act 
//   await EAP.performCloseDialog();
  
//   //Assert
//   await EAP.checkDialogClose();
// });

// test('Closing and relaunching the Dialog on EntryAd Page', async ({ page }) => {
//   //Arrange
//   // const HP = new HomePage(page);
//   const EAP = new EntryAdPage(page);
//   // await HP.visit();
//   // await HP.clickEntryAd();
//   await EAP.visit();
//   await EAP.checkDialogHeading();
  
//   //Act 
//   await EAP.performCloseDialog();
//   await EAP.checkDialogClose();
//   await EAP.performClickHere();
  
//   //Assert
//   await EAP.checkClickHere();

// });


import { test, expect } from '@playwright/test';
import { HerokuHomePage } from '../PageObject/HerokuHomePage';
import { ContextMenu } from '../PageObject/ContextMenu';

// test.only('Accessing Heroku HomePage app using Interfaces', async ({page}) =>{
//     const herokuApp = new HerokuHomePage(page);
//     await herokuApp.visit();

//   })

  test('Check Heading of Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    const expectedHeadingContextPage = 'Context Menu';

    await herokuApp.visit();
    await contextMenu.goto();
    await contextMenu.checkHeading(expectedHeadingContextPage)
  })

  
  test('Check Paragraph1 text of Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    const expectedParagraph1 = 'Context menu items are custom additions that appear in the right-click menu.';
    const expectedParagraph2 = "Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert.";

    await herokuApp.visit();
    await contextMenu.goto();
    await contextMenu.checkParagraph(expectedParagraph1,expectedParagraph2);
    
  })

  test('Check Box element present on the Context menu page', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    
    await herokuApp.visit();
    await contextMenu.goto();
    await contextMenu.checkDashBox();
    
  })


  test.only('Check alert popup and text after right click action on the box', async ({page}) =>{
    const herokuApp = new HerokuHomePage(page);
    const contextMenu = new ContextMenu(page);
    
    await herokuApp.visit();
    await contextMenu.goto();
    await page.pause();

    await contextMenu.performRightClick();
    

    // page.on('dialog', dialog => console.log(dialog.message()));
    // await contextMenu.checkAlertText();
    
    
  })