import { test, expect, Locator } from '@playwright/test';
import assert from 'assert';
import { Page } from 'playwright';

export class removeAddCheckbox{
    page :Page
    checkbox: Locator
    heading :Locator
    remove_button: Locator
    add_button:Locator

    constructor(page){
        this.page = page;
        this.checkbox = page.getByText('A checkbox');
        this.heading = page.getByRole('heading', { name: 'Remove/add' });
        this.add_button = page.getByRole('button', { name: 'Add' });
        this.remove_button = page.getByRole('button', { name: 'Remove' })
    }
    async checkHeading(){
        await this.page.getByRole('link', { name: 'Dynamic Controls' }).click();
        const actualHeadingText = await this.heading.innerText();
        assert.equal(actualHeadingText, 'Remove/add');
    }
    
    async removeCheckbox(){
        await this.page.getByRole('button', { name: 'Remove' }).click();
        if(await this.page.getByText('It\'s gone!').isVisible){
            console.log("test passed");
        }
        else{
            console.log("test failed");
        }
    }}

/*

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dynamic Controls' }).click();
  await page.getByRole('heading', { name: 'Remove/add' }).click();
  await page.getByText('A checkbox').click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByText('It\'s gone!').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByText('It\'s back!').click();
  await page.getByText('A checkbox').click();
  await page.locator('#checkbox').check();
  await page.locator('#checkbox').uncheck();
});*/