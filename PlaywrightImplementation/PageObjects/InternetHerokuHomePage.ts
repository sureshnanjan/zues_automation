import { expect, Locator, Page } from "@playwright/test";

/**
 * Page object for Internet Heroku Home Page
 */
export class InternetHerokuHomePage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly subHeading: Locator;
    readonly forkGithubImg: Locator;
    readonly ABTestingLink: Locator;
    readonly addRemoveElementsLink: Locator;
    readonly basicAuthLink: Locator;
    readonly brokenImagesLink: Locator;
    readonly challengingDOMLink: Locator;
    readonly checkboxesLink: Locator;
    readonly contextMenuLink: Locator;
    readonly digestAuthenticationLink: Locator;
    readonly disappearingElementsLink: Locator;
    readonly dragAndDropLink: Locator;
    readonly dropdownLink: Locator;
    readonly dynamicContentLink: Locator;
    readonly dynamicControlsLink: Locator;
    readonly dynamicLoadingLink: Locator;
    readonly entryAdLink: Locator;
    readonly exitIntentLink: Locator;
    readonly fileDownloadLink: Locator;
    readonly fileUploadLink: Locator;
    readonly floatingMenuLink: Locator;
    readonly forgotPasswordLink: Locator;
    readonly formAuthenticationLink: Locator;
    readonly framesLink: Locator;
    readonly geolocationLink: Locator;
    readonly horizontalSliderLink: Locator;
    readonly hoversLink: Locator;
    readonly infiniteScrollLink: Locator;
    readonly inputsLink: Locator;
    readonly JQueryUIMenusLink: Locator;
    readonly JavaScriptAlertsLink: Locator;
    readonly JavaScriptOnloadEventErrorLink: Locator;
    readonly keyPressesLink: Locator;
    readonly largeDeepDOMLink: Locator;
    readonly multipleWindowsLink: Locator;
    readonly nestedFramesLink: Locator;
    readonly notificationMessagesLink: Locator;
    readonly redirectLink: Locator;
    readonly secureFileDownloadLink: Locator;
    readonly shadowDOMLink: Locator;
    readonly shiftingContentLink: Locator;
    readonly slowResourcesLink: Locator;
    readonly sortableDataTablesLink: Locator;
    readonly statusCodesLink: Locator;
    readonly typosLink: Locator;
    readonly WYSIWYGEditorLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-internet' });
        this.subHeading = page.locator('h2', { hasText: 'Available Examples' });
        this.forkGithubImg = page.getByAltText('Fork me on GitHub');
        this.ABTestingLink = page.getByRole('listitem').filter({ hasText: 'A/B Testing' });
        this.addRemoveElementsLink = page.getByRole('listitem').filter({ hasText: 'Add/Remove Elements' });
        this.basicAuthLink = page.getByText('Basic Auth (user and pass: admin)');
        this.brokenImagesLink = page.getByRole('listitem').filter({ hasText: 'Broken Images' });
        this.challengingDOMLink = page.getByRole('listitem').filter({ hasText: 'Challenging DOM' });
        this.checkboxesLink = page.getByRole('listitem').filter({ hasText: 'Checkboxes' });
        this.contextMenuLink = page.getByRole('listitem').filter({ hasText: 'Context Menu' });
        this.digestAuthenticationLink = page.getByText('Digest Authentication (user and pass: admin)');
        this.disappearingElementsLink = page.getByRole('listitem').filter({ hasText: 'Disappearing Elements' });
        this.dragAndDropLink = page.getByRole('listitem').filter({ hasText: 'Drag and Drop' });
        this.dropdownLink = page.getByRole('listitem').filter({ hasText: 'Dropdown' });
        this.dynamicContentLink = page.getByRole('listitem').filter({ hasText: 'Dynamic Content' });
        this.dynamicControlsLink = page.getByRole('listitem').filter({ hasText: 'Dynamic Controls' });
        this.dynamicLoadingLink = page.getByRole('listitem').filter({ hasText: 'Dynamic Loading' });
        this.entryAdLink = page.getByRole('listitem').filter({ hasText: 'Entry Ad' });
        this.exitIntentLink = page.getByRole('listitem').filter({ hasText: 'Exit Intent' });
        this.fileDownloadLink = page.getByRole('listitem').filter({ hasText: 'File Download' });
        this.fileUploadLink = page.getByRole('listitem').filter({ hasText: 'File Upload' });
        this.floatingMenuLink = page.getByRole('listitem').filter({ hasText: 'Floating Menu' });
        this.forgotPasswordLink = page.getByRole('listitem').filter({ hasText: 'Forgot Password' });
        this.formAuthenticationLink = page.getByRole('listitem').filter({ hasText: 'Form Authentication' });
        this.framesLink = page.getByRole('listitem').filter({ hasText: 'Frames' });
        this.geolocationLink = page.getByRole('listitem').filter({ hasText: 'Geolocation' });
        this.horizontalSliderLink = page.getByRole('listitem').filter({ hasText: 'Horizontal Slider' });
        this.hoversLink = page.getByRole('listitem').filter({ hasText: 'Hovers' });
        this.infiniteScrollLink = page.getByRole('listitem').filter({ hasText: 'Infinite Scroll' });
        this.inputsLink = page.getByRole('listitem').filter({ hasText: 'Inputs' });
        this.JQueryUIMenusLink = page.getByRole('listitem').filter({ hasText: 'JQuery UI Menus' });
        this.JavaScriptAlertsLink = page.getByRole('listitem').filter({ hasText: 'JavaScript Alerts' });
        this.JavaScriptOnloadEventErrorLink = page.getByRole('listitem').filter({ hasText: 'JavaScript onload event error' });
        this.keyPressesLink = page.getByRole('listitem').filter({ hasText: 'Key Presses' });
        this.largeDeepDOMLink = page.getByRole('listitem').filter({ hasText: 'Large & Deep DOM' });
        this.multipleWindowsLink = page.getByRole('listitem').filter({ hasText: 'Multiple Windows' });
        this.nestedFramesLink = page.getByRole('listitem').filter({ hasText: 'Nested Frames' });
        this.notificationMessagesLink = page.getByRole('listitem').filter({ hasText: 'Notification Messages' });
        this.redirectLink = page.getByRole('listitem').filter({ hasText: 'Redirect Link' });
        this.secureFileDownloadLink = page.getByRole('listitem').filter({ hasText: 'Secure File Download' });
        this.shadowDOMLink = page.getByRole('listitem').filter({ hasText: 'Shadow DOM' });
        this.shiftingContentLink = page.getByRole('listitem').filter({ hasText: 'Shifting Content' });
        this.slowResourcesLink = page.getByRole('listitem').filter({ hasText: 'Slow Resources' });
        this.sortableDataTablesLink = page.getByRole('listitem').filter({ hasText: 'Sortable Data Tables' });
        this.statusCodesLink = page.getByRole('listitem').filter({ hasText: 'Status Codes' });
        this.typosLink = page.getByRole('listitem').filter({ hasText: 'Typos' });
        this.WYSIWYGEditorLink = page.getByRole('listitem').filter({ hasText: 'WYSIWYG Editor' });
    }

    /**
     * Visit the https://the-internet.herokuapp.com
     */
    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com');
    }

    /**
     * Verify the page heading
     * @param headingText This is the Heading Text of the page
     */
    async checkHeading(headingText: string) {
        await expect(this.pageHeading).toHaveText(headingText)
    }

    /**
     * Verify page sub-heading
     * @param headingText This is the Sub-heading Text of the page
     */
    async checkSubHeading(headingText: string) {
        await expect(this.subHeading).toHaveText(headingText)
    }

    /**
     * Verify all links
     * @param noofLinks This is the number of links
     */
    async checkAvailableExamplesCount(noofLinks: number) {
        const result = await this.page.getByRole('link')
        await expect(result).toHaveCount(noofLinks);
    }
}