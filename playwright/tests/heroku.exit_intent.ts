import { chromium, Browser, Page } from 'playwright';
import { IExitIntent } from '../../Operations/IExitIntent';;

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
}
