/**
 * This is the interface development for Nested Frames page
 */
export interface INestedFramesOps {
    /**
     * This method is used to navigate to the Nested Frames page
     */
    gotoNestedFramesPage(): Promise<void>;
    /**
     * This method is used to verify the Left Frame
     */
    checkLeftFrame(): void;
    /**
     * This method is used to verify the Middle Frame
     */
    checkMiddleFrame(): void;
    /**
     * This method is used to verify the Right Frame
     */
    checkRightFrame(): void;
    /**
     * This method is used to verify the Bottom Frame
     */
    checkBottomFrame(): void;
}