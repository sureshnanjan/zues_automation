import { test, expect } from '@playwright/test';
import { KeyPresses } from '../PageObject/KeyPresses';

test('Check heading of KeyPress Page', async ({page}) =>{
    const keypress = new KeyPresses(page);

    await keypress.goto();
    await keypress.verifyheader();

    })
    
    test('Checck paragraph of KeyPress page', async ({page}) =>{
    const keypress = new KeyPresses(page);

    await keypress.goto();
    await keypress.verifyParagraph();
      
    })
    
    test('Check key press action', async ({page}) =>{
    const keypress = new KeyPresses(page);
    const key = 'A';

    await keypress.goto();
    await keypress.performKeyPress(key);
    await keypress.verifyKeyPressed();
          
    })
    
    test('Check functional key press action', async ({page}) =>{
    const keypress = new KeyPresses(page);
    const key = 'Control';

    await keypress.goto();
    await keypress.performKeyPress(key);

    await keypress.verifyTextField(key);
              
    })  
    
    test('Check alphabet key press action', async ({page}) =>{
        const keypress = new KeyPresses(page);
        const key = 'N';
    
        await keypress.goto();
        await keypress.performKeyPress(key);
    
        await keypress.verifyTextField(key);
                  
        })  
    test('Check number key press action', async ({page}) =>{
        const keypress = new KeyPresses(page);
        const key = '1';
        
        await keypress.goto();
        await keypress.performKeyPress(key);
        
        await keypress.verifyTextField(key);
                      
        })
    test('Check numpad key press action', async ({page}) =>{
        const keypress = new KeyPresses(page);
        const key = 'numpad5';
            
        await keypress.goto();
        await keypress.performKeyPress(key);
            
        await keypress.verifyTextField(key);
                          
        })  
