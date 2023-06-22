export interface IContextMenu{
   
    goto(): Promise<void>;
    checkHeading(expectedHeadingContextPage: string): void;
    checkParagraph(expectedParagraph1: string,expectedParagraph2: string): void;
    checkDashBox(): void;
    performRightClick(): void;
    checkDialog(): void;
    checkAlertText(): void;
}