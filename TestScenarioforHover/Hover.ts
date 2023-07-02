import { expect, Locator, Page, test } from '@playwright/test';
import { Ihover } from './Ihover';

    //Create clas to export
    export class Hovers implements Ihover {
    /*Declare variables*/
    readonly page: Page;
    
    constructor(page: Page) {
    
    this.page = page;
    }
    
    
    async goto() {
        /*Load the hover page*/
        await this.page.goto('https://the-internet.herokuapp.com/hovers');  

    }
    
    async LocateElements() {

        //Check for header, subheader and 3 images.

        await this.page.getByRole('heading', { name: 'Hovers' });                              //Check for heading
        await this.page.getByText('Hover over the image for additional information');          //Check for subheading
        await this.page.getByRole('img', { name: 'User Avatar' }).first();                     //Check for image 1   
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1);                      //Check for image 2  
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2);                      //Check for image 3 

    }
    async HoverandCheck() {

        //Hover over each images and check for corresponding heading and link

        await this.page.getByRole('img', { name: 'User Avatar' }).first().hover();              //Hover over image 1
        await this.page.getByRole('heading', { name: 'name: user1' });                          //Check if image have name of user1 
        await this.page.getByRole('link', { name: 'View profile' })                             // Check for View profile link
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1).hover();               //Hover over image 2
        await this.page.getByRole('heading', { name: 'name: user2' });                          //Check if image have name of user2
        await this.page.getByRole('link', { name: 'View profile' })                             // Check for View profile link
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2).hover();               //Hover over image 3
        await this.page.getByRole('heading', { name: 'name: user3' });                         //Check if image have name of user3
        await this.page.getByRole('link', { name: 'View profile' })                            // Check for View profile link


    }
}

