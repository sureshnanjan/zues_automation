import { test, expect } from '@playwright/test';
import { DragDrop } from '../PlaywrightImplementation/DragDrop';
import { HomePage } from '../PlaywrightImplementation/HomePage';


test('Verfying the title on Drag and Drop page', async ({ page }) => {
   /** const DragDrop = new IDragDrop(page);
    await DragDrop.gotoDragDropPage();
    await DragDrop.CheckTitle('Drag and Drop');
     */
});

test('Verifying the count of elemnts present to be interacted', async ({ page }) => {
/**
    const DragDrop = new IDragDrop(page);
    await DragDrop.gotoDragDropPage();
    await DragDrop.CountOfElements(2);
 */
});

test('Verifying the header of the blocks/elemnts on the page', async ({ page }) => {
    /**
    const DragDrop = new IDragDrop(page);
    await DragDrop.gotoDragDropPage();
    await DragDrop.CheckElementHeader(A);
    await DragDrop.CheckElementHeader(B);
 */
});

test('Verifing the cursor handle when hovered over the blocks arrow cursor should switch to drag handles when hovered', async ({ page }) => {
    /**
    const DragDrop = new IDragDrop(page);
    await DragDrop.gotoDragDropPage();
    await DragDrop.CursorHandle(A);
    await DragDrop.CursorHandle(B);
 */
});

test('Verifying the current position of block A', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.PositionOfA();
     */
});

test('Verifying the current position of block B', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.PositionOfB();
     */
});

test('Verifying the drag from A to B functionality', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.DragDropAtoB(dragFromA, dragToB);
     */
});

test('Verifying the drag from B to A functionality', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.DragDropAtoB(dragFromB, dragToA);
     */
});

test('Verifying the placeholder of the block which appears when an elements is selected to be dragged', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.DragFromPlaceholder();
     */
});

test('Verifying the outline which the block gets when an elements is being dragged from', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.DragOutline();
     */
});

test('Verifying the outline which the block gets when an elements is being dropped in it', async ({ page }) => {
    /**
        const DragDrop = new IDragDrop(page);
        await DragDrop.gotoDragDropPage();
        await DragDrop.DDropOutline();
     */
});