//constructing an object 
const myBase = 
{att1: 'value1',
printVals:function(){
    for(const key in this){
        console.log(this[key]);
    }
}}
const anotherObject = {att2:"value2",__proto__:myBase}
console.log(myBase.att1);
console.log(anotherObject.att2); 
console.log(anotherObject.__proto__);
anotherObject.printVals();
const another = {att1:3,att2:4,__proto__:myBase}
another.printVals();
console.log(another.notexits)
another.notexits =50
another.printVals();


myarrayofNumbers =[1,2,3]
myarrayofNames=['Harry','Hermione','Ronald']
const numbers =[4,9,16,25];
const newArr = numbers.map(Math.sqrt)
console.log(myarrayofNumbers.__proto__);
console.log(myarrayofNames.__proto__);
//empty array -- inherited empty array at declaration 
console.log(Object.getPrototypeOf(myarrayofNames))
console.log(Object.getPrototypeOf(anotherObject))

numbers.forEach(element=>{
    console.log(element);
});
console.log("after mapping all the elements")
newArr.forEach(element=>{
    console.log(element);
});

const usingCreate = Object.create(myBase);
usingCreate.printVals();

const myCustom ={prop1:1 , prop2:2};
//myCustom.__proto__=myBase;
Object.setPrototypeOf(myCustom,myBase);
myCustom.printVals();

