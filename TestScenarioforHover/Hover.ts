import { expect, Locator, Page, test } from '@playwright/test';

    //Create clas to export
    export class Hovers {
    /*Declare variables*/
    readonly page: Page;
    
    constructor(page: Page) {
    
    this.page = page;
    }
    
    
    async goto() {
        /*Load the drag and drop page*/
        await this.page.goto('https://the-internet.herokuapp.com/hovers');  

    }
    
    async LocateElements() {

        await this.page.getByRole('heading', { name: 'Hovers' });
        await this.page.getByText('Hover over the image for additional information');
        await this.page.getByRole('img', { name: 'User Avatar' }).first();
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1);
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2);

    }
    async HoverandCheck() {

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

