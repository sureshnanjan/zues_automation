/**
 * This is the Interface for File Download Page
 */

export interface IFileUploads{
    pageHeading: any;
    numberOfLinksO(); //to verify the number of download links
    downloadFile(fileName:string); // to select and click on a specific file to download it

}
