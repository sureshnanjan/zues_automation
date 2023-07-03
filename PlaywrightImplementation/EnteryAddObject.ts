import { IEntryAdd } from "../Operations/IAddEntry";
import { Locator, Page  } from '@playwright/test';
import assert from 'assert';

/**
 * Represents a page object for the entry add functionality.
 */

export class EntryAddObject implements IEntryAdd{

  readonly page: Page;
  readonly headingText : Locator;
  readonly contentText1 : Locator;
  readonly contentText2 : Locator;
  readonly contentText3 : Locator;
  readonly clickHere : Locator;
  readonly popupHeading : Locator;
  readonly popupBody : Locator;
  readonly closeButton : Locator;


  /**
   * Constructs a new instance of the EntryAddObject.
   * @param page - The Playwright Page object associated with the page.
   */
  constructor(page: Page) {
    this.page = page;
    this.headingText = page.getByRole('heading', { name: 'Entry Ad' })
    this.contentText1 =  page.getByText('Displays an ad on page load.')
    this.contentText2 = page.getByText('If closed, it will not appear on subsequent page loads.')
    this.contentText3 = page.getByText('To re-enable it, click here.')
    this.clickHere =  page.getByRole('link', { name: 'click here' })
    this.popupHeading = page.getByRole('heading', { name: 'This is a modal window' })
    this.popupBody = page.getByText('It\'s commonly used to encourage a user to take an action (e.g., give their e-mai')
    this.closeButton = page.getByText('Close', { exact: true })
  }

   /**
   * Verifies the heading of the entry add page.
   * @param expectedHeading - The expected heading text.
   */

    async verifyheading(expectedHeading: string): Promise<void> {
        const actualHeadingText = await this.headingText.innerText();
        console.log(actualHeadingText);
        assert.equal(actualHeadingText, expectedHeading);
    }

    /**
   * Verifies the content of the entry add page.
   * @param expectedText1 - The expected text content 1.
   * @param expectedText2 - The expected text content 2.
   * @param expectedText3 - The expected text content 3.
   */


    async verifycontent(expectedText1: string, expectedText2 : string, expectedText3): Promise<void> {
        const actualContentText1 = await this.contentText1.innerText();
        console.log(actualContentText1);
        assert.equal(actualContentText1, expectedText1);

        const actualContentText2 = await this.contentText2.innerText();
        console.log(actualContentText2);
        assert.equal(actualContentText2, expectedText2);

        const actualContentText3 = await this.contentText3.innerText();
        console.log(actualContentText3);
        assert.equal(actualContentText3, expectedText3);

    }

    /**
   * Verifies that the click here link triggers the pop-up modal.
   */

    async verifyclickhere() : Promise<void> {

        await this.clickHere.click();
    }


  /**
   * Verifies the heading and body of the pop-up modal.
   * @param expectedHeadingText - The expected heading text of the pop-up.
   * @param expectedBodyText - The expected body text of the pop-up.
   */

    async verifypopup(expectedHeadingText: string , expectedBodyText : string): Promise<void> {

        const actualHeadingtext = await this.popupHeading.innerText();
        console.log(actualHeadingtext);
        assert.equal(actualHeadingtext, expectedHeadingText);

        const actualBodytext = await this.popupBody.innerText();
        console.log(actualBodytext);
        assert.equal(actualBodytext, expectedBodyText);

    }

    /**
   * Verifies that the pop-up modal is closed when the close button is clicked.
   */
  
    async verifyclosebutton(): Promise<void> {        
        await this.closeButton.click();
    }
    
}

