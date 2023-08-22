export interface ISecureDownloadOps {
  /**
   * Click on Secure File Downloader file link.
   */
  gotoSecureFileDownloadsPage(): Promise<void>;
  /**
   * After login in check the heading name is correct.
   * Check the font size of the heading
   * @param expected - This is used to check the expected heading on the secure file download page
   */
  checkSecureFileDownloadHeading(expected: string): Promise<void>;
  /**
   * Checks the link is visible or not
   * @param expectedLink - This is used to check the expected download link
   */
  checkDownloadLink(expectedLink: string): Promise<void>
  /**
   * Click on the file to download.
   * Wait for the download process to complete and download it in the specify folder.
   * @param filename- This is used to specify which file should be downloaded.
   * @param path - This is used to notify where the file should be downloaded.
   */
  clickDownloadFile(filename: string, path: string): Promise<void>;
  /**
   * Check the file downloded in the correct folder.
   * @param path - This is used to check whether the file is downloaded in correct path.
   */
  checkDownloadedFile(path: string): Promise<void>;
  /**
   * Check heading when login is not successful
   * @param expected - This is used to check the expected heading after unsuccessful login
   */

  checkUnsuccessfulHeading(expectedText: string): Promise<void>;

 /**
   * Check if more than 1 file is available
   * 
   */
  checkAvailableFilesAreMoreThan1(): Promise<void>;
}