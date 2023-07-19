import { Browser, expect, Locator, Page, test } from '@playwright/test';
import { digestAuthentication } from "../Operations/digestAuthenticationPO";

//Class to export
export class digestAuthenticationPageWithInterfaceImpl implements digestAuthentication {

  readonly page: Page;
  
  constructor(page: Page) {
      this.page = page;
  }
  
  async visit(): Promise<void> {
    // Add login page details
    }

  async alertDialogue():  Promise<void> {
  // Add alert data
  }

  async successPage():  Promise<void> {
    // Add alert data
    }
}