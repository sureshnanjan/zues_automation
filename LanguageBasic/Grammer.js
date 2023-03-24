//Basic javascript code
/**
 * This is description for name
 * @param {string} myName is a candidate name
 */

const myName = "Relvis";
console.log(`My name is ${myName}`)

// This a comment
/*
This is multi-line comment
*/

/**
 * @param {number} num is a number of items
 * @param {string} fruitName is the name of the fruit
 */
let num = 12;
const fruitName = "apples"
console.log(`There are ${num} ${fruitName} present in the basket`)

/**
 * @param {object} programmer is the object for the programmer details
 * @param {string} firstname is the name of the programmer
 * @param {number} age is the age of the programmer
 * @param {boolean} backendDeveloper is a boolean value
 * @param {Array} languages is the array
 * @param {string} "current project name" is used with quotes
 */

const programmer = {
    firstname: "Phil",
    age: 21,
    backendDeveloper: true,
    languages: ["Python", "JavaScript", "Java", "C++"],
    "current project name": "The Amazing App"
 }

 console.log(`The programmer age is ${programmer.age}`);
 console.log(`${programmer.languages[2]} is one of the languages used by the programmer`);
 console.log(programmer.backendDeveloper);
 console.log(`The current project is ${programmer["current project name"]}`)

/**
 * @param {Array} myArray is the array for languages and a number
 */

 const myArray = ["HTML", "CSS", "Javascript", 100]
 console.log(`The 2nd value in a array is ${myArray[1]}`)