/// <
const { test, expect } = require('@playwright/test');

import { HomePageWithInterfaceImpl } from '../PageObjectsPlaywright/HomePageWithInterfacesImpl';
import { ShiftingContentPages } from '../PageObjectsPlaywright/ShiftingContentPages';


test('Visit shifting content page', async ({page}) =>{

 const ShiftingContentPage = new ShiftingContentPages(page);
 await ShiftingContentPage.visit();

});

test('Verify shifting content page heading', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.checkHeading("sample heading");
 
});

test('open the Example 1: Menu Element', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ex1Menu;
 
});

test('click on the "click here" of loading randomly.', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Mlink1;
 
});

test('click on the "click here" of specifying a differant number of pixels to shift the example', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Mlink2;
 
});
test('click on the "click here" of using links 1 and 2 together', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Mlink3;
 
});
test(' open the Example 2: An image', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ex2Img;
 
});
test('click on the "click here" of loading image randomly', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ilink1;
 
});
test('click on the "click here" of specifying a differant number of pixels to shift the image.', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ilink2;
 
});
test('click on the "click here" of using links 1 and 2 together.', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ilink3;
 
});
test('click on the "click here" of a simple image.', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ilink4;
 
});
test('open the Example 3: List', async ({page}) =>{

  const ShiftingContentPage = new ShiftingContentPages(page);
  await ShiftingContentPage.Ex3List;
 
});

  
  