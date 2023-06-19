import { test, expect } from '@playwright/test';
import { ABTesting } from './PageObjects/ABTesting';
import { AddRemoveElements } from './PageObjects/Add_RemoveElements';
import { jspage } from './PageObjects/JavascriptAlertspage';

test('A/B Testing page', async ({ page }) => {
    const ABTestingpage = new ABTesting(page);
    await ABTestingpage.visit();
    await ABTestingpage.checkHeading('A/B Test Variation 1');
});

test.only('AddRemoveElements', async ({ page }) => {
    const AddRemoveElementspage = new AddRemoveElements(page);
    await AddRemoveElementspage.visit();
    await AddRemoveElementspage.checkHeading('Add/Remove Elements');
    await AddRemoveElementspage.checkButtonVisibility();
    await AddRemoveElementspage.checkAddButtonClick();
    await AddRemoveElementspage.checkAddButtonFunction(5);
    await AddRemoveElementspage.checkDeleteButtonFunction(3);
});

test.only('Validating Heading', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.verify_heading();
});

test.only('Verifying jsalert', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invoke_jsalert();
    javascriptpage.verify_alerttext();
    javascriptpage.verify_resulttext();

});

test.only('Verifying JSPrompt', async ({ page }) => {
    const javascriptpage = new jspage();
    javascriptpage.invoke_jsalert();
    javascriptpage.verify_alerttext();
    javascriptpage.verify_resulttext();

});