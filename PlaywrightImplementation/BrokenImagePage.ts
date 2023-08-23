import { IBrokenImageOps } from "../Operations/IBrokenImageOps";
import { expect, Locator, Page } from '@playwright/test';

export class BrokenImagePage implements IBrokenImageOps{

    // Private Methods Properties
    page : Page 
    private readonly Image1: Locator; // data-hroku-image1
    private readonly Image2: Locator;
    private readonly Image3: Locator;
    private readonly Heading: Locator;
    private readonly image1filename: string;
    private readonly image2filename: string;
    private readonly image3filename: string;
    constructor(pagearg: Page){
        this.page = pagearg;
        this.Image1 = this.page.getByRole("img").nth(0);
        this.Image2 = this.page.getByRole("img").nth(1);
        this.Image3 = this.page.getByRole("img").nth(2);
        this.Heading = this.page.getByTestId('hroku-image1'); // Best Pracice
        this.image1filename = 'img/avatar-blank.jpg';
        this.image2filename = 'img/avatar-blank1.jpg';
        this.image3filename = 'img/avatar-blank2.jpg';
        //this.page.keyboard.




    }

    checkImage1(){
        expect(this.Image1).toHaveAttribute('src',this.image1filename);
    }
}