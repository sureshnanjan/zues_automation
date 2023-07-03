interface IDragDrop{
    title: string;
    expectedcount: number;
    CheckTitle(title);
    CountOfElements(expectedcount);
    CheckElementHeader();
    CursorHandle();
    PositionOfA();
    PositionOfB();
    Selectmove();
    DragDrop(dragFrom, dragTo);
    DragFromPlaceholder()
    DragToOutline()

}