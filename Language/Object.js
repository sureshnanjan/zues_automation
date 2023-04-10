var assert = require('assert');
describe('This is for automation testing content', function () {
  describe('Word Repeat count', function () {
    it('This should repeat the word number of times', function () {
      assert.equal(repeatWord('Tanmay','2').length, 13);
    });
  });

  describe('Displays Cube', function () {
    it('This should display a cube of any number', function () {
      assert.equal(cube(3),27);
      assert.equal(cube(-3),-27);
    });
  });

  describe('Number Multiplication', function () {
    it('This should display a multiplication of two numbers', function () {
      assert.equal(multiply(3,5),15);
      assert.equal(multiply(-3,-5),15);
    });
  });
});




/**
 * This method allows me to repeat a word that many times
 * @param {*} word Word to repeat
 * @param {*} times No of time to repeat word
 */
function repeatWord(word,times){
    let result = ''
    for (let index = 1; index <= times; index++) {

        if (index < times) {
            result += `${word} `

        } else {
            result += `${word}`

        }
    }
    return result;
}


console.log("Testing Content")

/**
 * This method allows me to give a cube of any number
 * @param {Integer} number Number who is going to be cubed
 * @returns Cube of the number
 */
const cube = function (number) {
  return number * number * number;
};

/**
 * This method is two multiply 2 numbers
 * @param {Integer} a Number 1 to be multiplied
 * @param {Integer} b Number 2 to be multiplied
 * @returns Multiplication of both numbers
 */
function multiply(a, b ) {
  return a * b;
}

console.log(multiply(5)); // 5

const category = {id:100 , name : "repltile" }