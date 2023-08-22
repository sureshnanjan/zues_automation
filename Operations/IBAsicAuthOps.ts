export interface IBasicAuthOps{

    ClickBasicAuthLink(): Promise<void>  // Navigate to basic URL for Basic Authenication page
    
    CheckSuccessfulHeading(expected: String): Promise<void> // Once logged in, check for header "Basic Auth"
    
    CheckSuccessfulSubHeading(expected: String): Promise<void> // Once logged in, check for sub-header "Congratulations! You must have the proper credentials"
    
    CheckUnSucessfulHeading(expected: String): Promise<void> //Check heading of "Not authorized" once logged with incorrect credentials 
    
    
    }