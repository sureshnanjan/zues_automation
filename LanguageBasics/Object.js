
var assert = require('assert');
describe('Testing the function', function () {
  describe('RepeatWord Test', function () {
    it('This should repeat the correct number of times', function () {
      assert.equal(repeatWord('srushty',5).length, 35);
    });
    it('This should repeat the correct number of times', function () {
        assert.equal(repeatWord('a',2).length, 2);
      })
  });
});
/**
 * 
 * @param {*} word Word to repeat
 * @param {*} times Number of times to repeat the word
 */

function repeatWord(word,times)
{
    let result = ''
    for (let index = 1; index <= times; index++) {
         result += `${word}`
    }
    return result
}
console.log(repeatWord("srushty",5));

function Adding_square_and_cube_of_a_number(a) 
{
  cube = a*a*a
  square = a*a
  Addition = cube + square
  return Addition
