export interface ShiftingContent {
    /* To open the Herokuapp page */
    visit();

    /* To check the heading of the page*/
    checkHeading(headingText: string): void;
    
    /* To open the Example 1: Menu Element */
    Ex1Menu(): void;

    /* To click on the "click here" of loading randomly. */
    Mlink1(): void;

    /* To click on the "click here" of specifying a differant number of pixels to shift the example */
    Mlink2(): void;

    /* To click on the "click here" of using links 1 and 2 together */
    Mlink3(): void;

    /* To open the Example 2: An image */
    Ex2Img(): void;

    /* To click on the "click here" of loading image randomly */
    Ilink1(): void;

    /* To click on the "click here" of specifying a differant number of pixels to shift the image. */
    Ilink2(): void;

    /* To click on the "click here" of using links 1 and 2 together. */
    Ilink3(): void;

    /* To click on the "click here" of a simple image.*/
    Ilink4(): void;

    /* To open the Example 3: List */
    Ex3List(): void;
}