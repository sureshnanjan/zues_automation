export interface IContextMenu{
   
    visit(): Promise<void>;
    checkHeading(): void;
    checkParagraph(): void;
    checkBox(): void;
    checkAlertText(): void;
    rightClickAction(): void;

}