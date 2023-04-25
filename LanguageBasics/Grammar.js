//String literal - "Hello", "Automation", "Zeus" => enclosed inside ""
//Numeric literal - 100, 200, 300
//const - language keyword

/**
 * Learning language basics
 */
const { Console } = require("console");

let myname = "shubham";

const alpha = "header";
//can't change the value of aplha as it is constant variabled
//alpha = 100;

//changing the name
myname = "another name";
console.log(`The value wihtout init ${myname}`);

const petStoreLogo = {color:"green", length:20, with:10, font: "Arial"};

//one way to access properties
console.log(petStoreLogo.color);
console.log(petStoreLogo.with);

//another way to access properties
console.log(petStoreLogo['font']);
console.log(petStoreLogo['length']);

//map functionality
const myPets = ['fish','dog','reptile','birds']

//calculate the length of array
console.log(myPets.length);
//calculate the