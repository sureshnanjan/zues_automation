/**
 * const - Language keyword
 * value of a constant cannot be changed
 * String literal
 */
const objective = "Learning language basics";
console.log(objective)

/**
 * Different types of literals are
 * Numeric literal - 100, 50n, 22.6
 * Boolean literal - true, false
 * Trying to declare and initialize variable
 */

let myname= "Neha Qazi";
let myValue; //Declaration 
myValue = 50n //Initialization
console.log(`The value is ${myValue}`);


/**
 * PetStoreLogo is an object and using its properties * 
 */
const PetStoreLogo = {color: "Green", length: 20, breadth: 30, font:"Times Roman"} //object
console.log(PetStoreLogo.breadth);
console.log(PetStoreLogo["color"]);

/**
 * Create an array and use its property
 * myPets is an Array
 */
const myPets = ['fish', 'dogs', 'cats', 'reptiles'];
console.log(myPets.length)
