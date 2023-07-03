import { Page } from "@playwright/test";

export default class FormAuthentication{

    constructor(public page: Page){    }

    async vistHomePage() {
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async clickFormAutheticationLink() {
        await this.page.getByRole('link', { name: 'Form Authentication' }).click()
    }
    
    async enterUsername(username: string) {
        await this.page.locator('#username').type(username);
    }

    async enterPassword(password: string){
        await this.page.locator('#password').type(password);
    }

    async clickLoginButton(){
        await this.page.click('//*[@id="login"]/button/i');
    }
}