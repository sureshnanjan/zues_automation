export interface ISecureDownloadOps {
  /**
   * Click on Secure File Downloader file link.
   */
  gotoSecureFileDownloadsPage(): Promise<void>;
  /**
   * After unsuccessful login in check the heading name is correct.
   * @param expectedText - This is used to check the expected heading on the secure file download page for unsuccessful login.
   */
  checkUnsuccessfulHeading(expectedText: string): Promise<void>;
  /**
   * After successful login in check the heading name is correct.
   * @param expectedText - This is used to check the expected heading on the secure file download page for successful login.
   */
  checkSecureFileDownloadHeading(expectedText: string): Promise<void>;
  /**
   * After login in check if there are more than one file available on Secure Download page.
   */
  checkAvailableFilesAreMoreThan1(): Promise<void>
  /**
   * Checks the link is visible or not.
   * @param expectedLink - This is used to check the expected download link.
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
}