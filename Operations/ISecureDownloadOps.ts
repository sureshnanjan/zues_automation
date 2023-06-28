export interface ISecureDownloadOps{
    /**
     * Click on Secure File Downloader file link.
     */
    ClickSecureFileDownloadLink(): Promise<void>;
    /**
     * After login in check the heading name is correct. 
     * Check the font size of the heading
     * @param expected - This is used to check the expected heading on the secure file download page
     */
    CheckSecureFileDownloadHeading(expected: string): Promise<void>;
      /**
     * Click on the file to download. 
     * Wait for the download process to complete and download it in the specify folder.
     * @param filename- This is used to specify which file should be downloaded.
     * @param path - This is used to notify where the file should be downloaded.
     */
    ClickDownloadFile(filename: string, path: string): Promise<void> ;
      /**
     * Check the file downloded in the correct folder.
     * @param path - This is used to check whether the file is downloaded in correct path.
     */
    CheckDownloadFile(path: string): Promise<void>;
}