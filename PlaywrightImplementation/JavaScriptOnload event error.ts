import { onLoadError } from "../Operations/JavaScript onload event error";

export class JavaScript implements onLoadError{
    errorTextMessage: String;
    errorText(): void {
        throw new Error("Method not implemented.");
    }