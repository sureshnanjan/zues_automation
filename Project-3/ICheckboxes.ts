export interface ICheckboxes{
 
    visit(expectedURL: String): Promise<void>;

    checkHeading(expectedHeading: string): void;

    checkbox1(): void;

    checkbox2(): void;
}