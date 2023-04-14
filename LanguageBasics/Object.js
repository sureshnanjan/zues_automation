//Day 7: 29 Mar 2023
var assert = require('assert');
describe('Testing the object utility', function () {
    describe('Repeat Word Test', function () {
        it('This should repeat the correct number of times', function () {
            assert.equal(repeatWord('rutuja', 2).length, 13);
        });

        it('This should repeat the correct number of times', function () {
            assert.equal(repeatWord('a', 2).length, 13);
        });
    });
});

describe('Testing another function', function () {
    it('my function inserts the value correctly', function () {
        const results = myfunc([])
        assert.equal(results[0], 30);
    });
});

/* describe('File reader test', function () {
    it('The read files should be more than 1 character', function () {
        assert.equal(fileReader());
    });
}); */

//Object literal
const obj = { prop1: 'value1', prop2: 'val2' };
console.log(obj.prop1);
console.log(obj['prop1']) //key index notation
obj['First Name'] = 'suresh';
console.log(obj['First Name']);
console.log(obj.nonexisting)//it will be undefined

/**
 * This is method to say Greeting
 */
function sayGreeting() {
    console.log('hello how do you do')
};

function sayGreetingtoPerson(person) {
    test = console.log(`hello how do you do ${person}`)
    return test
};

//File not exist
//File is more than 100 chart
function fileReader(path) {

};

function myfunc(params) {
    params[0] = 30;
    return params;
};
sayGreeting();
sayGreeting();
sayGreeting();
sayGreeting();
//const result = sayGreetingtoPerson("rutuja")
//console.log(result) //undefined value
//Input-> processing -> output

/**
 * This method allows me to repeat a word that may times
 * @param {*} word word to Repeat
 * @param {*} times Number of time to repeat word
 */
function repeatWord(word, times) {
    result = '';
    for (let index = 1; index <= times; index++) {
        if (index < times) {
            result += `${word} `;
        } else {
            result += `${word}`;
        };

    };
    return result;
};

console.log(repeatWord('rutuja', 2));
console.log(repeatWord('rutuja', 2).length);
console.log(repeatWord('rutuja', 2).length == 13);
console.log(repeatWord('a', 5) == 'aaaaa');