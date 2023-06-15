import { test, expect } from '@playwright/test';
import { DDM } from '../../playwrightwork/dropdown';


test('This is a test for DDM page', async ({ page }) => {

const ddmuse = new DDM(page); /* Create an instance of the Checkboxes page object*/
await ddmuse.goto(); /*Navigate to the checkboxes page*/
await ddmuse.boxes(); /*Perform DDM actions*/

})

