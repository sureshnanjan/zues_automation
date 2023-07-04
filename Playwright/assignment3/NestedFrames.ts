import { INestedFrames } from "./INestedFrames";
import { expect, Locator, Page } from '@playwright/test';
/**
 * This is the interface development for Nested Frames page
 */
export class NestedFrames implements INestedFrames{
    readonly page: Page;
    readonly topFrame: Locator;
    readonly middleFrame: Locator;
    readonly bottomFrame: Locator;
    readonly bodyHandle : Locator;
    
    /**
     * Constructs a new instance of the Checkboxes page object.
     * @param page The Playwright Page object associated with the page.
     */
    constructor(page: Page) {
        this.page = page;
    }
    
    
    async gotoNestedFramesPage(){
        await this.page.goto("https://the-internet.herokuapp.com/nested_frames");
    }

    async checkTopFrame(){
        const topFrame = this.page.frame({ name: "frame-top" });
        if (topFrame) {
            console.log('bottom Frame is present');
            this.checkFrameText(topFrame);
        }
    }

    async checkLeftFrame(topFrame){
        const leftFrame = await topFrame.frame({ name: "frame-left" });
        if (leftFrame) {
            console.log('left Frame is present in Top frame');
            this.checkFrameText(leftFrame);
        }
    }

    async checkMiddleFrame(topFrame){
        const middleFrame = await topFrame.frame({ name: "frame-middle" });
        if (middleFrame) {
            console.log('middle Frame is present in Top frame');
            this.checkFrameText(middleFrame);
        }
    }

    async checkRightFrame(topFrame){
        const rightFrame = await topFrame.frame({ name: "frame-right" });
        if (rightFrame) {
            console.log('right Frame is present in Top frame');
            this.checkFrameText(rightFrame);
        }
    }
    
    async checkBottomFrame(){
        const bottomFrame = await this.page.frame({ name: "frame-bottom" });
        if (bottomFrame) {
            console.log('bottom Frame is present');
            this.checkFrameText(bottomFrame);
        }
    }

    async checkFrameText(feame){
        const text = await feame.textContent();
        console.log("Frame text", text);
      };
}
