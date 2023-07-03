interface IDragAndDrop{
    headerText: string;
    verifyHeader();
    verifyElementLabel();
    countOfDraggableElement(count);
    selectAndMove();
    verifyDraggedState();
    draganddrop(dragFrom,dragTo);
    verifyPositionOfElement();
}