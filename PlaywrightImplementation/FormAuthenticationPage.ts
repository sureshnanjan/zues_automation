import {IFormAuthentication} from '../Operations/IFormAuthentication';
export class FormAuth implements IFormAuthentication{
    gotoFormAuthenticationPage(expectedLink: String): Promise<void> {
        throw new Error('Method not implemented.');
        //const result = await page.getByRole('heading',{ name: 'Login Page' }).innerText(); 
        //await expect(page.locator('.heading')).toHaveText('Login Page'); 
        //await expect(page.locator('.status')).toHaveText('Submitted');
        
        // Assert
        //expect(result).toBe(expectedHeading);
    }
    checkPageHeading(expectePageHeading: String): void {
        throw new Error('Method not implemented.');
    }
    checkFormComponents(): void {
        throw new Error('Method not implemented.');
    }
    enterUsername(username: string): void {
        throw new Error('Method not implemented.');
    }
    enterPassword(password: string): void {
        throw new Error('Method not implemented.');
    }
    clickLoginButton(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    checkDashBox(): void {
        throw new Error('Method not implemented.');
    }
    checkFlashErrorMessage(expectederrormessage: String): void {
        throw new Error('Method not implemented.');
    }
    verifySuccessfulLogin(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    clickLogoutButton(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    checkFlashSuccessMessage(expectedsuccessmessage: String): void {
        throw new Error('Method not implemented.');
    }
}