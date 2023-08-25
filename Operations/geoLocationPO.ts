export interface IGeoLocation{

    /**

     *

     * @param string | User input of example name to be visited in expected

     */

    goToExample(string)
    /** Verify page title of visited example page*/

    pageTitle()
    /** Verify page title of visited example page*/

    pageSubTitle()
    /** Verify page sub title of visited example page*/

    getCurrentLocation()
    /** Clicking on the button on page to get the current location */

    getCurrentLocation()
    /** Clicking on the button on page to get the current location */

    googleMaps()
    /** Clicking on the button on page to navigate to google maps*/
}