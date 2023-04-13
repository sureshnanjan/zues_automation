const myBase ={
    att1:'value1',
printvals:function(){
    for(const key in this){
    console.log(this[key]);
    }
}
}
const anotherObject ={att2:"value2",__proto__:myBase}

//Second way of creating the above method and obkect
const myCustom = {prop1:1, prop2:2};
Object.setPrototypeOf(myCustom,myBase);
myCustom.printvals();

//console.log(anotherObject.att1);
//console.log(anotherObject.att2);
console.log(anotherObject.__proto__);
anotherObject.printvals();

const another2={att3:3, att4:4, att5:5, __proto__:myBase}
another2.printvals();


//ways to get prototype of objects
myArray = [1,2,3]
console.log(myArray.__proto__)
//secondmethod
console.log(Object.getPrototypeOf(myArray))

//retreving elements from array
const numbers = [4,16,9,25]
const sqrt = numbers.map(Math.sqrt);

numbers.forEach( element=>{
    console.log(Element);
}  
)

/**
 * 
 * @returns returns a object with a property 
 */
function demo_object(){
    return Object.create(myBase,{});
}