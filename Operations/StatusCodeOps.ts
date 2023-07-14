export interface IStatusCode{

    goto(): void,
    checkHeading(expectedHeading: string): void,
    checkContent(expectedContent: string): void,
    link(expectedLink: string): void,
    goBacktoStatusPage(),
    page200(expectedStatus200:string),
    check200StatusCodePage(expectedContentStatus200:string),
    page404(expectedStatus404:string),
    check404StatusCodePage(expectedContentStatus404:string),
    page301(expectedStatus301:string),
    check301StatusCodePage(expectedContentStatus301:string),
    page500(expectedStatus500:string),
    check500StatusCodePage(expectedContentStatus500:string),
    linkOnStatusPage(expectedStatusLink:string),
    
}