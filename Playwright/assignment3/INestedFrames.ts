import { expect, Locator, Page } from '@playwright/test';
export interface INestedFrames {
    /**
     * This method is used to navigate to the Nested Frames page
     */
    gotoNestedFramesPage(page: Page): void;

    /**
     * This method is used to verify the Top Frame
     */
    checkTopFrame(Page): void;
    /**
     * This method is used to verify the Left Frame
     */
    checkLeftFrame(topFrame): void;
    /**
     * This method is used to verify the Middle Frame
     */
    checkMiddleFrame(topFrame): void;
    /**
     * This method is used to verify the Right Frame
     */
    checkRightFrame(topFrame): void;
    /**
     * This method is used to verify the Bottom Frame
     */
    checkBottomFrame(page: Page): void;
}