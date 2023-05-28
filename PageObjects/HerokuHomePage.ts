import {expect, Locator, Page } from '@playwright/test';

export class HerokuHomePage{
    readonly page: Page
    readonly heading: Locator
    readonly subHeading: Locator
    readonly links: Locator
    readonly example: Locator

    constructor(page: Page){
        this.page = page
        this.heading = page.locator('h1', { hasText: 'Welcome to the-internet' })
        this.subHeading = page.locator('h2', { hasText: 'Available Examples' })
        this.links = page.locator('#content > ul > li')
        this.example = page.locator('li a', { hasText: 'A/B Testing'})
    }

    /**
     * Function to launch the internet heroku app
     */
    async visit(){
        await this.page.goto('https://the-internet.herokuapp.com/')
    }

    /**
     * Function to check the heading of the Heroku Home page
     * @param headingText Enter the expected heading
     */
    async checkHeading(headingText: string){
        await expect(this.heading).toHaveText(headingText)
    }

    /**
     * Function to check the sub heading of the Heroku Home page
     * @param subHeadingText Enter the expected sub heading
     */
    async checkSubHeading(subHeadingText: string){
        await expect(this.subHeading).toHaveText(subHeadingText)
    }

    /**
     * Function to count the number of links on the Heroku Home page
     * @param expectedCount Enter the expected count of links
     */
    async checkCountOfLinks(expectedCount: number){
        expect(await this.links.count()).toBe(expectedCount)
    }

    /**
     * Function to go to the example available on the Heroku Home page
     * @param example Enter the name of the example
     */
    async goToExample(example: string){
       await this.links.locator('a', { hasText: example }).click()
    }
}