export interface digestAuthentication {
    /*
    Interface for login page
    **/
    loginPage(): Promise<void>;

    /*
    Interface for alert
    **/
    alertData(): void;

    /*
    Interface for once the user has logged in successuly
    **/
    successPage(): void;
}