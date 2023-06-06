const { test, expect, base, chromium } = require('@playwright/test');
import { HerokuHumePage } from '../PageObjects-TheInternet/HomePage';
import { AddRemoveElements } from '../PageObjects-TheInternet/AddRemoveElements';
import { ContextMenu } from '../PageObjects-TheInternet/ContextMenu';
import { environment } from '../Utilities/heroku_config';
import { Checkboxes } from '../PageObjects-TheInternet/Checkboxes';
import { WindowsPage, NewWindowPage } from '../PageObjects-TheInternet/MultipleWindows';
import { DisappearingElements } from '../PageObjects-TheInternet/DisappearingElements';
import { HoversPage } from '../PageObjects-TheInternet/Hovers';

let herokuHomePage: HerokuHumePage;

test.beforeEach(async ({ page }) => {
  herokuHomePage = new HerokuHumePage(page);
  // Visit the homepage
  await herokuHomePage.visit();
});

//------------------ Home Page ---------------------------

test.describe('HerokuHumePage', () => {
  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HerokuHumePage(page);
    // Visit the homepage
    await herokuHomePage.visit();
  });

  /**
   * Test to check the page heading on the Home page.
   */
  test('Check page heading', async ({ page }) => {
    await herokuHomePage.checkHeading('Welcome to the-internet');
  });

  /**
   * Test to check the subheading on the Home page and navigate to the specified link.
   */
  test('Check subheading', async ({ page }) => {
    await herokuHomePage.checksubHeading('Available Examples');
    await herokuHomePage.clickLink("A/B Testing");
  });

  /**
   * Test to click a link and verify the navigation.
   */
  test('Click Link and Verify Navigation', async ({ page }) => {
    const linkText = 'Context Menu'; // Replace with the desired link text to click
    await herokuHomePage.clickLink(linkText); // Click on the specified link
    const currentUrl = await page.url(); // Get the current URL after navigation
    // Assert the expected URL based on the clicked link
    expect(currentUrl).toContain('/context_menu'); // Replace with the expected URL for the clicked link
  });
});


//------------------ Add remove elements ---------------------------

test.describe('Add remove elements', () => {
  let addRemoveElements: AddRemoveElements;

  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HerokuHumePage(page);
    addRemoveElements = new AddRemoveElements(page);
    // Visit the homepage and navigate to the Add/Remove Elements page
    await herokuHomePage.visit();
    await herokuHomePage.clickLink("Add/Remove Elements");
  });

  /**
   * Test to check the page heading on the Add/Remove Elements page.
   */
  test('Check page heading', async ({ page }) => {
    await addRemoveElements.checkHeading('Add/Remove Elements');
  });

  /**
   * Test to add elements and verify their presence.
   */
  test('Add Button', async ({ page }) => {
    await addRemoveElements.addElements(2);
    await addRemoveElements.verifyAddedElements();
  });

  /**
   * Test to delete elements and verify their removal.
   */
  test('Delete Button', async ({ page }) => {
    await addRemoveElements.addElements(3);
    await addRemoveElements.deleteElements(1);
    await addRemoveElements.verifyAddedElements();
  });
});


//------------------ Context Menu ---------------------------

test.describe('Context Menu', () => {
  let contextMenu: ContextMenu;

  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HerokuHumePage(page);
    contextMenu = new ContextMenu(page);
    // Visit the homepage and navigate to the Context Menu page
    await herokuHomePage.visit();
    herokuHomePage.clickLink("Context Menu");
  });

  /**
   * Test to check the page heading on the Context Menu page.
   */
  test('Check page heading', async ({ page }) => {
    await contextMenu.checkHeading('Context Menu');
  });

  /**
   * Test to check the text in the dialogue box after right-clicking on a box.
   */
  test('Check dialogue box text', async ({ page }) => {
    await contextMenu.checkHeading('Context Menu');
    await contextMenu.rightClickOnBox();
    await contextMenu.checkDialogueText('You selected a context menu');
    await contextMenu.waitForDialogDisappearance();
  });
});


//------------------ Checkboxes ---------------------------

