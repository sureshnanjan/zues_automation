

/* The above class is a TypeScript implementation of a horizontal slider functionality for a web page. */
import { expect, FrameLocator, Locator, Page } from '@playwright/test';
import { IHorizontalSlider } from '../Operations/IHorizontalSlider';

/* The HorizontalSlider class is an implementation of the IHorizontalSlider interface. */
export class HorizontalSlider implements IHorizontalSlider{
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly SliderSubHeading: Locator;
    readonly Slider: Locator;
    readonly range: Locator;   
    readonly  n: number;

/**
 * This constructor initializes the page, pageHeading, SliderSubHeading, Slider, and range properties.
 * @param {Page} page - The "page" parameter is an instance of the Page class. It represents the web
 * page that the constructor is being called on.
 */
constructor(page: Page){
    this.page = page;
    this.pageHeading =  page.locator('h3', { hasText: 'Horizontal Slider' });
    this.SliderSubHeading = page.locator('h4', { hasText: 'Set the focus on the slider (by clicking on it) and use the arrow keys to move it right and left. Or click and drag the slider with your mouse. It will indicate the value of the slider to the right.'});
    this.Slider = page.getByRole('slider');
    this.range = page.locator("[id='range']");

}

/**
 * The function navigates to the specified URL.
 */
async goto(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/horizontal_slider')         
}
/**
 * The function checks if the page heading matches the expected heading for a horizontal slider.
 * @param {string} expectedHeadingHorizontalSlider - The expected heading text for the horizontal
 * slider.
 */
async checkHeading(expectedHeadingHorizontalSlider: string): Promise<void>{
    await expect(this.pageHeading).toHaveText(expectedHeadingHorizontalSlider);
}
/**
 * The function checks if the text of a slider subheading matches the expected paragraph.
 * @param {string} expectedParagraph - The expected text that should be displayed in the slider
 * subheading.
 */
async checkSliderSubHeading(expectedParagraph: string): Promise<void> {
    await expect(this.SliderSubHeading).toHaveText(expectedParagraph);
}
/**
 * The function checks if a slider element is visible.
 */
async checkSlider(): Promise<void> {
    await expect(this.Slider).toBeVisible();
}
/**
 * The function "clickSlider" clicks on a slider element at a specific position.
 */
async clickSlider(): Promise<void> {
    await this.Slider.click(
        { position:{x: 5, y: 5}}
    )
}

/**
 * The function checks if the range value is equal to n multiplied by 0.5 by simulating pressing the
 * right arrow key n times.
 */
async checkNumber(): Promise<void> {
  
    for (let i = 0; i < this.n; i++)
        await this.page.keyboard.press('ArrowRight');
    expect (this.range.innerText()).toBe('n*0.5');

}
}
