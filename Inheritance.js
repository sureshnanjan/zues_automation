let Object1 = {
    att1: "value1",
    printVal: function(){
        for (const key in this) {
            console.log(this[key]);  
            }
        }
        
    }
let Object2 = {
     att2: "value2",
     __proto__:Object1
 }

let Object3 = {att1:40, a: 20, b: 30, __proto__: Object2}

 console.log(Object1.att1); //Output-value1
 console.log(Object2.att1); //Output-value1
 Object2.printVal(); //Output-value2, value1, printval function
 Object3.printVal(); //Output-40, 20,30, value2, printval function - here att1 in Object1 gets overridden by the att1 present in Object3

console.log (Object3.notexist); //Output will be undefined
Object3.notexist = 10;
console.log (Object3.notexist); //Output will be 10 since we declared it in previous step.
Object3.printVal(); //Now prnt val function will print the new value as well along with all the other values.

myArrayOfNumbers = [1,2,3];
myArrayOfNames = ["Maithili", "Srushty", "Prachiti"];
let newArr = myArrayOfNumbers.map(myfunction);
console.log(myArrayOfNames.__proto__);
console.log(myArrayOfNumbers.length);
console.log(Object.getPrototypeOf(myArrayOfNumbers));
console.log(Object.getPrototypeOf(Object3));
console.log(Object.getPrototypeOf(Object2));


function myfunction(n) {
    let result1 = n*10;
    return result1;
}

myArrayOfNumbers.forEach(element => {
    console.log(element);
});

newArr.forEach(element => {
    console.log(element);
});

const Object4 = {prop1:1, prop2:2};
Object4.__proto__=Object2; //1st alternative to set prototype
Object4.printVal();
Object.setPrototypeOf(Object4,Object1); //2nd alternative to set prototype
Object4.printVal();