import {Page} from "@playwright/test";
import {IWYSIWYG} from "../Operations/*";
import { chromium, firefox, webkit, Browser} from 'playwright';

class WYSIWYG implements IWYSIWYG {
private browserType: 'chromium' | 'firefox' | 'webkit';
private browser: Browser | null;
private page: Page | null;

  
  constructor(page:Page){
    this.page = page;
}

  async initialize(): Promise<void> {
    if (this.browserType === 'chromium') {
      this.browser = await chromium.launch();
    } else if (this.browserType === 'firefox') {
      this.browser = await firefox.launch();
    } else if (this.browserType === 'webkit') {
      this.browser = await webkit.launch();
    }
    this.page = await this.browser.newPage();
  }

  async loadEditor(editorUrl: string): Promise<void> {
    await this.page?.goto(editorUrl);
  }

  async getContent(): Promise<string> {
    const content = await this.page?.evaluate(() => {
      const editor = document.querySelector('editor');
      return editor?.getContent();
    });
    return content ?? '';
  }

  async setContent(content: string): Promise<void> {
    await this.page?.evaluate((content) => {
      const editor = document.querySelector('editor');
      editor?.setContent(content);
    }, content);
  }

  async saveAsHtml(outputPath: string): Promise<void> {
    await this.page?.evaluate((outputPath) => {
      const editor = document.querySelector('editor');
      editor?.saveAsHTML(outputPath);
    }, outputPath);
  }

  async saveAsPdf(outputPath: string): Promise<void> {
    await this.page?.pdf({ path: outputPath });
  }

  async close(): Promise<void> {
    await this.browser?.close();
  }
}
