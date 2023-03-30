/**
 * this method allws me to repeat a word many times 
 * @param {*} word to repeat 
 * @param {*} times Number of times to repeat word 
 */

function repeatword(word,times){
    result=''
    for(let index=1;index<=times;index++){
        result += word 
    }
    return result;
}
/**This method allows to greet all*/

function saygreeting(){
    console.log("Hello , How do you do?");
}

function saygreetingtoperson(name){
    console.log("Hello How do you do?" +name)
}

/**This method calculates square of number 
 * @param  number whose square it will calculate
*/
function square(number) {
  return number * number;
}

/**This method adds the two numbers 
 * @param num1 first number
 * @param num2 second number
*/
function add(num1,num2) {
  return num1 + num2;
}

//console.log(result)
console.log(repeatword('Poorva ',4))
console.log(saygreeting())
console.log(saygreetingtoperson('Poorva'))
console.log(square(4))
console.log(add(4,15))

var assert = require('assert');
describe('Testing the object utility', function (name) {
  describe('repeat word test', function (name) {
    it('should repoeat a word correct number of times', function () {
      assert.equal(repeatword('poorva',2).length, 12);
    });
  });
});
describe('Testing square function',function(number){
  it('should calculate square of number',function() {
    assert.equal(square(4), 16);
    });
  it('should return positive value when number passed is negative', function(){
    assert.equal(square(-4),16);
    });
});
describe('Testing add function', function(){
  it('should add two numbers',function(){
    assert.equal(add(4,5),9);
  });
  it('Testing commutative property of addition',function(){
    assert.equal(add(45,8),add(8,45));
  });
  it('testing additive property of addition',function(){
    assert.equal(add(5,0),5);
  });
});
