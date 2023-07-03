import { expect, Locator, Page, test } from '@playwright/test';




    //Create clas to export

    export class DisappearingElement implements InterfaceforDisappearingElements{

    /*Declare variables*/

    readonly page: Page;

   

    constructor(page: Page) {

   

    this.page = page;

    }

   

   

    async goto() {




        /*Load the drag and drop page*/




    }

   

    async ValidatePageElements() {




        //Load the page and check for header, describing text and 5 Elements




       

    }

    async ReloadandValidatePageElements() {





        //Reload the page and check for header, describing text and 4 Elements






    }

}