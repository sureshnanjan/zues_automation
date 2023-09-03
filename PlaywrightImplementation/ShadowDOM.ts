import { IShadowDOM } from "../Operations/IShadowDOM";
import { expect, Locator, Page } from "@playwright/test";

export class ShadowDOM_Page implements IShadowDOM{
readonly page: Page;
readonly pageHeading: Locator;
readonly text1;
readonly DOM2text1;
readonly DOM2text2;


constructor(page:Page){
    this.page=page;
    this.pageHeading = page.locator('h1',{hasText: 'Simple template'});
    this.text1 = page.locator('span', {hasText: "Let's have some different text!"});
    this.DOM2text1 = page.getByRole('listitem').filter({ hasText: 'Let\'s have some different text!' });
    this.DOM2text2 = page.getByText('In a list!');
}
/**
 * visit_Page() method visits the URL of the page
 */
   async visit_Page() {
    await this.page.goto('https://the-internet.herokuapp.com/shadowdom')
   }

   /**
    * checkHeading() checks the heading text for the page
    * @param pageTitle contains the Title for the page which is compared with the title obtained from locator
    */
    async checkHeading(pageTitle) {
        await expect(this.pageHeading).toHaveText(pageTitle);
    }

    /**
     * Verify_ShadowDOM1_element() verifies the text present in SHADOWDOM1
     * @param ShadowDOM_1_Text contains the text in SHadow DOM 1 which is compared with the text obtained from locator
     */
    async Verify_ShadowDOM1_text(ShadowDOM_1_Text) {
        console.log(ShadowDOM_1_Text);
        console.log(this.text1);
        await expect(this.text1).toHaveText(ShadowDOM_1_Text);
    }
    
    /**
     * Verify_ShadowDOM2_element1() verifies the text present in SHADOWDOM2
     * @param ShadowDOM_2_ListElement1 contains the text in SHadow DOM 2 which is compared with the text obtained from locator
     */
    async Verify_ShadowDOM2_text1(ShadowDOM_2_ListElement1) {
        await expect(this.DOM2text1).toHaveText(ShadowDOM_2_ListElement1);
    }

    /**
     * Verify_ShadowDOM2_element2() verifies the text present in SHADOWDOM2
     * @param ShadowDOM_2_ListElement2 contains the text in SHadow DOM 2 which is compared with the text obtained from locator
     */
    async Verify_ShadowDOM2_text2(ShadowDOM_2_ListElement2) {
        await expect(this.DOM2text2).toHaveText(ShadowDOM_2_ListElement2);
 } 
}