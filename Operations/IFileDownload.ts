export interface IFileDownload{
   
    visit(): Promise<void>;
    
    /* The `checkHeading` method is a function that takes in a parameter
    `expectedHeadingFileDownloadPage` of type `string`. It is used to check if the heading on the
    file download page matches the expected heading. */
    checkHeading(expectedHeadingFileDownloadPage: string): void;
    
    /*  It is used to check if a link is present on the file download page. */
    checkforLink(): void;

    /* It is used to initiate the file download process. */
    dowloadFile(): void;

    /*It is used to check if the file download process has completed successfully. */
    checkFileDownload(): void;
}