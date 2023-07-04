/**
 * Represents the interface for Drag and Drop page in Heroku app.
*/
interface IDragDrop{
    /**
     * Verifying the title of Drag and drop page
     * @param title: Text visible in the header on drag and drop page
     */
    CheckTitle(title : string):Promise<void>;
    /**
     * Verifying the count of elemnts present to be interacted
     * @param expectedcount: Number of elemnts visible to be dragged from and to
     */
    CountOfElements(expectedcount : number):Promise<void>;
    /**
     * Verifying the header of the blocks/elemnts on the page i.e Block A and Block A
     */
    CheckElementHeader():Promise<void>;
    /**
     * Verifing the cursor handle when hovered over the blocks
     * arrow cursor should switch to drag handles when hovered
     */
    CursorHandle():Promise<void>;
    /**
     * Verifying the current position of block A
     */
    PositionOfA():Promise<void>;
    /**
     * Verifying the current position of block B
     */
    PositionOfB():Promise<void>;
    /**
     * 
     * @param dragFrom: block A that needs to be dragged
     * @param dragTo : the position where the above block need to be dropped
     */
    DragDropAtoB(dragFrom, dragTo):Promise<void>;
    /**
     * 
     * @param dragFrom: block B that needs to be dragged
     * @param dragTo : the original position where the above block need to be dropped
     */
    DragDropBtoA(dragFrom, dragTo):Promise<void>;
    /**
     * Verifying the placeholder of the block which appears when an elements is selected to be dragged
     */
    DragFromPlaceholder():Promise<void>;
    /**
     * Verifying the outline which the block gets when an elements is being dragged from
     */
    DragOutline():Promise<void>;
    /**
     * Verifying the outline which the block gets when an elements is being dropped in it
     */
    DropOutline():Promise<void>;
}