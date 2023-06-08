/// <
const { test, expect } = require('@playwright/test');

import { HomePageWithInterfaceImpl } from '../PageObjectsPlaywright/HomePageWithInterfacesImpl';
import { BrokenImagesPage } from '../PageObjectsPlaywright/BrokenImagesPage';


test.only('Verify Broken image header', async ({page}) =>{
 const herokuapp = new HomePageWithInterfaceImpl(page);
 const BrokenImagePage = new BrokenImagesPage(page);
 await herokuapp.visit();
 await page.locator("xpath=//a[text()='Broken Images']").click();
await BrokenImagePage.verifyHeading('Broken Image');
 
  
  })