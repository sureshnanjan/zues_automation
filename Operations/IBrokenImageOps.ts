export interface IHerokuBrokenImagesPageOps {
    visit(): Promise<void>;
    /**Verify the heading of the page**/
    checkHeading(headingText: string): void;
    /** Verify if Image 1 is loading correctly with correct icon */
    checkImage1(): void;
    /** Verify if Image 2 is loading correctly with correct icon */
    checkImage2(): void;
    /** Verify if Image 3 is loading correctly with correct icon */
    checkImage3(): void;
}