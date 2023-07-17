export interface IHorizontalSlider{
   
    goto(): Promise<void>;

    /* The `checkHeading` method is a function that takes in a parameter `expectedHeadingContextPage`
    of type string. It is used to check if the heading on the context page matches the expected
    heading. */
    checkHeading(expectedHeadingContextPage: string): void;

    /* The `checkSliderSubHeading` method is a function that takes in a parameter `expectedParagraph`
    of type string. It is used to check if the subheading of the slider matches the expected
    paragraph. */
    checkSliderSubHeading(expectedParagraph: string): void;

    /*  It is used to check the state of the slider. */
    checkSlider(): void;


    /*  This method can be used to interact with the slider and trigger any associated events or actions. */
    clickSlider(): void;


    /*  It is used to check the number associated with the slider. This
    method can be used to verify if the number displayed on the slider is correct or if it is in the
    expected state. */
    checkNumber(): void;
    
}