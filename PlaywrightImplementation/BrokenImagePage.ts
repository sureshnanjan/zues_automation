import { IBrokenImageOps } from "../Operations/IBrokenImageOps";
import {page, expect, Locator} from  "@playwright/test";

export class BrokenImagePage implements IBrokenImageOps{
    page : Page 
    private readonly Image1: Locator;
    constructor(pagearg: Page){
        this.page = pagearg;
        this.Image1 = this.page.getByRole("img").nth(0);

    }

    checkImage1(){
        expect(this.Image1).toHaveAttribute('src','path/to/file');
    }
}