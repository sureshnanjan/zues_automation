/**
 * Represents a page with infinite scroll functionality.
 */
interface InfiniteScrollPage {
    /**
     * Navigates to the page with infinite scroll.
     * @returns {Promise<void>} A promise that resolves when the page navigation is complete.
     */
    goToPage(): Promise<void>;
  
    /**
     * Scrolls down the page to trigger the infinite scroll.
     * @returns {Promise<void>} A promise that resolves when the scrolling is complete.
     */
    scrollDown(): Promise<void>;
  
    /**
     * Checks if the content loaded after scrolling is visible on the page.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating the visibility of the content.
     */
    isContentVisible(): Promise<boolean>;
  }
  