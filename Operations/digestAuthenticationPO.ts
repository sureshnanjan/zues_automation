export interface digestAuthentication {
    /*
    Interface for visit the digest authentication page
    **/
    visit(): Promise<void>;

    /*
    Interface for alert box 
    **/
    alertDialogue(): void;

    /*
    Interface for once the user has logged in successfully
    **/
    successPage(): void;
}