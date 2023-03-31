const obj = {param1: 'shivam',param2:'shivansh'}
console.log(obj.param1)
console.log(obj.param2)

/**
 * This function is written to repeat the text based on value passed
 * @param {*} name It is the string that will be repeated
 * @param {*} times It is the number of times you want to repeat the string
 * @returns The function returns the overall repeated string
 */

function repeatName(name,times) {
    result = ""
    do {
        if (times>1) {
            result = result + name + " "
        } else {
            result = result + name
        }
        times--
    } while (times>0);

    return result;
}
console.log(repeatName('shivaji',10))
console.log(repeatName('Shivaji',10).length)

var assert = require('assert');
describe('Testing the name repeat function', function () {
  describe('Repeat the name', function () {
    it('should return correct value of string length', function () {
      assert.equal(repeatName("Shivaji",5).length,39);
    });
    it('should return correct value of string length', function () {
        assert.equal(repeatName("Shivaji",10).length,79);
      });
      it('should return correct value of string length', function () {
        assert.equal(repeatName("Shivaji",10).length,80);
      });
  });
});

