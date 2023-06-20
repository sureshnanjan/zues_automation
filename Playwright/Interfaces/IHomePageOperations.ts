import { Locator } from "@playwright/test";

/**
 * This is the Automation API for Heroku Home Page
 */

export interface IHomePageOperations{
    /**
     * This will navigate to the Hroku Home Page and check the Heading and Sub Heading
     */
   readonly pageHeading: any;
   readonly subHeading: any;
    clickLink(linkText: string): any;
    checkAvailableLinks(noOfLinks: number): any;
    checksubHeading(headingText: string): any
    checkHeading(headingText: string): any
}