export interface IShadowDOM{
/**
 * @method visit_Page opens the Shadow DOM page from the Herokuapp homepage
 */
    visit_Page(Page);

    
/**
 * @param {*} pageTitle stores the Page Heading
 * @method checkHeading verifies the page heading
 */
    checkHeading( pageTitle: String);
    
/**
 * @param {*} ShadowDOM_1_Text will store the text from first Shadow DOM
 * @method Verify_ShadowDOM1_text will verify the text of first Shadow DOM element
 */
    Verify_ShadowDOM1_text(ShadowDOM_1_Text: any);


/**
 *  @param {*} ShadowDOM_2_ListElement1 will store the first list element from the second Shadow DOM
 *  @method Verify_ShadowDOM2_text1 will verify the text of ShadowDOM 2 element1
 */
    
    Verify_ShadowDOM2_text1(ShadowDOM_2_ListElement1: any);

/**
 * @param {*} ShadowDOM_2_ListElement2 will store the second list element from the second Shadow DOM
 * @method Verify_ShadowDOM2_text2 will verify the text of ShadowDOM 2 element2
 */
    Verify_ShadowDOM2_text2(ShadowDOM_2_ListElement2: any);
}

