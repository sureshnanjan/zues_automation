import { onLoadError } from "../Operations/JavaScript onload event error";

export class errorTextMessage implements onLoadError{
    errorTextMessage: String;
    verifyerrorText(): void {
        throw new Error("Method not implemented.");
    }
}