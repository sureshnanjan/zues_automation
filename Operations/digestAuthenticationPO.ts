export interface digestAuthentication {
    loginPage(): Promise<void>;
    alertData(): void;
}