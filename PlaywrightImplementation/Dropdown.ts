import { IDropdown } from "../Operations/IDropdownOps";

class Dropdown implements IDropdown{
    verifyPlaceholderText(expectedText: string) {
        throw new Error("Method not implemented.");
    }
    verifyHeading(expectedHeading: string) {
        throw new Error("Method not implemented.");
    }
    selectOption(option: string) {
        throw new Error("Method not implemented.");
    }
    verifySelectedOption() {
        throw new Error("Method not implemented.");
    }
    
}