/**

This interface defines a set of methods to interact with the page and verify the content.
*/
export interface IHerokuBrokenImagesPageOps {
    /**
    
    Navigates to the broken images page.
    @returns A Promise that resolves when the page has been successfully visited.
    */
    visit(): Promise<void>;
    /**
    
    Verifies the heading text of the page.
    @param headingText - The expected heading text to be verified.
    */
    checkHeading(headingText: string): void;
    /**
    
    Verifies if Image 1 is loading correctly with the correct icon.
    This method checks if Image 1 is displayed and has the expected icon or fallback representation.
    */
    checkImage1(): void;
    /**
    
    Verifies if Image 2 is loading correctly with the correct icon.
    This method checks if Image 2 is displayed and has the expected icon or fallback representation.
    */
    checkImage2(): void;
    /**
    
    Verifies if Image 3 is loading correctly with the correct icon.
    This method checks if Image 3 is displayed and has the expected icon or fallback representation.
    */
    checkImage3(): void;
    }