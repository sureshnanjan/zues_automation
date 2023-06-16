export interface IFileUpload{
    heading: any
    chooseAFile: any
    uploadBtn: any
    errorMessage: any
    uploadedFile: any
    verifyHeading(expectedHeading: string): Promise<void>
    chooseFile(path: string): Promise<void>
    verifyChosenFile(path: string): Promise<void>
    verifyError(): Promise<void>
    uploadFile(): Promise<void>
    verifyUploadedFile(filename: string): Promise<void>
}