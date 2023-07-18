/**
 * Represents the Exit Intent functionality in a web page.
 */
export interface IExitIntent {
  /**
   * Simulates a visit to the page.
   * @returns A promise that resolves when the visit is completed.
   */
  visit(): Promise<void>;

  /**
   * The header text displayed on the exit intent overlay.
   */
  headertext: string;

  /**
   * The content text displayed on the exit intent overlay.
   */
  contenttext: string;

  /**
   * Verifies the heading of the page.
   * @returns True if the heading matches, false otherwise.
   */
  verifyHeader(): boolean;

  /**
   * Verifies the content of the page.
   * @returns True if the content matches, false otherwise.
   */
  verifyContentText(): boolean;

  /**
   * Checks if the exit intent overlay is displayed.
   * @returns A promise that resolves with true if the overlay is displayed, false otherwise.
   */
  checkExitIntentOverlay(): Promise<boolean>;

  /**
   * Triggers the exit intent behavior on the page.
   * @returns A promise that resolves when the exit intent is triggered.
   */
  triggerExitIntent(): Promise<void>;
}
