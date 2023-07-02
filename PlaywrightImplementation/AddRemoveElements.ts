import { IAddRemoveElements } from "../Operations/IAddRemoveElements";

export class AddRemoveElements implements IAddRemoveElements{
    visit(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    checkHeading(expectedHeading: String): void {
        throw new Error("Method not implemented.");
    }
    addElements(element: Number): void {
        throw new Error("Method not implemented.");
    }
    removeElements(element: Number): void {
        throw new Error("Method not implemented.");
    }
    availableElements(): void {
        throw new Error("Method not implemented.");
    }

}