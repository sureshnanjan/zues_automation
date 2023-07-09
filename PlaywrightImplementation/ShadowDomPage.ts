import { IShadowDOM } from "../Operations/IShadowDOM";
import { IHomePage } from "../Operations/IHomePage";

export class shadowDOM implements IShadowDOM{
    checkHeading(expected:string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    visit_Page(): void {
        throw new Error("Method not implemented.");
    }
    pageTitle: String;
    ShadowDOM_1_Text: String;
    Access_ShadowDOM1_element(): void {
        throw new Error("Method not implemented.");
    }
    ShadowDOM_2_ListElement1: String;
    ShadowDOM_2_ListElement2: String;
    Access_ShadowDOM2_elements(): void {
        throw new Error("Method not implemented.");
    }

    

}