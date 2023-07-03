import { test } from '@playwright/test'
import { Ijsalert } from '../Operations/IJsAlert';

export class JavascriptAlerts implements Ijsalert{
    verifyHeading(): void {
        throw new Error('Method not implemented.');
    }
    verifySubHeading(): void {
        throw new Error('Method not implemented.');
    }
    verifyResultHeading(): void {
        throw new Error('Method not implemented.');
    }
    invokeJsAlert(): void {
        throw new Error('Method not implemented.');
    }
    verifyAlertText(text: string): void {
        throw new Error('Method not implemented.');
    }
    clickOk(): void {
        throw new Error('Method not implemented.');
    }
    verifyResultText(text: string): void {
        throw new Error('Method not implemented.');
    }
    invokeJsConfirm(): void {
        throw new Error('Method not implemented.');
    }
    clickCancel(): void {
        throw new Error('Method not implemented.');
    }
    invokeJsPrompt(): void {
        throw new Error('Method not implemented.');
    }
    inputValue(text: string): void {
        throw new Error('Method not implemented.');
    }
    
}