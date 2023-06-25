export interface ISecureDownloadOps{
    /**
     * Click on Secure File Downloader file link.
     */
    ClickSecureFileDownloadLink(): Promise<void>;
    /**
     * After login in check the heading name is correct. 
     * Check the font size of the heading
     */
    CheckSecureFileDownloadHeading(expected: string): Promise<void>;
      /**
     * Click on the file to download. 
     * Wait for the download process to complete and download it in the specify folder.
     * 
     */
    ClickDownloadFile(filename: string, path: string): Promise<void> ;
      /**
     * Check the file downloded in the correct folder.
     */
    CheckDownloadFile(path: string): Promise<void>;
}