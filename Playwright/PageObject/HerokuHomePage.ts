import { expect, Locator, Page } from '@playwright/test';
import { IHomePage } from 'Playwright/Operations/IHomePage';

/**
 * HomePage is the class of HerokuApp HomePage
 * page is the object of the main page
 * pageHeading is the heading of HerokuApp HomePage
 * subHeading is the subheading of HerokuApp HomePage
 * entryAdLink is the Entry Ad page link of HerokuApp HomePage
 */
export class HerokuHomePage implements IHomePage{
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly subHeading: Locator;
    readonly entryAdLink: Locator;
    // readonly dialog: Dialog;


    /**
    * This is the class constructor
    * Intializing the main page 
    * Intializing pageHeading locator
    * Intializing subheading locator
    * Intializing entryAdLink locator
    */
    constructor(page: Page){
        this.page = page;
        this.pageHeading = page.locator('h1',{ hasText: 'Welcome to the-internet'});
        this.subHeading = page.locator('h2',{ hasText: 'Available Examples'});
        this.entryAdLink = page.locator('a', { hasText: 'Entry Ad'});
        // this.dialog = page.on('dialog', dialog => {});

    }
   

    /**
     * Visit function launches the HerokuApp homepage
     */
    async visit(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }
    /**
     * checkHeading function checks for the heading of the HerokuApp homepage
     */
    async checkHeading(){
        await this.pageHeading.first();
        await expect(this.pageHeading).toBeVisible();
    }
    /**
     * checkSubHeading function checks for the SubHeading of the HerokuApp homepage
     */
    async checksubHeading(): Promise<void>{
        await this.subHeading.first();
        await expect(this.subHeading).toBeVisible();
    }
    /**
     * clickEntryAd function search and click Entry Ad Link of the HerokuApp homepage
     */
    async clickEntryAd(){
        await this.entryAdLink.click();
    }
    // async checkalert(){
    //     expect(this.dialog.message()).toContain('You selected a context menu');
    // }
}
