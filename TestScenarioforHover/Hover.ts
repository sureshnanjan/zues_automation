import { expect, Locator, Page, test } from '@playwright/test';
import { HoverPageOperations } from './Ihover2';

    //Create clas to export
    export class Hovers implements HoverPageOperations {
    /*Declare variables*/
    readonly page: Page;
    
    constructor(page: Page) {
    
    this.page = page;
    }
    
    
    async goto() {

        /*Load the hover page*/
        await this.page.goto('https://the-internet.herokuapp.com/hovers');  

    }

    async verifyHeading(){

        await this.page.getByRole('heading', { name: 'Hovers' });
    }

    async  verifySubheading(){

        await this.page.getByText('Hover over the image for additional information');
    }

    async verifyImages() {

        //Check 3 images.
        await this.page.getByRole('img', { name: 'User Avatar' }).first();
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(1);
        await this.page.getByRole('img', { name: 'User Avatar' }).nth(2);

    }
    
    async hoverOnImage(index: number, username: string){

        await this.page.getByRole('img', { name: 'User Avatar' }).nth(index).hover();  
        await this.page.getByRole('heading', { name: `name: ${username}` });
        await this.page.getByRole('link', { name: 'View profile' })
    
    }

    async viewProfile(username: string){

        //Coming soon

    }

    async hoverAwayFromImage(index: number){

         //Coming soon
    }


}

