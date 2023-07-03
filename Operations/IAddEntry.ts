export interface IEntryAdd{
    verifypopup(expectedHeadingText: string , expectedBodyText : string) : void; //Verify that the pop-up opens on accessing the link
    verifyclosebutton() : Promise<void> //Verify that the pop-up closes by using close button
    verifyheading(expectedHeading : string) : void; //Heading of the page
    verifycontent(expectedText1: string, expectedText2 : string, expectedText3) : void; // Content of the page
    verifyclickhere() : Promise<void>; //pop-up modal should be displayed again

}