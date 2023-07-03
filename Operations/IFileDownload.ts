export interface IFileDownload{
   
    visit(): Promise<void>;
    checkHeading(expectedHeadingFileDownloadPage: string): void;
    checkforLink(): void;
    dowloadFile(): void;
    checkFileDownload(): void;
}