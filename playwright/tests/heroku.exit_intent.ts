import { chromium, Browser, Page } from 'playwright';
import { IExitIntent } from '../../Operations/herokuPage';;

export class ExitIntent implements IExitIntent {
  private browser: Browser;
  private page: Page;

  constructor(browser: Browser, page: Page) {
    this.browser = browser;
    this.page = page;
  }

  public async visit(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/exit_intent');
  }

  public async checkHeading(): Promise<void> {
    const heading = await this.page.textContent('h3');
    console.log(`Heading: ${heading}`);
  }

  public async checkParagraph(): Promise<void> {
    const paragraph = await this.page.textContent('p');
    console.log(`Paragraph: ${paragraph}`);
  }

  public async simulateExitIntent(): Promise<boolean> {
    // Move the mouse outside the viewport to simulate exit intent
    await this.page.mouse.move(-100, -100);
    // Wait for the modal to appear
    await this.page.waitForSelector('.modal', { state: 'visible' });
    // Check if the modal is visible
    const isModalVisible = await this.page.isVisible('.modal');
    return isModalVisible;
  }

  public async closeModal(): Promise<void> {
    // Close the exit intent modal
    await this.page.click('.modal .modal-footer p');
  }

}

async function runPlaywrightInterface() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const exitIntent = new ExitIntent(browser, page);

  await exitIntent.visit();

    const heading = await exitIntent.checkHeading();
    console.log(`Heading: ${heading}`);

    const paragraph = await exitIntent.checkParagraph();
    console.log(`Paragraph: ${paragraph}`);

    const isModalVisible = await exitIntent.simulateExitIntent();
    console.log(`Exit Intent Modal Visible: ${isModalVisible}`);

    await exitIntent.closeModal();

    await browser.close();
    console.log("Playwright interface completed.");
}

runPlaywrightInterface();