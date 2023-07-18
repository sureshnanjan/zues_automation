export interface IFrames{
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
     * This method is used to navigate to the iFrame Example
     */
     gotoiFrame(): void;

     /* 
     * This method is used to navigate to a nested frame within the current frame. 
     */
     gotoNestedFrame(): void;

     /* 
     * This method is used to verify if the iFrame has been successfully opened.
     */
     checkopenedFrame(): void;

     /* 
     * This method is used to verify if the nested frame has been successfully opened.
     */
     checkopenedNestedFrame(): void;

     }    