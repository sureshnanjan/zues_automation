import { test, expect } from '@playwright/test';
import { title } from 'process';

test.skip('Heading of the Herokuapp page', async ({ page }) => {
  //Arrange
 // const expectedHeading = "Welcome to the-internet";
  await page.goto('https://the-internet.herokuapp.com/');
  //Act
  //const result = await page.getByRole('heading',{name:'Welcome to the-internet'}).innerText();
  //const result1 = await page.locator('.heading').innerText();
  //Assert
  //await expect(result1).toBe(expectedHeading);

  await expect(page.locator('.heading')).toHaveText("Welcome to the-internet");
});
test.skip('Adding 1 element', async ({ page }) => {
  //Arrange
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  
  //Act
  await page.getByRole('button',{name:'Add Element'}).click();
  
  //Assert
  await expect(page.getByRole('button',{name:'Delete'})).toHaveCount(1);


});
test.skip('Adding 1 and Removing 1 element', async ({ page }) => {
  //Arrange
 // const expectedHeading = "Welcome to the-internet";
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  await page.getByRole('button',{name:'Add Element'}).click();

  //Act
  await page.getByRole('button',{name:'Delete'}).click();

  //Assert

  await expect(page.getByRole('button',{name:'Delete'})).toHaveCount(0);
});
test.skip('Adding more than 1 elements', async ({ page }) => {
  //Arrange
  const count = 5;
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  
  //Act
  for (let i=0;i < count;i++){
    await page.getByRole('button',{name:'Add Element'}).click();
  }
  
  //Assert
  await expect(page.getByRole('button',{name:'Delete'})).toHaveCount(count);

});
test.skip('Adding 5 and Removing 5 element', async ({ page }) => {
  //Arrange
  const count = 5;
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  
  for (let i=0;i < count;i++){
    await page.getByRole('button',{name:'Add Element'}).click();
  }

  //Act
  for (let i=count-1;i >=0 ;i--){
  await page.getByRole('button',{name:'Delete'}).nth(i).click();
  }

  //Assert
  await expect(page.getByRole('button',{name:'Delete'})).toHaveCount(0);
});

test('Biddle Stage Assesment Login', async ({ page }) => {
  //Arrange
  await page.goto('https://staging-login.testgenius.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DRefJsTest%26redirect_uri%3Dhttps%253A%252F%252Fstaging-tgo-admin.testgenius.com%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520roles%2520api1%2520refApi%26state%3Da4bd7064cd1d45739cf47029a5f1e308%26nonce%3D73cf4571267e4e6f88cffde3195e815b');
  
  //Act
  await page.getByPlaceholder('Enter Email Address').click();
  await page.getByPlaceholder('Enter Email Address').fill('ashish.asgola@zeuslearning.com');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('33e37h4*M3M8');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  //Assert
   await expect(page.locator("text: Online Pre-Employment Testing Suite")).toBeVisible
  });

  test('Client selection for Biddle Stage assesment', async ({ page }) => {
    //Arrange
    await page.goto('https://staging-login.testgenius.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DRefJsTest%26redirect_uri%3Dhttps%253A%252F%252Fstaging-tgo-admin.testgenius.com%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520roles%2520api1%2520refApi%26state%3Da4bd7064cd1d45739cf47029a5f1e308%26nonce%3D73cf4571267e4e6f88cffde3195e815b');
    await page.getByPlaceholder('Enter Email Address').click();
    await page.getByPlaceholder('Enter Email Address').fill('ashish.asgola@zeuslearning.com');
    await page.getByPlaceholder('Enter Password').click();
    await page.getByPlaceholder('Enter Password').fill('33e37h4*M3M8');
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    //Act
    await page.getByPlaceholder('Search Client').click();
    await page.getByPlaceholder('Search Client').fill('zeus');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('row', { name: 'Zeus Enter Edit' }).getByRole('button', { name: 'Enter' }).click();

    //Assert
    await expect(page.locator("text: Welcome")).toBeVisible
    });

    // test('Client selection for Biddle Stage assesment', async ({ page }) => {
    //   //Arrange
    //   await page.goto('https://staging-login.testgenius.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DRefJsTest%26redirect_uri%3Dhttps%253A%252F%252Fstaging-tgo-admin.testgenius.com%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520roles%2520api1%2520refApi%26state%3Da4bd7064cd1d45739cf47029a5f1e308%26nonce%3D73cf4571267e4e6f88cffde3195e815b');
    //   await page.getByPlaceholder('Enter Email Address').click();
    //   await page.getByPlaceholder('Enter Email Address').fill('ashish.asgola@zeuslearning.com');
    //   await page.getByPlaceholder('Enter Password').click();
    //   await page.getByPlaceholder('Enter Password').fill('33e37h4*M3M8');
    //   await page.getByRole('button', { name: 'Sign In' }).click();
      
    //   //Act
    //   await page.getByPlaceholder('Search Client').click();
    //   await page.getByPlaceholder('Search Client').fill('zeus');
    //   await page.getByRole('button', { name: 'Search', exact: true }).click();
    //   await page.getByRole('row', { name: 'Zeus Enter Edit' }).getByRole('button', { name: 'Enter' }).click();
  
    //   //Assert
    //    await expect(page.locator("text: Welcome")).toBeVisible
    //   });