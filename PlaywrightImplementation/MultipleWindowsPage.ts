import { IMultipleWindowsOps } from "../Operations/IMultipleWindowsOps";

export class MultipleWindowsPage implements IMultipleWindowsOps{

    constructor(page, browser){

        page.on('dialog', dialog => {
            dialog.accept();
          });
          page.Key
    }

    checkOpenedLink(){

    }
}