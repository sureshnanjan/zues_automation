/**
 * Represents the interface for interacting with JavaScript alerts.
*/
export interface Ijsalert {
/**
* Verifies the heading of the JavaScript alert.
*/
verifyHeading():void;
/**
   * Verifies the subheading of the JavaScript alert.
   */
verifySubHeading():void;
/**
   * Verifies the heading 'Result' after interacting with the JavaScript alert.
   */
verifyResultHeading():void;

/**
   * Invokes a JavaScript alert.
   */
invokeJsAlert():void;

/**
   * Verifies the text displayed in the JavaScript pop up.
   * @param text - The expected text in the alert.
   */
verifyAlertText(text: string):void;

 /**
   * Clicks the "OK" button on javacript pop up.
   */
clickOk():void;

/**
   * Verifies the result text displayed after interacting with the JavaScript popup.
   * @param text - The expected text in the result.
   */
verifyResultText(text: string):void;

/**
   * Invokes a JavaScript confirmation alert.
   */
invokeJsConfirm():void;

 /**
   * Clicks the "Cancel" button on the JavaScript confirmation alert.
   */
clickCancel():void;

/**
   * Invokes a JavaScript prompt alert.
   */
invokeJsPrompt():void;

/**
   * Inputs a value into the JavaScript prompt alert.
   * @param text - The value to input in the prompt.
   */
inputValue(text: string): void;
    }
