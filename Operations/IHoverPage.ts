export interface UploadFileOperations {
    /**
     * @description navigate to the upload file page
     */
    goto(): any;

    /**
     * @description verify the File Upload heading
     */
    verifyHeading(): any;

    /**
     * @description verify the File Upload sub-heading
     */
    verifySubheading(): any;

    /**
     * @description hover over the image
     * @param index index of the image
     */
    hoverOnImage(index: number): any;

    /**
     * @description verify the username, view profile button 
     * @param username username of the hovered image
     */
    verifyHoverStateOfImage(username: string): any;
    
    /**
     * @description hover away from the image
     * @param index index of the image
     */
    hoverAwayFromImage(index: number): any;

    /**
     * @description verify the hovered elements doesn't exist
     */
    verifyUnHoverState(): any;

    /**
     * @description click on the view profile of the hovered image
     */
    viewProfile(username: string): any;
}