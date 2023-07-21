import {Page, expect} from "@playwright/test";
import {IWYSIWYG} from "../Operations/IWYSIWYG";

export class WYSIWYG implements IWYSIWYG {
page: Page | null;
headerText = "An iFrame containing the TinyMCE WYSIWYG Editor";
editorUrl = "https://the-internet.herokuapp.com/tinymce";
defaultEditorText = "Your content goes here.";

constructor(page:Page){
    this.page = page;
}

async loadEditor(editorUrl: string): Promise<void> {
  await this.page?.goto(editorUrl);
}

async verifyHeader(){
  expect(this.page.locator('h3')).toBeVisible();
  expect(this.page.locator('h3')).toHaveText(this.headerText);
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
