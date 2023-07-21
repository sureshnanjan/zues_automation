import {test,expect} from "@playwright/test";
import {WYSIWYG} from "../herokuapppages/WYSIWYG";

test("Launch WYSIWYG and verify header", async ({page})=>{
    const wysiwyg = new WYSIWYG(page);
    wysiwyg.verifyHeader();
});

test("Verify Editor is present", async ({page})=>{
});

test("Verify the default text", async ({page})=>{
});

test("Verify Editor menu", async ({page})=>{
});

test("Verify Editor tools present", async ({page})=>{
});

test("Verify text can be added in the Editor", async ({page})=>{
});

test("Verify undo option in the Editor", async ({page})=>{
});

test("Verify redo option in the Editor", async ({page})=>{
});

