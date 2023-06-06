import { test, expect } from '@playwright/test';
import{HerokuHumePage} from '../PageObjects-TheInternet/HomePage';
import {AddRemoveElements} from '../PageObjects-TheInternet/AddRemoveElements';
import {HomePagewithInterface} from '../InterfaceImplementation-theInternet/HomePageWithInterface'

//Page Objects Activity

const expectedHeading = 'Welcome to the-internet'
test('Category print method', async ({page})=>{
  //Arrange
  await page.goto('https://the-internet.herokuapp.com')
  //#content > h1
  const result=  await page.getByRole('heading', { name: 'Welcome to the-internet' }).innerText();
  //Act 
  //Assert
  expect(result).toBe(expectedHeading);
});


test('Test the internet Heroku App', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await expect(page).toHaveTitle(/The Internet/);
});


//Interface Activity

test('Adding Elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: "Add/Remove Elements" }).click();
  //Get the add button
  await page.getByRole('button', { name: "Add Element" }).click();
  //assertion
  await expect(page.getByRole('button', { name: "Delete" })).toHaveCount(1);
});

test('Visit url test with Interface implementation',async ({page}) => {
  const herokuHome = new HomePagewithInterface(page);
  await herokuHome.visit();

})

