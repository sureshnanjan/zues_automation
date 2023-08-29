import { expect, Locator, Page } from '@playwright/test';
import { IFrames } from '../PlaywrightImplementation/IFrames';

// This is my HomePage behavior

export class Frames implements IFrames {
    readonly page: Page;
    readonly Heading: Locator;
    readonly Link1: Locator;
    readonly Link2: Locator;

    /**
    * This is the class constructor
    * Intializing the main page
    * Intializing DialogHeading locator
    * Intializing DialogClose locator
    * Intializing ClickHere locator
    */
    constructor(pagearg: Page) {
        this.page = pagearg;
        this.Heading = this.page.locator('h3', { hasText: "Frames" });
        this.Link1 = this.page.locator('a', { hasText: "NestedFrames" });
        this.Link2 = this.page.locator('a', { hasText: "iFrames" });
    }
    async visit(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/frames');
    }

    async checkHeading(expectedHeadingFramesPage: string): Promise<void> {
        await expect(this.Heading).toBeVisible();
    }

    async checkLinkcount(nooflinks: number): Promise<void> {
        const result = await this.page.getByRole('link');
        await expect(result).toHaveCOunt(nooflinks);
    }

    async gotoExample1(expectedURLnestedframesPage: string): Promise<void> {
        await this.page.getByRole('link').click();
        await expect(URL).toBe('https://the-internet.herokuapp.com/nested_frames');
    }
    async gotoExample2(expectedHeadingiFramesPage: string): Promise<void> {
        await this.page.getByRole('link').click();
        await expect(this.Heading).toBe("An iFrame containing the TinyMCE WYSIWYG Editor");
    }

}
