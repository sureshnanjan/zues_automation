import { expect, Locator, Page } from '@playwright/test';
import {BrokenImagesOps} from "../Operations/BrokenImagesOps"
export class BrokenImagesPage implements BrokenImagesOps{
  readonly page: Page;
  readonly pageHeading: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator("xpath=//div[@class='example']//h3");
    }

    async verifyHeading(pageHeadingString:string){
        await expect(this.pageHeading).toHaveText(pageHeadingString);
    }
}