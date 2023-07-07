import { VideoMode } from "@playwright/test";

export interface IRedirectLink{
    headertext : String;
    contenttext : String;
    verifyheader(); // Verify Heading of the page
    verfiycontenttext(); // Verify Content of the page
    click_here(); // Verify clicking on Click here link
    verifyredirectedlink(); // Verify redirection of Click here link
}