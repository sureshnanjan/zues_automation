export interface HoverPageOperations {
    /**
     * @description navigate to the hover page
     */
    goto(): any;

    /**
     * @description verify the Hover page heading
     */
    verifyHeading(): any;

    /**
     * @description verify the Hover page sub-heading
     */
    verifySubheading(): any;

    /**
     * @description verify the user images
     */
     verifyImages(): any;

    /**
     * @description hover over the image and verify tooltip
     * @param index index of the image
     * @param username username of the hovered image
     */
    hoverOnImage(index: number, username: string): any;
    
    /**
     * @description hover away from the image and verify tooltip not exists
     * @param index index of the image
     */
    hoverAwayFromImage(index: number): any;

    /**
     * @description click on the view profile of the hovered image
     */
    viewProfile(username: string): any;
}
