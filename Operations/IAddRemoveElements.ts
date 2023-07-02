export interface IAddRemoveElements{
    /**
     * Will navigate to the Add/Remove elements pages
     */
    visit(): Promise<void>;
    /**
     * This function is used to check the expected heading on Add Remove elements page
     * @param expectedHeading - used to pass the expected heading text
     */
    checkHeading(expectedHeading: String): void;

    /**
     * This function is used to add elements on Add Remove elements page
     * @param element - used to pss the elements to be added
     */
    addElements(element: Number): void;

    /**
     * This function is used to remove elements on Add Remove elements page
     * @param element - used to pass the elements to be removed
     */
    removeElements(element: Number): void;

    /**
     * This function is used to check available elements on Add Remove elements page
     */
    availableElements(): void;
}