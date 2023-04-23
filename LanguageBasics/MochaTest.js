// Creating an object with some properties
const person = {
    name: "Bob",
    age: 30,
    occupation: "Builder"
  };
  
  // Accessing and printing the value of a property
  console.log(person.name); 
  
  // Defining a function that returns a string with the input values repeated
  function repeatString(string, times) {
    let repeatedString = "";
    for (let i = 0; i < times; i++) {
      repeatedString += string;
    }
    return repeatedString;
  }
  
  // Calling the function with some inputs and printing the result to the console
  console.log(repeatString("hello", 3)); 
  
  // Writing some tests for the repeatString function using the built-in assert library
  const assert = require('assert');
  describe('Testing the repeatString function', function () {
    it('should return an empty string if the input  string is empty', function () {
      assert.equal(repeatString("", 3), "");
    });
    it('should return the input string repeated the specified number of times', function () {
      assert.equal(repeatString("hello", 5), "hellohellohellohellohello");
      assert.equal(repeatString("123", 2), "123123");
    });
  });