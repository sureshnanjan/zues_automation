export interface IContextMenu{
   
    visit(): Promise<void>;
    checkHeading(): void;
    checkParagraph1(): void;
    checkParagraph2(): void;
    checkdashbox(): void;
    // checkdialog(): void;
    checkalerttext(): void;
}