test.describe('Checkboxes', () => {
  let checkboxes: Checkboxes;

  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HerokuHumePage(page);
    checkboxes = new Checkboxes(page);
    // Visit the homepage and navigate to the Checkboxes page
    await herokuHomePage.visit();
    herokuHomePage.clickLink("Checkboxes");
  });

  /**
   * Test to check the page heading on the Checkboxes page.
   */
  test('Check page heading', async ({ page }) => {
    await checkboxes.checkHeading('Checkboxes');
  });

  /**
   * Test to toggle the checkboxes and verify their status.
   */
  test('Toggle checkboxes', async ({ page }) => {
    const checkbox1Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox1);
    const checkbox2Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox2);

    if (checkbox1Status) {
      console.log('Checkbox 1 old status:', checkbox1Status);
      await checkboxes.uncheckCheckbox(checkboxes.checkbox1);
      const newCheckbox1Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox1);
      console.log('Checkbox 1 new status:', newCheckbox1Status);
      expect(newCheckbox1Status).toBe(false);
    } else {
      console.log('Checkbox 1 old status:', checkbox1Status);
      await checkboxes.checkCheckbox(checkboxes.checkbox1);
      const newCheckbox1Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox1);
      console.log('Checkbox 1 new status:', newCheckbox1Status);
      expect(newCheckbox1Status).toBe(true);
    }

    if (checkbox2Status) {
      console.log('Checkbox 2 old status:', checkbox2Status);
      await checkboxes.uncheckCheckbox(checkboxes.checkbox2);
      const newCheckbox2Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox2);
      console.log('Checkbox 2 new status:', newCheckbox2Status);
      expect(newCheckbox2Status).toBe(false);
    } else {
      console.log('Checkbox 2 old status:', checkbox2Status);
      await checkboxes.checkCheckbox(checkboxes.checkbox2);
      const newCheckbox2Status = await checkboxes.isCheckboxChecked(checkboxes.checkbox2);
      console.log('Checkbox 2 new status:', newCheckbox2Status);
      expect(newCheckbox2Status).toBe(true);
    }
  });
});


//------------------ Multiple Windows ---------------------------

test.describe('Windows Page', () => {
  let windowsPage: WindowsPage;

  test.beforeEach(async ({ page }) => {
    windowsPage = new WindowsPage(page);
    await herokuHomePage.clickLink("Multiple Windows");
  });

  /**
   * Test to click the new window link and verify if a new window is opened.
   */
  test('Clicking new window link opens a new window', async () => {
    const newWindowPage = await windowsPage.clickNewWindowLink();
    const currentHandle = await newWindowPage.getCurrentWindowHandle();
    expect(currentHandle).toContain('/windows/new');
  });

  /**
   * Test to get the page title of the main window.
   */
  test('Get page title of the main window', async () => {
    const pageTitle = await windowsPage.getPageTitle();
    expect(pageTitle).toContain('The Internet');
  });
});

test.describe('New Window Page', () => {
  let newWindowPage: NewWindowPage;
  let mainWindow: WindowsPage;

  test.beforeEach(async ({ page }) => {
    mainWindow = new WindowsPage(page);
    await herokuHomePage.clickLink("Multiple Windows");
    newWindowPage = await mainWindow.clickNewWindowLink();
  });

  /**
   * Test to switch back to the main window and verify if the main page is displayed.
   */
  test('Switching to main window returns to the main page', async () => {
    const switchedMainWindow = await newWindowPage.switchToMainWindow();
    const pageTitle = await switchedMainWindow.getPageTitle();
    expect(pageTitle).toContain('The Internet');
  });

  /**
   * Test to get the content of the new window.
   */
  test('Get content of the new window', async () => {
    const content = await newWindowPage.getContent();
    expect(content).toContain('New Window');
  });
});


//------------------ Hovers ---------------------------

test.describe('Hovers Page', () => {
  let hoversPage: HoversPage;

  test.beforeEach(async ({ page }) => {
    await herokuHomePage.clickLink("Hovers");
    hoversPage = new HoversPage(page);
  });

  /**
   * Test to hover over users and verify their names.
   */
  test('should display user name on hover', async () => {
    await hoversPage.hoverOverUser(hoversPage.user1);
    const user1Text = await hoversPage.getUserText(hoversPage.user1);
    expect(user1Text).toContain('user1');

    await hoversPage.hoverOverUser(hoversPage.user2);
    const user2Text = await hoversPage.getUserText(hoversPage.user2);
    expect(user2Text).toContain('user2');

    const user3Text = await hoversPage.getUserText(hoversPage.user3);
    expect(user3Text).toContain('user3');
  });
});
