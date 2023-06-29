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

        await this.page.getByRole('heading', { name: 'Hovers' });
        await this.page.getByText('Hover over the image for additional information');
        await this.page.getByRole('img', { name: 'User Avatar' }).first();
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1);
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2);

    }
    async HoverandCheck() {

        //Hover over each images and check for corresponding heading and link

        await this.page.getByRole('img', { name: 'User Avatar' }).first().hover();  
        await this.page.getByRole('heading', { name: 'name: user1' });
        await this.page.getByRole('link', { name: 'View profile' })
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1).hover(); 
        await this.page.getByRole('heading', { name: 'name: user2' });
        await this.page.getByRole('link', { name: 'View profile' })
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2).hover();
        await this.page.getByRole('heading', { name: 'name: user3' });
        await this.page.getByRole('link', { name: 'View profile' })


    }
}

