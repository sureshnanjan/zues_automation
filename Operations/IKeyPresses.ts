interface IKeyPresses{
    headerText:string;
    paragraphText: string;
    verifyheader();
    verifyParagraph();
    performKeyPress(key:string);
    verifyKeyPressed();
    verifyTextField(key:string);
}