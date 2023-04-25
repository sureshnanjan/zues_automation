var assert = require('assert');
const { describe } = require('mocha');
describe('Testing the object utility', function () {
    describe('Repeate word test', function () {
        it('sThis should repeat the correct number of times', function () {
            assert.equal(repeatWord("Saba", 2).length, 13);
        });
        it('sThis should repeat the correct number of times', function () {
            assert.equal(repeatWord("a", 2).length, 13);
        });
    });

    describe('Testing the SayGreetings Function', function () {
        it('Greeting should correctly displayed', () => {
            assert.equal(sayGreetingPerson('saba').length == 10,true);
        });
    });
});
    describe('Testing the filereader', function () {
        it('Greeting should correctly displayed', () => {
            assert.equal(FileReader('saba').length == 10,true);
        });
    });

//Object Literal
const obj = { prob1: 'value', prob2: 'val2' }
console.log(obj.prob1)
console.log(obj['prob1'])
obj['First Name'] = 'Saba'
console.log(obj['First Name'])
/**
 * This is a method to say Greeting
 */
function sayGreeting() {
    console.log("Hello how do you do");
}

/** 
 * @param {*} person 
*/

function sayGreetingPerson(person) {
    console.log('Hello how do you do ${person}');
}
/** 
 * * This method allows me to repat the words
 * @param {*} word Word to repat
 * @param {*} times Number of time it repat
 */

function repeatWord(word, times) {
    let result1 = ''
    for (let index = 1; index <= times; index++) {
        result1 = `${word} ${word}`
        if (index < times) {
            result1 += `${word}`
        } else {
            result1 += `${word}`

        }
    }
    return result1;

}
//input-processing-output
//File not exist
//File is more than 100 char

function FileReader(path) {

}


sayGreeting();
sayGreetingPerson();
const result = sayGreetingPerson("Saba");
// Inputs - Processing - Outputs
//console.log(result1)
console.log(repeatWord("Saba", 2).length == 13) //Equal13
console.log(repeatWord("a", 5).length)