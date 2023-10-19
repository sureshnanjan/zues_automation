import { BrowserContext, BrowserContextOptions, expect, Locator, Page } from '@playwright/test';
import { IContextMenu } from "../Operations/IContextMenu";

export class ContextMenu{

    readonly page: Page;
    readonly context: Locator;
    readonly DashBox : Locator;
     alertText : String;
     cn : string;

constructor(page: Page) {
    this.page = page;
    this.DashBox = page.locator('#hot-spot');
    this.page.on('dialog', async dialog => {
        this.alertText = dialog.message();
        await dialog.accept();
      });
      this.page.on('popup', async popup => {
        await popup.waitForLoadState();
        this.cn = (await popup.title());
});
}

async checkDashBox(){
  await this.page.goto('https://the-internet.herokuapp.com/context_menu');
  await expect(this.DashBox).toHaveCSS('border-style','dashed');
  await this.DashBox.click({ button: 'right' });
}


async checkAlert(){
    await this.page.goto('https://the-internet.herokuapp.com/context_menu');
    const checkAlert = "You selected a context menu";
    expect(this.alertText).toBe(checkAlert);
  };

async checkContextMenu(){
  const cn1 = "Back";
  await this.page.goto('https://the-internet.herokuapp.com/context_menu');
  await this.DashBox.click({ button: 'right' });
  await Promise.all([
    console.log('cn'),
    expect(this.cn).toBe(cn1)
  ]);
}
}
