export interface IHerokuAppSortableDataTablesOps{
    /**
     * Select the Sortable Data Tables link to visit the page.
     */
    visitSortableDataTablesLink(): Promise<void>;
    /**
     * After reditecting to the page, verify if the heading name is correct. 
     * @param headingText - This is used to check the expected heading on the Data Tables page.
     */
    checkDataTablesHeading(headingText: string): void;
    /**
     * Verify if the content under the Data Tables is correct. 
     * @param contentText - This is used to check the expected content under the Data Tables header.
     */
    checkDataTablesContent(contentText: string): void;
    /**
     * Verify the Example 1 heading.
     * @param subHeaderText1 - This is used to check the expected heading for Example 1.
     */
    checkExampleHeading1(subHeaderText1: string): void;
    /**
     * Verify if the content under the Example 1 header is correct. 
     * @param subHeaderContentText1 - This is used to check the expected content under the Example 1 header.
     */
    checkExampleHeading1Content(subHeaderContentText1: string): void;
    /**
     * Verify the Example 2 heading.
     * @param subHeaderText1 - This is used to check the expected heading for Example 1.
     */
     checkExampleHeading1(subHeaderText1: string): void;
     /**
      * Verify if the content under the Example 2 header is correct. 
      * @param subHeaderContentText2 - This is used to check the expected content under the Example 1 header.
      */
     checkExampleHeading1Content(subHeaderContentText2: string): void;
}