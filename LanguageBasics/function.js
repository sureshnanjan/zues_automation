const data ="suresh"
//const category = {id:100,name :'reptile'}

//abstraction
//encapsulation
//inheritance
//overloading and overiding 
//procedural coding is not efficient
//oop is prefered 
/**Anonymous functions - No function name */
const functionality = function(params){
  console.log("anonymous function");
}

const somethingelse =function(){
  console.log("this is some other function");
}

console.log(typeof data);
console.log(typeof functionality);
functionality();
//data();

function InvokeAnother(otherfunction){
  console.log("calling another function")
  otherfunction();
}

InvokeAnother(functionality);
InvokeAnother(somethingelse);