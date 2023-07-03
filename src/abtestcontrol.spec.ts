import {test,expect} from "@playwright/test";
import {HomePage} from "../herokuapppages/HomePage";
import {ABTestControl} from "../herokuapppages/ABTestControl";

test("Launch HerokuApp and navigate to AB Test link", async({page})=>{
    const homepage = new HomePage(page);
    await homepage.launchHerokuApp();
    await page.click(homepage.linkLocators.abTesting);
});

test("Verify the AB Test page heading and paragraph", async ({page})=>{
    const ab = new ABTestControl(page);
    await expect(page.locator('h3')).toHaveText(ab.headerText);
    await expect(page.locator(ab.paragraphTextLocator)).toHaveText(ab.paragraphText);
});