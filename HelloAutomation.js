/**
 * This is Doc Examples
 */
console.log("Automating Heroku App")
let myPage = new HomePage();
myPageGotoPage("Add Remove Elements")
/**
 * 
 * @param {*} url 
 */
function openHomePage(url){
    // Perform some operations
}

/**
 * This method takes care of navigating and working on Add remove elements
 * @param {string} param1 
 * @param {number} param2 
 * @returns {string}
 */

function MyMethod(param1,param2){
    return 100;
}

MyMethod()

/**
 * This is a Demo method for JSDOC understanding
 * @param {string} string1 This is a string parameter 
 * @param {number} integer1 This is an integer parameter
 */

function JamimaJSDOCDemo(string1,integer1){
    return 100;
}

JamimaJSDOC();

/**
 * This is the type that holding the details of the Heroku App Home Page
 */
class HomePage{
    constructor(){
        this.Heading = "Identifier for the Heading"
        this.SubHeading = "Identifier for the Sub Heading on the home page"
        this.GOtoPage = (page) => {console.log(`Accessing this page ${page}`)}
    }
}