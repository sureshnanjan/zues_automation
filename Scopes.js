//Variable scope A variable may belong to one of the following scopes:

//Global scope: The default scope for all code running in script mode.
//Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).
console.log(globalThis);
console.log(hoistedVar);
console.log(letVar);
console.log(constVar);
var hoistedVar = 100;
let letVar = 200;
const constVar = 500;