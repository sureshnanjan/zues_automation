import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import {HerokuDigestAuth} from '../PlaywrightImplementation/HerokuDigestAuth'
test('Heroku App Test', async ({ page }) => {
    // Arrange
    const hompepage = new HomePage();
    // Act
    hompepage.visit();
    const result = HomePage.getExampleCount();

    // Assert
    expect(result).toBeEqueal(44);

  });

  test.describe.only('To test digest auth module', () => {
    test.describe('Launch digest auth page and sucessful creds', () => {
        test.use({ httpCredentials: { username: 'admin', password: 'admin' } });
        test('Sucessfully sign in digest auth page', async ({ page }) => {
            const digestauth = new HerokuDigestAuth(page);
            const homepage = new HomePage();
            //Launch herokuapp homepage
            await homepage.visit();
            //Digest Auth page is launched, correct username and incorrect password is entered
            await digestauth.ClickDigestAuthLink()
            //Checks that successful heading message is displayed and check the CSS of the text
            await digestauth.CheckSuccessfulHeading('Digest Auth');
            //Checks that successful subheading message is displayed and check the CSS of the text
            await digestauth.CheckSuccessfulSubHeading('Congratulations! You must have the proper credentials.');
        });
    })

    test.describe('Launch digest auth page and unsucessful creds', () => {
      test.use({ httpCredentials: { username: 'admin', password: 'admin' } });
      test('Unsucessfully sign in digest auth page with incorrect username', async ({ page }) => {
        const digestauth = new HerokuDigestAuth(page); 
        const homepage = new HomePage();
        //Launch herokuapp homepage
        await homepage.visit();
        //Digest Auth page is launched, incorrect username and correct password is entered
        await digestauth.ClickDigestAuthLink()
        //Checks that unsuccessful message is displayed and check the CSS of the text
        await digestauth.CheckUnSucessfulHeading('Not authorized');
      });

        test.use({ httpCredentials: { username: 'admin', password: 'admin1' } });
        test('Unsucessfully sign in digest auth page with incorrect password', async ({ page }) => {
          const digestauth = new HerokuDigestAuthAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Digest Auth page is launched, correct username and incorrect password is entered
          await digestauth.ClickDigestAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await digestauth.CheckUnSucessfulHeading('Not authorized');
        });

        test.use({ httpCredentials: { username: 'admin1', password: 'admin1' } });
        test('Unsucessfully sign in digest auth page with incorrect username and password', async ({ page }) => {
          const digestauth = new HerokuDigestAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Digest Auth page is launched, incorrect username and incorrect password is entered
          await digestauth.ClickDigestAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await digestauth.CheckUnSucessfulHeading('Not authorized')
        });

        test.use({ httpCredentials: { username: '', password: '' } });
        test('Unsucessfully sign in digest auth page with empty username and password', async ({ page }) => {
          const digestauth = new HerokuDigestAuth(page); 
          const homepage = new HomePage();
          //Launch herokuapp homepage
          await homepage.visit();
          //Digest Auth page is launched, empty username and password
          await digestauth.ClickDigestAuthLink()
          //Checks that unsuccessful message is displayed and check the CSS of the text
          await digestauth.CheckUnSucessfulHeading('Not authorized')
        });
    });
});
