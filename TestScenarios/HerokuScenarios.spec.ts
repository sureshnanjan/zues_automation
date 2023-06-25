import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import {HerokuBasicAuth} from '../PlaywrightImplementation/HerokuBasicAuth'
test('Heroku App Test', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage();
    // Act
    hompepage.visit();
    const result = HomePage.getExampleCount();

    // Assert
    expect(result).toBeEqueal(44);

  });

  test.describe.only('To test basic auth module', () => {
    test.describe('Launch basic auth page and sucessful creds', () => {
        test.use({ httpCredentials: { username: 'admin', password: 'admin' } });
        test('Sucessfully sign in basic auth page', async ({ page }) => {
            const basicauth = new HerokuBasicAuth(page);
            const homepage = new HomePage();
            //Launch herokuapp homepage
            await homepage.visit();
            //Basic Auth page is launched, correct username and incorrect password is entered
            await basicauth.ClickBasicAuthLink()
            //Checks that successful heading message is displayed and check the CSS of the text
            await basicauth.CheckSuccessfulHeading('Basic Auth');
            //Checks that successful subheading message is displayed and check the CSS of the text
            await basicauth.CheckSuccessfulSubHeading('Congratulations! You must have the proper credentials.');
        });
    })

    test.describe('Launch basic auth page and unsucessful creds', () => {
      test.use({ httpCredentials: { username: 'admin1', password: 'admin' } });
      test('Unsucessfully sign in basic auth page with incorrect username', async ({ page }) => {
        const basicauth = new HerokuBasicAuth(page); 
        const homepage = new HomePage();
        //Launch herokuapp homepage
        await homepage.visit();
        //Basic Auth page is launched, incorrect username and correct password is entered
        await basicauth.ClickBasicAuthLink()
        //Checks that unsuccessful message is displayed and check the CSS of the text
        await basicauth.CheckUnSucessfulHeading('Not authorized');
      });

        test.use({ httpCredentials: { username: 'admin', password: 'admin1' } });
        test('Unsucessfully sign in basic auth page with incorrect password', async ({ page }) => {
          const basicauth = new HerokuBasicAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Basic Auth page is launched, correct username and incorrect password is entered
          await basicauth.ClickBasicAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await basicauth.CheckUnSucessfulHeading('Not authorized');
        });

        test.use({ httpCredentials: { username: 'admin1', password: 'admin1' } });
        test('Unsucessfully sign in basic auth page with incorrect username and password', async ({ page }) => {
          const basicauth = new HerokuBasicAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Basic Auth page is launched, incorrect username and incorrect password is entered
          await basicauth.ClickBasicAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await basicauth.CheckUnSucessfulHeading('Not authorized')
        });

        test.use({ httpCredentials: { username: '', password: '' } });
        test('Unsucessfully sign in basic auth page with empty username and password', async ({ page }) => {
          const basicauth = new HerokuBasicAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Basic Auth page is launched, empty username and password
          await basicauth.ClickBasicAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await basicauth.CheckUnSucessfulHeading('Not authorized')
        });
    });
});
