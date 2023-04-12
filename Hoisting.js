//console.log(data); //Scoping - Whenever any data type is being used, interpreter needs to know what it is therefore this will be undefined

let data = 56; 

console.log(data); //This will get processed because data is being declared before using it somewhere

hoisting(); //Hoisting - JavaScript interpreter splits the declaration and assignment of functions and variables: it "hoists" your declarations to the top of their containing scope before execution

function hoisting() {
    console.log ("Learning the concept of Hoisting");
}

console.log(data2); //This will be processed as undefined because for var type, along with function the interpreter declaresthe var type data as well but does not initialise it so shows as undefined
var data2=67;
console.log(data2); 

//Difference between var and let/const -> var i s globally scoped where as let and const are block(Block is anything between {}) scoped. Please refer to https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ for detailed explanation.
// Difference between let and const -> We can override the value assigned using let but we cannot override the value assigned with const within the block.

var d=89;
var d=27;
console.log(d);

let c = 10;
let c= 22; //Both let and const cannot be redeclared like var. We get a declartion error for this one.

let a = 23;
a = 25;
console.log(a);

const b = 12;
b = 14;
console.log(b); //We get already declared error for this one.

