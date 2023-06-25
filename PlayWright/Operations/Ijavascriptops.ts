interface Ijsalert{
    verifyHeading();
    verifySubHeading(); 
    verifyResultHeading();
    invokeJsAlert();
    verifyAlertText(text:string);
    clickOk();
    verifyResultText(text:string);
    invokeJsConfirm();
    clickCancel();
    invokeJsPrompt();
    inputValue(text:string);

}