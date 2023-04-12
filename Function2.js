const data = 25;
const functionality = function Print() {
    console.log ("Print something");
}

console.log(typeof (data));
console.log(typeof (functionality));

functionality(); //Calling a function by its assigned variable

//Creating a function with to invoke some other function through its assigned variable
function Invoke(somefunction){
    console.log("Console.log for the oroginal invoking function");
    somefunction();
}

Invoke(functionality); //Calling the varibale assigned to a function through another function