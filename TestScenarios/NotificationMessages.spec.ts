import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { NotificationMessagesPage } from '../PlaywrightImplementation/NotificationMessagesPage';

test.skip('Verify navigation to Messages Functionality link', async ({ page }) => {
    const Homepage = new HomePage(page);
    const gotolink = new NotificationMessagesPage(page);
    //test.setTimeout(120000);
    await Homepage.visit();
    await gotolink.gotoNotificationMessagesPage();
  });
  

test('Verify Heading of Messages Functionality Page', async ({ page }) => {
  const Homepage = new HomePage(page);
  const gotolink = new NotificationMessagesPage(page);
  const heading = new NotificationMessagesPage(page);
  //test.setTimeout(200000);
  await Homepage.visit();
  await gotolink.gotoNotificationMessagesPage();
  await heading.checkHeading('Notification Message');
});

test('Verify Content of Notification Messages Functionality Page', async ({ page }) => {
  const Homepage = new HomePage(page);
  const gotolink = new NotificationMessagesPage(page);
  const Content = new NotificationMessagesPage(page);
  //test.setTimeout(200000);
  await Homepage.visit();
  await gotolink.gotoNotificationMessagesPage();
  await Content.checkTextContent("'The message displayed above the heading is a notification message. It is often used to convey information about an action previously taken by the user.\n' + '\n' + Some rudimentary examples include 'Action successful', 'Action unsuccessful, please try again', etc.\n" + '\n' + 'Click here to load a new message.');});

test('Verify loading of new successful / unsuccessful message', async ({ page }) => {
  const Homepage = new HomePage(page);
  const gotolink = new NotificationMessagesPage(page);
  const loadNewMessage = new NotificationMessagesPage(page);
  //test.setTimeout(200000);
  await Homepage.visit();
  await gotolink.gotoNotificationMessagesPage();
  await loadNewMessage.loadNewMessage();
});

test('Verify Notification text message', async ({ page }) => {
  const Homepage = new HomePage(page);
  const gotolink = new NotificationMessagesPage(page);
  const textmessage = new NotificationMessagesPage(page);
  //test.setTimeout(200000);
  await Homepage.visit();
  await gotolink.gotoNotificationMessagesPage();
  await textmessage.checkNotificationMessageText('Action unsuccesful, please try again x')
});