import { Page } from "@playwright/test";
import { environment } from "../utilities/environment"

export class HomePage{
    page: Page;
    headerText1 = 'Welcome to the-internet';
    headerText2 = 'Available Examples';
    linkLocators = {
        abTesting : `a[href='/abtest']`,
        elementsAddRemove: "a[href='/add_remove_elements/']",
        dragAndDrop: "a[href='/drag_and_drop']"
    }
    linkText = {
        abTesting : "A/B Testing",
        elementsAddRemove: "Add/Remove Elements"
    }
    constructor(page: Page){
        this.page = page;
    }

    async launchHerokuApp(){
        await this.page.goto(environment.url);
    }
}