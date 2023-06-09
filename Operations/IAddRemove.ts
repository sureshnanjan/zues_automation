export interface IAddRemove{
   
    visit(): Promise<void>;
    checkHeading(): void;
    checkAddElement(): void;
    checkDelete(): void;
    checkcount(): void;

}