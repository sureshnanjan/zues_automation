export interface LargeAndDeepDOMOps{
    pageHeading: any;
    verifyHeading(heading:String):void;
    verifySubHeadings(subHeading:String):void;
    verifyInstruction(instruction:String):void;
    verifyNoSiblings(): void;
    verifyNthSibling(siblingToSearch:Number):void;
    verifyTotalSiblings(): void;
    verifyNumberOfTableRows(): void;
    verifyNumberOfTableColumns(): void;
    verifySpecificElementInTable(row:Number, column:Number): void;
    verifyTotalRowsInNthColumn(column:Number): void;

}   

