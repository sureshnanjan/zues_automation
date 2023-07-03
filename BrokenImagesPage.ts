import { expect, Locator, Page } from '@playwright/test';
import { environment } from '../Utilities/heroku_config';
import { IHerokuBrokenImagesPageOps } from "../Operations/IHerokuAppBrokenImagesPageOps";
export class BrokenImagesPageWithInterfaceImpl implements IHerokuBrokenImagesPageOps {
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
        this.pageHeading = page.locator('h3', { hasText: 'Broken Images' });
        this.firstImage = page.getByRole('img').nth(1);
        this.secondImage = page.getByRole('img').nth(2);
        this.thirdImage = page.getByRole('img').nth(3);
        this.image1 = "asdf.jpg";
        this.image2 = "hjkl.jpg";
        this.image3 = "img/avatar-blank.jpg";
    }

    async visit(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/broken_images");
    }

    async checkHeading(headingText: string) {
        await expect(this.pageHeading).toHaveText(headingText);
    }

    async checkImage1() {
        await expect(this.firstImage).toHaveAttribute('src', `${this.image1}`);
        await expect(this.firstImage).toBeVisible();
    }

    async checkImage2() {
        await expect(this.secondImage).toHaveAttribute('src', `${this.image2}`);
        await expect(this.secondImage).toBeVisible();
    }

    async checkImage3() {
        await expect(this.thirdImage).toHaveAttribute('src', `${this.image3}`);
        await expect(this.thirdImage).toBeVisible();
    }
}