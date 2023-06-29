export interface IBasicAuthOperation{

ClickBasicAuthLink(): Promise<void>
CheckSuccessfulHeading(expected: String): Promise<void>
CheckSuccessfulSubHeading(expected: String): Promise<void>
CheckUnSucessfulHeading(expected: String): Promise<void>

}
