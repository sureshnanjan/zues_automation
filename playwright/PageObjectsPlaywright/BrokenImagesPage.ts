import { expect, Locator, Page } from '@playwright/test';
import {BrokenImagesOps} from "../Operations/BrokenImagesOps"
export class BrokenImagesPage implements BrokenImagesOps{
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly firstImage: Locator;
  readonly secondImage: Locator;
  readonly thirdImage: Locator;
  readonly image1: string;
  readonly image2: string;
  readonly image3: string;
 
    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator("xpath=//div[@class='example']//h3");
        this.firstImage = page.getByRole('img').nth(1);
        this.secondImage = page.getByRole('img').nth(2);
        this.thirdImage = page.getByRole('img').nth(3);
        this.image1 = "asdf.jpg";
        this.image2 = "hjkl.jpg";
        this.image3 = "img/avatar-blank.jpg";
    }

    async verifyHeading(pageHeadingString:string){
        await expect(this.pageHeading).toHaveText(pageHeadingString);
    }

    async checkImage(imageNumber) {
        let imglocator:Locator;
        let srcString:String;
        if(imageNumber==1){
            imglocator=this.firstImage;
            srcString=this.image1;
        }else if(imageNumber==2){
            imglocator=this.secondImage;
            srcString=this.image2;
        }else{
            imglocator=this.thirdImage;
            srcString=this.image3;
        }
        await expect(imglocator).toHaveAttribute('src', `${srcString}`);
        await expect(imglocator).toBeVisible();
    }
}

