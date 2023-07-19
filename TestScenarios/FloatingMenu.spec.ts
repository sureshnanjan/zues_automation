import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
/**
 * This is test to verify heading on floating Menu page
 */
  test('Verify the page Heading', async ({ page }) => {
    const Homepage = new HomePage();
    const Floatingmenu = new Floatingmenu();
    await Homepage.visit();
    await Homepage.gotourl('Floating Menu');
    await Floatingmenu.pageHeading(pageHeading);
  });

  /**
   * This is test to verify if the floating menu visible
   */
  test('Verify if the floating menu visible', async ({ page }) => {
    const Homepage = new HomePage();
    const Floatingmenu = new Floatingmenu();
    await Homepage.visit();
    await Homepage.gotourl('Floating Menu');
    await Floatingmenu.isFloatingMenuVisible();
  });

  /**
   * This is test to verify if the floating menu visible on scroll
   */
  test('Verify if the floating menu visible on scroll', async ({ page }) => {
    const Homepage = new HomePage();
    const Floatingmenu = new Floatingmenu();
    await Homepage.visit();
    await Homepage.gotourl('Floating Menu');
    await Floatingmenu.scrollPage(scrollcount, direction);
    await Floatingmenu.isFloatingMenuVisible();
  });

  /**
   * This is test to verify if the menu option links are proper
   */

  test('Verify if the menu option links are proper', async ({ page }) => {
    const Homepage = new HomePage();
    const Floatingmenu = new Floatingmenu();
    await Homepage.visit();
    await Homepage.gotourl('Floating Menu');
    await Floatingmenu.scrollPage(scrollcount, direction);
    await Floatingmenu.checkMenuOptionLink(buttonSelector);
  });