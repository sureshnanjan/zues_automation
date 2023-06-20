export interface MultipleWindow{
 /**
 * Verifying the Multiple Window Link on HerokoApp.
 * Get the title displayed on the page and verify it.
 * Verify the Text of the Link and store it.
 */
    pageTitle: String;
    linkText: String;
/** Performe all the verification of the page and idnetify the new window and it's text*/
    newpagetitle: string;
    MultipleWindowPage(): void; 
}