export interface IExitIntent{
   
    visit(): Promise<void>;
    checkHeading(): void;
    checkParagraph(): void;
   

}