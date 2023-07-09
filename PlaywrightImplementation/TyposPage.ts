import { ITypos } from "../Operations/Itypos";
import { Locator, Page, expect } from '@playwright/test';
import assert from 'assert';


export class Typos implements ITypos{
    title: string;
    expectedText: string;
    page: Page;
    Text: Locator;
    heading: any;
    content: Locator

    constructor(page: any){
        this.page = page;
        this.heading =  page.getByRole('heading') 
        this.content= page.locator('#content')   
        this.Text= page.getByText('Sometimes')   
    }
    async CheckTitle(title: string): Promise<void> {
        const actualHeadingText = await this.heading.innerText();
        console.log(actualHeadingText);
        assert.equal(actualHeadingText, title);
        
    }
    async VerifyTextPresent(): Promise <void>{
        assert(this.content.isVisible);
        const text= this.page.getByText('Typos This example demonstrates a typo being introduced. It does it randomly on')
        assert(text.isVisible)
    
    }
    async CheckText(): Promise<void> {
        let wrongText = "Sometimes you'll see a typo, other times you won,t."
        let rightText= "Sometimes you'll see a typo, other times you won't."
        expect(Text)
           /*if(test = expectedText){
            console.log("the typo is not present") 
        }
        else{
            console.log("the typo is present")
        }*/
    }

    async pageReload(): Promise<void> {
        this.page.reload();
    }

}