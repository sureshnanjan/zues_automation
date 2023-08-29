/// <
const { test, expect } = require('@playwright/test');

import { LargeAndDeepDOMPages } from '../PageObjectsPlaywright/LargeAndDeepDOMPages';


test('Visit Large and deep down page', async ({page}) =>{

 const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
 await LargeAndDeepDOMPage.visit();

});

test('Verify Large and deep down page  heading', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
 await LargeAndDeepDOMPage.verifyHeading("Large & Deep DOM");
 
});

test('Verify Large and deep down page sub heading', async ({page}) =>{

const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
 await LargeAndDeepDOMPage.verifySubHeadings("No Siblings");
 
});

test('Verify Large and deep down page instruction', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyInstruction("Some pages have very large and deeply nested page layouts, which can trigger odd rendering issues and test performance bottlenecks (depending on your locator strategy). These examples are nested 50 levels deep.");
 
});

test('Verify Large and deep down page no sibling', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyNoSiblings;
 
});
test('Verify Nth Sibling', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyNthSibling(36);
 
});
test(' Verify total siblings', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyTotalSiblings();
 
});
test('Verify total rows', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyNumberOfTableRows();
 
});
test('Verify total columns', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifyNumberOfTableColumns();
 
});
test('verify specific element.', async ({page}) =>{

  const LargeAndDeepDOMPage = new LargeAndDeepDOMPages(page);
  await LargeAndDeepDOMPage.verifySpecificElementInTable(7,10);
 
});


  
  