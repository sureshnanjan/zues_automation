import { Page, BrowserContext, test, expect } from '@playwright/test';
import { dragdropPage } from '../Pages/DragDropPage';
let page: Page
let context: BrowserContext

test.describe.serial('Heroku Drag and Drop page', () => {
  test.beforeAll(async ({ browser }, testInfo) => {
  context = await browser.newContext()
  page = await context.newPage()
 })

 test.afterAll(async () => {
  await context.close()
 })

 test('Title of drag and drop link in herokuapp', async ({ page }) => {
  const title = new dragdropPage(page);
  await title.goto();
  await title.CheckTitle();
 });

 test('Two draggable elements visible with header A & B', async () => {
  const actualcount = new dragdropPage(page);
 });

 test('Cursor should show drag handles', async () => {
  const dragcursor = new dragdropPage(page);
 });

 test('Position of element A', async () => {
  const boxA = new dragdropPage(page);     /* Create an instance of the page object*/
  await boxA.PositionOfA();               /**Check Position of Box A */  
 });
  

 test('Position of element B', async () => {
  const boxB = new dragdropPage(page);     /* Create an instance of the page object*/
  await boxB.PositionOfB();               /**Check Position of Box A */
 });

 test('Drag left element to right', async () => {
  //A should now be on the right
  //B should be on the left
 });

 test('Drag right element to left', async () => {
  //A should be on the left
  //B should be on the right
 });

 test('Grayed out placeholder should be visible of the element which is being dragged', async () => {
  //until the element is dropped at the desired position
 });

 test('Dotted outline should be visible at the drop location', async () => {
  //while the dragged element is still in selection mode
 });
})
