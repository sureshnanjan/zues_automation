export interface IMultipleWindow{
    /**
    * Verifying the Multiple Window Link on HerokoApp.
    * Store the title displayed on the page and verify it.
    */
       pageHeading: String;
       verifyWindowPage(): void; 
      
       /** Check the link text and store it.
        * Verify the link functionality
       */
     
       linkText: String;
       verifylink(): void; 
   
       /** Performe all the verification of the page and idnetify the new window and it's text*/
       
       newpagetitle: String;
       verifyNewWindowPage(): void; 
   }