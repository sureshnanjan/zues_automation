/**
 * This is the interface development for Entry Add page
 */
export interface IEnteryAdd{
    /**
     * This method is used to navigate to EntryAdd link from HerokuHome page
     */
    visitEntryAdd(): Promise<void>;
    /**
     * This method is used to verify that the pop-up opens on accessing the link
     */
    verifypopup(): Promise<void>;
    /**
     * This method is used to verify the heading of EntryAdd page
     * @param expectedHeading - This is the expected heading to verified
     */
    verifyheading(expectedHeading:string): void; 
    /**
     * This method is used to verify the Conetnt on EntryAdd page
     * @param expectedContext - This is the expected content to be verified
     */
    verifycontent(expectedContext:string): void; 
    /**
     * This methos is used to verify the heading of the pop-up
     * @param expectedPopupHeading This is the expected heading of the pop-up
     */
    verifyPopupHeading(expectedPopupHeading:string): void;
    /**
     * This method is used to verify the Content inside the pop-up
     * @param expectedContent - This is the expected content inside the pop-up to be verified
     */
    verifyPopupContent(expectedContent:string):void;
    /**
     * This method is used to verify that the pop-up closes by using close button
     */
    verifyclosebutton(): Promise<void>;
    /**
     * This method is used to verify that the pop-up model should be displayed whenever 'CliCk Here' link is clicked
     */    
    verifyclickhere(): Promise<void>; 

}