import { expect, Locator, Page, chromium } from '@playwright/test';
import { IFileUploads } from '../Interfaces/iFileUploads';

/**
 * Represents the file upload functionality with Playwright.
 */
export class fileUploadswithInterface implements IFileUploads {
  /** The Playwright Page object. */
  readonly page: Page;
  /** Locator for the page heading element. */
  readonly pageHeading: Locator;
  /** Locator for the paragraph content element. */
  readonly paragraphContent: Locator;
  /** Locator for the choose file button element. */
  readonly chooseFileBtn: Locator;
  /** Locator for the upload button element. */
  readonly uploadBtn: Locator;
  /** Locator for the drag and drop upload area element. */
  readonly areaUpload: Locator;
  /** Locator for the error element. */
  readonly Error: Locator;
  /** The selected file name. */
  selectedFileName: string;

  /**
   * Creates an instance of the fileUploadswithInterface class.
   * @param {Page} page - The Playwright Page object.
   */
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h3');
    this.paragraphContent = page.locator('p');
    this.chooseFileBtn = page.locator('//*[@id="file-upload"]');
    this.uploadBtn = page.getByRole('button', { name: 'Upload' });
    this.selectedFileName = '';
    this.areaUpload = page.locator('document.querySelector("#drag-drop-upload")');
    this.Error = page.locator('h1');
  }

  /**
   * Checks if the page heading matches the expected value.
   * @param {string} expectedHeading - The expected heading text.
   * @returns {Promise<void>}
   */
  async checkPageHeading(expectedHeading: string): Promise<void> {
    const actualHeading = await this.pageHeading.textContent();
    expect(actualHeading).toBe(expectedHeading);
  }

  /**
   * Checks if the paragraph content matches the expected value.
   * @param {string} expectedContent - The expected paragraph content.
   * @returns {Promise<void>}
   */
  async checkParagraphContent(expectedContent: string): Promise<void> {
    const actualContent = await this.paragraphContent.textContent();
    expect(actualContent).toBe(expectedContent);
  }

  /**
   * Chooses a file to upload.
   * @param {string} path - The path of the file to upload.
   * @returns {Promise<void>}
   */
  async chooseFile(path: string): Promise<void> {
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.chooseFileBtn.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path);
  }

  /**
   * Retrieves the chosen file name.
   * @returns {Promise<string | null>} The chosen file name, or null if no file is chosen.
   */
  async getChosenFile(): Promise<string | null> {
    const uploadedFileName = await this.page.evaluate(() => {
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement | null;
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        return fileInput.files[0].name;
      }
      return null;
    });
    return uploadedFileName;
  }

 /**
  * Uploads the chosen file and retrieves the error text if present.
  * @returns {string | null} - The error text, or null if no error occurs.
  */
 async uploadFile() {
   await this.uploadBtn.click();
 
   try {
     await this.page.waitForSelector('h1', { timeout: 5000 });
     const h1Element = await this.page.locator('h1');
     const errorText = await h1Element.textContent();
     console.log('Error Text:', errorText);
     return errorText;
   } catch (error) {
     const xpathElement = await this.page.evaluate(() => {
       const element = document.evaluate('//*[@id="uploaded-files"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
       return element ? element.textContent : null;
     });
     console.log('Error Text:', xpathElement);
     return xpathElement;
   }
      }
  }

