const data = "Tanmay"
const functionality = function (param){
    console.log("This is just a test")
}

console.log(typeof data)
console.log(typeof functionality)

functionality();

const somethingelse = function(){
    console.log("This is some else function")

}

function InvokeAnother(otherFunction){
    console.log("Calling another function")
    otherFunction

}

InvokeAnother(functionality);
InvokeAnother(somethingelse);