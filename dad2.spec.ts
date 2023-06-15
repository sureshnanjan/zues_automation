import { expect, Locator, Page, test } from '@playwright/test';
import exp from 'constants';

 

test('Grayed out placeholder should be visible of the element which is being dragged', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');


  // Get the source and target elements
  const sourceElement = await page.locator('#column-a');
  const targetElement = await page.locator('#column-b');
  const dummy = await page.getByRole('heading', { name: 'Drag and Drop' });

  
  await sourceElement.dragTo(dummy, {

    targetPosition: { x: 10, y: 20 },
  });
  await page.waitForTimeout(3000); // Delay for 3000 milliseconds (3 seconds)
  await expect(sourceElement).toHaveAttribute('style', 'opacity: 1;');

  





});

