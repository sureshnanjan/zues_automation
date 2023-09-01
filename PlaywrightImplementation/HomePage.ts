import { IHomePage } from "../Operations/IHomeOps";

export class HomePage implements IHomePage{
    page: any;
    async visit(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
}