var assert = require('assert');
const { it } = require('mocha');
describe('Testing the objects utility', function () {
  describe('Repeat Word Test', function () {
    it('word should repeat the correct number of times', function () {
      assert.equal(repeatWord("dragons",3).length, 23);
    });
    it('word should repeat the correct number of times', function () {
        assert.equal(repeatWord("zoro",5).length, 24);
      });
      it('third test', function () {
        assert.equal(repeatWord("a",12).length, 23);
      });
      describe('Testing the greetAPerson Function',function(){
        it('Greeting should correctly display',() => {
            assert.equal(greetAPerson('Jamima').length == 25);
        });
    });
  });
});




//Object Literal
const obj = {prop1: 'value1',prop2:'value2'}
console.log(obj.prop1)
console.log(obj['prop1'])
obj['first name']='Jamima'
console.log(obj['first name']) //to use in case object name has a space
console.log(obj.nonexisting) //JS treats this as 'undefined'

/**
 * This is a method to say a greeting
 */

function greeting(){
    console.log("Hello, how are you?");
}

/**
 * This is a method to say a greeting to a person
 * @param {string} person - This is a variable to store input
 */

function greetAPerson(person){
    console.log(`Hello! How are you, ${person}?`) 
}

/**
 * THis method allows me to repeat a word forgiven number of times
 * @param {*} word Word to repeat
 * @param {*} times Number of times to repeat word
 */
function repeatWord(word,times){
    result='';
    for (let index = 1; index <= times; index++) {
           
        if (index<times) {
            result+=`${word} ` 
        } else {
            result+=`${word}` 
        }
    };
    return result;
}


function FileReader(path) {

}

greeting();
greeting();
//const result = greetAPerson("Jamima"); //this will show undefined if nothing is returned in the method
//Inputs - Processing - Outputs
//console.log(result)
console.log(repeatWord('dragons',4).length == 31) //length equals 31
console.log(repeatWord('a',6).length == 6)

