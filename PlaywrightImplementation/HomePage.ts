import { IHomePage } from "../Operations/IHomePage";

export class HomePage implements IHomePage{
    visit(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    gotoUrl(urlToNavigate: String): void {
        throw new Error("Method not implemented.");
    }
    checkHomePageHeading(expectedHPHeading: String) {
        throw new Error("Method not implemented.");
    }
    checkHomePageSubHeading(expectedHPSubheading: String) {
        throw new Error("Method not implemented.");
    }
    checkNumberOfLinks(expectedLinks: Number) {
        throw new Error("Method not implemented.");
    }
}
