import { chromium, Browser, Page } from 'playwright';
import { HerokuPage, createHerokuPage } from './herokuPage';

describe('Heroku Exit Intent Test', () => {
  let browser: Browser;
  let page: Page;
  let herokuPage: HerokuPage;

  beforeAll(async () => {
    // Launch the browser and create a new page
    browser = await chromium.launch();
    page = await browser.newPage();
    herokuPage = createHerokuPage(page);
  });

  afterAll(async () => {
    // Close the browser after the test
    await browser.close();
  });

  it('should detect exit intent', async () => {
    await herokuPage.navigateTo('https://your-heroku-website-url.com/');

    // Perform actions to trigger the exit intent
    await page.mouse.move(-100, -100);
    await herokuPage.waitForExitIntentOverlay();

    // Assert that the exit intent overlay is visible
    const exitIntentOverlayVisible = await herokuPage.isExitIntentOverlayVisible();
    expect(exitIntentOverlayVisible).toBe(true);
  });
});
