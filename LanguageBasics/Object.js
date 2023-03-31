var assert = require('assert');
describe('Testing the Object Utility', function () {
  describe('Repeat Word Test', function () {
    it('This should repeat the correct number of times', function () {
      assert.equal(repeatWord("Pooja",5).length, 29);
    });
    it('This should match the output', function () {
        assert.equal(repeatWord("a",3), 'a a a ');
      });
  });
 
});


//Object Literal
const obj = {prop1:'val1', prop2:'val2'}
console.log(obj.prop1);
console.log(obj['prop1'])
obj['First Name'] = 'Pooja'
console.log(obj['First Name'])
console.log(obj.nonexisting)
/** 
*@param{}
**/
function sayGreeting() {
    console.log("Hello! How do you do?");
   console.log('Hi ') 
}

sayGreeting();

/** 
 * This method allows me to repeast a word that many times
 * @param {*} word Word to Repeat
 * @param {*} times Number of time to repeat word
 */
function repeatWord(word,times) {
    let results = ''
    for (let index = 1; index <= times ; index++) {
        if (index<times) {
            results += `${word} `
        } else {
            results += `${word}`
        }
    }
    return results;
}

console.log(repeatWord('Pooja',5))
console.log(repeatWord('Pooja',5).length = 29)
console.log(repeatWord('a',5) == 'a a a a a')