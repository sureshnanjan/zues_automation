import { test, expect } from '@playwright/test';
import { MultipleWindows } from '../PageObject/MultipleWindows';

    test('To check the multiplewindows page', async ({page}) =>{
      const multiplewindow = new MultipleWindows(page);
      
      await multiplewindow.goto();
      await multiplewindow.verifyWindowPage();
      
    })
    test('To Check New window Link is present or not', async ({page}) =>{
      const multiplewindow = new MultipleWindows(page);
      await multiplewindow.goto();
      await multiplewindow.verifylink();
      
    })
    test('To check new launched page ', async ({page}) =>{
      const multiplewindow = new MultipleWindows(page);
      await multiplewindow.goto();
      await multiplewindow.clickLink();
      await page.waitForTimeout(2000);
      await multiplewindow.verifyNewWindowPage();
    })
