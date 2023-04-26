const data = "suresh"

const functionality = function (params) {
    console.log("anonymous method")
}

console.log(typeof data);
console.log(typeof functionality)

function InvokeAnotherFunction(otherFunction) {
    console.log("Calling another function");
    otherFunction();
}

const somethingElse = function() {
    console.log("This is something else");
}


InvokeAnotherFunction(functionality);
InvokeAnotherFunction(somethingElse);