import { expect, Locator, Page, test } from '@playwright/test';

import { IStatusCodes } from './IStatusCodes';
    //Create clas to export

    export class StatusCodes implements IStatusCodes {

    /*Declare variables*/

    readonly page: Page;
    constructor(page: Page) {
    this.page = page;

    }

    async goto() {

        /*Load the StatusCodes page*/

    }

    async LocateElements() {
        //Check for header, subheader and 4 buttons .

    }

    async ClickandCheck() {

        //Click on each buttons and check for corresponding heading and subheader

    }

}