export interface IHomePage{
    visit(): void;
    checkHeading(headingText: string): void;
    checkSubHeading(subHeadingText: string): void;
    checkCountOfLinks(expectedCount: number): void;
    goToExample(example: string): void; 
}