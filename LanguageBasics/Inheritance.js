// Constructing an Object
//__proto__: used to inherit an attribute from one object to another
const myBase = {
    att1:'value1',
    printVals:function()
    {
        for (const key in this) {
            console.log(this[key]);
            }
        }
    }

    const usingCreate = Object.create(myBase, {
        att3: { value: { attt3: 'value3' } },
        att4: { value: { attt4: 'value4' } }
      });

usingCreate.printVals()

const anotherObject = {att2:"value2", __proto__: myBase}
// console.log(anotherObject.att1);
// console.log(anotherObject.att2);
// console.log(anotherObject.__proto__)
// anotherObject.printVals();

const another2 = {att3:3,att4:4,att5:5, __proto__: myBase}
// another2.printVals();
// console.log(another2.notexists)
// another2.notexists = 120
// console.log(another2.notexists)
// another2.printVals();

myarrayofNumbers= [1,2,3]
myarrayofNames=['jamima', 'zara', 'levi']
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
// numbers.forEach(element =>{
//     console.log(element);
// });
// console.log("After mapping all the elements")
// newArr.forEach(element => {
//     console.log(element);
// })
/*
console.log(myarrayofNumbers.__proto__)
console.log(myarrayofNames.__proto__)
console.log(Object.getPrototypeOf(myarrayofNames))
console.log(Object.getPrototypeOf(anotherObject))
*/


//Object.create()
const myCustom = {prop1:1, prop2:2};
Object.setPrototypeOf(myCustom,myBase)
myCustom.printVals();
