import {test,expect} from "@playwright/test";
import {HomePage} from "../herokuapppages/HomePage";

test("Launch HerokuApp and verify the page elements", async ({page})=>{
    const homepage = new HomePage(page);
    await homepage.launchHerokuApp();
    await expect(page.locator('h1')).toHaveText(homepage.headerText1);
    await expect(page.locator('h2')).toHaveText(homepage.headerText2);
    await expect(page.locator(homepage.linkLocators.abTesting)).toHaveText(homepage.linkText.abTesting);
    await expect(page.locator(homepage.linkLocators.elementsAddRemove)).toHaveText(homepage.linkText.elementsAddRemove);
});