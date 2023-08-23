import { expect, Locator, Page } from '@playwright/test';
class ContextMenuPage  implements IContextMenu {
    private page: Page
    private message: string
    private dialogBox: Dialog

    // Locator 
    constructor(page:Page) {
        this.page = page
        this.page.on("dialog", async ({dialogBox}){
            this.message = dialog.message();
            dialogBox.accept();
        })
        
    }


    void DoRightClick(){
        await this.page.mouse.down({button:"right"}});
        this.page.keyboar


    }

    void DoDownlod(filename:string){
        this.page.getByRole("link",{name:`${filename}`})
    }

    void AcceoptDialog(){
        this.dialogBox.accept();
    }
    void CancelDialog(){
        this.dialogBox.dismiss();
    }
}
}