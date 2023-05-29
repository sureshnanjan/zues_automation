import { test, expect } from '@playwright/test';
import { AddRemoveElements } from '../PageObjects/AddRemoveElements';
import { HerokuHomePage } from '../PageObjects/HerokuHomePage';


test('To check Add/Remove Element functionality', async ({page}) =>{
  // const AddRemove = new AddRemoveElements(page);
    await page.goto('https://the-internet.herokuapp.com/');
    // HerokuHomepage launched
    await expect(page.locator('.heading')).toHaveText('Add/Remove Elements');
    await page.getByRole('link',{name:'Add/Remove Elements'}).click();
    //  Add/Remove Elements page launched
    await page.getByRole('button',{name:"Add Element"}).click();    // Get the Add Button
    // Button added
    await expect(page.getByRole('button',{name:"Delete"})).toHaveCount(1);
    // Assertion
    await page.getByRole('button',{name:"Delete"}).click();    // Delete button
    await expect(page.getByRole('button',{name:"Delete"})).toHaveCount(0);
    // Button removed
    
    // AddRemove
    // const hpage = new HerokuHomePage(page);
    // const addRemPage = new AddRemoveElements(page);
    // hpage.visit();
    // hpage.gotoExample('Add/Remove');
    })