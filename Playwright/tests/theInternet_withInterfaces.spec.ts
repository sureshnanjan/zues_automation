const { test, expect, base, chromium } = require('@playwright/test');
import { HomePagewithInterface } from '../InterfaceImplementation-theInternet/HomePageWithInterface';
import { AddRemoveElementswithInterface } from '../InterfaceImplementation-theInternet/AddRemoveElementswithInterface';
import { environment } from '../Utilities/heroku_config';


let herokuHomePage: HomePagewithInterface;

test.beforeEach(async ({ page }) => {
  herokuHomePage = new HomePagewithInterface(page);
  // Visit the homepage
  await herokuHomePage.visit();
});

//------------------ Home Page ---------------------------

test.describe('HomePagewithInterface', () => {
  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HomePagewithInterface(page);
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
   * Test to check available number of links matches the mentioned number.
   */
  test('Check available links', async ({ page }) => {
    await herokuHomePage.checkAvailableLinks(44);
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
  let addRemoveElements: AddRemoveElementswithInterface;

  test.beforeEach(async ({ page }) => {
    herokuHomePage = new HomePagewithInterface(page);
    addRemoveElements = new AddRemoveElementswithInterface(page);
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

