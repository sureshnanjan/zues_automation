export interface Slowresource{

    goto(): void,
    checkHeading(expectedHeading: string),
    checkContent(expectedContent: string)
}