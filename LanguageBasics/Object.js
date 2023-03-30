/**
 * This is a test to check repeatWord
 */
var assert = require('assert');
describe('Testing the Object Utility', function () {
  describe('Repeat Word Test', function () {
    it('This should check if the result is not zero', function () {
        assert.equal(repeatWord('Rumi', 2).length > 0, true);
    });
    //First Test
    it('This should repeat the correct number of times', function () {
      assert.equal(repeatWord('Rumi', 2).length, 9);
    });
    //Second Test
    it('This should repeat the correct number of times', function () {
        assert.equal(repeatWord('Rumi', 3).length, 9);
    });
  });
});

/**
 * This is a test to check MyFunc
 */
describe('MyFunc Test', function () {
    it('This should check if the array is not empty', function () {
      assert.equal(myFunc([]).length > 0, true);
    });
    it('This should check first element of array', function () {
        assert.equal(myFunc([]), 30);
    });
    it('This should check first element of array', function () {
        assert.equal(myFunc([]), 40);
    });
  });

describe('myCar Test', function () {
    it('This should check if brand is Honda', function () {
        assert.equal(myCar('Accord'), 'Honda')
    });
    it('This should check if brand is Hyundai', function () {
        assert.equal(myCar('Verna'), 'Hyundai')
    });
    it('This should check if brand is others', function () {
        assert.equal(myCar('Innova'), 'Others')
    });
})


//Object Literal
const obj = {
    prop1: 'value1',
    prop2: 'value2'
}
console.log(obj.prop1)
console.log(obj['prop2'])
obj['First Name'] = 'Rumi'
console.log(obj['First Name'])
console.log(obj.nonExisting)

/**
 * This is a function to say greet
 */
function sayGreeting() {
    console.log("Hello, How are you?")
}

/**
 * This is a function to say greet to a person
 * @param {*} person Person name
 */
function sayGreetingtoPerson(person) {
    console.log(`Hello, How are you ${person}?`)
}

/**
 * This is a function to repeat word number of times
 * @param {*} word Word that needs to be repeated
 * @param {*} times Number of times to repeat word
 */
function repeatWord(word, times) {
    let result = ''
    for (let index = 1; index <= times; index++) {
        if (index < times) {
            result += `${word} `;
        } else {
            result += `${word}`;
        }
        
    }
    return result
}

/**
 * This is a function to insert element into an array
 * @param {*} array This is an array
 * @returns Returns the array
 */
function myFunc(array) {
    array[0] = 30
    return array
}

/**
 * This is a function to test if car is Toyota or not
 * @param {*} number Specify the number
 * @returns Returns if car is Toyota or not
 */
function myCar(car){
    if(car == 'Accord')
    return brand = 'Honda'
    if(car == 'Verna')
    return brand = 'Hyundai'
    else
    return brand = 'Others'
}

sayGreeting()
sayGreetingtoPerson('Rumi')
console.log(repeatWord('Rumi', 2).length)
console.log(repeatWord('Rumi', 5))
