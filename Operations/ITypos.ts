interface ITypos{
    title: string;
    expectedText: string
    expectedcount: number;
    flag: boolean

    CheckTitle(title);
    /**
     * To check the title of the page
     */
    
    VerifyTextPresent();
    /**
     * To check if the description text is present
     */
    
    CheckTypos();
    /**
     * To check if the text content is correct
     */
}