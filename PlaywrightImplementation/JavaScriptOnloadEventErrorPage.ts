import { onLoadError } from "../Operations/JavaScriptOnloadEventErrorOps";

export class errorTextMessage implements onLoadError{
    errorTextMessage: String;
    verifyerrorText(): void {
        throw new Error("Method not implemented.");
    }
}