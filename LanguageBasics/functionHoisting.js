//Day 8: 31 Mar 2023

let data = 100;

console.log(data); //Output will be 100 as data is being declared before using it

hoisting();

function hoisting() {
    console.log("Learning the concept of Hoisting");
}

console.log(data2); //Output will be undefined because variable is not declared or initialized
var data2 = 50;
console.log(data2);

var d = 40;
var d = 19;
console.log(d);

/* let c = 5;
let c = 55; //declaration error as let cannot be redeclare */

let a = 1;
a = 60;
console.log(a);

const b = 22;
b = 88;
console.log(b);//declaration error as const cannot be redeclare