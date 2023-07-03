export interface ICheckboxes{
    /**
     * This method is used to navigate to the Frames page
     */
visit(expectedURL: String): Promise<void>;
/**
     * This method is used to verify heading
     */
checkHeading(expectedHeading: string): void;
/**
     * This method is used to verify number of links
     */
checkLinkcount(expectedLinkcount: number): void;

/**
     * This method is used to navigate to the Example
     */
gotoExample(): void;

}