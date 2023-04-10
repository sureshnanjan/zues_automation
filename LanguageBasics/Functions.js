const data = ""
const functionality = function (param) {
    console.log("anonymous method");
}

console.log(typeof data);
console.log(typeof functionality);
functionality();
//data();

const somethingelse = function(){
    console.log("This is someother function");
}

function invokeAnother(otherFunction){
    console.log("calling another function")
    otherFunction();
}

invokeAnother(functionality);
invokeAnother(somethingelse);


