export interface IAddRemoveElements{
    /**
     * This method is used to navigate to the Add/Remove Elements page
     */
visit(expectedURL: String): Promise<void>;
    /**
     * This method is used to verify heading
     */
checkHeading(expectedHeading: string): void;
    /**
     * This method is used to verify if Add Element button is present
     */
checkButton(expectedButton: Element): void;
    /**
     * This method is used to verify that when Add Element button is clicked, the Delete button appears
     */
checkAddButtonisClicked(expectedButton: Element): void;
    /**
     * This method is used to verify that when the Delete button is clicked, the Delete button disappears
     */

  
}
