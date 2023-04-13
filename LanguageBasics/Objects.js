/**
 * below is test driven development
 */
var assert = require('assert');
describe('Testing the object utility', function() {
    describe('Repeat word Test', function () {
        it('This should repeat the corrent number of times', function () {
            assert.equal(repeat("shubham",2).length, 15);
        });
        it('This should repeat the correct number of times', function () {
            assert.equal(repeat("Nigam",2).length, 13);
        });
        it('This should repeat the correct number of times', function () {
            assert.equal(repeat("Nigam",2).length, 12);
        });
    });
    describe('Testing the Greeting person function',function () {
        it('Greeting should be displaye correctly as output', () => {
            assert.equal(GreetPerson('Shubham').length == 10);
        });
    });
});

const obj = {prop1:'value1', prop2:'value2'}
console.log(obj.prop1)
console.log(obj['prop2'])

obj['prop'] = 'Hello';
obj['prop2'] = 'Zues';
console.log(obj['prop'])
console.log(obj.none)

/**
 * displaying the output multiple times
 */
function sayGreet() {
    console.log("Hello Zues Learner")
}
sayGreet();
sayGreet();

/**
 * 
 * @param {string} person Object used to capture name of person
 */
function GreetPerson(person) {
    console.log(`Hello! ${person}`);
}
GreetPerson("Shubham");

/**
 * Accept the word and no. of times from user to display the word for that no. of times
 * @param {string} word word to be repeated
 * @param {number} times number of times 
 */
function repeat(word, times) {
    let result = ''
    for (let index = 1; index <= times; index++) {
        result += `${word} `
    }
    return result;
}
console.log(repeat('Shubham',3))