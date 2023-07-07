export interface IExitIntent {
    visit(): Promise<void>;
    checkExitIntentOverlay(): Promise<boolean>;
    triggerExitIntent(): Promise<void>;
  }

//   In this interface, we define the following methods:

// visit(): Promise<void>: Navigates to the page where the exit intent functionality is present.
// checkExitIntentOverlay(): Promise<boolean>: Checks if the exit intent overlay is visible.
// triggerExitIntent(): Promise<void>: Triggers the exit intent, simulating the user leaving the page.