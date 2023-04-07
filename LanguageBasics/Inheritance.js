//Constructing an object
const myBase = {
    att1:'value1',
    printVals:function()
    {
        for (const key in this) {
            console.log(this[key]);
        }
    }
}
const anotherObject = {att2:'value2',__proto__:myBase} //__proto__ inherits the properties of base object
// console.log(anotherObject.att1)
// console.log(anotherObject.att2)
anotherObject.printVals()

const another2 = {att1:1,att3:3,att4:4,att5:5,__proto__:myBase} //att1 is present is base object but since it is reassigned here it will show value assigned here
another2.printVals()

const usingCreate = Object.create(myBase); //Another way of creating object using descriptor
usingCreate.printVals()

myarrayofNumber = [1,2,3]
myarrayofNames = ['Rumi','John','Sam']
console.log(myarrayofNames.__proto__)
console.log(myarrayofNumber.__proto__)

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

numbers.forEach(element => {
    console.log(element)
})

console.log('After taking square roots')
newArr.forEach(element => {
    console.log(element)
})

const myCustom = {prop1:1, prop2:2}
myCustom.__proto__ = myBase //Another way of setting prototype to base object
Object.setPrototypeOf(myCustom, myBase) //Another way of setting prototype to base object
myCustom.printVals()

function demo_objectCreation_withLiteralSyntax(){
    return {prop1:1};
}

function demo_objectCreation_withInheritance(){
    return {prop1:1, __proto__:{}};
}

function demo_objectCreation_withObjectCreate(){
    return Object.create(myBase);
}

console.log(demo_objectCreation_withLiteralSyntax())
console.log(demo_objectCreation_withInheritance())
console.log(demo_objectCreation_withObjectCreate())