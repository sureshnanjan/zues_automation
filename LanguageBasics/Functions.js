const data = 'Rumi'
const functionality = function(param){
    console.log("Anonymous method");
}

console.log(typeof data)
console.log(typeof functionality)
functionality()

function InvokeAnotherFunction(otherFunction){
    console.log('Invoking a function from another function');
    otherFunction();
}

const SomethingElse = function(){
    console.log("This is some other function");
}

InvokeAnotherFunction(functionality); //Functional Style Programming
InvokeAnotherFunction(SomethingElse);