interface IWYSIWYG{
    loadEditor(editorUrl);
    getContent();
    setContent(content);
    saveAsHtml(outputPath);
    saveAsPdf(outputPath);
}