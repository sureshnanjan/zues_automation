/**
 * This is the Interface for File Upload Page
 */

export interface IFileUploads{
    pageHeading: any;
    chooseFileBtn: any;
    uploadBtn: any;
    chooseFile(path:string);
    uploadFile();
    checkPageHeading(expectedHeading: string);
    checkParagraphContent(expectedContent: string);
    getChosenFile();
}
