const Früh = "foobar";
let myname= "jamima";
let myValue; //Declaration 
// Fruh = 100;
//const - Language Keyword
// Identifier
// Literal - 100, 88.90, 100n
// "suresh", "kevin", "playwright"
// true, false

/**
 * Trying out different variable types, how to define them, and perform actions using those variables.
 * PetStoreLogo is an object
 * myPets is an array
 * 
 */

myValue=100;
console.log(`The value without init ${myValue}`);
const PetStoreLogo = {color: "green", length: 20, breadth: 10, font:"Segou UI"} //object
console.log(PetStoreLogo.breadth); // dot notation
console.log(PetStoreLogo["color"]); // bracket notation
const myPets = ['fish', 'dogs', 'cats', 'reptiles']; //array
console.log(myPets.length)
//literal- right hand side of the operator

//-------------------------------------------

/**
 * Following is an example of Destructuring Assignment
 * array dogs and rest contain dog breed info
 */
let dogs, rest;
[dogs]=["maltese", "golden retriever"];
[dogs,...rest]=["maltese", "golden retriever","poodle", "husky", "german shephard"]
console.log(rest)

//-------------------------------------
/**
 * Following is an example of Variabe scopes
 */
quantity=24;
/**
 * quantity is a Global variable
 */

/**
 * This method is an example to show local variable and calling a global variable withing a function
 * @param {array} catTypes - is a local variable
 * @returns {string}
 */
function catBreeds(){
    let catTypes;
    catTypes=["siamese", "persian", "sphynx", "scottish fold"]
    console.log("No. of Cats:", quantity, "\nBreeds: ") //calling a global variable
    catTypes.forEach(function(entry){
        console.log(entry);
    return 100;
    });
    
}
catBreeds();

/**
 * temp is a variable to explain blocked scope ReferenceError
 */
try{
    if(quantity>10){
        const temp=10;
    }
    console.log(temp); // throws a ReferenceError saying temp is not defined
}
catch(e) {
    if(e instanceof ReferenceError){
        console.log("this is an example of ReferenceError")
    }
}
//-------------------------------

