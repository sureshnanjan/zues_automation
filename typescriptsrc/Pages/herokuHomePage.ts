import { expect, Locator, Page } from '@playwright/test';

export class HerokuHomePage {
readonly page: Page;
readonly pageHeading: Locator;
readonly subHeading: Locator;


constructor(page: Page) {
this.page = page;
this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-internet' }); 
this.subHeading = page.locator('h2', { hasText: 'Available Examples' });
}

async visit() {
    await this.page.goto('https://the-internet.herokuapp.com');
}

async verifyHeader(expectedHeader: string) {
    await this.pageHeading.first()
    await expect(this.pageHeading).toBeVisible();
}

async verifySubHeader(expectedSubHeader: string) {
    await this.subHeading.first()
    await expect(this.subHeading).toBeVisible();
}

async launchLink(linkLabel: string) {
    await this.page.getByRole('link', {name: linkLabel}).click();
}
}