interface ITypos{
    title: string;
    expectedText: string
    expectedcount: number;
    CheckTitle(title);
    VerifyTextPresent();
    CheckText();
    CheckTextAfterRefresh();
}