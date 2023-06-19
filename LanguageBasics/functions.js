/* https://petstore.swagger.io/ */

const data = 'Test data'
const functionality = function(param){
    console.log("Anonymous method");
}

console.log(typeof data)
console.log(typeof functionality)
functionality()
/* Invocking a funtion fromm another funtion*/
function InvokeAnotherFunction(otherFunction){
    console.log('Invoking a function from another function');
    otherFunction();
}

const Another = function(){
    console.log("This is some other function");
}

InvokeAnotherFunction(functionality); //Functional Style Programming
InvokeAnotherFunction(Another);