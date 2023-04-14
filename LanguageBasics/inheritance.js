//constructing an object
const myBase = {
    att1: 'value1',
    printVals: function () {
        for (const key in this) {
            console.log(this[key])
        }
    }
};
const anotherObject = { attr2: 'value2', __proto__: myBase }

console.log(anotherObject.attr1)
console.log(anotherObject.attr2)
anotherObject.printVals()

const another2 = { att1: 1, att3: 3, att4: 4, att5: 5, __proto__: myBase }
another2.printVals()
console.log(Object.getPrototypeOf(another2))

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

numbers.forEach(element => {
    console.log(element)
});

console.log("after mapping all elements")
newArr.forEach(element => {
    console.log(element)
})

/* const usingcreate = Object.create(myBase,
     { att3: 3, 
        att4: 4 });
usingcreate.printVals()
Object.usingcreate() */

console.log('another way')
const mycustom={prop1:1,prop2:2};
Object.setPrototypeOf(mycustom,myBase);
mycustom.printVals()