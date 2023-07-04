import { Page, test, expect, BrowserContext} from '@playwright/test';
const moment = require('moment');
const currDate = moment().format('DD-MM-YY HH:mm:ss')
let page: Page
let context: BrowserContext

test.describe.serial('notebook Test cases', () => {
  test.beforeAll(async ({ browser }, testInfo) => {
  context = await browser.newContext()
  page = await context.newPage()
  })
  
  test('annotate Login case', async () => {
    await page.goto('https://annotate.net/');
    await page.getByRole('link', { name: 'Login / Join' }).click();
    await page.locator('#txtUsername').click();
    await page.locator('#txtUsername').fill('nehaqazi22@gmail.com');
    await page.locator('#txtPassword').click();
    await page.locator('#txtPassword').fill('password1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('domcontentloaded')
    if (await page.locator('p').filter({ hasText: 'You seem to be already logged in ' }).count() != 0) {
      await page.locator('//*[@id="loginform"]/input[1]').click()
    }
  })

  test('notebook creation', async () => {
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('[data-id="MyDriveWidget"] div:not(.hidden)>.fab-menu-button')).toBeVisible({timeout:300000})
    await page.locator('[data-id="MyDriveWidget"] div:not(.hidden)>.fab-menu-button').click()
    await expect (page.locator('//*[@data-id = "XFABContainer"]//*[@id = "1401"]/div[2]')).toBeVisible()
    await page.locator('//*[@data-id = "XFABContainer"]//*[@id = "1401"]/div[2]').click()
    await expect (page.locator('//*[@data-id = "NewNotebookDialog"]//*[@data-id = "XButton" and contains (. ,"Create")]')).toHaveText('Create')
    await expect (page.locator('//*[@data-id="NewNotebookDialog"]//*[@data-id="XInputWidget"]')).toBeVisible()
    await page.locator('//*[@data-id="NewNotebookDialog"]//*[@data-id="XInputWidget"]').type(currDate)
    await page.locator('//*[@data-id = "NewNotebookDialog"]//*[@data-id = "XButton" and contains (. ,"Create")]').click()
    await expect (page.locator('//*[@data-id="XNotebookToolbar"]//*[contains (@class , "widget label") and @data-id="Z"]')).toHaveText(currDate)
    await page.waitForTimeout(1000)
  }) 
  })