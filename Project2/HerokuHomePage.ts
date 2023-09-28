import { expect, Locator, Page } from "@playwright/test";

/**
 * This is Heroku Home Page
 */
export class HerokuHomePage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly subHeading: Locator;
    readonly forkGithubImg: Locator;
    readonly linkABTesting: Locator;
    readonly linkAddRemoveElements: Locator;
    readonly linkBasicAuth: Locator;
    readonly linkBrokenImages: Locator;
    readonly linkChallengingDOM: Locator;
    readonly linkCheckboxes: Locator;
    readonly linkContextMenu: Locator;
    readonly linkDigestAuthentication: Locator;
    readonly linkDisappearingElements: Locator;
    readonly linkDragAndDrop: Locator;
    readonly linkDropdown: Locator;
    readonly linkDynamicContent: Locator;
    readonly linkDynamicControls: Locator;
    readonly linkDynamicLoading: Locator;
    readonly linkEntryAd: Locator;
    readonly linkExitIntent: Locator;
    readonly linkFileDownload: Locator;
    readonly linkFileUpload: Locator;
    readonly linkFloatingMenu: Locator;
    readonly linkForgotPassword: Locator;
    readonly linkFormAuthentication: Locator;
    readonly linkFrames: Locator;
    readonly linkGeolocation: Locator;
    readonly linkHorizontalSlider: Locator;
    readonly linkHovers: Locator;
    readonly linkInfiniteScroll: Locator;
    readonly linkInputs: Locator;
    readonly linkJQueryUIMenus: Locator;
    readonly linkJavaScriptAlerts: Locator;
    readonly linkJavaScriptOnloadEventError: Locator;
    readonly linkKeyPresses: Locator;
    readonly linkLargeDeepDOM: Locator;
    readonly linkMultipleWindows: Locator;
    readonly linkNestedFrames: Locator;
    readonly linkNotificationMessages: Locator;
    readonly linkRedirectLink: Locator;
    readonly linkSecureFileDownload: Locator;
    readonly linkShadowDOM: Locator;
    readonly linkShiftingContent: Locator;
    readonly linkSlowResources: Locator;
    readonly linkSortableDataTables: Locator;
    readonly linkStatusCodes: Locator;
    readonly linkTypos: Locator;
    readonly linkWYSIWYGEditor: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-internet' });
        this.subHeading = page.locator('h2', { hasText: 'Available Examples' });
        this.forkGithubImg = page.getByAltText('Fork me on GitHub');
        this.linkABTesting = page.getByRole('listitem').filter({ hasText: 'A/B Testing' });
        this.linkAddRemoveElements = page.getByRole('listitem').filter({ hasText: 'Add/Remove Elements' });
        this.linkBasicAuth = page.getByText('Basic Auth (user and pass: admin)');
        this.linkBrokenImages = page.getByRole('listitem').filter({ hasText: 'Broken Images' });
        this.linkChallengingDOM = page.getByRole('listitem').filter({ hasText: 'Challenging DOM' });
        this.linkCheckboxes = page.getByRole('listitem').filter({ hasText: 'Checkboxes' });
        this.linkContextMenu = page.getByRole('listitem').filter({ hasText: 'Context Menu' });
        this.linkDigestAuthentication = page.getByText('Digest Authentication (user and pass: admin)');
        this.linkDisappearingElements = page.getByRole('listitem').filter({ hasText: 'Disappearing Elements' });
        this.linkDragAndDrop = page.getByRole('listitem').filter({ hasText: 'Drag and Drop' });
        this.linkDropdown = page.getByRole('listitem').filter({ hasText: 'Dropdown' });
        this.linkDynamicContent = page.getByRole('listitem').filter({ hasText: 'Dynamic Content' });
        this.linkDynamicControls = page.getByRole('listitem').filter({ hasText: 'Dynamic Controls' });
        this.linkDynamicLoading = page.getByRole('listitem').filter({ hasText: 'Dynamic Loading' });
        this.linkEntryAd = page.getByRole('listitem').filter({ hasText: 'Entry Ad' });
        this.linkExitIntent = page.getByRole('listitem').filter({ hasText: 'Exit Intent' });
        this.linkFileDownload = page.getByRole('listitem').filter({ hasText: /^File Download$/ });
        this.linkFileUpload = page.getByRole('listitem').filter({ hasText: 'File Upload' });
        this.linkFloatingMenu = page.getByRole('listitem').filter({ hasText: 'Floating Menu' });
        this.linkForgotPassword = page.getByRole('listitem').filter({ hasText: 'Forgot Password' });
        this.linkFormAuthentication = page.getByRole('listitem').filter({ hasText: 'Form Authentication' });
        this.linkFrames = page.getByRole('listitem').filter({ hasText: /^Frames$/ });
        this.linkGeolocation = page.getByRole('listitem').filter({ hasText: 'Geolocation' });
        this.linkHorizontalSlider = page.getByRole('listitem').filter({ hasText: 'Horizontal Slider' });
        this.linkHovers = page.getByRole('listitem').filter({ hasText: 'Hovers' });
        this.linkInfiniteScroll = page.getByRole('listitem').filter({ hasText: 'Infinite Scroll' });
        this.linkInputs = page.getByRole('listitem').filter({ hasText: 'Inputs' });
        this.linkJQueryUIMenus = page.getByRole('listitem').filter({ hasText: 'JQuery UI Menus' });
        this.linkJavaScriptAlerts = page.getByRole('listitem').filter({ hasText: 'JavaScript Alerts' });
        this.linkJavaScriptOnloadEventError = page.getByRole('listitem').filter({ hasText: 'JavaScript onload event error' });
        this.linkKeyPresses = page.getByRole('listitem').filter({ hasText: 'Key Presses' });
        this.linkLargeDeepDOM = page.getByRole('listitem').filter({ hasText: 'Large & Deep DOM' });
        this.linkMultipleWindows = page.getByRole('listitem').filter({ hasText: 'Multiple Windows' });
        this.linkNestedFrames = page.getByRole('listitem').filter({ hasText: 'Nested Frames' });
        this.linkNotificationMessages = page.getByRole('listitem').filter({ hasText: 'Notification Messages' });
        this.linkRedirectLink = page.getByRole('listitem').filter({ hasText: 'Redirect Link' });
        this.linkSecureFileDownload = page.getByRole('listitem').filter({ hasText: 'Secure File Download' });
        this.linkShadowDOM = page.getByRole('listitem').filter({ hasText: 'Shadow DOM' });
        this.linkShiftingContent = page.getByRole('listitem').filter({ hasText: 'Shifting Content' });
        this.linkSlowResources = page.getByRole('listitem').filter({ hasText: 'Slow Resources' });
        this.linkSortableDataTables = page.getByRole('listitem').filter({ hasText: 'Sortable Data Tables' });
        this.linkStatusCodes = page.getByRole('listitem').filter({ hasText: 'Status Codes' });
        this.linkTypos = page.getByRole('listitem').filter({ hasText: 'Typos' });
        this.linkWYSIWYGEditor = page.getByRole('listitem').filter({ hasText: 'WYSIWYG Editor' });
    }

    /**
     * Visits the Home Page
     */
    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com');
    }

    /**
     * Verifies the page heading
     * @param headingText This is the Heading Text of the page
     */
    async checkHeading(headingText: string) {
        await expect(this.pageHeading).toHaveText(headingText)
    }

    /**
     * Verifies the page sub-heading
     * @param headingText This is the Sub-heading Text of the page
     */
    async checkSubHeading(headingText: string) {
        await expect(this.subHeading).toHaveText(headingText)
    }

    /**
     * Verifies the total available examples
     * @param noofLinks This is the number of links
     */
    async checkAvailableExamplesCount(noofLinks: number) {
        const result = await this.page.getByRole('link')
        await expect(result).toHaveCount(noofLinks);
    }
}