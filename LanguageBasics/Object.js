/**
 * this method allows me to repeat a word many times 
 * Below it are the test cases for the same
 * @param {*} word 
 * @param {*} times 
 */

function repeatword(word,times){
    result=''
    for(let index = 1 ; index <= times ; index++){
        if(index < times){
            result += `${word} ` 
        }else{
            result += `${word}`  
        }

    }
    return result;
}
//console.log(repeatword("Neha",5).lenght == 23)

var assert = require('assert');
describe('Testing the object utility', function () {
  describe('repeat word test', function () {
    it('should repoeat a word correct number of times', function () {
      assert.equal(repeatword('Neha',5).length, 24);
    });
    it('wrong expected lenght case should fail', function () {
        assert.equal(repeatword('Neha',5).length, 25);
      });
  });
});

/**
 * This function will find factorial of a number
 * Testcases for the same function to be written using mocha framework
 * @param {*} n /Number
 * @returns /the answer
 */
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  //console.log(factorial(3)); /6
    
  describe('Factorial of a number test', function () {
      it('Factorial should be calculated correctly', function () {
        assert.equal(factorial(3), 6);
      });
      it('wrong expected the case should fail', function () {
        assert.equal(factorial(3), 9);
        });
    });
  