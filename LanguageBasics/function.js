//Day 8: 31 Mar 2023
const data = 100;
const functionality = function Print() {
    console.log("Print something");
}

console.log(typeof (data));
console.log(typeof (functionality));

functionality(); //Calling a function by its assigned variable

const InvokeAnother = function Print() {
    console.log("Calling another function");
}

//Creating a function with to invoke some other function through its assigned variable
function Invoke(otherfunction) {
    console.log("Console log for the original invoking function");
    otherfunction();
}

Invoke(functionality); //Calling the variable assigned to a function through another function
Invoke(InvokeAnother);