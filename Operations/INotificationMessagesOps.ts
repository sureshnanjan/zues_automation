/**
 * This is the interface development for Notification Messages page
 */
export interface INotificationMessagesOps {
    /**
     * This method is used to navigate to the Notification Messages page
     */
    gotoNotificationMessagesPage(): Promise<void>;
    /**
     * This method is used to verify the heading of the Notification Messages page
     * @param expectedHeading - This is used to pass the expected heading
     */
    checkHeading(expectedHeading: string): void;
    /**
     * This method is used to verify the text content on the Notification Messages page
     * @param expectedTextContent - This is used to pass the expected text content on the page
     */
    checkTextContent(expectedTextContent: string): void;
    /**
     * This method is used to verify the text content as well as url of the link
     * @param expectedText - This is used to pass the expected text content of the link
     * @param expectedLink - This is used to pass the expected url of the link
     */
    verifyLink(expectedText: string, expectedLink: string): void;
    /**
     * This method is used to load new notification message by clicking on the Click here link text
     */
    loadNewMessage(): Promise<void>;
    /**
     * This method is used to verify the '!' icon on notification message
     */
    checkExclaimationIconInNotificationMessage(): void;
    /**
     * This method is used to verify the notification message text content 
     * @param expectedMessage - This is used to pass the expected message text content
     */
    checkNotificationMessageText(expectedMessage: string): void;
    /**
     * This method is ued to verify the 'x' icon button besides notification message
     */
    checkCloseIconBesidesNotificationMessage(): void;
    /**
     * This method is used to close the notification message
     */
    closeNotificationMessage(): void;
}