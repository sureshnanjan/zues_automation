export interface IHerokuBrokenImagesPageOps {
    visit(): Promise<void>;
    checkHeading(headingText: string): void;
    checkImage1(): void;
    checkImage2(): void;
    checkImage3(): void;
}