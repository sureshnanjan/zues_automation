import { DynamicControlswithInterface } from '../PlaywrightImplementation/DynamicControls';
const { test, expect, base, chromium } = require('@playwright/test');

/**
 * Test suite for the Dynamic Controls page.
 */
test.describe('Test Dynamic Controls Page', () => {
  let dynamicControlsPage: DynamicControlswithInterface;

  /**
   * Hook executed before each test case.
   * It initializes the `dynamicControlsPage` instance and navigates to the Dynamic Controls page.
   */
  test.beforeEach(async ({ page }) => {
    dynamicControlsPage = new DynamicControlswithInterface(page);
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  });

  /**
   * Test case to verify if the heading on the page is correct.
   */
  test('Verify if heading is correct', async () => {
    const expectedHeading = 'Dynamic Controls';
    await dynamicControlsPage.verifyHeading(expectedHeading);
    //asseertion is required
  });

  /**
   * Test case to verify if the content description on the page is correct.
   */
  test('Verify if content description is correct', async () => {
    await dynamicControlsPage.verifyDescription();
    //asseertion is required
  });

  /**
   * Test case to toggle the checkbox state.
   * It verifies if the checkbox disappears and reappears on the page after clicking the Remove and Add buttons respectively.
   */
  test('Toggle checkbox state', async () => {
    // Initial state: Checkbox is present and enabled
    await dynamicControlsPage.selectCheckbox();
    await dynamicControlsPage.clickRemove();
    await dynamicControlsPage.verifyLoadingIndicator();
    // Verify if the checkbox disappears from the page
    await dynamicControlsPage.verifyConfirmationText("It's gone!");
    await dynamicControlsPage.clickAdd();
    await dynamicControlsPage.verifyLoadingIndicator();
    // Verify if the checkbox reappears on the page
    await dynamicControlsPage.verifyConfirmationText("It's back!");
  });

  /**
   * Test case to enable and disable the input field.
   * It verifies if the input field becomes disabled and enabled after clicking the Disable and Enable buttons respectively.
   */
  test('Enable and disable the input field', async () => {
    // Initial state: Text input field is present and enabled
    await dynamicControlsPage.verifyTextboxEnabled();
    await dynamicControlsPage.clickDisable();
    await dynamicControlsPage.verifyLoadingIndicator();
    await dynamicControlsPage.verifyConfirmationText("It's disabled!");
    // Verify if the input field becomes disabled
    await dynamicControlsPage.verifyTextboxDisabled();
    await dynamicControlsPage.clickEnable();
    await dynamicControlsPage.verifyLoadingIndicator();
    await dynamicControlsPage.verifyConfirmationText("It's enabled!");
    // Verify if the input field becomes enabled
    await dynamicControlsPage.verifyTextboxEnabled();
  });

  /**
   * Test case to enter text in the input field.
   * It verifies if the entered text is displayed correctly in the input field.
   */
  test('Enter text in the input field', async () => {
    const inputText = 'Test Input';
    const textBoxStatus = await dynamicControlsPage.verifyTextboxEnabled();
    if (textBoxStatus) {
      await dynamicControlsPage.enterText(inputText);
      // Verify if the entered text is displayed correctly in the input field
      const enteredText = await dynamicControlsPage.getInputFieldValue();
      expect(enteredText).toBe(inputText);
    } else {
      await dynamicControlsPage.clickEnable();
      await dynamicControlsPage.enterText(inputText);
      // Verify if the entered text is displayed correctly in the input field
      const enteredText = await dynamicControlsPage.getInputFieldValue();
      expect(enteredText).toEqual(inputText);
    }
  });
});
