export interface IExitIntent {
    visit(): Promise<void>;
    headertext : String;
    contenttext : String;
    verifyheader(); // Verify Heading of the page
    verfiycontenttext(); // Verify Content of the page
    checkExitIntentOverlay(): Promise<boolean>;
    triggerExitIntent(): Promise<void>;
  }

//   In this interface, we define the following methods:

// visit(): Promise<void>: Navigates to the page where the exit intent functionality is present.
// checkExitIntentOverlay(): Promise<boolean>: Checks if the exit intent overlay is visible.
// triggerExitIntent(): Promise<void>: Triggers the exit intent, simulating the user leaving the page.