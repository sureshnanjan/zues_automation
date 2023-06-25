interface Ijsalert{
    verify_heading();
    verify_subheading(); 
    invoke_jsalert();
    verify_alerttext(text);
    click_ok();
    verify_resulttext(text);
    invoke_jsconfirm();
    click_cancel();
    invoke_jsprompt();
    insert_text(text);
}