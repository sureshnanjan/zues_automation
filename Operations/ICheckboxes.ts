export interface ICheckboxes{
   
    visit(): Promise<void>;
    checkHeading(expectedHeadingContextPage: string): void;
    checkbox1(): void;
    checkbox2(): void;

}