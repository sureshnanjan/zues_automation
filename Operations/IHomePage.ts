export interface IHomePage{
    /**
     * This method is used to navigate to the base URL.
     */
    visit(): Promise<void>;

    /**
         * This method is used to navigate to the specific link on home page.
         * @param urlToNavigate This is used to pass the name of the link to visit.
         */
    gotoUrl(urlToNavigate: String): void;

    checkHomePageHeading(expectedHPHeading: String);
    checkHomePageSubHeading(expectedHPSubheading: String);
    checkNumberOfLinks(expectedLinks: Number);
}