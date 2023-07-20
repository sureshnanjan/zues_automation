export interface IFileDownload{
   
   /* The `visit()` method is a promise that is used to navigate to a specific page or URL. */
    visit(): Promise<void>;
    
    /* The `checkHeading` method is used to verify if the heading on the file download page matches the
    expected heading. It takes in a parameter `expectedHeadingFileDownloadPage` of type string,
    which represents the expected heading on the page. The method does not return any value
    (`void`). */
    checkHeading(expectedHeadingFileDownloadPage: string): void;
    
    /* The `checkforLink()` method is used to check if a link is present on the file download page. It
    does not take any parameters and does not return any value (`void`). */
    checkforLink(): void;
    
    /* The `dowloadFile(): void;` method is a function defined in the `IFileDownload` interface. It is
    used to initiate the file download process. The method does not take any parameters and does not
    return any value (`void`). */
    dowloadFile(): void;
    
    /* The `checkFileDownload()` method is a function defined in the `IFileDownload` interface. It is
    used to verify if the file download process has been completed successfully. It does not take
    any parameters and does not return any value (`void`). */
    checkFileDownload(): void;
}