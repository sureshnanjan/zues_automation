import { test, expect } from '@playwright/test';
import { RedirectLink } from '../PageObject/RedirectLink';

test('Check heading of Redirect Link Page', async ({page}) => {
    const redirectLink = new RedirectLink(page);
    await redirectLink.goto();
    await redirectLink.verifyheader();
  });

  test('Check content of Redirect Link Page', async ({page}) => {
    const redirectLink = new RedirectLink(page);
    await redirectLink.goto();
    await redirectLink.verifycontenttext();
  });

  test('Click on "Click here" link', async ({page}) => {
    const redirectLink = new RedirectLink(page);
    await redirectLink.goto();
    await redirectLink.click_here();
    await page.waitForTimeout(5000);
  });

  test('Verify redirection of "Click here" link', async ({page}) => {
    const redirectLink = new RedirectLink(page);
    await redirectLink.redirectUrlLink();
    await page.waitForTimeout(5000);
    await redirectLink.verifyredirectedlink();
  });

  test('Verify Header  of redirected link', async ({page}) => {
    const redirectLink = new RedirectLink(page);
    await redirectLink.redirectUrlLink();
    await page.waitForTimeout(5000);
    await redirectLink.verifyredirectedpageheader();
  });