export interface IShadowDOM{
/**
 * @method visit_Page opens the Shadow DOM page from the Herokuapp homepage
 */
    visit_Page();

    
/**
 * @param {*} pageTitle stores the Page Heading
 */
    pageTitle: String;


/**
 * @param {*} ShadowDOM_1_Text will store the text from first Shadow DOM
 * @method Access_ShadowDOM1_element will return the first Shadow DOM element
 */
    ShadowDOM_1_Text: String;
    Access_ShadowDOM1_element();


/**
 *  @param {*} ShadowDOM_2_ListElement1 will store the first list element from the second Shadow DOM
 *  @param {*} ShadowDOM_2_ListElement2 will store the second list element from the second Shadow DOM
 *  @method Access_ShadowDOM2_ListELements will return the ShadowDOM 2 list elements
 */
    ShadowDOM_2_ListElement1: String;
    ShadowDOM_2_ListElement2: String;
    Access_ShadowDOM2_elements();
}

