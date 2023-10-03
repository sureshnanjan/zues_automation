import { expect, Locator, Page, test } from '@playwright/test';
import { IHorizontalSlider } from './Ihorizontalslider';

    //Create clas to export
    export class Slider implements IHorizontalSlider  {
    /*Declare variables*/
    readonly page: Page;
    
    constructor(page: Page) {
    
    this.page = page;
    }
    
    
    async goto() {
        /*Load the page*/
        await this.page.goto('https://the-internet.herokuapp.com/horizontal_slider');  

    }
    
    async checkHeading(){

        await expect(this.page.getByRole('heading', { name: 'Horizontal Slider' })).toBeVisible();


    }
    async checkSliderSubHeading(){
        await expect(this.page.getByRole('heading', { name: 'Set the focus on the slider (by clicking on it) and use the arrow keys to move it right and left. Or click and drag the slider with your mouse. It will indicate the value of the slider to the right.' })).toBeVisible();


    }
    async checkSlider() {

        await expect(this.page.locator("div.sliderContainer input")).toBeVisible;
        await expect(this.page.locator("#range")).toBe("0");
    }

    async clickSlider() {
        const slider = this.page.locator("div.sliderContainer input");
        const slider_point = this.page.locator("#range");
        const range_max= '5';
        slider.click();

        while (1==1){
            if (await slider_point.innerText() == range_max){
                break;
            }
            slider.press('ArrowRight');
            this.page.waitForTimeout(3000);

        }

    }
    async checkNumber() {
        const slider = this.page.locator("div.sliderContainer input");
        const slider_point = this.page.locator("#range");
        const range_max= '5';
        slider.click();

        while (1==1){
            if (await slider_point.innerText() == range_max){
                break;
            }
            slider.press('ArrowRight');
            this.page.waitForTimeout(3000);

        }
        await expect(this.page.locator("#range")).toBe('5');

    }
    
}