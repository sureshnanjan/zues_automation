import { shadowDOM } from "../PlaywrightImplementation/ShadowDomPage";
import { HomePage } from "../PlaywrightImplementation/HomePage";
import { test, expect } from '@playwright/test';

test('Verifying heading', async ({ page }) => {
    const shadow = new shadowDOM();
    const home=new HomePage(page);
    home.visitPage("https://the-internet.herokuapp.com/shadowdom")
    shadow.checkHeading("Simple template");
    })

test('verify text of dom 1 ', async ({ page }) => {
        const shadow = new shadowDOM();
        const home=new HomePage(page);
        home.visitPage("https://the-internet.herokuapp.com/shadowdom")
        shadow.Access_ShadowDOM1_element();
        })

test('verify text of dom 2 ', async ({ page }) => {
            const shadow = new shadowDOM();
            const home=new HomePage(page);
            home.visitPage("https://the-internet.herokuapp.com/shadowdom")
            shadow.Access_ShadowDOM2_elements();
            })
    
    