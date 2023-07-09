import { Locator } from "playwright";

export interface ITypos {
    title: string;
    expectedText: string

    // To verify the title of the page
    CheckTitle(title: string): Promise<void>;

    // To verify if the description text is present or not
    VerifyTextPresent(): Promise<void>;

    // To verify if the description text is displayed as expected or not
    CheckText() : Promise<void>;

    // To refresh the page
    pageReload():Promise<void>;

}