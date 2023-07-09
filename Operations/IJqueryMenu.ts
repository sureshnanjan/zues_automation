/**
 * Represents the interface for interacting with JQuery UI.
*/
interface IJqueryMenu{

/**
 * Verifies the heading of the JQuery UI and Menu
 * @param expected : Heading of the Jquery UI and Menu pages 
 */
verifyHeading(expected:string):Promise<void>;

/**
 * Verifies the subheading of the JQuery UI and Menu
 * @param expected : Subheading of the Jquery UI and Menu pages 
 */
verifySubHeading(expected:string):Promise<void>;

/**
 * Verifies hyperlink present on the page 
 * @param text : Hyperlink name 
 */
verifyHyperlinkPresent(text:string):Promise<void>;

/**
 * Clicks on Hyperlink
 * @param text : Hyperlink name present on Jquery UI and menu pages 
 */
clickHyperlink(text:String):Promise<void>;

/**
 *Verifies redirection of hyperlink  
 */
verifyUrl(text:string):Promise<void>;

/**
 * Verifies disabled option available
 * @param expected :Disabled 
 */
verifyDisabledText(expected:string):Promise<void>

/**
 * verifies enabled option text
 * @param expect :Enabled
 */
verifyEnabledText(expect:string):Promise<void>;

/**
 * clicks on enabled option 
 */
clickEnabled():Promise<void>;

/**
 * Verifies download option is available
 * @param expected : Downloads
 */
verifyDownloadsText(expected:string):Promise<void>;

/**
 * clicks on downloads option 
 */
clickDownloads():Promise<void>

/**
 * clicks on PDF option
 */
clickPdf():Promise<void>;

/**
 * clicks on CSV option
 */
clickCsv():Promise<void>;

/**
 * clicks on Excel option
 */
clickExcel():Promise<void>;

/**
 * verifies the file type of downloaded file
 */
verifyFileType():Promise<void>;

/**
 * clicks on 'Back to jquery Ui button
 */
clickBackToJqueryUI(): Promise<void>;

/**
 * clicks browser back button
 */
returnToPrevScreen():Promise<void>;
}