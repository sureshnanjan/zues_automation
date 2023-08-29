export interface ICheckboxes{
 
    /* The `visit(expectedURL: String): Promise<void>` method is used to navigate to a specific URL. It
    takes an expected URL as a parameter and returns a promise that resolves when the navigation is
    complete. */
    visit(expectedURL: String): Promise<void>;

    /* The `checkHeading(expectedHeading: string): void;` method is used to verify if the heading on
    the page matches the expected heading. It takes an expected heading as a parameter and does not
    return anything. */
    checkHeading(expectedHeading: string): void;

    /* The `checkbox1(): void;` method is a declaration of a function named `checkbox1` that takes no
    parameters and does not return anything (`void`). It is a part of the `ICheckboxes` interface.
    The purpose and implementation of this method are not provided in the code snippet, so it is
    unclear what it does exactly. */
    checkcheckbox1(): void;

    /* The `checkbox2(): void;` method is a declaration of a function named `checkbox2` that takes no
    parameters and does not return anything (`void`). It is a part of the `ICheckboxes` interface.
    The purpose and implementation of this method are not provided in the code snippet, so it is
    unclear what it does exactly. */
    checkcheckbox2(): void;

    /* The `uncheckcheckbox1(): void;` method is a declaration of a function named `uncheckcheckbox1`
    that takes no parameters and does not return anything (`void`). However, the purpose and
    implementation of this method are not provided in the code snippet, so it is unclear what it
    does exactly. */
    uncheckcheckbox1(): void;

    /* The `uncheckcheckbox2(): void;` method is a declaration of a function named `uncheckcheckbox2`
    that takes no parameters and does not return anything (`void`). However, the purpose and
    implementation of this method are not provided in the code snippet, so it is unclear what it
    does exactly. */
    uncheckcheckbox2(): void;
}

