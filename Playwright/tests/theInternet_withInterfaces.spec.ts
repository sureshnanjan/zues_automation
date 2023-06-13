const { test, expect, base, chromium } = require('@playwright/test');
import { HomePagewithInterface } from '../WebAppInterfaceImplementation/HomePageWithInterface';
import { AddRemoveElementswithInterface } from '../WebAppInterfaceImplementation/AddRemoveElementswithInterface';
import { environment } from '../Utilities/heroku_config';
import { fileUploadswithInterface } from '../WebAppInterfaceImplementation/FileUploadswithInterface';

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
    await addRemoveElements.verifyAddedElements(2);
  });

  /**
   * Test to delete elements and verify their removal.
   */
  test('Delete Button', async ({ page }) => {
    await addRemoveElements.addElements(15);
    await addRemoveElements.deleteElements(5);
    await addRemoveElements.verifyAddedElements(15-5);
  });
});

//------------------File Upload---------------------------

/**
 * Test suite for File Upload functionality.
 */
test.describe('File Upload', () => {
  let fileUploadsPage: fileUploadswithInterface;

  /**
   * Runs before each test case.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test.beforeEach(async ({ page }) => {
    fileUploadsPage = new fileUploadswithInterface(page);
    // Visit the homepage and navigate to the File Uploader page
    await herokuHomePage.visit();
    await herokuHomePage.clickLink("File Upload");
  });

  /**
   * Test case to check the page heading.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Check page heading', async ({ page }) => {
    await fileUploadsPage.checkPageHeading('File Uploader');
  });

  /**
   * Test case to check the page paragraph content.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Check page paragraph content', async ({ page }) => {
    await fileUploadsPage.checkParagraphContent('Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');
  });

  /**
   * Test case to check if no file is chosen.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Check if no file is chosen', async ({ page }) => {
    const result = await fileUploadsPage.getChosenFile();
    expect(result).toBeNull();
  });

  /**
   * Test case to check error on uploading without choosing a file.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Check Error on uploading without choosing a file', async ({ page }) => {
    const result = await fileUploadsPage.uploadFile();
    expect(result).toEqual('Internal Server Error');
  });

  /**
   * Test case to check if a valid file is chosen.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Check if valid file is chosen', async ({ page }) => {
    await fileUploadsPage.chooseFile("C:/Users/jamima.nasir/Downloads/sample.txt");
    const chosenFile = await fileUploadsPage.getChosenFile();
    expect(chosenFile).toBe('sample.txt');
  });

  /**
   * Test case to verify the uploaded file.
   * @param {Playwright.Page} page - The Playwright Page object.
   */
  test('Verify uploaded file', async ({ page }) => {
    await fileUploadsPage.chooseFile("C:/Users/jamima.nasir/Downloads/sample.txt");
    const chosenFile = await fileUploadsPage.getChosenFile();
    const uploadedFile = await fileUploadsPage.uploadFile();
    expect(uploadedFile).toContain(chosenFile);
  });
});

