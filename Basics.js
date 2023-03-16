(function () {
    "use strict";
    /* Start of your code */
    function greetMe(yourName) {
      console.log(`Hello ${yourName}`);
    }
  
    greetMe("World");
    /* End of your code */
  })();
  

  var variable = 10;
//Declares a variable, optionally initializing it to a value.


let letvariable = 100;
//Declares a block-scoped, local variable, optionally initializing it to a value.

const constant = 200;
//constant = 1000;

// destructuring assignment
const obj = {a:1,b:2}
const {b} = obj;
console.log(b);
// Array Literals are inbuilt
const coffees = ["French Roast", "Colombian", "Kona"];
// Object Literals
const myData = {attrib1:value1, attrib2:value2}
