import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';

  test('Verify the page Heading', async ({ page }) => {
    const Homepage = new HomePage();
    const Floatingmenu = new Floatingmenu();
    //Will visit the Herokuapp homepage
    await Homepage.visit();
    //Will visit the Addremoveelements page
    await floatingmenu.visit();
    await floatingmenu.checkHeading('Floating Menu');
  });