import { test, expect } from "@playwright/test";
import { ExitIntent } from "../PlaywrightImplementation/ExitIntent";

/**
 * Navigate to exit intent webpage
 */
test('Navigate to Exit Intent webpage', async ({page}) => {
    const navigate = new ExitIntent(page);
    navigate.visit();
})

/**
 * Verify the header and content displayed on Exit Intent webpage
 */
test('Verify header and content text displayed on exit intent page',async ({page}) => {
    const navigate = new ExitIntent(page);
    navigate.verifyHeader();
    navigate.verifyContentText();
})

/**
 * triggerExitIntent() method triggers the modal popup to be displayed by moving the mouse out of the viewport
 */
test('Initiate overlay',async ({page}) => {
    const navigate = new ExitIntent(page);
    navigate.triggerExitIntent();
})

test('Modal should not be displayed when navigating inside the viewport',async ({page}) => {
    const navigate = new ExitIntent(page);
})

/**
 * checkExitIntentOverlay() verifies the header, content & footer displayed on modal popup when available
 */
test('Verify modal content displayed after popping up',async ({page}) => {
    const navigate = new ExitIntent(page);
    navigate.checkExitIntentOverlay();
})