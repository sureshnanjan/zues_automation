/**
 * Represents the operations for testing a floating menu on a page.
 */
export interface IFloatingMenuOps {
    /**
     * Locator for the page heading element.
     */
    pageHeading: any;
  
    /**
     * Locator for the floating menu element.
     */
    floatingMenu: any;
  
    /**
     * Checks if the floating menu element is visible on the page.
     */
    isFloatingMenuVisible(): void;
  
    /**
     * Scrolls the page a specified number of times in the given direction.
     * @param scrollCount - The number of times to scroll the page.
     * @param direction - The direction of scrolling ('up' or 'down').
     */
    scrollPage(scrollCount: number, direction: 'up' | 'down'): void;
  
    /**
     * Checks the link for a menu option identified by the provided selector.
     * @param buttonSelector - The selector for the menu option button.
     */
    checkMenuOptionLink(buttonSelector: any): void;
  }
  