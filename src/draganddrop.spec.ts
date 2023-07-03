import {test} from "@playwright/test";
import {environment} from "../utilities/environment"
import {DragAndDrop} from "../herokuapppages/DragAndDrop";
import { HomePage } from "../herokuapppages/HomePage";

let dnd = null;

test.beforeEach(async ({ page }) => {
    dnd = new DragAndDrop(page);
    await page.goto(environment.url);
    await page.click(HomePage.linkLocators.dragAndDrop);
});

test('Verify page header',async()=>{
    dnd.verifyHeader();
});

test('Verify labels of draggable elements A and B',async()=>{
    dnd.verifyElementLabel(dnd.firstElement,dnd.labelA); // first draggable element label is A
    dnd.verifyElementLabel(dnd.secondElement,dnd.labelB); // first draggable element label is B
});

/*
test('Verify cursor on hovering draggable elements',async({page})=>{

});

test('Verify position of A',async({page})=>{

});

test('Verify position of B',async({page})=>{

});

test('Select and Move A',async({page})=>{

});

test('Select and Move B',async({page})=>{

});*/

test('Drag element A to B',async()=>{
    dnd.draganddrop(dnd.firstElement,dnd.secondElement);
    dnd.verifyElementLabel(dnd.firstElement,dnd.labelB);
    dnd.verifyElementLabel(dnd.secondElement,dnd.labelA);
});

test('Drag element B to A',async()=>{
    dnd.draganddrop(dnd.firstElement,dnd.secondElement);
    dnd.verifyElementLabel(dnd.firstElement,dnd.labelA);
    dnd.verifyElementLabel(dnd.secondElement,dnd.labelB);
});