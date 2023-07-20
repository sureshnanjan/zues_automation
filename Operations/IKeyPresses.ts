import { VideoMode } from "@playwright/test";

interface IKeyPresses{

    headerText:String;
    paragraphText: String;
    verifyheader():void;
    verifyParagraph():void;
    perfromKeyPress(key:string):void;
    verifyKeyPressed():void;
    verifyTextField(key:string):void;

}