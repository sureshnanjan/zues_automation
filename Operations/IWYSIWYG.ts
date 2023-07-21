interface IWYSIWYG{
    headerText: string;
    loadEditor(editorUrl);
    verifyHeader();
    getContent();
    setContent(content);
    saveAsHtml(outputPath);
    saveAsPdf(outputPath);
}